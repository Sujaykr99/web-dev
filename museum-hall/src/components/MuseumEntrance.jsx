import React, { forwardRef, useEffect, useRef } from 'react';
import gsap from 'gsap';

const MuseumEntrance = forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const contentRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  // Expose the container ref to parent if needed, or merge refs
  useEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(containerRef.current);
      } else {
        ref.current = containerRef.current;
      }
    }
  }, [ref]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Slide in the architectural panels
      tl.to(leftPanelRef.current, {
        x: '0%',
        duration: 1.5,
        ease: 'power3.out'
      }, 0)
      .to(rightPanelRef.current, {
        x: '0%',
        duration: 1.5,
        ease: 'power3.out'
      }, 0)
      
      // Fade and scale in the main title content
      .to(contentRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out'
      }, '-=0.5')
      
      // Fade in scroll indicator with a stagger
      .to(scrollIndicatorRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: 'power1.inOut'
      }, '-=0.6');

      // Add a continuous subtle bounce to the scroll indicator
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'sine.inOut',
        delay: 2
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="perspective-container relative min-h-screen w-full overflow-hidden bg-museum-bg flex flex-col items-center justify-center"
    >
      {/* Left Panel: Museum Exterior / Architecture */}
      <div 
        ref={leftPanelRef}
        className="absolute left-0 top-0 h-full w-1/2 bg-museum-stone border-r border-museum-shadow shadow-2xl -translate-x-full z-10 flex items-center justify-end pr-8"
        style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))' }}
      >
        <div className="w-16 h-3/4 border-y-4 border-l-4 border-museum-shadow opacity-30 shadow-inner"></div>
      </div>

      {/* Right Panel: Museum Interior / Hall */}
      <div 
        ref={rightPanelRef}
        className="absolute right-0 top-0 h-full w-1/2 bg-museum-bg border-l border-museum-shadow shadow-2xl translate-x-full z-10 flex items-center justify-start pl-8"
        style={{ backgroundImage: 'linear-gradient(to left, rgba(0,0,0,0.9), rgba(0,0,0,0.4))' }}
      >
        <div className="w-16 h-3/4 border-y-4 border-r-4 border-museum-shadow opacity-30 shadow-inner"></div>
      </div>

      {/* Center Content */}
      <div 
        ref={contentRef}
        className="z-20 flex flex-col items-center text-center opacity-0 scale-90 translate-y-[30px]"
      >
        <h1 className="font-serif text-5xl md:text-8xl tracking-widest text-museum-gold drop-shadow-lg mb-4">
          THE GRAND MUSEUM
        </h1>
        <div className="h-px w-24 bg-museum-gold opacity-50 mb-6"></div>
        <p className="font-sans text-sm md:text-base tracking-[0.2em] text-museum-gold opacity-80 uppercase">
          Est. 1847 &middot; A Journey Through Time
        </p>
      </div>

      {/* Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-12 z-20 flex flex-col items-center opacity-0"
      >
        <span className="font-sans text-xs tracking-widest text-museum-gold opacity-60 mb-3 uppercase">
          Enter
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-museum-gold to-transparent"></div>
      </div>
    </div>
  );
});

MuseumEntrance.displayName = 'MuseumEntrance';

export default MuseumEntrance;
