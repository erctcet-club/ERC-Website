import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => soundFx.playHover()}
      title="Return to Flight Deck"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#12181F] hover:bg-[#D62828] text-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 group hover:-translate-y-1"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </button>
  );
}
