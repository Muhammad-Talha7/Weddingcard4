import React from 'react';
import { Calendar as CalendarIcon, Download } from 'lucide-react';
import { weddingData } from '../weddingData';

export default function CalendarSection() {
  const { calendar, bride, groom } = weddingData;

  const downloadIcs = () => {
    const { icsDetails } = calendar;
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Kate and Liam//Wedding Invitation//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:wedding-${bride.toLowerCase()}-${groom.toLowerCase()}-20260824`,
      'DTSTAMP:20260824T000000Z',
      `DTSTART:${icsDetails?.startDate || '20260824T230000Z'}`,
      `DTEND:${icsDetails?.endDate || '20260825T070000Z'}`,
      `SUMMARY:${icsDetails?.title || `Wedding of ${bride} & ${groom}`}`,
      `DESCRIPTION:${icsDetails?.description || `Join ${bride} & ${groom} to celebrate their wedding!`}`,
      `LOCATION:${icsDetails?.location || "St. Mary's Catholic Church / The Garden Terrace, San Diego, CA"}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${bride}_and_${groom}_Wedding.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative w-full py-8 px-5 sm:px-6 flex flex-col items-center text-center">
      {/* Cursive Month Title */}
      <div data-animate="fade-up" className="mb-4">
        <h3 className="font-marck text-3xl sm:text-4xl text-[#586652] italic">
          {calendar.monthTitle}
        </h3>
        <p className="font-outfit text-xs text-[#6E7869] uppercase tracking-[0.22em] font-medium mt-1">
          {calendar.monthName} {calendar.year}
        </p>
      </div>

      {/* Calendar Row of Date Tiles */}
      <div data-animate="zoom-in" className="w-full flex items-center justify-center gap-2 sm:gap-3 my-4">
        {calendar.days.map((day) => {
          const isMainDay = day === calendar.weddingDay;
          const eventInfo = calendar.events?.[day];

          return (
            <div
              key={day}
              className={`relative flex flex-col items-center justify-center w-12 h-16 sm:w-14 sm:h-18 rounded-2xl transition-all ${
                isMainDay
                  ? 'bg-[#384435] text-white shadow-[0_8px_20px_rgba(45,56,43,0.25)] border border-[#C5A869]'
                  : 'bg-white/80 text-[#2D3428] border border-[#C5A869]/25 shadow-sm'
              }`}
            >
              {/* Day Label */}
              <span
                className={`font-outfit text-[10px] uppercase font-semibold tracking-wider ${
                  isMainDay ? 'text-[#E2C98F]' : 'text-[#7E8D79]'
                }`}
              >
                {day === 24 ? 'SAT' : day === 23 ? 'FRI' : day === 25 ? 'SUN' : day === 22 ? 'THU' : 'MON'}
              </span>

              {/* Day Number */}
              <span
                className={`font-playfair text-xl sm:text-2xl font-normal leading-none mt-1 ${
                  isMainDay ? 'text-white' : 'text-[#2D382B]'
                }`}
              >
                {day}
              </span>

              {/* Indicator Dot for Events */}
              {isMainDay ? (
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2C98F] mt-1 animate-pulse" />
              ) : eventInfo?.isHighlight ? (
                <span className="w-1.5 h-1.5 rounded-full bg-[#7E8D79] mt-1" />
              ) : (
                <span className="w-1.5 h-1.5 mt-1" />
              )}
            </div>
          );
        })}
      </div>

      {/* "Add to Calendar" Button (generates .ics download) */}
      <div data-animate="fade-up" className="mt-4 w-full flex justify-center">
        <button
          type="button"
          onClick={downloadIcs}
          className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#384435] hover:bg-[#2D382B] text-white font-outfit text-xs uppercase tracking-[0.2em] font-medium shadow-[0_8px_22px_rgba(45,56,43,0.2)] border border-[#C5A869]/50 transition-all hover:scale-105 active:scale-95"
        >
          <CalendarIcon className="w-4 h-4 text-[#E2C98F] group-hover:rotate-12 transition-transform" />
          <span>{calendar.addToCalendarText || "Add to Calendar"}</span>
          <Download className="w-3.5 h-3.5 text-white/70" />
        </button>
      </div>
    </section>
  );
}

