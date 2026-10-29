import React from 'react';
import { Gift, Heart } from 'lucide-react';
import { weddingData } from '../weddingData';

export default function WishesAndGroup() {
  const { giftRegistry, wishes, monogram, bride, groom } = weddingData;

  return (
    <section className="relative w-full pt-4 pb-14 px-5 sm:px-6 flex flex-col items-center text-center">
      
      {/* 1. Organic Dark Sage "YOUR PRESENCE IS THE BEST GIFT" Card (matching design reference) */}
      {giftRegistry && (
        <div
          data-animate="zoom-in"
          className="sage-textured-card relative w-full rounded-3xl p-6 sm:p-7 text-white shadow-[0_16px_36px_rgba(45,56,43,0.25)] border border-[#C5A869]/35 mb-10 overflow-hidden"
        >
          {/* Decorative Corner Foliage */}
          <div className="absolute top-2 right-2 pointer-events-none opacity-25">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" stroke="#E2C98F">
              <path d="M10 60 Q30 30 60 10 M25 45 Q40 40 45 25 M35 35 Q50 30 55 15" strokeWidth="1" />
            </svg>
          </div>
          <div className="absolute bottom-2 left-2 pointer-events-none opacity-25 scale-x-[-1]">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" stroke="#E2C98F">
              <path d="M10 60 Q30 30 60 10 M25 45 Q40 40 45 25 M35 35 Q50 30 55 15" strokeWidth="1" />
            </svg>
          </div>

          {/* Gift Box Icon Circle */}
          <div className="w-12 h-12 rounded-full border border-[#E2C98F]/60 bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
            <Gift className="w-5 h-5 text-[#E2C98F]" />
          </div>

          {/* Title */}
          <h4 className="font-cormorant text-xl uppercase tracking-[0.2em] font-normal text-[#FAF7F2] mb-2">
            {giftRegistry.title}
          </h4>

          {/* Message */}
          <p className="font-outfit text-xs text-[#FAF7F2]/85 font-light leading-relaxed max-w-xs mx-auto mb-5">
            {giftRegistry.message}
          </p>

          {/* Stylized QR Code Container */}
          <div className="inline-block p-2.5 rounded-2xl bg-white shadow-lg mx-auto">
            {/* SVG Crisp QR Code Representation */}
            <svg
              className="w-28 h-28 text-[#2D382B]"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              {/* Corner Position Markers */}
              <rect x="10" y="10" width="24" height="24" rx="2" />
              <rect x="14" y="14" width="16" height="16" fill="white" />
              <rect x="18" y="18" width="8" height="8" />

              <rect x="66" y="10" width="24" height="24" rx="2" />
              <rect x="70" y="14" width="16" height="16" fill="white" />
              <rect x="74" y="18" width="8" height="8" />

              <rect x="10" y="66" width="24" height="24" rx="2" />
              <rect x="14" y="70" width="16" height="16" fill="white" />
              <rect x="18" y="74" width="8" height="8" />

              {/* Data modules */}
              <rect x="38" y="12" width="6" height="6" />
              <rect x="48" y="14" width="6" height="6" />
              <rect x="42" y="24" width="6" height="6" />
              <rect x="52" y="22" width="6" height="6" />
              
              <rect x="12" y="40" width="6" height="6" />
              <rect x="22" y="44" width="6" height="6" />
              <rect x="14" y="52" width="6" height="6" />

              <rect x="38" y="38" width="8" height="8" />
              <rect x="50" y="42" width="6" height="6" />
              <rect x="42" y="54" width="6" height="6" />
              <rect x="56" y="52" width="6" height="6" />

              <rect x="68" y="40" width="6" height="6" />
              <rect x="78" y="44" width="6" height="6" />
              <rect x="72" y="52" width="6" height="6" />

              <rect x="40" y="70" width="6" height="6" />
              <rect x="50" y="76" width="6" height="6" />
              <rect x="44" y="82" width="6" height="6" />
              <rect x="68" y="70" width="6" height="6" />
              <rect x="78" y="78" width="6" height="6" />
              <rect x="84" y="68" width="6" height="6" />
              <rect x="74" y="84" width="6" height="6" />
            </svg>
          </div>

          <p className="font-outfit text-[10px] text-[#E2C98F] tracking-wider uppercase font-medium mt-3">
            {giftRegistry.qrNotice}
          </p>
        </div>
      )}

      {/* 2. Closing Wishes / Blessings */}
      {wishes && (
        <div data-animate="fade-up" className="max-w-[320px] mx-auto space-y-3 mb-8">
          <h4 className="font-cormorant text-2xl uppercase tracking-[0.22em] font-normal text-[#2D382B]">
            {wishes.title}
          </h4>
          <p className="font-outfit text-xs text-[#6E7869] font-light leading-relaxed">
            {wishes.text}
          </p>
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="w-8 h-[1px] bg-[#C5A869]/40" />
            <Heart className="w-3.5 h-3.5 text-[#C5A869] fill-current" />
            <div className="w-8 h-[1px] bg-[#C5A869]/40" />
          </div>
        </div>
      )}

      {/* 3. Final Monogram & Signoff Footer */}
      <div data-animate="fade-up" className="flex flex-col items-center">
        {/* Monogram Circle */}
        <div className="w-14 h-14 rounded-full border border-[#C5A869]/70 bg-white/70 flex items-center justify-center shadow-sm mb-3">
          <span className="font-playfair text-lg font-light tracking-widest text-[#2D382B]">
            {monogram}
          </span>
        </div>

        <p className="font-cormorant text-lg font-medium tracking-[0.25em] text-[#2D382B] uppercase">
          {wishes?.footerSignoff || `${bride} & ${groom}`}
        </p>

        <p className="font-outfit text-[10px] tracking-[0.2em] text-[#7E8D79] uppercase font-light mt-1">
          {wishes?.copyright || "With Endless Gratitude"}
        </p>
      </div>
    </section>
  );
}

