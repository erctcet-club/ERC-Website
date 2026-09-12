import React from 'react';
import ErcLogo from '../brand/ErcLogo';
import ErcBadge from '../brand/ErcBadge';
import { soundFx } from '../../utils/audio';
import { 
  Bot, 
  Cpu, 
  ArrowRight, 
  Flame, 
  Zap, 
  Activity, 
  Sparkles, 
  Boxes,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

export default function HeroSection({ onOpenJoinModal }) {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F7F8FA] via-white to-[#F7F8FA]">
      {/* Background Circuit Grid & Subtle Diagonal Wedge Accents */}
      <div className="absolute inset-0 circuit-grid opacity-60 pointer-events-none" />
      
      {/* Brand Corner Geometric Wedges */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-[#D62828] pointer-events-none opacity-20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-[#1560D4] pointer-events-none opacity-20" />

      {/* Floating Circuit Nodes in Corners */}
      <div className="absolute top-28 right-12 hidden lg:flex flex-col items-end gap-1 pointer-events-none font-mono text-[10px] text-[#12181F]/40">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1560D4] animate-ping" />
          <span>SYS_STATUS: ACTIVE</span>
        </div>
        <span>COORD: 19.2056° N, 72.8752° E</span>
        <span>TCET_ENGINEERING_CAMPUS</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions (6 Cols) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* TCET Affiliation Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#12181F]/10 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#D62828] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wide text-[#12181F]">
                THAKUR COLLEGE OF ENGINEERING &amp; TECHNOLOGY (TCET), MUMBAI
              </span>
            </div>

            {/* Official Wordmark Lockup */}
            <div className="flex justify-center lg:justify-start">
              <ErcLogo className="h-14 md:h-16" showTagline={true} />
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-[#12181F] leading-tight">
                Engineering the Future <br className="hidden sm:inline" />
                Through <span className="text-[#D62828] underline decoration-[#1560D4] decoration-4 underline-offset-8">Innovation.</span>
              </h1>
              <p className="text-sm sm:text-base font-mono font-semibold text-[#1560D4] tracking-wider pt-2">
                EXPLORE. BUILD. AUTOMATE.
              </p>
            </div>

            {/* Description Body */}
            <p className="text-sm md:text-base text-[#12181F]/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              The official student-driven technical club bridging electronics, robotics, automation, machine learning, AI, and engineering technologies. Empowering TCET engineers to build real-world hardware solutions and solve mission-critical challenges.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#about"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className="px-6 py-3 rounded-xl bg-[#12181F] hover:bg-[#1B2430] text-white font-mono text-xs md:text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group"
              >
                <span>Explore ERC</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#zephyr"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className="px-6 py-3 rounded-xl bg-[#D62828] hover:bg-[#E31E24] text-white font-mono text-xs md:text-sm font-bold transition-all duration-300 shadow-md hover:shadow-[#D62828]/30 flex items-center gap-2 group"
              >
                <Flame className="w-4 h-4 text-amber-300 animate-bounce" />
                <span>View Zephyr 2026</span>
              </a>
            </div>

            {/* Live Telemetry Ticker Bar */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#12181F]/10 max-w-lg mx-auto lg:mx-0">
              <div className="bg-white/80 p-2.5 rounded-lg border border-[#12181F]/5 text-center lg:text-left">
                <span className="text-[10px] font-mono text-[#12181F]/60 block">ACTIVE DOMAINS</span>
                <span className="text-base font-extrabold font-heading text-[#12181F]">9 Specializations</span>
              </div>
              <div className="bg-white/80 p-2.5 rounded-lg border border-[#12181F]/5 text-center lg:text-left">
                <span className="text-[10px] font-mono text-[#12181F]/60 block">FLAGSHIP EVENT</span>
                <span className="text-base font-extrabold font-heading text-[#D62828]">Zephyr 2026</span>
              </div>
              <div className="bg-white/80 p-2.5 rounded-lg border border-[#12181F]/5 text-center lg:text-left">
                <span className="text-[10px] font-mono text-[#12181F]/60 block">CORE ENROLLMENT</span>
                <span className="text-base font-extrabold font-heading text-[#1560D4]">Open 2026-27</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Performance Engineering Systems Hub (6 Cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl border border-[#12181F]/10 bg-white/90 shadow-xl overflow-hidden p-6 sm:p-8 backdrop-blur-md">
              
              {/* Card Top Strip */}
              <div className="flex items-center justify-between pb-5 border-b border-[#12181F]/10">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-bold text-[#12181F]">ERC SYSTEMS ACTIVE</span>
                  <span className="text-slate-300">|</span>
                  <span className="text-[#1560D4] font-semibold">TCET MUMBAI</span>
                </div>
                <ErcBadge size={38} />
              </div>

              {/* Core Engineering Pillars Showcase Grid */}
              <div className="grid grid-cols-2 gap-3.5 my-6">
                
                {/* 1. Robotics */}
                <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#12181F]/5 hover:border-[#1560D4]/30 hover:shadow-xs transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-[#1560D4]/10 text-[#1560D4] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                    <Bot className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold font-heading text-sm text-[#12181F] group-hover:text-[#1560D4] transition-colors">
                    Robotics
                  </h4>
                  <p className="text-[11px] font-mono text-[#12181F]/60 mt-1">
                    Kinematics &amp; Motion
                  </p>
                </div>

                {/* 2. Embedded Electronics */}
                <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#12181F]/5 hover:border-[#D62828]/30 hover:shadow-xs transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-[#D62828]/10 text-[#D62828] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold font-heading text-sm text-[#12181F] group-hover:text-[#D62828] transition-colors">
                    Electronics &amp; PCB
                  </h4>
                  <p className="text-[11px] font-mono text-[#12181F]/60 mt-1">
                    Microcontroller Systems
                  </p>
                </div>

                {/* 3. Automation */}
                <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#12181F]/5 hover:border-[#12181F]/30 hover:shadow-xs transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-[#12181F]/10 text-[#12181F] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold font-heading text-sm text-[#12181F]">
                    Automation Systems
                  </h4>
                  <p className="text-[11px] font-mono text-[#12181F]/60 mt-1">
                    PID &amp; PLC Workflows
                  </p>
                </div>

                {/* 4. AI & Vision */}
                <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#12181F]/5 hover:border-[#D62828]/30 hover:shadow-xs transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-[#D62828]/10 text-[#D62828] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold font-heading text-sm text-[#12181F] group-hover:text-[#D62828] transition-colors">
                    AI &amp; Computer Vision
                  </h4>
                  <p className="text-[11px] font-mono text-[#12181F]/60 mt-1">
                    Machine Learning &amp; Telemetry
                  </p>
                </div>

              </div>

              {/* Bottom Telemetry HUD Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 bg-[#12181F] text-white px-4 py-2.5 rounded-xl text-xs font-mono border border-white/10">
                <span className="flex items-center gap-2">
                  <span className="text-[#D62828] font-bold">STATUS:</span> OPERATIONAL
                </span>
                <span className="text-slate-300">
                  HANDS-ON HARDWARE &amp; SOFTWARE
                </span>
                <span className="text-[#1560D4] font-bold">
                  TCET MUMBAI
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="text-center pt-8">
        <a 
          href="#about" 
          onClick={() => soundFx.playHover()}
          className="inline-flex flex-col items-center gap-1 text-[#12181F]/50 hover:text-[#12181F] transition-colors font-mono text-[11px]"
        >
          <span>EXPLORE ELECTRONICS &amp; ROBOTICS CLUB</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
