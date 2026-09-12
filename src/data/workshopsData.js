// Technical Workshops Data for ERC TCET
export const workshopsData = [
  {
    id: "ws-uav-drone-assembly",
    title: "UAV Drone Assembly & Betaflight Tuning",
    tagline: "FPV Quadcopter Aerodynamics, ESC Telemetry & PID Loop Tuning",
    badge: "Flagship Clinic",
    duration: "2 Days (16 Hours)",
    difficulty: "Intermediate",
    dates: "October 12–13, 2026",
    instructor: "ERC UAV Division Leads",
    description: "Hands-on bench build covering carbon fiber frame geometry, STM32F405 flight controller soldering, 4-in-1 ESC flashing, gyro notch filtering, and real-time blackbox telemetry analysis.",
    syllabus: [
      "Quadcopter Physics & Motor-Thrust Dynamics",
      "SMD Component Soldering & Power Distribution",
      "Betaflight Configurator, PID Tuning & Filtering",
      "Safety Failsafes & Transmitter Protocol Binding"
    ],
    prerequisites: "Basic electronics and soldering familiarity.",
    seatsAvailable: 35
  },
  {
    id: "ws-pcb-layout-kicad",
    title: "Multi-layer High-Speed PCB Layout in KiCad",
    tagline: "KiCad 8, Differential Impedance & Thermal Relief",
    badge: "Design Clinic",
    duration: "2 Days (14 Hours)",
    difficulty: "Intermediate",
    dates: "October 26–27, 2026",
    instructor: "ERC Hardware Architecture Team",
    description: "Learn professional schematic capture, 4-layer stackup design, controlled impedance routing for high-speed SPI/I2C buses, Gerber generation, and assembly BOM production.",
    syllabus: [
      "Schematic Hierarchy & Symbol Library Creation",
      "4-Layer Stackup & Ground Plane Return Paths",
      "Length Matching & Decoupling Capacitor Placement",
      "DRC Checks, Gerber Export & Pick-and-Place"
    ],
    prerequisites: "Circuit theory and electronic component fundamentals.",
    seatsAvailable: 30
  },
  {
    id: "ws-autonomous-ros2-lidar",
    title: "Autonomous Robotics with ROS 2 & LiDAR",
    tagline: "LiDAR SLAM, Nav2 Path Planning & Real-Time Motor Control",
    badge: "Hands-on Lab",
    duration: "3 Days (24 Hours)",
    difficulty: "Advanced",
    dates: "November 07–09, 2026",
    instructor: "ERC Autonomous Systems Lead",
    description: "Build and deploy 2D LiDAR simultaneous localization and mapping (SLAM) pipelines on differential-drive test platforms utilizing ROS 2 Humble and embedded micro-ROS bridges.",
    syllabus: [
      "ROS 2 Computational Graph, Nodes & Topics",
      "2D LiDAR SLAM & Costmap Generation",
      "Nav2 Waypoint Navigation & Obstacle Recovery",
      "Hardware Bringup with ESP32 micro-ROS"
    ],
    prerequisites: "Python or C++ programming background.",
    seatsAvailable: 28
  },
  {
    id: "ws-edge-ai-vision",
    title: "Edge AI & Computer Vision on Raspberry Pi / ESP32",
    tagline: "TensorFlow Lite Micro, OpenCV & Real-Time Object Tracking",
    badge: "AI Systems",
    duration: "2 Days (16 Hours)",
    difficulty: "Intermediate",
    dates: "November 21–22, 2026",
    instructor: "ERC Edge AI & Vision Lead",
    description: "Deploy quantized lightweight neural networks directly onto edge microcontrollers and SBCs for high-speed target classification, optical flow, and obstacle detection.",
    syllabus: [
      "Edge Hardware Architectures & Camera Interfaces",
      "OpenCV Pipelines for Color Space & Contour Tracking",
      "Model Quantization with TFLite Micro",
      "UART Telemetry Output to Flight Controllers"
    ],
    prerequisites: "Python basics and Linux terminal familiarity.",
    seatsAvailable: 32
  }
];
