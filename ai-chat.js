// Local data search tools
function searchPLC(query) {
    if (typeof plcData === 'undefined') return { error: "Không tìm thấy dữ liệu PLC" };
    const q = query.toLowerCase();
    const results = plcData.filter(item => 
        (item.modelNumber && item.modelNumber.toLowerCase().includes(q)) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        (item.series && item.series.toLowerCase().includes(q))
    );
    return { results: results.slice(0, 10) };
}

function searchInverter(query) {
    if (typeof inverterData === 'undefined') return { error: "Không tìm thấy dữ liệu Biến Tần" };
    const q = query.toLowerCase();
    const results = inverterData.filter(item => 
        (item.modelCode && item.modelCode.toLowerCase().includes(q)) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        (item.series && item.series.toLowerCase().includes(q))
    );
    return { results: results.slice(0, 10) };
}

function searchServo(power, comm, brake) {
    if (typeof selectionData === 'undefined') return { error: "Không tìm thấy dữ liệu Servo" };
    
    let results = selectionData;
    if (power) {
        const p = power.toLowerCase();
        results = results.filter(item => item.power && item.power.toLowerCase() === p);
    }
    if (comm) {
        const c = comm.toLowerCase();
        results = results.filter(item => item.comm && item.comm.toLowerCase().includes(c));
    }
    if (brake) {
        const b = brake.toLowerCase();
        if (b === 'with' || b === 'có phanh' || b === 'có') {
            results = results.filter(item => item.brake && item.brake.toLowerCase() === 'with');
        } else if (b === 'without' || b === 'không phanh' || b === 'không') {
            results = results.filter(item => item.brake && item.brake.toLowerCase() === 'without');
        }
    }
    return { results: results.slice(0, 10) };
}

// Tool definitions for Gemini API
const geminiTools = [
    {
        functionDeclarations: [
            {
                name: "searchPLC",
                description: "Tìm kiếm các bộ lập trình PLC Inovance dựa trên từ khóa tìm kiếm (ví dụ: số ngõ vào/ra, cổng truyền thông, dòng Easy, H5U, H3U).",
                parameters: {
                    type: "OBJECT",
                    properties: {
                        query: {
                            type: "STRING",
                            description: "Từ khóa tìm kiếm (ví dụ: 'EtherCAT', '8 input', 'Easy521', 'relay')"
                        }
                    },
                    required: ["query"]
                }
            },
            {
                name: "searchInverter",
                description: "Tìm kiếm các bộ biến tần Inovance (MD500, MD290, vv.) dựa trên các thông số như công suất, số pha, mã bộ lọc.",
                parameters: {
                    type: "OBJECT",
                    properties: {
                        query: {
                            type: "STRING",
                            description: "Từ khóa tìm kiếm (ví dụ: '2.2kW', '3 phase', 'MD500-PLUS', '0.4KW')"
                        }
                    },
                    required: ["query"]
                }
            },
            {
                name: "searchServo",
                description: "Tìm kiếm bộ điều khiển servo và động cơ servo Inovance (SV660, SV680, vv.) dựa trên công suất, chuẩn truyền thông và tùy chọn phanh.",
                parameters: {
                    type: "OBJECT",
                    properties: {
                        power: {
                            type: "STRING",
                            description: "Công suất servo (ví dụ: '50W', '100W', '400W', '750W')"
                        },
                        comm: {
                            type: "STRING",
                            description: "Mạng truyền thông (ví dụ: 'EtherCAT', 'Profinet', 'Pulse', 'CANopen')"
                        },
                        brake: {
                            type: "STRING",
                            description: "Tùy chọn phanh (ví dụ: 'With' hoặc 'Without')"
                        }
                    }
                }
            }
        ]
    }
];

// Conversation history
let chatHistory = [];

