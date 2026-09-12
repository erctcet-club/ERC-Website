import React from 'react';

export default function ErcLogo({ 
  className = "h-12", 
  showTagline = true, 
  showSubtitle = true, 
  dark = false,
  showText = true 
}) {
  const navyColor = dark ? "#FFFFFF" : "#12181F";
  const mutedColor = dark ? "#94A3B8" : "#64748B";

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Circular Logo */}
      <img 
        src="/erc-logo.png" 
        alt="ERC — Electronics & Robotics Club" 
        className="h-full w-auto aspect-square object-contain shrink-0 drop-shadow-sm rounded-full"
        loading="lazy"
      />

      {/* Clean Modern Typography */}
      {showText && (
        <div className="flex flex-col justify-center text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-heading font-black text-xl sm:text-2xl tracking-tight" style={{ color: navyColor }}>
              ERC
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded font-bold uppercase tracking-wider bg-[#D62828]/10 text-[#D62828] border border-[#D62828]/20">
              TCET
            </span>
          </div>

          {showSubtitle && (
            <span 
              className="text-[10px] sm:text-[11px] font-heading font-bold tracking-wider uppercase mt-1 leading-tight"
              style={{ color: navyColor }}
            >
              Electronics &amp; Robotics <span className="font-medium" style={{ color: mutedColor }}>Club</span>
            </span>
          )}

          {showTagline && (
            <span className="text-[8px] sm:text-[9px] font-mono font-semibold tracking-widest text-[#D62828] mt-0.5 uppercase">
              IDEAS <span style={{ color: navyColor }}>|</span> BUILD <span style={{ color: navyColor }}>|</span> <span className="text-[#1560D4]">BEYOND</span>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
