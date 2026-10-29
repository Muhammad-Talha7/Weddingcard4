import React, { useState, useEffect } from 'react';
import { Wifi, Battery } from 'lucide-react';

export default function IPhoneFrame({ children, introScreen }) {
  const [currentTime, setCurrentTime] = useState('9:41');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      hours = hours % 12 || 12;
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center sm:py-6 sm:px-4 bg-[#141712] relative overflow-hidden">
      {/* Desktop Background Ambient Glow */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4E5D48]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px]" />
      </div>

      {/* Frame Container: Mobile = 100% full-width edge-to-edge; Desktop = iPhone 16 Pro Chassis */}
      <div className="w-full sm:max-w-[430px] sm:h-[890px] sm:max-h-[calc(100vh-2rem)] flex flex-col relative sm:rounded-[54px] sm:p-3 sm:bg-[#20231D] sm:iphone-chassis transition-all duration-300">
        
        {/* Inner Phone Screen (Desktop Rounded Bezel) */}
        <div className="w-full h-full relative overflow-hidden bg-[#FAF7F2] sm:rounded-[44px] flex flex-col shadow-inner">
          
          {/* [Desktop Only] Status Bar & Dynamic Island (z-40) */}
          <div className="hidden sm:flex absolute top-0 inset-x-0 h-11 items-center justify-between px-7 z-40 pointer-events-none select-none text-[#2D3428]">
            <span className="text-[14px] font-semibold tracking-tight font-outfit">
              {currentTime}
            </span>

            {/* Dynamic Island */}
            <div className="w-28 h-6 bg-black rounded-full mx-auto shadow-sm" />

            <div className="flex items-center gap-1.5 text-[#2D3428]">
              {/* Signal strength indicator */}
              <svg className="w-4 h-3.5 fill-current" viewBox="0 0 16 12">
                <rect x="0" y="8" width="2.5" height="4" rx="0.6" />
                <rect x="4" y="6" width="2.5" height="6" rx="0.6" />
                <rect x="8" y="3" width="2.5" height="9" rx="0.6" />
                <rect x="12" y="0" width="2.5" height="12" rx="0.6" />
              </svg>
              <Wifi className="w-3.5 h-3.5" />
              <Battery className="w-4 h-4" />
            </div>
          </div>

          {/* Intro Screen Gatekeeper (z-50) */}
          {introScreen}

          {/* Children: Particle Rain + Scroll Container with main.wedding-card */}
          <div className="relative w-full h-full flex flex-col flex-1 overflow-hidden">
            {children}
          </div>

          {/* [Desktop Only] Home Indicator Bar (z-40) */}
          <div className="hidden sm:flex absolute bottom-2 inset-x-0 justify-center z-40 pointer-events-none">
            <div className="w-36 h-1 bg-[#2D3428]/35 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
