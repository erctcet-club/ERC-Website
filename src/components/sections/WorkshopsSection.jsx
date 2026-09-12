import React, { useState } from 'react';
import { workshopsData } from '../../data/workshopsData';
import { soundFx } from '../../utils/audio';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  ChevronRight, 
  GraduationCap,
  Sparkles,
  X
} from 'lucide-react';

export default function WorkshopsSection({ onSelectWorkshop }) {
  const [activeDetailWorkshop, setActiveDetailWorkshop] = useState(null);

  return (
    <section id="workshops" className="py-20 bg-white relative overflow-hidden border-b border-[#12181F]/10">
      {/* Background Circuit Grid */}
      <div className="absolute inset-0 circuit-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1560D4]/10 border border-[#1560D4]/30 text-[#1560D4] font-mono text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            Hands-on Engineering Clinics
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#12181F]">
            Technical Workshops
          </h2>
          <p className="text-sm md:text-base text-[#12181F]/70">
            Intensive masterclasses designed by senior ERC leads. Every participant handles hardware kits, flashes bare-metal firmware, and fabricates functional test benches.
          </p>
        </div>

        {/* Workshops Content */}
        {workshopsData.length === 0 ? (
          <div className="max-w-2xl mx-auto bg-[#F7F8FA] border border-[#12181F]/10 rounded-2xl p-8 sm:p-12 text-center space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#1560D4]/10 text-[#1560D4] flex items-center justify-center mx-auto">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black font-heading text-[#12181F]">
              Workshops Scheduling in Progress
            </h3>
            <p className="text-sm text-[#12181F]/70 max-w-lg mx-auto leading-relaxed">
              Technical workshops for Academic Year 2026–2027 are currently being scheduled. Comprehensive modules, dates, and registration links will be released shortly.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#12181F]/10 text-xs font-mono text-[#D62828] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              Academic Year 2026–2027
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshopsData.map((workshop) => (
              <div
                key={workshop.id}
                onMouseEnter={() => soundFx.playHover()}
                className="bg-[#F7F8FA] rounded-2xl border border-[#12181F]/10 p-6 md:p-8 flex flex-col justify-between hover:shadow-xl hover:border-[#D62828]/40 transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-[#D62828] text-white">
                    {workshop.badge}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#12181F]/60">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#1560D4]" />
                      {workshop.duration}
                    </span>
                    <span>•</span>
                    <span className="text-[#D62828] font-bold">
                      {workshop.difficulty}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black font-heading text-[#12181F] group-hover:text-[#D62828] transition-colors mb-2">
                    {workshop.title}
                  </h3>
                  <p className="text-xs font-mono text-[#1560D4] font-semibold mb-3">
                    {workshop.tagline}
                  </p>
                  <p className="text-xs text-[#12181F]/70 leading-relaxed mb-6">
                    {workshop.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#12181F]/10">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      onSelectWorkshop(workshop);
                    }}
                    className="flex-1 py-3 rounded-xl bg-[#12181F] hover:bg-[#D62828] text-white font-mono text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 group"
                  >
                    <span>Register Now</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
