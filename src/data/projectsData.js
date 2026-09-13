// Engineering Projects Portfolio for ERC TCET
// Structured project matrix adhering to the club's hardware & software innovation initiatives

export const projectsData = [
  {
    id: "proj-aim",
    title: "A.I.M. (Aerial Intelligence & Monitoring)",
    developer: "Abhay Vishwakarma",
    organization: "Electronics & Robotics Club (ERC), Thakur College of Engineering and Technology",
    category: "Aeronautics & Flight",
    year: "2026",
    image: "/surveillance-drone.jpg",
    oneLiner: "AI-powered cooperative UAV surveillance and autonomous robotics system.",
    summary: "A.I.M. is an advanced cooperative UAV system that integrates artificial intelligence, computer vision, drone telemetry, and autonomous navigation. The system uses a primary reconnaissance drone equipped with real-time YOLO-based object detection to analyze aerial environments. By combining visual data with GPS, altitude, orientation, and camera telemetry, the platform estimates geographic locations and communicates navigation information to a secondary drone through an ESP32-based MAVLink relay.",
    description: "A.I.M. is an advanced cooperative UAV system that integrates artificial intelligence, computer vision, drone telemetry, and autonomous navigation. The system uses a primary reconnaissance drone equipped with real-time YOLO-based object detection to analyze aerial environments. By combining visual data with GPS, altitude, orientation, and camera telemetry, the platform estimates geographic locations and communicates navigation information to a secondary drone through an ESP32-based MAVLink relay.",
    overview: "A.I.M. is an advanced cooperative UAV system that integrates artificial intelligence, computer vision, drone telemetry, and autonomous navigation. The system uses a primary reconnaissance drone equipped with real-time YOLO-based object detection to analyze aerial environments. By combining visual data with GPS, altitude, orientation, and camera telemetry, the platform estimates geographic locations and communicates navigation information to a secondary drone through an ESP32-based MAVLink relay.",
    problemStatement: "Conventional single-drone surveillance workflows face operational bottlenecks in wide-area reconnaissance, target acquisition latency, and manual coordinate handoffs. When monitoring dynamic environments, single UAVs struggle to maintain continuous visual track while simultaneously performing low-latency spatial localization and tactical tracking. A.I.M. eliminates these manual dependencies by establishing an autonomous cooperative multi-UAV architecture where scout and tracking units share intelligence directly via peer-to-peer MAVLink relays.",
    systemArchitecture: "The A.I.M. system operates across four integrated engineering subsystems:\n\n1. Primary Reconnaissance Node: High-altitude scouting quadcopter equipped with an HD optical gimbal and onboard computer vision processor executing real-time YOLO / Ultralytics object detection models.\n\n2. Geospatial Localization Engine: Spatial transformation pipeline fusing camera pitch/yaw, focal length, barometric altitude, and GPS telemetry to reverse-project pixel target detections into true-world geospatial coordinates.\n\n3. ESP32 MAVLink Relay Bridge: Dedicated micro-transceiver bridge translating visual coordinate vectors into standardized MAVLink command packets, transmitting peer-to-peer to secondary drones without requiring continuous ground control station routing.\n\n4. Secondary Autonomous Tracking UAV: ArduPilot-governed tactical drone receiving relayed navigation waypoints, executing closed-loop autonomous pursuit trajectories, and maintaining persistent reconnaissance lock.",
    technologies: [
      "Python",
      "YOLO / Ultralytics",
      "OpenCV",
      "MAVLink",
      "ArduPilot",
      "ESP32",
      "Autonomous UAV Systems",
      "Geospatial Computing"
    ],
    keyFeatures: [
      "Real-time YOLO / Ultralytics aerial object detection & visual classification",
      "Cooperative dual-UAV autonomous mission handoff (scout to pursuit drone)",
      "Spatial reverse-projection geospatial coordinate estimation engine",
      "ESP32 hardware MAVLink telemetry relay with sub-50ms peer latency",
      "ArduPilot closed-loop autonomous navigation and orbit tracking",
      "Stationary target localization with automated telemetry dispatch to command"
    ],
    developerInfo: {
      name: "Abhay Vishwakarma",
      role: "Club Co-Lead",
      department: "Electronics & Computing Specialization / ST",
      organization: "Electronics & Robotics Club (ERC), Thakur College of Engineering and Technology",
      email: "erctet@gmail.com"
    },
    featured: true,
    links: {
      github: "https://github.com/erctcet-club",
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
    title: "Heavy-Lift Autonomous Quadcopter",
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
