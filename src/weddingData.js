// ============================================================================
// WEDDING INVITATION DATA — SINGLE SOURCE OF TRUTH
// ============================================================================

export const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/KateAndLiamWedding2025";

export const weddingData = {
  // ── 1. Couple & Header ───────────────────────────────────────────────────
  headerBadge: "TOGETHER WITH THEIR FAMILIES",
  monogram: "K & L",
  initials: {
    top: "K",
    bottom: "L",
  },
  groom: "Liam",
  bride: "Kate",
  andText: "and",
  subheading: "Celebrate with us the beginning of our new chapter",
  introText:
    "With joyful hearts and endless gratitude, we invite you to celebrate our marriage and share in this special day of love and happiness.",
  dateDisplay: {
    month: "AUG",
    day: "24",
    year: "2025",
    dayOfWeek: "SATURDAY",
  },

  // ── 2. Family / Parents ──────────────────────────────────────────────────
  family: {
    title: "Honored Families",
    subtitle: "With the blessing and love of our parents",
    groomParents: {
      label: "Groom's Parents",
      father: "Mr. David Miller",
      mother: "Mrs. Sarah Miller",
    },
    brideParents: {
      label: "Bride's Parents",
      father: "Mr. Thomas Anderson",
      mother: "Mrs. Elizabeth Anderson",
    },
  },

  // ── 3. Integrated Music Player ───────────────────────────────────────────
  music: {
    title: "Perfect",
    artist: "Ed Sheeran",
    audioSrc: "/audio/Hum.mp3",
    initialDuration: "4:23",
  },

  // ── 4. Calendar Month & Dates ───────────────────────────────────────────
  calendar: {
    monthTitle: "our august",
    year: 2026,
    monthNumber: 8,
    monthName: "August",
    days: [22, 23, 24, 25, 26],
    weddingDay: 24,
    events: {
      23: { name: "Welcome Cocktail", isHighlight: true },
      24: { name: "The Big Day", isMain: true },
      25: { name: "Farewell Brunch", isHighlight: true },
    },
    targetDate: "2026-08-24T16:00:00",
    addToCalendarText: "Add to Calendar",
    icsDetails: {
      title: "Wedding of Kate & Liam",
      description: "Join Kate & Liam in celebrating their wedding day in San Diego, CA.",
      location: "St. Mary's Catholic Church / The Garden Terrace, San Diego, CA",
      startDate: "20260824T230000Z",
      endDate: "20260825T070000Z",
    },
  },

  // ── 5. Sinuous Timeline Events ──────────────────────────────────────────
  timeline: {
    sectionTitle: "THE BIG DAY",
    subtitle: "Order of Events",
    events: [
      {
        id: "ceremony",
        time: "4:00 PM",
        title: "CEREMONY",
        venue: "St. Mary's Catholic Church",
        address: "123 Grand Ave, San Diego, CA",
        icon: "church",
      },
      {
        id: "cocktail",
        time: "5:00 PM",
        title: "COCKTAIL HOUR",
        venue: "The Garden Terrace",
        address: "456 La Jolla Blvd, San Diego, CA",
        icon: "cocktail",
      },
      {
        id: "reception",
        time: "6:00 PM",
        title: "RECEPTION",
        venue: "The Garden Terrace",
        address: "456 La Jolla Blvd, San Diego, CA",
        icon: "rings",
      },
      {
        id: "dinner",
        time: "7:30 PM",
        title: "DINNER & TOASTS",
        venue: "The Grand Pavilion",
        address: "Seasonal fine dining & speeches",
        icon: "utensils",
      },
      {
        id: "first_dance",
        time: "9:00 PM",
        title: "FIRST DANCE",
        venue: "Ballroom Terrace",
        address: "A romantic moment under the lights",
        icon: "music",
      },
      {
        id: "party",
        time: "10:00 PM",
        title: "DANCING & PARTY",
        venue: "The Grand Pavilion",
        address: "Live band, cocktails & dancing",
        icon: "sparkles",
      },
      {
        id: "sendoff",
        time: "12:00 AM",
        title: "SPARKLER SEND-OFF",
        venue: "Courtyard Lawn",
        address: "Warm send-off for the newlyweds",
        icon: "sparkler",
      },
    ],
  },

  // ── 6. Dress Code ────────────────────────────────────────────────────────
  dressCode: {
    title: "DRESS CODE",
    style: "Semi Formal",
    description: "We invite you to celebrate in elegant attire inspired by our earthy sage & champagne palette.",
    palette: [
      { name: "Forest Sage", hex: "#3D4D3E" },
      { name: "Olive Sage", hex: "#63725A" },
      { name: "Warm Sand", hex: "#C8B8A6" },
      { name: "Champagne", hex: "#EDE8DE" },
      { name: "Brushed Gold", hex: "#D4AF37", isShimmer: true },
    ],
  },

  // ── 7. Multiple Event Venues & Addresses (Venue Carousel) ───────────────
  venueSlides: [
    {
      event: "Ceremony",
      date: "Aug 24 • 4:00 PM",
      title: "Where We Say I Do",
      name: "St. Mary's Catholic Church",
      address: "123 Grand Ave, San Diego, CA",
      mapUrl: "https://maps.google.com/?q=St.+Mary's+Catholic+Church+123+Grand+Ave+San+Diego+CA",
    },
    {
      event: "Cocktail & Reception",
      date: "Aug 24 • 5:00 PM",
      title: "Celebration Under the Stars",
      name: "The Garden Terrace",
      address: "456 La Jolla Blvd, San Diego, CA",
      mapUrl: "https://maps.google.com/?q=The+Garden+Terrace+456+La+Jolla+Blvd+San+Diego+CA",
    },
    {
      event: "Dinner & Dancing",
      date: "Aug 24 • 7:30 PM",
      title: "Toast & Dance Floor",
      name: "The Grand Pavilion",
      address: "456 La Jolla Blvd, San Diego, CA",
      mapUrl: "https://maps.google.com/?q=456+La+Jolla+Blvd+San+Diego+CA",
    },
  ],

  // ── 8. Emotional Quote Banner ───────────────────────────────────────────
  emotionBanner: {
    quoteMark: "“",
    mainText:
      "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    subText: "waiting for you with open hearts",
    signature: "WITH LOVE, KATE & LIAM",
  },

  // ── 9. Arched Portrait & Live Countdown ─────────────────────────────────
  archedPhoto: {
    curvedText: "In all the world, there is no love for you like mine",
    placeholderLabel: "Kate & Liam",
  },

  countdown: {
    watermarkText: "until we say I Do",
    accentText: "counting down the moments...",
    targetDate: "2026-08-24T16:00:00",
    labels: {
      days: "Days",
      hours: "Hours",
      minutes: "Mins",
      seconds: "Secs",
    },
  },

  // ── 10. Guest Information ───────────────────────────────────────────────
  guestInfo: {
    title: "GUEST INFORMATION",
    items: [
      {
        id: "transportation",
        icon: "car",
        title: "TRANSPORTATION",
        description: "Shuttle service will be provided between Seaside Hotel and the venues for your convenience.",
      },
      {
        id: "accommodations",
        icon: "building",
        title: "ACCOMMODATIONS",
        description: "Room blocks are reserved at Seaside Hotel. Please mention code 'KATE&LIAM' for special guest rates.",
      },
      {
        id: "capture",
        icon: "camera",
        title: "CAPTURE THE MOMENT",
        description: "We'd love to see the celebration through your eyes! Please tag your photos & stories with #KateAndLiam2025.",
      },
    ],
  },

  // ── 11. Presence Gift & Contribution ────────────────────────────────────
  giftRegistry: {
    title: "YOUR PRESENCE IS THE BEST GIFT",
    message: "But if you wish to honor us with a gift, a contribution to our future means the world to us.",
    qrNotice: "Scan with any camera app to view registry & contribute",
  },

  // ── 12. Guest WhatsApp Group ─────────────────────────────────────────────
  guestGroup: {
    title: "Guest Group",
    text: "Join our official wedding group for real-time announcements, shuttle timing, and to share celebration photos.",
    buttonText: "Join WhatsApp Group",
    link: WHATSAPP_GROUP_LINK,
  },

  // ── 13. Closing Wishes & Blessings ───────────────────────────────────────
  wishes: {
    title: "Love & Gratitude",
    text: "Your love, prayers, and presence are the greatest gift we could ever ask for. Thank you for walking beside us into this new chapter.",
    footerSignoff: "KATE & LIAM",
    copyright: "Designed with love for Kate & Liam",
  },
};

