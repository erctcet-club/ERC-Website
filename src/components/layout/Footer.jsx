import React from 'react';
import ErcLogo from '../brand/ErcLogo';
import { MapPin, Mail, Globe, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, GithubIcon } from '../ui/SocialIcons';

export default function Footer({ onOpenZephyr, onOpenAdmin }) {
  return (
    <footer className="relative bg-[#12181F] text-white pt-16 pb-12 overflow-hidden border-t border-white/10">
      {/* Background Circuit Grid */}
      <div className="absolute inset-0 circuit-grid-dark opacity-15 pointer-events-none" />

      {/* Diagonal Corner Accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#D62828] pointer-events-none opacity-40" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#1560D4] pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand & Institution Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <ErcLogo className="h-12 md:h-14" showTagline={true} dark={true} />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-md pt-2">
              The official technical student-driven engineering society of Thakur College of Engineering and Technology (TCET), Mumbai. Spearheading hands-on research in multidisciplinary engineering, practical robotics, aerial UAV flight systems, artificial intelligence, and embedded electronics.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-white/5 border border-white/10 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                ACADEMIC YEAR 2026–27
              </span>
              <span className="text-[11px] font-mono text-white/50">
                TCET MUMBAI
              </span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold tracking-wider text-white uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D62828]" />
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li><a href="#home" className="hover:text-[#D62828] transition-colors flex items-center gap-1">Home <ArrowUpRight className="w-3 h-3 opacity-50" /></a></li>
              <li><a href="#about" className="hover:text-[#D62828] transition-colors flex items-center gap-1">About ERC <ArrowUpRight className="w-3 h-3 opacity-50" /></a></li>
              <li><a href="#projects" className="hover:text-[#D62828] transition-colors flex items-center gap-1">Projects &amp; Systems <ArrowUpRight className="w-3 h-3 opacity-50" /></a></li>
              <li><a href="#team" className="hover:text-[#D62828] transition-colors flex items-center gap-1">Leadership &amp; Team <ArrowUpRight className="w-3 h-3 opacity-50" /></a></li>
              <li><a href="#contact" className="hover:text-[#D62828] transition-colors flex items-center gap-1">Contact Us <ArrowUpRight className="w-3 h-3 opacity-50" /></a></li>
              {onOpenZephyr && (
                <li>
                  <button 
                    onClick={onOpenZephyr}
                    className="hover:text-[#D62828] transition-colors text-[#D62828] font-bold flex items-center gap-1 text-left"
                  >
                    Zephyr 2026 Portal <ArrowUpRight className="w-3 h-3" />
                  </button>
                </li>
              )}
              {onOpenAdmin && (
                <li>
                  <button 
                    onClick={onOpenAdmin}
                    className="hover:text-emerald-400 transition-colors text-slate-400 flex items-center gap-1 text-left font-mono text-xs pt-1"
                  >
                    Admin Portal (Sign In) <ArrowUpRight className="w-3 h-3" />
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Col 4: Technical Wings */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold tracking-wider text-white uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1560D4]" />
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-mono">
              <li className="text-white/80">● Multidisciplinary Engineering</li>
              <li className="text-white/80">● Robotics &amp; Automation</li>
              <li className="text-white/80">● UAV &amp; Drone Systems</li>
              <li className="text-white/80">● Embedded ARM Cortex Firmware</li>
              <li className="text-white/80">● High-Speed Multi-Layer PCB</li>
              <li className="text-white/80">● Artificial Intelligence</li>
            </ul>
          </div>

          {/* Col 5: College Headquarters */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold tracking-wider text-white uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D62828]" />
              Headquarters
            </h4>
            <div className="text-xs text-slate-300 space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D62828] shrink-0 mt-0.5" />
                <span>
                  <strong>Thakur College of Engineering &amp; Technology (TCET)</strong><br />
                  A-Block (Lab 304/306), Shyamnarayan Thakur Marg, Thakur Village, Kandivali (East), Mumbai 400101.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1560D4] shrink-0" />
                <a href="mailto:erctet@gmail.com" className="hover:underline font-mono">erctet@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://tcetmumbai.in" target="_blank" rel="noreferrer" className="hover:underline font-mono">www.tcetmumbai.in</a>
              </div>
            </div>

            {/* Social Network Icons */}
            <div className="pt-3 flex items-center gap-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-lg bg-white/5 hover:bg-[#D62828] text-slate-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/erctcet-club" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-lg bg-white/5 hover:bg-[#12181F] text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/school/tcetmumbai" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-lg bg-white/5 hover:bg-[#1560D4] text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Electronics &amp; Robotics Club, TCET Mumbai. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-500 text-[11px]">
            <span>AUTONOMOUS SYSTEMS</span>
            <span>•</span>
            <span>HARDWARE PROTOTYPING</span>
            <span>•</span>
            <span>STUDENT LAB</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
