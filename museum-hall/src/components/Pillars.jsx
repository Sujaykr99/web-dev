import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const Pillars = forwardRef((props, ref) => {
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const p3Ref = useRef(null);
  const p4Ref = useRef(null);

  // Expose the pillar DOM elements to the parent for GSAP ScrollTrigger
  useImperativeHandle(ref, () => ({
    pillars: [p1Ref.current, p2Ref.current, p3Ref.current, p4Ref.current]
  }));

  // Pillar positions — two flanking pairs creating a gateway
  const pillarConfigs = [
    { left: '5%',  ref: p1Ref },
    { left: '30%', ref: p2Ref },
    { left: '65%', ref: p3Ref },
    { left: '90%', ref: p4Ref }
  ];

  return (
    // MUST be absolute (not fixed) so GSAP ScrollTrigger pin works correctly
    <div className="absolute inset-0 pointer-events-none z-30">
      {pillarConfigs.map((pillar, index) => (
        <div
          key={index}
          ref={pillar.ref}
          className="pillar absolute top-0 h-full flex flex-col justify-between items-center"
          style={{
            left: pillar.left,
            width: '120px',
            transform: 'translateX(-50%)',
            willChange: 'transform, opacity',
          }}
        >
          {/* ── Capital (top ornament) ── */}
          <div className="w-[140px] flex flex-col items-center">
            <div className="w-full h-2 bg-gradient-to-b from-[#3a322c] to-[#2a2520]" />
            <div className="w-[130px] h-2 bg-[#2a2520] border-b border-[#1a1815]" />
            <div className="w-[125px] h-1 bg-[#1a1815]" />
          </div>

          {/* ── Shaft with fluting lines ── */}
          <div className="flex-grow w-full relative overflow-hidden">
            {/* Vertical fluting grooves */}
            <div className="absolute inset-0 flex justify-evenly px-3 opacity-20">
              <div className="w-px h-full bg-black" />
              <div className="w-[2px] h-full bg-black/50" />
              <div className="w-px h-full bg-black" />
              <div className="w-[2px] h-full bg-black/50" />
              <div className="w-px h-full bg-black" />
            </div>
            {/* Highlight streak */}
            <div className="absolute inset-y-0 left-1/3 w-4 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
          </div>

          {/* ── Base (bottom pedestal) ── */}
          <div className="w-[150px] flex flex-col items-center">
            <div className="w-[125px] h-1 bg-[#1a1815]" />
            <div className="w-[130px] h-2 bg-[#2a2520] border-t border-[#3a322c]" />
            <div className="w-full h-4 bg-gradient-to-t from-[#1a1815] to-[#2a2520]" />
          </div>
        </div>
      ))}
    </div>
  );
});

Pillars.displayName = 'Pillars';

export default Pillars;
