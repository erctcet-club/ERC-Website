import React, { useState, useRef, useEffect } from 'react';
import { projectsData } from '../../data/projectsData';
import { soundFx } from '../../utils/audio';
import { 
  Rocket, 
  X,
  User,
  ArrowRight,
  Layers,
  AlertCircle,
  Cpu,
  Terminal,
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const hasMoved = useRef(false);

  const categories = [
    "All",
    "Robotics & Motion",
    "Aeronautics & Flight",
    "Artificial Intelligence",
    "Embedded & PCB"
  ];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(p => 
        p.category === selectedCategory || 
        p.category.includes(selectedCategory) ||
        (selectedCategory === "Embedded & PCB" && (p.category.includes("Embedded") || p.category.includes("Electronics")))
      );

  // Update arrow button states based on scroll position
  const updateScrollState = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);
    }
  };

  useEffect(() => {
    updateScrollState();
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', updateScrollState, { passive: true });
      window.addEventListener('resize', updateScrollState);
      return () => {
        slider.removeEventListener('scroll', updateScrollState);
        window.removeEventListener('resize', updateScrollState);
      };
    }
  }, [filteredProjects]);

  const handlePrev = () => {
    soundFx.playClick();
    if (sliderRef.current) {
      const card = sliderRef.current.firstElementChild;
      const scrollStep = card ? card.getBoundingClientRect().width + 24 : 360;
      sliderRef.current.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    soundFx.playClick();
    if (sliderRef.current) {
      const card = sliderRef.current.firstElementChild;
      const scrollStep = card ? card.getBoundingClientRect().width + 24 : 360;
      sliderRef.current.scrollBy({ left: scrollStep, behavior: 'smooth' });
    }
  };

  // Mouse Drag / Swipe Handlers
  const onMouseDown = (e) => {
    if (!sliderRef.current) return;
    isDown.current = true;
    hasMoved.current = false;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeftStart.current = sliderRef.current.scrollLeft;
  };

  const onMouseMove = (e) => {
    if (!isDown.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    if (Math.abs(walk) > 5) {
      hasMoved.current = true;
    }
    sliderRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const onMouseUp = () => {
    isDown.current = false;
  };

  const openModal = (project) => {
    if (hasMoved.current) return;
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#12181F]/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D62828]/10 border border-[#D62828]/30 text-[#D62828] font-mono text-xs font-bold uppercase tracking-wider">
              <Rocket className="w-3.5 h-3.5" />
              Built at ERC TCET
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-[#12181F]">
              What We Have Built
            </h2>
            <p className="text-sm md:text-base text-[#12181F]/70 leading-relaxed font-sans">
              Autonomous mobile robots, cooperative UAV systems, 6-DOF kinematics manipulators, and high-frequency avionics developed at TCET Mumbai.
            </p>
          </div>

          {/* Controls: Category Filter & Slider Navigation Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedCategory(cat);
                    if (sliderRef.current) {
                      sliderRef.current.scrollLeft = 0;
                    }
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#12181F] text-white shadow-xs"
                      : "bg-white text-[#12181F]/70 border border-[#12181F]/10 hover:border-[#12181F]/25 hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Slider Next/Prev Arrows */}
            <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
              <button
                onClick={handlePrev}
                disabled={!canScrollLeft}
                aria-label="Previous Projects"
                className={`p-2.5 rounded-xl border border-[#12181F]/15 transition-all cursor-pointer ${
                  canScrollLeft 
                    ? "bg-white text-[#12181F] hover:bg-[#12181F] hover:text-white hover:border-[#12181F] shadow-xs" 
                    : "bg-slate-100 text-slate-300 border-transparent cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={!canScrollRight}
                aria-label="Next Projects"
                className={`p-2.5 rounded-xl border border-[#12181F]/15 transition-all cursor-pointer ${
                  canScrollRight 
                    ? "bg-[#12181F] text-white hover:bg-[#D62828] hover:border-[#D62828] shadow-xs" 
                    : "bg-slate-100 text-slate-300 border-transparent cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Sliding Project Carousel */}
        <div className="relative">
          <div
            ref={sliderRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 cursor-grab active:cursor-grabbing select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => openModal(project)}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start flex flex-col justify-between bg-white rounded-3xl border border-[#12181F]/10 overflow-hidden shadow-2xs hover:shadow-xl hover:border-[#12181F]/25 transition-all duration-300 group cursor-pointer"
              >
                {/* Image Container with Consistent Aspect Ratio */}
                <div className="aspect-[16/10] bg-[#0B0F14] relative overflow-hidden">
                  <picture>
                    {project.image.endsWith('.webp') && (
                      <source srcSet={project.image} type="image/webp" />
                    )}
                    <img
                      src={project.fallbackImage || project.image}
                      alt={project.alt || project.title}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                      loading="lazy"
                    />
                  </picture>

                  {/* Badges */}
                  <div className="absolute top-3.5 left-3.5 bg-[#12181F]/90 backdrop-blur-xs border border-white/10 px-2.5 py-1 rounded-full text-white font-mono text-[10px] tracking-wide">
                    {project.category}
                  </div>
                  <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-xs border border-black/10 px-2.5 py-0.5 rounded-full text-[#12181F] font-mono text-[10px] font-bold">
                    {project.year}
                  </div>
                  {project.id === 'proj-aim' && (
                    <div className="absolute bottom-3 left-3 bg-[#D62828] text-white px-2.5 py-0.5 rounded-md font-mono text-[9px] font-bold uppercase tracking-wider shadow-sm">
                      Aerial Intelligence
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    {/* Subtitle / System Type */}
                    <div className="text-[11px] font-mono text-[#1560D4] font-bold uppercase tracking-wider">
                      {project.subtitle || project.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-black font-heading text-[#12181F] group-hover:text-[#D62828] transition-colors leading-tight">
                      {project.title}
                    </h3>

                    {/* Developer Attribution */}
                    {project.developer && (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#12181F]/70">
                        <User className="w-3.5 h-3.5 text-[#D62828]" />
                        <span>Developed by: <strong className="text-[#12181F]">{project.developer}</strong></span>
                      </div>
                    )}

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#12181F]/75 leading-relaxed font-sans line-clamp-3">
                      {project.oneLiner || project.summary}
                    </p>
                  </div>

                  {/* Technology Badges & Footer Actions */}
                  <div className="pt-3 border-t border-[#12181F]/10 space-y-3.5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#F7F8FA] border border-[#12181F]/10 text-[#12181F]/80 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-[#1560D4]/10 text-[#1560D4] font-semibold">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View Project & GitHub Buttons */}
                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(project);
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#12181F] hover:bg-[#D62828] text-white text-xs font-mono font-bold transition-all shadow-xs group/btn cursor-pointer"
                      >
                        <span>View Project</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-xl bg-[#12181F]/5 hover:bg-[#12181F] text-[#12181F] hover:text-white transition-colors"
                          title="View Repository on GitHub"
                          aria-label={`${project.title} GitHub Repository`}
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Subtle Mobile Drag Hint */}
          <div className="flex items-center justify-between text-[11px] font-mono text-[#12181F]/50 pt-2 px-1 sm:hidden">
            <span>&larr; Swipe to explore &rarr;</span>
            <span>{filteredProjects.length} Projects</span>
          </div>
        </div>

      </div>

      {/* Detailed Project Modal */}
      {activeProjectModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#12181F]/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-[#12181F]/15 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#12181F]/80 hover:bg-[#12181F] text-white transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Hero Banner Image */}
            <div className="aspect-[16/9] bg-[#0B0F14] relative overflow-hidden">
              <picture>
                {activeProjectModal.image.endsWith('.webp') && (
                  <source srcSet={activeProjectModal.image} type="image/webp" />
                )}
                <img
                  src={activeProjectModal.fallbackImage || activeProjectModal.image}
                  alt={activeProjectModal.alt || activeProjectModal.title}
                  className="w-full h-full object-cover"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-[#12181F] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-2 text-white">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#D62828] text-white font-mono text-xs font-bold uppercase">
                    {activeProjectModal.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs font-mono text-xs">
                    {activeProjectModal.year}
                  </span>
                </div>
                {activeProjectModal.developer && (
                  <span className="text-xs font-mono text-slate-300">
                    Lead: <strong className="text-white">{activeProjectModal.developer}</strong>
                  </span>
                )}
              </div>
            </div>

            {/* Modal Body Container */}
            <div className="p-6 sm:p-8 space-y-8">
              
              {/* Header */}
              <div className="space-y-2 border-b border-[#12181F]/10 pb-6">
                <span className="text-xs font-mono font-bold text-[#D62828] uppercase tracking-wider block">
                  ERC Technical Portfolio Document
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-[#12181F]">
                  {activeProjectModal.title}
                  {activeProjectModal.subtitle && (
                    <span className="text-[#12181F]/60 font-medium block sm:inline sm:ml-3 text-lg sm:text-2xl font-sans">
                      — {activeProjectModal.subtitle}
                    </span>
                  )}
                </h3>
                {activeProjectModal.organization && (
                  <p className="text-xs font-mono text-slate-500">
                    {activeProjectModal.organization}
                  </p>
                )}
              </div>

              {/* 1. Project Overview */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-[#D62828] uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>Project Overview</span>
                </h4>
                <p className="text-sm text-[#12181F]/85 leading-relaxed font-sans">
                  {activeProjectModal.overview || activeProjectModal.description}
                </p>
              </div>

              {/* 2. Problem Statement */}
              {activeProjectModal.problemStatement && (
                <div className="space-y-3 p-5 rounded-2xl bg-[#F7F8FA] border border-[#12181F]/10">
                  <h4 className="text-xs font-mono font-bold text-[#12181F] uppercase tracking-wider flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#D62828]" />
                    <span>Problem Statement</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#12181F]/80 leading-relaxed font-sans">
                    {activeProjectModal.problemStatement}
                  </p>
                </div>
              )}

              {/* 3. System Architecture */}
              {activeProjectModal.systemArchitecture && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-[#1560D4] uppercase tracking-wider flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    <span>System Architecture</span>
                  </h4>
                  <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-line bg-[#0B0F14] text-slate-200 p-5 rounded-2xl font-mono border border-white/10">
                    {activeProjectModal.systemArchitecture}
                  </div>
                </div>
              )}

              {/* 4. Technologies Used */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-[#12181F] uppercase tracking-wider flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-600" />
                  <span>Technologies Used</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono bg-white border border-[#12181F]/15 text-[#12181F] font-bold shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 5. Key Features */}
              {activeProjectModal.keyFeatures && activeProjectModal.keyFeatures.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-[#12181F] uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Key Features</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeProjectModal.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-mono text-[#12181F]/80 p-2.5 rounded-xl bg-[#F7F8FA] border border-[#12181F]/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 6. Developer Information */}
              <div className="p-5 rounded-2xl bg-[#12181F] text-white border border-white/10 space-y-3 font-mono text-xs">
                <span className="text-[#D62828] font-bold uppercase tracking-wider block">
                  DEVELOPER INFORMATION
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 text-slate-300">
                  <div>
                    <span className="text-slate-400 block text-[10px]">LEAD ARCHITECT / DEVELOPER:</span>
                    <strong className="text-white text-sm">{activeProjectModal.developerInfo?.name || activeProjectModal.developer}</strong>
                    <span className="text-[11px] block text-slate-400">{activeProjectModal.developerInfo?.role || "Lead Innovator"}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">AFFILIATION &amp; DEPARTMENT:</span>
                    <span className="text-white block">{activeProjectModal.developerInfo?.department || "Department of Electronics & Telecommunication"}</span>
                    <span className="text-white/80 block text-[11px]">{activeProjectModal.organization || "ERC TCET"}</span>
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-[#12181F]/10 flex items-center justify-between">
                {activeProjectModal.links?.github && (
                  <a
                    href={activeProjectModal.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#12181F] hover:bg-[#1B2430] text-white text-xs font-mono font-bold transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository on GitHub</span>
                  </a>
                )}
                <button
                  onClick={closeModal}
                  className="px-5 py-2.5 rounded-xl border border-[#12181F]/20 hover:bg-slate-50 text-xs font-mono font-bold text-[#12181F] cursor-pointer"
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
