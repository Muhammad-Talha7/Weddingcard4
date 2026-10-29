import React from 'react';
import {
  Church,
  Wine,
  Heart,
  UtensilsCrossed,
  Music,
  Sparkles,
  Sun
} from 'lucide-react';
import { weddingData } from '../weddingData';
import curvedLineSrc from '../assets/curved_line.png';

export default function TimelineProgram() {
  const { timeline } = weddingData;
  const events = timeline?.events || [];

  const getEventIcon = (iconName) => {
    switch (iconName) {
      case 'church':
        return <Church className="w-4 h-4 text-white" />;
      case 'cocktail':
      case 'glass':
        return <Wine className="w-4 h-4 text-white" />;
      case 'rings':
      case 'heart':
        return <Heart className="w-4 h-4 text-white" />;
      case 'utensils':
        return <UtensilsCrossed className="w-4 h-4 text-white" />;
      case 'music':
        return <Music className="w-4 h-4 text-white" />;
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-white" />;
      case 'sparkler':
        return <Sun className="w-4 h-4 text-white" />;
      default:
        return <Sparkles className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section className="relative w-full py-8 px-4 sm:px-6 flex flex-col items-center">
      {/* Title Header matching design reference: "THE BIG DAY" + Gold Heart */}
      <div data-animate="fade-up" className="flex flex-col items-center text-center mb-8">
        <h3 className="font-cormorant text-2xl sm:text-3xl uppercase tracking-[0.22em] font-normal text-[#2D382B]">
          {timeline?.sectionTitle || "THE BIG DAY"}
        </h3>
        
        {/* Gold Heart Icon */}
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="w-6 h-[1px] bg-[#C5A869]/50" />
          <svg className="w-3.5 h-3.5 text-[#C5A869] fill-current" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <div className="w-6 h-[1px] bg-[#C5A869]/50" />
        </div>

        {timeline?.subtitle && (
          <span className="font-marck text-lg text-[#586652] italic mt-1">
            {timeline.subtitle}
          </span>
        )}
      </div>

      {/* Sinuous Curved Timeline Container */}
      <div className="relative w-full max-w-[360px] min-h-[770px] sm:min-h-[690px] flex flex-col justify-between py-4">
        
        {/* Background Sinuous Curving Line */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
          <img
            src={curvedLineSrc}
            alt=""
            className="h-full w-auto object-contain max-h-[750px]"
          />
        </div>

        {/* Central Vertical Guide Line with Gold Nodes */}
        <div className="absolute left-7 sm:left-8 top-6 bottom-6 w-[1.5px] bg-gradient-to-b from-[#C5A869]/20 via-[#7E8D79]/40 to-[#C5A869]/20 pointer-events-none" />

        {/* Events List */}
        <div className="relative z-10 space-y-6 sm:space-y-7">
          {events.map((evt, idx) => {
            // Apply mobile curve apex classes for first 3 events as per GUIDELINES.md
            const apexClass =
              idx === 0
                ? 'timeline-apex-1'
                : idx === 1
                ? 'timeline-apex-2'
                : idx === 2
                ? 'timeline-apex-3'
                : '';

            return (
              <div
                key={evt.id || idx}
                data-animate={idx % 2 === 0 ? "from-left" : "from-right"}
                className={`relative flex items-start gap-4 transition-transform duration-300 ${apexClass}`}
              >
                {/* Circular Sage Icon Badge */}
                <div className="relative z-20 flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#384435] border-2 border-[#C5A869]/80 shadow-[0_4px_12px_rgba(45,56,43,0.25)] flex items-center justify-center transition-transform hover:scale-110">
                  {getEventIcon(evt.icon)}
                  {/* Outer pulse ring for the first main event */}
                  {idx === 0 && (
                    <span className="absolute -inset-1 rounded-full border border-[#C5A869]/40 animate-ping opacity-60" />
                  )}
                </div>

                {/* Event Details Card */}
                <div className="flex-1 pt-0.5">
                  <div className="flex items-baseline gap-2">
                    <span className="font-outfit text-xs font-semibold tracking-wider text-[#C5A869]">
                      {evt.time}
                    </span>
                    <span className="text-black/20 text-xs">•</span>
                    <h4 className="font-cormorant text-base sm:text-lg font-semibold tracking-[0.14em] text-[#2D382B] uppercase">
                      {evt.title}
                    </h4>
                  </div>

                  {evt.venue && (
                    <p className="font-cormorant text-sm text-[#2D3428] font-medium mt-0.5">
                      {evt.venue}
                    </p>
                  )}

                  {evt.address && (
                    <p className="font-outfit text-[11px] text-[#6E7869] font-light leading-snug mt-0.5">
                      {evt.address}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

