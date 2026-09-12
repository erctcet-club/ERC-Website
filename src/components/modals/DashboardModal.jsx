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
  Plus, 
  LogOut, 
  Calendar, 
  Download,
  CheckCircle2,
  Clock,
  Sparkles,
  AlertTriangle
} from 'lucide-react';
import { INTERNAL_RESOURCES } from '../../data/mockDb';

export default function DashboardModal({ isOpen, onClose }) {
  const { currentUser, logout, announcements, addAnnouncement, tasks, toggleTask, registrations } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  // New Announcement Form State
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newPriority, setNewPriority] = useState("Normal");
  const [announcementSuccess, setAnnouncementSuccess] = useState(false);

  if (!isOpen || !currentUser) return null;

  // RBAC checks
  const isLead = currentUser.role === "Lead" || currentUser.role === "Co-Lead";
  const canManageEvents = isLead || currentUser.role === "Event Lead";
  const canManageWorkshops = isLead || currentUser.role === "Technical Lead";

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
      <div className="bg-[#12181F] text-white rounded-2xl border border-white/20 max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl relative">
        
        {/* Top App Bar */}
        <div className="p-4 md:p-6 border-b border-white/10 flex items-center justify-between bg-[#0B0F14]">
          <div className="flex items-center gap-3">
            <ErcBadge size={42} />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg md:text-xl font-bold font-heading text-white">
                  ERC Core Operations Command
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#D62828] text-white uppercase">
                  {currentUser.role}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Logged in as: <strong className="text-white">{currentUser.fullName}</strong> ({currentUser.email})
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
              className="px-3 py-1.5 rounded-lg border border-red-500/40 text-red-400 hover:bg-red-500/10 font-mono text-xs flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dashboard Tabs Bar */}
        <div className="flex flex-wrap items-center gap-2 px-4 md:px-6 pt-3 pb-2 border-b border-white/10 bg-[#161F2B] font-mono text-xs">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "overview" ? "bg-[#1560D4] text-white font-bold" : "text-slate-300 hover:bg-white/5"
            }`}
          >
            Mission Overview
          </button>
          <button
            onClick={() => setActiveTab("announcements")}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === "announcements" ? "bg-[#1560D4] text-white font-bold" : "text-slate-300 hover:bg-white/5"
            }`}
          >
            <Bell className="w-3.5 h-3.5" />
            <span>Announcements ({announcements.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("registrations")}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === "registrations" ? "bg-[#1560D4] text-white font-bold" : "text-slate-300 hover:bg-white/5"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Live Registrations ({registrations.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("tasks")}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === "tasks" ? "bg-[#1560D4] text-white font-bold" : "text-slate-300 hover:bg-white/5"
            }`}
          >
            <CheckSquare className="w-3.5 h-3.5" />
            <span>Assigned Tasks</span>
          </button>
          <button
            onClick={() => setActiveTab("resources")}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === "resources" ? "bg-[#1560D4] text-white font-bold" : "text-slate-300 hover:bg-white/5"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Internal Vault</span>
          </button>
        </div>

        {/* Tab Body Scrollable Container */}
        <div className="p-4 md:p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* 1. OVERVIEW TAB */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Profile Card & Role Permissions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 p-5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.fullName}
                    className="w-16 h-16 rounded-xl object-cover border border-[#D62828]"
                  />
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
                    SYSTEM STATUS
                  </span>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Flight Arena:</span>
                    <span className="text-emerald-400 font-bold">READY</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Zephyr 2026:</span>
                    <span className="text-[#D62828] font-bold">REGISTRATION LIVE</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Active Drones:</span>
                    <span className="text-white font-bold">4 Airframes</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>RBAC Level:</span>
                    <span className="text-emerald-400 font-bold">{isLead ? "ADMIN" : "OPERATOR"}</span>
                  </div>
                </div>
              </div>

              {/* Quick Summary Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono text-slate-400 block">TOTAL REGISTRATIONS</span>
                  <span className="text-2xl font-bold font-heading text-white">{registrations.length}</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono text-slate-400 block">PENDING DELIVERABLES</span>
                  <span className="text-2xl font-bold font-heading text-[#D62828]">{tasks.filter(t => t.status !== "Completed").length}</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono text-slate-400 block">ANNOUNCEMENTS</span>
                  <span className="text-2xl font-bold font-heading text-[#1560D4]">{announcements.length}</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono text-slate-400 block">RESOURCES ARCHIVED</span>
                  <span className="text-2xl font-bold font-heading text-white">{INTERNAL_RESOURCES.length}</span>
                </div>
              </div>
            </div>
          )}

          {/* 2. ANNOUNCEMENTS TAB */}
          {activeTab === "announcements" && (
            <div className="space-y-6">
              {/* Broadcast form if Lead/Co-Lead */}
              {isLead && (
                <form onSubmit={handlePostAnnouncement} className="p-5 rounded-xl bg-[#0B0F14] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#D62828] uppercase flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Broadcast Official Announcement (Lead Authority)
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
                      <option value="Normal" className="bg-[#12181F]">Priority: Normal</option>
                      <option value="High" className="bg-[#12181F]">Priority: High</option>
                      <option value="Urgent" className="bg-[#12181F]">Priority: Urgent</option>
                    </select>
                  </div>
                  <textarea
                    rows={2}
                    required
                    placeholder="Provide details for core committee and workshop attendees..."
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#D62828]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-[#D62828] hover:bg-[#E31E24] text-white font-mono text-xs font-bold transition-all"
                  >
                    Publish Broadcast
                  </button>
                </form>
              )}

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

          {/* 3. REGISTRATIONS TAB */}
          {activeTab === "registrations" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-bold text-sm text-white">Live Delegations &amp; Applications</h4>
                <span className="text-xs font-mono text-emerald-400">● REAL-TIME SYNCHRONIZED</span>
              </div>

              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left font-mono text-xs">
                  <thead className="bg-[#0B0F14] text-slate-400 border-b border-white/10 text-[10px] uppercase">
                    <tr>
                      <th className="p-3">Type</th>
                      <th className="p-3">Name</th>
                      <th className="p-3">Email</th>
                      <th className="p-3">College / Dept</th>
                      <th className="p-3">Date</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 bg-white/5">
                    {registrations.map((r) => (
                      <tr key={r.id} className="hover:bg-white/10 transition-colors">
                        <td className="p-3 font-bold text-[#D62828]">{r.type}</td>
                        <td className="p-3 font-semibold text-white">{r.name}</td>
                        <td className="p-3 text-slate-300">{r.email}</td>
                        <td className="p-3 text-slate-300">{r.college || "TCET"} • {r.dept || "E&TC"}</td>
                        <td className="p-3 text-slate-400">{r.date}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            Approved
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                          ? "bg-emerald-950/20 border-emerald-500/30 text-slate-300" 
                          : "bg-white/5 border-white/10 hover:border-white/20 text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                          isDone ? "bg-emerald-500 border-emerald-500 text-black" : "border-white/30"
                        }`}>
                          {isDone && <CheckCircle2 className="w-4 h-4 text-white" />}
                        </div>
                        <span className={`text-xs font-medium ${isDone ? "line-through text-slate-400" : "text-white"}`}>
                          {task.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 font-mono text-[11px]">
                        <span className="text-slate-400">Assignee: <strong className="text-white">{task.assignee}</strong></span>
                        <span className="text-slate-400">Due: {task.due}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] ${
                          isDone ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"
                        }`}>
                          {task.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 5. INTERNAL VAULT TAB */}
          {activeTab === "resources" && (
            <div className="space-y-4">
              <h4 className="font-heading font-bold text-sm text-white">Internal Engineering Documents &amp; Firmware</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {INTERNAL_RESOURCES.map((res, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-[#1560D4]/20 text-[#1560D4]">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-heading font-bold text-xs text-white">{res.title}</h5>
                        <span className="text-[10px] font-mono text-slate-400">{res.type} • {res.size}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => soundFx.playClick()}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                      title="Download Resource"
                    >
                      <Download className="w-4 h-4" />
                    </button>
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
