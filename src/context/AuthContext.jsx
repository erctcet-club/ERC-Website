import React, { createContext, useContext, useState, useEffect } from 'react';
import { MOCK_USERS, INITIAL_ANNOUNCEMENTS, INITIAL_TASKS } from '../data/mockDb';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('erc_current_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [announcements, setAnnouncements] = useState(() => {
    try {
      const saved = localStorage.getItem('erc_announcements');
      return saved ? JSON.parse(saved) : INITIAL_ANNOUNCEMENTS;
    } catch {
      return INITIAL_ANNOUNCEMENTS;
    }
  });

  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('erc_tasks');
      return saved ? JSON.parse(saved) : INITIAL_TASKS;
    } catch {
      return INITIAL_TASKS;
    }
  });

  const [registrations, setRegistrations] = useState(() => {
    try {
      const saved = localStorage.getItem('erc_registrations');
      return saved ? JSON.parse(saved) : [
        { 
          id: "reg-1", 
          type: "Zephyr 2026", 
          name: "Kunal Sharma", 
          email: "kunal.sharma@tcetmumbai.in", 
          phone: "+91 98201 23456", 
          college: "TCET Mumbai", 
          dept: "Electronics & Telecommunication", 
          year: "Third Year (TE)", 
          track: "Autonomous Ground Robotics (AGV)", 
          ticketNumber: "ERC-ZEP-10101", 
          date: "2026-09-11" 
        },
        { 
          id: "reg-2", 
          type: "Zephyr 2026", 
          name: "Siddharth Patil", 
          email: "siddharth.p@tcetmumbai.in", 
          phone: "+91 97692 87654", 
          college: "TCET Mumbai", 
          dept: "Artificial Intelligence & Data Science", 
          year: "Second Year (SE)", 
          track: "UAV Autonomous Flight & Drones", 
          ticketNumber: "ERC-ZEP-10102", 
          date: "2026-09-12" 
        },
        { 
          id: "reg-3", 
          type: "Zephyr 2026", 
          name: "Aarav Gupta", 
          email: "aarav.gupta@tcetmumbai.in", 
          phone: "+91 99304 55432", 
          college: "TCET Mumbai", 
          dept: "Information Technology", 
          year: "Second Year (SE)", 
          track: "Embedded Firmware & KiCad PCB", 
          ticketNumber: "ERC-ZEP-10103", 
          date: "2026-09-12" 
        },
        { 
          id: "reg-4", 
          type: "Zephyr 2026", 
          name: "Pooja Mehta", 
          email: "pooja.mehta@tcetmumbai.in", 
          phone: "+91 98199 44321", 
          college: "TCET Mumbai", 
          dept: "Computer Engineering", 
          year: "Third Year (TE)", 
          track: "ROS2 Multi-Robot Simulation", 
          ticketNumber: "ERC-ZEP-10104", 
          date: "2026-09-13" 
        }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('erc_current_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('erc_current_user');
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('erc_announcements', JSON.stringify(announcements));
  }, [announcements]);

  useEffect(() => {
    localStorage.setItem('erc_tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('erc_registrations', JSON.stringify(registrations));
  }, [registrations]);

  // Authenticate user with support for admin / admin123
  const login = (identifier, password) => {
    const cleanId = identifier.trim().toLowerCase();
    
    // Official Admin Credentials: admin / admin123
    if ((cleanId === "admin" || cleanId === "erctet@gmail.com" || cleanId === "admin@erc.in") && password === "admin123") {
      const adminUser = {
        id: "usr-admin-lead",
        email: "erctet@gmail.com",
        username: "admin",
        fullName: "System Administrator",
        role: "Lead Administrator",
        department: "ERC Operations Command",
        academicYear: "Admin Access",
        avatar: "/gautam-thakur.jpg",
        permissions: ["full_access", "view_registrations", "manage_announcements", "export_data", "manage_events"]
      };
      setCurrentUser(adminUser);
      return { success: true, user: adminUser };
    }

    const user = MOCK_USERS.find(
      u => u.email.toLowerCase() === cleanId || u.username.toLowerCase() === cleanId
    );

    // Accept valid demo password or common test password
    if (user && (password === "admin123" || password === "erc@tcet2026" || password === "password" || password === "erc2026")) {
      setCurrentUser(user);
      return { success: true, user };
    }

    return { success: false, message: "Invalid credentials. Use admin / admin123 for Administrator access." };
  };

  // Quick switch for reviewers/evaluators
  const quickLoginAs = (role) => {
    if (role.toLowerCase() === "admin") {
      const adminUser = {
        id: "usr-admin-lead",
        email: "erctet@gmail.com",
        username: "admin",
        fullName: "System Administrator",
        role: "Lead Administrator",
        department: "ERC Operations Command",
        academicYear: "Admin Access",
        avatar: "/gautam-thakur.jpg",
        permissions: ["full_access", "view_registrations", "manage_announcements", "export_data", "manage_events"]
      };
      setCurrentUser(adminUser);
      return adminUser;
    }

    const user = MOCK_USERS.find(u => u.role.toLowerCase() === role.toLowerCase()) || MOCK_USERS[0];
    setCurrentUser(user);
    return user;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const addAnnouncement = (newAnn) => {
    const created = {
      id: `ann-${Date.now()}`,
      title: newAnn.title,
      content: newAnn.content,
      priority: newAnn.priority || "Normal",
      author: currentUser?.fullName || "Lead Administrator",
      targetRole: newAnn.targetRole || "All",
      timestamp: "Just now"
    };
    setAnnouncements(prev => [created, ...prev]);
  };

  const toggleTask = (taskId) => {
    setTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        return {
          ...t,
          status: t.status === "Completed" ? "In Progress" : "Completed"
        };
      }
      return t;
    }));
  };

  const addRegistration = (regData) => {
    const item = {
      id: `reg-${Date.now()}`,
      ...regData,
      date: regData.date || new Date().toISOString().split('T')[0]
    };
    setRegistrations(prev => [item, ...prev]);
    return item;
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      isAuthenticated: !!currentUser,
      login,
      quickLoginAs,
      logout,
      announcements,
      addAnnouncement,
      tasks,
      toggleTask,
      registrations,
      addRegistration
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
