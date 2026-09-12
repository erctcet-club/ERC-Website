import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { useAuth } from '../../context/AuthContext';
import { soundFx } from '../../utils/audio';
import { 
  Send, 
  MapPin, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Sparkles, 
  Globe, 
  ArrowRight,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

export default function ContactSection() {
  const { addRegistration } = useAuth();
  const [activeTab, setActiveTab] = useState("join"); // "join" or "inquiry"
  
  // Membership Form State
  const [joinForm, setJoinForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "Electronics & Telecommunication",
    year: "Second Year (SE)",
    rollNo: "",
    domainInterest: "Drone Technology",
    statement: ""
  });

  // General Inquiry State
  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    soundFx.playClick();

    addRegistration({
      type: "Club Membership",
      name: joinForm.name,
      email: joinForm.email,
      phone: joinForm.phone,
      dept: joinForm.department,
      year: joinForm.year,
      domain: joinForm.domainInterest,
      college: "TCET"
    });

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    setSuccessMessage(`Welcome to the mission, ${joinForm.name}! Your ERC application has been transmitted to the Core Committee.`);
    setSubmitted(true);
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    soundFx.playClick();

    setSuccessMessage(`Thank you, ${inquiryForm.name}! Your message has been routed to the ERC Secretary.`);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background Circuit Grid */}
      <div className="absolute inset-0 circuit-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D62828]/10 border border-[#D62828]/30 text-[#D62828] font-mono text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Admissions &amp; Outreach
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#12181F]">
            Join the Electronics &amp; Robotics Club
          </h2>
          <p className="text-sm md:text-base text-[#12181F]/70">
            Open to all enrolled students of Thakur College of Engineering and Technology (TCET) who are passionate about hardware innovation, flight robotics, and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Campus Headquarters & Contact Telemetry (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#12181F] text-white p-6 md:p-8 rounded-2xl border border-white/10 relative overflow-hidden shadow-xl space-y-6">
              
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#D62828] opacity-40 pointer-events-none" />

              <div>
                <span className="text-xs font-mono text-[#D62828] font-bold uppercase tracking-wider block mb-1">
                  Official Campus Headquarters
                </span>
                <h3 className="text-2xl font-black font-heading text-white">
                  TCET Mumbai Campus
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-2 font-mono">
                  A-Block Advanced Avionics &amp; Robotics Lab (Lab 304 / 306), Shyamnarayan Thakur Marg, Thakur Village, Kandivali (East), Mumbai 400101.
                </p>
              </div>

              {/* Direct Info Lines */}
              <div className="space-y-3 text-xs font-mono text-slate-300 border-t border-white/10 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/10 text-[#1560D4]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">OFFICIAL CORRESPONDENCE</span>
                    <a href="mailto:erc@tcetmumbai.in" className="hover:text-white font-bold">erc@tcetmumbai.in</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/10 text-emerald-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">COLLEGE PORTAL</span>
                    <a href="https://tcetmumbai.in" target="_blank" rel="noreferrer" className="hover:text-white font-bold">www.tcetmumbai.in</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/10 text-[#D62828]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">FACULTY MENTOR OFFICE</span>
                    <span className="text-white font-bold">Assistant Professor Niketamoda (Faculty Mentor, ERC)</span>
                  </div>
                </div>
              </div>

              {/* Core Committee Highlights */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-slate-300 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Club Lead:</span>
                  <span className="text-white font-bold">Gautam Thakur</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Club Co-Lead:</span>
                  <span className="text-white font-bold">Vishwakarma</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Technical Lead:</span>
                  <span className="text-slate-400 font-bold">—</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Membership Application Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F7F8FA] p-6 md:p-8 rounded-2xl border border-[#12181F]/10 shadow-xs">
            
            {/* Form Toggle Tabs */}
            <div className="flex items-center gap-2 mb-6 border-b border-[#12181F]/10 pb-4">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setActiveTab("join");
                  setSubmitted(false);
                }}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all ${
                  activeTab === "join"
                    ? "bg-[#D62828] text-white shadow-xs"
                    : "bg-white text-[#12181F]/70 border border-[#12181F]/10 hover:bg-slate-100"
                }`}
              >
                Membership Application (2026-27)
              </button>

              <button
                onClick={() => {
                  soundFx.playClick();
                  setActiveTab("inquiry");
                  setSubmitted(false);
                }}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all ${
                  activeTab === "inquiry"
                    ? "bg-[#12181F] text-white shadow-xs"
                    : "bg-white text-[#12181F]/70 border border-[#12181F]/10 hover:bg-slate-100"
                }`}
              >
                General Inquiries &amp; Sponsorships
              </button>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-white rounded-xl border border-emerald-200 shadow-sm space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-[#12181F]">
                  Transmission Confirmed
                </h3>
                <p className="text-xs sm:text-sm text-[#12181F]/70 max-w-md mx-auto leading-relaxed">
                  {successMessage}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 rounded-xl bg-[#12181F] text-white text-xs font-mono font-bold hover:bg-[#1B2430]"
                  >
                    Submit Another Response
                  </button>
                </div>
              </div>
            ) : activeTab === "join" ? (
              <form onSubmit={handleJoinSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kunal Sharma"
                      value={joinForm.name}
                      onChange={(e) => setJoinForm({ ...joinForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#12181F]/15 bg-white text-sm focus:outline-none focus:border-[#D62828]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                      TCET Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name.roll@tcetmumbai.in"
                      value={joinForm.email}
                      onChange={(e) => setJoinForm({ ...joinForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#12181F]/15 bg-white text-sm focus:outline-none focus:border-[#D62828]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={joinForm.phone}
                      onChange={(e) => setJoinForm({ ...joinForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#12181F]/15 bg-white text-sm focus:outline-none focus:border-[#D62828]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                      Department *
                    </label>
                    <select
                      value={joinForm.department}
                      onChange={(e) => setJoinForm({ ...joinForm, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#12181F]/15 bg-white text-sm focus:outline-none focus:border-[#D62828]"
                    >
                      <option value="Electronics & Telecommunication">E&amp;TC</option>
                      <option value="AI & Data Science (AI&DS)">AI&amp;DS</option>
                      <option value="Information Technology (IT)">IT</option>
                      <option value="Computer Engineering (COMP)">COMP</option>
                      <option value="Mechanical & Mechatronics (MME)">MME / Mech</option>
                      <option value="Civil / Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                      Academic Year *
                    </label>
                    <select
                      value={joinForm.year}
                      onChange={(e) => setJoinForm({ ...joinForm, year: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#12181F]/15 bg-white text-sm focus:outline-none focus:border-[#D62828]"
                    >
                      <option value="First Year (FE)">First Year (FE)</option>
                      <option value="Second Year (SE)">Second Year (SE)</option>
                      <option value="Third Year (TE)">Third Year (TE)</option>
                      <option value="Final Year (BE)">Final Year (BE)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                    Primary Domain of Interest *
                  </label>
                  <select
                    value={joinForm.domainInterest}
                    onChange={(e) => setJoinForm({ ...joinForm, domainInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#12181F]/15 bg-white text-sm focus:outline-none focus:border-[#D62828]"
                  >
                    <option value="Drone Technology">Drone Technology &amp; UAV Systems</option>
                    <option value="Robotics & SLAM">Autonomous Robotics &amp; SLAM</option>
                    <option value="Industrial Automation">Industrial Automation &amp; PLC</option>
                    <option value="Embedded Systems">Embedded Firmware &amp; Microcontrollers</option>
                    <option value="PCB & Electronics">Hardware Electronics &amp; PCB Design</option>
                    <option value="AI & Computer Vision">Edge AI &amp; Computer Vision</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                    What hardware or coding projects have you explored? (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about any Arduino, drones, Python, 3D printing, or robotics projects you have tinkered with..."
                    value={joinForm.statement}
                    onChange={(e) => setJoinForm({ ...joinForm, statement: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#12181F]/15 bg-white text-sm focus:outline-none focus:border-[#D62828]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#D62828] hover:bg-[#E31E24] text-white font-mono text-xs md:text-sm font-bold shadow-md hover:shadow-[#D62828]/40 transition-all flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Transmit Membership Application</span>
                </button>
              </form>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. / Mr. / Ms."
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#12181F]/15 bg-white text-sm focus:outline-none focus:border-[#12181F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contact@company.com"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#12181F]/15 bg-white text-sm focus:outline-none focus:border-[#12181F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                    Subject / Topic *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Zephyr 2026 Sponsorship / Lab Collaboration"
                    value={inquiryForm.subject}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#12181F]/15 bg-white text-sm focus:outline-none focus:border-[#12181F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your query or partnership proposal..."
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#12181F]/15 bg-white text-sm focus:outline-none focus:border-[#12181F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#12181F] hover:bg-[#1B2430] text-white font-mono text-xs md:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiries to ERC</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
