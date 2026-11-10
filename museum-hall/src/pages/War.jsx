import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import data from '../data/data.json';

export default function War() {
  const warData = data.war;

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
      
      <h1 className="font-serif text-5xl md:text-7xl mb-16 text-museum-gold">WAR &mdash; Chronicles of Conflict</h1>
      
      <p className="font-sans text-museum-stone mb-16 uppercase tracking-wider text-sm">Timeline experience coming soon...</p>
      
      <div className="relative border-l border-museum-stone/30 pl-8 ml-4 space-y-16">
        {warData.map((item) => (
          <div key={item.id} className="relative">
            <div className="absolute -left-[41px] top-1.5 w-3 h-3 bg-museum-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
            <span className="font-sans text-museum-gold-light tracking-widest text-sm block mb-2">{item.year}</span>
            <h2 className="font-serif text-3xl mb-4 text-museum-cream">{item.title}</h2>
            <p className="font-sans text-museum-stone max-w-2xl leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
