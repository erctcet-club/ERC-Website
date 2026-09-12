import React, { useState, useEffect } from 'react';
import ErcLogo from '../brand/ErcLogo';
import { soundFx } from '../../utils/audio';
import { 
  Menu, 
  X, 
  Volume2, 
  VolumeX,
  Sparkles
} from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenZephyr }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMuted, setIsMuted] = useState(soundFx.isMuted());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy
      const sections = NAV_LINKS.map(l => l.href.substring(1));
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextMuted = soundFx.toggleMute();
    setIsMuted(nextMuted);
    if (!nextMuted) soundFx.playClick();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-[#12181F]/10 py-3" 
        : "bg-[#F7F8FA]/90 backdrop-blur-xs py-4 border-b border-[#12181F]/5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <a 
          href="#home" 
          onClick={() => soundFx.playHover()}
          className="flex items-center gap-2 group"
          aria-label="ERC TCET Home"
        >
          <ErcLogo className="h-10 md:h-11" showTagline={false} />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#12181F]/5 p-1 rounded-full border border-[#12181F]/10">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? "bg-[#12181F] text-white shadow-xs"
                    : "text-[#12181F]/70 hover:text-[#12181F] hover:bg-white/70"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Controls: Zephyr 26 Action + Audio Toggle */}
        <div className="flex items-center gap-2.5">
          {/* Subtle Secondary Action: Zephyr '26 Registration Modal Trigger */}
          <button
            onClick={() => {
              soundFx.playClick();
              if (onOpenZephyr) onOpenZephyr();
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#D62828]/10 text-[#D62828] border border-[#D62828]/30 hover:bg-[#D62828] hover:text-white transition-all duration-200 shadow-2xs"
            title="Open Zephyr 2026 Registration"
          >
            <Sparkles className="w-3 h-3" />
            <span>Zephyr &apos;26</span>
          </button>

          {/* Audio Telemetry Toggle */}
          <button
            onClick={toggleSound}
            title={isMuted ? "Unmute UI Audio SFX" : "Mute UI Audio SFX"}
            className="p-2 rounded-full border border-[#12181F]/10 hover:border-[#12181F]/25 bg-white hover:bg-[#F7F8FA] text-[#12181F] transition-all"
            aria-label="Toggle UI Audio SFX"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-[#12181F]/40" />
            ) : (
              <Volume2 className="w-4 h-4 text-[#D62828]" />
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-[#12181F]/15 bg-white text-[#12181F]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#12181F]/10 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200 shadow-lg">
          <div className="text-[10px] font-mono text-[#12181F]/50 font-bold uppercase tracking-wider px-3 pb-1 border-b border-[#12181F]/5">
            Navigation
          </div>
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-[#12181F] hover:bg-[#F7F8FA]"
            >
              <span>{link.name}</span>
            </a>
          ))}

          {/* Mobile Zephyr Trigger */}
          <div className="pt-2 border-t border-[#12181F]/5">
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(false);
                if (onOpenZephyr) onOpenZephyr();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-[#D62828] text-white shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Register for Zephyr 2026</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
