import React, { useState, useRef } from 'react';
import { MapPin, ExternalLink, Copy, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { weddingData } from '../weddingData';

export default function VenueCard() {
  const { venueSlides } = weddingData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Dragging / swiping state
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);

  const totalSlides = venueSlides.length;

  const handleCopy = (address, index) => {
    navigator.clipboard.writeText(address).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Touch & Pointer Drag Handlers
  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const endX = e.type.includes('mouse') ? e.pageX : (e.changedTouches ? e.changedTouches[0].clientX : startX.current);
    const diff = endX - startX.current;

    if (diff < -45) {
      nextSlide();
    } else if (diff > 45) {
      prevSlide();
    }
  };

  return (
    <section className="relative w-full py-8 px-4 sm:px-6 flex flex-col items-center">
      {/* Section Title */}
      <div data-animate="fade-up" className="flex flex-col items-center text-center mb-6">
        <h3 className="font-cormorant text-2xl sm:text-3xl uppercase tracking-[0.22em] font-normal text-[#2D382B]">
          Event Venues
        </h3>
        <p className="font-outfit text-xs text-[#6E7869] font-light tracking-wider mt-1">
          Locations & Driving Directions
        </p>
      </div>

      {/* Carousel Container */}
      <div
        data-animate="zoom-in"
        className="relative w-full max-w-[360px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseUp={handleTouchEnd}
      >
        {/* Carousel Track with smooth transition */}
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {venueSlides.map((venue, idx) => {
            const isCopied = copiedIndex === idx;

            return (
              <div
                key={idx}
                className="w-full flex-shrink-0 px-2 box-border select-none"
              >
                <div className="relative w-full rounded-2xl bg-white p-5 sm:p-6 shadow-[0_10px_28px_rgba(45,56,43,0.12)] border border-[#C5A869]/30 flex flex-col justify-between min-h-[290px]">
                  
                  {/* Top: Event Badge & Date */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 rounded-full bg-[#384435]/10 text-[#384435] border border-[#384435]/20 font-outfit text-[11px] font-semibold tracking-wider uppercase">
                        {venue.event}
                      </span>
                      <span className="font-outfit text-xs text-[#C5A869] font-medium">
                        {venue.date}
                      </span>
                    </div>

                    <span className="font-marck text-lg text-[#586652] italic block">
                      {venue.title}
                    </span>

                    {/* Venue Name & Address */}
                    <h4 className="font-cormorant text-xl font-semibold text-[#2D382B] mt-2 mb-1">
                      {venue.name}
                    </h4>
                    <p className="font-outfit text-xs text-[#6E7869] font-light leading-relaxed flex items-start gap-1.5 mt-2">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A869] flex-shrink-0 mt-0.5" />
                      <span>{venue.address}</span>
                    </p>
                  </div>

                  {/* Actions: "Open in Maps" and "Copy Address" */}
                  <div className="grid grid-cols-2 gap-2.5 mt-6 pt-4 border-t border-[#C5A869]/20">
                    {/* Open in Maps */}
                    <a
                      href={venue.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#384435] text-white font-outfit text-[11px] uppercase tracking-wider font-medium shadow-sm hover:bg-[#2D382B] active:scale-95 transition-all"
                    >
                      <span>Open in Maps</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#E2C98F]" />
                    </a>

                    {/* Copy Address */}
                    <button
                      type="button"
                      onClick={() => handleCopy(venue.address, idx)}
                      className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border font-outfit text-[11px] uppercase tracking-wider font-medium transition-all active:scale-95 ${
                        isCopied
                          ? 'bg-[#586652] text-white border-[#586652]'
                          : 'bg-[#FAF7F2] text-[#2D382B] border-[#C5A869]/40 hover:bg-[#F4EFE6]'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#E2C98F]" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#7E8D79]" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Arrow Controls */}
        {totalSlides > 1 && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow-md border border-[#C5A869]/30 flex items-center justify-center text-[#2D382B] hover:scale-110 active:scale-95 transition-all z-20"
              title="Previous Venue"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow-md border border-[#C5A869]/30 flex items-center justify-center text-[#2D382B] hover:scale-110 active:scale-95 transition-all z-20"
              title="Next Venue"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Slide Indicators Dots */}
      {totalSlides > 1 && (
        <div className="flex items-center gap-2 mt-4">
          {venueSlides.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                dotIdx === currentIndex
                  ? 'w-6 bg-[#384435]'
                  : 'w-2 bg-[#7E8D79]/40 hover:bg-[#7E8D79]'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
