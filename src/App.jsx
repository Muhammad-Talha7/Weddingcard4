import React, { useState } from 'react';
import IPhoneFrame from './components/IPhoneFrame';
import IntroScreen from './components/IntroScreen';
import FloatingPetals from './components/FloatingPetals';
import HeaderHero from './components/HeaderHero';
import MusicPlayer from './components/MusicPlayer';
import FamilySection from './components/FamilySection';
import EmotionBanner from './components/EmotionBanner';
import ArchedCountdown from './components/ArchedCountdown';
import CalendarSection from './components/CalendarSection';
import TimelineProgram from './components/TimelineProgram';
import VenueCard from './components/VenueCard';
import IntermissionPhoto from './components/IntermissionPhoto';
import JoinGroup from './components/JoinGroup';
import WishesAndGroup from './components/WishesAndGroup';
import useScrollAnimation from './hooks/useScrollAnimation';

export default function App() {
  const [isSiteReady, setIsSiteReady] = useState(false);

  // Smooth scroll and GSAP animations only activate when isSiteReady === true
  useScrollAnimation(isSiteReady);

  return (
    <IPhoneFrame
      isSiteReady={isSiteReady}
      introScreen={
        !isSiteReady ? (
          <IntroScreen onComplete={() => setIsSiteReady(true)} />
        ) : null
      }
    >
      {/* HTML5 Canvas Watercolor Petals Rain */}
      <FloatingPetals enabled={isSiteReady} />

      {/* Main Wedding Scroll Container */}
      <div
        id="wedding-scroll-container"
        className="w-full h-full overflow-y-auto overflow-x-hidden paper-bg no-scrollbar relative z-10"
      >
        <main className="wedding-card w-full flex flex-col items-center">
          {/* Section 1: Header Hero */}
          <HeaderHero />

          {/* Integrated Audio Player */}
          <MusicPlayer autoPlayEnabled={isSiteReady} />

          {/* Section 2: Family & Parents */}
          <FamilySection />

          {/* Section 3: Emotion Banner & Dress Code */}
          <EmotionBanner />

          {/* Section 4: Arched Portrait & Live Countdown */}
          <ArchedCountdown />

          {/* Section 5: Month Calendar & Add to Calendar */}
          <CalendarSection />

          {/* Section 6: Sinuous Curved Timeline Program */}
          <TimelineProgram />

          {/* Section 7: Draggable Venue Carousel */}
          <VenueCard />

          {/* Section 8: Intermission Portrait Moment */}
          <IntermissionPhoto />

          {/* Section 9: WhatsApp Guest Group & Guest Information */}
          <JoinGroup />

          {/* Section 10: Presence Gift Contribution, Duas & Closing */}
          <WishesAndGroup />
        </main>
      </div>
    </IPhoneFrame>
  );
}
