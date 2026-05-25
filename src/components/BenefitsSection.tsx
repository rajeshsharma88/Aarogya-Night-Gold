/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Activity, TrendingUp, Smile, Leaf, HeartPulse, CheckSquare } from 'lucide-react';
import { CORE_BENEFITS } from '../data';

export default function BenefitsSection() {
  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-5 h-5 text-primary" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-accent-gold" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-saffron" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-emerald-600" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-red-500" />;
      case 'CheckCircle':
      default:
        return <CheckSquare className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section id="benefits-section" className="bg-cream text-primary py-16 px-4 border-b border-gray-200 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mx-auto max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-saffron font-mono">
            🛡️ CLINICAL BENEFITS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif leading-tight text-primary">
            Designed for Sustained <span className="text-accent-gold italic font-normal">Full-Body Vitality</span>
          </h2>
          <p className="text-gray-600 text-xs md:text-sm font-light leading-relaxed">
            Every daily capsule supports internal pathways to maintain active energy, reduce chronic morning exhaustion, and support confidence at all stages of life.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              id={`benefit-item-${benefit.id}`}
              className="bg-white border border-gray-200 hover:border-accent-gold hover:shadow-lg transition-all duration-300 p-6 rounded-2xl flex gap-4 text-left shadow-sm group"
            >
              {/* Icon Shield */}
              <div className="p-3.5 rounded-xl bg-saffron/10 border border-transparent shrink-0 text-white shadow-inner group-hover:scale-105 transition-transform duration-300 h-12 w-12 flex items-center justify-center">
                {getBenefitIcon(benefit.iconName)}
              </div>

              {/* Text */}
              <div className="space-y-1.5">
                <h3 className="font-bold text-sm md:text-base font-serif text-gray-900 group-hover:text-primary transition-colors block">
                  {benefit.title}
                </h3>
                <p className="text-[11.5px] leading-relaxed text-gray-600 font-light font-sans block">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Trust Callout Banner */}
        <div className="mt-12 bg-primary border border-[#D4AF37]/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-lg text-white">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-accent-gold font-serif uppercase tracking-wider">
              🌿 EXPERIENCING CONSTANT FATIGUE? SPEAK WITH US TODAY
            </h4>
            <p className="text-gray-300 text-xs font-light max-w-2xl leading-normal">
              Ayurveda yields maximum benefits when aligned to your unique physical constitution. Talk to our wellness specialists online now. Free and fully private.
            </p>
          </div>
          <a
            href="#final-cta-section"
            className="bg-accent-gold hover:bg-opacity-90 active:scale-95 text-primary border border-transparent font-extrabold text-xs px-6 py-3 rounded-xl uppercase tracking-wider whitespace-nowrap shadow-md transition-all text-center"
          >
            FREE EXPERT CALL
          </a>
        </div>

      </div>
    </section>
  );
}
