// Engineering Projects Portfolio for ERC TCET
// Structured project matrix adhering to the club's hardware & software innovation initiatives

export const projectsData = [
  {
    id: "proj-aim",
    title: "AIM",
    subtitle: "Aerial Intelligence & Munitions",
    fullForm: "Aerial Intelligence & Munitions",
    developer: "Abhay Vishwakarma",
    organization: "Electronics & Robotics Club (ERC), Thakur College of Engineering and Technology",
    category: "Aeronautics & Flight",
    year: "2026",
    image: "/aim-hexacopter-v2.webp",
    fallbackImage: "/aim-hexacopter-v2.jpg",
    alt: "AIM Aerial Intelligence & Munitions UAV Platform",
    oneLiner: "Autonomous multi-UAV aerial intelligence and cooperative navigation platform.",
    summary: "AIM (Aerial Intelligence & Munitions) is a software-based aerial perception and autonomous robotics platform integrated with physical drone hardware. Utilizing a cooperative multi-UAV architecture, the platform pairs high-altitude reconnaissance with real-time YOLOv8 computer vision and geospatial ray projection to calculate accurate ground coordinates and dispatch waypoint navigation over an ESP32 MAVLink relay.",
    description: "AIM (Aerial Intelligence & Munitions) is a software-based aerial perception and autonomous robotics platform integrated with physical drone hardware. Utilizing a cooperative multi-UAV architecture, the platform pairs high-altitude reconnaissance with real-time YOLOv8 computer vision and geospatial ray projection to calculate accurate ground coordinates and dispatch waypoint navigation over an ESP32 MAVLink relay.",
    overview: "AIM (Aerial Intelligence & Munitions) is an advanced cooperative UAV platform that integrates artificial intelligence, computer vision, drone telemetry, and autonomous navigation. The system pairs an aerial reconnaissance hexacopter equipped with real-time YOLOv8 visual detection with ground control telemetry synchronization. By mathematically intersecting the camera viewing ray with a WGS-84 Earth model using high-frequency GPS, altitude, attitude, and gimbal angles, the system calculates precise real-world geospatial coordinates and communicates mission waypoints to a secondary UAV via an ESP32 wireless MAVLink relay.",
    problemStatement: "Conventional single-drone autonomous workflows face operational bottlenecks in balancing continuous wide-area perception with low-latency spatial localization and tactical waypoint execution. Single UAVs often struggle to process real-time neural network inference while simultaneously calculating ground spatial coordinates and managing flight paths. AIM addresses this by establishing an autonomous cooperative multi-UAV architecture, separating high-altitude reconnaissance perception from mission waypoint execution using peer-to-peer MAVLink telemetry relays.",
    systemArchitecture: "The AIM platform operates across four verified hardware & software engineering subsystems:\n\n1. Reconnaissance Hexacopter Node: High-altitude multirotor platform streaming live HD RTSP video to ground edge-compute systems running real-time Ultralytics YOLOv8 object detection pipelines.\n\n2. WGS-84 Ray Projection Engine: Mathematical coordinate projection engine synchronizing video frames with high-frequency MAVLink telemetry (GPS, barometric altitude, roll/pitch/yaw attitude, and camera gimbal angles) to project viewing rays onto the WGS-84 ellipsoid and calculate true geographic latitude/longitude.\n\n3. ESP32 MAVLink Wireless Relay: Hardware micro-transceiver bridge translating calculated geospatial coordinates into standardized MAVLink waypoint packets with sub-50ms transmission latency.\n\n4. Autonomous Secondary UAV: ArduPilot-governed autonomous drone receiving relayed navigation waypoints, executing closed-loop trajectory navigation, and carrying out designated flight missions.",
    technologies: [
      "Python 3.11+",
      "YOLOv8 / Ultralytics",
      "OpenCV",
      "PyMAVLink",
      "ArduPilot",
      "ESP32 Relay",
      "WGS-84 Ray Projection",
      "Autonomous UAV Systems"
    ],
    hardware: [
      "Custom Hexacopter Multirotor Airframe",
      "ArduPilot Compatible Flight Controller",
      "Optical Gimbal Payload",
      "ESP32 Wireless MAVLink Transceiver",
      "Autonomous Secondary UAV"
    ],
    keyFeatures: [
      "Real-time YOLOv8 aerial object detection on live RTSP video feeds",
      "Mathematical Ray Projection Engine for WGS-84 geospatial coordinate calculation",
      "Cooperative multi-UAV mission architecture separating perception from execution",
      "Low-latency ESP32 wireless relay for peer-to-peer MAVLink waypoint dispatch",
      "ArduPilot closed-loop autonomous navigation and waypoint tracking",
      "Modular payload architecture for hardware-software integration"
    ],
    developerInfo: {
      name: "Abhay Vishwakarma",
      role: "Club Co-Lead",
      department: "AI&DS / ST",
      organization: "Electronics & Robotics Club (ERC), Thakur College of Engineering and Technology",
      email: "1032251955@tcetmumbai.in"
    },
    featured: true,
    links: {
      github: "https://github.com/AbhayLabs-07/Aerial-Intelligence-Munitions-A.I.M-.git",
      docs: null
    }
  },
  {
    id: "proj-self-tuning-fm-radio",
    title: "Nano-Based Self-Tuning FM Radio",
    subtitle: "Closed-Loop RSSI Antenna Aiming",
    developer: "Gautam Thakur",
    organization: "Electronics & Robotics Club (ERC), Thakur College of Engineering and Technology",
    category: "Embedded Systems / Electronics / Automation",
    year: "2026",
    image: "/self-tuning-fm-radio.webp",
    fallbackImage: "/self-tuning-fm-radio.jpg",
    alt: "Nano-Based Self-Tuning FM Radio hardware enclosure with TEA5767 tuner and servo-steered antenna",
    oneLiner: "Self-tuning Arduino Nano FM receiver with TEA5767 tuner and closed-loop RSSI servo antenna aiming.",
    summary: "A self-tuning FM receiver built using an Arduino Nano, combining a TEA5767 FM tuner with a servo-actuated antenna and closed-loop RSSI feedback to automatically search for the strongest reception angle and adjust the antenna accordingly.",
    description: "A self-tuning FM receiver built using an Arduino Nano, combining a TEA5767 FM tuner with a servo-actuated antenna and closed-loop RSSI feedback.\n\nThe system automatically searches for the strongest reception angle and adjusts the antenna accordingly, eliminating the need for manual antenna positioning. Users can control the radio through two buttons and a rotary encoder, with buzzer feedback for different actions.",
    overview: "The Nano-Based Self-Tuning FM Radio is an automated embedded electronics system designed to optimize FM radio reception without manual antenna intervention. Built around an Arduino Nano, it interfaces with a TEA5767 FM tuner module over I2C, paired with an SG90 servo motor that sweeps a telescopic antenna through a 0–180° arc. By continuously sampling RSSI values across the angular sweep, the embedded firmware dynamically parks the antenna at the orientation yielding peak signal strength, while periodic background routines ensure persistent high-fidelity reception.",
    problemStatement: "Traditional low-cost FM radios require manual antenna adjustment and retuning when signal quality changes. This project solves that problem by introducing an automated antenna-aiming mechanism with real-time signal-strength monitoring and closed-loop feedback.",
    systemArchitecture: "1. TEA5767 Tuner Core:\n• Direct I2C register control and PLL frequency computation\n• Real-time RSSI signal strength monitoring and stereo/mono detection\n\n2. Servo Antenna Aiming Engine:\n• SG90 servo motor driving a 0–180° antenna sweep\n• Multi-angle RSSI sampling to automatically park at the strongest reception angle\n\n3. RSSI Watchdog and Periodic Re-seek:\n• Continuous signal quality monitoring and automatic re-aiming when reception degrades\n• Periodic background re-seek executed every 3 minutes\n\n4. Input and Feedback Layer:\n• Rotary encoder for fine frequency tuning (87.5 to 108.0 MHz)\n• Dedicated preset cycling buttons and 16x2 I2C LCD display\n• Audio buzzer feedback confirming user interactions and lock states",
    technologies: [
      "Arduino",
      "C/C++",
      "TEA5767",
      "I2C",
      "LiquidCrystal_I2C",
      "Servo Control",
      "RSSI Feedback",
      "Rotary Encoder",
      "Embedded State Machines"
    ],
    hardware: [
      "Arduino Nano Microcontroller",
      "TEA5767 FM Stereo Tuner Module",
      "SG90 Micro Servo Motor",
      "16x2 I2C Character LCD Display",
      "Rotary Encoder with Push Switch",
      "Dual Preset Pushbuttons & Buzzer",
      "Telescopic Antenna & Enclosure"
    ],
    keyFeatures: [
      "Closed-loop automatic antenna aiming using live RSSI feedback",
      "Automatic signal re-search when reception quality degrades",
      "Periodic background re-seek every 3 minutes",
      "11 FM presets with next/previous cycling",
      "Manual frequency tuning from 87.5 to 108.0 MHz",
      "Servo enable/disable menu",
      "Live signal strength and stereo/mono status",
      "Non-blocking embedded control loop"
    ],
    developerInfo: {
      name: "Gautam Thakur",
      role: "Club Lead",
      department: "E&TC",
      organization: "Electronics & Robotics Club (ERC), Thakur College of Engineering and Technology",
      email: "1032250166@tcetmumbai.in"
    },
    featured: true,
    links: {
      github: "https://github.com/Electric-Brain/Nano-Based-Radio-for-Grandpa",
      docs: null
    }
  },
  {
    id: "proj-electromaster-4x",
    title: "ELECTROMASTER 4X",
    subtitle: "4-in-1 Portable Electronics Lab Toolkit",
    developer: "Gautam Thakur",
    organization: "Electronics & Robotics Club (ERC), Thakur College of Engineering and Technology",
    category: "Electronics / Embedded Systems / Instrumentation / Educational Technology",
    year: "2026",
    image: "/electromaster-4x-studio.webp",
    fallbackImage: "/electromaster-4x-studio.jpg",
    alt: "ELECTROMASTER 4X 4-in-1 Electronics Laboratory Toolkit with Oscilloscope and Function Generator",
    oneLiner: "Affordable, portable electronics toolkit combining signal generation, waveform analysis, component testing, and adjustable power delivery.",
    summary: "ELECTROMASTER 4X is an affordable, portable electronics toolkit that combines signal generation, waveform analysis, component testing, and adjustable power delivery into a single compact system.",
    description: "ELECTROMASTER 4X is an affordable, portable electronics toolkit that combines signal generation, waveform analysis, component testing, and adjustable power delivery into a single compact system.",
    overview: "ELECTROMASTER 4X is a compact, multifunctional electronics toolkit designed to combine four essential laboratory and prototyping instruments into a single affordable and portable device.\n\nThe system integrates:\n1. A mini function generator\n2. A Raspberry Pi Pico-based oscilloscope\n3. An Arduino Nano-based component tester\n4. A variable power supply\n\nThe project is designed to make essential electronics testing and experimentation tools more accessible to students, beginners, hobbyists, and engineers.",
    problemStatement: "Traditional electronics laboratories often require multiple separate instruments, making experimentation expensive and less accessible to students.\n\nELECTROMASTER 4X addresses this problem by integrating multiple essential electronics tools into one compact and cost-effective platform. The project focuses on reducing the cost of essential electronics equipment, combining multiple instruments into one portable device, making experimentation easier for students and beginners, and supporting circuit testing, debugging, prototyping, and educational applications.",
    systemArchitecture: "1. Mini Function Generator (XR2206 IC):\n• Generates sine, triangle, and square waveforms with adjustable signal characteristics\n• Frequency range selection with dedicated coarse/fine tuning knobs\n• Designed as a compact and affordable alternative for basic signal-generation requirements\n\n2. Raspberry Pi Pico Oscilloscope (Scoopy Environment):\n• Real-time waveform visualization and signal analysis for educational and experimental purposes\n• Hardware ADC sampling connected to the Scoopy application/software environment\n• Dedicated probe inputs with channel attenuation\n\n3. Arduino Nano Component Tester:\n• Automated identification and measurement of resistors, capacitors, diodes, transistors, inductors, and semiconductors\n• Electrical response measurement and parameter calculation using programmed algorithms\n• Display of measured values and component information with calibration support\n\n4. Variable Power Supply (LM2596 Buck Converter):\n• Variable DC power supply designed using a 12V adapter and LM2596 buck-converter module\n• Continuous 1–12V adjustable voltage regulation plus dedicated 5V and 9V test rails\n• Compact, stable, and efficient power delivery suitable for powering and testing electronic circuits",
    technologies: [
      "Arduino Nano",
      "Raspberry Pi Pico",
      "XR2206 IC",
      "LM2596 Buck Converter",
      "C/C++",
      "Embedded Systems",
      "I2C / SPI Communication",
      "ADC-Based Measurement",
      "EasyEDA",
      "Scoopy",
      "PCB Design",
      "Circuit Prototyping"
    ],
    hardware: [
      "Arduino Nano Microcontroller",
      "Raspberry Pi Pico Board",
      "XR2206 Monolithic Function Generator IC",
      "LM2596 Step-Down Buck Converter Module",
      "16x2 Character LCD Displays (x2)",
      "Digital 7-Segment Voltmeter Panel",
      "Banana Terminal Test Ports & Alligator Probes",
      "Custom Benchtop Lab Enclosure"
    ],
    keyFeatures: [
      "Four-in-one electronics toolkit",
      "Mini function generator for waveform generation (sine, triangle, square)",
      "Raspberry Pi Pico-based oscilloscope for real-time waveform observation",
      "Arduino Nano-based component tester with automated parameter calculation",
      "Variable power supply with LM2596 voltage regulation (1–12V)",
      "Compact and portable benchtop design",
      "Affordable alternative to multiple laboratory instruments",
      "Useful for electronics education, experimentation, and circuit debugging",
      "Modular architecture for future upgrades"
    ],
    applications: [
      "Electronics education and laboratory experiments",
      "Circuit testing, hardware debugging, and breadboard validation",
      "Signal generation and waveform analysis",
      "Component identification and parameter measurement",
      "Prototype development and hobbyist electronics projects",
      "Robotics and embedded-system experimentation",
      "Field-level electronics diagnostics"
    ],
    futureScope: [
      "Touchscreen-based user interface",
      "Improved oscilloscope bandwidth and sampling resolution",
      "Higher-performance ADCs or microcontrollers",
      "Digitally controlled power supply with current limiting",
      "Bluetooth or Wi-Fi connectivity",
      "Modular plug-and-play hardware expansion"
    ],
    developerInfo: {
      name: "Gautam Thakur",
      role: "Club Lead",
      department: "E&TC",
      organization: "Electronics & Robotics Club (ERC), Thakur College of Engineering and Technology",
      email: "1032250166@tcetmumbai.in"
    },
    featured: true,
    links: {
      github: null,
      docs: null
    }
  },
  {
    id: "proj-agv-mk4",
    title: "Autonomous Ground Vehicle (AGV)",
    developer: "ERC Robotics Wing",
    organization: "Electronics & Robotics Club (ERC), TCET",
    category: "Robotics & Motion",
    year: "2026",
    image: "/assets/projects/agv.svg",
    oneLiner: "Differential-drive autonomous robotic platform with 2D LiDAR SLAM.",
    summary: "Differential-drive autonomous robotic platform with 2D LiDAR SLAM, real-time obstacle avoidance, and industrial payload transport.",
    description: "The Autonomous Ground Vehicle (AGV) is engineered for autonomous factory floor and campus logistics. Built upon a rugged aluminium extrusion chassis, it integrates dual high-torque planetary DC motors with optical encoders. The perception stack runs ROS2 Humble, processing 360-degree LiDAR point clouds and wheel odometry via an Extended Kalman Filter (EKF) to construct real-time 2D occupancy grids and execute smooth trajectory tracking.",
    technologies: ["ROS2 Humble", "2D LiDAR", "SLAM", "C++", "Differential Drive", "EKF Odometry"],
    featured: false,
    links: {
      github: "https://github.com/erctcet-club",
      docs: null
    }
  },
  {
    id: "proj-uav-heavylift",
    title: "Heavy-Lift Autonomous Multirotor",
    developer: "ERC Avionics Wing",
    organization: "Electronics & Robotics Club (ERC), TCET",
    category: "Aeronautics & Flight",
    year: "2025–26",
    image: "/assets/projects/quadcopter.svg",
    oneLiner: "Custom carbon-fiber multirotor for high-altitude waypoint navigation.",
    summary: "Custom carbon-fiber multirotor engineered for high-altitude waypoint navigation, long-range telemetry, and payload deployment.",
    description: "An advanced multirotor airframe constructed from 3K twill carbon-fiber tubes and CNC-machined aluminium motor mounts. Powered by a custom PX4-based flight controller with redundant IMU sensors, GPS-RTK positioning, and ELRS 2.4GHz control telemetry. Features autonomous mission waypoint sequencing, fail-safe geofencing, and automated return-to-launch (RTL) flight modes.",
    technologies: ["PX4 Autopilot", "STM32F4", "GPS-RTK", "Carbon 3K", "ELRS Telemetry", "BLHeli_32"],
    featured: false,
    links: {
      github: "https://github.com/erctcet-club",
      docs: null
    }
  },
  {
    id: "proj-agri-rover",
    title: "Autonomous Agricultural Field Rover",
    developer: "ERC Embedded & IoT Wing",
    organization: "Electronics & Robotics Club (ERC), TCET",
    category: "Robotics & Motion",
    year: "2025",
    image: "/assets/projects/agri-rover.svg",
    oneLiner: "All-terrain exploration rover with soil analysis probes and LoRaWAN.",
    summary: "All-terrain exploration rover with soil analysis probes, multi-spectral camera telemetry, and long-range LoRaWAN telemetry.",
    description: "Designed to navigate irregular agricultural terrain using an articulated rocker-bogie suspension system. Equipped with automated motorized depth probes to sample soil moisture, electrical conductivity, and temperature. Field telemetry is compressed and dispatched over long-range LoRa 868MHz wireless links to an edge gateway for farm management.",
    technologies: ["LoRaWAN", "Rocker-Bogie", "ESP32", "Soil Telemetry", "Embedded C", "Solar Harvesting"],
    featured: false,
    links: {
      github: "https://github.com/erctcet-club",
      docs: null
    }
  },
  {
    id: "proj-robotic-arm-6dof",
    title: "6-DOF Articulated Robotic Manipulator",
    developer: "ERC Kinematics Wing",
    organization: "Electronics & Robotics Club (ERC), TCET",
    category: "Robotics & Motion",
    year: "2025–26",
    image: "/assets/projects/robotic-arm.svg",
    oneLiner: "Precision 6-axis articulated arm featuring inverse kinematics calculation.",
    summary: "Precision 6-axis articulated arm featuring inverse kinematics calculation, custom modular joint actuators, and industrial pick-and-place end-effectors.",
    description: "A 6-Degrees-of-Freedom desktop articulated manipulator designed for automated component sorting and precision assembly. Joint actuation is driven by closed-loop stepper motors coupled with planetary gearboxes. Trajectory generation is executed via MoveIt2 motion planning frameworks, solving inverse Jacobian kinematics in real-time.",
    technologies: ["MoveIt2", "Inverse Kinematics", "Closed-Loop Steppers", "Python", "ROS2", "CAD/FEA"],
    featured: false,
    links: {
      github: "https://github.com/erctcet-club",
      docs: null
    }
  },
  {
    id: "proj-edge-ai-vision",
    title: "Edge AI Computer Vision Perception Node",
    developer: "ERC AI & Vision Wing",
    organization: "Electronics & Robotics Club (ERC), TCET",
    category: "Artificial Intelligence",
    year: "2026",
    image: "/assets/projects/edge-vision.svg",
    oneLiner: "TensorRT-accelerated edge perception unit for high-speed object detection.",
    summary: "TensorRT-accelerated edge perception unit for high-speed object detection, AprilTags fiducial tracking, and autonomous drone landing guidance.",
    description: "A compact onboard computer vision unit powered by NVIDIA Jetson architecture. Runs real-time YOLOv8 convolutional neural network models quantized with TensorRT FP16 precision, achieving 40+ FPS detection rates. Provides spatial visual odometry and precision landing guidance for UAVs targeting ground QR/AprilTags beacons.",
    technologies: ["TensorRT", "YOLOv8", "OpenCV", "Jetson Nano", "AprilTags", "Python"],
    featured: false,
    links: {
      github: "https://github.com/erctcet-club",
      docs: null
    }
  },
  {
    id: "proj-flight-pcb-fc",
    title: "Custom 4-Layer Flight Controller PCB",
    developer: "ERC Hardware Wing",
    organization: "Electronics & Robotics Club (ERC), TCET",
    category: "Embedded & PCB",
    year: "2025–26",
    image: "/assets/projects/flight-pcb.svg",
    oneLiner: "Proprietary 4-layer ENIG avionics board with STM32 ARM Cortex-M4 MCU.",
    summary: "Proprietary 4-layer ENIG avionics board with STM32 ARM Cortex-M4 MCU, ultra-low noise IMU power filtering, and integrated CAN-Bus telemetry.",
    description: "A bespoke avionics printed circuit board designed in KiCad with controlled-impedance differential pairs and dedicated internal ground planes. Features an STM32F405 ARM Cortex-M4 microcontroller running FreeRTOS, high-precision barometric pressure sensor, onboard micro-SD blackbox logger, and robust reverse-polarity protection for high-g drone maneuvers.",
    technologies: ["KiCad", "STM32 ARM Cortex", "FreeRTOS", "4-Layer ENIG", "CAN-Bus", "SPI/I2C"],
    featured: false,
    links: {
      github: "https://github.com/erctcet-club",
      docs: null
    }
  }
];
