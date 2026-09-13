import React from 'react';
import { soundFx } from '../../utils/audio';
import { 
  ArrowRight, 
  Users,
  Cpu,
  Bot,
  Plane
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F7F8FA] via-white to-[#F7F8FA]">
      {/* Background Circuit Grid & Subtle Accents */}
      <div className="absolute inset-0 circuit-grid opacity-40 pointer-events-none" />
      
      {/* Brand Corner Geometric Framing */}
      <div className="absolute top-0 left-0 w-28 h-28 border-t-2 border-l-2 border-[#D62828] pointer-events-none opacity-25" />
      <div className="absolute bottom-0 right-0 w-28 h-28 border-b-2 border-r-2 border-[#1560D4] pointer-events-none opacity-25" />

      {/* Floating Coordinate Telemetry */}
      <div className="absolute top-32 right-8 hidden lg:flex flex-col items-end gap-1 pointer-events-none font-mono text-[10px] text-[#12181F]/35">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>SYS_STATUS // ACTIVE</span>
        </div>
        <span>19.2056° N, 72.8752° E</span>
        <span>TCET MUMBAI</span>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-8">
        
        {/* Institution Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#12181F]/10 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#D62828]" />
          <span className="text-xs font-mono font-semibold tracking-wider text-[#12181F]/80">
            THAKUR COLLEGE OF ENGINEERING &amp; TECHNOLOGY
          </span>
        </div>

        {/* Club Identity Lockup */}
        <div className="space-y-4">
          <div className="flex items-baseline justify-center gap-3">
            <span className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-[#D62828] tracking-tight">
              ERC
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#12181F]">
              Electronics &amp; Robotics Club
            </span>
          </div>

          {/* Large Slogan Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-[#12181F] leading-[1.12] tracking-tight max-w-3xl mx-auto">
            Building machines.<br />
            Exploring intelligence.<br />
            <span className="text-[#1560D4]">Engineering the future.</span>
          </h1>
        </div>

        {/* Concise Supporting Description */}
        <p className="text-sm sm:text-base md:text-lg text-[#12181F]/70 max-w-2xl mx-auto leading-relaxed font-sans">
          Official student robotics and hardware engineering society at TCET Mumbai dedicated to autonomous robotics, multirotor flight systems, embedded micro-architectures, and real-world innovation.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#projects"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
            className="px-6 py-3.5 rounded-xl bg-[#12181F] hover:bg-[#1B2430] text-white font-mono text-xs sm:text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2.5 group"
          >
            <span>Explore Our Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#team"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#12181F] border border-[#12181F]/15 font-mono text-xs sm:text-sm font-bold transition-all duration-300 shadow-2xs hover:border-[#12181F]/30 flex items-center gap-2"
          >
            <Users className="w-4 h-4 text-[#D62828]" />
            <span>Meet The Team</span>
          </a>
        </div>

        {/* Technical Sub-strip */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-mono text-xs text-[#12181F]/60 border-t border-[#12181F]/10">
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-[#1560D4]" />
            <span>Robotics &amp; AGVs</span>
          </div>
          <div className="flex items-center gap-2">
            <Plane className="w-4 h-4 text-[#D62828]" />
            <span>Autonomous UAVs</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#12181F]" />
            <span>Embedded Systems</span>
          </div>
        </div>

      </div>
    </section>
  );
}
