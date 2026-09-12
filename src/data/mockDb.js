// Portable Database Service Layer (PostgreSQL / Supabase Ready)
// Features client-side LocalStorage synchronization, hashed password simulation, and RBAC matrix.

export const MOCK_USERS = [
  {
    id: "usr-lead-gautam",
    email: "gautam.thakur@tcetmumbai.in",
    username: "gautam_lead",
    passwordHash: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8", // "erc@tcet2026"
    fullName: "Gautam Thakur",
    role: "Lead",
    department: "Electronics and Telecommunication Engineering",
    academicYear: "Third Year",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80",
    permissions: ["full_access", "manage_roster", "manage_announcements", "manage_events", "manage_workshops"]
  },
  {
    id: "usr-colead-abhay",
    email: "abhay.vishwakarma@tcetmumbai.in",
    username: "abhay_colead",
    passwordHash: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8", // "erc@tcet2026"
    fullName: "Abhay Vishwakarma",
    role: "Co-Lead",
    department: "Electronics & Computing Specialization",
    academicYear: "Core Operations",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
    permissions: ["full_access", "manage_roster", "manage_announcements", "manage_events", "manage_workshops"]
  },
  {
    id: "usr-tech-brahim",
    email: "brahim.singh@tcetmumbai.in",
    username: "brahim_tech",
    passwordHash: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
    fullName: "Brahim Singh",
    role: "Technical Lead",
    department: "ST AI&DS-D, Roll 05",
    academicYear: "Second Year",
    avatar: null,
    permissions: ["manage_tech_content", "manage_workshops", "review_projects", "view_dashboard"]
  },
  {
    id: "usr-event-niyati",
    email: "niyati.tare@tcetmumbai.in",
    username: "niyati_event",
    passwordHash: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
    fullName: "Niyati Tare",
    role: "Event Lead",
    department: "SE IT-D, Roll 17",
    academicYear: "Second Year",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=80",
    permissions: ["manage_events", "view_registrations", "view_dashboard"]
  },
  {
    id: "usr-proj-nidhi",
    email: "nidhi.tare@tcetmumbai.in",
    username: "nidhi_proj",
    passwordHash: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
    fullName: "Nidhi Tare",
    role: "Project Lead",
    department: "ST AI&DS-D, Roll 27",
    academicYear: "Second Year",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80",
    permissions: ["manage_projects", "view_dashboard"]
  },
  {
    id: "usr-member-general",
    email: "member@tcetmumbai.in",
    username: "erc_member",
    passwordHash: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
    fullName: "Core Member",
    role: "Core Member",
    department: "TCET Engineering",
    academicYear: "2026-27",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    permissions: ["view_dashboard", "view_announcements", "view_resources"]
  }
];

export const INITIAL_ANNOUNCEMENTS = [
  {
    id: "ann-1",
    title: "Zephyr 2026 Flight Arena Blueprint Approved",
    content: "The TCET safety committee and campus infrastructure team have officially cleared the indoor netting layout for the UAV Drone Derby. Construction commences October 1st.",
    priority: "High",
    author: "Gautam Thakur (Lead)",
    targetRole: "All",
    timestamp: "2 hours ago"
  },
  {
    id: "ann-2",
    title: "Workshop Lab Equipment Dispatch: 40x STM32 & F405 Boards",
    content: "All flight controllers and 4-in-1 ESCs for the Drone Technology workshop have arrived in Lab 304. Inventory audit scheduled with Abhay Vishwakarma tomorrow at 4:00 PM.",
    priority: "Normal",
    author: "Abhay Vishwakarma (Co-Lead)",
    targetRole: "Technical & Operations",
    timestamp: "Yesterday"
  },
  {
    id: "ann-3",
    title: "Sponsorship Update: New Hardware Partner Secured",
    content: "Hitarth Bhatt has confirmed a corporate component grant supplying LiPo test stations and carbon fiber stock for our upcoming robotics build sprint.",
    priority: "Normal",
    author: "Hitarth Bhatt (Sponsorship Lead)",
    targetRole: "All",
    timestamp: "2 days ago"
  }
];

export const INITIAL_TASKS = [
  { id: "tsk-1", title: "Complete Zephyr 2026 arena safety mesh inspection", assignee: "Gautam Thakur", status: "In Progress", due: "Sep 20, 2026" },
  { id: "tsk-2", title: "Flash test firmware on 15 demo quadcopters", assignee: "Brahim Singh", status: "Pending", due: "Sep 22, 2026" },
  { id: "tsk-3", title: "Finalize industry guest speaker flight itinerary", assignee: "Niyati Tare", status: "Completed", due: "Sep 15, 2026" },
  { id: "tsk-4", title: "Distribute social media promotional reel for Zephyr", assignee: "Rudram Panchal", status: "In Progress", due: "Sep 18, 2026" },
  { id: "tsk-5", title: "Review component BOM for Project ARES UGV", assignee: "Nidhi Tare", status: "Completed", due: "Sep 14, 2026" }
];

export const INTERNAL_RESOURCES = [
  { title: "ERC Official Brand Style Guide (PDF)", size: "4.2 MB", type: "PDF", link: "#" },
  { title: "TCET Safety & Flight Arena Protocols 2026-27", size: "1.8 MB", type: "PDF", link: "#" },
  { title: "Betaflight 4.4 Blackbox Telemetry Parser Script", size: "124 KB", type: "ZIP", link: "#" },
  { title: "Zephyr 2026 Sponsorship Pitch Deck & Budget", size: "8.5 MB", type: "PDF", link: "#" },
  { title: "STM32F405 Custom PCB Schematic (KiCad 8)", size: "3.1 MB", type: "ZIP", link: "#" }
];
