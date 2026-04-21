// Products Data
const products = [
    {
        id: 1,
        title: "Động Cơ Servo INOVANCE",
        category: "servo",
        categoryLabel: "Servo",
        desc: "Hệ thống Servo INOVANCE cao cấp (dòng SV660/SV680) nổi tiếng với độ ổn định và chính xác cao. [Ấn vào đây để Tra cứu mã Servo].",
        img: "https://stagro.com.vn/wp-content/uploads/2025/12/motor-servo-MS1H1-05B30CB-A330Z-INT-600x600.jpg",
        openSelectionTool: true,
        specs: {
            "Dòng": "SV660 / SV680",
            "Mạng truyền thông": "EtherCAT, CANopen, Pulse",
            "Ứng dụng": "Tốc độ cao, độ chính xác cao"
        }
    },
    {
        id: 2,
        title: "Biến Tần INOVANCE",
        category: "inverter",
        categoryLabel: "Biến Tần",
        desc: "Dòng biến tần vector hiệu suất cao, điều khiển cực kỳ chính xác. [Ấn vào đây để Tra cứu mã Biến Tần].",
        img: "assets/inverter.png",
        openSelectionTool: true, // Enable selection tool for inverter
        specs: {
            "Công Suất": "0.4kW - 500kW",
            "Điện Áp": "1 Pha 220V / 3 Pha 380V",
            "Tính Năng": "PID control, V/F & Vector control"
        }
    },
    {
        id: 3,
        title: "PLC INOVANCE",
        category: "plc",
        categoryLabel: "PLC",
        desc: "Dòng PLC thế hệ mới tích hợp IIoT (Industrial IoT), vi xử lý kép giúp máy vận hành siêu nhanh. [Ấn vào đây để Tra cứu mã PLC].",
        img: "https://stagro.com.vn/wp-content/uploads/2025/12/PLC-522-600x527.png",
        openSelectionTool: true,
        specs: {
            "Số I/O Tối Đa": "2048 điểm",
            "Bộ Nhớ Chương Trình": "64k Steps",
            "Tích hợp": "Ethernet, RS485, CANopen"
        }
    },
    {
        id: 4,
        title: "Tạo Báo Giá / Xuất Excel",
        category: "export",
        categoryLabel: "Export",
        desc: "Công cụ tìm kiếm và lọc tổng hợp toàn bộ sản phẩm INOVANCE. Cho phép xuất cấu hình ra file Excel chuyên nghiệp.",
        img: "https://www.freeiconspng.com/uploads/excel-icon-10.png",
        openSelectionTool: true,
        specs: {
            "Tính năng": "Tìm kiếm Master",
            "Định dạng": "Excel (.xlsx)",
            "Dữ liệu": "Servo, Biến Tần, PLC"
        }
    }
];

// Elements
const productGrid = document.getElementById('product-grid');
const gridContainer = productGrid; // alias
const selectionToolContainer = document.getElementById('selection-tool');
const modal = document.getElementById('product-modal');
const closeBtn = document.querySelector('.close-btn');
const modalImg = document.getElementById('modal-img');
const modalCategory = document.getElementById('modal-category');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalSpecs = document.getElementById('modal-specs');

