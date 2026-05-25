/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, PhoneCall, Check, Award, EyeOff, Sparkles, MessageSquare } from 'lucide-react';
import BottleVisual from './BottleVisual';
import { CONTACT_NUMBERS } from '../data';

export default function HeroSection() {
  const benefits = [
    { text: 'Supports Male Vitality', id: 'b1' },
    { text: 'Helps Reduce Fatigue', id: 'b2' },
    { text: 'Supports Strength & Stamina', id: 'b3' },
    { text: 'Ayurvedic Herbal Formula', id: 'b4' },
    { text: 'Easy Daily Use', id: 'b5' },
  ];

  const badges = [
    { text: 'Ayurvedic Wellness', icon: Award },
    { text: 'Trusted Herbal Formula', icon: ShieldCheck },
    { text: 'Privacy Assured', icon: EyeOff },
    { text: 'Natural Ingredients', icon: Sparkles },
  ];

  return (
    <section id="hero-section" className="relative min-h-screen bg-gradient-to-br from-primary via-primary-light to-primary text-white pt-10 pb-16 overflow-hidden border-b border-[#D4AF37]/20">
      {/* Absolute design accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-saffron/5 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Geometric balance circles */}
      <div className="absolute top-20 right-20 w-44 h-44 border-2 border-accent-gold/10 rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-40 left-10 w-24 h-24 border border-accent-gold/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Text Copy & CTAs */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-6 text-left md:pr-10">
            {/* Minimal tag alert */}
            <div className="inline-block px-3 py-1 bg-accent-gold/10 border border-accent-gold rounded-full mb-2">
              <span className="text-accent-gold text-xs font-bold uppercase tracking-widest font-sans flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-saffron inline-block animate-ping"></span>
                Ayurvedic Wellness Support
              </span>
            </div>

            {/* Headline with Geometric Balance font-serif + italic styling */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-[1.1] mb-6 text-white tracking-tight">
              Feel <span className="text-accent-gold italic font-normal">Energetic</span>, <br />
              <span className="text-white">Active & Confident</span> Every Single Day.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans font-light">
              Ayurvedic wellness support designed to help busy men maintain premium daily energy, stamina, and physical vitality naturally through ancient herbal wisdom.
            </p>

            {/* Benefits Checklists */}
            <div className="py-2">
              <p className="text-xs font-bold text-accent-gold uppercase tracking-wider mb-2.5 font-sans">
                WHY MODERN INDIAN MEN TRUST THIS FORMULA:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-lg">
                {benefits.map((benefit) => (
                  <div key={benefit.id} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/35 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-200 font-medium font-sans">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct CRO Focused CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md md:max-w-xl">
              {/* Call Now button */}
              <a
                href={`tel:${CONTACT_NUMBERS.phone}`}
                id="hero-call-cta"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:opacity-95 text-white font-extrabold text-sm px-6 py-4 rounded-xl border border-emerald-400/20 shadow-lg shadow-emerald-900/15 transition-transform active:scale-95 text-center uppercase tracking-wider"
              >
                <PhoneCall className="w-4 h-4 text-white" />
                <span>📞 Call Doctor Now</span>
              </a>

              {/* WhatsApp button */}
              <a
                href={`https://wa.me/${CONTACT_NUMBERS.whatsapp}?text=${encodeURIComponent(CONTACT_NUMBERS.whatsappMessage)}`}
                id="hero-whatsapp-cta"
                target="_blank"
                rel="noreferrer noopener"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-[#052912] font-extrabold text-sm px-6 py-4 rounded-xl shadow-lg shadow-green-950/25 transition-transform active:scale-95 text-center uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4 fill-emerald-950 stroke-none" />
                <span>💬 WhatsApp Expert</span>
              </a>
            </div>

            <p className="text-[11px] text-gray-400 font-sans italic">
              ⚡ Free Consultation • Preserving 100% Confidentiality & Discreet Packing assured
            </p>

            {/* Horizontal Trust Badges */}
            <div className="border-t border-emerald-900/40 pt-5 mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {badges.map((badge, idx) => {
                  const IconComponent = badge.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2 bg-primary/20 p-2.5 rounded-lg border border-emerald-950 shadow-inner">
                      <div className="p-1.5 rounded-full bg-accent-gold/10 text-accent-gold shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-gray-200 font-sans tracking-tight">
                        {badge.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT: Confident Male Portrait + Spectacular interactive bottle container */}
          <div className="lg:col-span-12 xl:col-span-5 relative mt-6 lg:mt-0 flex flex-col items-center">
            
            {/* Portrait Background Visual overlay */}
            <div className="absolute inset-x-0 top-12 bottom-12 rounded-2xl bg-gradient-to-t from-emerald-950/90 via-[#0b1410]/60 to-transparent overflow-hidden pointer-events-none -z-10 border border-emerald-900/20 shadow-2xl">
              {/* Fallback lifestyle image matching targeted Indian premium client with subtle dark styling */}
              <img
                src="https://picsum.photos/seed/confident-adult-male/600/800?blur=1"
                alt="Confident healthy active man"
                className="w-full h-full object-cover opacity-25 object-top mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />
              {/* Warm gradient accent on the background */}
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#0b1410]" />
            </div>

            <div className="text-center w-full max-w-sm mb-1.5 bg-black/40 backdrop-blur-md border border-emerald-900/40 px-4 py-1.5 rounded-full z-10 shadow">
              <span className="text-[10px] md:text-xs text-accent-gold font-bold uppercase tracking-wider font-sans">
                🔥 SPECIAL DIRECT FACTORY RATE APPLIED
              </span>
            </div>

            {/* Interactive Custom Bottle Artwork */}
            <BottleVisual />

          </div>

        </div>
      </div>
    </section>
  );
}
