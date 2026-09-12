import React, { useState } from 'react';
import { 
  facultyMentor, 
  executiveLeaders, 
  leadBranchMembers, 
  coLeadBranchMembers,
  jafferMember
} from '../../data/teamData';
import { soundFx } from '../../utils/audio';
import { 
  Users, 
  Mail, 
  X, 
  ChevronRight
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../ui/SocialIcons';

// Helper for initials
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12181F]/5 border border-[#12181F]/15 text-[#12181F] font-mono text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-[#D62828]" />
            Academic Year 2026–2027
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-[#12181F]">
            Leadership &amp; Team
          </h2>
          <p className="text-sm md:text-base text-[#12181F]/70">
            Student engineers and faculty mentorship guiding technical innovation at TCET.
          </p>
        </div>

        {/* 1. Prominent Faculty Mentor Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#12181F] text-white rounded-2xl p-6 sm:p-8 shadow-lg border border-white/10 relative overflow-hidden flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#D62828] pointer-events-none opacity-40" />

            {/* Photo */}
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 border-2 border-white/10 bg-white/5 relative">
              <img
                src={facultyMentor.photo}
                alt={facultyMentor.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-[#12181F]/90 text-[10px] font-mono text-center py-0.5 text-[#1560D4] font-bold">
                FACULTY MENTOR
              </div>
            </div>

            {/* Info */}
            <div className="space-y-3 text-center sm:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#D62828] text-white uppercase">
                  Faculty Mentor
                </span>
                <span className="text-xs font-mono text-slate-300">
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
                    className="text-[#1560D4] hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{facultyMentor.email}</span>
                  </a>
                )}
                {facultyMentor.linkedin && (
                  <a
                    href={facultyMentor.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label="Faculty Mentor LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Executive Leadership: Lead & Co-Lead Side-by-Side */}
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-xs font-mono text-[#12181F]/50 font-bold uppercase tracking-wider">
              Executive Leadership
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {executiveLeaders.map((leader) => (
              <div
                key={leader.id}
                onClick={() => openMemberDetail(leader)}
                className="bg-[#F7F8FA] rounded-2xl border border-[#12181F]/10 p-6 shadow-2xs hover:shadow-md hover:border-[#12181F]/25 transition-all duration-200 cursor-pointer group flex items-start gap-4"
              >
                {/* Photo or Monogram */}
                <div className="w-16 h-16 rounded-xl bg-white border border-[#12181F]/10 flex items-center justify-center shrink-0 text-[#12181F] font-heading font-black text-xl shadow-2xs group-hover:scale-105 transition-transform overflow-hidden">
                  {leader.photo ? (
                    <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-[#D62828] font-bold">
                      {getInitials(leader.name)}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#12181F] text-white">
                      {leader.role}
                    </span>
                    <span className="text-[11px] font-mono text-[#12181F]/50">
                      {leader.academicYear}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold font-heading text-[#12181F] group-hover:text-[#1560D4] transition-colors">
                    {leader.name}
                  </h4>
                  <p className="text-xs text-[#12181F]/65 line-clamp-1">
                    {leader.branch}
                  </p>
                  <div className="pt-2 text-[11px] font-mono text-[#1560D4] font-semibold flex items-center gap-1">
                    <span>View Profile</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Domain Leads Grouped by Branch Hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-4">
          
          {/* Branch A: Lead Committee */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#12181F]/10">
              <span className="w-2 h-2 rounded-full bg-[#D62828]" />
              <h3 className="font-heading font-bold text-lg text-[#12181F]">
                Technical &amp; Outreach Wing (Lead)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {leadBranchMembers.map((member) => (
                <div
                  key={member.id}
                  onClick={() => openMemberDetail(member)}
                  className="bg-[#F7F8FA] rounded-xl border border-[#12181F]/8 p-4 hover:border-[#12181F]/20 hover:shadow-xs transition-all duration-200 cursor-pointer group flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-lg bg-white border border-[#12181F]/10 flex items-center justify-center shrink-0 font-heading font-bold text-sm text-[#12181F] shadow-2xs overflow-hidden">
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[#D62828]">{getInitials(member.name)}</span>
                    )}
                  </div>
                  <div className="space-y-0.5 min-w-0 flex-1">
                    <span className="text-[10px] font-mono font-bold text-[#D62828] uppercase block truncate">
                      {member.role}
                    </span>
                    <h5 className="font-bold font-heading text-sm text-[#12181F] truncate group-hover:text-[#1560D4] transition-colors">
                      {member.name}
                    </h5>
                    <p className="text-[11px] text-[#12181F]/60 truncate font-mono">
                      {member.branch} • {member.academicYear}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Branch B: Co-Lead Committee */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#12181F]/10">
              <span className="w-2 h-2 rounded-full bg-[#1560D4]" />
              <h3 className="font-heading font-bold text-lg text-[#12181F]">
                Operations &amp; Projects Wing (Co-Lead)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coLeadBranchMembers.map((member) => (
                <div
                  key={member.id}
                  onClick={() => openMemberDetail(member)}
                  className="bg-[#F7F8FA] rounded-xl border border-[#12181F]/8 p-4 hover:border-[#12181F]/20 hover:shadow-xs transition-all duration-200 cursor-pointer group flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-lg bg-white border border-[#12181F]/10 flex items-center justify-center shrink-0 font-heading font-bold text-sm text-[#12181F] shadow-2xs overflow-hidden">
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[#1560D4]">{getInitials(member.name)}</span>
                    )}
                  </div>
                  <div className="space-y-0.5 min-w-0 flex-1">
                    <span className="text-[10px] font-mono font-bold text-[#1560D4] uppercase block truncate">
                      {member.role}
                    </span>
                    <h5 className="font-bold font-heading text-sm text-[#12181F] truncate group-hover:text-[#1560D4] transition-colors">
                      {member.name}
                    </h5>
                    <p className="text-[11px] text-[#12181F]/60 truncate font-mono">
                      {member.branch} • {member.academicYear}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Jaffer Structured Representation (Ready for details) */}
        {!jafferMember.isPendingDetails && (
          <div className="max-w-md mx-auto pt-6">
            <div 
              onClick={() => openMemberDetail(jafferMember)}
              className="bg-[#F7F8FA] rounded-xl border border-[#12181F]/10 p-4 hover:shadow-xs transition-all cursor-pointer flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-lg bg-white border border-[#12181F]/10 flex items-center justify-center font-heading font-bold text-sm text-[#12181F]">
                {jafferMember.photo ? (
                  <img src={jafferMember.photo} alt={jafferMember.name} className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <span>{getInitials(jafferMember.name)}</span>
                )}
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#D62828] uppercase block">
                  {jafferMember.role}
                </span>
                <h5 className="font-bold font-heading text-sm text-[#12181F]">
                  {jafferMember.name}
                </h5>
                <p className="text-[11px] text-[#12181F]/60 font-mono">
                  {jafferMember.branch} {jafferMember.academicYear && `• ${jafferMember.academicYear}`}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Member Profile Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#12181F]/70 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={closeMemberDetail}
        >
          <div 
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-[#12181F]/10 shadow-2xl relative space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeMemberDetail}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-[#12181F]/60 hover:text-[#12181F] transition-colors"
              aria-label="Close profile"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Profile Lockup */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#12181F]/5 border border-[#12181F]/10 flex items-center justify-center shrink-0 font-heading font-black text-xl text-[#12181F] overflow-hidden">
                {selectedMember.photo ? (
                  <img src={selectedMember.photo} alt={selectedMember.name} className="w-full h-full object-cover" />
                ) : (
                  <span>{getInitials(selectedMember.name)}</span>
                )}
              </div>
              <div className="space-y-1">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#12181F] text-white inline-block">
                  {selectedMember.role}
                </span>
                <h4 className="text-xl sm:text-2xl font-black font-heading text-[#12181F]">
                  {selectedMember.name}
                </h4>
                <p className="text-xs text-[#12181F]/60 font-mono">
                  {selectedMember.branch} • {selectedMember.academicYear}
                </p>
              </div>
            </div>

            {/* Biography */}
            {selectedMember.bio && (
              <div className="space-y-2 border-t border-[#12181F]/10 pt-4">
                <h5 className="text-xs font-mono font-bold text-[#12181F] uppercase tracking-wider">
                  Role &amp; Responsibilities
                </h5>
                <p className="text-xs sm:text-sm text-[#12181F]/80 leading-relaxed font-sans">
                  {selectedMember.bio}
                </p>
              </div>
            )}

            {/* Verified Contacts & Links (only if present) */}
            <div className="pt-4 border-t border-[#12181F]/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {selectedMember.email && (
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="p-2 rounded-lg bg-[#12181F]/5 hover:bg-[#12181F] text-[#12181F] hover:text-white transition-colors"
                    title={`Email ${selectedMember.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
                {selectedMember.linkedin && (
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-[#12181F]/5 hover:bg-[#1560D4] text-[#12181F] hover:text-white transition-colors"
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {selectedMember.github && (
                  <a
                    href={selectedMember.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-[#12181F]/5 hover:bg-[#12181F] text-[#12181F] hover:text-white transition-colors"
                    title="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>

              <button
                onClick={closeMemberDetail}
                className="px-4 py-2 rounded-xl text-xs font-mono font-bold border border-[#12181F]/15 hover:bg-slate-50 text-[#12181F]"
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
