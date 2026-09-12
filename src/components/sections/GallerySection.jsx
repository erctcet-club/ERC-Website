import React, { useState } from 'react';
import { galleryData } from '../../data/galleryData';
import { soundFx } from '../../utils/audio';
import { 
  Camera, 
  Eye, 
  X, 
  MapPin, 
  Calendar, 
  ChevronLeft, 
  ChevronRight,
  Maximize2
} from 'lucide-react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = ["All", "Drone Demos", "Workshops", "Robotics", "Competitions", "Team Activities"];

  const filteredGallery = filterCategory === "All"
    ? galleryData
    : galleryData.filter(g => g.category === filterCategory);

  const openLightbox = (img) => {
    soundFx.playClick();
    setSelectedImage(img);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-[#F7F8FA] relative overflow-hidden border-b border-[#12181F]/10">
      {/* Circuit Grid */}
      <div className="absolute inset-0 circuit-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1560D4]/10 border border-[#1560D4]/30 text-[#1560D4] font-mono text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            Engineering Chronicles
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#12181F]">
            Lab &amp; Arena Gallery
          </h2>
          <p className="text-sm md:text-base text-[#12181F]/70">
            Capturing the journey of hardware development, autonomous flight sorties, and high-stakes competitions at TCET and across India.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playClick();
                setFilterCategory(cat);
              }}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                filterCategory === cat
                  ? "bg-[#12181F] text-white shadow-sm"
                  : "bg-white text-[#12181F]/70 border border-[#12181F]/10 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              onMouseEnter={() => soundFx.playHover()}
              className="group relative rounded-2xl overflow-hidden aspect-4/3 cursor-pointer bg-slate-900 shadow-xs hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12181F] via-[#12181F]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Category Pill Top Left */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-[#12181F]/80 backdrop-blur-md text-white border border-white/20">
                  {item.category}
                </span>
              </div>

              {/* Hover Inspect Icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Title & Metadata Bottom */}
              <div className="absolute bottom-3 inset-x-4 space-y-1">
                <h4 className="text-base font-bold font-heading text-white line-clamp-1 group-hover:text-[#D62828] transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center gap-3 text-[11px] font-mono text-slate-300">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#1560D4]" />
                    {item.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 truncate">
                    <MapPin className="w-3 h-3 text-[#D62828]" />
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#12181F] text-white rounded-2xl border border-white/20 max-w-3xl w-full overflow-hidden shadow-2xl space-y-4 p-4 md:p-6 relative"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 font-mono text-xs text-[#1560D4]">
                <span>{selectedImage.category}</span>
                <span>•</span>
                <span>{selectedImage.date}</span>
                <span>•</span>
                <span>{selectedImage.location}</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-white">
                {selectedImage.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
