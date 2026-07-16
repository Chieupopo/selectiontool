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
        img: "Excel.jpg",
        openSelectionTool: true,
        specs: {
            "Tính năng": "Tìm kiếm Master",
            "Định dạng": "Excel (.xlsx)",
            "Dữ liệu": "Servo, Biến Tần, PLC"
        }
    },
    {
        id: 5,
        title: "Chọn Sylinder Electric",
        category: "cylinder",
        categoryLabel: "Cylinder",
        desc: "Tra cứu mô hình 3D Xy lanh điện (Electric Cylinder) trực quan. [Ấn vào đây để xem 3D].",
        img: "https://stagro.com.vn/wp-content/uploads/2025/12/motor-servo-MS1H1-05B30CB-A330Z-INT-600x600.jpg", // Using servo img temporarily, user can change it
        openIframe: true,
        specs: {
            "Hiển thị": "Mô hình 3D (3dfindit)",
            "Ứng dụng": "Electric Cylinder",
            "Công cụ": "Web_Test.html"
        }
    },
    {
        id: 6,
        title: "Sổ Tay Ghi Chép Dự Án",
        category: "notes",
        categoryLabel: "Sổ Tay",
        desc: "Tạo và lưu trữ các ghi chú kỹ thuật, mã thiết bị và thông tin cấu hình dự án của bạn tại đây.",
        img: "assets/project_notes.png",
        openNotesTool: true,
        specs: {
            "Tính năng": "Tạo nhiều thẻ ghi chú",
            "Lưu trữ": "Tự động (LocalStorage)",
            "Bảo mật": "Lưu trên trình duyệt cá nhân"
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
            } else if (product.openIframe) {
                // Mở iframe tool cho Electric Cylinder
                gridContainer.style.display = 'none';
                if(document.getElementById('iframe-tool')) {
                    document.getElementById('iframe-tool').style.display = 'flex';
                }
            } else if (product.openNotesTool) {
                // Check if already authenticated in this session
                if (sessionStorage.getItem('notes_authenticated') === 'true') {
                    gridContainer.style.display = 'none';
                    if(document.getElementById('notes-tool')) {
                        document.getElementById('notes-tool').style.display = 'flex';
                    }
                    renderNotes();
                } else {
                    openNotesAuthModal();
                }
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
let selectedExportItems = new Map(); // Stores uids of selected items for export

function getServoCables(item) {
    let pCable = item.cableCode && item.cableCode !== "-" ? item.cableCode : "-";
    let eCable = item.encoderCable && item.encoderCable !== "-" ? item.encoderCable : "-";
    const mc = item.motorCode || "";
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
        eCable = "S6-L-P124-5.0-INT";
        if (item.brake === "Without") pCable = "S6-L-M107-5.0-INT";
        else if (item.brake === "With") pCable = "S6-L-B108-5.0-INT";
    }
    
    return { pCable, eCable };
}

function buildMasterData() {
    masterData = [];
    let uidCounter = 1;
    selectionData.forEach(item => {
        const cables = getServoCables(item);
        masterData.push({
            category: 'servo',
            categoryLabel: 'Servo',
            series: item.series,
            mainCode: item.motorCode || '-',
            aux1: item.driveCode || '-',
            aux2: cables.pCable,
            aux3: cables.eCable,
            searchStr: (item.motorCode + " " + item.driveCode + " " + item.series).toLowerCase(),
            uid: 'servo_' + uidCounter++
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
            searchStr: (item.modelCode + " " + item.description + " " + item.series).toLowerCase(),
            uid: 'inv_' + uidCounter++
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
            searchStr: (item.modelNumber + " " + item.description + " " + item.series).toLowerCase(),
            uid: 'plc_' + uidCounter++
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
    filterCategory.value = '';
    
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
                <th style="width: 120px; text-align: center;">Số lượng</th>
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
    let exportSeriesSet = new Set();
    
    dataset.forEach(item => {
        // If export tool and category is selected, we filter out dataset dynamically
        const catValue = filterCategory.value;
        const matchesCategory = currentToolType !== 'export' || catValue === "" || item.category === catValue;
        
        if (currentToolType === 'export' && matchesCategory && item.series) {
            exportSeriesSet.add(item.series);
        }
        
        if (matchesCategory && (s_series === "" || item.series === s_series)) {
            if (currentToolType !== 'plc' && currentToolType !== 'export' && item.power && item.power !== '-') powerSet.add(item.power);
            if (currentToolType === 'inverter' && item.phase) phaseSet.add(item.phase);
            if (currentToolType === 'plc' && item.modelNumber) modelSet.add(item.modelNumber);
        }
    });

    if (currentToolType === 'export') {
        filterSeries.innerHTML = '<option value="">-- Tất cả --</option>';
        const sArr = Array.from(exportSeriesSet).sort();
        let keepSelectedSeries = false;
        sArr.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt;
            option.textContent = opt;
            filterSeries.appendChild(option);
            if (opt === s_series) keepSelectedSeries = true;
        });
        if (keepSelectedSeries) filterSeries.value = s_series;
    }

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
    f.addEventListener('change', () => {
        if (f === filterCategory) {
            updateDynamicFilters();
        }
        filterSelectionData();
    });
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

const btnBackIframe = document.getElementById('btn-back-iframe');
if (btnBackIframe) {
    btnBackIframe.addEventListener('click', () => {
        document.getElementById('iframe-tool').style.display = 'none';
        gridContainer.style.display = 'grid';
    });
}

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
                const cables = getServoCables(item);
                const mc = item.motorCode || "";

                tr.innerHTML = `
                    <td class="code-highlight" style="color: #0f172a;">${mc || '-'}</td>
                    <td class="code-highlight" style="color: #e11d48;">${item.driveCode || '-'}</td>
                    <td class="code-highlight" style="color: #b45309;">${cables.pCable}</td>
                    <td class="code-highlight" style="color: #2563eb;">${cables.eCable}</td>
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
                const qty = selectedExportItems.get(item.uid) || 0;
                tr.innerHTML = `
                    <td style="text-align: center;">
                        <div class="qty-control">
                            <button class="qty-btn minus" data-uid="${item.uid}" ${qty === 0 ? 'disabled' : ''}>-</button>
                            <input type="number" class="qty-input" data-uid="${item.uid}" value="${qty}" min="0">
                            <button class="qty-btn plus" data-uid="${item.uid}">+</button>
                        </div>
                    </td>
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
             const colCount = currentToolType === 'servo' || currentToolType === 'inverter' ? 4 : (currentToolType === 'export' ? 6 : 2);
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

// Delegate Quantity Events
resultsTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('qty-btn')) {
        const isPlus = e.target.classList.contains('plus');
        const uid = e.target.getAttribute('data-uid');
        const inputGrp = e.target.closest('.qty-control');
        const input = inputGrp.querySelector('.qty-input');
        
        // Cập nhật số lượng
        let currentVal = parseInt(input.value) || 0;
        if (isPlus) {
            currentVal += 1;
        } else if (currentVal > 0) {
            currentVal -= 1;
        }
        
        input.value = currentVal;
        selectedExportItems.set(uid, currentVal);
        
        // Quản lý trạng thái nút ẩn
        const minusBtn = inputGrp.querySelector('.minus');
        minusBtn.disabled = currentVal === 0;
    }
});

resultsTable.addEventListener('input', (e) => {
    if (e.target.classList.contains('qty-input')) {
        let val = parseInt(e.target.value) || 0;
        if (val < 0) {
            val = 0;
            e.target.value = 0;
        }
        const uid = e.target.getAttribute('data-uid');
        selectedExportItems.set(uid, val);
        
        const minusBtn = e.target.closest('.qty-control').querySelector('.minus');
        minusBtn.disabled = val === 0;
    }
});

// Excel Export Function
btnExportExcel.addEventListener('click', exportToExcel);

function exportToExcel() {
    if (!window.XLSX) {
        alert("Thư viện Excel đang tải, vui lòng thử lại sau 1-2 giây!");
        return;
    }
    
    const hasSelection = Array.from(selectedExportItems.values()).some(qty => qty > 0);
    if (!hasSelection) {
        alert("Bạn chưa chọn số lượng thiết bị nào! Hãy bấm '+' để chọn thiết bị cần xuất báo giá.");
        return;
    }

    let exportData = masterData.filter(item => (selectedExportItems.get(item.uid) || 0) > 0);
    
    // Gather all items
    const rawItems = [];
    
    exportData.forEach(item => {
        const qty = selectedExportItems.get(item.uid) || 0;
        if (item.category === 'servo') {
            if (item.mainCode && item.mainCode !== '-') {
                rawItems.push({ code: item.mainCode, name: "Động cơ servo", unit: "PCS", qty: qty, note: "" });
            }
            if (item.aux1 && item.aux1 !== '-') {
                rawItems.push({ code: item.aux1, name: "Driver", unit: "PCS", qty: qty, note: "" });
            }
            if (item.aux2 && item.aux2 !== '-') {
                rawItems.push({ code: item.aux2, name: "Dây cáp nguồn", unit: "PCS", qty: qty, note: "" });
            }
            if (item.aux3 && item.aux3 !== '-') {
                rawItems.push({ code: item.aux3, name: "Dây cáp encoder", unit: "PCS", qty: qty, note: "" });
            }
        } else if (item.category === 'inverter') {
            if (item.mainCode && item.mainCode !== '-') {
                const desc = typeof item.aux1 === 'string' ? item.aux1.replace(/<br>/g, " \n ") : item.aux1;
                rawItems.push({ code: item.mainCode, name: "Biến tần", unit: "PCS", qty: qty, note: desc });
            }
            if (item.aux2 && item.aux2 !== '-') {
                let textAux2 = typeof item.aux2 === 'string' ? item.aux2.replace(/<br>/g, " \n ") : item.aux2;
                rawItems.push({ code: textAux2, name: "Cuộn kháng AC", unit: "PCS", qty: qty, note: "" });
            }
            if (item.aux3 && item.aux3 !== '-') {
                let textAux3 = typeof item.aux3 === 'string' ? item.aux3.replace(/<br>/g, " \n ") : item.aux3;
                rawItems.push({ code: textAux3, name: "Điện trở xả", unit: "PCS", qty: qty, note: "" });
            }
        } else if (item.category === 'plc') {
            if (item.mainCode && item.mainCode !== '-') {
                const desc = typeof item.aux1 === 'string' ? item.aux1.replace(/<br>/g, " \n ") : item.aux1;
                rawItems.push({ code: item.mainCode, name: item.series || "PLC", unit: "PCS", qty: qty, note: desc });
            }
        } else {
            if (item.mainCode && item.mainCode !== '-') {
                const desc = typeof item.aux1 === 'string' ? item.aux1.replace(/<br>/g, " \n ") : item.aux1;
                rawItems.push({ code: item.mainCode, name: item.categoryLabel, unit: "PCS", qty: qty, note: desc });
            }
        }
    });

    // Aggregate identical codes
    const aggregated = new Map();
    rawItems.forEach(r => {
        if (aggregated.has(r.code)) {
            const existing = aggregated.get(r.code);
            existing.qty += r.qty;
            if (r.note && !existing.note.includes(r.note)) {
                existing.note += (existing.note ? " \n " : "") + r.note;
            }
        } else {
            aggregated.set(r.code, { ...r });
        }
    });

    // Convert to Excel BOM format
    let stt = 1;
    const excelRows = Array.from(aggregated.values()).map(r => ({
        "STT": stt++,
        "MÃ THIẾT BỊ": r.code,
        "TÊN THIẾT BỊ": r.name,
        "ĐƠN VỊ": r.unit,
        "SỐ LƯỢNG": r.qty,
        "GHI CHÚ": r.note
    }));
    
    const worksheet = XLSX.utils.json_to_sheet(excelRows);
    
    // Apply Styling to all cells
    for (let cell in worksheet) {
        if (cell.startsWith('!')) continue;
        if (!worksheet[cell].s) worksheet[cell].s = {};
        if (!worksheet[cell].s.font) worksheet[cell].s.font = {};
        
        // Base Font
        worksheet[cell].s.font.name = "Times New Roman";
        worksheet[cell].s.font.sz = 12; // 12pt

        const col = cell.replace(/[0-9]/g, '');
        const row = cell.replace(/[^0-9]/g, '');

        // Center alignment for STT (A) and SỐ LƯỢNG (E)
        if (col === 'A' || col === 'E') {
            if (!worksheet[cell].s.alignment) worksheet[cell].s.alignment = {};
            worksheet[cell].s.alignment.horizontal = "center";
            worksheet[cell].s.alignment.vertical = "center";
        }

        // Header highlighting and centering (Row 1)
        if (row === '1') {
            worksheet[cell].s.font.bold = true;
            worksheet[cell].s.fill = {
                patternType: "solid",
                fgColor: { rgb: "FFFF00" } // Yellow
            };
            if (!worksheet[cell].s.alignment) worksheet[cell].s.alignment = {};
            worksheet[cell].s.alignment.horizontal = "center";
            worksheet[cell].s.alignment.vertical = "center";
        }

        // Add thin black borders to all cells
        if (!worksheet[cell].s.border) worksheet[cell].s.border = {};
        worksheet[cell].s.border = {
            top: { style: "thin", color: { auto: 1 } },
            bottom: { style: "thin", color: { auto: 1 } },
            left: { style: "thin", color: { auto: 1 } },
            right: { style: "thin", color: { auto: 1 } }
        };
    }

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "DanhSachThietBi");
    
    // Auto fit columns roughly
    const wscols = [
        {wch: 5},  // STT
        {wch: 35}, // MÃ THIẾT BỊ
        {wch: 25}, // TÊN THIẾT BỊ
        {wch: 10}, // ĐƠN VỊ
        {wch: 15}, // SỐ LƯỢNG
        {wch: 60}  // GHI CHÚ
    ];
    worksheet['!cols'] = wscols;

    const today = new Date();
    const dateStr = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
    const fileName = `INOVANCE_Danh_Sach_Thiet_Bi_${dateStr}.xlsx`;
    
    try {
        // Explicit anchor generation to fix Microsoft Edge blob renaming issue
        const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        
        setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 100);
    } catch (e) {
        // Fallback just in case
        XLSX.writeFile(workbook, fileName);
    }
}

