import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import data from '../data/data.json';

export default function Artifacts() {
  const artifactsData = data.artifacts;

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
      
      <h1 className="font-serif text-5xl md:text-7xl mb-16 text-museum-gold">ARTIFACTS &mdash; Remnants of Civilization</h1>
      
      <p className="font-sans text-museum-stone mb-16 uppercase tracking-wider text-sm">Exhibition experience coming soon...</p>
      
      <div className="flex flex-col gap-16 max-w-4xl">
        {artifactsData.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row gap-8 items-start group">
            <div className="w-full md:w-1/3 aspect-square bg-museum-stone/10 border border-museum-stone/20 flex items-center justify-center relative overflow-hidden group-hover:border-museum-gold/30 transition-colors duration-500">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col pt-4">
                <span className="font-sans text-museum-gold-light tracking-widest text-sm mb-3">{item.year}</span>
                <h2 className="font-serif text-4xl mb-4 text-museum-cream group-hover:text-museum-gold transition-colors">{item.title}</h2>
                <p className="font-sans text-museum-stone leading-relaxed text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
