import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import data from '../data/data.json';

export default function Paintings() {
  const paintingsData = data.paintings;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-museum-bg text-museum-cream p-12 md:p-24 overflow-hidden"
    >
      <Link to="/" className="inline-block mb-12 text-museum-gold-light hover:text-museum-gold transition-colors font-sans uppercase tracking-widest text-sm">
        &larr; Back to Museum
      </Link>
      
      <h1 className="font-serif text-5xl md:text-7xl mb-16 text-museum-gold">PAINTINGS &mdash; Masters of the Canvas</h1>
      
      <p className="font-sans text-museum-stone mb-16 uppercase tracking-wider text-sm">Gallery experience coming soon...</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {paintingsData.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="aspect-[3/4] bg-museum-stone/10 mb-6 flex items-center justify-center border border-museum-stone/20 group-hover:border-museum-gold/40 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-museum-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="font-serif text-museum-stone/30 text-6xl group-hover:scale-110 transition-transform duration-700">{item.id}</span>
            </div>
            <div className="flex justify-between items-baseline mb-2">
                <h2 className="font-serif text-2xl text-museum-cream group-hover:text-museum-gold transition-colors">{item.title}</h2>
                <span className="font-sans text-museum-gold-light tracking-widest text-xs">{item.year}</span>
            </div>
            <p className="font-sans text-museum-stone text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
