import React, { useState, useEffect } from 'react';
import { weddingData } from '../weddingData';
import archPhoto from '../assets/couple_arch.jpg';

export default function ArchedCountdown() {
  const { archedPhoto, countdown } = weddingData;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(countdown.targetDate).getTime();

    const calculate = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, [countdown.targetDate]);

  return (
    <section className="relative w-full py-8 px-5 sm:px-6 flex flex-col items-center text-center overflow-hidden">
      {/* 1. Curved SVG Text Over Architectural Arch */}
      <div data-animate="zoom-in" className="relative w-full max-w-[320px] mx-auto flex flex-col items-center">
        
        {/* SVG Curved Path for Text */}
        <div className="w-full h-16 relative pointer-events-none -mb-3 z-10">
          <svg viewBox="0 0 320 80" className="w-full h-full overflow-visible">
            <path
              id="archTextPath"
              d="M 20 80 A 140 70 0 0 1 300 80"
              fill="none"
            />
            <text className="font-cormorant italic text-[14px] fill-[#586652] tracking-[0.16em]">
              <textPath href="#archTextPath" startOffset="50%" textAnchor="middle">
                {archedPhoto.curvedText}
              </textPath>
            </text>
          </svg>
        </div>

        {/* Arch Photo Container */}
        <div className="relative w-full aspect-[4/5] rounded-t-full rounded-b-2xl overflow-hidden p-1.5 bg-gradient-to-b from-[#C5A869]/60 via-[#7E8D79]/40 to-[#C5A869]/20 shadow-[0_16px_36px_rgba(45,56,43,0.18)]">
          <div className="relative w-full h-full rounded-t-full rounded-b-xl overflow-hidden bg-[#2D382B]">
            <img
              src={archPhoto}
              alt={archedPhoto.placeholderLabel || "Couple Portrait"}
              className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.04] transition-transform duration-700 hover:scale-105"
            />
            {/* Soft inner glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* 2. Watermark & Accent Labels */}
      <div data-animate="fade-up" className="mt-8 mb-5 space-y-1">
        <p className="font-marck text-2xl text-[#C5A869] italic">
          {countdown.watermarkText}
        </p>
        <p className="font-outfit text-xs uppercase tracking-[0.28em] text-[#6E7869] font-medium">
          {countdown.accentText}
        </p>
      </div>

      {/* 3. Live Countdown Timer: 4 Glassmorphic Counter Tiles */}
      <div data-animate="fade-up" className="w-full grid grid-cols-4 gap-2.5 sm:gap-3 max-w-[340px]">
        {/* Days */}
        <div className="flex flex-col items-center justify-center py-3 px-1 rounded-xl bg-white/75 backdrop-blur-md border border-[#C5A869]/35 shadow-[0_4px_16px_rgba(45,56,43,0.06)]">
          <span className="font-playfair text-2xl sm:text-3xl font-normal text-[#2D382B]">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className="font-outfit text-[10px] uppercase tracking-[0.2em] text-[#6E7869] font-medium mt-1">
            {countdown.labels.days}
          </span>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center justify-center py-3 px-1 rounded-xl bg-white/75 backdrop-blur-md border border-[#C5A869]/35 shadow-[0_4px_16px_rgba(45,56,43,0.06)]">
          <span className="font-playfair text-2xl sm:text-3xl font-normal text-[#2D382B]">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="font-outfit text-[10px] uppercase tracking-[0.2em] text-[#6E7869] font-medium mt-1">
            {countdown.labels.hours}
          </span>
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center justify-center py-3 px-1 rounded-xl bg-white/75 backdrop-blur-md border border-[#C5A869]/35 shadow-[0_4px_16px_rgba(45,56,43,0.06)]">
          <span className="font-playfair text-2xl sm:text-3xl font-normal text-[#2D382B]">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="font-outfit text-[10px] uppercase tracking-[0.2em] text-[#6E7869] font-medium mt-1">
            {countdown.labels.minutes}
          </span>
        </div>

        {/* Seconds */}
        <div className="flex flex-col items-center justify-center py-3 px-1 rounded-xl bg-white/75 backdrop-blur-md border border-[#C5A869]/35 shadow-[0_4px_16px_rgba(45,56,43,0.06)]">
          <span className="font-playfair text-2xl sm:text-3xl font-normal text-[#C5A869]">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="font-outfit text-[10px] uppercase tracking-[0.2em] text-[#6E7869] font-medium mt-1">
            {countdown.labels.seconds}
          </span>
        </div>
      </div>
    </section>
  );
}

