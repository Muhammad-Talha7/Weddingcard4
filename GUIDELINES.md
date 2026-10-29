# Luxury Digital Wedding Invitation Card — Project Guidelines & Master Specification

> **How to use this document**:
> Place this file in the root of any wedding card project as `GUIDELINES.md` (or `WEDDING_CARD_GUIDELINES.md`).
> When starting a conversation with your AI coding assistant, paste the **Master Prompt** from Section 1 below along with your design reference images and custom color palette.

---

## 1. Master Prompt (Copy & Paste to Chat)

```markdown
I am building a luxury digital wedding invitation card web application.

All structural specifications, section order, animation lifecycles, and component guidelines are defined in `GUIDELINES.md` in the project root.

I am providing my custom design reference (images, color palette, typography preferences, and couple details).
Please build the wedding card strictly following the architecture, negative constraints, and component guidelines defined in `GUIDELINES.md`. Do not add any RSVP forms or modals. All dynamic text and addresses must be driven by `src/weddingData.js`.
```

---

## 2. Strict Negative Constraints (What NEVER to Do)

1. **NO RSVP Section**: Never create RSVP forms, RSVP modals, attendance radio buttons, or guest count inputs. Guests interact exclusively via:
   - "Add to Calendar" button (generates `.ics` download / Google Calendar link).
   - "Open in Maps" and "Copy Address" buttons in the venue carousel.
   - "Join WhatsApp Group" button.
2. **NO Premature Animations**: Never run GSAP scroll entrance animations, the HTML5 canvas floating petal rain, or background music while the intro video is active. Everything must stay dormant until the visitor reaches the main site (`isSiteReady === true`).
3. **NO Frame on Mobile**: Never render phone chassis borders, bezels, or shadows on mobile screens (`< 640px`). Mobile is strictly 100% full-width, edge-to-edge, native scrolling.
4. **NO Hardcoded Text in Components**: Never hardcode couple names, dates, parents' names, venue addresses, or group links inside JSX. All textual data must be imported from `src/weddingData.js`.
5. **NO Letterboxed Desktop Intro**: Never stretch the 9:16 vertical intro video across a full widescreen monitor. On desktop (`>= 640px`), the intro video lives inside the iPhone 16 Pro mockup display screen, matching its native portrait aspect ratio.

---

## 3. Technology Stack & Core Libraries

- **Framework**: React 19+ (Vite).
- **Styling**: Tailwind CSS + custom CSS design tokens in `src/index.css`.
- **Smooth Scroll**: Lenis (`lenis/dist/lenis.css`).
- **Scroll Animations**: GSAP 3 + ScrollTrigger plugin.
- **Icons**: `lucide-react`.
- **Canvas Particles**: Custom HTML5 2D canvas watercolor flower petal rain.
- **Typography (Google Fonts via `@import`)**:
  - `Marck Script`: Romantic handwritten Urdu/English calligraphy for couple names & event titles.
  - `Cormorant Garamond`: Classic luxury serif for dates, subtitles, quotes, and badges.
  - `Playfair Display`: High-contrast serif for countdown digits and monogram.
  - `Outfit` or `Inter`: Clean geometric sans-serif for addresses, labels, and buttons.

---

## 4. Single Source of Truth (`src/weddingData.js`)

All project customizations are made in this file:

