import React from 'react';
import { weddingData } from '../weddingData';

export default function FamilySection() {
  const { family } = weddingData;
  if (!family) return null;

  const { groomParents, brideParents, title, subtitle } = family;

  return (
    <section className="relative w-full py-8 px-5 sm:px-6 flex flex-col items-center text-center">
      {/* Delicate Heading */}
      <div data-animate="fade-up" className="mb-6 space-y-1">
        <h3 className="font-cormorant text-2xl uppercase tracking-[0.2em] font-normal text-[#2D382B]">
          {title || "Honored Families"}
        </h3>
        <p className="font-outfit text-xs text-[#6E7869] font-light tracking-wider">
          {subtitle || "With the blessings and love of our parents"}
        </p>
      </div>

      {/* Two-Column Family Layout */}
      <div className="w-full grid grid-cols-2 gap-4 items-center relative py-2">
        {/* Center Divider Line with Gold Leaf Accent */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex flex-col items-center justify-between py-2 pointer-events-none">
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#C5A869]/40 to-transparent" />
          <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#FAF7F2] border border-[#C5A869]/60 flex items-center justify-center">
            <span className="text-[#C5A869] text-[10px]">❦</span>
          </div>
        </div>

        {/* Groom's Parents (Left Column) */}
        <div data-animate="from-left" className="flex flex-col items-center text-center pr-2">
          <span className="font-outfit text-[11px] uppercase tracking-[0.2em] font-semibold text-[#586652] mb-1.5">
            {groomParents.label}
          </span>
          <p className="font-cormorant text-lg font-medium text-[#2D3428] leading-snug">
            {groomParents.father}
          </p>
          <span className="font-marck text-sm text-[#C5A869] my-0.5">and</span>
          <p className="font-cormorant text-lg font-medium text-[#2D3428] leading-snug">
            {groomParents.mother}
          </p>
        </div>

        {/* Bride's Parents (Right Column) */}
        <div data-animate="from-right" className="flex flex-col items-center text-center pl-2">
          <span className="font-outfit text-[11px] uppercase tracking-[0.2em] font-semibold text-[#586652] mb-1.5">
            {brideParents.label}
          </span>
          <p className="font-cormorant text-lg font-medium text-[#2D3428] leading-snug">
            {brideParents.father}
          </p>
          <span className="font-marck text-sm text-[#C5A869] my-0.5">and</span>
          <p className="font-cormorant text-lg font-medium text-[#2D3428] leading-snug">
            {brideParents.mother}
          </p>
        </div>
      </div>

      {/* Subtle Botanical Divider */}
      <div data-animate="fade-up" className="w-full flex items-center justify-center gap-3 mt-6">
        <div className="w-12 h-[1px] bg-[#C5A869]/40" />
        <span className="text-[#7E8D79] text-xs">𐚁</span>
        <div className="w-12 h-[1px] bg-[#C5A869]/40" />
      </div>
    </section>
  );
}

