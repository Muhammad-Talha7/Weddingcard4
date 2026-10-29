import React from 'react';
import intermissionImg from '../assets/intermission.jpg';
import { weddingData } from '../weddingData';

export default function IntermissionPhoto() {
  const { bride, groom } = weddingData;

  return (
    <section className="relative w-full py-6 px-5 sm:px-6 flex flex-col items-center">
      {/* Framed Cinematic Portrait Card */}
      <div
        data-animate="zoom-in"
        className="relative w-full max-w-[340px] rounded-2xl overflow-hidden p-1.5 bg-gradient-to-b from-[#C5A869]/50 via-white to-[#7E8D79]/40 shadow-[0_16px_36px_rgba(45,56,43,0.16)]"
      >
        <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#2D382B]">
          <img
            src={intermissionImg}
            alt={`${bride} & ${groom}`}
            className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.03] transition-transform duration-700 hover:scale-105"
          />
          {/* Subtle bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          {/* Discreet romantic quote overlay */}
          <div className="absolute bottom-4 inset-x-4 text-center">
            <p className="font-marck text-xl text-white/95 drop-shadow-md">
              Forever begins today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

