import React from 'react';
import { soundFx } from '../../utils/audio';
import { 
  ArrowRight, 
  Users,
  Compass,
  Cpu,
  Bot,
  Plane
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[88vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F7F8FA] via-white to-[#F7F8FA]">
      {/* Background Circuit Grid & Subtle Accents */}
      <div className="absolute inset-0 circuit-grid opacity-50 pointer-events-none" />
      
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Minimal, High-Impact Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#12181F]/10 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#D62828]" />
              <span className="text-xs font-mono font-semibold tracking-wider text-[#12181F]/80">
                THAKUR COLLEGE OF ENGINEERING &amp; TECHNOLOGY
              </span>
            </div>

            {/* Club Identity Lockup */}
            <div className="space-y-3">
              <div className="flex items-baseline justify-center lg:justify-start gap-3">
                <span className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-[#D62828] tracking-tight">
                  ERC
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-[#12181F]">
                  Electronics &amp; Robotics Club
                </span>
              </div>

              {/* Large Slogan Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-[#12181F] leading-[1.08] tracking-tight">
                Building machines.<br />
                Exploring intelligence.<br />
                <span className="text-[#1560D4]">Engineering the future.</span>
              </h1>
            </div>

            {/* Concise Supporting Description */}
            <p className="text-sm sm:text-base text-[#12181F]/70 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Student engineering lab at TCET Mumbai dedicated to autonomous robotics, multirotor flight systems, embedded micro-architectures, and real-world hardware innovation.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
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
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 font-mono text-xs text-[#12181F]/60">
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

          {/* Right Column: Hero Visual - Featured Engineering Schematic */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl border border-[#12181F]/10 bg-white shadow-xl overflow-hidden group">
              
              {/* Top Header Strip */}
              <div className="px-5 py-3.5 bg-[#12181F] text-white flex items-center justify-between font-mono text-xs border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold tracking-wider">ERC LABORATORY LAB 304</span>
                </div>
                <span className="text-slate-400 text-[10px]">TCET MUMBAI</span>
              </div>

              {/* Schematic Graphic */}
              <div className="relative aspect-[16/11] bg-[#0B0F14] overflow-hidden">
                <img
                  src="/assets/projects/agv.svg"
                  alt="Autonomous Ground Vehicle engineering schematic"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Tag */}
                <div className="absolute bottom-3 left-3 bg-[#12181F]/90 backdrop-blur-xs border border-white/10 px-3 py-1.5 rounded-lg text-white font-mono text-xs flex items-center gap-2 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1560D4]" />
                  <span>Featured: AGV Mk-IV Navigation Rig</span>
                </div>
              </div>

              {/* Bottom Quick Spec Bar */}
              <div className="p-4 bg-white flex items-center justify-between text-xs font-mono text-[#12181F]/70 border-t border-[#12181F]/5">
                <span className="flex items-center gap-1.5 font-semibold text-[#12181F]">
                  <Compass className="w-3.5 h-3.5 text-[#D62828]" />
                  Autonomous Navigation
                </span>
                <span className="text-[11px] text-[#1560D4] font-bold">
                  ROS2 + 2D LiDAR
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