// Render Products
function renderProducts() {
    gridContainer.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${product.img}" alt="${product.title}">
            </div>
            <div class="card-content">
                <span class="badge ${product.category}">${product.categoryLabel}</span>
                <h3 class="card-title">${product.title}</h3>
                <p class="card-desc">${product.desc.substring(0, 85)}...</p>
            </div>
        `;
        
        card.addEventListener('click', () => {
            if (product.openSelectionTool) {
                // Mở công cụ tra cứu theo Dòng thiết bị
                gridContainer.style.display = 'none';
                selectionToolContainer.style.display = 'flex';
                setupSelectionTool(product.category);
            } else {
                openModal(product);
            }
        });
        gridContainer.appendChild(card);
    });
}

// -----------------------------------------------------
// LỌC DỮ LIỆU BẢNG (SELECTION TOOL LOGIC)
// -----------------------------------------------------

// Filter Elements
const filterSeries = document.getElementById('filter-series');
const filterPower = document.getElementById('filter-power');
const filterBrake = document.getElementById('filter-brake');
const filterComm = document.getElementById('filter-comm');
const filterPhase = document.getElementById('filter-phase');
const filterModel = document.getElementById('filter-model');
const filterCategory = document.getElementById('filter-category');
const btnReset = document.getElementById('btn-reset');
const btnExportExcel = document.getElementById('btn-export-excel');
const btnBack = document.getElementById('btn-back');
const resultsTbody = document.getElementById('results-tbody');
const noResults = document.getElementById('no-results');
const resultsTable = document.getElementById('results-table');
const resultsThead = document.getElementById('results-thead');

// Wrapper Elements
const powerWrapper = document.getElementById('filter-power-wrapper');
const brakeWrapper = document.getElementById('filter-brake-wrapper');
const commWrapper = document.getElementById('filter-comm-wrapper');
const phaseWrapper = document.getElementById('filter-phase-wrapper');
const modelWrapper = document.getElementById('filter-model-wrapper');
const categoryWrapper = document.getElementById('filter-category-wrapper');
const seriesWrapper = document.getElementById('filter-series-wrapper');

let currentToolType = '';
let masterData = [];

function buildMasterData() {
    masterData = [];
    selectionData.forEach(item => {
        masterData.push({
            category: 'servo',
            categoryLabel: 'Servo',
            series: item.series,
            mainCode: item.motorCode || '-',
            aux1: item.driveCode || '-',
            aux2: item.cableCode || '-',
            aux3: item.encoderCable || '-',
            searchStr: (item.motorCode + " " + item.driveCode + " " + item.series).toLowerCase()
        });
    });
    inverterData.forEach(item => {
        masterData.push({
            category: 'inverter',
            categoryLabel: 'Biến Tần',
            series: item.series,
            mainCode: item.modelCode || '-',
            aux1: item.description || '-',
            aux2: item.acInputReactor || '-',
            aux3: item.brakingResistor || '-',
            searchStr: (item.modelCode + " " + item.description + " " + item.series).toLowerCase()
        });
    });
    plcData.forEach(item => {
        masterData.push({
            category: 'plc',
            categoryLabel: 'PLC',
            series: item.series,
            mainCode: item.modelNumber || '-',
            aux1: item.description || '-',
            aux2: '-',
            aux3: '-',
            searchStr: (item.modelNumber + " " + item.description + " " + item.series).toLowerCase()
        });
    });
}

function setupSelectionTool(type) {
    currentToolType = type;
    
    // Clear Existing Configs
    filterSeries.innerHTML = '<option value="">-- Tất cả --</option>';
    filterPower.innerHTML = '<option value="">-- Tất cả --</option>';
    filterBrake.innerHTML = '<option value="">-- Tất cả --</option>';
    filterComm.innerHTML = '<option value="">-- Tất cả --</option>';
    filterPhase.innerHTML = '<option value="">-- Tất cả --</option>';
    filterModel.innerHTML = '<option value="">-- Tất cả --</option>';
    filterCategory.innerHTML = '<option value="">-- Tất cả --</option>';
    
    // Hide buttons by default, except when in export tool
    btnExportExcel.style.display = 'none';

    let seriesSet = new Set();
    let powerSet = new Set();
    
    if (type === 'servo') {
        powerWrapper.style.display = 'flex';
        brakeWrapper.style.display = 'flex';
        commWrapper.style.display = 'flex';
        phaseWrapper.style.display = 'none';
        modelWrapper.style.display = 'none';
        categoryWrapper.style.display = 'none';
        
        resultsThead.innerHTML = `
            <tr>
                <th>Mã Động Cơ (Motor Code)</th>
                <th>Mã Driver (Drive Code)</th>
                <th>Mã Dây Diện (Cable)</th>
                <th>Mã Dây Encoder</th>
            </tr>
        `;
        
        let brakeSet = new Set();
        let commSet = new Set();
        
        selectionData.forEach(item => {
            if (item.series) seriesSet.add(item.series);
            if (item.power) powerSet.add(item.power);
            if (item.brake) brakeSet.add(item.brake);
            if (item.comm) commSet.add(item.comm);
        });

        // Add brake custom naming
        brakeSet.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt;
            if (opt === "Without") option.textContent = "Không thắng (Without)";
            else if (opt === "With") option.textContent = "Có thắng (With)";
            else option.textContent = opt;
            filterBrake.appendChild(option);
        });

        const commArr = Array.from(commSet).sort();
        commArr.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt;
            option.textContent = opt;
            filterComm.appendChild(option);
        });

    } else if (type === 'inverter') {
        brakeWrapper.style.display = 'none';
        commWrapper.style.display = 'none';
        phaseWrapper.style.display = 'flex';
        
        resultsThead.innerHTML = `
            <tr>
                <th>Mã Đặt Hàng (Model Code)</th>
                <th>Thông số (Description)</th>
                <th>Cuộn Kháng Đầu Vào (Input Reactor)</th>
                <th>Điện Trở Xả (Braking Resistor)</th>
            </tr>
        `;
        
        let phaseSet = new Set();
        
        inverterData.forEach(item => {
            if (item.series) seriesSet.add(item.series);
            if (item.phase) phaseSet.add(item.phase);
        });

        const phaseArr = Array.from(phaseSet).sort();
        phaseArr.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt;
            option.textContent = opt;
            filterPhase.appendChild(option);
        });
    } else if (type === 'plc') {
        powerWrapper.style.display = 'none';
        brakeWrapper.style.display = 'none';
        commWrapper.style.display = 'none';
        phaseWrapper.style.display = 'none';
        modelWrapper.style.display = 'flex';
        categoryWrapper.style.display = 'none';
        
        resultsThead.innerHTML = `
            <tr>
                <th>Mã Model (Model Number)</th>
                <th>Thông số (Description)</th>
            </tr>
        `;
        
        plcData.forEach(item => {
            if (item.series) seriesSet.add(item.series);
        });
    } else if (type === 'export') {
        powerWrapper.style.display = 'none';
        brakeWrapper.style.display = 'none';
        commWrapper.style.display = 'none';
        phaseWrapper.style.display = 'none';
        modelWrapper.style.display = 'none';
        categoryWrapper.style.display = 'flex';
        btnExportExcel.style.display = 'block';
        
        resultsThead.innerHTML = `
            <tr>
                <th>Ngành hàng (Category)</th>
                <th>Mã Sản Phẩm (Main Code)</th>
                <th>Thông số bổ trợ 1</th>
                <th>Thông số bổ trợ 2</th>
                <th>Tùy chọn bổ trợ</th>
            </tr>
        `;
        
        // Populate series purely from filterCategory if any, or all
        masterData.forEach(item => {
            if (item.series) seriesSet.add(item.series);
        });
    }

    const seriesArr = Array.from(seriesSet).sort();
    seriesArr.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt;
        option.textContent = opt;
        filterSeries.appendChild(option);
    });

    // Initial popupate of Power based on selected series
    updateDynamicFilters();

    // Auto load data for current tool
    filterSelectionData();
}

function updateDynamicFilters() {
    const s_series = filterSeries.value;
    const currentPowerVal = filterPower.value;
    const currentPhaseVal = filterPhase.value;
    const currentModelVal = filterModel.value;
    
    let dataset = currentToolType === 'servo' ? selectionData : (currentToolType === 'inverter' ? inverterData : (currentToolType === 'plc' ? plcData : masterData));
    let powerSet = new Set();
    let phaseSet = new Set();
    let modelSet = new Set();
    
    dataset.forEach(item => {
        // If export tool and category is selected, we filter out dataset dynamically
        const catValue = filterCategory.value;
        const matchesCategory = currentToolType !== 'export' || catValue === "" || item.category === catValue;
        
        if (matchesCategory && (s_series === "" || item.series === s_series)) {
            if (currentToolType !== 'plc' && currentToolType !== 'export' && item.power && item.power !== '-') powerSet.add(item.power);
            if (currentToolType === 'inverter' && item.phase) phaseSet.add(item.phase);
            if (currentToolType === 'plc' && item.modelNumber) modelSet.add(item.modelNumber);
        }
    });

    filterPower.innerHTML = '<option value="">-- Tất cả --</option>';
    if (currentToolType === 'inverter') {
        filterPhase.innerHTML = '<option value="">-- Tất cả --</option>';
    }
    if (currentToolType === 'plc') {
        filterModel.innerHTML = '<option value="">-- Tất cả --</option>';
    }

    const sortedPowers = Array.from(powerSet).sort((a, b) => {
        let valA = parseFloat(a) || 0;
        let valB = parseFloat(b) || 0;
        if (a.toLowerCase().includes('k')) valA *= 1000;
        if (b.toLowerCase().includes('k')) valB *= 1000;
        return valA - valB;
    });

    let keepSelected = false;
    sortedPowers.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt;
        
        // Append kW for inverter if it's missing a generic w/W designator
        if (currentToolType === 'inverter' && !opt.toLowerCase().includes('w')) {
            option.textContent = opt + " kW";
        } else {
            option.textContent = opt;
        }

        filterPower.appendChild(option);
        if (opt === currentPowerVal) keepSelected = true;
    });

    if (keepSelected) {
        filterPower.value = currentPowerVal;
    } else {
        filterPower.value = '';
    }

    if (currentToolType === 'inverter') {
        let keepSelectedPhase = false;
        const sortedPhases = Array.from(phaseSet).sort();
        
        sortedPhases.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt;
            option.textContent = opt;
            filterPhase.appendChild(option);
            if (opt === currentPhaseVal) keepSelectedPhase = true;
        });

        if (keepSelectedPhase) {
            filterPhase.value = currentPhaseVal;
        } else {
            filterPhase.value = '';
        }
    }
    
    if (currentToolType === 'plc') {
        let keepSelectedModel = false;
        const sortedModels = Array.from(modelSet).sort();
        
        sortedModels.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt;
            option.textContent = opt;
            filterModel.appendChild(option);
            if (opt === currentModelVal) keepSelectedModel = true;
        });

        if (keepSelectedModel) {
            filterModel.value = currentModelVal;
        } else {
            filterModel.value = '';
        }
    }
}

const filtersArr = [filterPower, filterBrake, filterComm, filterPhase, filterModel, filterCategory];
filtersArr.forEach(f => {
    f.addEventListener('change', filterSelectionData);
});

const searchInput = document.getElementById('search-model');
searchInput.addEventListener('input', filterSelectionData);

filterSeries.addEventListener('change', () => {
    updateDynamicFilters();
    filterSelectionData();
});

btnReset.addEventListener('click', () => {
    filterSeries.value = '';
    searchInput.value = '';
    updateDynamicFilters();
    filtersArr.forEach(f => f.value = '');
    filterSelectionData();
});

btnBack.addEventListener('click', () => {
    selectionToolContainer.style.display = 'none';
    gridContainer.style.display = 'grid';
});

function filterSelectionData() {
    const s_series = filterSeries.value;
    const s_power = filterPower.value;
    const s_brake = filterBrake.value;
    const s_comm = filterComm.value;
    const s_phase = filterPhase.value;
    const s_category = filterCategory.value;
    const s_search = searchInput.value.toLowerCase().trim();

    let filtered = [];

    if (currentToolType === 'servo') {
        filtered = selectionData.filter(item => {
            const matchesSearch = s_search === "" || 
                                  (item.driveCode && item.driveCode.toLowerCase().includes(s_search)) || 
                                  (item.motorCode && item.motorCode.toLowerCase().includes(s_search));
            
            return matchesSearch &&
                   (s_series === "" || item.series === s_series) &&
                   (s_power === "" || item.power === s_power) &&
                   (s_brake === "" || item.brake === s_brake) &&
                   (s_comm === "" || item.comm === s_comm);
        });
    } else if (currentToolType === 'inverter') {
        filtered = inverterData.filter(item => {
            const matchesSearch = s_search === "" || 
                                  (item.modelNumber && item.modelNumber.toLowerCase().includes(s_search)) || 
                                  (item.description && item.description.toLowerCase().includes(s_search));
                                  
            return matchesSearch &&
                   (s_series === "" || item.series === s_series) &&
                   (s_power === "" || item.power === s_power) &&
                   (s_phase === "" || item.phase === s_phase);
        });
    } else if (currentToolType === 'plc') {
        const s_model = filterModel.value;
        filtered = plcData.filter(item => {
            const matchesSearch = s_search === "" || 
                                  (item.modelNumber && item.modelNumber.toLowerCase().includes(s_search)) || 
                                  (item.description && item.description.toLowerCase().includes(s_search));
            
            return matchesSearch &&
                   (s_series === "" || item.series === s_series) &&
                   (s_model === "" || item.modelNumber === s_model);
        });
    } else if (currentToolType === 'export') {
        filtered = masterData.filter(item => {
            const matchesSearch = s_search === "" || item.searchStr.includes(s_search);
            const matchesCategory = s_category === "" || item.category === s_category;
            return matchesSearch && matchesCategory && (s_series === "" || item.series === s_series);
        });
    }

    renderTable(filtered);
}

function renderTable(data, showAll = false) {
    resultsTbody.innerHTML = '';
    
    if (data.length === 0) {
        resultsTable.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        resultsTable.style.display = 'table';
        noResults.style.display = 'none';
        
        const limit = 15;
        const displayData = showAll ? data : data.slice(0, limit);
        
        displayData.forEach(item => {
            const tr = document.createElement('tr');
            
            if (currentToolType === 'servo') {
                let pCable = item.cableCode && item.cableCode !== "-" ? item.cableCode : "-";
                let eCable = item.encoderCable && item.encoderCable !== "-" ? item.encoderCable : "-";

                const mc = item.motorCode || "";
                
                // Phân tích công suất MS1H2/MS1H3
                const powerStr = item.power || "";
                let powerW = 0;
                if (powerStr.toLowerCase().includes('k')) {
                    powerW = parseFloat(powerStr) * 1000;
                } else if (powerStr.toLowerCase().includes('w')) {
                    powerW = parseFloat(powerStr);
                }

                if (mc.startsWith("MS1H2")) {
                    if (item.brake === "Without") eCable = "S6-L-P121-5.0-INT";
                    if (powerW <= 3000) {
                        pCable = item.brake === "Without" ? "S6-L-M111-5.0-INT" : "S6-L-B111-5.0-INT";
                    } else if (powerW === 4000 || powerW === 5000) {
                        pCable = item.brake === "Without" ? "S6-L-M011-5.0-INT" : "S6-L-B011-5.0-INT";
                    }
                } else if (mc.startsWith("MS1H3")) {
                    if (item.brake === "Without") eCable = "S6-L-P121-5.0-INT";
                    if (powerW <= 1800) {
                        pCable = item.brake === "Without" ? "S6-L-M111-5.0-INT" : "S6-L-B111-5.0-INT";
                    } else if (powerW === 2900) {
                        pCable = item.brake === "Without" ? "S6-L-M112-5.0-INT" : "S6-L-B112-5.0-INT";
                    } else if (powerW === 4400 || powerW === 5500 || powerW === 7500) {
                        pCable = item.brake === "Without" ? "S6-L-M022-5.0-INT" : "S6-L-B022-5.0-INT";
                    }
                } else if (mc.startsWith("MS1H1") || mc.startsWith("MS1H4")) {
                    eCable = "S6-L-P125-5.0-INT";
                    if (item.brake === "Without") pCable = "S6-L-M108-5.0-INT";
                    else if (item.brake === "With") pCable = "S6-L-B108-5.0-INT";
                }

                tr.innerHTML = `
                    <td class="code-highlight" style="color: #0f172a;">${mc || '-'}</td>
                    <td class="code-highlight" style="color: #e11d48;">${item.driveCode || '-'}</td>
                    <td class="code-highlight" style="color: #b45309;">${pCable}</td>
                    <td class="code-highlight" style="color: #2563eb;">${eCable}</td>
                `;
            } else if (currentToolType === 'inverter') {
                tr.innerHTML = `
                    <td class="code-highlight" style="color: #c2410c;">${item.modelCode || '-'}</td>
                    <td style="color: #475569; font-size: 0.95rem;">${item.description || '-'}</td>
                    <td class="code-highlight" style="color: #0f172a;">${item.acInputReactor || '-'}</td>
                    <td class="code-highlight" style="color: #2563eb;">${item.brakingResistor || '-'}</td>
                `;
            } else if (currentToolType === 'plc') {
                tr.innerHTML = `
                    <td class="code-highlight" style="color: #059669;">${item.modelNumber || '-'}</td>
                    <td style="color: #475569; font-size: 0.95rem; line-height: 1.5;">${item.description || '-'}</td>
                `;
            } else if (currentToolType === 'export') {
                tr.innerHTML = `
                    <td><span class="badge ${item.category}" style="display:inline-block; font-size: 0.8rem;">${item.categoryLabel}</span></td>
                    <td class="code-highlight" style="color: #059669;">${item.mainCode || '-'}</td>
                    <td style="color: #475569; font-size: 0.9rem; line-height: 1.5;">${item.aux1 || '-'}</td>
                    <td style="color: #475569; font-size: 0.9rem;">${item.aux2 || '-'}</td>
                    <td style="color: #475569; font-size: 0.9rem;">${item.aux3 || '-'}</td>
                `;
            }
            
            resultsTbody.appendChild(tr);
        });
        
        if (!showAll && data.length > limit) {
             const tr = document.createElement('tr');
             const colCount = currentToolType === 'servo' || currentToolType === 'inverter' ? 4 : (currentToolType === 'export' ? 5 : 2);
             tr.innerHTML = `<td colspan="${colCount}" style="text-align:center; padding:20px; background:rgba(255,255,255,0.5);">
                 <p style="margin-bottom: 12px; color:#64748b; font-size:0.95rem; font-style:italic;">
                    Còn hơn <b>${data.length - limit}</b> kết quả khác.
                 </p>
                 <button id="btn-show-all" class="btn-primary" style="padding: 10px 25px; border-radius: 10px; font-size: 0.95rem; cursor: pointer;">
                    Xem chi tiết tất cả kết quả
                 </button>
             </td>`;
             resultsTbody.appendChild(tr);
             
             document.getElementById('btn-show-all').addEventListener('click', () => {
                 renderTable(data, true);
             });
        }
    }
}

// Modal Functions
function openModal(product) {
    modalImg.src = product.img;
    modalCategory.className = `badge ${product.category}`;
    modalCategory.textContent = product.categoryLabel;
    modalTitle.textContent = product.title;
    modalDesc.textContent = product.desc;
    
    modalSpecs.innerHTML = '';
    for (const [key, value] of Object.entries(product.specs)) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${key}</span> <span>${value}</span>`;
        modalSpecs.appendChild(li);
    }
    
    modal.classList.add('show');
}

