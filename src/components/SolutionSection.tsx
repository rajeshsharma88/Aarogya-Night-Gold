/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Mountain, ShieldCheck, Leaf, Zap, Award, CheckCircle } from 'lucide-react';
import { INGREDIENTS } from '../data';

export default function SolutionSection() {
  const [activeIngredient, setActiveIngredient] = useState<string>('kesar');

  const getIngredientIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-yellow-400" />;
      case 'Mountain':
        return <Mountain className="w-5 h-5 text-stone-300" />;
      case 'ShieldAlert':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-green-300" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-yellow-500" />;
      case 'Award':
      default:
        return <Award className="w-5 h-5 text-accent-gold" />;
    }
  };

  const selectedHerb = INGREDIENTS.find((i) => i.id === activeIngredient) || INGREDIENTS[0];

  return (
    <section id="solution-section" className="bg-gradient-to-br from-primary via-primary-light to-primary text-white py-16 px-4 border-b border-[#D4AF37]/20 relative">
      {/* Geometric balance circles */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-[#D4AF37]/15 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-2 font-sans relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-gold font-mono bg-accent-gold/10 px-3 py-1 rounded-full border border-accent-gold/20 inline-flex items-center gap-1.5">
            🌿 THE GOLD STANDARD PATHWAY
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif leading-tight">
            How <span className="text-accent-gold italic font-normal">Aarogya Night Gold</span> Works Naturally
          </h2>
          <p className="text-gray-300 text-sm md:text-base font-light">
            Crafted strictly in accordance with traditional Ayurvedic text principles, combining powerful adaptogens, vitalizers, and luxury catalysts. It addresses the emotional and physiological roots of exhaustion.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: Herb Selector Tabs Grid */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-2.5">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              SELECT THE CORE ACTIVE BOTANICALS:
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5">
              {INGREDIENTS.map((item) => {
                const isActive = item.id === activeIngredient;
                return (
                  <button
                    key={item.id}
                    id={`btn-ingredient-${item.id}`}
                    onClick={() => setActiveIngredient(item.id)}
                    type="button"
                    className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                      isActive
                        ? 'bg-primary-light border-accent-gold shadow-lg shadow-black/25 translate-x-1.5'
                        : 'bg-primary-light/40 border-emerald-900/40 hover:border-emerald-800 hover:bg-primary-light/60'
                    }`}
                  >
                    <div className={`p-2 rounded-lg shrink-0 ${
                      isActive ? 'bg-accent-gold/15 text-accent-gold' : 'bg-primary/50 text-gray-400'
                    }`}>
                      {getIngredientIcon(item.iconName)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[12px] md:text-xs font-extrabold ${isActive ? 'text-accent-gold' : 'text-gray-200'}`}>
                          {item.name}
                        </span>
                        {item.hindiName && (
                          <span className="text-[10px] text-gray-400 font-hindi font-light">
                            ({item.hindiName})
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-gray-400 font-light truncate block max-w-[120px] md:max-w-[200px]">
                        {item.role}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Active Herb Showcase Panel */}
          <div className="lg:col-span-7 flex">
            <div className="w-full bg-[#113128] border border-[#D4AF37]/20 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative shadow-xl overflow-hidden min-h-[350px]">
              
              {/* Dynamic Abstract background gradient based on selected herb color */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent-gold/5 blur-3xl rounded-full pointer-events-none -z-10" />

              {/* Verified Badge */}
              <div className="flex justify-between items-center pb-4 border-b border-emerald-800/30">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> 100% PURE HERBAL EXTRACT
                </span>
                <span className="text-xs bg-accent-gold/10 border border-accent-gold text-accent-gold px-2.5 py-0.5 rounded font-bold uppercase">
                  {selectedHerb.role}
                </span>
              </div>

              {/* Herb Content Block */}
              <div className="my-6 space-y-4">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-serif text-white">
                    {selectedHerb.name}
                  </h3>
                  {selectedHerb.hindiName && (
                    <span className="text-sm text-gray-400 italic font-serif">
                      ({selectedHerb.hindiName})
                    </span>
                  )}
                </div>

                <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-light">
                  {selectedHerb.description}
                </p>

                {/* Core Ayurvedic Action Label */}
                <div className="bg-primary/45 border border-[#D4AF37]/15 p-4 rounded-xl space-y-2">
                  <p className="text-[11px] font-bold text-accent-gold uppercase tracking-wider font-mono">
                    🌿 TRADITIONAL VEDIC CLASSIFICATION:
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-[11px] text-gray-300">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                      <span><strong>Rasa:</strong> Madhura, Tikta</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                      <span><strong>Virya:</strong> Ushna (Warmth)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                      <span><strong>Dhatu:</strong> Shukra, Majja</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                      <span><strong>Target Dosha:</strong> Pacifies Vata & Kapha</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick-Action banner connecting item to order */}
              <div className="bg-primary/45 border border-[#D4AF37]/10 p-3 rounded-lg flex items-center justify-between text-xs mt-auto">
                <span className="text-gray-300">Contains premium concentrations in every capsule.</span>
                <a
                  href="#final-cta-section"
                  className="text-accent-gold hover:text-white font-bold inline-flex items-center gap-1 transition-colors group text-[11px] tracking-wide"
                >
                  VIEW PACKAGES <span className="group-hover:translate-x-1 duration-200 transition-transform">→</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Dynamic holistic wellness cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          <div className="bg-[#113128] border border-[#D4AF37]/10 p-5 rounded-xl shadow-md">
            <h4 className="font-serif text-sm text-accent-gold uppercase tracking-wider mb-2">
              Holistic Support
            </h4>
            <p className="text-gray-300 text-xs font-light leading-relaxed">
              Supports the overall endocrine and nervous systems rather than acting as a short-term vascular irritant, resulting in sustained cellular power.
            </p>
          </div>
          <div className="bg-[#113128] border border-[#D4AF37]/10 p-5 rounded-xl shadow-md">
            <h4 className="font-serif text-sm text-accent-gold uppercase tracking-wider mb-2">
              Yogavahi Absorption
            </h4>
            <p className="text-gray-300 text-xs font-light leading-relaxed">
              By using Swarna Bhasma, nutrients safely cross cell walls, ensuring minimal metabolic waste and maximum physiological impact.
            </p>
          </div>
          <div className="bg-[#113128] border border-[#D4AF37]/10 p-5 rounded-xl shadow-md">
            <h4 className="font-serif text-sm text-accent-gold uppercase tracking-wider mb-2">
              Non-Habit Forming
            </h4>
            <p className="text-gray-300 text-xs font-light leading-relaxed">
              No crash, no tolerance buildup, no dependency. You can safely cycle Aarogya Night Gold for 3 months, then pause without setbacks.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
