import React, { useState } from 'react';
import BrandPillars from '../brand/BrandPillars';
import { soundFx } from '../../utils/audio';
import { 
  Target, 
  Lightbulb, 
  Award, 
  ShieldCheck 
} from 'lucide-react';

export default function AboutSection() {
  // Current Club Metrics: 0
  const stats = {
    workshops: 0,
    projects: 0,
    members: 0,
    domains: 0
  };

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden border-b border-[#12181F]/10">
      {/* Background Circuit Grid */}
      <div className="absolute inset-0 circuit-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1560D4]/10 border border-[#1560D4]/30 text-[#1560D4] font-mono text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            TCET Technical Society
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#12181F]">
            About Electronics &amp; Robotics Club
          </h2>
          <p className="text-sm md:text-base text-[#12181F]/80 leading-relaxed font-sans">
            "ERC is a student-driven technical club dedicated to exploring electronics, robotics, automation, machine learning, AI, and engineering technologies. The club encourages students to transform ideas into real-world engineering solutions through hands-on learning, teamwork, experiments, and innovation."
          </p>
        </div>

        {/* Current Metrics Counters: 0 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div 
            onMouseEnter={() => soundFx.playHover()}
            className="p-6 rounded-xl bg-[#F7F8FA] border border-[#12181F]/10 shadow-xs hover:border-[#D62828]/40 transition-all text-center group hover:-translate-y-1"
          >
            <span className="font-mono text-xs font-bold text-[#D62828] block mb-1">HANDS-ON WORKSHOPS</span>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#12181F] group-hover:text-[#D62828] transition-colors">
              {stats.workshops}
            </div>
            <p className="text-xs text-[#12181F]/60 mt-1 font-mono">Hands-on Workshops</p>
          </div>

          <div 
            onMouseEnter={() => soundFx.playHover()}
            className="p-6 rounded-xl bg-[#F7F8FA] border border-[#12181F]/10 shadow-xs hover:border-[#1560D4]/40 transition-all text-center group hover:-translate-y-1"
          >
            <span className="font-mono text-xs font-bold text-[#1560D4] block mb-1">HARDWARE PROJECTS</span>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#12181F] group-hover:text-[#1560D4] transition-colors">
              {stats.projects}
            </div>
            <p className="text-xs text-[#12181F]/60 mt-1 font-mono">Hardware Projects</p>
          </div>

          <div 
            onMouseEnter={() => soundFx.playHover()}
            className="p-6 rounded-xl bg-[#F7F8FA] border border-[#12181F]/10 shadow-xs hover:border-[#12181F]/40 transition-all text-center group hover:-translate-y-1"
          >
            <span className="font-mono text-xs font-bold text-[#12181F] block mb-1">ACTIVE ENROLLED MEMBERS</span>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#12181F]">
              {stats.members}
            </div>
            <p className="text-xs text-[#12181F]/60 mt-1 font-mono">Active Enrolled Members</p>
          </div>

          <div 
            onMouseEnter={() => soundFx.playHover()}
            className="p-6 rounded-xl bg-[#F7F8FA] border border-[#12181F]/10 shadow-xs hover:border-[#D62828]/40 transition-all text-center group hover:-translate-y-1"
          >
            <span className="font-mono text-xs font-bold text-[#D62828] block mb-1">RESEARCH SPECIALIZATIONS</span>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#12181F] group-hover:text-[#D62828] transition-colors">
              {stats.domains}
            </div>
            <p className="text-xs text-[#12181F]/60 mt-1 font-mono">Research Specializations</p>
          </div>
        </div>

        {/* Mission, Vision & Why Join ERC Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-[#12181F]/10 bg-white shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#D62828]/10 text-[#D62828] flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg font-heading text-[#12181F]">Our Mission</h3>
            <p className="text-xs text-[#12181F]/70 leading-relaxed">
              To cultivate advanced hardware-software engineering competency by operationalizing principles of circuit synthesis, embedded micro-architecture, autonomous control theory, and intelligent robotics into scalable, production-grade systems.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#12181F]/10 bg-white shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#1560D4]/10 text-[#1560D4] flex items-center justify-center">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg font-heading text-[#12181F]">Our Vision</h3>
            <p className="text-xs text-[#12181F]/70 leading-relaxed">
              To position TCET as a premier collegiate epicenter for indigenous robotics, industrial automation frameworks, artificial intelligence integration, and high-reliability embedded hardware solving mission-critical real-world engineering challenges.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#12181F]/10 bg-white shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#12181F]/10 text-[#12181F] flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg font-heading text-[#12181F]">Why Join ERC?</h3>
            <p className="text-xs text-[#12181F]/70 leading-relaxed">
              To accelerate technical mastery through immersive laboratory development, specialized equipment access (precision oscilloscopes, automated fabrication stations, edge computing clusters), and collaborative execution alongside driven student engineers.
            </p>
          </div>
        </div>

        {/* Brand Pillars Component */}
        <BrandPillars />

      </div>
    </section>
  );
}
