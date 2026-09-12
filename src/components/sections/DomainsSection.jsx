import React, { useState } from 'react';
import { domainsData } from '../../data/domainsData';
import { soundFx } from '../../utils/audio';
import { 
  Plane, 
  Bot, 
  Cog, 
  Cpu, 
  Zap, 
  Brain, 
  Wifi, 
  Boxes, 
  Eye, 
  ArrowUpRight, 
  Terminal,
  Layers
} from 'lucide-react';

const iconMap = {
  Plane,
  Bot,
  Cog,
  Cpu,
  Zap,
  Brain,
  Wifi,
  Boxes,
  Eye
};

export default function DomainsSection() {
  const [selectedDomain, setSelectedDomain] = useState(null);

  return (
    <section id="domains" className="py-20 bg-[#F7F8FA] relative overflow-hidden border-b border-[#12181F]/10">
      {/* Circuit Grid Background */}
      <div className="absolute inset-0 circuit-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D62828]/10 border border-[#D62828]/30 text-[#D62828] font-mono text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            Core Specializations
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#12181F]">
            Technical Research Domains
          </h2>
          <p className="text-sm md:text-base text-[#12181F]/70">
            ERC is organized into 9 interdisciplinary engineering wings. Each wing maintains active hardware testbeds, student research cohorts, and competitive event squads.
          </p>
        </div>

        {/* 9 Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domainsData.map((domain, index) => {
            const Icon = iconMap[domain.icon] || Cpu;
            return (
              <div
                key={domain.id}
                onMouseEnter={() => soundFx.playHover()}
                className="group relative bg-white rounded-xl border border-[#12181F]/10 p-6 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Corner PCB Accent Node */}
                <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
                  <div className="absolute top-0 right-0 border-t-2 border-r-2 border-[#12181F]/20 group-hover:border-[#D62828] w-4 h-4 transition-colors" />
                </div>

                <div>
                  {/* Icon & Code Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-[#F7F8FA] border border-[#12181F]/10 text-[#12181F] group-hover:bg-[#12181F] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-[#12181F]/5 text-[#12181F]/70 group-hover:text-[#D62828] group-hover:bg-[#D62828]/10 transition-colors">
                      {domain.code}
                    </span>
                  </div>

                  {/* Domain Title & Category */}
                  <span className="text-[11px] font-mono text-[#1560D4] font-semibold uppercase block mb-1">
                    {domain.category}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-[#12181F] group-hover:text-[#D62828] transition-colors mb-2">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-[#12181F]/70 leading-relaxed mb-4">
                    {domain.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {domain.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F7F8FA] text-[#12181F]/80 border border-[#12181F]/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer Stats */}
                  <div className="pt-3 border-t border-[#12181F]/5 flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {domain.activeProjects} Active Projects
                    </span>
                    <span className="text-[#1560D4] font-medium text-[11px]">
                      Core Specialization
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
