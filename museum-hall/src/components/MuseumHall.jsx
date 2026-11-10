import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MuseumHall = forwardRef((props, ref) => {
  const navigate = useNavigate();

  const exhibitions = [
    {
      id: 'war',
      title: 'WAR',
      subtitle: 'Chronicles of Conflict',
      path: '/war',
      delay: 0.1,
      Visual: () => (
        <div className="relative w-24 h-24 flex items-center justify-center mb-8">
          {/* Abstract crossed swords / conflict icon */}
          <div className="absolute w-full h-1 bg-museum-gold/60 rotate-45 transform origin-center"></div>
          <div className="absolute w-full h-1 bg-museum-gold/60 -rotate-45 transform origin-center"></div>
          <div className="absolute w-16 h-16 border-2 border-museum-gold/40 rotate-45"></div>
        </div>
      )
    },
    {
      id: 'paintings',
      title: 'PAINTINGS',
      subtitle: 'Masters of the Canvas',
      path: '/paintings',
      delay: 0.3,
      Visual: () => (
        <div className="relative w-24 h-24 flex items-center justify-center mb-8">
          {/* Abstract nested frames */}
          <div className="absolute w-full h-full border-4 border-museum-gold/50 shadow-inner"></div>
          <div className="absolute w-16 h-16 border-2 border-museum-gold/70"></div>
          <div className="absolute w-8 h-8 border border-museum-gold/40"></div>
        </div>
      )
    },
    {
      id: 'artifacts',
      title: 'ARTIFACTS',
      subtitle: 'Remnants of Civilization',
      path: '/artifacts',
      delay: 0.5,
      Visual: () => (
        <div className="relative w-24 h-24 flex flex-col items-center justify-end mb-8 pb-2">
          {/* Abstract pedestal/artifact */}
          <div className="w-8 h-12 bg-museum-gold/60 rounded-t-full mb-1"></div>
          <div className="w-12 h-2 bg-museum-gold/80"></div>
          <div className="w-16 h-3 bg-museum-gold/50 mt-1"></div>
        </div>
      )
    }
  ];

  return (
    <div 
      ref={ref}
      className="min-h-screen bg-museum-bg relative z-20 flex flex-col items-center pt-32 pb-24 px-6 md:px-12 w-full overflow-hidden"
    >
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center mb-20 text-center"
      >
        <div className="flex items-center justify-center gap-6 mb-4 w-full">
          <div className="h-px bg-museum-gold/40 w-12 md:w-32"></div>
          <h2 className="font-serif text-4xl md:text-5xl text-museum-gold tracking-widest">
            EXHIBITION HALLS
          </h2>
          <div className="h-px bg-museum-gold/40 w-12 md:w-32"></div>
        </div>
        <p className="font-sans text-museum-gold/70 tracking-widest uppercase text-sm">
          Select a gallery to explore
        </p>
      </motion.div>

      {/* Exhibition Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 w-full max-w-7xl relative z-10">
        {exhibitions.map((exhibit) => (
          <motion.div
            key={exhibit.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: exhibit.delay, ease: "easeOut" }}
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(exhibit.path)}
            className="exhibition-card group cursor-pointer relative flex flex-col items-center justify-center bg-[#0a0a0a]/80 border border-museum-gold/20 p-10 backdrop-blur-sm shadow-2xl hover:bg-[#151515] hover:border-museum-gold/50 transition-colors duration-500"
          >
            <exhibit.Visual />
            
            <h3 className="font-serif text-3xl text-museum-gold mb-3 tracking-wider group-hover:text-white transition-colors duration-300">
              {exhibit.title}
            </h3>
            
            <p className="font-sans text-museum-gold/60 text-sm tracking-widest uppercase text-center group-hover:text-museum-gold/90 transition-colors duration-300">
              {exhibit.subtitle}
            </p>

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-museum-gold/30 group-hover:border-museum-gold/80 transition-colors m-3"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-museum-gold/30 group-hover:border-museum-gold/80 transition-colors m-3"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-museum-gold/30 group-hover:border-museum-gold/80 transition-colors m-3"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-museum-gold/30 group-hover:border-museum-gold/80 transition-colors m-3"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

MuseumHall.displayName = 'MuseumHall';

export default MuseumHall;
