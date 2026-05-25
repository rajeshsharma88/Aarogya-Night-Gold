/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PhoneCall, MessageSquare, ShieldCheck, EyeOff, Award, Sparkles, Check } from 'lucide-react';
import { PRODUCT_PACKAGES, CONTACT_NUMBERS } from '../data';

export default function FinalCtaSection() {
  const [selectedPack, setSelectedPack] = useState<string>('gold-standard');

  const activePackData = PRODUCT_PACKAGES.find((p) => p.id === selectedPack) || PRODUCT_PACKAGES[1];

  const getCustomWhatsAppMessageForPack = (packName: string, capsules: number, price: number) => {
    return `Hello, I want to order the "${packName}" (${capsules} capsules) for Rs. ${price}. Please let me know how to confirm my address securely with free cash on delivery.`;
  };

  return (
    <section id="final-cta-section" className="bg-gradient-to-br from-primary via-primary-light to-primary text-white py-16 px-4 relative overflow-hidden border-b border-[#D4AF37]/25">
      
      {/* Background radial glowing gold aura */}
      <div className="absolute bottom-0 right-[15%] w-96 h-96 rounded-full bg-accent-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-saffron/5 blur-[100px] pointer-events-none" />

      {/* Geometric accent circles */}
      <div className="absolute top-20 right-1/4 w-32 h-32 border border-[#D4AF37]/10 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 font-sans text-center">
        
        {/* Urgency Stock Bar */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-2 bg-[#113128] border border-red-900/30 px-5 py-2.5 rounded-full text-xs text-rose-300 font-sans tracking-wide max-w-2xl mx-auto mb-8 animate-pulse text-center">
          <span className="h-2 w-2 rounded-full bg-rose-500 inline-block"></span>
          <p>
            <strong>⚠️ LIMIT STOCK ALERT:</strong> Due to heavy Meta & reels demand, we are running extremely low on Swarna and Saffron raw materials. Confirm order today.
          </p>
        </div>

        {/* Section Header */}
        <div className="space-y-3.5 max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] font-mono">
            ✨ STEP INTO PEAK HEALTH
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif leading-tight text-white">
            Support Your Daily Energy & <span className="text-accent-gold italic font-normal">Vitality Naturally</span>
          </h2>
          <p className="text-gray-300 text-xs md:text-sm font-light">
            Align your vitality with standard Ayurvedic wisdom. Choose your package level below and click to complete your secure confidential order via Call or WhatsApp instantly.
          </p>
        </div>

        {/* Pricing/Product selection grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left items-stretch mb-10">
          {PRODUCT_PACKAGES.map((pack) => {
            const isSelected = selectedPack === pack.id;
            const savings = pack.originalPrice - pack.price;
            const percentOff = Math.round((savings / pack.originalPrice) * 100);

            return (
              <div
                key={pack.id}
                id={`pack-card-${pack.id}`}
                onClick={() => setSelectedPack(pack.id)}
                className={`relative rounded-3xl p-6 cursor-pointer border flex flex-col justify-between transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#113128] border-accent-gold shadow-2xl scale-[1.02]'
                    : 'bg-primary-light/40 border-emerald-940 hover:border-emerald-800'
                }`}
              >
                {/* Popular or Savings Badge */}
                {pack.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-yellow-500 text-primary font-bold text-[9px] tracking-widest uppercase px-3.5 py-1 rounded-full shadow-lg">
                    ★ MOST POPULAR RECOVERY PACK ★
                  </span>
                )}

                {!pack.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary border border-emerald-800 text-accent-gold font-bold text-[9px] tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
                    SAVE {percentOff}%
                  </span>
                )}

                <div className="space-y-4">
                  {/* Package Metadata */}
                  <div className="border-b border-emerald-900/30 pb-3 mt-1 flex justify-between items-start">
                    <div>
                      <h3 className={`font-bold text-sm md:text-base font-serif ${isSelected ? 'text-accent-gold' : 'text-gray-100'}`}>
                        {pack.name}
                      </h3>
                      <p className="text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider font-mono">
                        {pack.badge}
                      </p>
                    </div>
                    {/* Circle Check */}
                    <div className={`h-5 w-5 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-accent-gold border-accent-gold text-primary' : 'border-gray-700 text-transparent'
                    }`}>
                      <Check className="w-3.5 h-3.5 font-bold stroke-[3px]" />
                    </div>
                  </div>

                  {/* Price Block */}
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white font-serif">
                        ₹{pack.price}
                      </span>
                      <span className="text-xs text-gray-500 line-through font-sans">
                        ₹{pack.originalPrice}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#25D366] font-sans tracking-wide">
                      You save ₹{savings} ({percentOff}% Off today) • Only ₹{pack.perCapPrice}/capsules
                    </p>
                  </div>

                  {/* Description text */}
                  <p className="text-xs text-gray-300 leading-relaxed font-light font-sans">
                    {pack.description}
                  </p>
                </div>

                {/* Micro-Features of the specific tier */}
                <div className="mt-5 pt-4 border-t border-emerald-900/30 space-y-2.5">
                  <div className="flex items-center gap-2 text-[11px] text-gray-300">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-gold" />
                    <span>Free Private Express Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-300">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-gold" />
                    <span>Free Confidential Doctor Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-300">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-gold" />
                    <span>Cash on Delivery (COD) Available</span>
                  </div>
                </div>

                {/* Mobile Active Frame Border shadow helper */}
                {isSelected && (
                  <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-accent-gold to-yellow-300 rounded-b-3xl" />
                )}
              </div>
            );
          })}
        </div>

        {/* Closing conversion cards */}
        <div className="bg-[#113128] border border-[#D4AF37]/25 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl">
          
          <h3 className="text-lg md:text-xl font-bold font-serif text-white mb-2 uppercase">
            👉 COMPLETE ORDER FOR: <span className="text-accent-gold">{activePackData.name}</span>
          </h3>
          <p className="text-[#FFE082] text-xs font-semibold uppercase tracking-wider mb-5 font-mono">
            ⚡ OFFER SAVINGS SECURED • FREE EXTRA STRENGTH DOSAGE SHEET INCLUDED
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {/* CALL Button */}
            <a
              href={`tel:${CONTACT_NUMBERS.phone}`}
              id="final-call-now-cta"
              className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:opacity-95 text-white font-extrabold text-sm px-6 py-4 rounded-xl border border-emerald-400/25 shadow-lg active:scale-95 transition-transform text-center uppercase tracking-wider"
            >
              <PhoneCall className="w-4 h-4 animate-bounce" />
              <span>📞 CALL TO CONFIRM</span>
            </a>

            {/* WHATSAPP Button */}
            <a
              href={`https://wa.me/${CONTACT_NUMBERS.whatsapp}?text=${encodeURIComponent(getCustomWhatsAppMessageForPack(activePackData.name, activePackData.capsules, activePackData.price))}`}
              id="final-whatsapp-cta"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-[#052912] font-extrabold text-xs sm:text-sm px-6 py-4 rounded-xl shadow-lg active:scale-95 transition-transform text-center uppercase tracking-wider"
            >
              <MessageSquare className="w-4.5 h-4.5 fill-[#052912] stroke-none" />
              <span>💬 ORDER ON WHATSAPP</span>
            </a>
          </div>

          {/* Privacy badges under buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[10px] text-gray-400 border-t border-emerald-900/30 pt-5 font-sans uppercase tracking-wider font-semibold">
            <div className="flex items-center gap-1">
              <EyeOff className="w-3.5 h-3.5 text-emerald-500" />
              <span>100% DISCREET DISPATCH ASSURED</span>
            </div>
            <div className="hidden sm:inline text-emerald-900">•</div>
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-gold" />
              <span>NO MENTION OF PRODUCT ON BOX</span>
            </div>
            <div className="hidden sm:inline text-emerald-900">•</div>
            <div className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-yellow-500" />
              <span>ISO 9001 & GMP PHARMA CERTIFIED</span>
            </div>
          </div>
        </div>

        {/* Global Footer Marks */}
        <div className="mt-16 border-t border-emerald-900/30 pt-8 text-[11px] text-gray-400 space-y-2">
          <p>© 2026 Aarogya India. All Rights Reserved.</p>
          <p className="max-w-4xl mx-auto font-light leading-relaxed">
            Disclaimer: Aarogya Night Gold is an Ayurvedic Proprietary Medicine. It is intended to support wellness and vitality naturally. Results may vary depending on individual physiological makeup, diet, and stress factors. These statements have not been designed to diagnose, treat, or replace medical advice. Consultation with our wellness experts is completely free and informative.
          </p>
        </div>

      </div>
    </section>
  );
}
