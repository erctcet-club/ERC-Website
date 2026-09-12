import React, { useState } from 'react';
import { projectsData } from '../../data/projectsData';
import { soundFx } from '../../utils/audio';
import { 
  Rocket, 
  X
} from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const categories = [
    "All",
    "Robotics & Motion",
    "Aeronautics & Flight",
    "Robotics & Kinematics",
    "Artificial Intelligence",
    "Embedded & PCB"
  ];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category.includes(selectedCategory) || p.category === selectedCategory);

  const featuredProject = filteredProjects.find(p => p.featured) || filteredProjects[0];
  const secondaryProjects = filteredProjects.filter(p => p.id !== featuredProject?.id);

  const openModal = (project) => {
    soundFx.playClick();
    setActiveProjectModal(project);
  };

  const closeModal = () => {
    soundFx.playClick();
    setActiveProjectModal(null);
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F7F8FA] relative overflow-hidden border-b border-[#12181F]/10">
      {/* Background Circuit Grid */}
      <div className="absolute inset-0 circuit-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#12181F]/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D62828]/10 border border-[#D62828]/30 text-[#D62828] font-mono text-xs font-bold uppercase tracking-wider">
              <Rocket className="w-3.5 h-3.5" />
              Built at ERC
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-[#12181F]">
              What We Build
            </h2>
            <p className="text-sm md:text-base text-[#12181F]/70 leading-relaxed font-sans">
              Autonomous mobile robots, long-range aerial systems, 6-DOF kinematics manipulators, and high-frequency avionics developed at TCET Mumbai.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#12181F] text-white shadow-xs"
                    : "bg-white text-[#12181F]/70 border border-[#12181F]/10 hover:border-[#12181F]/25 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Large Featured Project Card */}
        {featuredProject && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[#D62828] font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#D62828] animate-pulse" />
              <span>FEATURED LABORATORY INNOVATION</span>
            </div>

            <div 
              onClick={() => openModal(featuredProject)}
              className="bg-white rounded-2xl border border-[#12181F]/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Image Container (7 cols) */}
              <div className="lg:col-span-7 aspect-[16/10] bg-[#0B0F14] relative overflow-hidden">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#12181F]/90 backdrop-blur-xs border border-white/10 px-3 py-1 rounded-full text-white font-mono text-xs">
                  {featuredProject.category}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs border border-black/10 px-2.5 py-1 rounded-full text-[#12181F] font-mono text-xs font-bold">
                  {featuredProject.year}
                </div>
              </div>

              {/* Information Side (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="text-xs font-mono text-[#1560D4] font-bold">
                    SYSTEM SPECIFICATION
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-[#12181F] group-hover:text-[#1560D4] transition-colors">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm text-[#12181F]/75 leading-relaxed font-sans">
                    {featuredProject.summary}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="space-y-4 pt-2 border-t border-[#12181F]/10">
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#F7F8FA] border border-[#12181F]/10 text-[#12181F]/80 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between font-mono text-xs font-bold text-[#1560D4] pt-2">
                    <span className="group-hover:underline flex items-center gap-1.5">
                      View Project Specs &amp; Schematics &rarr;
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* 2. Responsive Grid for Secondary Projects */}
        {secondaryProjects.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between border-t border-[#12181F]/10 pt-6">
              <h3 className="text-xl font-bold font-heading text-[#12181F]">
                Active Club Projects
              </h3>
              <span className="text-xs font-mono text-[#12181F]/50">
                {secondaryProjects.length} Systems Cataloged
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondaryProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => openModal(project)}
                  className="bg-white rounded-xl border border-[#12181F]/10 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  {/* Card Image */}
                  <div className="aspect-[16/10] bg-[#0B0F14] relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#12181F]/85 backdrop-blur-xs border border-white/10 px-2.5 py-0.5 rounded-md text-white font-mono text-[10px]">
                      {project.category}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 px-2 py-0.5 rounded-md text-[#12181F] font-mono text-[10px] font-bold">
                      {project.year}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-bold font-heading text-lg text-[#12181F] group-hover:text-[#1560D4] transition-colors leading-snug">
                        {project.title}
                      </h4>
                      <p className="text-xs text-[#12181F]/70 leading-relaxed line-clamp-3">
                        {project.summary}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-3 border-t border-[#12181F]/5 flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F7F8FA] border border-[#12181F]/8 text-[#12181F]/70"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-[#12181F]/50">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      {activeProjectModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#12181F]/70 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#12181F]/10 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="aspect-[16/9] bg-[#0B0F14] relative">
              <img
                src={activeProjectModal.image}
                alt={activeProjectModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-[#12181F]/90 px-3 py-1 rounded-lg text-white font-mono text-xs">
                {activeProjectModal.category} • {activeProjectModal.year}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#D62828] uppercase">
                  ERC Technical Documentation
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-[#12181F]">
                  {activeProjectModal.title}
                </h3>
              </div>

              <div className="space-y-3 text-sm text-[#12181F]/80 leading-relaxed">
                <h4 className="text-xs font-mono font-bold text-[#12181F] uppercase tracking-wider">
                  Technical Architecture
                </h4>
                <p>{activeProjectModal.description}</p>
              </div>

              {/* Technologies List */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-[#12181F] uppercase tracking-wider">
                  Tech Stack &amp; Hardware
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-[#1560D4]/10 border border-[#1560D4]/20 text-[#1560D4] font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-[#12181F]/10 flex items-center justify-between">
                {activeProjectModal.links?.github && (
                  <a
                    href={activeProjectModal.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#12181F] hover:bg-[#1B2430] text-white text-xs font-mono font-bold transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                <button
                  onClick={closeModal}
                  className="px-4 py-2 rounded-xl border border-[#12181F]/15 hover:bg-slate-50 text-xs font-mono font-bold text-[#12181F]"
                >
                  Close Specification
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