// Markdown parsing to HTML helper
function formatMarkdown(text) {
    let escaped = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    const lines = escaped.split('\n');
    let result = [];
    let inTable = false;
    let tableRows = [];
    let inList = false;
    let inCodeBlock = false;
    let codeContent = [];

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        let trimmed = line.trim();

        // 1. Code Block Handler
        if (trimmed.startsWith('```')) {
            if (inCodeBlock) {
                result.push(`<pre><code>${codeContent.join('\n')}</code></pre>`);
                codeContent = [];
                inCodeBlock = false;
            } else {
                inCodeBlock = true;
            }
            continue;
        }

        if (inCodeBlock) {
            codeContent.push(line);
            continue;
        }

        // 2. Table Handler
        if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
            if (inList) {
                result.push('</ul>');
                inList = false;
            }
            if (trimmed.match(/^\|[\s-|-]*\|$/)) {
                continue; // Skip divider row
            }
            inTable = true;
            const cells = trimmed.split('|').slice(1, -1).map(c => c.trim());
            tableRows.push(cells);
            continue;
        } else {
            if (inTable) {
                result.push(compileHTMLTable(tableRows));
                tableRows = [];
                inTable = false;
            }
        }

        // 3. Unordered List Handler
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
            if (!inList) {
                result.push('<ul>');
                inList = true;
            }
            let content = trimmed.substring(2);
            content = parseInlineMarkdown(content);
            result.push(`<li>${content}</li>`);
            continue;
        } else {
            if (inList) {
                result.push('</ul>');
                inList = false;
            }
        }

        // 4. Standard Paragraph
        if (trimmed === '') {
            result.push('<br>');
        } else {
            let processedLine = parseInlineMarkdown(trimmed);
            result.push(`<p>${processedLine}</p>`);
        }
    }

    if (inCodeBlock) {
        result.push(`<pre><code>${codeContent.join('\n')}</code></pre>`);
    }
    if (inTable) {
        result.push(compileHTMLTable(tableRows));
    }
    if (inList) {
        result.push('</ul>');
    }

    return result.join('\n').replace(/<p><\/p>/g, '').replace(/<br>\n<br>/g, '<br>');
}

function parseInlineMarkdown(text) {
    let html = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    return html;
}

function compileHTMLTable(rows) {
    if (rows.length === 0) return '';
    let html = '<table>';
    html += '<thead><tr>';
    rows[0].forEach(cell => {
        html += `<th>${cell}</th>`;
    });
    html += '</tr></thead>';
    html += '<tbody>';
    for (let r = 1; r < rows.length; r++) {
        html += '<tr>';
        rows[r].forEach(cell => {
            html += `<td>${cell}</td>`;
        });
        html += '</tr>';
    }
    html += '</tbody></table>';
    return html;
}

// Call Gemini API
async function callGeminiAPI(apiKey, messages, tools) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    
    const requestBody = {
        contents: messages,
        systemInstruction: {
            parts: [{
                text: "Bạn là Trợ Lý AI chuyên nghiệp, thân thiện của hệ thống thiết bị tự động hóa INOVANCE. Nhiệm vụ của bạn là tư vấn, giải đáp thắc mắc và hỗ trợ người dùng tìm kiếm, lựa chọn mã thiết bị (PLC, Biến Tần, Servo) dựa trên cơ sở dữ liệu có sẵn thông qua các công cụ tìm kiếm được cung cấp. Hãy trả lời thân thiện, ngắn gọn, bằng tiếng Việt. Sử dụng bảng và danh sách để hiển thị danh sách thiết bị một cách rõ ràng. Hãy gợi ý tìm kiếm cụ thể khi trả lời."
            }]
        }
    };
    
    if (tools) {
        requestBody.tools = tools;
    }
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
}

// Manage conversation stream/loops
async function getAIResponse(userMessageText) {
    let apiKey = localStorage.getItem('gemini_api_key');
    if (!apiKey) {
        return "Vui lòng cấu hình Gemini API Key bằng cách click vào biểu tượng răng cưa ⚙️ ở góc trên bên phải khung chat.";
    }
    
    chatHistory.push({
        role: 'user',
        parts: [{ text: userMessageText }]
    });

    let maxLoops = 5;
    while (maxLoops > 0) {
        try {
            const apiResponse = await callGeminiAPI(apiKey, chatHistory, geminiTools);
            const candidate = apiResponse.candidates?.[0];
            const content = candidate?.content;
            const parts = content?.parts || [];
            
            const functionCalls = parts.filter(p => p.functionCall);
            
            if (functionCalls.length > 0) {
                chatHistory.push(content);
                
                const functionResponseParts = [];
                for (const part of functionCalls) {
                    const call = part.functionCall;
                    let result = {};
                    try {
                        if (call.name === 'searchPLC') {
                            result = searchPLC(call.args.query);
                        } else if (call.name === 'searchInverter') {
                            result = searchInverter(call.args.query);
                        } else if (call.name === 'searchServo') {
                            result = searchServo(call.args.power, call.args.comm, call.args.brake);
                        }
                    } catch (err) {
                        result = { error: err.message };
                    }
                    
                    functionResponseParts.push({
                        functionResponse: {
                            name: call.name,
                            response: result
                        }
                    });
                }
                
                chatHistory.push({
                    role: 'function',
                    parts: functionResponseParts
                });
                
                maxLoops--;
                continue;
            }
            
            const textResponse = parts.find(p => p.text)?.text || "Xin lỗi, tôi gặp lỗi khi xử lý câu trả lời.";
            chatHistory.push(content);
            return textResponse;
            
        } catch (error) {
            console.error("Gemini API Error:", error);
            chatHistory.pop(); // Remove the failed turn
            
            // Try to fetch available models to diagnose the issue
            try {
                const diagResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
                if (diagResponse.ok) {
                    const diagData = await diagResponse.json();
                    const modelNames = diagData.models ? diagData.models.map(m => m.name.replace('models/', '')).join(', ') : 'none';
                    return `⚠️ Lỗi kết nối với AI: ${error.message}.\n\n**Các mô hình khả dụng với Key của bạn:** ${modelNames}`;
                }
            } catch (diagErr) {
                console.error("Diagnostics failed:", diagErr);
            }
            
            return `⚠️ Đã xảy ra lỗi khi kết nối với AI: ${error.message}. Vui lòng kiểm tra lại kết nối mạng hoặc API Key của bạn.`;
        }
    }
    
    return "Đã vượt quá số lượng cuộc gọi hàm tối đa. Vui lòng thử lại.";
}