// -----------------------------------------------------
// PROJECT NOTES TOOL LOGIC (Firestore Cloud Sync & LocalStorage Fallback)
// -----------------------------------------------------
let projectNotes = [];
let unsubscribeNotesListener = null;
let saveFirebaseTimeout = null;

function getSyncKey() {
    let key = localStorage.getItem('inovance_notes_sync_key');
    if (!key) {
        key = 'default';
        localStorage.setItem('inovance_notes_sync_key', key);
    }
    return key;
}

function updateSyncStatus(text, color) {
    const statusContainer = document.getElementById('notes-sync-status');
    if (statusContainer) {
        statusContainer.innerHTML = `<span style="color: ${color}; font-weight: 600;">Trạng thái: ${text}</span>`;
    }
}

function loadNotes() {
    // Điền mã đồng bộ vào ô input
    const syncKeyInput = document.getElementById('notes-sync-key-input');
    if (syncKeyInput) {
        syncKeyInput.value = getSyncKey();
    }

    // Kiểm tra xem cấu hình Firebase có tồn tại và hợp lệ không
    if (typeof isFirebaseConfigured !== 'undefined' && isFirebaseConfigured) {
        updateSyncStatus("Đang kết nối đám mây... ⏳", "var(--text-secondary)");
        try {
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            const db = firebase.firestore();
            const syncKey = getSyncKey();

            // Huỷ đăng ký listener cũ nếu có
            if (unsubscribeNotesListener) {
                unsubscribeNotesListener();
            }

            // Đăng ký lắng nghe tài liệu ghi chú theo Mã Đồng Bộ
            unsubscribeNotesListener = db.collection('project_notes').doc(syncKey).onSnapshot(doc => {
                let remoteNotes = [];
                if (doc.exists) {
                    remoteNotes = doc.data().notes || [];
                } else {
                    // Khởi tạo tài liệu trống trên Firestore
                    remoteNotes = [
                        {
                            id: 'note_default_1',
                            title: 'Ghi chú Dự án 1',
                            content: 'Nhập thông tin cấu hình trạm máy hoặc mã thiết bị cần mua vào đây...',
                            updatedAt: new Date().toLocaleString('vi-VN')
                        }
                    ];
                    db.collection('project_notes').doc(syncKey).set({ notes: remoteNotes })
                      .catch(err => console.error("Lỗi khởi tạo tài liệu:", err));
                }

                // Kiểm tra xem dữ liệu đám mây có khác dữ liệu trong bộ nhớ không
                const isDifferent = JSON.stringify(remoteNotes) !== JSON.stringify(projectNotes);

                if (isDifferent) {
                    projectNotes = remoteNotes;
                    // Sao lưu offline mới nhất
                    localStorage.setItem('inovance_project_notes', JSON.stringify(projectNotes));

                    // Chỉ re-render nếu người dùng không tập trung vào ô nhập liệu để tránh nhảy con trỏ
                    const activeEl = document.activeElement;
                    const isTyping = activeEl && (activeEl.classList.contains('note-card-textarea') || activeEl.classList.contains('note-card-title-input'));

                    if (!isTyping) {
                        renderNotes();
                    } else {
                        // Lắng nghe khi họ focus-out khỏi ô nhập liệu thì mới vẽ lại giao diện
                        activeEl.addEventListener('blur', function onBlur() {
                            renderNotes();
                            activeEl.removeEventListener('blur', onBlur);
                        }, { once: true });
                    }
                }
                updateSyncStatus("Đồng bộ đám mây ✅", "#10b981");
            }, error => {
                console.error("Firestore error:", error);
                updateSyncStatus("Lỗi kết nối Firebase ⚠️ (Dùng offline)", "#ef4444");
                loadNotesOffline();
                renderNotes();
            });
        } catch (err) {
            console.error("Firebase init/connect error:", err);
            updateSyncStatus("Lỗi khởi tạo Firebase ⚠️ (Dùng offline)", "#ef4444");
            loadNotesOffline();
            renderNotes();
        }
    } else {
        updateSyncStatus("Bộ nhớ cục bộ 💾 (Chưa cấu hình Firebase)", "var(--text-secondary)");
        loadNotesOffline();
        renderNotes();
    }
}

