import React, { useState } from 'react';
import { facultyMentor, coreTeamMembers } from '../../data/teamData';
import { soundFx } from '../../utils/audio';
import { 
  Users, 
  Mail, 
  X, 
  ArrowUpRight
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../ui/SocialIcons';

// Helper for monogram initials fallback
const getInitials = (name) => {
  if (!name) return "ERC";
  return name
    .split(' ')
    .filter(Boolean)
    .map(p => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
};

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState(null);

  const openMemberDetail = (member) => {
    soundFx.playClick();
    setSelectedMember(member);
  };

  const closeMemberDetail = () => {
    soundFx.playClick();
    setSelectedMember(null);
  };

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
            Student engineers and faculty guidance driving autonomous robotics and technical research at TCET Mumbai.
          </p>
        </div>

        {/* 1. Faculty Mentor Showcase */}
        <div className="max-w-3xl mx-auto">
          <div 
            onClick={() => openMemberDetail(facultyMentor)}
            className="bg-[#12181F] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/10 relative overflow-hidden flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left cursor-pointer group hover:border-white/25 transition-all"
          >
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#D62828] pointer-events-none opacity-40" />

            {/* Circular Photo Frame */}
            <div className="relative shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 border-2 border-[#D62828] shadow-lg bg-[#12181F] relative group-hover:scale-105 transition-transform">
                <img
                  src={facultyMentor.photo || facultyMentor.image}
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

              <h3 className="text-2xl sm:text-3xl font-black font-heading text-white group-hover:text-[#D62828] transition-colors">
                {facultyMentor.name}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans line-clamp-3">
                {facultyMentor.bio}
              </p>

              <div className="flex items-center justify-center sm:justify-start gap-4 pt-1 text-xs font-mono">
                {facultyMentor.email && (
                  <a
                    href={`mailto:${facultyMentor.email}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                    title={`Email ${facultyMentor.name}`}
                  >
                    <Mail className="w-3.5 h-3.5 text-[#D62828]" />
                    <span>{facultyMentor.email}</span>
                  </a>
                )}
                {facultyMentor.linkedin && (
                  <a
                    href={facultyMentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
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

        {/* 2. Core Team: 3 x 3 Flat Responsive Card Grid */}
        <div className="space-y-8 max-w-6xl mx-auto">
          <div className="text-center space-y-1">
            <span className="text-xs font-mono text-[#D62828] font-bold uppercase tracking-wider">
              Student Leadership
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-[#12181F]">
              Core Team Members
            </h3>
          </div>

          {/* 3 x 3 Grid: 1 col (mobile), 2 cols (tablet), 3 cols (desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreTeamMembers.map((member) => (
              <TeamMemberCard 
                key={member.id} 
                member={member} 
                onSelect={openMemberDetail} 
              />
            ))}
          </div>
        </div>

      </div>

      {/* Profile Detail Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#12181F]/80 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={closeMemberDetail}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#12181F]/15 shadow-2xl relative space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeMemberDetail}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-[#12181F]/60 hover:text-[#12181F] transition-colors cursor-pointer"
              aria-label="Close profile modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Profile Lockup */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 border-2 border-[#12181F]/20 shadow-md shrink-0 overflow-hidden bg-white">
                {selectedMember.photo || selectedMember.image ? (
                  <img 
                    src={selectedMember.photo || selectedMember.image} 
                    alt={selectedMember.name} 
                    className="w-full h-full object-cover object-top rounded-full" 
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#12181F] to-[#1B2430] text-white flex items-center justify-center font-heading font-black text-2xl select-none">
                    {getInitials(selectedMember.name)}
                  </div>
                )}
              </div>

              <div className="space-y-1.5 flex-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-[#12181F] text-white inline-block">
                  {selectedMember.role}
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-heading text-[#12181F]">
                  {selectedMember.name}
                </h3>
                <div className="space-y-0.5 text-xs font-mono text-[#12181F]/70">
                  <p><span className="text-[#12181F] font-bold">Department:</span> {selectedMember.branch}</p>
                  <p><span className="text-[#12181F] font-bold">Academic Year:</span> {selectedMember.academicYear}</p>
                </div>
              </div>
            </div>

            {/* Biography & Responsibilities */}
            {selectedMember.bio && (
              <div className="space-y-1.5 border-t border-[#12181F]/10 pt-4">
                <h4 className="text-xs font-mono font-bold text-[#D62828] uppercase tracking-wider">
                  Role &amp; Responsibilities
                </h4>
                <p className="text-xs sm:text-sm text-[#12181F]/80 leading-relaxed font-sans">
                  {selectedMember.bio}
                </p>
              </div>
            )}

            {/* Verified Contacts & Links (Only if Present) */}
            <div className="pt-4 border-t border-[#12181F]/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {selectedMember.email && (
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#12181F]/5 hover:bg-[#D62828] text-[#12181F] hover:text-white transition-colors text-xs font-mono font-semibold"
                    title={`Send Email to ${selectedMember.email}`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{selectedMember.email}</span>
                  </a>
                )}
                {selectedMember.linkedin && (
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#12181F]/5 hover:bg-[#1560D4] text-[#12181F] hover:text-white transition-colors text-xs font-mono font-semibold"
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                )}
                {selectedMember.github && (
                  <a
                    href={selectedMember.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#12181F]/5 hover:bg-[#12181F] text-[#12181F] hover:text-white transition-colors text-xs font-mono font-semibold"
                    title="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>

              <button
                onClick={closeMemberDetail}
                className="px-4 py-2 rounded-xl text-xs font-mono font-bold border border-[#12181F]/15 hover:bg-slate-50 text-[#12181F] cursor-pointer ml-auto"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

// Individual Flat Team Member Card Component
function TeamMemberCard({ member, onSelect }) {
  const photo = member.photo || member.image;

  return (
    <div
      onClick={() => onSelect(member)}
      className="bg-[#F7F8FA] rounded-2xl border border-[#12181F]/10 p-6 text-center hover:shadow-lg hover:border-[#12181F]/25 hover:bg-white transition-all duration-200 cursor-pointer group flex flex-col items-center justify-between space-y-4"
    >
      {/* Circular Photo Holder / Frame */}
      <div className="relative">
        <div className={`w-28 h-28 rounded-full p-1 border-2 transition-all duration-200 ${
          photo 
            ? "border-[#D62828] shadow-md group-hover:scale-105" 
            : "border-dashed border-[#12181F]/20 bg-white group-hover:border-[#1560D4] group-hover:scale-105"
        }`}>
          {photo ? (
            <img
              src={photo}
              alt={member.name}
              className="w-full h-full object-cover object-top rounded-full"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#12181F] to-[#1B2430] text-white flex items-center justify-center font-heading font-black text-2xl select-none">
              {getInitials(member.name)}
            </div>
          )}
        </div>

        {/* Position Badge at Bottom of Circle */}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase whitespace-nowrap shadow-2xs bg-[#12181F] text-white">
          {member.role}
        </span>
      </div>

      {/* Name & Academic Year / Branch */}
      <div className="space-y-1.5 w-full pt-1">
        <h4 className="text-lg font-bold font-heading text-[#12181F] group-hover:text-[#D62828] transition-colors">
          {member.name}
        </h4>
        
        {/* Role text */}
        <p className="text-xs font-mono font-semibold text-[#1560D4]">
          {member.role}
        </p>

        {/* Year & Branch text */}
        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-[#12181F]/10 text-xs font-mono text-[#12181F]/70">
          <span>{member.academicYear}{member.branch ? ` • ${member.branch}` : ''}</span>
        </div>
      </div>

      {/* Social Handles / Action Slots (Rendered only if verified link/email exists) */}
      <div className="pt-2 border-t border-[#12181F]/5 w-full flex items-center justify-between text-slate-400">
        <div className="flex items-center gap-1.5">
          {member.linkedin && (
            <a 
              href={member.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={(e) => e.stopPropagation()}
              className="p-1 rounded-md hover:text-[#1560D4] hover:bg-[#12181F]/5 transition-colors" 
              aria-label={`${member.name} LinkedIn`}
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
          )}
          {member.github && (
            <a 
              href={member.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={(e) => e.stopPropagation()}
              className="p-1 rounded-md hover:text-[#12181F] hover:bg-[#12181F]/5 transition-colors" 
              aria-label={`${member.name} GitHub`}
              title="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          )}
          {member.email && (
            <a 
              href={`mailto:${member.email}`} 
              onClick={(e) => e.stopPropagation()}
              className="p-1 rounded-md hover:text-[#D62828] hover:bg-[#12181F]/5 transition-colors" 
              aria-label={`Email ${member.name}`}
              title={`Email ${member.email}`}
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        <span className="text-[10px] font-mono font-semibold text-[#12181F]/50 group-hover:text-[#12181F] flex items-center gap-0.5 transition-colors ml-auto">
          <span>View Profile</span>
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </div>
  );
}