```javascript
// ============================================================================
// WEDDING INVITATION DATA — SINGLE SOURCE OF TRUTH
// ============================================================================

export const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/YOUR_GROUP_CODE";

export const weddingData = {
  // ── 1. Couple & Header ───────────────────────────────────────────────────
  headerBadge: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
  monogram: "A & A",
  groom: "Ahmed",
  bride: "Ayesha",
  subheading: "Alhamdulillah, we're getting married!",
  introText:
    "With the blessings of Allah and our elders, we invite you to join us in celebrating the beginning of our new journey together.",

  // ── 2. Family / Parents ──────────────────────────────────────────────────
  family: {
    groomParents: {
      label: "Groom's Parents",
      father: "Mr. Muhammad Sagheer",
      mother: "Mrs. Zarina Sagheer"
    },
    brideParents: {
      label: "Bride's Parents",
      father: "Mr. Khalid Mehmood",
      mother: "Mrs. Sadia Khalid"
    }
  },

  // ── 3. Calendar Month & Dates ───────────────────────────────────────────
  calendar: {
    monthTitle: "our december",
    year: 2026,
    monthNumber: 12,
    monthName: "December",
    days: [9, 10, 11, 12, 13],
    weddingDay: 11,
    events: {
      10: { name: "Mehndi", isHighlight: true },
      11: { name: "Barat", isMain: true },
      12: { name: "Walima", isHighlight: true }
    },
    targetDate: "2026-12-10T19:00:00",
    addToCalendarText: "Add to Calendar"
  },

  // ── 4. Sinuous Timeline Events ──────────────────────────────────────────
  timeline: [
    {
      id: "mehndi",
      date: "Dec 10",
      time: "19:00",
      title: "Mehndi",
      venue: "Home",
      icon: "sparkles"
    },
    {
      id: "barat",
      date: "Dec 11",
      time: "19:30",
      title: "Barat",
      venue: "Sagheer Castle Marquee",
      icon: "heart"
    },
    {
      id: "walima",
      date: "Dec 12",
      time: "19:30",
      title: "Walima",
      venue: "Anmol Marquee",
      icon: "glass"
    }
  ],

  // ── 5. Multiple Event Venues & Addresses (Venue Carousel) ───────────────
  venueSlides: [
    {
      event: "Mehndi",
      date: "Dec 10",
      title: "We Await You",
      name: "Home",
      address: "House #12, Street 4, Model Town, Gujrat",
      mapUrl: "https://maps.app.goo.gl/XXXXXXXXXX"
    },
    {
      event: "Barat",
      date: "Dec 11",
      title: "We Await You",
      name: "Sagheer Castle Marquee",
      address: "G.T. Road, Gujrat",
      mapUrl: "https://maps.app.goo.gl/XXXXXXXXXX"
    },
    {
      event: "Walima",
      date: "Dec 12",
      title: "We Await You",
      name: "Anmol Marquee",
      address: "Opposite Grid Station, Gujrat",
      mapUrl: "https://maps.app.goo.gl/XXXXXXXXXX"
    }
  ],

  // ── 6. Emotional Quote Banner ───────────────────────────────────────────
  emotionBanner: {
    mainText:
      "Your presence and duas mean the world to us. Please grace our celebration and be part of our happiness!",
    subText: "waiting for you with open hearts",
    signature: "WITH LOVE, AHMED & AYESHA"
  },

  // ── 7. Arched Portrait & Live Countdown ─────────────────────────────────
  archedPhoto: {
    curvedText: "And He placed between you affection and mercy",
    placeholderLabel: "Couple Portrait"
  },

  countdown: {
    watermarkText: "we say Qubool Hai",
    accentText: "in...",
    targetDate: "2026-12-10T19:00:00",
    labels: {
      days: "days",
      hours: "hours",
      minutes: "mins",
      seconds: "secs"
    }
  },

  // ── 8. Guest WhatsApp Group ─────────────────────────────────────────────
  guestGroup: {
    title: "Guest Group",
    text: "Join our group for event updates, venue details, and to share photos and videos from the celebrations.",
    buttonText: "Join WhatsApp Group",
    link: WHATSAPP_GROUP_LINK
  },

  // ── 9. Duas & Closing ───────────────────────────────────────────────────
  wishes: {
    title: "Duas & Blessings",
    text: "Your duas and presence are the best gift we could ask for. May Allah bless our union and keep us together in love and mercy. Ameen."
  }
};
```

---

## 5. Component Hierarchy & Execution Blueprint

The page must render the following components in strict order:

```
App.jsx
  │
  ├── IPhoneFrame.jsx (Responsive wrapper)
  │     ├── [Desktop Only] Status Bar & Dynamic Island (z-40)
  │     ├── FloatingPetals.jsx (Canvas particle rain, enabled={isSiteReady})
  │     ├── #wedding-scroll-container
  │     │     └── <main className="wedding-card">
  │     │           ├── Section 1: HeaderHero.jsx (Hero couple photos & titles)
  │     │           ├── MusicPlayer.jsx (Integrated audio player, autoPlayEnabled={isSiteReady})
  │     │           ├── Section 2: FamilySection.jsx (Parents of Groom & Bride)
  │     │           ├── Section 3: EmotionBanner.jsx (Wine card with love quote)
  │     │           ├── Section 4: ArchedCountdown.jsx (Arch portrait + live timer)
  │     │           ├── Section 5: CalendarSection.jsx (Date row + Add to Calendar)
  │     │           ├── Section 6: TimelineProgram.jsx (Sinuous curved timeline)
  │     │           ├── Section 7: VenueCard.jsx (Draggable venue carousel with multiple addresses)
  │     │           ├── Section 8: IntermissionPhoto.jsx (Romantic framed portrait)
  │     │           ├── Section 9: JoinGroup.jsx (WhatsApp guest group card)
  │     │           └── Section 10: WishesAndGroup.jsx (Closing duas & footer)
  │     │
  │     ├── [Desktop Only] Home Indicator Bar (z-40)
  │     └── IntroScreen.jsx (Gatekeeper overlay, z-50, unmounts when isSiteReady === true)
```

