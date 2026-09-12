import React, { useState, useEffect } from 'react';
import { zephyrEventData } from '../../data/zephyrData';
import { soundFx } from '../../utils/audio';
import { 
  Flame, 
  Calendar, 
  Plane, 
  ArrowRight,
  ChevronRight,
  Radio
} from 'lucide-react';

const trackIcons = {
  Plane
};

export default function ZephyrSection({ onOpenRegisterModal }) {
  // Live Countdown calculation
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(zephyrEventData.eventDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="zephyr" className="py-24 bg-[#12181F] text-white relative overflow-hidden">
      {/* Background Circuit Grid */}
      <div className="absolute inset-0 circuit-grid-dark opacity-20 pointer-events-none" />
      
      {/* Ambient Pulsing Glow Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#D62828]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#1560D4]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Flagship Header & Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D62828]/20 border border-[#D62828] text-white font-mono text-xs font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4 text-[#D62828] animate-bounce" />
            FLAGSHIP TECHNICAL EVENT
          </div>

          <div className="space-y-1">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white">
              ZEPHYR <span className="text-[#D62828]">2026</span>
            </h2>
            <p className="text-lg sm:text-xl font-heading font-medium text-slate-300 italic">
              "{zephyrEventData.subtitle}"
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            {zephyrEventData.tagline} • {zephyrEventData.college}
          </p>
        </div>

        {/* Live Event Countdown Timer HUD */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 md:p-8 max-w-4xl mx-auto shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10 text-center sm:text-left">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
              <Calendar className="w-4 h-4 text-[#1560D4]" />
              <span>SEPTEMBER 29 - OCTOBER 01, 2026 • TCET AUDITORIUM &amp; AERIAL ARENA</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
              <Radio className="w-3.5 h-3.5 animate-ping" />
              <span>REGISTRATION PORTAL READY</span>
            </div>
          </div>

          {/* 4-Column Digital Clock */}
          <div className="grid grid-cols-4 gap-3 md:gap-6 my-6 text-center">
            <div className="p-4 md:p-6 rounded-xl bg-[#0B0F14]/70 border border-white/10">
              <div className="text-3xl md:text-5xl font-black font-mono text-white">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <span className="text-[10px] md:text-xs font-mono text-slate-400 uppercase tracking-wider block mt-1">
                Days
              </span>
            </div>

            <div className="p-4 md:p-6 rounded-xl bg-[#0B0F14]/70 border border-white/10">
              <div className="text-3xl md:text-5xl font-black font-mono text-[#D62828]">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <span className="text-[10px] md:text-xs font-mono text-slate-400 uppercase tracking-wider block mt-1">
                Hours
              </span>
            </div>

            <div className="p-4 md:p-6 rounded-xl bg-[#0B0F14]/70 border border-white/10">
              <div className="text-3xl md:text-5xl font-black font-mono text-[#1560D4]">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span className="text-[10px] md:text-xs font-mono text-slate-400 uppercase tracking-wider block mt-1">
                Minutes
              </span>
            </div>

            <div className="p-4 md:p-6 rounded-xl bg-[#0B0F14]/70 border border-white/10">
              <div className="text-3xl md:text-5xl font-black font-mono text-white">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <span className="text-[10px] md:text-xs font-mono text-slate-400 uppercase tracking-wider block mt-1">
                Seconds
              </span>
            </div>
          </div>

          {/* CTAs Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenRegisterModal();
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="px-8 py-3.5 rounded-xl bg-[#D62828] hover:bg-[#E31E24] text-white font-mono text-xs md:text-sm font-bold shadow-xl hover:shadow-[#D62828]/50 transition-all flex items-center gap-2 group"
            >
              <span>Register for Zephyr 2026</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#workshops"
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => soundFx.playClick()}
              className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-mono text-xs md:text-sm font-bold transition-all flex items-center gap-2"
            >
              <span>Explore Workshops</span>
              <ChevronRight className="w-4 h-4 text-[#1560D4]" />
            </a>
          </div>
        </div>

        {/* Highlights Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {zephyrEventData.highlights.map((h, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-black font-heading text-[#D62828]">
                {h.metric}
              </div>
              <span className="text-xs font-mono text-slate-300 mt-1 block">
                {h.label}
              </span>
            </div>
          ))}
        </div>

        {/* Flagship Competition Tracks */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-heading text-white">
              Flagship Arena Track
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Competitive engineering trials inside the netted indoor flight arena
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            {zephyrEventData.tracks.map((track, i) => {
              const Icon = trackIcons[track.icon] || Plane;
              return (
                <div
                  key={i}
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#1560D4] transition-all flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-[#0B0F14] text-[#1560D4] group-hover:text-[#D62828] transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#D62828] text-white font-bold">
                        {track.badge}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold font-heading text-white mb-2 group-hover:text-[#1560D4] transition-colors">
                      {track.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {track.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Arena: Flight Arena Hall</span>
                    <span className="text-emerald-400 font-bold">Certified Track</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
