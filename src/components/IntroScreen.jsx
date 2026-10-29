import React, { useState, useEffect, useRef } from 'react';
import posterSrc from '../assets/intro_poster.jpg';

export default function IntroScreen({ onComplete }) {
  const [isOpening, setIsOpening] = useState(false);
  const [fadedOut, setFadedOut] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef(null);
  const [videoAvailable, setVideoAvailable] = useState(false);

  // Lock body scroll while intro is visible
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    setHasStarted(true);

    const video = videoRef.current;
    if (video && videoAvailable) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback to muted playback if audio is blocked
          video.muted = true;
          video.play().catch(() => {
            finishIntro();
          });
        });
      }
    } else {
      // If video is not present or error, provide a cinematic 900ms envelope opening fade
      setTimeout(() => {
        finishIntro();
      }, 900);
    }
  };

  const finishIntro = () => {
    setFadedOut(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 600);
  };

  return (
    <div
      onClick={handleOpen}
      className={`fixed inset-0 sm:absolute z-50 flex items-center justify-center cursor-pointer select-none overflow-hidden transition-opacity duration-600 ease-in-out ${
        fadedOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#FAF7F2' }}
    >
      {/* Background Poster / Visual Envelope */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out ${
          isOpening ? 'scale-105' : 'scale-100'
        }`}
        style={{
          backgroundImage: `url(${posterSrc})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        {/* Soft lighting vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/25" />
      </div>

      {/* Optional HTML5 Video element if intro.mp4 exists in bundle */}
      <video
        ref={videoRef}
        src="/intro.mp4"
        playsInline
        preload="auto"
        onCanPlay={() => setVideoAvailable(true)}
        onEnded={finishIntro}
        onError={() => setVideoAvailable(false)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          hasStarted && videoAvailable ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Decorative Monogram Watermark on Envelope */}
      {!hasStarted && (
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
          <div className="w-16 h-16 rounded-full border border-[#D4AF37]/60 bg-[#2E382B]/60 backdrop-blur-md flex items-center justify-center mb-4 shadow-[0_8px_25px_rgba(0,0,0,0.5)]">
            <span className="font-playfair text-[#E6CE93] text-xl font-light tracking-widest">K & L</span>
          </div>
          <p className="font-cormorant text-white/90 text-sm tracking-[0.28em] uppercase font-light drop-shadow-md">
            Wedding Invitation
          </p>
        </div>
      )}

      {/* Tap To Open Indicator Pill */}
      {!hasStarted && (
        <div className="absolute bottom-8 right-5 sm:bottom-10 sm:right-7 z-20">
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#1e251a]/75 backdrop-blur-md border border-[#c5a869]/70 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.85)] transition-transform hover:scale-105 active:scale-95">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E6CE93]"></span>
            </span>
            <span className="font-cormorant italic text-[15px] sm:text-[16px] text-[#F3EAD6] tracking-wide font-medium flex items-center gap-1.5">
              Tap to open <span className="text-[#D4AF37] not-italic text-xs">✦</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

