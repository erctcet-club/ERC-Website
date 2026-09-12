import React, { useState } from 'react';
import { facultyMentor, leadNode, coLeadNode } from '../../data/teamData';
import { soundFx } from '../../utils/audio';
import { 
  Users, 
  GraduationCap, 
  Mail, 
  User, 
  X, 
  Info
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../ui/SocialIcons';

// Helper for member initials
const getInitials = (name) => {
  return name
    .split(' ')
    .filter(Boolean)
    .map(part => part[0])
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
    <section id="team" className="py-20 bg-white relative overflow-hidden border-b border-[#12181F]/10">
      {/* Background Circuit Grid */}
      <div className="absolute inset-0 circuit-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12181F]/5 border border-[#12181F]/15 text-[#12181F] font-mono text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-[#D62828]" />
            Academic Year 2026–2027
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#12181F]">
            ERC Club Hierarchy
          </h2>
          <p className="text-sm md:text-base text-[#12181F]/70">
            Executive Leadership & Domain Team Organizational Visual Tree
          </p>
        </div>

        {/* 1. Dedicated Faculty Mentor Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#12181F] via-[#1B2430] to-[#12181F] rounded-2xl p-6 md:p-8 text-white shadow-xl border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center gap-6">
            
            {/* Corner Wedges */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#D62828] pointer-events-none opacity-50" />

            {/* Mentor Photo Container */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shrink-0 border-2 border-[#1560D4]/50 bg-white/5 flex flex-col items-center justify-center shadow-md">
              {facultyMentor.photo ? (
                <img
                  src={facultyMentor.photo}
                  alt={facultyMentor.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-400 space-y-1.5">
                  <User className="w-10 h-10 text-[#1560D4]" />
                  <span className="text-[10px] font-mono text-slate-300 font-bold uppercase">
                    Photo Awaited
                  </span>
                </div>
              )}
              <div className="absolute bottom-0 inset-x-0 bg-[#12181F]/95 text-[10px] font-mono text-center py-0.5 text-[#1560D4] font-bold">
                FACULTY MENTOR
              </div>
            </div>

            {/* Mentor Information */}
            <div className="space-y-3 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#D62828] text-white uppercase">
                  Faculty Mentor
                </span>
                <span className="text-xs font-mono text-slate-300">
                  {facultyMentor.department}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                {facultyMentor.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                {facultyMentor.bio}
              </p>

              <div className="flex items-center justify-center md:justify-start gap-4 pt-1 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-white/80">
                  <GraduationCap className="w-4 h-4 text-[#1560D4]" />
                  {facultyMentor.department}
                </span>
                <a
                  href={`mailto:${facultyMentor.email}`}
                  className="hover:text-white transition-colors flex items-center gap-1 text-[#1560D4]"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{facultyMentor.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. HIERARCHICAL VISUAL TREE                                              */}
        {/* ========================================================================= */}
        <div className="pt-8 pb-4 relative">
          
          {/* APEX LEVEL: ERC CLUB HEAD */}
          <div className="flex flex-col items-center relative z-20">
            <div 
              onMouseEnter={() => soundFx.playHover()}
              className="bg-[#12181F] text-white px-8 py-4 rounded-2xl border-2 border-[#12181F] shadow-xl flex items-center gap-4 hover:scale-105 transition-transform duration-300 relative group"
            >
              <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 shadow-md bg-white p-0.5 border border-white/20">
                <img src="/erc-logo.png" alt="ERC Official Crest" className="w-full h-full object-contain" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-mono font-bold tracking-widest text-slate-300 uppercase">
                  TCET MUMBAI
                </div>
                <div className="text-lg sm:text-xl font-black font-heading text-white tracking-wide">
                  ERC EXECUTIVE COUNCIL
                </div>
              </div>
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-[#D62828] animate-ping opacity-75" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-[#D62828]" />
            </div>

            {/* Vertical Trunk Line from ERC apex */}
            <div className="w-0.5 h-10 bg-[#12181F]/40 relative">
              <div className="w-2.5 h-2.5 rounded-full bg-[#12181F] absolute -bottom-1 -left-[4px] shadow-xs" />
            </div>
          </div>

          {/* DESKTOP CONNECTOR BRIDGE (ERC -> LEAD & CO-LEAD) */}
          <div className="hidden lg:block relative h-12 w-full max-w-5xl mx-auto -my-1 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 48">
              {/* Vertical line from apex (center x=50, from y=0 to y=20) */}
              <line x1="50" y1="0" x2="50" y2="20" stroke="#12181F" strokeWidth="2" strokeOpacity="0.4" />
              {/* Horizontal crossbar spanning between LEAD (x=21) and CO-LEAD (x=71) */}
              <line x1="21" y1="20" x2="71" y2="20" stroke="#12181F" strokeWidth="2" strokeOpacity="0.4" />
              {/* Drop down to LEAD at x=21 from y=20 to y=48 */}
              <line x1="21" y1="20" x2="21" y2="48" stroke="#D62828" strokeWidth="2.5" />
              {/* Drop down to CO-LEAD at x=71 from y=20 to y=48 */}
              <line x1="71" y1="20" x2="71" y2="48" stroke="#1560D4" strokeWidth="2.5" />
              {/* Circuit junction dots */}
              <circle cx="50" cy="20" r="3" fill="#12181F" />
              <circle cx="21" cy="48" r="3.5" fill="#D62828" />
              <circle cx="71" cy="48" r="3.5" fill="#1560D4" />
            </svg>
          </div>

          {/* MOBILE/TABLET CONNECTOR */}
          <div className="lg:hidden flex justify-center py-2">
            <div className="text-center font-mono text-[10px] text-[#12181F]/60 bg-slate-100 px-3 py-1 rounded-full border border-[#12181F]/10">
              LEAD & CO-LEAD WINGS
            </div>
          </div>

          {/* MAIN TREE GRID: LEAD WING (LEFT) & CO-LEAD WING (RIGHT) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start pt-2">
            
            {/* ================================================================= */}
            {/* LEFT WING: LEAD (Gautam Thakur) + 3 DOMAIN LEADS                 */}
            {/* ================================================================= */}
            <div className="lg:col-span-5 flex flex-col items-center bg-[#F7F8FA]/60 rounded-3xl p-4 sm:p-6 border border-[#D62828]/20 shadow-xs relative">
              
              {/* Wing Header Label */}
              <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D62828]/10 border border-[#D62828]/20 text-[#D62828] font-mono text-[11px] font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#D62828]" />
                Lead Wing
              </div>

              {/* TIER 1: LEAD CARD */}
              <div className="w-full max-w-xs flex flex-col items-center">
                <TreeNodeCard 
                  member={leadNode}
                  isPrimary
                  accentColor="red"
                  onSelect={openMemberDetail}
                />
                
                {/* Stem line dropping from LEAD to subordinates */}
                <div className="w-0.5 h-10 bg-gradient-to-b from-[#D62828] to-[#D62828]/50 relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D62828] absolute -bottom-1 -left-[4px] shadow-sm" />
                </div>
              </div>

              {/* SUBORDINATES DISTRIBUTOR (3 NODES) */}
              <div className="w-full relative pt-4">
                
                {/* Connector lines across 3 child cards */}
                <div className="hidden sm:block absolute top-0 left-[16.66%] right-[16.66%] h-4 border-t-2 border-[#D62828]/40 pointer-events-none">
                  {/* Central entry point from LEAD stem */}
                  <div className="w-2 h-2 rounded-full bg-[#D62828] absolute -top-[5px] left-1/2 -translate-x-1/2" />
                  {/* Drop line 1: Tech Lead */}
                  <div className="absolute top-0 left-0 w-0.5 h-4 bg-[#D62828]/40" />
                  {/* Drop line 2: Sponsor Lead */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-[#D62828]/40" />
                  {/* Drop line 3: Social Media Lead */}
                  <div className="absolute top-0 right-0 w-0.5 h-4 bg-[#D62828]/40" />
                </div>

                {/* 3 Domain Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-3.5 pt-2">
                  {leadNode.subordinates.map((member) => (
                    <TreeNodeCard
                      key={member.id}
                      member={member}
                      accentColor="red"
                      onSelect={openMemberDetail}
                    />
                  ))}
                </div>
              </div>

            </div>

            {/* ================================================================= */}
            {/* RIGHT WING: CO-LEAD (Abhay Vishwakarma) + 4 DOMAIN LEADS         */}
            {/* ================================================================= */}
            <div className="lg:col-span-7 flex flex-col items-center bg-[#F7F8FA]/60 rounded-3xl p-4 sm:p-6 border border-[#1560D4]/20 shadow-xs relative">
              
              {/* Wing Header Label */}
              <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1560D4]/10 border border-[#1560D4]/20 text-[#1560D4] font-mono text-[11px] font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#1560D4]" />
                Co-Lead Wing
              </div>

              {/* TIER 1: CO-LEAD CARD */}
              <div className="w-full max-w-xs flex flex-col items-center">
                <TreeNodeCard 
                  member={coLeadNode}
                  isPrimary
                  accentColor="blue"
                  onSelect={openMemberDetail}
                />
                
                {/* Stem line dropping from CO-LEAD to subordinates */}
                <div className="w-0.5 h-10 bg-gradient-to-b from-[#1560D4] to-[#1560D4]/50 relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1560D4] absolute -bottom-1 -left-[4px] shadow-sm" />
                </div>
              </div>

              {/* SUBORDINATES DISTRIBUTOR (4 NODES) */}
              <div className="w-full relative pt-4">
                
                {/* Connector lines across 4 child cards */}
                <div className="hidden sm:block absolute top-0 left-[12.5%] right-[12.5%] h-4 border-t-2 border-[#1560D4]/40 pointer-events-none">
                  {/* Central entry point from CO-LEAD stem */}
                  <div className="w-2 h-2 rounded-full bg-[#1560D4] absolute -top-[5px] left-1/2 -translate-x-1/2" />
                  {/* Drop line 1: Exec Lead (left 0% of bar = 12.5% of grid) */}
                  <div className="absolute top-0 left-0 w-0.5 h-4 bg-[#1560D4]/40" />
                  {/* Drop line 2: Secretary (33.33% of bar = 37.5% of grid) */}
                  <div className="absolute top-0 left-[33.33%] -translate-x-1/2 w-0.5 h-4 bg-[#1560D4]/40" />
                  {/* Drop line 3: Project Lead (66.67% of bar = 62.5% of grid) */}
                  <div className="absolute top-0 left-[66.67%] -translate-x-1/2 w-0.5 h-4 bg-[#1560D4]/40" />
                  {/* Drop line 4: Event Lead (right 0% of bar = 87.5% of grid) */}
                  <div className="absolute top-0 right-0 w-0.5 h-4 bg-[#1560D4]/40" />
                </div>

                {/* 4 Domain Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-3.5 pt-2">
                  {coLeadNode.subordinates.map((member) => (
                    <TreeNodeCard
                      key={member.id}
                      member={member}
                      accentColor="blue"
                      onSelect={openMemberDetail}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Tree Footer / Quick Info hint */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#12181F]/50 pt-2">
          <Info className="w-4 h-4 text-[#1560D4]" />
          <span>Click on any core member in the tree to view their detailed profile and credentials.</span>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3. MEMBER DETAILS QUICK MODAL                                             */}
      {/* ========================================================================= */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#12181F]/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeMemberDetail}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#12181F]/15 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Accent Strip */}
            <div className={`h-2.5 w-full ${selectedMember.accent === 'red' ? 'bg-[#D62828]' : 'bg-[#1560D4]'}`} />

            {/* Close Button */}
            <button
              onClick={closeMemberDetail}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-[#12181F]/70 hover:text-black transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Member Header */}
              <div className="flex items-center gap-5">
                <div className={`w-20 h-20 rounded-2xl ${selectedMember.accent === 'red' ? 'bg-[#D62828]' : 'bg-[#1560D4]'} text-white flex items-center justify-center font-heading font-black text-2xl shadow-md shrink-0 relative overflow-hidden`}>
                  {selectedMember.photo ? (
                    <img src={selectedMember.photo} alt={selectedMember.name} className="w-full h-full object-cover" />
                  ) : (
                    <span>{getInitials(selectedMember.name)}</span>
                  )}
                </div>

                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase text-white shadow-xs mb-1.5"
                    style={{ backgroundColor: selectedMember.accent === 'red' ? '#D62828' : '#1560D4' }}
                  >
                    {selectedMember.domainTitle || selectedMember.position}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black font-heading text-[#12181F]">
                    {selectedMember.name}
                  </h3>
                  <div className="text-xs font-mono text-[#1560D4] font-semibold">
                    {selectedMember.department}
                  </div>
                </div>
              </div>

              {/* Bio & Academic Details */}
              <div className="space-y-3 bg-[#F7F8FA] p-4 rounded-2xl border border-[#12181F]/5 text-xs text-[#12181F]/80">
                <p className="leading-relaxed text-sm text-[#12181F]/90">
                  {selectedMember.bio}
                </p>
                <div className="pt-2 border-t border-[#12181F]/10 flex flex-wrap gap-4 font-mono text-[11px] text-[#12181F]/60">
                  {selectedMember.academicYear && (
                    <span>Year: <strong className="text-[#12181F]">{selectedMember.academicYear}</strong></span>
                  )}
                  {selectedMember.rollNo && (
                    <span>Roll: <strong className="text-[#12181F]">{selectedMember.rollNo}</strong></span>
                  )}
                  {selectedMember.roleCategory && (
                    <span>Division: <strong className="text-[#12181F]">{selectedMember.roleCategory}</strong></span>
                  )}
                </div>
              </div>

              {/* Social & Contact Strip */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-mono text-[#12181F]/50">
                  ERC CORE COMMITTEE
                </span>

                <div className="flex items-center gap-2">
                  {selectedMember.linkedin && (
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-100 hover:bg-[#1560D4] text-[#12181F] hover:text-white transition-colors"
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
                      className="p-2 rounded-lg bg-slate-100 hover:bg-black text-[#12181F] hover:text-white transition-colors"
                      title="GitHub Profile"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {selectedMember.email && (
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="p-2 rounded-lg bg-slate-100 hover:bg-[#D62828] text-[#12181F] hover:text-white transition-colors"
                      title="Send Official Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}

// =============================================================================
// TREE NODE CARD COMPONENT
// Represents each node in the visual tree (Domain Header, Photo, Name)
// =============================================================================
function TreeNodeCard({ member, isPrimary = false, accentColor = 'red', onSelect }) {
  const initials = getInitials(member.name);
  const isRed = accentColor === 'red';
  
  const badgeClasses = isRed
    ? 'bg-[#D62828]/10 text-[#D62828] border-[#D62828]/25 group-hover:bg-[#D62828] group-hover:text-white'
    : 'bg-[#1560D4]/10 text-[#1560D4] border-[#1560D4]/25 group-hover:bg-[#1560D4] group-hover:text-white';

  const borderAccent = isRed
    ? 'hover:border-[#D62828] group-hover:shadow-[#D62828]/10'
    : 'hover:border-[#1560D4] group-hover:shadow-[#1560D4]/10';

  const avatarBg = isRed
    ? 'from-[#D62828] to-[#9E1B1B]'
    : 'from-[#1560D4] to-[#0D3E8C]';

  return (
    <div
      onClick={() => onSelect(member)}
      onMouseEnter={() => soundFx.playHover()}
      className={`group w-full bg-white rounded-2xl border border-[#12181F]/10 ${borderAccent} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between text-center cursor-pointer p-3 sm:p-3.5 relative overflow-hidden`}
    >
      {/* Top Corner Technical Wedge Accent */}
      <div 
        className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 opacity-50 transition-opacity group-hover:opacity-100"
        style={{ borderColor: isRed ? '#D62828' : '#1560D4' }}
      />

      {/* 1. DOMAIN / POSITION TITLE BADGE */}
      <div className="w-full mb-2.5">
        <span className={`inline-flex items-center justify-center w-full py-1 px-1 rounded-lg border font-mono font-bold tracking-tight text-[9px] sm:text-[10px] md:text-[10.5px] uppercase transition-colors leading-tight text-center ${badgeClasses}`}>
          {member.domainTitle || member.position}
        </span>
      </div>

      {/* 2. PHOTO CONTAINER */}
      <div className={`relative ${isPrimary ? 'w-24 h-24 sm:w-28 sm:h-28' : 'w-18 h-18 sm:w-22 sm:h-22'} rounded-xl overflow-hidden mb-2.5 border-2 ${isRed ? 'border-[#D62828]/30 group-hover:border-[#D62828]' : 'border-[#1560D4]/30 group-hover:border-[#1560D4]'} shadow-inner bg-slate-100 flex items-center justify-center transition-all duration-300 group-hover:scale-105`}>
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          /* Aerospace Circuit Monogram Avatar Fallback */
          <div className={`w-full h-full bg-gradient-to-br ${avatarBg} text-white flex flex-col items-center justify-center relative select-none`}>
            {/* Subtle Circuit Grid lines inside avatar */}
            <div className="absolute inset-0 circuit-grid-dark opacity-30" />
            <span className={`font-heading font-black ${isPrimary ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'} relative z-10 drop-shadow-sm`}>
              {initials}
            </span>
            <div className="absolute bottom-1 inset-x-0 text-center">
              <span className="text-[8px] font-mono font-bold tracking-tight uppercase text-white/70">
                PHOTO
              </span>
            </div>
          </div>
        )}
        
        {/* Subtle photo frame overlay */}
        <div className="absolute inset-0 ring-1 ring-inset ring-white/20 pointer-events-none rounded-xl" />
      </div>

      {/* 3. MEMBER NAME */}
      <div className="w-full space-y-0.5">
        <h4 className={`font-heading font-bold ${isPrimary ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'} text-[#12181F] group-hover:${isRed ? 'text-[#D62828]' : 'text-[#1560D4]'} transition-colors truncate px-1`}>
          {member.name}
        </h4>
        <div className="text-[10px] font-mono text-[#12181F]/50 truncate">
          {member.department.split(' ')[0]} {member.academicYear ? `• ${member.academicYear.split(' ')[0]}` : ''}
        </div>
      </div>

      {/* Subtle indicator bar on bottom */}
      <div className={`w-6 h-0.5 rounded-full mt-2 transition-all duration-300 group-hover:w-12 ${isRed ? 'bg-[#D62828]/40 group-hover:bg-[#D62828]' : 'bg-[#1560D4]/40 group-hover:bg-[#1560D4]'}`} />
    </div>
  );
}
