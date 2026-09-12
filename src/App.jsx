import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/layout/ScrollProgress';
import BackToTop from './components/layout/BackToTop';

import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import DomainsSection from './components/sections/DomainsSection';
import ZephyrSection from './components/sections/ZephyrSection';
import WorkshopsSection from './components/sections/WorkshopsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import TeamSection from './components/sections/TeamSection';

import ZephyrRegisterModal from './components/modals/ZephyrRegisterModal';
import WorkshopRegisterModal from './components/modals/WorkshopRegisterModal';

export default function App() {
  const [isZephyrRegisterOpen, setIsZephyrRegisterOpen] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  return (
    <AuthProvider>
      <div className="min-h-screen bg-[#F7F8FA] text-[#12181F] flex flex-col selection:bg-[#D62828] selection:text-white relative">
        {/* Real-time Telemetry Scroll Progress Bar */}
        <ScrollProgress />

        {/* HUD Sticky Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Hero with 3D Drone Flight Arrival */}
          <HeroSection />

          {/* 2. About ERC, 4 Pillars, Animated Counters & Signature Exploded Drone Simulator */}
          <AboutSection />

          {/* 3. 9 Technical Research Domains */}
          <DomainsSection />

          {/* 4. Flagship Event: ZEPHYR 2026 */}
          <ZephyrSection onOpenRegisterModal={() => setIsZephyrRegisterOpen(true)} />

          {/* 5. Workshops Catalog & Curriculum */}
          <WorkshopsSection onSelectWorkshop={(ws) => setSelectedWorkshop(ws)} />

          {/* 6. Hardware & Software Projects Matrix */}
          <ProjectsSection />

          {/* 7. Official TCET Core Team Roster & Faculty Mentor */}
          <TeamSection />
        </main>

        {/* Official TCET Footer */}
        <Footer />

        {/* Quick Return to Flight Deck Button */}
        <BackToTop />

        {/* Interactive Modals */}
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
