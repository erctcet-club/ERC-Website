import React, { useState } from 'react';
import { projectsData } from '../../data/projectsData';
import { soundFx } from '../../utils/audio';
import { 
  Rocket, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  Code2,
  Boxes,
  Sparkles,
  UserCheck
} from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Hardware",
    "Software",
    "Embedded",
    "Robotics",
    "AI & Vision"
  ];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-[#F7F8FA] relative overflow-hidden border-b border-[#12181F]/10">
      {/* Circuit Grid */}
      <div className="absolute inset-0 circuit-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D62828]/10 border border-[#D62828]/30 text-[#D62828] font-mono text-xs font-bold uppercase tracking-wider">
            <Rocket className="w-3.5 h-3.5" />
            Hardware &amp; Software Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#12181F]">
            Featured Engineering Projects
          </h2>
          <p className="text-sm md:text-base text-[#12181F]/70 leading-relaxed font-sans">
            Hardware and software matrix in which the members of the club will be displaying their projects.
          </p>
        </div>

        {/* Filter Categories Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playClick();
                setSelectedCategory(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-[#12181F] text-white shadow-md border border-[#12181F]"
                  : "bg-white text-[#12181F]/70 border border-[#12181F]/10 hover:border-[#12181F]/30 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Hardware & Software Member Display Matrix Showcase */}
        {filteredProjects.length === 0 ? (
          <div className="max-w-4xl mx-auto bg-white border border-[#12181F]/10 rounded-2xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
            {/* Corner Decorative Circuit Accents */}
            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#1560D4]/30 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#D62828]/30 pointer-events-none" />

            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <div className="w-14 h-14 rounded-2xl bg-[#12181F]/5 text-[#12181F] flex items-center justify-center mx-auto border border-[#12181F]/10">
                <Boxes className="w-7 h-7 text-[#1560D4]" />
              </div>

              <h3 className="text-2xl font-black font-heading text-[#12181F]">
                Hardware &amp; Software Projects Display Matrix
              </h3>

              <p className="text-sm text-[#12181F]/70 leading-relaxed">
                Members of the club will be displaying their active engineering projects, hardware prototypes, circuit schematics, and software repositories here for Academic Year 2026–2027.
              </p>

              {/* Sub-Matrix Preview Tiles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 text-left">
                <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#12181F]/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#D62828]">
                    <Cpu className="w-4 h-4" />
                    <span>HARDWARE MATRIX</span>
                  </div>
                  <p className="text-xs text-[#12181F]/60">
                    Dedicated showcase for custom multi-layer PCBs, autonomous mobile robot airframes, motor driver rigs, and sensor telemetry arrays.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#12181F]/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1560D4]">
                    <Code2 className="w-4 h-4" />
                    <span>SOFTWARE MATRIX</span>
                  </div>
                  <p className="text-xs text-[#12181F]/60">
                    Code repositories, ROS2 navigation nodes, edge computer vision scripts, RTOS firmware stacks, and automation ladder programs.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono bg-[#12181F]/5 border border-[#12181F]/10 text-[#12181F] font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#1560D4]" />
                  Submissions &amp; Displays for Academic Year 2026-2027 Active
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-[#12181F]/10 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-6 space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-[#12181F]">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#12181F]/80 leading-relaxed font-sans">
                    {project.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
