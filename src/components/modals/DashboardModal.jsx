import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { soundFx } from '../../utils/audio';
import ErcBadge from '../brand/ErcBadge';
import { 
  X, 
  ShieldCheck, 
  Bell, 
  CheckSquare, 
  Users, 
  FileText, 
  LogOut, 
  Download,
  CheckCircle2,
  Sparkles,
  Search,
  Copy,
  Phone,
  Mail
} from 'lucide-react';
import { INTERNAL_RESOURCES } from '../../data/mockDb';

export default function DashboardModal({ isOpen, onClose }) {
  const { currentUser, logout, announcements, addAnnouncement, tasks, toggleTask, registrations } = useAuth();
  const [activeTab, setActiveTab] = useState("registrations");
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);

  // New Announcement Form State
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newPriority, setNewPriority] = useState("Normal");
  const [announcementSuccess, setAnnouncementSuccess] = useState(false);

  if (!isOpen || !currentUser) return null;

  // Count Zephyr registrations explicitly
  const zephyrRegistrations = registrations.filter(r => 
    (r.type || '').toLowerCase().includes('zephyr') || (r.track && !r.type)
  );
  const zephyrCount = zephyrRegistrations.length;

  // Filtered registrations
  const filteredRegistrations = registrations.filter(r => {
    const q = searchQuery.toLowerCase();
    return (
      (r.name && r.name.toLowerCase().includes(q)) ||
      (r.email && r.email.toLowerCase().includes(q)) ||
      (r.dept && r.dept.toLowerCase().includes(q)) ||
      (r.type && r.type.toLowerCase().includes(q)) ||
      (r.track && r.track.toLowerCase().includes(q)) ||
      (r.phone && r.phone.toLowerCase().includes(q))
    );
  });

  const exportCSV = () => {
    soundFx.playClick();
    const headers = ["Ticket ID", "Event Type", "Full Name", "Email", "Phone", "College", "Department", "Academic Year", "Track", "Date"];
    const rows = registrations.map(r => [
      `"${r.ticketNumber || r.id}"`,
      `"${r.type || 'Zephyr 2026'}"`,
      `"${r.name || ''}"`,
      `"${r.email || ''}"`,
      `"${r.phone || ''}"`,
      `"${r.college || 'TCET'}"`,
      `"${r.dept || ''}"`,
      `"${r.year || ''}"`,
      `"${r.track || ''}"`,
      `"${r.date || ''}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `ERC_TCET_Registrations_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyRegistrationsList = () => {
    soundFx.playClick();
    const text = registrations.map(r => 
      `• ${r.name} | ${r.email} | ${r.phone || 'N/A'} | ${r.dept || 'Engineering'} | ${r.type || 'Zephyr 2026'} | ID: ${r.ticketNumber || r.id}`
    ).join("\n");

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handlePostAnnouncement = (e) => {
    e.preventDefault();
    if (!newTitle || !newContent) return;
    soundFx.playClick();

    addAnnouncement({
      title: newTitle,
      content: newContent,
      priority: newPriority,
      targetRole: "All"
    });

    setNewTitle("");
    setNewContent("");
    setAnnouncementSuccess(true);
    setTimeout(() => setAnnouncementSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#12181F] text-white rounded-2xl border border-white/20 max-w-6xl w-full max-h-[94vh] flex flex-col overflow-hidden shadow-2xl relative">
        
        {/* Top App Bar */}
        <div className="p-4 md:p-6 border-b border-white/10 flex items-center justify-between bg-[#0B0F14]">
          <div className="flex items-center gap-3">
            <ErcBadge size={44} />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg md:text-xl font-bold font-heading text-white">
                  ERC Admin Command Center
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#D62828] text-white uppercase">
                  {currentUser.role}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Administrator: <strong className="text-white">{currentUser.fullName}</strong> ({currentUser.email})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                soundFx.playClick();
                logout();
                onClose();
              }}
              className="px-3 py-1.5 rounded-lg border border-red-500/40 text-red-400 hover:bg-red-500/10 font-mono text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dashboard Tabs Bar */}
        <div className="flex flex-wrap items-center gap-2 px-4 md:px-6 pt-3 pb-2 border-b border-white/10 bg-[#161F2B] font-mono text-xs">
          <button
            onClick={() => setActiveTab("registrations")}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "registrations" ? "bg-[#D62828] text-white font-bold shadow-xs" : "text-slate-300 hover:bg-white/5"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Zephyr Registrations ({zephyrCount})</span>
          </button>
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === "overview" ? "bg-[#1560D4] text-white font-bold" : "text-slate-300 hover:bg-white/5"
            }`}
          >
            System Overview
          </button>
          <button
            onClick={() => setActiveTab("announcements")}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "announcements" ? "bg-[#1560D4] text-white font-bold" : "text-slate-300 hover:bg-white/5"
            }`}
          >
            <Bell className="w-3.5 h-3.5" />
            <span>Announcements ({announcements.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("tasks")}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "tasks" ? "bg-[#1560D4] text-white font-bold" : "text-slate-300 hover:bg-white/5"
            }`}
          >
            <CheckSquare className="w-3.5 h-3.5" />
            <span>Committee Tasks</span>
          </button>
          <button
            onClick={() => setActiveTab("resources")}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "resources" ? "bg-[#1560D4] text-white font-bold" : "text-slate-300 hover:bg-white/5"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Vault</span>
          </button>
        </div>

        {/* Tab Body Scrollable Container */}
        <div className="p-4 md:p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* 1. REGISTRATIONS TAB (FOCUSED ON ZEPHYR COUNT & APPLICANT DETAILS) */}
          {activeTab === "registrations" && (
            <div className="space-y-6">
              
              {/* Zephyr Key Metrics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Total Zephyr Registered Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#D62828]/25 via-white/5 to-white/5 border-2 border-[#D62828] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#D62828] opacity-40" />
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#D62828] uppercase tracking-wider mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Zephyr 2026 Registrations</span>
                  </div>
                  <div className="text-4xl sm:text-5xl font-black font-heading text-white">
                    {zephyrCount}
                  </div>
                  <p className="text-xs text-slate-300 mt-2 font-mono">
                    Total students registered for Zephyr 2026.
                  </p>
                </div>

                {/* Total All Events */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Total Club Delegates
                  </span>
                  <div className="text-4xl sm:text-5xl font-black font-heading text-white">
                    {registrations.length}
                  </div>
                  <p className="text-xs text-slate-400 mt-2 font-mono">
                    Across Zephyr, Workshops, and Symposia.
                  </p>
                </div>

                {/* Database Sync Status */}
                <div className="p-5 rounded-2xl bg-[#0B0F14] border border-white/10 flex flex-col justify-between font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">DATABASE SYNC:</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> LIVE
                    </span>
                  </div>
                  <div className="text-slate-300 text-[11px] space-y-1">
                    <div>Official Email: <strong className="text-white">erctet@gmail.com</strong></div>
                    <div>Institute: <strong className="text-white">TCET Mumbai</strong></div>
                  </div>
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={exportCSV}
                      className="px-3 py-1.5 rounded-lg bg-[#1560D4] hover:bg-[#1B2430] text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Export CSV</span>
                    </button>
                    <button
                      onClick={copyRegistrationsList}
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? "Copied!" : "Copy List"}</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Search & Filter Strip */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <div className="relative w-full sm:w-96">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    placeholder="Search by student name, email, dept, phone..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-[#D62828]"
                  />
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Showing {filteredRegistrations.length} of {registrations.length} registered students
                </div>
              </div>

              {/* Complete Registered Students Details Table */}
              <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-lg">
                <table className="w-full text-left font-mono text-xs">
                  <thead className="bg-[#0B0F14] text-slate-400 border-b border-white/10 text-[10px] uppercase">
                    <tr>
                      <th className="p-3.5">Ticket ID</th>
                      <th className="p-3.5">Student Name</th>
                      <th className="p-3.5">Email &amp; Contact</th>
                      <th className="p-3.5">College &amp; Dept</th>
                      <th className="p-3.5">Year</th>
                      <th className="p-3.5">Event / Track</th>
                      <th className="p-3.5">Date</th>
                      <th className="p-3.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 bg-white/5">
                    {filteredRegistrations.length > 0 ? (
                      filteredRegistrations.map((r) => (
                        <tr key={r.id} className="hover:bg-white/10 transition-colors">
                          <td className="p-3.5 font-bold text-[#1560D4] whitespace-nowrap">
                            <span className="px-2 py-0.5 rounded bg-[#1560D4]/20 border border-[#1560D4]/30">
                              {r.ticketNumber || r.id}
                            </span>
                          </td>
                          <td className="p-3.5 font-bold text-white whitespace-nowrap">
                            {r.name}
                          </td>
                          <td className="p-3.5 text-slate-300">
                            <div className="flex flex-col">
                              <span className="flex items-center gap-1 text-slate-200">
                                <Mail className="w-3 h-3 text-[#D62828]" />
                                {r.email}
                              </span>
                              {r.phone && (
                                <span className="flex items-center gap-1 text-slate-400 text-[10px] mt-0.5">
                                  <Phone className="w-2.5 h-2.5" />
                                  {r.phone}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="p-3.5 text-slate-300">
                            <div>
                              <span className="text-white font-semibold">{r.dept || "E&TC"}</span>
                              <span className="text-[10px] text-slate-400 block">{r.college || "TCET Mumbai"}</span>
                            </div>
                          </td>
                          <td className="p-3.5 text-slate-300 whitespace-nowrap">
                            <span className="px-2 py-0.5 rounded bg-white/10 text-slate-200 text-[10px]">
                              {r.year || "SE / TE"}
                            </span>
                          </td>
                          <td className="p-3.5 text-[#D62828] font-bold">
                            <div>
                              <span className="block text-white">{r.type || "Zephyr 2026"}</span>
                              {r.track && (
                                <span className="text-[10px] text-slate-400 font-normal block max-w-xs truncate">
                                  {r.track}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="p-3.5 text-slate-400 whitespace-nowrap text-[11px]">
                            {r.date}
                          </td>
                          <td className="p-3.5 whitespace-nowrap">
                            <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                              Confirmed
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8" className="p-8 text-center text-slate-400">
                          No registration records match your search criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

            </div>
          )}

          {/* 2. OVERVIEW TAB */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 p-5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl border border-[#D62828] overflow-hidden shrink-0 bg-white/10 flex items-center justify-center">
                    {currentUser.avatar ? (
                      <img
                        src={currentUser.avatar}
                        alt={currentUser.fullName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ShieldCheck className="w-8 h-8 text-[#D62828]" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold font-heading text-white">{currentUser.fullName}</h4>
                    <p className="text-xs font-mono text-[#D62828] font-semibold">{currentUser.role} • {currentUser.academicYear}</p>
                    <p className="text-xs font-mono text-slate-400">{currentUser.department}</p>
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {currentUser.permissions.map((perm, i) => (
                        <span key={i} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-emerald-400 border border-emerald-500/20">
                          ✓ {perm.replace("_", " ")}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#0B0F14] border border-white/10 space-y-3 font-mono text-xs">
                  <span className="text-[#1560D4] font-bold block uppercase tracking-wider">
                    OPERATIONAL STATUS
                  </span>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Zephyr 2026:</span>
                    <span className="text-[#D62828] font-bold">PORTAL OPEN</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Registrations Count:</span>
                    <span className="text-emerald-400 font-bold">{zephyrCount} Students</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Lab Location:</span>
                    <span className="text-white font-bold">TCET Mumbai</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. ANNOUNCEMENTS TAB */}
          {activeTab === "announcements" && (
            <div className="space-y-6">
              <form onSubmit={handlePostAnnouncement} className="p-5 rounded-xl bg-[#0B0F14] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#D62828] uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Broadcast Official Announcement (Admin Authority)
                  </span>
                  {announcementSuccess && (
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Broadcast Published!
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Announcement Subject..."
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="sm:col-span-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#D62828]"
                  />
                  <select
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value)}
                    className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#D62828]"
                  >
                    <option value="Normal">Normal Priority</option>
                    <option value="High">High Priority</option>
                    <option value="Urgent">Urgent Priority</option>
                  </select>
                </div>
                <textarea
                  required
                  rows={3}
                  placeholder="Official message body..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#D62828]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#D62828] hover:bg-[#E31E24] text-white font-mono text-xs font-bold transition-all cursor-pointer"
                >
                  Publish Broadcast
                </button>
              </form>

              {/* Announcements Feed */}
              <div className="space-y-3">
                {announcements.map((ann) => (
                  <div key={ann.id} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                          ann.priority === 'Urgent' ? 'bg-red-500 text-white' :
                          ann.priority === 'High' ? 'bg-amber-500 text-black' : 'bg-[#1560D4] text-white'
                        }`}>
                          {ann.priority}
                        </span>
                        <h5 className="font-heading font-bold text-sm text-white">{ann.title}</h5>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">{ann.timestamp}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">{ann.content}</p>
                    <div className="text-[10px] font-mono text-slate-400 pt-1 border-t border-white/5">
                      Posted by: <strong className="text-white">{ann.author}</strong> • Audience: {ann.targetRole}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. TASKS TAB */}
          {activeTab === "tasks" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-bold text-sm text-white">Committee Milestones</h4>
                <span className="text-xs font-mono text-slate-400">Click checkmark to toggle status</span>
              </div>

              <div className="space-y-2">
                {tasks.map((task) => {
                  const isDone = task.status === "Completed";
                  return (
                    <div
                      key={task.id}
                      onClick={() => {
                        soundFx.playClick();
                        toggleTask(task.id);
                      }}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isDone 
                          ? "bg-white/5 border-white/10 opacity-60" 
                          : "bg-white/10 border-white/20 hover:border-[#1560D4]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                          isDone ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-400"
                        }`}>
                          {isDone && <CheckSquare className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <span className={`text-xs font-mono ${isDone ? "line-through text-slate-400" : "text-white font-medium"}`}>
                            {task.title}
                          </span>
                          <span className="text-[10px] text-slate-400 block font-mono">
                            Assigned to: {task.assignee} • Due: {task.deadline}
                          </span>
                        </div>
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isDone ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-300"
                      }`}>
                        {task.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 5. RESOURCES TAB */}
          {activeTab === "resources" && (
            <div className="space-y-4">
              <h4 className="font-heading font-bold text-sm text-white">Official Vault Documents &amp; Schematics</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {INTERNAL_RESOURCES.map((res) => (
                  <div key={res.id} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-[#1560D4] uppercase">
                        {res.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">{res.format}</span>
                    </div>
                    <h5 className="font-heading font-bold text-sm text-white">{res.title}</h5>
                    <p className="text-xs text-slate-400 font-sans">{res.description}</p>
                    <div className="pt-2 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-500">{res.updated}</span>
                      <a href={res.url} target="_blank" rel="noreferrer" className="text-[#1560D4] hover:underline flex items-center gap-1">
                        <span>Access Document</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
