import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MuseumEntrance from '../components/MuseumEntrance';
import Pillars from '../components/Pillars';
import MuseumHall from '../components/MuseumHall';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const wrapperRef = useRef(null);
  const pinnedRef = useRef(null);

  // Wrapper refs — we animate THESE, not the components' internals
  const hallWrapperRef = useRef(null);
  const entranceWrapperRef = useRef(null);
  const pillarsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const pillarEls = pillarsRef.current?.pillars || [];

      // ── Set initial states ──
      gsap.set(hallWrapperRef.current, {
        scale: 0.5,
        opacity: 0,
        filter: 'blur(6px)',
      });

      gsap.set(entranceWrapperRef.current, {
        scale: 1,
        opacity: 1,
      });

      // ── Main scroll-driven timeline ──
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
          pin: pinnedRef.current,
        }
      });

      // 1) Entrance rushes past the camera and vanishes
      tl.to(entranceWrapperRef.current, {
        scale: 2,
        opacity: 0,
        filter: 'blur(12px)',
        duration: 1,
        ease: 'power2.in',
      }, 0);

      // 2) Hall emerges from behind — scales up, sharpens, fades in
      tl.to(hallWrapperRef.current, {
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power2.out',
      }, 0.1);

      // 3) Pillars fly outward — the "walking through columns" effect
      if (pillarEls.length === 4) {
        // Left pair flies left
        tl.to(pillarEls[0], {
          xPercent: -600,
          scaleX: 2.5,
          scaleY: 1.3,
          opacity: 0,
          duration: 1,
          ease: 'power3.in',
        }, 0);
        tl.to(pillarEls[1], {
          xPercent: -350,
          scaleX: 2.2,
          scaleY: 1.3,
          opacity: 0,
          duration: 1,
          ease: 'power3.in',
        }, 0.05);

        // Right pair flies right
        tl.to(pillarEls[2], {
          xPercent: 350,
          scaleX: 2.2,
          scaleY: 1.3,
          opacity: 0,
          duration: 1,
          ease: 'power3.in',
        }, 0.05);
        tl.to(pillarEls[3], {
          xPercent: 600,
          scaleX: 2.5,
          scaleY: 1.3,
          opacity: 0,
          duration: 1,
          ease: 'power3.in',
        }, 0);
      }

      // 4) After scroll completes, ensure the hall is interactive
      tl.set(entranceWrapperRef.current, { pointerEvents: 'none' }, 0.5);
      tl.set(hallWrapperRef.current, { pointerEvents: 'auto' }, 0.8);

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative bg-museum-bg" style={{ height: '300vh' }}>
      <div
        ref={pinnedRef}
        className="w-full h-screen relative bg-museum-bg"
        style={{ overflow: 'hidden' }}
      >
        {/* ── Layer 1 (back): Exhibition Hall ── */}
        <div
          ref={hallWrapperRef}
          className="absolute inset-0 z-10 overflow-y-auto"
          style={{ pointerEvents: 'none', willChange: 'transform, opacity, filter' }}
        >
          <MuseumHall />
        </div>

        {/* ── Layer 2 (mid): Cinematic Entrance ── */}
        <div
          ref={entranceWrapperRef}
          className="absolute inset-0 z-20"
          style={{ willChange: 'transform, opacity, filter' }}
        >
          <MuseumEntrance />
        </div>

        {/* ── Layer 3 (front): Pillars ── */}
        <Pillars ref={pillarsRef} />
      </div>
    </div>
  );
}