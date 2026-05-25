/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonial-section" className="bg-gradient-to-br from-primary via-primary-light to-primary text-white py-16 px-4 border-b border-[#D4AF37]/20 relative">
      <div className="absolute top-0 right-10 w-44 h-44 border border-[#D4AF37]/10 rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-saffron font-mono flex items-center justify-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-saffron animate-pulse" />
            VERIFIED USER FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif leading-tight text-white">
            Real Experiences from <span className="text-accent-gold italic font-normal">Active Men</span>
          </h2>
          <p className="text-gray-300 text-xs md:text-sm font-light">
            Read authentic stories of working professionals and married men who integrated Aarogya Night Gold into their nightly routine.
          </p>
        </div>

        {/* Testimonials Main Carousel and Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#113128] border border-[#D4AF37]/25 rounded-3xl p-6 md:p-10 shadow-xl overflow-hidden relative">
          
          <div className="absolute top-4 right-6 text-accent-gold/10 pointer-events-none">
            <Quote className="w-24 h-24 stroke-[3px]" />
          </div>

          {/* LEFT: Core slider content */}
          <div className="lg:col-span-8 space-y-6 text-left">
            {/* Stars */}
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: TESTIMONIALS[activeIndex].rating }).map((_, i) => (
                <Star key={i} className="w-4.5 h-4.5 fill-current" />
              ))}
              <span className="text-xs text-gray-400 font-mono font-semibold ml-2">
                5.0 / 5.0 Rating
              </span>
            </div>

            {/* Testimonial Quote */}
            <p className="text-sm md:text-base leading-relaxed text-gray-100 font-light font-sans italic">
              "{TESTIMONIALS[activeIndex].text}"
            </p>

            {/* User Meta */}
            <div className="flex items-center gap-3">
              {/* Fallback avatar using Picsum */}
              <div className="w-12 h-12 rounded-full border border-accent-gold overflow-hidden bg-primary shadow-inner shrink-0">
                <img
                  src={`https://picsum.photos/seed/${TESTIMONIALS[activeIndex].avatarSeed}/120/120`}
                  alt={TESTIMONIALS[activeIndex].name}
                  className="w-full h-full object-cover filter brightness-95"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-sm md:text-base text-white font-serif">
                    {TESTIMONIALS[activeIndex].name}
                  </h4>
                  <span className="text-[10px] bg-primary-light border border-[#D4AF37]/30 text-accent-gold px-2 py-0.5 rounded font-mono font-bold uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> VERIFIED ROUTINE
                  </span>
                </div>
                <p className="text-xs text-gray-300 font-light font-sans">
                  {TESTIMONIALS[activeIndex].age} Yrs • {TESTIMONIALS[activeIndex].city} • <span className="text-accent-gold font-normal">Used: {TESTIMONIALS[activeIndex].durationUsed}</span>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Controller details / Quick list navigation */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col items-center justify-between lg:justify-center gap-4 lg:border-l lg:border-emerald-800/20 lg:pl-10">
            {/* Manual Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                id="btn-prev-testimonial"
                type="button"
                className="p-2.5 rounded-full bg-primary border border-[#D4AF37]/20 text-gray-300 hover:text-accent-gold hover:border-accent-gold active:scale-90 transition-all focus:outline-none"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="text-xs font-mono text-gray-300">
                <span className="text-accent-gold font-bold">{activeIndex + 1}</span> / {TESTIMONIALS.length}
              </div>

              <button
                onClick={handleNext}
                id="btn-next-testimonial"
                type="button"
                className="p-2.5 rounded-full bg-primary border border-[#D4AF37]/20 text-gray-300 hover:text-accent-gold hover:border-accent-gold active:scale-90 transition-all focus:outline-none"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Pagination dots */}
            <div className="flex items-center gap-1.5 pt-1">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === activeIndex ? 'w-5 bg-accent-gold' : 'w-2 bg-primary-light'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Global social proof stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-[#113128] border border-[#D4AF37]/10 p-4 rounded-xl shadow-md">
            <p className="text-2xl font-serif font-bold text-accent-gold">15,000+</p>
            <p className="text-[10px] text-gray-300 uppercase tracking-widest mt-1">Happy Customers</p>
          </div>
          <div className="bg-[#113128] border border-[#D4AF37]/10 p-4 rounded-xl shadow-md">
            <p className="text-2xl font-serif font-bold text-accent-gold">94.7%</p>
            <p className="text-[10px] text-gray-300 uppercase tracking-widest mt-1">Retention Rate</p>
          </div>
          <div className="bg-[#113128] border border-[#D4AF37]/10 p-4 rounded-xl shadow-md">
            <p className="text-2xl font-serif font-bold text-accent-gold">4.8★</p>
            <p className="text-[10px] text-gray-300 uppercase tracking-widest mt-1">Average Star Rating</p>
          </div>
          <div className="bg-[#113128] border border-[#D4AF37]/10 p-4 rounded-xl shadow-md">
            <p className="text-2xl font-serif font-bold text-accent-gold">100%</p>
            <p className="text-[10px] text-gray-300 uppercase tracking-widest mt-1">Ayush Standard Compliant</p>
          </div>
        </div>

      </div>
    </section>
  );
}