function loadNotesOffline() {
    try {
        const saved = localStorage.getItem('inovance_project_notes');
        if (saved) {
            projectNotes = JSON.parse(saved);
        } else {
            projectNotes = [
                {
                    id: 'note_default_1',
                    title: 'Ghi chú Dự án 1',
                    content: 'Nhập thông tin cấu hình trạm máy hoặc mã thiết bị cần mua vào đây...',
                    updatedAt: new Date().toLocaleString('vi-VN')
                }
            ];
            localStorage.setItem('inovance_project_notes', JSON.stringify(projectNotes));
        }
    } catch (e) {
        console.error("Error loading notes offline", e);
        projectNotes = [];
    }
}

function saveNotes() {
    // 1. Lưu lập tức vào LocalStorage để đảm bảo an toàn cục bộ
    localStorage.setItem('inovance_project_notes', JSON.stringify(projectNotes));

    // 2. Đồng bộ đám mây với Debounce (tránh đẩy yêu cầu mạng liên tục khi gõ)
    if (typeof isFirebaseConfigured !== 'undefined' && isFirebaseConfigured) {
        updateSyncStatus("Đang lưu lên đám mây... ⏳", "var(--text-secondary)");
        if (saveFirebaseTimeout) clearTimeout(saveFirebaseTimeout);

        saveFirebaseTimeout = setTimeout(() => {
            try {
                const db = firebase.firestore();
                const syncKey = getSyncKey();
                db.collection('project_notes').doc(syncKey).set({ notes: projectNotes })
                    .then(() => {
                        updateSyncStatus("Đồng bộ đám mây ✅", "#10b981");
                    })
                    .catch(err => {
                        console.error("Firebase write error:", err);
                        updateSyncStatus("Lỗi lưu đám mây ⚠️", "#ef4444");
                    });
            } catch (err) {
                console.error("Firebase save connection error:", err);
                updateSyncStatus("Lỗi kết nối Firebase ⚠️", "#ef4444");
            }
        }, 1000); // Debounce 1 giây
    }
}

