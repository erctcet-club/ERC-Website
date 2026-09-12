// Engineering Projects Portfolio for ERC TCET
// Structured project matrix adhering to the club's hardware & software innovation initiatives

export const projectsData = [
  {
    id: "proj-agv-mk4",
    title: "Autonomous Ground Vehicle (AGV)",
    category: "Robotics & Motion",
    year: "2026",
    image: "/assets/projects/agv.svg",
    summary: "Differential-drive autonomous robotic platform with 2D LiDAR SLAM, real-time obstacle avoidance, and industrial payload transport.",
    description: "The Autonomous Ground Vehicle (AGV) is engineered for autonomous factory floor and campus logistics. Built upon a rugged aluminium extrusion chassis, it integrates dual high-torque planetary DC motors with optical encoders. The perception stack runs ROS2 Humble, processing 360-degree LiDAR point clouds and wheel odometry via an Extended Kalman Filter (EKF) to construct real-time 2D occupancy grids and execute smooth trajectory tracking.",
    technologies: ["ROS2 Humble", "2D LiDAR", "SLAM", "C++", "Differential Drive", "EKF Odometry"],
    featured: true,
    links: {
      github: "https://github.com/erctcet-club",
      docs: null
    }
  },
  {
    id: "proj-uav-heavylift",
    title: "Heavy-Lift Autonomous Quadcopter",
    category: "Aeronautics & Flight",
    year: "2025–26",
    image: "/assets/projects/quadcopter.svg",
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
    category: "Robotics & IoT",
    year: "2025",
    image: "/assets/projects/agri-rover.svg",
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
    category: "Robotics & Kinematics",
    year: "2025–26",
    image: "/assets/projects/robotic-arm.svg",
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
    category: "Artificial Intelligence",
    year: "2026",
    image: "/assets/projects/edge-vision.svg",
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
    category: "Embedded & PCB",
    year: "2025–26",
    image: "/assets/projects/flight-pcb.svg",
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
