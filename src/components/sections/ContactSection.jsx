import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { soundFx } from '../../utils/audio';
import { 
  Send, 
  MapPin, 
  Mail, 
  Globe, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { InstagramIcon, GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    soundFx.playClick();

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // Ignore if confetti is blocked
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F7F8FA] relative overflow-hidden border-b border-[#12181F]/10">
      {/* Background Circuit Grid */}
      <div className="absolute inset-0 circuit-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1560D4]/10 border border-[#1560D4]/30 text-[#1560D4] font-mono text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Multidisciplinary Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-[#12181F]">
            Let&apos;s Build Something.
          </h2>
          <p className="text-sm md:text-base text-[#12181F]/70 leading-relaxed font-sans max-w-xl mx-auto">
            Combining electronics, robotics, embedded systems, automation, software, and mechanical design to build practical solutions. Reach out for project collaborations, technical inquiries, or institutional research partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Official Contact & Campus Location (5 cols) */}
          <div className="lg:col-span-5 bg-[#12181F] text-white p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#D62828] opacity-30 pointer-events-none" />

            <div>
              <span className="text-xs font-mono text-[#D62828] font-bold uppercase tracking-wider block mb-1">
                Headquarters
              </span>
              <h3 className="text-2xl font-black font-heading text-white">
                TCET Mumbai Campus
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mt-2 font-mono">
                Advanced Avionics &amp; Robotics Lab (Lab 304 / 306), A-Block, Thakur College of Engineering &amp; Technology, Shyamnarayan Thakur Marg, Thakur Village, Kandivali (East), Mumbai 400101.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 pt-4 border-t border-white/10 text-xs font-mono text-slate-300">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/10 text-[#1560D4] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">OFFICIAL CORRESPONDENCE</span>
                  <a href="mailto:erctet@gmail.com" className="hover:text-white font-bold text-white transition-colors">
                    erctet@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/10 text-emerald-400 shrink-0 mt-0.5">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">INSTITUTIONAL PORTAL</span>
                  <a href="https://tcetmumbai.in" target="_blank" rel="noreferrer" className="hover:text-white font-bold text-white transition-colors">
                    www.tcetmumbai.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/10 text-[#D62828] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">LOCATION</span>
                  <span className="text-slate-200">Kandivali East, Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-3">
                Follow Technical Dispatches
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#D62828] text-slate-300 hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/erctcet-club"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#12181F] text-slate-300 hover:text-white transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/school/tcetmumbai"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#1560D4] text-slate-300 hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Minimal Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#12181F]/10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-[#12181F]">
                  Message Dispatched
                </h3>
                <p className="text-xs sm:text-sm text-[#12181F]/70 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your correspondence has been transmitted to the ERC TCET committee.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-[#12181F] text-white hover:bg-[#1B2430] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1 pb-2 border-b border-[#12181F]/10">
                  <h4 className="font-heading font-bold text-lg text-[#12181F]">
                    General Inquiries &amp; Collaborations
                  </h4>
                  <p className="text-xs text-[#12181F]/60">
                    Send a note directly to our team.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-[#12181F]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#12181F]/15 focus:border-[#1560D4] focus:outline-hidden text-xs bg-[#F7F8FA] text-[#12181F]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-[#12181F]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@tcetmumbai.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#12181F]/15 focus:border-[#1560D4] focus:outline-hidden text-xs bg-[#F7F8FA] text-[#12181F]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-[#12181F]">
                    Topic / Subject *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry / Hardware Collaboration / Sponsorship"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#12181F]/15 focus:border-[#1560D4] focus:outline-hidden text-xs bg-[#F7F8FA] text-[#12181F]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-[#12181F]">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your inquiry, project proposal, or collaboration interest..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#12181F]/15 focus:border-[#1560D4] focus:outline-hidden text-xs bg-[#F7F8FA] text-[#12181F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#12181F] hover:bg-[#1B2430] text-white font-mono text-xs font-bold transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
