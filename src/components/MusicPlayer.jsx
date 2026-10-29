import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Shuffle, SkipBack, SkipForward, Repeat } from 'lucide-react';
import { weddingData } from '../weddingData';

export default function MusicPlayer({ autoPlayEnabled = false }) {
  const { music } = weddingData;
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(263); // ~4:23 default
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(true);

  // Autoplay gatekeeper: only attempts playback once site is ready
  useEffect(() => {
    if (!autoPlayEnabled) return;

    const audio = audioRef.current;
    if (!audio) return;

    const tryAutoPlay = () => {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // If autoplay blocked by browser policy, wait for first user interaction
        const handleFirstInteraction = () => {
          if (audio) {
            audio.play().then(() => setIsPlaying(true)).catch(() => {});
          }
          window.removeEventListener('click', handleFirstInteraction);
          window.removeEventListener('touchstart', handleFirstInteraction);
        };
        window.addEventListener('click', handleFirstInteraction, { once: true });
        window.addEventListener('touchstart', handleFirstInteraction, { once: true });
      });
    };

    tryAutoPlay();
  }, [autoPlayEnabled]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => console.log('Playback error:', e));
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      setCurrentTime(audio.currentTime);
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    }
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = pos * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const restartTrack = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      setCurrentTime(0);
      if (!isPlaying) togglePlay();
    }
  };

  const formatTime = (secs) => {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div data-animate="fade-up" className="w-full px-5 sm:px-6 my-4 select-none">
      <audio
        ref={audioRef}
        src={music.audioSrc}
        loop={isRepeat}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={() => {
          if (!isRepeat) setIsPlaying(false);
        }}
      />

      {/* Spotify-Like Translucent Dark Sage Card */}
      <div className="relative w-full rounded-2xl bg-[#384435]/95 backdrop-blur-md border border-[#C5A869]/30 p-4 shadow-[0_12px_30px_rgba(45,56,43,0.22)] text-white overflow-hidden">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Track Info */}
        <div className="flex flex-col items-center text-center mb-3">
          <h4 className="font-cormorant text-xl font-medium tracking-wide text-[#FAF7F2]">
            {music.title}
          </h4>
          <p className="font-outfit text-xs text-[#E2C98F]/90 font-light tracking-wider">
            {music.artist}
          </p>
        </div>

        {/* Scrubbable Progress Bar */}
        <div className="w-full space-y-1.5 mb-3">
          <div
            onClick={handleSeek}
            className="group relative h-1.5 w-full bg-white/20 rounded-full cursor-pointer overflow-hidden transition-all hover:h-2"
          >
            <div
              className="absolute left-0 top-0 bottom-0 bg-[#E2C98F] rounded-full transition-all duration-100"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          
          <div className="flex items-center justify-between text-[11px] font-outfit text-white/70 font-light px-0.5">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls Row */}
        <div className="flex items-center justify-between px-3 pt-1">
          {/* Shuffle */}
          <button
            type="button"
            onClick={() => setIsShuffle(!isShuffle)}
            className={`p-1.5 rounded-full transition-colors ${
              isShuffle ? 'text-[#E2C98F]' : 'text-white/60 hover:text-white'
            }`}
            title="Shuffle"
          >
            <Shuffle className="w-4 h-4" />
          </button>

          {/* Previous Track / Rewind */}
          <button
            type="button"
            onClick={restartTrack}
            className="p-1.5 text-white/80 hover:text-white active:scale-95 transition-all"
            title="Previous"
          >
            <SkipBack className="w-4 h-4 fill-current" />
          </button>

          {/* Play / Pause Primary Button */}
          <button
            type="button"
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-white text-[#2D382B] flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </button>

          {/* Next Track */}
          <button
            type="button"
            onClick={restartTrack}
            className="p-1.5 text-white/80 hover:text-white active:scale-95 transition-all"
            title="Next"
          >
            <SkipForward className="w-4 h-4 fill-current" />
          </button>

          {/* Repeat */}
          <button
            type="button"
            onClick={() => setIsRepeat(!isRepeat)}
            className={`p-1.5 rounded-full transition-colors ${
              isRepeat ? 'text-[#E2C98F]' : 'text-white/60 hover:text-white'
            }`}
            title="Repeat"
          >
            <Repeat className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