---

## 6. Section Specifications & Implementation Details

### Section 0: Intro Video Gatekeeper (`IntroScreen.jsx`)
- **Video Asset**: Vertical 9:16 video (`src/assets/intro.mp4`) showing an envelope opening.
- **Poster Frame**: First frame saved as `src/assets/intro_poster.jpg` to prevent any black flicker.
- **Tap To Open Indicator**:
  - Position: `absolute bottom-8 right-5 sm:bottom-10 sm:right-7 z-20`.
  - Design: Translucent dark maroon glassmorphism pill (`bg-[#1b090e]/70 backdrop-blur-md border border-[#d4af37]/70 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.85)]`).
  - Pulsing indicator dot (`animate-ping`) in champagne gold.
  - Text: `"Tap to open"` in *Cormorant Garamond* italic serif with gold sparkle (`✦`).
- **Interaction**:
  - Clicking/touching anywhere starts video playback with audio unmuted.
  - Fallback logic: if browser blocks unmuted play, catch and play muted so the user is never stuck.
  - Video `onEnded`: triggers a 600ms cross-fade into a `#FAF6F0` cream background matching the wedding card paper, then invokes `onComplete()` to set `isSiteReady = true`.
  - Body/window scroll is locked (`overflow: hidden`) while the intro is visible.

### Section 1: Header Hero (`HeaderHero.jsx`)
- Bismillah header badge: `text-[#741022]/70 font-semibold tracking-[0.32em] text-[10px] sm:text-[11px]`.
- Monogram badge with subtle gold border.
- Couple names in script calligraphy (`font-['Marck_Script',cursive] text-[48px] sm:text-[58px] text-[#741022]`).
- Two framed couple portraits side-by-side:
  - Left card: 3:4 aspect ratio portrait.
  - Right card: 9:16 aspect ratio vertical portrait.
- Welcoming subheading and intro text in serif font.

### Audio Player (`MusicPlayer.jsx`)
- Plays background soundtrack (`/audio/Hum.mp3`).
- Features: Play / Pause button, scrubbable progress bar with active gold fill, elapsed and total duration counters.
- **Gatekeeping**: Takes `autoPlayEnabled={isSiteReady}` prop. It does not play or attach global window listeners until `isSiteReady` is `true`.

### Section 2: Family & Hosts (`FamilySection.jsx`)
- Two-column layout: Groom's Parents on the left, Bride's Parents on the right.
- Separated by delicate ornamental botanical / floral dividers.

### Section 3: Emotion Banner (`EmotionBanner.jsx`)
- Deep wine textured container (`wine-textured-card`) with subtle grain/linen texture.
- Contrasting ivory serif text with warm romantic quote and couple signature.

### Section 4: Arched Portrait & Live Countdown (`ArchedCountdown.jsx`)
- Architectural rounded arch photo container (`rounded-t-full`).
- Curved text along the arch path rendered via inline SVG `<textPath>`:
  `"And He placed between you affection and mercy"`.
- Live real-time countdown timer calculating remaining time to `countdown.targetDate`:
  - 4 glassmorphic counter tiles: Days, Hours, Mins, Secs.
  - High-contrast serif numbers in wine/gold.

### Section 5: Month Calendar Section (`CalendarSection.jsx`)
- Title: `"our [month]"` in cursive.
- "Add to Calendar" button that generates a downloadable `.ics` iCalendar file with event details.
- Calendar row of date tiles: days of the wedding week, with circular badges highlighting Mehndi, Barat, and Walima.

### Section 6: Sinuous Curved Timeline Program (`TimelineProgram.jsx`)
- Background sinuous winding line (`curved_line.png`).
- 3 Event blocks alternating sides:
  - Event 1 (Mehndi, Dec 10): Left side.
  - Event 2 (Barat, Dec 11): Right side.
  - Event 3 (Walima, Dec 12): Left side.
