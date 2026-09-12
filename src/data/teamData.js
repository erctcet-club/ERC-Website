// Official ERC Core Team Roster (Academic Year 2026-27)
// Updated with verified roles and removed placeholder photos

export const facultyMentor = {
  id: "mentor-niketamoda",
  name: "Assistant Professor Niketamoda",
  position: "Faculty Mentor",
  roleCategory: "Faculty",
  department: "Thakur College of Engineering",
  academicYear: "Faculty Mentor",
  rollNo: "FAC-ERC",
  bio: "Providing faculty oversight, academic guidance, and strategic mentorship to support student innovation in electronics and robotics engineering.",
  photo: "/faculty-mentor.jpg",
  email: "niketamoda@tcetmumbai.in",
  linkedin: "https://linkedin.com/school/tcetmumbai",
  isAssigned: true,
  isFaculty: true,
};

export const coreTeamMembers = [
  {
    id: "lead-gautam-thakur",
    name: "Gautam Thakur",
    position: "Lead",
    domainTitle: "LEAD",
    roleCategory: "Leadership",
    department: "Electronics and Telecommunication Engineering",
    academicYear: "Third Year",
    rollNo: "TE E&TC",
    bio: "Leads ERC and oversees overall vision, technical activities, team coordination, and institutional initiatives.",
    photo: null,
    email: "gautam.thakur@tcetmumbai.in",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    isAssigned: true,
    hierarchyOrder: 1,
    accent: "red",
    branch: "lead"
  },
  {
    id: "co-lead-abhay-vishwakarma",
    name: "Abhay Vishwakarma",
    position: "Co-Lead",
    domainTitle: "CO-LEAD",
    roleCategory: "Leadership",
    department: "Electronics & Computing Specialization",
    academicYear: "Third Year",
    rollNo: "CO-LEAD-01",
    bio: "Co-leads ERC operations, cross-domain technical execution, and strategic rollout of club activities.",
    photo: null,
    email: "abhay.vishwakarma@tcetmumbai.in",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    isAssigned: true,
    hierarchyOrder: 2,
    accent: "blue",
    branch: "co-lead"
  },
  {
    id: "tech-lead-brahim-singh",
    name: "Brahim Singh",
    position: "Technical Lead",
    domainTitle: "TECH LEAD",
    roleCategory: "Technical",
    department: "ST AI&DS-D",
    academicYear: "Second Year",
    rollNo: "Roll 05",
    bio: "Responsible for technical direction, drone flight controllers, embedded firmware innovation, and hands-on engineering activities.",
    photo: null,
    email: "brahim.singh@tcetmumbai.in",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    isAssigned: true,
    hierarchyOrder: 3,
    accent: "red",
    branch: "lead"
  },
  {
    id: "sponsor-hitarth-bhatt",
    name: "Hitarth Bhatt",
    position: "Sponsorship Lead",
    domainTitle: "SPONSOR LEAD",
    roleCategory: "External Relations",
    department: "SE MME",
    academicYear: "Second Year",
    rollNo: "Roll 34",
    bio: "Manages industry partnerships, corporate sponsorships, lab equipment grants, and external funding relationships.",
    photo: null,
    email: "hitarth.bhatt@tcetmumbai.in",
    linkedin: "https://linkedin.com/in/",
    isAssigned: true,
    hierarchyOrder: 4,
    accent: "red",
    branch: "lead"
  },
  {
    id: "social-rudram-panchal",
    name: "Rudram Panchal",
    position: "Social Media Lead",
    domainTitle: "SOCIAL MEDIA LEAD",
    roleCategory: "Outreach",
    department: "E&TC-B",
    academicYear: "Second Year",
    rollNo: "Roll 06",
    bio: "Manages ERC's social media presence, visual broadcasts, technical documentaries, and online community outreach.",
    photo: null,
    email: "rudram.panchal@tcetmumbai.in",
    linkedin: "https://linkedin.com/in/",
    isAssigned: true,
    hierarchyOrder: 5,
    accent: "red",
    branch: "lead"
  },
  {
    id: "exec-riya-yadav",
    name: "Riya Yadav",
    position: "Executive Lead",
    domainTitle: "EXEC LEAD",
    roleCategory: "Operations",
    department: "ST AI&DS-D",
    academicYear: "Second Year",
    rollNo: "Roll 60",
    bio: "Coordinates execution, administration, internal operational logistics, and organizational activities of the club.",
    photo: null,
    email: "riya.yadav@tcetmumbai.in",
    linkedin: "https://linkedin.com/in/",
    isAssigned: true,
    hierarchyOrder: 6,
    accent: "blue",
    branch: "co-lead"
  },
  {
    id: "sec-anshika-yadav",
    name: "Anshika Yadav",
    position: "Secretary",
    domainTitle: "SECRETARY",
    roleCategory: "Administration",
    department: "SE IT-D",
    academicYear: "Second Year",
    rollNo: "Roll 48",
    bio: "Handles official documentation, correspondence, regulatory compliance, and internal record-keeping for ERC.",
    photo: null,
    email: "anshika.yadav@tcetmumbai.in",
    linkedin: "https://linkedin.com/in/",
    isAssigned: true,
    hierarchyOrder: 7,
    accent: "blue",
    branch: "co-lead"
  },
  {
    id: "proj-nidhi-tare",
    name: "Nidhi Tare",
    position: "Project Lead",
    domainTitle: "PROJECT LEAD",
    roleCategory: "Technical",
    department: "ST AI&DS-D",
    academicYear: "Second Year",
    rollNo: "Roll 27",
    bio: "Coordinates technical projects, hardware research initiatives, student project cohorts, and practical prototype execution.",
    photo: null,
    email: "nidhi.tare@tcetmumbai.in",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    isAssigned: true,
    hierarchyOrder: 8,
    accent: "blue",
    branch: "co-lead"
  },
  {
    id: "event-niyati-tare",
    name: "Niyati Tare",
    position: "Event Lead",
    domainTitle: "EVENT LEAD",
    roleCategory: "Operations",
    department: "SE IT-D",
    academicYear: "Second Year",
    rollNo: "Roll 17",
    bio: "Plans, schedules, and executes ERC's institutional events, technical summits, and flagship sessions.",
    photo: null,
    email: "niyati.tare@tcetmumbai.in",
    linkedin: "https://linkedin.com/in/",
    isAssigned: true,
    hierarchyOrder: 9,
    accent: "blue",
    branch: "co-lead"
  }
];

// Structured Hierarchy Tree Definition
export const leadNode = {
  ...coreTeamMembers.find(m => m.id === "lead-gautam-thakur"),
  subordinates: [
    coreTeamMembers.find(m => m.id === "tech-lead-brahim-singh"),
    coreTeamMembers.find(m => m.id === "sponsor-hitarth-bhatt"),
    coreTeamMembers.find(m => m.id === "social-rudram-panchal")
  ]
};

export const coLeadNode = {
  ...coreTeamMembers.find(m => m.id === "co-lead-abhay-vishwakarma"),
  subordinates: [
    coreTeamMembers.find(m => m.id === "exec-riya-yadav"),
    coreTeamMembers.find(m => m.id === "sec-anshika-yadav"),
    coreTeamMembers.find(m => m.id === "proj-nidhi-tare"),
    coreTeamMembers.find(m => m.id === "event-niyati-tare")
  ]
};

export const teamHierarchy = {
  apex: {
    name: "ERC",
    fullName: "Electronics & Robotics Club",
    description: "Executive Student Body • TCET Mumbai"
  },
  branches: [
    { key: "lead", node: leadNode },
    { key: "coLead", node: coLeadNode }
  ]
};

