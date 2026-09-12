import React, { useState, useEffect } from 'react';
import ErcLogo from '../brand/ErcLogo';
import { soundFx } from '../../utils/audio';
import { 
  Menu, 
  X, 
  Volume2, 
  VolumeX
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMuted, setIsMuted] = useState(soundFx.isMuted());

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Domains', href: '#domains' },
    { name: 'Zephyr 2026', href: '#zephyr', badge: 'Flagship' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Projects', href: '#projects' },
    { name: 'Core Team', href: '#team' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPos = window.scrollY + 200;

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
        ? "bg-white/95 backdrop-blur-md shadow-md border-b border-[#12181F]/10 py-2.5" 
        : "bg-[#F7F8FA]/90 backdrop-blur-sm py-4 border-b border-[#12181F]/5"
    }`}>
      {/* Top subtle affiliation strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <a 
          href="#home" 
          onClick={() => soundFx.playHover()}
          className="flex items-center gap-2 group"
        >
          <ErcLogo className="h-10 md:h-12" showTagline={false} />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#12181F]/5 p-1 rounded-full border border-[#12181F]/10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#12181F] text-white shadow-sm"
                    : "text-[#12181F]/80 hover:text-[#12181F] hover:bg-white/80"
                }`}
              >
                {link.name}
                {link.badge && (
                  <span className="px-1.5 py-0.2 text-[9px] font-mono font-bold uppercase rounded bg-[#D62828] text-white">
                    {link.badge}
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right HUD Controls: Sound Toggle */}
        <div className="flex items-center gap-2.5">
          {/* Audio Telemetry Toggle */}
          <button
            onClick={toggleSound}
            title={isMuted ? "Unmute UI Audio SFX" : "Mute UI Audio SFX"}
            className="p-2 rounded-full border border-[#12181F]/15 hover:border-[#12181F]/30 bg-white hover:bg-[#F7F8FA] text-[#12181F] transition-all"
            aria-label="Toggle UI Audio SFX"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-[#12181F]/40" />
            ) : (
              <Volume2 className="w-4 h-4 text-[#D62828] animate-pulse" />
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg border border-[#12181F]/15 bg-white text-[#12181F]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#12181F]/10 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="text-[10px] font-mono text-[#D62828] font-bold uppercase tracking-wider px-3 pb-1 border-b border-[#12181F]/10">
            TCET ERC Navigation
          </div>
          {navLinks.map((link) => (
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
              {link.badge && (
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-[#D62828] text-white">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
