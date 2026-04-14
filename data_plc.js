const plcData = [
    {
        "modelNumber":  "Easy301-0808TN-INT",
        "description":  "8 x sink/source digital inputs, 8 x sink transistor outputs,\u003cbr\u003e1 x RS232, 1 x RS485, 1 x USB type C,\u003cbr\u003esupports up to 4 axes (pulse control)",
        "series":  "Easy"
    },
    {
        "modelNumber":  "Easy302-0808TN-INT",
        "description":  "8 x sink/source digital inputs, 8 x sink transistor outputs,\u003cbr\u003e1 x RS232, 1 x RS485, 1 x USB type C,\u003cbr\u003esupports up to 5 axes (pulse control), supports CAM, supports 1 x RS232 / 485 expansion card and CAN communication (expansion card)",
        "series":  "Easy"
    },
    {
        "modelNumber":  "Easy320-0808TN-INT",
        "description":  "8 x sink/source digital inputs, 8 x sink transistor outputs,\u003cbr\u003e2 x Ethernet, 1 x RS485, 1 x USB type C,\u003cbr\u003esupports up to 5 axes (pulse control), supports CAM, supports 2 x RS232 /485 expansion cards and CAN communication (expansion card)",
        "series":  "Easy"
    },
    {
        "modelNumber":  "Easy521-0808TN-INT",
        "description":  "8 x sink/source digital inputs, 8 x sink transistor outputs,\u003cbr\u003e2 x Ethernet, 1 x EtherCAT, 1 x RS485, 1 x USB type C,\u003cbr\u003esupports up to 8 axes (EtherCAT + pulse control), supports CAM, supports 2 x RS232 /485 expansion cards and CAN communication (expansion card)",
        "series":  "Easy"
    },
    {
        "modelNumber":  "Easy522-0808TN-INT",
        "description":  "8 x sink/source digital inputs, 8 x sink transistor outputs,\u003cbr\u003e2 x Ethernet, 1 x EtherCAT, 1 x RS485, 1 x USB type C,\u003cbr\u003esupports up to 16 axes (EtherCAT + pulse control), supports CAM, supports 2 x RS232 /485 expansion cards and CAN communication (expansion card)",
        "series":  "Easy"
    },
    {
        "modelNumber":  "Easy523-0808TN-INT",
        "description":  "8 x sink/source digital inputs, 8 x sink transistor outputs,\u003cbr\u003e2 x Ethernet, 1 x EtherCAT, 1 x RS485, 1 x USB type C,\u003cbr\u003esupports up to 32 axes (EtherCAT + pulse control), supports CAM, supports 2 x RS232 /485 expansion cards and CAN communication (expansion card)",
        "series":  "Easy"
    },
    {
        "modelNumber":  "Easy320-0808TP-INT",
        "description":  "8 x sink/source digital inputs, 8 x source transistor outputs,\u003cbr\u003e2 x Ethernet, 1 x RS485, 1 x USB type C,\u003cbr\u003esupports up to 5 axes (pulse control), supports CAM, supports 2 x RS232 /485 expansion cards and CAN communication (expansion card)",
        "series":  "Easy"
    },
    {
        "modelNumber":  "Easy521-0808TP-INT",
        "description":  "8 x sink/source digital inputs, 8 x source transistor outputs,\u003cbr\u003e2 x Ethernet, 1 x EtherCAT, 1 x RS485, 1 x USB type C,\u003cbr\u003esupports up to 8 axes (EtherCAT + pulse control), supports CAM, supports 2 x RS232 /485 expansion cards and CAN communication (expansion card)",
        "series":  "Easy"
    },
    {
        "modelNumber":  "Easy522-0808TP-INT",
        "description":  "8 x sink/source digital inputs, 8 x source transistor outputs,\u003cbr\u003e2 x Ethernet, 1 x EtherCAT, 1 x RS485, 1 x USB type C,\u003cbr\u003esupports up to 16 axes (EtherCAT + pulse control), supports CAM, supports 2 x RS232 /485 expansion cards and CAN communication (expansion card)",
        "series":  "Easy"
    },
    {
        "modelNumber":  "Easy523-0808TP-INT",
        "description":  "8 x sink/source digital inputs, 8 x source transistor outputs,\u003cbr\u003e2 x Ethernet, 1 x EtherCAT, 1 x RS485, 1 x USB type C,\u003cbr\u003esupports up to 32 axes (EtherCAT + pulse control), supports CAM, supports 2 x RS232 /485 expansion cards and CAN communication (expansion card)",
        "series":  "Easy"
    },
    {
        "modelNumber":  "H5U-1614MTD-INT",
        "description":  "16 x sink/source digital inputs,14 x sink transistor outputs,\u003cbr\u003e1 x EtherCAT, 1 x EtherNet,  1 x CAN port, 1 x RS485, 1 x USB,\u003cbr\u003esupport up to 32 axes(EtherCAT + pulse control), support CAM and CAN communication",
        "series":  "H5U"
    },
    {
        "modelNumber":  "H3U-3232MT-INT",
        "description":  "32 x sink/source digital inputs, 32 x sink transistor outputs (5 x high-speed outputs),1 x RS485, 1 x RS422, 1 x CAN port, 1 x Ethernet port, 1 x USB",
        "series":  "H3U"
    },
    {
        "modelNumber":  "H3U-3232MR-INT",
        "description":  "32 x sink/source digital inputs, 32 x digital relay outputs,\u003cbr\u003e1 x RS485, 1 x RS422, 1 x CAN port, 1 x Ethernet port, 1 x USB",
        "series":  "H3U"
    },
    {
        "modelNumber":  "H3U-3624MT-INT",
        "description":  "36 x sink/source digital inputs, 24 x sink transistor outputs (5 x high-speed outputs),1 x RS485, 1 x RS422, 1 x CAN port, 1 x Ethernet port, 1 x USB",
        "series":  "H3U"
    },
    {
        "modelNumber":  "H3U-3624MR-INT",
        "description":  "36 x sink/source digital inputs, 24 x digital relay outputs,\u003cbr\u003e1 x RS485, 1 x RS422, 1 x CAN port, 1 x Ethernet port, 1 x USB",
        "series":  "H3U"
    },
    {
        "modelNumber":  "H3U-2416MT-XP-INT",
        "description":  "24 x sink/source digital inputs, 16 x sink transistor outputs (5 x high-speed outputs),1 x RS485, 1 x RS422, 1 x CAN port, 1 x Ethernet port, 1 x USB",
        "series":  "H3U"
    },
    {
        "modelNumber":  "H3U-2416MR-XP-INT",
        "description":  "24 x sink/source digital inputs, 16 x digital relay outputs,\u003cbr\u003e1 x RS485, 1 x RS422, 1 x CAN port, 1 x Ethernet port, 1 x USB",
        "series":  "H3U"
    },
    {
        "modelNumber":  "H3U-1616MT-XP-INT",
        "description":  "16 x sink/source digital inputs, 16 x sink transistor outputs (5 x high-speed outputs),1 x RS485, 1 x RS422, 1 x CAN port, 1 x Ethernet port, 1 x USB",
        "series":  "H3U"
    },
    {
        "modelNumber":  "H3U-1616MR-XP-INT",
        "description":  "16 x sink/source digital inputs,16 x digital relay outputs,\u003cbr\u003e1 x RS485, 1 x RS422, 1 x CAN port, 1 x Ethernet port, 1 x USB",
        "series":  "H3U"
    },
    {
        "modelNumber":  "H3U-1010MR-XA",
        "description":  "10 x sink/source digital inputs,10 x digital relay outputs,\u003cbr\u003e1 x RS485, 1 x RS422, 1 x USB",
        "series":  "H3U-XA"
    },
    {
        "modelNumber":  "AC810-0122-U0R0-INT",
        "description":  "AC810-0122-U0R0-Core i5 processor-2 Ethernet/2 EtherCAT-SSD 128G-with PCIe extension port, support up to 256 axes(2 EtherCAT port)",
        "series":  "AC8xx"
    },
    {
        "modelNumber":  "AC801-0221-U0R0-INT",
        "description":  "AC801-0221-U0R0-Celeron processor-2 Ethernet/1 EtherCAT-SSD 64G-without PCI extension port, support up to 48 axes(1 EtherCAT port)",
        "series":  "AC8xx"
    },
    {
        "modelNumber":  "AC802-0222-U0R0-INT",
        "description":  "AC802-0222-U0R0-Celeron processor2 Ethernet/2 EtherCAT-SSD 128G-with PCIe extension port, support up to 128 axes(2 EtherCAT port)",
        "series":  "AC8xx"
    },
    {
        "modelNumber":  "GA10-UPS12",
        "description":  "GA10-UPS12 uninterruted power supply AC/DC 24V 4A 3S",
        "series":  "AC8xx"
    },
    {
        "modelNumber":  "GA10-UPS12-INT",
        "description":  "NOT READY",
        "series":  "AC8xx"
    },
    {
        "modelNumber":  "AC703-INT",
        "description":  "Intel J1900, 2Ethernet/1EtherCAT, SSD64G, support up to 32 axes(1 EtherCAT port)",
        "series":  "AC70x"
    },
    {
        "modelNumber":  "AC702-INT",
        "description":  "Intel J1900, 2Ethernet/1EtherCAT, SSD64G, support up to 16 axes(1 EtherCAT port)",
        "series":  "AC70x"
    },
    {
        "modelNumber":  "AM600-CPU1608TP-INT",
        "description":  "16 x high-speed inputs, 8 x high-speed outputs (source type, requires connector FCN-40), 2 x RS485,1 x CAN port,1 x EtherCAT port, 1 x  Ethernet port, 1 x USB, supports 32 axes control",
        "series":  "AM600"
    },
    {
        "modelNumber":  "AM600-CPU1608TN-INT",
        "description":  "16 x high-speed inputs, 8 x high-speed outputs (sink type, pluggable spring clamp), 2 x RS485, 1 x CAN port,1 x EtherCAT port, 1 x Ethernet port, 1 x USB, supports 32 axes control",
        "series":  "AM600"
    },
    {
        "modelNumber":  "AM401-CPU1608TN-INT",
        "description":  "16 x high-speed inputs, 8 x high-speed outputs (sink type, pluggable spring clamp), 1 x RS485, 1 x CAN port,1 x EtherCAT port, 1 x  Ethernet port, 1 x  USB, supports 4 axes control",
        "series":  "AM400"
    },
    {
        "modelNumber":  "AM401-CPU1608TP-INT",
        "description":  "16 x high-speed inputs, 8 x high-speed outputs (source type, requires connector FCN-40), 1 x RS485,1 x CAN port, 1 x EtherCAT port, 1 x Ethernet port, 1 x USB, supports 4 axes control",
        "series":  "AM400"
    },
    {
        "modelNumber":  "AM402-CPU1608TN-INT",
        "description":  "16 x high-speed inputs, 8 x high-speed outputs (sink type, pluggable spring clamp), 1 x RS485, 1 x CAN port,1 x  EtherCAT port, 1 x  Ethernet port, 1 x USB, supports 8 axes control",
        "series":  "AM400"
    },
    {
        "modelNumber":  "AM402-CPU1608TP-INT",
        "description":  "16 x high-speed inputs, 8 x high-speed outputs (source type, requires connector FCN-40), 1 x RS485,1 x CAN port, 1 x EtherCAT port, 1 x  Ethernet port, 1 x USB, supports 8 axes control",
        "series":  "AM400"
    },
    {
        "modelNumber":  "AM403-CPU1608TN-INT",
        "description":  "16 x high-speed inputs, 8 x high-speed outputs (sink type, pluggable spring clamp), 2 x RS485, 1 x CAN port,1 x EtherCAT port, 1 x  Ethernet port, 1 x USB, supports 16 axes control",
        "series":  "AM400"
    },
    {
        "modelNumber":  "AM403-CPU1608TP-INT",
        "description":  "16 x high-speed inputs, 8 x high-speed outputs (source type, requires connector FCN-40), 2 x RS485, 1 x CAN port,1 x EtherCAT port, 1 x  Ethernet port, 1 x USB, supports 16 axes control",
        "series":  "AM400"
    },
    {
        "modelNumber":  "AM320-0808TN-INT",
        "description":  "8 x sink/source digital inputs, 8 x sink transistor outputs,\u003cbr\u003e2 x Ethernet, 1 x RS485, 1 x USB type C,\u003cbr\u003esupports up to 5 axes (pulse control), supports CAM, supports 2 x RS232 /485 expansion cards and CAN communication (expansion card), CodeSys-based",
        "series":  "AM300\u0026500"
    },
    {
        "modelNumber":  "AM521-0808TN-INT",
        "description":  "8 x sink/source digital inputs, 8 x sink transistor outputs,\u003cbr\u003e2 x Ethernet, 1 x EtherCAT, 1 x RS485, 1 x USB type C,\u003cbr\u003esupports up to 8 axes (EtherCAT + pulse control), supports CAM, supports 2 x RS232 /485 expansion cards and CAN communication (expansion card),CodeSys-based",
        "series":  "AM300\u0026500"
    },
    {
        "modelNumber":  "AM522-0808TN-INT",
        "description":  "8 x sink/source digital inputs, 8 x sink transistor outputs,\u003cbr\u003e2 x Ethernet, 1 x EtherCAT, 1 x RS485, 1 x USB type C,\u003cbr\u003esupports up to 16 axes (EtherCAT + pulse control), supports CAM, supports 2 x RS232 /485 expansion cards and CAN communication (expansion card),CodeSys-based",
        "series":  "AM300\u0026500"
    },
    {
        "modelNumber":  "AM320-0808TP-INT",
        "description":  "8 x sink/source digital inputs, 8 x source transistor outputs,\u003cbr\u003e2 x Ethernet, 1 x RS485, 1 x USB type C,\u003cbr\u003esupports up to 5 axes (pulse control), supports CAM, supports 2 x RS232 /485 expansion cards and CAN communication (expansion card), CodeSys-based",
        "series":  "AM300\u0026500"
    },
    {
        "modelNumber":  "AM521-0808TP-INT",
        "description":  "8 x sink/source digital inputs, 8 x source transistor outputs,\u003cbr\u003e2 x Ethernet, 1 x EtherCAT, 1 x RS485, 1 x USB type C,\u003cbr\u003esupports up to 8 axes (EtherCAT + pulse control), supports CAM, supports 2 x RS232 /485 expansion cards and CAN communication (expansion card),CodeSys-based",
        "series":  "AM300\u0026500"
    },
    {
        "modelNumber":  "AM522-0808TP-INT",
        "description":  "8 x sink/source digital inputs, 8 x source transistor outputs,\u003cbr\u003e2 x Ethernet, 1 x EtherCAT, 1 x RS485, 1 x USB type C,\u003cbr\u003esupports up to 16 axes (EtherCAT + pulse control), supports CAM, supports 2 x RS232 /485 expansion cards and CAN communication (expansion card),CodeSys-based",
        "series":  "AM300\u0026500"
    },
    {
        "modelNumber":  "IT7070E-INT",
        "description":  "IT7000 series HMI, 7.0 inch LCD screen, 800x480 resolution, 24 bit true colour, 24VDC power supply, 2x RS485, 1x RS232, 1x USB type A, 1x USB mini B, 1x SD card slot, 1x Ethernet, built-in RTC",
        "series":  "IT7000"
    },
    {
        "modelNumber":  "IT7100E-INT",
        "description":  "IT7000 series HMI, 10.1 inch LCD screen, 1024x600 resolution, 24 bit true colour, 24VDC power supply, 2x RS485, 1x RS232, 1x USB type A, 1x USB mini B, 1x SD card slot, 1x Ethernet, built-in RTC",
        "series":  "IT7000"
    },
    {
        "modelNumber":  "IT7150E-INT",
        "description":  "IT7000 series HMI, 15.0 inch LCD screen, 1024x768 resolution, 24 bit true colour, 24VDC power supply, 2x RS485, 1x RS232, 1x USB type A, 1x USB mini B, 1x SD card slot, 1x Ethernet, built-in RTC",
        "series":  "IT7000"
    },
    {
        "modelNumber":  "IT7070T-INT",
        "description":  "IT7000 series HMI, 7.0 inch LCD screen, 800x480 resolution, 24 bit true colour, 24VDC power supply, 1x RS485, 1x RS232, 1x USB type A, 1x USB mini B, built-in RTC",
        "series":  "IT7000"
    },
    {
        "modelNumber":  "ITU7070E",
        "description":  "",
        "series":  "IT7000"
    },
    {
        "modelNumber":  "ITU7070E-INT",
        "description":  "NOT released\u003cbr\u003eITU7000 series display\u0026control integrated device, 7.0 inch LCD screen, 1024x600 resolution, 24 bit true colour, 24VDC power supply, 2x RS485, 1x RS232, 1x USB type A, 1x USB mini B, 1x SD card slot, 1x Ethernet, 1x EtherCAT built-in RTC\u003cbr\u003e",
        "series":  "IT7000"
    },
    {
        "modelNumber":  "--",
        "description":  "Terminal and metal fixer for IT7000 HMI",
        "series":  "IT7000"
    },
    {
        "modelNumber":  "ITS7070S",
        "description":  "ITS7000 series HMI, 7.0 inch LCD screen, 800x480 resolution, 24 bit true colour, 24VDC power supply, 1x RS485, 1x RS232, 1x USB type A, 1x USB type C, built-in RTC, black frame",
        "series":  "ITS7000"
    },
    {
        "modelNumber":  "ITS7070S-G",
        "description":  "ITS7000 series HMI, 7.0 inch LCD screen, 800x480 resolution, 24 bit true colour, 24VDC power supply, 1x RS485, 1x RS232, 1x USB type A, 1x USB type C, built-in RTC, grey frame",
        "series":  "ITS7000"
    },
    {
        "modelNumber":  "ITS7070SH",
        "description":  "ITS7000 series HMI, 7.0 inch LCD screen, 1024x600 resolution, 24 bit true colour, 24VDC power supply, 1x RS485, 1x RS232, 1x USB type A, 1x USB type C, built-in RTC, black frame",
        "series":  "ITS7000"
    },
    {
        "modelNumber":  "ITS7070SH-G",
        "description":  "ITS7000 series HMI, 7.0 inch LCD screen, 1024x600 resolution, 24 bit true colour, 24VDC power supply, 1x RS485, 1x RS232, 1x USB type A, 1x USB type C, built-in RTC, grey frame",
        "series":  "ITS7000"
    },
    {
        "modelNumber":  "ITS7070E",
        "description":  "IT7000 series HMI, 7.0 inch LCD screen, 800x480 resolution, 24 bit true colour, 24VDC power supply, 2x RS485, 1x RS232, 1x USB type A, 1x USB mini B,  1x Ethernet, built-in RTC,black frame",
        "series":  "ITS7000"
    },
    {
        "modelNumber":  "ITS7070E-G",
        "description":  "IT7000 series HMI, 7.0 inch LCD screen, 800x480 resolution, 24 bit true colour, 24VDC power supply, 2x RS485, 1x RS232, 1x USB type A, 1x USB mini B,  1x Ethernet, built-in RTC,grey frame",
        "series":  "ITS7000"
    },
    {
        "modelNumber":  "ITS7070EH",
        "description":  "IT7000 series HMI, 7.0 inch LCD screen, 1024x600 resolution, 24 bit true colour, 24VDC power supply, 2x RS485, 1x RS232, 1x USB type A, 1x USB mini B,  1x Ethernet, built-in RTC,black frame",
        "series":  "ITS7000"
    },
    {
        "modelNumber":  "ITS7070EH-G",
        "description":  "IT7000 series HMI, 7.0 inch LCD screen, 1024x600 resolution, 24 bit true colour, 24VDC power supply, 2x RS485, 1x RS232, 1x USB type A, 1x USB mini B,  1x Ethernet, built-in RTC,grey frame",
        "series":  "ITS7000"
    },
    {
        "modelNumber":  "ITS7100S",
        "description":  "ITS7000 series HMI, 10.0 inch LCD screen, 800x480 resolution, 24 bit true colour, 24VDC power supply, 1x RS485, 1x RS232, 1x USB type A, 1x USB type C, built-in RTC, black frame",
        "series":  "ITS7000"
    },
    {
        "modelNumber":  "ITS7100S-G",
        "description":  "ITS7000 series HMI, 10.0 inch LCD screen, 800x480 resolution, 24 bit true colour, 24VDC power supply, 1x RS485, 1x RS232, 1x USB type A, 1x USB type C, built-in RTC, grey frame",
        "series":  "ITS7000"
    },
    {
        "modelNumber":  "ITS7100E",
        "description":  "IT7000 series HMI, 10.0 inch LCD screen, 800x480 resolution, 24 bit true colour, 24VDC power supply, 2x RS485, 1x RS232, 1x USB type A, 1x USB mini B,  1x Ethernet, built-in RTC,black frame",
        "series":  "ITS7000"
    },
    {
        "modelNumber":  "ITS7100E-G",
        "description":  "IT7000 series HMI, 10.0 inch LCD screen, 800x480 resolution, 24 bit true colour, 24VDC power supply, 2x RS485, 1x RS232, 1x USB type A, 1x USB mini B,  1x Ethernet, built-in RTC,grey frame",
        "series":  "ITS7000"
    },
    {
        "modelNumber":  "HP821W-C000",
        "description":  "21.5 inch capactior-type touch screen(16:9)",
        "series":  "PAC"
    },
    {
        "modelNumber":  "HP815W-C100",
        "description":  "15.6 inch capactior-type touch screen(16:9)",
        "series":  "PAC"
    },
    {
        "modelNumber":  "AI910-0110-INT",
        "description":  "PC-based controller AI910(i3-1125G4, 8G memory, 128G SSD)",
        "series":  "PAC"
    },
    {
        "modelNumber":  "AI920-0110-INT",
        "description":  "PC-based controller AI920(i5-1155G7, 8G memory, 128G SSD)",
        "series":  "PAC"
    },
    {
        "modelNumber":  "HP800-DP-10.0",
        "description":  "DP to DP cable, 10m",
        "series":  "PAC"
    },
    {
        "modelNumber":  "HP800-USB-10.0",
        "description":  "USB 2.0 type A to B, 10M",
        "series":  "PAC"
    },
    {
        "modelNumber":  "HP800-DP-5.0",
        "description":  "DP to DP cable, 5m",
        "series":  "PAC"
    },
    {
        "modelNumber":  "HP800-USB-5.0",
        "description":  "USB 2.0 type A to B, 5M",
        "series":  "PAC"
    },
    {
        "modelNumber":  "MTS4000-LP",
        "description":  "NOT READY",
        "series":  "CNC"
    },
    {
        "modelNumber":  "MTR-2816TPDE-L1",
        "description":  "NOT READY",
        "series":  "CNC"
    },
    {
        "modelNumber":  "MTR-3200NDE",
        "description":  "NOT READY",
        "series":  "CNC"
    },
    {
        "modelNumber":  "MTR-3216RDE",
        "description":  "NOT READY",
        "series":  "CNC"
    },
    {
        "modelNumber":  "MTR-3232TNDE-H",
        "description":  "NOT READY",
        "series":  "CNC"
    },
    {
        "modelNumber":  "MTR-3232TPDE-H",
        "description":  "NOT READY",
        "series":  "CNC"
    },
    {
        "modelNumber":  "MTR-0032TNDE",
        "description":  "NOT READY",
        "series":  "CNC"
    },
    {
        "modelNumber":  "MTR-0032TPDE",
        "description":  "NOT READY",
        "series":  "CNC"
    },
    {
        "modelNumber":  "GL10-PS2-INT",
        "description":  "Power supply module, input: 220VAC, output: 2A/24VDC",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GL10-1600END-INT",
        "description":  "16 x sink/source digital inputs module, screw terminals",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GL10-3200END-INT",
        "description":  "32 x sink/source digital inputs module, pluggable spring clamp",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GL10-0016ER-INT",
        "description":  "16-channel digital relay output module",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GL10-0016ETN-INT",
        "description":  "16 x sink transistor outputs module, screw terminals",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GL10-0016ETP-INT",
        "description":  "16 x source transistor outputs module, screw terminals",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GL10-0032ETN-INT",
        "description":  "32 x sink transistor outputs module, pluggable spring clamp",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GL10-4AD-INT",
        "description":  "4 x analog inputs module, screw terminals",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GL10-4DA-INT",
        "description":  "4 x analog outputs module, screw terminals",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GL10-4AD-DF-INT",
        "description":  "NOT ready",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GL10-4PT-INT",
        "description":  "4 x channel thermal resistance input temperature detection modules, screw terminals (PT100/500/1000)",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GL10-4TC-INT",
        "description":  "4 x channel thermocouple input temperature detection modules, screw terminals (TC type- B,E,N,J,K,R,S,T)",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GL10-8TC-INT",
        "description":  "8 x channel thermocouple input temperature detection modules, screw terminals (TC type- B,E,N,J,K,R,S,T)",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GL10-RTU-ECTA-INT",
        "description":  "EtherCAT (auto scan) communication module, RJ45 LAN port",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GL10-RTU-COP-INT",
        "description":  "CANopen communication module, DB9 female  (NOT applicable for third party CANopen master)",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GL10-4PM-INT",
        "description":  "4 x channel pulse output positioning module, pluggable spring clamp",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GL10-2PH-INT",
        "description":  "2 x channel high-speed differential output positioning module, pluggable spring clamp",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GR10-2HCE-INT",
        "description":  "Series programmable controller 2 channel ABZ high speed count EtherCAT slave station module, pluggable spring clamp",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GR10-0808ETNE-INT",
        "description":  "8 x sink/source digital inputs and 8 x sink transistor outputs EtherCAT slave station module, pluggable spring clamp",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GR10-1616ETNE-INT",
        "description":  "16 x sink/source digital inputs and 16 x sink transistor outputs EtherCAT slave station module, pluggable spring clamp",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GR10-2PHE-INT",
        "description":  "2 x channel high-speed difference pulse output EtherCAT slave station module, pluggable spring clamp",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GR10-4ADE-INT",
        "description":  "4 x analog inputs EtherCAT slave station module, pluggable spring clamp",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GR10-4DAE-INT",
        "description":  "4 x analog outputs EtherCAT slave station module, pluggable spring clamp",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GR10-4PME-INT",
        "description":  "4 x channel positioning output EtherCAT slave station module, pluggable spring clamp",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GR10-8PBE-INT",
        "description":  "8 x channel capture probe EtherCAT slave station module, pluggable spring clamp",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GR10-8TCE-INT",
        "description":  "8 x channel thermocouple inputs EtherCAT slave station module, pluggable spring clamp",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GR10-EC-6SW-INT",
        "description":  "6 x channel EtherCAT branch module (1 EtherCAT input and 5 EtherCAT outputs), RJ45 LAN port",
        "series":  "Optionals(GL\u0026GR)"
    },
    {
        "modelNumber":  "GL20-RTU-ECT",
        "description":  "EtherCAT (auto scan) communication module, RJ45 LAN port--will be replaced by GL20-RTU-ECT32-INT after June",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-RTU-ECT32-INT",
        "description":  "EtherCAT (auto scan) communication module, RJ45 LAN port--support up to 32 modules, while current over 2A or mudules quantities over 16, need an extra PSU GL20-PS2",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-RTU-PN-INT",
        "description":  "PROFINET communication module",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-RTU-EIP",
        "description":  "EIP communicatoin coupler, sample stage",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-RTU-EIP-INT",
        "description":  "EIP communicatoin coupler, sample stage",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "--",
        "description":  "--",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-PS2-INT",
        "description":  "PSU module",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-0800END-INT",
        "description":  "8 x sink/source digital inputs module, spring  clamp",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-1600END-INT",
        "description":  "16 x sink/source digital inputs module, spring  clamp",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-3200END-M-INT",
        "description":  "32 x sink/source digital inputs module with 40 pin connector, NEED extra connection cable and terminal block",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-3200END-INT",
        "description":  "32 x sink/source digital inputs module with spring clamp connector",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-0004ETP-2A-INT",
        "description":  "",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-0008ETN-INT",
        "description":  "8 x sink  transistor outputs module, spring clamp",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-0008ETP-INT",
        "description":  "8 x source  transistor outputs module, spring clamp",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-0008ER-INT",
        "description":  "8 x relay outputs module, spring clamp",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-0004ER-INT",
        "description":  "4 x relay outputs module, spring clamp",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-0016ETN-INT",
        "description":  "16 x sink transistor outputs module, spring clamp",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-0016-ETP-INT",
        "description":  "16 x source transistor outputs module, spring clamp",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-0032ETN-M-INT",
        "description":  "32 xsink transistor outputs module with 40 pin connector, NEED extra connection cable and terminal block",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-0032ETN-INT",
        "description":  "32 x sink digital outputs module with spring clamp connector",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-0808ETN-INT",
        "description":  "8 x inputs + 8 x outputs, NPN, spring clamp",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-3232ETN-M-INT",
        "description":  "32 x inputs + 32 x outputs, NPN,with 2 x 40 pin connectors, NEED extra connection cable and terminal block",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-0404ETP-5V-INT",
        "description":  "4 x inputs + 4 x outputs, PNP, spring clamp (5V model)",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-4AD-INT",
        "description":  "4 x analog inputs module, spring clamp",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-4AD-DF-INT",
        "description":  "",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-4DA-INT",
        "description":  "4 x analog outputs module, spring clamp",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-8ADV-INT",
        "description":  "8 x analog inputs module(voltage), spring clamp",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-8ADI-INT",
        "description":  "8 x analog inputs module(current), spring clamp",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-4PT-INT",
        "description":  "4 x thermal resistor temperature detection module, spring clamp",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-4TC-INT",
        "description":  "4 x thermocouple temperature detection module, spring clamp",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-2S485-INT",
        "description":  "2 channels RS485 communication module",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-2SCOM-INT",
        "description":  "2 channels serial communication module(2 x 485/232 or 1 x 422)",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-2SSI-INT",
        "description":  "2 channels encoder input module, work with EtherCAT coupler",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-2CAN-INT",
        "description":  "NOT available for now, 2 channels CAN communication module, (ONLY work with coupler or codesys models)",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-1DNM-INT",
        "description":  "DeviceNet master(1 channel), work with EtherCAT coupler",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-2HC",
        "description":  "",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GL20-2HC-INT",
        "description":  "",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GR20-1OP-N",
        "description":  "optical fiber conversion module",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GR20-1OP-INT",
        "description":  "--",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "--",
        "description":  "--",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "--",
        "description":  "--",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "--",
        "description":  "--",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "--",
        "description":  "--",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "--",
        "description":  "--",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "--",
        "description":  "--",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "--",
        "description":  "--",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "--",
        "description":  "--",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GR20T-ECT-1616EMN-INT",
        "description":  "--",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GR20T-ECT-1616EMN-E-INT",
        "description":  "--",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GR20T-ECT-0808EMN-INT",
        "description":  "--",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GR20T-ECT-16P-FCZ",
        "description":  "--",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GR20T-ECT-32P-FCZ",
        "description":  "--",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "--",
        "description":  "--",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "--",
        "description":  "--",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "--",
        "description":  "--",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "--",
        "description":  "--",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GE20-4DO-TN-INT",
        "description":  "4 channels NPN (sink) digital outputs",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GE20-4DI-INT",
        "description":  "4 channels PNP (source) / NPN (sink) digital inputs",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GE20-232/485-RTC-INT",
        "description":  "RS232/RS485 communication card with RTC",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GE20-232/485-INT",
        "description":  "RS232/RS485 communication card",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GE20-CAN-485-INT",
        "description":  "CAN and RS485 communication card with RJ45 interface",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GE20-RTC-INT",
        "description":  "RTC expansion card",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GE20-TF-INT",
        "description":  "TF card expansion card (Used for user application program updating and PLC firmware updating)",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GE20-TF-RTC-INT",
        "description":  "TF and RTC integrated expansion card",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GE20-2AD1DA-I-INT",
        "description":  "2 channels analog inputs, 1 channel analog input, current type",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GE20-2AD1DA-V-INT",
        "description":  "2 channels analog inputs, 1 channel analog input, voltage type",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GS20-ECT-8L-INT",
        "description":  "IO link master(EtherCAT, support 8 channels IO link slave)",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GS20-16EMNL-INT",
        "description":  "IO link slave, 16 channels configurable digital inputs(sink/source)/outputs(sink), IP67",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GS20-16EMPL-INT",
        "description":  "IO link slave, 16 channels configurable digital inputs(sink/source)/outputs(source), IP67",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GR20-16EMNL-INT",
        "description":  "IO link slave, 16 channels configurable digital inputs(sink/source)/outputs(sink), IP20",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GR20-16EMPL-INT",
        "description":  "IO link slave, 16 channels configurable digital inputs(sink/source)/outputs(source), IP20",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "GR20-FCZ-INT",
        "description":  "Dust cover assembly for GR20-16EMNL-INT and GR20-16EMPL-INT",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "XA3210A-40-L0.5M-01",
        "description":  "40 pin connection cable with 2 x 40 pin MIL connector, 500mm",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "XA3210A-40-L2M-01",
        "description":  "40 pin connection cable with 2 x 40 pin MIL connector, 2000mm",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "T024-K",
        "description":  "40PIN MIL screw terminal block",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-RJ45-M12DMS4-3 \u003cbr\u003e(PMSH-M12D-04P-MM-SL8E03-RJ45)",
        "description":  "IO-link master(M12 4pin male) to EtherCAT master(RJ45), 3M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-RJ45-M12DMS4-5\u003cbr\u003e(PMSH-M12D-04P-MM-SL8E05-RJ45)",
        "description":  "IO-link master(M12 4pin male) to EtherCAT master(RJ45), 5M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-RJ45-M12DMS4-8",
        "description":  "IO-link master(M12 4pin male) to EtherCAT master(RJ45), 8M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-RJ45-M12DMS4-10\u003cbr\u003e(PMSH-M12D-04P-MM-SL8E10-RJ45)",
        "description":  "IO-link master(M12 4pin male) to EtherCAT master(RJ45), 10M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-RJ45-M12DMS4-15\u003cbr\u003e(PMSH-M12D-04P-MM-SL8E15-RJ45)",
        "description":  "IO-link master(M12 4pin male) to EtherCAT master(RJ45), 15M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-M12AMS4-M12AFL4-3\u003cbr\u003e(PM-M12A-04P-FR-ML-8A03-00A(H))",
        "description":  "IO-link master(M12 4pin male) to IO-link slave(M12 4pin female), 3M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-M12AMS4-M12AFL4-5\u003cbr\u003e(PM-M12A-04P-FR-ML-8A05-00A(H))",
        "description":  "IO-link master(M12 4pin male) to IO-link slave(M12 4pin female), 5M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-M12AMS4-M12AFL4-8",
        "description":  "IO-link master(M12 4pin male) to IO-link slave(M12 4pin female), 8M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-M12AMS4-M12AFL4-10\u003cbr\u003e(PM-M12A-04P-FR-ML-8A10-00A(H))",
        "description":  "IO-link master(M12 4pin male) to IO-link slave(M12 4pin female), 10M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-M12AMS4-M12AFL4-15\u003cbr\u003e(PM-M12A-04P-FR-ML-8A15-00A(H))",
        "description":  "IO-link master(M12 4pin male) to IO-link slave(M12 4pin female), 15M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-M12AMS4-M12AFL4-3-T-Taiyo",
        "description":  "IO-link master(M12 4pin male) to IO-link slave(M12 4pin female), 3M, flexible cable",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-M12AMS4-M12AFL4-5-T-Taiyo",
        "description":  "IO-link master(M12 4pin male) to IO-link slave(M12 4pin female), 5M, flexible cable",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-M12AMS4-M12AFL4-8-T-Taiyo",
        "description":  "IO-link master(M12 4pin male) to IO-link slave(M12 4pin female), 8M, flexible cable",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-M12AMS4-M12AFL4-10-T-Taiyo",
        "description":  "IO-link master(M12 4pin male) to IO-link slave(M12 4pin female), 10M, flexible cable",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-M12AMS4-M12AFL4-15-T-Taiyo",
        "description":  "IO-link master(M12 4pin male) to IO-link slave(M12 4pin female), 15M, flexible cable",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-7/8FL5-7/8ML5-3\u003cbr\u003e(PM-MC-05P-MR-FR-8A03-00A(H))",
        "description":  "power supply connection cable between IO-link master to IO-link master, 3M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-7/8FL5-7/8ML5-5\u003cbr\u003e(PM-MC-05P-MR-FR-8A05-00A(H))",
        "description":  "power supply connection cable between IO-link master to IO-link master, 5M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-7/8FL5-7/8ML5-8",
        "description":  "power supply connection cable between IO-link master to IO-link master, 8M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-7/8FL5-7/8ML5-10\u003cbr\u003e(\tPM-MC-05P-MR-FR-8A10-00A(H))",
        "description":  "power supply connection cable between IO-link master to IO-link master, 10M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-7/8FL5-7/8ML5-15\u003cbr\u003e(PM-MC-05P-MR-FR-8A15-00A(H))",
        "description":  "power supply connection cable between IO-link master to IO-link master, 15M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-M12DMS4-M12DMS4-3\u003cbr\u003e(PMSH-M12D-04P-ML-ML-8A03-00A(H))",
        "description":  "EtherCAT connection cable between IO-link master to IO-link master, 3M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-M12DMS4-M12DMS4-5\u003cbr\u003e(PMSH-M12D-04P-ML-ML-8A05-00A(H))",
        "description":  "EtherCAT connection cable between IO-link master to IO-link master, 5M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-M12DMS4-M12DMS4-8",
        "description":  "EtherCAT connection cable between IO-link master to IO-link master, 8M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-M12DMS4-M12DMS4-10\u003cbr\u003e(PMSH-M12D-04P-ML-ML-8A10-00A(H))",
        "description":  "EtherCAT connection cable between IO-link master to IO-link master, 10M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-M12DMS4-M12DMS4-15\u003cbr\u003e(PMSH-M12D-04P-ML-ML-8A15-00A(H))",
        "description":  "EtherCAT connection cable between IO-link master to IO-link master, 15M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-7/8FL5-3\u003cbr\u003e(PM-MC-05P-FF-SR8A03-00A(H))",
        "description":  "Power supply cable for IO-link master, 3M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-7/8FL5-5\u003cbr\u003e(\tPM-MC-05P-FF-SR8A05-00A(H))",
        "description":  "Power supply cable for IO-link master, 5M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-7/8FL5-8",
        "description":  "Power supply cable for IO-link master, 8M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-7/8FL5-10\u003cbr\u003e(PM-MC-05P-FF-SR8A10-00A(H))",
        "description":  "Power supply cable for IO-link master, 10M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAB-7/8FL5-15\u003cbr\u003e(PM-MC-05P-FF-SR8A15-00A(H))",
        "description":  "Power supply cable for IO-link master, 15M",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "PB-M12A-04P-FF-SL7001-00A(H)",
        "description":  "M12 4pin female direct connector",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "PB-M12A-04P-FF-SR7001-00A(H)",
        "description":  "M12 4pin female bending connector",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "PB-M12A-05P-MM-SL7001-00A(H)",
        "description":  "M12 5pin male direct connector",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "PB-M12A-05P-MM-SR7001-00A(H)",
        "description":  "M12 5pin male bending connector",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAP-M12-FP-8004",
        "description":  "dust prevention cap, 4pin",
        "series":  "Optionals(GL20\u0026GE20)"
    },
    {
        "modelNumber":  "CAP-M12-MP-8004",
        "description":  "dust prevention cap, 5pin",
        "series":  "Optionals(GL20\u0026GE20)"
    }
];