function renderNotes() {
    const container = document.getElementById('notes-container');
    if (!container) return;
    container.innerHTML = '';

    if (projectNotes.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary); font-style: italic;">
                Chưa có ghi chú nào được tạo. Hãy bấm "Thêm Ghi Chú Mới" để bắt đầu!
            </div>
        `;
        return;
    }

    projectNotes.forEach(note => {
        const card = document.createElement('div');
        card.className = 'note-item-card';
        card.innerHTML = `
            <div class="note-card-header">
                <input type="text" class="note-card-title-input" value="${note.title}" placeholder="Nhập tiêu đề...">
                <button class="note-card-delete-btn" title="Xóa ghi chú">🗑️</button>
            </div>
            <textarea class="note-card-textarea" placeholder="Nhập nội dung ghi chú...">${note.content}</textarea>
            <div class="note-card-footer">
                <span>Cập nhật: ${note.updatedAt}</span>
                <button class="note-card-copy-btn">
                    <span>📋 Copy</span>
                </button>
            </div>
        `;

        const titleInput = card.querySelector('.note-card-title-input');
        const textarea = card.querySelector('.note-card-textarea');
        const deleteBtn = card.querySelector('.note-card-delete-btn');
        const copyBtn = card.querySelector('.note-card-copy-btn');

        titleInput.addEventListener('input', () => {
            note.title = titleInput.value;
            note.updatedAt = new Date().toLocaleString('vi-VN');
            card.querySelector('.note-card-footer span').textContent = `Cập nhật: ${note.updatedAt}`;
            saveNotes();
        });

        textarea.addEventListener('input', () => {
            note.content = textarea.value;
            note.updatedAt = new Date().toLocaleString('vi-VN');
            card.querySelector('.note-card-footer span').textContent = `Cập nhật: ${note.updatedAt}`;
            saveNotes();
        });

        deleteBtn.addEventListener('click', () => {
            if (confirm(`Bạn có chắc chắn muốn xóa ghi chú "${note.title || 'không tên'}"?`)) {
                projectNotes = projectNotes.filter(n => n.id !== note.id);
                saveNotes();
                renderNotes();
            }
        });

        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(note.content).then(() => {
                const btnSpan = copyBtn.querySelector('span');
                btnSpan.textContent = '✅ Đã Copy!';
                copyBtn.style.background = '#10b981';
                copyBtn.style.color = '#ffffff';
                copyBtn.style.borderColor = '#10b981';
                
                setTimeout(() => {
                    btnSpan.textContent = '📋 Copy';
                    copyBtn.style.background = '';
                    copyBtn.style.color = '';
                    copyBtn.style.borderColor = '';
                }, 1500);
            });
        });

        container.appendChild(card);
    });
}

function addNewNote() {
    const newNote = {
        id: 'note_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        title: 'Ghi chú mới ' + (projectNotes.length + 1),
        content: '',
        updatedAt: new Date().toLocaleString('vi-VN')
    };
    projectNotes.unshift(newNote);
    saveNotes();
    renderNotes();
}

function openNotesAuthModal() {
    const modal = document.getElementById('notes-auth-modal');
    const input = document.getElementById('notes-password-input');
    const errorMsg = document.getElementById('notes-auth-error');
    
    if (!modal || !input || !errorMsg) return;
    
    input.value = '';
    errorMsg.style.display = 'none';
    modal.classList.remove('shake-animation');
    modal.classList.add('show');
    
    setTimeout(() => {
        input.focus();
    }, 200);
}

function setupNotesAuthEventListeners() {
    const modal = document.getElementById('notes-auth-modal');
    const input = document.getElementById('notes-password-input');
    const errorMsg = document.getElementById('notes-auth-error');
    const btnCancel = document.getElementById('btn-auth-cancel');
    const btnSubmit = document.getElementById('btn-auth-submit');
    
    if (!modal || !input || !errorMsg || !btnCancel || !btnSubmit) return;
    
    const handleAuth = () => {
        const password = input.value;
        if (password === '100702') {
            sessionStorage.setItem('notes_authenticated', 'true');
            modal.classList.remove('show');
            
            // Navigate to Notes Tool
            gridContainer.style.display = 'none';
            if (document.getElementById('notes-tool')) {
                document.getElementById('notes-tool').style.display = 'flex';
            }
            renderNotes();
        } else {
            errorMsg.style.display = 'block';
            modal.classList.add('shake-animation');
            input.select();
            setTimeout(() => {
                modal.classList.remove('shake-animation');
            }, 600);
        }
    };
    
    btnSubmit.addEventListener('click', handleAuth);
    
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            handleAuth();
        }
    });
    
    btnCancel.addEventListener('click', () => {
        modal.classList.remove('show');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}

function setupNotesEventListeners() {
    const btnBackNotes = document.getElementById('btn-back-notes');
    if (btnBackNotes) {
        btnBackNotes.addEventListener('click', () => {
            document.getElementById('notes-tool').style.display = 'none';
            gridContainer.style.display = 'grid';
        });
    }

    const btnAddNote = document.getElementById('btn-add-note');
    if (btnAddNote) {
        btnAddNote.addEventListener('click', addNewNote);
    }

    // Trình lắng nghe đổi Mã Đồng Bộ
    const btnSaveSyncKey = document.getElementById('btn-save-sync-key');
    const syncKeyInput = document.getElementById('notes-sync-key-input');
    if (btnSaveSyncKey && syncKeyInput) {
        btnSaveSyncKey.addEventListener('click', () => {
            const newKey = syncKeyInput.value.trim().toLowerCase() || 'default';
            // Lọc các ký tự đặc biệt để đảm bảo làm Document ID hợp lệ và an toàn
            const cleanKey = newKey.replace(/[^a-z0-9_-]/g, '');
            if (!cleanKey) {
                alert("Mã đồng bộ không hợp lệ! Vui lòng chỉ dùng chữ thường (a-z), số (0-9), gạch ngang (-) hoặc gạch dưới (_).");
                return;
            }
            
            localStorage.setItem('inovance_notes_sync_key', cleanKey);
            syncKeyInput.value = cleanKey;
            
            // Khởi động lại kênh đồng bộ dữ liệu với mã mới
            loadNotes();

            // Hiển thị trạng thái lưu thành công
            const originText = btnSaveSyncKey.textContent;
            btnSaveSyncKey.textContent = 'Đã lưu!';
            btnSaveSyncKey.style.background = '#10b981';
            setTimeout(() => {
                btnSaveSyncKey.textContent = originText;
                btnSaveSyncKey.style.background = '';
            }, 1200);
        });

        syncKeyInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                btnSaveSyncKey.click();
            }
        });
    }
}

// Initialize App
function init() {
    buildMasterData();
    renderProducts();
    setupModalEvents();
    createStars();
    loadNotes();
    setupNotesEventListeners();
    setupNotesAuthEventListeners();
}

document.addEventListener('DOMContentLoaded', init);
