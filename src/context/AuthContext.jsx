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
        { id: "reg-1", type: "Zephyr 2026", name: "Kunal Sharma", email: "kunal@gmail.com", college: "TCET", dept: "E&TC", date: "2026-09-11" },
        { id: "reg-2", type: "Drone Workshop", name: "Siddharth Patil", email: "sid@gmail.com", college: "TCET", dept: "AI&DS", date: "2026-09-12" },
        { id: "reg-3", type: "Club Membership", name: "Aarav Gupta", email: "aarav@gmail.com", college: "TCET", dept: "IT", date: "2026-09-12" }
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

  // Authenticate user
  const login = (identifier, password) => {
    const cleanId = identifier.trim().toLowerCase();
    const user = MOCK_USERS.find(
      u => u.email.toLowerCase() === cleanId || u.username.toLowerCase() === cleanId
    );

    // Accept valid demo password or common test password
    if (user && (password === "erc@tcet2026" || password === "password" || password === "erc2026")) {
      setCurrentUser(user);
      return { success: true, user };
    }

    return { success: false, message: "Invalid credentials. Use demo accounts or password: erc@tcet2026" };
  };

  // Quick switch for reviewers/evaluators
  const quickLoginAs = (role) => {
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
      date: new Date().toISOString().split('T')[0]
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
