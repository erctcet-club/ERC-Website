// Official ERC Core Team Roster (Academic Year 2026-27)
// Clean data-driven hierarchy preserving official structure

export const facultyMentor = {
  id: "mentor-niketamoda",
  name: "Assistant Professor Niketamoda",
  role: "Faculty Mentor",
  branch: "Department of Electronics & Telecommunication",
  academicYear: "Faculty Oversight",
  bio: "Providing faculty oversight, academic governance, and strategic mentorship to support student-driven innovation across electronics, robotics, and embedded hardware.",
  photo: "/faculty-mentor.jpg",
  email: "niketamoda@tcetmumbai.in",
  linkedin: "https://linkedin.com/school/tcetmumbai",
  github: null
};

// Executive Leadership
export const executiveLeaders = [
  {
    id: "lead-gautam-thakur",
    name: "Gautam Thakur",
    role: "Club Lead",
    branch: "Electronics and Telecommunication",
    academicYear: "Third Year (TE)",
    hierarchyGroup: "lead",
    bio: "Directs ERC operations, student project cohorts, technical vision, institutional initiatives, and organizational coordination.",
    photo: null,
    email: "gautam.thakur@tcetmumbai.in",
    linkedin: null,
    github: null
  },
  {
    id: "co-lead-abhay-vishwakarma",
    name: "Abhay Vishwakarma",
    role: "Club Co-Lead",
    branch: "Electronics & Computing Specialization",
    academicYear: "Third Year (TE)",
    hierarchyGroup: "co-lead",
    bio: "Co-leads ERC operations, cross-domain technical execution, lab resource management, and strategic rollout of club activities.",
    photo: null,
    email: "abhay.vishwakarma@tcetmumbai.in",
    linkedin: null,
    github: null
  }
];

// Lead Branch Domain Leads
export const leadBranchMembers = [
  {
    id: "tech-lead-brahim-singh",
    name: "Brahim Singh",
    role: "Technical Lead",
    branch: "ST AI&DS-D",
    academicYear: "Second Year (SE)",
    hierarchyGroup: "lead",
    bio: "Directs technical architecture, multirotor flight controllers, embedded firmware pipelines, and hands-on laboratory engineering sessions.",
    photo: null,
    email: "brahim.singh@tcetmumbai.in",
    linkedin: null,
    github: null
  },
  {
    id: "sponsor-hitarth-bhatt",
    name: "Hitarth Bhatt",
    role: "Sponsorship Lead",
    branch: "SE MME",
    academicYear: "Second Year (SE)",
    hierarchyGroup: "lead",
    bio: "Manages corporate technology partnerships, laboratory hardware sponsorships, industry alliances, and external funding relationships.",
    photo: null,
    email: "hitarth.bhatt@tcetmumbai.in",
    linkedin: null,
    github: null
  },
  {
    id: "social-rudram-panchal",
    name: "Rudram Panchal",
    role: "Social Media Lead",
    branch: "E&TC-B",
    academicYear: "Second Year (SE)",
    hierarchyGroup: "lead",
    bio: "Oversees digital presence, technical documentation media, workshop broadcasts, and student community outreach.",
    photo: null,
    email: "rudram.panchal@tcetmumbai.in",
    linkedin: null,
    github: null
  }
];

// Co-Lead Branch Domain Leads
export const coLeadBranchMembers = [
  {
    id: "exec-riya-yadav",
    name: "Riya Yadav",
    role: "Executive Lead",
    branch: "ST AI&DS-D",
    academicYear: "Second Year (SE)",
    hierarchyGroup: "co-lead",
    bio: "Coordinates operational logistics, institutional administration, member communications, and internal club scheduling.",
    photo: null,
    email: "riya.yadav@tcetmumbai.in",
    linkedin: null,
    github: null
  },
  {
    id: "sec-anshika-yadav",
    name: "Anshika Yadav",
    role: "Secretary",
    branch: "SE IT-D",
    academicYear: "Second Year (SE)",
    hierarchyGroup: "co-lead",
    bio: "Responsible for official documentation, institutional record-keeping, regulatory compliance, and departmental correspondence.",
    photo: null,
    email: "anshika.yadav@tcetmumbai.in",
    linkedin: null,
    github: null
  },
  {
    id: "proj-nidhi-tare",
    name: "Nidhi Tare",
    role: "Project Lead",
    branch: "ST AI&DS-D",
    academicYear: "Second Year (SE)",
    hierarchyGroup: "co-lead",
    bio: "Coordinates student project milestones, hardware prototyping phases, laboratory component inventories, and prototype testing.",
    photo: null,
    email: "nidhi.tare@tcetmumbai.in",
    linkedin: null,
    github: null
  },
  {
    id: "event-niyati-tare",
    name: "Niyati Tare",
    role: "Event Lead",
    branch: "SE IT-D",
    academicYear: "Second Year (SE)",
    hierarchyGroup: "co-lead",
    bio: "Curates, schedules, and executes technical summits, hackathons, hardware bootcamps, and club workshops.",
    photo: null,
    email: "niyati.tare@tcetmumbai.in",
    linkedin: null,
    github: null
  }
];

// Dedicated structured entry for Jaffer (ready for user-provided data)
export const jafferMember = {
  id: "member-jaffer",
  name: "Jaffer",
  role: "Core Team",
  branch: "", // To be updated once provided
  academicYear: "", // To be updated once provided
  hierarchyGroup: "leadership",
  bio: "", // To be updated once provided
  photo: null, // To be updated once provided
  email: null,
  linkedin: null,
  github: null,
  isPendingDetails: true // Set to false once details are provided
};

// All members aggregated for convenient lookup
export const allCoreMembers = [
  ...executiveLeaders,
  ...leadBranchMembers,
  ...coLeadBranchMembers
];
