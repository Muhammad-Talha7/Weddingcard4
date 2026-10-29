import React, { useEffect, useRef } from 'react';
import redPetalSrc from '../assets/redpetal.png';
import pinkPetalSrc from '../assets/pinkpetal.png';
import bluePetalSrc from '../assets/bluepetal.png';

export default function FloatingPetals({ enabled = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Preload petal images
    const images = [];
    const srcList = [redPetalSrc, pinkPetalSrc, bluePetalSrc];

    srcList.forEach((src) => {
      const img = new Image();
      img.src = src;
      images.push(img);
    });

    const PETAL_COUNT = 14;
    const petals = [];

    for (let i = 0; i < PETAL_COUNT; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: 14 + Math.random() * 16,
        speedY: 0.6 + Math.random() * 1.1,
        speedX: -0.4 + Math.random() * 0.8,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        flip: Math.random() * Math.PI,
        flipSpeed: 0.015 + Math.random() * 0.02,
        opacity: 0.4 + Math.random() * 0.4,
        imgIndex: Math.random() < 0.55 ? 0 : Math.random() < 0.85 ? 1 : 2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.008) * 0.5 + p.speedX * 0.5;
        p.rotation += p.rotSpeed;
        p.flip += p.flipSpeed;

        if (p.y > height + 40) {
          p.y = -30;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.scale(Math.cos(p.flip), 1);
        ctx.globalAlpha = p.opacity;

        const img = images[p.imgIndex];
        if (img && img.complete && img.naturalWidth > 0) {
          ctx.drawImage(img, -p.size / 2, -p.size / 2, p.size, p.size);
        } else {
          // Fallback watercolor petal drawn with canvas path
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.4, p.size * 0.8, Math.PI / 4, 0, Math.PI * 2);
          ctx.fillStyle = p.imgIndex === 0 ? 'rgba(126, 141, 121, 0.5)' : 'rgba(212, 175, 55, 0.4)';
          ctx.fill();
        }

        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-30 h-full w-full"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
}
