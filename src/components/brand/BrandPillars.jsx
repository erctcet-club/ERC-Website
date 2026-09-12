import React from 'react';
import { Cpu, Bot, Lightbulb, Zap, TrendingUp, Cog } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export default function BrandPillars({ className = "" }) {
  const pillars = [
    {
      title: "CIRCUIT & HARDWARE",
      subtitle: "Embedded Systems Architecture",
      icon: Cpu,
      color: "text-[#D62828]",
      bgGlow: "group-hover:border-[#D62828]/40 group-hover:bg-[#D62828]/5",
      desc: "Systematic circuit design, microcontroller architecture, sensor integration, and high-reliability embedded firmware development."
    },
    {
      title: "ROBOTICS & AUTOMATION",
      subtitle: "Autonomous Kinematics & Control",
      icon: Bot,
      color: "text-[#1560D4]",
      bgGlow: "group-hover:border-[#1560D4]/40 group-hover:bg-[#1560D4]/5",
      desc: "Multi-axis manipulators, autonomous mobile robots, closed-loop PID control systems, and industrial PLC workflows."
    },
    {
      title: "INNOVATION & AI",
      subtitle: "Edge Intelligence & Telemetry",
      icon: Lightbulb,
      color: "text-[#12181F]",
      bgGlow: "group-hover:border-[#12181F]/40 group-hover:bg-[#12181F]/5",
      desc: "Neural computer vision pipelines, edge machine learning inference, real-time telemetry, and technical research squads."
    },
    {
      title: "REAL-WORLD SOFTWARE",
      subtitle: "Production-Grade Engineering Solutions",
      icon: Zap,
      color: "text-[#D62828]",
      bgGlow: "group-hover:border-[#D62828]/40 group-hover:bg-[#D62828]/5",
      desc: "Translating experimental hardware and algorithmic software into robust, benchmarked engineering deployments solving real-world challenges."
    }
  ];

  return (
    <div className={`relative border border-[#12181F]/10 bg-white/90 p-6 md:p-8 rounded-xl shadow-sm ${className}`}>
      {/* Subtle Corner PCB Accents */}
      <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#D62828]" />
      <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#1560D4]" />

      {/* Top Banner Taglines */}
      <div className="flex flex-wrap items-center justify-between pb-6 border-b border-[#12181F]/10 gap-3 text-[11px] font-mono tracking-wider">
        <span className="flex items-center gap-2 text-[#D62828] font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#D62828] animate-pulse" />
          CIRCUITS · ROBOTICS · INNOVATION · HARDWARE
        </span>
        <span className="text-[#1560D4] font-semibold">
          SOFTWARE · AUTOMATION · REAL-WORLD IMPACT
        </span>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              onMouseEnter={() => soundFx.playHover()}
              className={`group p-5 rounded-lg border border-[#12181F]/5 bg-[#F7F8FA] transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${pillar.bgGlow}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2.5 rounded-md bg-white shadow-xs border border-[#12181F]/5 ${pillar.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-[#12181F]/30 font-bold">0{idx + 1}</span>
              </div>
              <h4 className="font-extrabold text-base tracking-wide text-[#12181F] mb-1 font-heading">
                {pillar.title}
              </h4>
              <p className="text-xs font-mono text-[#D62828] font-medium mb-2">
                {pillar.subtitle}
              </p>
              <p className="text-xs text-[#12181F]/70 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