function setupModalEvents() {
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}

// Falling Stars Effect
function createStars() {
    const stellarBg = document.getElementById('stellar-bg');
    if (!stellarBg) return;
    const starCount = 30; // Vừa đủ lấp lánh không bị rối
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'falling-star';
        // Randomize position
        star.style.left = `${Math.random() * 100}vw`;
        // Randomize speed
        star.style.animationDuration = `${5 + Math.random() * 8}s`;
        // Randomize delay to stagger them
        star.style.animationDelay = `${Math.random() * -10}s`;
        
        // Randomize size
        const size = Math.random() * 3 + 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.opacity = Math.random() * 0.5 + 0.3;
        
        stellarBg.appendChild(star);
    }
}

// Excel Export Function
btnExportExcel.addEventListener('click', exportToExcel);

function exportToExcel() {
    if (!window.XLSX) {
        alert("Thư viện Excel đang tải, vui lòng thử lại sau 1-2 giây!");
        return;
    }
    
    // We export whatever is currently displayed, but we should export ALL matching records, not just 'limit'
    // Let's filter again based on current inputs to get the full list
    const s_series = filterSeries.value;
    const s_category = filterCategory.value;
    const s_search = searchInput.value.toLowerCase().trim();

    let exportData = masterData.filter(item => {
        const matchesSearch = s_search === "" || item.searchStr.includes(s_search);
        const matchesCategory = s_category === "" || item.category === s_category;
        return matchesSearch && matchesCategory && (s_series === "" || item.series === s_series);
    });
    
    if (exportData.length === 0) {
        alert("Không có dữ liệu nào để xuất!");
        return;
    }
    
    // Convert to Excel friendly format
    const excelRows = exportData.map(item => {
        // Remove <br> from descriptions and replace with space or newline
        const cleanAux1 = typeof item.aux1 === 'string' ? item.aux1.replace(/<br>/g, " \n ") : item.aux1;
        return {
            "Ngành Hàng": item.categoryLabel,
            "Dòng Thiết Bị (Series)": item.series,
            "Mã Thiết Bị (Main Code)": item.mainCode,
            "Thông Số Bổ Trợ 1": cleanAux1,
            "Thông Số Bổ Trợ 2": item.aux2,
            "Thông Số Bổ Trợ 3": item.aux3
        };
    });
    
    const worksheet = XLSX.utils.json_to_sheet(excelRows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "DanhSachThietBi");
    
    // Auto fit columns roughly
    const wscols = [
        {wch: 15}, // Ngành Hàng
        {wch: 20}, // Series
        {wch: 35}, // Main Code
        {wch: 60}, // Aux 1
        {wch: 25}, // Aux 2
        {wch: 25}  // Aux 3
    ];
    worksheet['!cols'] = wscols;

    const today = new Date();
    const dateStr = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
    XLSX.writeFile(workbook, `INOVANCE_Danh_Sach_Thiet_Bi_${dateStr}.xlsx`);
}

// Initialize App
function init() {
    buildMasterData();
    renderProducts();
    setupModalEvents();
    createStars();
}

document.addEventListener('DOMContentLoaded', init);
