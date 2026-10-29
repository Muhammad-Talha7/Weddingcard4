import React from 'react';
import { MessageCircle, Car, Building2, Camera, ArrowRight } from 'lucide-react';
import { weddingData } from '../weddingData';

export default function JoinGroup() {
  const { guestGroup, guestInfo } = weddingData;

  const getInfoIcon = (iconName) => {
    switch (iconName) {
      case 'car':
        return <Car className="w-5 h-5 text-[#586652]" />;
      case 'building':
        return <Building2 className="w-5 h-5 text-[#586652]" />;
      case 'camera':
        return <Camera className="w-5 h-5 text-[#586652]" />;
      default:
        return <Camera className="w-5 h-5 text-[#586652]" />;
    }
  };

  return (
    <section className="relative w-full py-8 px-5 sm:px-6 flex flex-col items-center">
      
      {/* 1. Guest Information Section (matching design reference) */}
      {guestInfo && (
        <div data-animate="fade-up" className="w-full mb-8 space-y-4">
          <div className="text-center mb-6">
            <h3 className="font-cormorant text-2xl uppercase tracking-[0.22em] font-normal text-[#2D382B]">
              {guestInfo.title}
            </h3>
            {/* Gold Heart Icon */}
            <div className="flex items-center justify-center my-2">
              <svg className="w-3.5 h-3.5 text-[#C5A869] fill-current" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>

          <div className="space-y-4">
            {guestInfo.items.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-[#C5A869]/30 shadow-sm"
              >
                <div className="w-9 h-9 rounded-full bg-[#384435]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {getInfoIcon(item.icon)}
                </div>
                <div>
                  <h4 className="font-cormorant text-base font-semibold tracking-wider text-[#2D382B] uppercase">
                    {item.title}
                  </h4>
                  <p className="font-outfit text-xs text-[#6E7869] font-light leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. WhatsApp Guest Group Card (GUIDELINES Section 9) */}
      <div
        data-animate="zoom-in"
        className="w-full rounded-2xl bg-white p-6 text-center border border-[#C5A869]/35 shadow-[0_10px_28px_rgba(45,56,43,0.1)] flex flex-col items-center"
      >
        <div className="w-12 h-12 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center mb-3">
          <MessageCircle className="w-6 h-6 text-[#25D366]" />
        </div>

        <h4 className="font-cormorant text-2xl font-normal tracking-wide text-[#2D382B] mb-2">
          {guestGroup.title}
        </h4>

        <p className="font-outfit text-xs text-[#6E7869] font-light leading-relaxed max-w-xs mb-5">
          {guestGroup.text}
        </p>

        <a
          href={guestGroup.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#384435] hover:bg-[#2D382B] text-white font-outfit text-xs uppercase tracking-[0.2em] font-medium shadow-md transition-all hover:scale-105 active:scale-95 border border-[#C5A869]/50"
        >
          <span>{guestGroup.buttonText}</span>
          <ArrowRight className="w-4 h-4 text-[#E2C98F]" />
        </a>
      </div>
    </section>
  );
}

