import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/layout/ScrollProgress';
import BackToTop from './components/layout/BackToTop';

import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import TeamSection from './components/sections/TeamSection';
import ContactSection from './components/sections/ContactSection';

import ZephyrRegisterModal from './components/modals/ZephyrRegisterModal';
import WorkshopRegisterModal from './components/modals/WorkshopRegisterModal';
import { workshopsData } from './data/workshopsData';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { soundFx } from './utils/audio';

export default function App() {
  const [isZephyrRegisterOpen, setIsZephyrRegisterOpen] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  return (
    <AuthProvider>
      <div className="min-h-screen bg-[#F7F8FA] text-[#12181F] flex flex-col selection:bg-[#D62828] selection:text-white relative">
        {/* Real-time Telemetry Scroll Progress */}
        <ScrollProgress />

        {/* Minimal Engineering Navbar */}
        <Navbar onOpenZephyr={() => setIsZephyrRegisterOpen(true)} />

        {/* Main Content Sections: Homepage Hierarchy */}
        <main className="flex-1">
          {/* 1. High-Impact Hero Section */}
          <HeroSection />

          {/* 2. About ERC & Core Engineering Disciplines */}
          <AboutSection />

          {/* 3. What We Build / Engineering Projects Showcase */}
          <ProjectsSection />

          {/* 4. Official TCET Leadership & Core Team */}
          <TeamSection />

          {/* Compact Technical Initiatives Banner (Zephyr '26 & Hands-on Workshops Portal) */}
          <section className="py-12 bg-[#12181F] text-white border-y border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 circuit-grid-dark opacity-20 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#D62828] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Flagship Initiatives // AY 2026-27
                </div>
                <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
                  Zephyr 2026 Summit &amp; Hands-On Hardware Clinics
                </h3>
                <p className="text-xs text-slate-300 max-w-xl font-sans">
                  Register for our upcoming robotics symposium or reserve a workstation at student hardware workshops in ROS2, UAVs, and KiCad PCB fabrication.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setIsZephyrRegisterOpen(true);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#D62828] hover:bg-[#E31E24] text-white text-xs font-mono font-bold transition-all shadow-md flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Zephyr &apos;26 Pass</span>
                </button>

                <button
                  onClick={() => {
                    soundFx.playClick();
                    if (workshopsData && workshopsData.length > 0) {
                      setSelectedWorkshop(workshopsData[0]);
                    }
                  }}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 text-xs font-mono font-bold transition-all flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#1560D4]" />
                  <span>Workshops Portal</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </button>
              </div>
            </div>
          </section>

          {/* 5. Minimal "Let's Build Something." Contact Us Section */}
          <ContactSection />
        </main>

        {/* Minimal Footer */}
        <Footer onOpenZephyr={() => setIsZephyrRegisterOpen(true)} />

        {/* Back to Top Quick Action */}
        <BackToTop />

        {/* Fully Preserved Event Modals (API & MongoDB Connected) */}
        <ZephyrRegisterModal
          isOpen={isZephyrRegisterOpen}
          onClose={() => setIsZephyrRegisterOpen(false)}
        />

        <WorkshopRegisterModal
          isOpen={!!selectedWorkshop}
          workshop={selectedWorkshop}
          onClose={() => setSelectedWorkshop(null)}
        />
      </div>
    </AuthProvider>
  );
}
