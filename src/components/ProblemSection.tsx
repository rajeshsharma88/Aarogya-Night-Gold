/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { BatteryLow, BrainCircuit, ArrowDownRight, Frown, Sparkles, TrendingDown } from 'lucide-react';
import { PROBLEM_CARDS } from '../data';

export default function ProblemSection() {
  const [selectedCard, setSelectedCard] = useState<string>('fatigue');

  const getIcon = (iconName: string, isSelected: boolean) => {
    const colorClass = isSelected ? 'text-white' : 'text-primary';
    switch (iconName) {
      case 'BatteryLow':
        return <BatteryLow className={`w-6 h-6 ${colorClass}`} />;
      case 'BrainCircuit':
        return <BrainCircuit className={`w-6 h-6 ${colorClass}`} />;
      case 'TrendingDown':
      default:
        return <TrendingDown className={`w-6 h-6 ${colorClass}`} />;
    }
  };

  return (
    <section id="problem-section" className="bg-cream text-primary py-16 px-4 border-b border-gray-200 relative overflow-hidden">
      {/* Absolute design accents */}
      <div className="absolute top-10 right-10 w-44 h-44 border-2 border-accent-gold/15 rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-accent-gold/10 rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="space-y-3.5 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-saffron font-mono flex items-center justify-center gap-1.5">
            <Frown className="w-4 h-4 text-saffron" />
            THE HARD REALITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif leading-tight text-primary">
            Feeling Drained After a <br />
            <span className="text-accent-gold italic font-normal">Long, Stressful Day?</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-light">
            As working professional men, we push our limits daily at offices, shops, or sites. But constant workloads create a hidden chemical drain on male vitality.
          </p>
        </div>

        {/* Emotion Indicator Dashboard */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {PROBLEM_CARDS.map((card) => {
            const isSelected = selectedCard === card.id;
            return (
              <div
                key={card.id}
                id={`problem-card-${card.id}`}
                onClick={() => setSelectedCard(card.id)}
                className={`relative rounded-2xl p-6 cursor-pointer border transition-all duration-300 shadow-sm ${
                  isSelected
                    ? 'bg-white border-accent-gold shadow-lg shadow-accent-gold/10 translate-y-[-4px]'
                    : 'bg-white/80 border-gray-200 hover:border-gray-300 hover:bg-white'
                }`}
              >
                {/* Floating active dot */}
                {isSelected && (
                  <span className="absolute top-4 right-4 h-2 w-2 rounded-full bg-accent-gold animate-pulse" />
                )}

                <div className="flex items-center gap-3.5">
                  <div className={`p-3 rounded-xl shrink-0 transition-colors ${
                    isSelected ? 'bg-primary border border-accent-gold' : 'bg-saffron/10 border border-transparent'
                  }`}>
                    {getIcon(card.iconName, isSelected)}
                  </div>
                  <h3 className={`font-bold text-sm md:text-base font-display transition-colors ${
                    isSelected ? 'text-primary' : 'text-gray-800'
                  }`}>
                    {card.title}
                  </h3>
                </div>

                <p className="mt-4 text-xs font-light text-gray-600 leading-relaxed">
                  {card.description}
                </p>

                {/* Relatable micro-scenario expandable bullet */}
                <div className={`mt-4 pt-4 border-t border-gray-100 overflow-hidden transition-all duration-300 ${
                  isSelected ? 'max-h-28 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-[11px] text-saffron/90 italic flex items-start gap-1.5 font-medium leading-snug">
                    <ArrowDownRight className="w-3.5 h-3.5 shrink-0 text-accent-gold mt-0.5" />
                    <span><strong>Does this sound familiar?</strong> {card.scenario}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Chemical Stimulants Fail Notice */}
        <div className="mt-10 max-w-3xl mx-auto rounded-2xl bg-white border border-gray-200 p-5 md:p-6 text-left shadow-sm">
          <h4 className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-2 font-display flex items-center gap-1.5">
            ⚠️ THE RISK OF TEMPORARY PEPTIDES & CAFFEINE PILLS
          </h4>
          <p className="text-gray-600 text-xs md:text-xs leading-relaxed font-light">
            Many turn to synthetic tablets, high-dose caffeine, or chemical powders. These force a short high but crash your adrenals inside 4 hours, causing long-term damage, stress dependency, and habit formation. Ayurveda offers a deep, natural, non-habit forming alternative that builds baseline stamina over time.
          </p>
        </div>

        {/* Soft Scroll Indicator CTA */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <p className="text-[11px] text-gray-500 font-sans tracking-wide">
            Discover the Golden Vedic Way to Recharge Natural Power Safely
          </p>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1 w-8 rounded bg-gradient-to-r from-accent-gold to-saffron mt-1"
          />
        </div>

      </div>
    </section>
  );
}