// UI Setup and Controller
document.addEventListener('DOMContentLoaded', () => {
    const chatBtn = document.getElementById('ai-chat-btn');
    const chatWindow = document.getElementById('ai-chat-window');
    const chatCloseBtn = document.getElementById('ai-chat-close-btn');
    const settingsToggle = document.getElementById('ai-settings-toggle');
    const settingsOverlay = document.getElementById('ai-settings-overlay');
    const apiKeyInput = document.getElementById('ai-api-key');
    const saveKeyBtn = document.getElementById('ai-save-key-btn');
    const chatBody = document.getElementById('ai-chat-body');
    const chatInput = document.getElementById('ai-chat-input');
    const sendBtn = document.getElementById('ai-send-btn');
    
    if (!chatBtn || !chatWindow || !chatCloseBtn || !settingsToggle || !settingsOverlay || !apiKeyInput || !saveKeyBtn || !chatBody || !chatInput || !sendBtn) {
        console.error("AI Chat elements are missing in the DOM");
        return;
    }

    // Toggle Chat Window
    chatBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('show');
        if (chatWindow.classList.contains('show')) {
            chatInput.focus();
            scrollToBottom();
        }
    });

    // Close Chat Window
    chatCloseBtn.addEventListener('click', () => {
        chatWindow.classList.remove('show');
    });

    // Toggle Settings Overlay
    settingsToggle.addEventListener('click', () => {
        settingsOverlay.classList.toggle('show');
        if (settingsOverlay.classList.contains('show')) {
            const savedKey = localStorage.getItem('gemini_api_key') || '';
            apiKeyInput.value = savedKey;
            apiKeyInput.focus();
        }
    });

    // Save API Key
    saveKeyBtn.addEventListener('click', () => {
        const key = apiKeyInput.value.trim();
        if (key) {
            localStorage.setItem('gemini_api_key', key);
            alert("Đã lưu API Key thành công!");
            settingsOverlay.classList.remove('show');
        } else {
            localStorage.removeItem('gemini_api_key');
            alert("Đã xóa API Key.");
            settingsOverlay.classList.remove('show');
        }
    });

    // Send message on click
    sendBtn.addEventListener('click', sendMessage);

    // Send message on Enter keypress
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function scrollToBottom() {
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function appendMessage(sender, text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `ai-chat-msg ${sender}`;
        
        if (sender === 'assistant') {
            msgDiv.innerHTML = formatMarkdown(text);
        } else {
            msgDiv.textContent = text;
        }
        
        chatBody.appendChild(msgDiv);
        scrollToBottom();
    }

    function showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'ai-typing-indicator';
        indicator.id = 'ai-typing-indicator';
        indicator.innerHTML = `
            <div class="ai-typing-dot"></div>
            <div class="ai-typing-dot"></div>
            <div class="ai-typing-dot"></div>
        `;
        chatBody.appendChild(indicator);
        scrollToBottom();
    }

    function removeTypingIndicator() {
        const indicator = document.getElementById('ai-typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    async function sendMessage() {
        const messageText = chatInput.value.trim();
        if (!messageText) return;

        // Clear input and disable controls
        chatInput.value = '';
        chatInput.disabled = true;
        sendBtn.disabled = true;

        // Append user message to chat UI
        appendMessage('user', messageText);

        // Show typing indicator
        showTypingIndicator();

        // Get AI Response
        const aiResponse = await getAIResponse(messageText);

        // Remove typing indicator
        removeTypingIndicator();

        // Append assistant response to UI
        appendMessage('assistant', aiResponse);

        // Re-enable controls
        chatInput.disabled = false;
        sendBtn.disabled = false;
        chatInput.focus();
    }
});
