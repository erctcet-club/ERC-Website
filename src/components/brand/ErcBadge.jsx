import React from 'react';

export default function ErcBadge({ size = 72, className = "" }) {
  return (
    <div 
      className={`relative inline-flex items-center justify-center select-none shrink-0 ${className}`} 
      style={{ width: size, height: size }}
    >
      <img 
        src="/erc-logo.png" 
        alt="ERC Official Crest" 
        className="w-full h-full object-contain drop-shadow-md rounded-full"
        loading="lazy"
      />
    </div>
  );
}
