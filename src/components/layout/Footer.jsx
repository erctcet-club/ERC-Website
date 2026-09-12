import React from 'react';
import ErcLogo from '../brand/ErcLogo';
import ErcBadge from '../brand/ErcBadge';
import { MapPin, Mail, Globe, Heart, Shield, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, GithubIcon } from '../ui/SocialIcons';
import { soundFx } from '../../utils/audio';


export default function Footer() {
  return (
    <footer className="relative bg-[#12181F] text-white pt-16 pb-12 overflow-hidden border-t border-white/10">
      {/* Background Circuit Grid */}
      <div className="absolute inset-0 circuit-grid-dark opacity-15 pointer-events-none" />

      {/* Diagonal Corner Cut Accents */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#D62828] pointer-events-none opacity-40" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#1560D4] pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand & Institution Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <ErcLogo className="h-14" showTagline={true} dark={true} />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-md pt-2">
              The official technical student-driven society of Thakur College of Engineering and Technology (TCET), Mumbai. Spearheading next-generation research in autonomous UAV flight, industrial automation, edge AI robotics, and embedded systems.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-white/5 border border-white/10 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                ACADEMIC YEAR 2026-27 ACTIVE
              </span>
              <span className="text-[11px] font-mono text-white/50">
                AICTE / DTE APPROVED
              </span>
            </div>
          </div>

          {/* Col 3: Quick Engineering Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold tracking-wider text-white uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D62828]" />
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li><a href="#home" className="hover:text-[#D62828] transition-colors flex items-center gap-1">Home <ArrowUpRight className="w-3 h-3 opacity-50" /></a></li>
              <li><a href="#about" className="hover:text-[#D62828] transition-colors flex items-center gap-1">About ERC <ArrowUpRight className="w-3 h-3 opacity-50" /></a></li>
              <li><a href="#domains" className="hover:text-[#D62828] transition-colors flex items-center gap-1">Research Domains <ArrowUpRight className="w-3 h-3 opacity-50" /></a></li>
              <li><a href="#zephyr" className="hover:text-[#D62828] transition-colors text-[#D62828] font-bold flex items-center gap-1">Zephyr 2026 Flagship <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#workshops" className="hover:text-[#D62828] transition-colors flex items-center gap-1">Technical Workshops <ArrowUpRight className="w-3 h-3 opacity-50" /></a></li>
              <li><a href="#projects" className="hover:text-[#D62828] transition-colors flex items-center gap-1">Project Matrix <ArrowUpRight className="w-3 h-3 opacity-50" /></a></li>
              <li><a href="#team" className="hover:text-[#D62828] transition-colors flex items-center gap-1">Core Committee 2026 <ArrowUpRight className="w-3 h-3 opacity-50" /></a></li>
            </ul>
          </div>

          {/* Col 4: Technical Wings */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold tracking-wider text-white uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1560D4]" />
              Engineering Wings
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-mono">
              <li className="text-white/80">● Drone Technology &amp; UAVs</li>
              <li className="text-white/80">● Autonomous Mobile Robotics</li>
              <li className="text-white/80">● Industrial Automation &amp; PLC</li>
              <li className="text-white/80">● Embedded ARM Cortex Firmware</li>
              <li className="text-white/80">● Edge Computer Vision &amp; AI</li>
              <li className="text-white/80">● High-Speed Multi-Layer PCB</li>
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
                  A-Block, Shyamnarayan Thakur Marg, Thakur Village, Kandivali (East), Mumbai 400101, Maharashtra, India.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1560D4] shrink-0" />
                <a href="mailto:erc@tcetmumbai.in" className="hover:underline font-mono">erc@tcetmumbai.in</a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://tcetmumbai.in" target="_blank" rel="noreferrer" className="hover:underline font-mono">www.tcetmumbai.in</a>
              </div>
            </div>

            {/* Social Network Icons */}
            <div className="pt-3 flex items-center gap-2">
              <a 
                href="https://www.instagram.com/erc.tcet?stkn=ZDZ4ZmdiNmdyZWVp" 
                target="_blank" 
                rel="noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                className="p-2 rounded-lg bg-white/5 hover:bg-[#D62828] text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/erc-tcet-61628b434" 
                target="_blank" 
                rel="noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                className="p-2 rounded-lg bg-white/5 hover:bg-[#1560D4] text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/erctcet-club" 
                target="_blank" 
                rel="noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                className="p-2 rounded-lg bg-white/5 hover:bg-slate-700 text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Rights & Attribution Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <p>© {new Date().getFullYear()} Electronics &amp; Robotics Club (ERC), TCET Mumbai. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white/70">
              <Shield className="w-3.5 h-3.5 text-[#D62828]" />
              Official Student Technical Society
            </span>
            <span>•</span>
            <span className="text-[#1560D4] font-semibold">IDEAS | BUILD | BEYOND</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