- **Mobile Curve Apex Alignment (CRITICAL)**:
  On mobile screens (`< 640px`), each event MUST be vertically centered where the line reaches its deepest curvature:
  - Mehndi: `top: 24px !important;` (aligned with the apex of the top rightward arc).
  - Barat: `top: 51px !important;` (aligned with the apex of the middle leftward arc).
  - Walima: `top: 106px !important;` (aligned with the apex of the bottom-left cradle).
  - Desktop: `sm:top-0` (desktop uses normal flow inside the mockup).
  - Container minimum height: `min-h-[770px] sm:min-h-[690px]` to provide adequate breathing room before the venue section.

### Section 7: Venue Carousel (`VenueCard.jsx`)
- Handles multiple event addresses (Mehndi, Barat, Walima).
- Infinite auto-sliding track with touch & mouse dragging support.
- 40px red gap between slides (`GAP_PX = 40`).
- Each slide card features:
  - Event badge ("Mehndi", "Barat", "Walima").
  - Venue name and full street address.
  - "Open in Maps" button: opens Google Maps in a new tab.
  - "Copy Address" button: writes address to clipboard and toggles a `"Copied!"` checkmark confirmation for 2 seconds.

### Section 8: Intermission Photo (`IntermissionPhoto.jsx`)
- Cinematic portrait photo moment with subtle framing and drop shadow.

### Section 9: Join WhatsApp Guest Group (`JoinGroup.jsx`)
- Dedicated card inviting guests to join the wedding group for photos and event updates.
- "Join WhatsApp Group" button linking to `WHATSAPP_GROUP_LINK`.

### Section 10: Duas & Blessings Footer (`WishesAndGroup.jsx`)
- Closing Islamic prayer (Dua) for the couple's union.
- Final monogram or signature footer.

---

## 7. Animation Architecture & Lifecycle

### GSAP & Lenis Setup (`src/hooks/useScrollAnimation.js`)
```javascript
export default function useScrollAnimation(enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const isDesktop = window.innerWidth >= 640;
    const scrollContainer = document.getElementById('wedding-scroll-container');
    const scroller = isDesktop && scrollContainer ? scrollContainer : window;
    const isWindow = scroller === window;

    // 1. Lenis Smooth Scroll
    const lenis = new Lenis({
      wrapper: isWindow ? window : scroller,
      content: isWindow ? document.documentElement : (scrollContainer?.firstElementChild || scrollContainer),
      eventsTarget: window,
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);
    const tickerCallback = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.defaults({ scroller });

    // 2. GSAP Animations
    const ctx = gsap.context(() => {
      // Hero top entrance (immediate on site entry)
      const heroElements = document.querySelectorAll('[data-animate="hero-top"]');
      if (heroElements.length > 0) {
        gsap.from(heroElements, {
          y: 24,
          opacity: 0,
          duration: 1.1,
          stagger: 0.15,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      }

      // ScrollTrigger data-animate hooks: from-left, from-right, fade-up, zoom-in
      ...
    });

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
      lenis.resize();
    }, 300);

    return () => {
      clearTimeout(refreshTimer);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [enabled]);
}
```

### Canvas Watercolor Petal Rain (`FloatingPetals.jsx`)
- HTML5 Canvas particle system emitting 14 subtle watercolor petals.
- Mixed watercolor palette: 55% Deep Red/Maroon, 30% Soft Rose Pink, 15% Sage Blue.
- Individual 3D rotation, vertical drifting speed, and horizontal flip simulation.
- Takes `enabled={isSiteReady}` prop; only runs its `requestAnimationFrame` loop when the site is reached.

---

## 8. Asset Structure Checklist

When scaffolding any new card project, verify all assets exist in `src/assets/`:
- `intro.mp4` — 9:16 vertical video of the envelope opening.
- `intro_poster.jpg` — First frame image of the sealed envelope.
- `curved_line.png` — Seamless sinuous timeline illustration.
- `mehndi.webp`, `baraat.webp`, `walima.png` — Event icon graphics.
- `redpetal.png`, `pinkpetal.png`, `bluepetal.png` — Watercolor petal sprites.
- `couple_photo_1.jpg`, `couple_photo_2.jpg`, `couple_arch.jpg`, `intermission.jpg` — Wedding portraits.
- `public/audio/Hum.mp3` — Background audio file.