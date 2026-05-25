/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Flame, Info } from 'lucide-react';

interface ActiveHotspot {
  id: string;
  name: string;
  benefits: string;
  top: string;
  left: string;
}

export default function BottleVisual() {
  const [activeHotspot, setActiveHotspot] = useState<ActiveHotspot | null>(null);

  const hotspots: ActiveHotspot[] = [
    {
      id: 'swarna',
      name: '24K Swarna Bhasma',
      benefits: 'Pure gold dust acts as a high-potency catalyst, speeding up cell recovery & improving absorption.',
      top: '25%',
      left: '75%',
    },
    {
      id: 'shilajit',
      name: 'Shudh Shilajit',
      benefits: 'Contains 84+ minerals to enhance natural physical vigor, raw strength, and muscular stamina.',
      top: '55%',
      left: '20%',
    },
    {
      id: 'kesar',
      name: 'Kashmiri Kesar',
      benefits: 'Reduces vascular stress, supports mood pathways, and improves daily warmth and confidence.',
      top: '72%',
      left: '80%',
    },
  ];

  return (
    <div id="bottle-visual-container" className="relative select-none flex flex-col items-center justify-center py-6">
      {/* Background radial glowing gold aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-accent-gold/15 blur-3xl rounded-3xl animate-pulse-glow" />

      {/* Floating Sparkles around the bottle */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 text-accent-gold"
        >
          <Sparkles className="w-5 h-5" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-[15%] text-saffron"
        >
          <Sparkles className="w-4 h-4" />
        </motion.div>
        <motion.div 
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-[10%] text-yellow-300"
        >
          <span className="text-xl">✨</span>
        </motion.div>
      </div>

      {/* The Digital Custom Bottle Art */}
      <motion.div 
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="relative w-64 md:w-72 bg-transparent z-10 filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]"
      >
        {/* Shiny Premium Golden Cap */}
        <div className="relative mx-auto w-40 h-10 rounded-t-lg bg-gradient-to-r from-amber-700 via-amber-400 via-yellow-200 via-amber-300 to-amber-800 border-b border-amber-900 shadow-md">
          {/* Cap Ridges */}
          <div className="absolute inset-x-2 bottom-1 top-1 flex justify-between opacity-30">
            {Array.from({ length: 22 }).map((_, i) => (
              <div key={i} className="w-[2px] h-full bg-amber-950" />
            ))}
          </div>
          {/* Cap Gloss Highlight */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/20 rounded-t-sm" />
          {/* Sub-cap ring */}
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[152px] h-3 bg-gradient-to-r from-amber-800 via-amber-500 to-amber-900 border-t border-amber-950 shadow-inner rounded-b-sm" />
        </div>

        {/* Amber-Glass Bottle Body */}
        <div className="relative mx-auto mt-2 w-52 h-76 rounded-2xl bg-gradient-to-b from-amber-950/95 via-amber-900/95 to-amber-950/95 border border-amber-800/40 p-1 flex flex-col justify-between overflow-hidden shadow-2xl">
          {/* Amber Glass Gloss Highlights */}
          <div className="absolute top-0 left-3 w-8 h-full bg-gradient-to-r from-white/10 to-transparent pointer-events-none rounded-l-2xl" />
          <div className="absolute top-0 right-3 w-4 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none rounded-r-2xl" />
          <div className="absolute bottom-4 left-4 right-4 h-12 bg-black/40 blur-md pointer-events-none rounded-full" />

          {/* Premium Bottle Label */}
          <div className="relative w-full h-full my-auto rounded-xl bg-gradient-to-r from-[#03150D] via-[#0D2418] to-[#03150D] border border-emerald-800/40 flex flex-col justify-between p-2.5 py-4 overflow-hidden shadow-inner">
            {/* Label Side Gradient highlights */}
            <div className="absolute inset-y-0 left-0 w-3 bg-black/40" />
            <div className="absolute inset-y-0 right-0 w-3 bg-black/40" />

            {/* Ayurvedic Header Seal */}
            <div className="text-center">
              <span className="text-[7.5px] uppercase text-emerald-400 font-semibold tracking-[0.2em] font-mono block">
                पहला सुख निरोगी काया
              </span>
              <div className="flex justify-center items-center gap-1 mt-0.5">
                <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-accent-gold" />
                <span className="text-[10px] uppercase text-white/95 font-bold tracking-widest font-sans px-1 bg-emerald-950 border border-accent-gold/40 rounded-sm">
                  AAROGYA INDIA
                </span>
                <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-accent-gold" />
              </div>
            </div>

            {/* Core Brand & Charging Horse Silhouette inside dynamic gold frame */}
            <div className="my-2 text-center relative flex flex-col items-center">
              {/* Product Name Custom Styled */}
              <h3 className="text-[19px] leading-tight font-extrabold uppercase tracking-wide text-white drop-shadow-md font-display">
                AAROGYA<span className="block text-accent-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-serif text-lg italic tracking-normal capitalize mt-0.5">NIGHT GOLD</span>
              </h3>
              
              {/* Plus badge */}
              <span className="mt-0.5 bg-saffron text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded shadow">
                PLUS
              </span>

              {/* Glowing Horse Frame - Pure vector */}
              <div className="relative w-28 h-20 mt-2 rounded border border-accent-gold/30 bg-black/30 flex items-center justify-center shadow-inner overflow-hidden">
                {/* Embedded golden horse silhouette / luxury emblem */}
                <svg className="w-16 h-16 text-accent-gold/80 fill-current animate-pulse-glow" viewBox="0 0 24 24">
                  <path d="M19.5 9.5c.34 0 .65.08.93.22.42-1.39.11-3.05-.93-4.22a5.45 5.45 0 00-6.19-.94c-.11-.53-.45-.98-.94-1.22A2.96 2.96 0 0010.5 3a3 3 0 00-2 5.2c-.34 0-.65-.08-.93-.22-.42 1.39-.11 3.05.93 4.22.61.68 1.48 1.05 2.37 1.01.21.36.19.82-.07 1.15l-3.3 4.13a1 1 0 00.78 1.62h6c.41 0 .78-.25.93-.62l1.65-4.13c.22-.55-.07-1.18-.62-1.4-.23-.09-.48-.12-.73-.08.62-.64 1.15-1.42 1.55-2.27.13.04.28.05.42.05zm-7.61-4.82c.48.33.68.96.48 1.5l-.21.57.57-.21c.54-.2 1.17 0 1.5.48a1.27 1.27 0 01-.15 1.62l-.44.4.52.26a1.53 1.53 0 01.81 1.51c-.08.61-.55 1.1-1.15 1.22l-.58.12.39.45c.42.48.45 1.2.07 1.71h-1.63L13 11H9.83c-.88.04-1.61-.63-1.65-1.52.02-.45.22-.88.55-1.19a4 4 0 011.08-1.58C9 6.2 9.07 5.56 9.4 5.03a1.5 1.5 0 011.53-.72h.01c.36.14.68.38.95.67z" />
                </svg>
                {/* Tiny glowing fiber overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Benefits on label with golden dots */}
            <div className="text-[8px] space-y-1 text-gray-300 font-sans tracking-wide px-2 text-left bg-black/25 py-1.5 rounded-sm border border-emerald-900/40">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                <span>Supports Consistent Stamina</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                <span>Helps Reduce Daily Fatigue</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                <span>Natural Kashmiri Kesar Infused</span>
              </div>
            </div>

            {/* Footer Specifications */}
            <div className="flex justify-between items-center text-[7.5px] text-gray-400 font-mono mt-1 border-t border-emerald-900/40 pt-1.5">
              <span>Mfg. Lic no. HP-382</span>
              <span>Net Qty: 10 Capsules</span>
            </div>
          </div>
        </div>

        {/* Base of bottle support shadow */}
        <div className="absolute -bottom-1 left-12 right-12 h-3 bg-black/80 blur-sm rounded-full pointer-events-none" />

        {/* Hotspot Interactive Pins on Bottle */}
        {hotspots.map((spot) => (
          <div
            key={spot.id}
            id={`hotspot-${spot.id}`}
            style={{ top: spot.top, left: spot.left }}
            className="absolute z-25 group"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveHotspot(activeHotspot?.id === spot.id ? null : spot);
              }}
              type="button"
              className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 border-2 border-white shadow-lg text-emerald-950 font-bold text-xs animate-pulse hover:scale-110 active:scale-95 transition-all text-center focus:outline-none"
              title="Click to learn about this ingredient"
            >
              <Info className="w-3.5 h-3.5 text-emerald-950" />
            </button>
          </div>
        ))}
      </motion.div>

      {/* Interactive Popover details */}
      <div className="w-full max-w-sm h-14 mt-4 text-center">
        {activeHotspot ? (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary-light border border-accent-gold/40 rounded-xl p-2.5 shadow-xl mx-4 flex items-start gap-2.5 text-left h-full overflow-hidden"
          >
            <div className="p-1 rounded-full bg-accent-amber/20 text-accent-gold shrink-0">
              <Flame className="w-4 h-4" />
            </div>
            <div className="overflow-hidden">
              <h5 className="text-[12px] font-bold text-accent-gold font-display uppercase tracking-wide truncate">
                {activeHotspot.name}
              </h5>
              <p className="text-[11px] text-gray-300 leading-tight">
                {activeHotspot.benefits}
              </p>
            </div>
          </motion.div>
        ) : (
          <p className="text-xs text-gray-500 italic mt-2 animate-pulse font-sans">
            🌟 Tap the blinking icons on the bottle container above to view premium Ayurvedic ingredients secrets.
          </p>
        )}
      </div>

      <div className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-gray-400 font-sans font-medium">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
        <span>Strictly Certified Herbs • 100% Secure Bottle Packing</span>
      </div>
    </div>
  );
}
