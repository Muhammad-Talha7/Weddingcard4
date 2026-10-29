import React from 'react';
import { weddingData } from '../weddingData';
import couplePhoto1 from '../assets/couple_photo_1.jpg';
import couplePhoto2 from '../assets/couple_photo_2.jpg';

export default function HeaderHero() {
  const { headerBadge, initials, bride, groom, andText, dateDisplay, subheading, introText } = weddingData;

  return (
    <section className="relative w-full pt-8 sm:pt-14 pb-8 px-5 sm:px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Decorative Botanical Branch Foliage SVG in Corners */}
      <div className="absolute top-2 left-2 pointer-events-none opacity-40">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path
            d="M10 10 C35 30, 45 65, 80 85 M20 25 C30 15, 45 20, 40 32 M35 45 C48 38, 58 48, 50 60 M55 65 C70 60, 78 72, 70 82 M25 35 C15 48, 25 58, 35 50"
            stroke="#7E8D79"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="absolute top-2 right-2 pointer-events-none opacity-40 scale-x-[-1]">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path
            d="M10 10 C35 30, 45 65, 80 85 M20 25 C30 15, 45 20, 40 32 M35 45 C48 38, 58 48, 50 60 M55 65 C70 60, 78 72, 70 82 M25 35 C15 48, 25 58, 35 50"
            stroke="#7E8D79"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* 1. Monogram Pill with Botanical Sprigs */}
      <div data-animate="hero-top" className="relative flex items-center justify-center my-2">
        {/* Left Olive Branch Sprig */}
        <svg className="w-10 h-16 text-[#7E8D79]/70 -rotate-12 mr-1" viewBox="0 0 32 64" fill="none" stroke="currentColor">
          <path d="M24 60 C20 40, 16 25, 20 8" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M20 45 C12 40, 8 46, 14 50" strokeWidth="1.2" />
          <path d="M18 32 C10 27, 8 33, 14 36" strokeWidth="1.2" />
          <path d="M19 18 C11 14, 10 20, 15 23" strokeWidth="1.2" />
        </svg>

        {/* Arched Pill Monogram Border */}
        <div className="w-[62px] h-[92px] rounded-full border border-[#C5A869]/80 flex flex-col items-center justify-center bg-[#FAF7F2]/90 shadow-[0_4px_16px_rgba(91,104,82,0.08)] py-1.5">
          <span className="font-cormorant text-2xl font-normal text-[#2D3428] leading-none mb-1">
            {initials?.top || "K"}
          </span>
          <div className="w-6 h-[1px] bg-[#C5A869]/50 my-0.5" />
          <span className="font-cormorant text-2xl font-normal text-[#2D3428] leading-none mt-0.5">
            {initials?.bottom || "L"}
          </span>
        </div>

        {/* Right Olive Branch Sprig */}
        <svg className="w-10 h-16 text-[#7E8D79]/70 rotate-12 ml-1 scale-x-[-1]" viewBox="0 0 32 64" fill="none" stroke="currentColor">
          <path d="M24 60 C20 40, 16 25, 20 8" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M20 45 C12 40, 8 46, 14 50" strokeWidth="1.2" />
          <path d="M18 32 C10 27, 8 33, 14 36" strokeWidth="1.2" />
          <path d="M19 18 C11 14, 10 20, 15 23" strokeWidth="1.2" />
        </svg>
      </div>

      {/* 2. Header Badge */}
      <p data-animate="hero-top" className="font-outfit text-[11px] sm:text-[12px] uppercase tracking-[0.28em] font-medium text-[#586652] mt-4 mb-2">
        {headerBadge}
      </p>

      {/* 3. Couple Names */}
      <div data-animate="hero-top" className="flex flex-col items-center justify-center my-1 select-none">
        <h1 className="font-cormorant text-4xl sm:text-5xl uppercase tracking-[0.18em] font-light text-[#2D382B] leading-tight">
          {bride}
        </h1>
        <span className="font-marck text-2xl sm:text-3xl text-[#C5A869] -my-1 font-normal italic">
          {andText || "and"}
        </span>
        <h1 className="font-cormorant text-4xl sm:text-5xl uppercase tracking-[0.18em] font-light text-[#2D382B] leading-tight">
          {groom}
        </h1>
      </div>

      {/* 4. Gold Heart Divider */}
      <div data-animate="hero-top" className="flex items-center justify-center gap-3 my-3">
        <div className="w-10 h-[1px] bg-[#C5A869]/50" />
        <svg className="w-3.5 h-3.5 text-[#C5A869] fill-current" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <div className="w-10 h-[1px] bg-[#C5A869]/50" />
      </div>

      {/* 5. Date Display: AUG | 24 | 2025 - SATURDAY */}
      <div data-animate="hero-top" className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-3 font-cormorant text-lg sm:text-xl font-normal tracking-[0.15em] text-[#2D3428]">
          <span className="uppercase">{dateDisplay.month}</span>
          <span className="text-[#C5A869] text-base">|</span>
          <span className="font-playfair text-2xl font-medium text-[#2D382B]">{dateDisplay.day}</span>
          <span className="text-[#C5A869] text-base">|</span>
          <span>{dateDisplay.year}</span>
        </div>
        <span className="font-outfit text-[11px] tracking-[0.25em] text-[#6E7869] font-medium uppercase mt-1">
          {dateDisplay.dayOfWeek}
        </span>
      </div>

      {/* 6. Hero Couple Photo Cards (Two Framed Portraits Side-by-Side per GUIDELINES.md Section 1) */}
      <div data-animate="zoom-in" className="w-full mt-6 mb-4 grid grid-cols-2 gap-3 items-end">
        {/* Left Card: 3:4 Aspect Ratio Portrait */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(45,56,43,0.14)] border border-[#C5A869]/35 bg-white p-1.5 transition-transform hover:scale-[1.02] duration-300">
          <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden">
            <img
              src={couplePhoto1}
              alt={`${bride} and ${groom}`}
              className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right Card: 9:16 Aspect Ratio Vertical Portrait */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(45,56,43,0.14)] border border-[#C5A869]/35 bg-white p-1.5 transition-transform hover:scale-[1.02] duration-300">
          <div className="relative aspect-[9/16] w-full rounded-xl overflow-hidden">
            <img
              src={couplePhoto2}
              alt={`${bride} and ${groom}`}
              className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* 7. Subheading & Welcoming Text */}
      <div data-animate="fade-up" className="max-w-[340px] mx-auto mt-2 space-y-2">
        <h3 className="font-cormorant text-xl font-normal text-[#2D382B] italic">
          {subheading}
        </h3>
        <p className="font-outfit text-xs text-[#6E7869] leading-relaxed font-light px-2">
          {introText}
        </p>
      </div>
    </section>
  );
}
