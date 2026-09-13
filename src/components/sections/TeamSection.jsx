import React from 'react';
import { facultyMentor, coreTeamMembers } from '../../data/teamData';
import { 
  Users, 
  Mail, 
  Camera,
  GraduationCap
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../ui/SocialIcons';

export default function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-[#12181F]/10">
      {/* Background Circuit Grid */}
      <div className="absolute inset-0 circuit-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12181F]/5 border border-[#12181F]/15 text-[#12181F] font-mono text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-[#D62828]" />
            Academic Year 2026–2027
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-[#12181F]">
            Core Team &amp; Mentorship
          </h2>
          <p className="text-sm md:text-base text-[#12181F]/70">
            Student engineers and faculty guidance driving innovation at TCET Mumbai.
          </p>
        </div>

        {/* 1. Faculty Mentor Showcase with Circular Photo Frame */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#12181F] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/10 relative overflow-hidden flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#D62828] pointer-events-none opacity-40" />

            {/* Circular Photo Frame */}
            <div className="relative shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 border-2 border-[#D62828] shadow-lg bg-[#12181F] relative">
                <img
                  src={facultyMentor.photo}
                  alt={facultyMentor.name}
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#D62828] text-white uppercase whitespace-nowrap shadow-sm">
                Faculty Mentor
              </span>
            </div>

            {/* Mentor Info */}
            <div className="space-y-2.5 flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="text-xs font-mono text-[#1560D4] font-semibold">
                  {facultyMentor.branch}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                {facultyMentor.name}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {facultyMentor.bio}
              </p>

              <div className="flex items-center justify-center sm:justify-start gap-4 pt-1 text-xs font-mono">
                {facultyMentor.email && (
                  <a
                    href={`mailto:${facultyMentor.email}`}
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#D62828]" />
                    <span>{facultyMentor.email}</span>
                  </a>
                )}
                {facultyMentor.linkedin && (
                  <a
                    href={facultyMentor.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-[#1560D4] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Core Team Section (No Hierarchy - Circular Photo Holders with Name, Position, and Year) */}
        <div className="space-y-8">
          <div className="text-center space-y-1">
            <span className="text-xs font-mono text-[#D62828] font-bold uppercase tracking-wider">
              Student Leadership
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-[#12181F]">
              Core Team
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreTeamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-[#F7F8FA] rounded-2xl border border-[#12181F]/10 p-6 text-center hover:shadow-lg hover:border-[#12181F]/25 hover:bg-white transition-all duration-200 group flex flex-col items-center justify-between space-y-4"
              >
                {/* Circular Photo Holder / Frame */}
                <div className="relative">
                  <div className={`w-28 h-28 rounded-full p-1 border-2 transition-all duration-200 ${
                    member.photo 
                      ? "border-[#D62828] shadow-md group-hover:scale-105" 
                      : "border-dashed border-[#12181F]/20 bg-white group-hover:border-[#1560D4]"
                  }`}>
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover object-top rounded-full"
                        loading="lazy"
                      />
                    ) : (
                      /* Circular Photo Placeholder Frame for Members to Drop Photos In */
                      <div className="w-full h-full rounded-full bg-slate-100 flex flex-col items-center justify-center text-slate-400 group-hover:bg-blue-50/50 group-hover:text-[#1560D4] transition-colors">
                        <Camera className="w-6 h-6 opacity-60 mb-0.5" />
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider opacity-70">
                          Photo Frame
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Position Badge at Bottom of Circle */}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase whitespace-nowrap shadow-2xs bg-[#12181F] text-white">
                    {member.role}
                  </span>
                </div>

                {/* Name & Academic Year */}
                <div className="space-y-1.5 w-full pt-1">
                  <h4 className="text-lg font-bold font-heading text-[#12181F] group-hover:text-[#D62828] transition-colors">
                    {member.name}
                  </h4>
                  
                  {/* Position text (explicit) */}
                  <p className="text-xs font-mono font-semibold text-[#1560D4]">
                    {member.role}
                  </p>

                  {/* Year & Branch text */}
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-[#12181F]/10 text-xs font-mono text-[#12181F]/70">
                    <GraduationCap className="w-3.5 h-3.5 text-[#D62828]" />
                    <span>{member.academicYear}{member.branch ? ` • ${member.branch}` : ''}</span>
                  </div>
                </div>

                {/* Social Handles / Links Slots (placeholders ready for handles to be provided) */}
                <div className="pt-2 border-t border-[#12181F]/5 w-full flex items-center justify-center gap-2 text-slate-400">
                  {member.linkedin ? (
                    <a href={member.linkedin} target="_blank" rel="noreferrer" className="p-1.5 rounded-lg hover:text-[#1560D4] transition-colors" aria-label="LinkedIn">
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="p-1.5 text-slate-300 hover:text-slate-400 transition-colors" title="LinkedIn (To be added)">
                      <LinkedinIcon className="w-4 h-4 opacity-40" />
                    </span>
                  )}
                  {member.github ? (
                    <a href={member.github} target="_blank" rel="noreferrer" className="p-1.5 rounded-lg hover:text-[#12181F] transition-colors" aria-label="GitHub">
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="p-1.5 text-slate-300 hover:text-slate-400 transition-colors" title="GitHub (To be added)">
                      <GithubIcon className="w-4 h-4 opacity-40" />
                    </span>
                  )}
                  {member.email ? (
                    <a href={`mailto:${member.email}`} className="p-1.5 rounded-lg hover:text-[#D62828] transition-colors" aria-label="Email">
                      <Mail className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="p-1.5 text-slate-300 hover:text-slate-400 transition-colors" title="Email (To be added)">
                      <Mail className="w-4 h-4 opacity-40" />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
