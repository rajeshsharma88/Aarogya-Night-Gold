/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { FAQS, CONTACT_NUMBERS } from '../data';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('is-ayurvedic');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="bg-cream text-primary py-16 px-4 border-b border-gray-200 font-sans relative">
      <div className="absolute top-10 right-10 w-24 h-24 border border-[#D4AF37]/10 rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] font-mono flex items-center justify-center gap-1">
            <HelpCircle className="w-4 h-4 text-accent-gold" />
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif leading-tight text-primary">
            Have Questions? We Have <span className="text-accent-gold italic font-normal">Honest Answers</span>
          </h2>
          <p className="text-gray-600 text-xs md:text-sm font-light">
            Find fast answers to common questions about Aarogya Night Gold usage, certifications, and discrete shipping below.
          </p>
        </div>

        {/* FAQs Accordion Grid */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-container-${faq.id}`}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${
                  isOpen ? 'border-accent-gold shadow-md' : 'border-gray-200 hover:border-gray-300 hover:bg-white'
                }`}
              >
                {/* Trigger Button */}
                <button
                  type="button"
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => toggle(faq.id)}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-xs sm:text-sm md:text-base font-serif text-gray-800 hover:text-primary transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className={`p-1.5 rounded-full shrink-0 ${
                    isOpen ? 'bg-accent-gold/15 text-accent-gold' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Content Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-72 border-t border-gray-100 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="p-5 text-xs sm:text-xs md:text-sm text-gray-600 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact panel if user has further queries */}
        <div className="mt-10 text-center bg-white border border-gray-200 p-6 rounded-2xl max-w-lg mx-auto shadow-sm">
          <p className="text-xs text-gray-600 mb-4 font-light">
            Still have a question that isn't answered here? Ask our experts directly.
          </p>
          <a
            href={`https://wa.me/${CONTACT_NUMBERS.whatsapp}?text=${encodeURIComponent('Hello Doctor, I had a specific question regarding Aarogya Night Gold components...')}`}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-[#052912] font-extrabold text-xs px-5 py-3 rounded-xl shadow transition-transform active:scale-95 uppercase tracking-wide"
          >
            <MessageSquare className="w-4 h-4 fill-[#052912] stroke-none" />
            <span>Chat now on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
