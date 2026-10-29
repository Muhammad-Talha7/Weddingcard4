import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimation(enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const isDesktop = window.innerWidth >= 640;
    const scrollContainer = document.getElementById('wedding-scroll-container');
    const scroller = isDesktop && scrollContainer ? scrollContainer : window;
    const isWindow = scroller === window;

    // 1. Lenis Smooth Scroll
    let lenis = null;
    try {
      lenis = new Lenis({
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
    } catch (err) {
      console.warn('Lenis initialization failed, falling back to native scroll', err);
    }

    const tickerCallback = (time) => {
      if (lenis) {
        lenis.raf(time * 1000);
      }
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.defaults({ scroller });

    // 2. GSAP Animations Context
    const ctx = gsap.context(() => {
      // Hero top entrance
      const heroElements = document.querySelectorAll('[data-animate="hero-top"]');
      if (heroElements.length > 0) {
        gsap.from(heroElements, {
          y: 28,
          opacity: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      }

      // Fade-up elements
      const fadeUpElements = document.querySelectorAll('[data-animate="fade-up"]');
      fadeUpElements.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          y: 35,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        });
      });

      // From-left elements
      const fromLeftElements = document.querySelectorAll('[data-animate="from-left"]');
      fromLeftElements.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          x: -40,
          opacity: 0,
          duration: 1.1,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        });
      });

      // From-right elements
      const fromRightElements = document.querySelectorAll('[data-animate="from-right"]');
      fromRightElements.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          x: 40,
          opacity: 0,
          duration: 1.1,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        });
      });

      // Zoom-in elements
      const zoomElements = document.querySelectorAll('[data-animate="zoom-in"]');
      zoomElements.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          scale: 0.92,
          opacity: 0,
          duration: 1.2,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        });
      });
    });

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
      if (lenis) lenis.resize();
    }, 350);

    return () => {
      clearTimeout(refreshTimer);
      gsap.ticker.remove(tickerCallback);
      if (lenis) lenis.destroy();
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [enabled]);
}

