// Official ERC Core Team Roster (Academic Year 2026-27)

export const facultyMentor = {
  id: "mentor-niket-amoda",
  name: "Asst. Prof. Niket Amoda",
  role: "Faculty Mentor",
  branch: "Department of Electronics & Telecommunication",
  academicYear: "Faculty Oversight",
  bio: "Providing faculty oversight, academic governance, and strategic mentorship to support student-driven innovation across electronics, robotics, and embedded hardware.",
  photo: "/faculty-mentor.jpg",
  email: "erctet@gmail.com",
  linkedin: "https://linkedin.com/school/tcetmumbai",
  github: null
};

// Core Team Members strictly per official sequence:
// 1. Lead, 2. Co-Lead, 3. Technical Lead, 4. Social Media Lead, 5. Sponsorship Head, 6. Project Lead, 7. Secretary, 8. Event Lead, 9. Executive Lead
export const coreTeamMembers = [
  {
    id: "core-lead-gautam",
    name: "Gautam Thakur",
    role: "Club Lead",
    academicYear: "Third Year (TE)",
    photo: "/gautam-thakur.jpg",
    branch: "Electronics & Telecommunication",
    email: null,
    linkedin: null,
    github: null,
    bio: "Club Lead directing operations, student projects, and club initiatives."
  },
  {
    id: "core-colead-abhay",
    name: "Abhay Vishwakarma",
    role: "Club Co-Lead",
    academicYear: "Second Year (SE)",
    photo: "/abhay-vishwakarma.jpg",
    branch: "ST",
    email: null,
    linkedin: null,
    github: null,
    bio: "Club Co-Lead directing technical projects and core operations."
  },
  {
    id: "core-tech-bravim",
    name: "Bravim Singh",
    role: "Technical Lead",
    academicYear: "Second Year (SE)",
    photo: "/bravim-singh.jpg",
    branch: "ST",
    email: null,
    linkedin: null,
    github: null,
    bio: "Directs technical architecture and engineering sessions."
  },
  {
    id: "core-social-rudram",
    name: "Rudram Panchal",
    role: "Social Media Lead",
    academicYear: "Third Year (TE)",
    photo: null,
    branch: "E&TC",
    email: null,
    linkedin: null,
    github: null,
    bio: "Oversees digital presence, technical media, and student outreach."
  },
  {
    id: "core-sponsor-pratimhi",
    name: "Pratimhi Savant",
    role: "Sponsorship Head",
    academicYear: "Third Year (SE)",
    photo: null,
    branch: "SE",
    email: null,
    linkedin: null,
    github: null,
    bio: "Manages corporate technology partnerships and sponsorships."
  },
  {
    id: "core-proj-nidhi",
    name: "Nidhi Tare",
    role: "Project Lead",
    academicYear: "Second Year (SE)",
    photo: null,
    branch: "ST",
    email: null,
    linkedin: null,
    github: null,
    bio: "Coordinates project milestones, hardware prototyping, and lab testing."
  },
  {
    id: "core-sec-anshika",
    name: "Anshika Yadav",
    role: "Secretary",
    academicYear: "Second Year (SE)",
    photo: null,
    branch: "SE IT",
    email: null,
    linkedin: null,
    github: null,
    bio: "Responsible for official club documentation and departmental correspondence."
  },
  {
    id: "core-event-niyati",
    name: "Niyati Tare",
    role: "Event Lead",
    academicYear: "Second Year (SE)",
    photo: null,
    branch: "SE IT",
    email: null,
    linkedin: null,
    github: null,
    bio: "Curates and executes technical summits, hackathons, and workshops."
  },
  {
    id: "core-exec-riya",
    name: "Riya Yadav",
    role: "Executive Lead",
    academicYear: "Second Year (SE)",
    photo: null,
    branch: "ST",
    email: null,
    linkedin: null,
    github: null,
    bio: "Coordinates operational logistics, administration, and internal scheduling."
  }
];

// Preserved exports for compatibility
export const executiveLeaders = coreTeamMembers.slice(0, 2);
export const leadBranchMembers = coreTeamMembers.slice(2, 6);
export const coLeadBranchMembers = coreTeamMembers.slice(6);
export const allCoreMembers = coreTeamMembers;
