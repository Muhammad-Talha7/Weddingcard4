import React from 'react';
import { weddingData } from '../weddingData';

export default function EmotionBanner() {
  const { emotionBanner, dressCode } = weddingData;

  return (
    <section className="relative w-full py-6 px-5 sm:px-6">
      {/* 1. Deep Sage Textured Card with Love Quote */}
      <div
        data-animate="zoom-in"
        className="sage-textured-card relative w-full rounded-2xl p-6 sm:p-8 text-center text-[#FAF7F2] shadow-[0_12px_32px_rgba(45,56,43,0.22)] border border-[#C5A869]/30"
      >
        {/* Subtle decorative leaf watermark in background */}
        <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" stroke="#E2C98F" strokeWidth="1.5">
            <path d="M20 80 Q50 30 80 20 Q70 60 20 80" />
            <path d="M20 80 Q60 50 80 20" />
          </svg>
        </div>

        {/* Quotation Mark */}
        <div className="font-cormorant text-4xl sm:text-5xl text-[#E2C98F] leading-none mb-2 select-none">
          {emotionBanner.quoteMark || "“"}
        </div>

        {/* Main Quote Text */}
        <p className="font-cormorant text-xl sm:text-2xl font-normal italic leading-relaxed text-[#FAF7F2] px-2 mb-4 drop-shadow-sm">
          {emotionBanner.mainText}
        </p>

        {/* Gold Heart Icon */}
        <div className="flex items-center justify-center my-3">
          <svg className="w-3.5 h-3.5 text-[#E2C98F] fill-current" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        {/* Subtext & Signature */}
        {emotionBanner.subText && (
          <p className="font-outfit text-xs text-[#FAF7F2]/80 uppercase tracking-[0.25em] font-light mb-1">
            {emotionBanner.subText}
          </p>
        )}
        <p className="font-outfit text-[11px] text-[#E2C98F] uppercase tracking-[0.3em] font-medium">
          {emotionBanner.signature}
        </p>
      </div>

      {/* 2. Dress Code Section (matching Design Reference) */}
      {dressCode && (
        <div data-animate="fade-up" className="w-full mt-8 flex flex-col items-center text-center">
          <h4 className="font-cormorant text-lg uppercase tracking-[0.25em] font-normal text-[#2D382B]">
            {dressCode.title}
          </h4>
          <span className="font-marck text-2xl text-[#586652] my-0.5 italic">
            {dressCode.style}
          </span>
          <p className="font-outfit text-xs text-[#6E7869] font-light max-w-xs mb-4">
            {dressCode.description}
          </p>

          {/* Palette Swatch Circles */}
          <div className="flex items-center justify-center gap-3">
            {dressCode.palette.map((color, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-black/10 shadow-sm transition-transform duration-300 group-hover:scale-110 ${
                    color.isShimmer ? 'gold-shimmer shadow-md border-[#BF9B50]' : ''
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

