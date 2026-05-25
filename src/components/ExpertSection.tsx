/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PhoneCall, MessageSquare, ShieldCheck, HeartPulse, UserCheck } from 'lucide-react';
import { CONTACT_NUMBERS } from '../data';

export default function ExpertSection() {
  return (
    <section id="expert-section" className="bg-gradient-to-br from-primary via-primary-light to-primary text-white py-16 px-4 border-b border-[#D4AF37]/20">
      <div className="max-w-5xl mx-auto font-sans relative">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent-gold/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: Doctor Portrait Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#113128] border border-[#D4AF37]/25 rounded-3xl p-4 shadow-2xl relative overflow-hidden group">
              
              {/* Doctor Placeholder portrait overlay */}
              <div className="aspect-[4/5] rounded-2xl bg-primary-light overflow-hidden relative border border-[#D4AF37]/10">
                <img
                  src="https://picsum.photos/seed/ayurvedic-expert-doctor/400/500"
                  alt="Senior Ayurvedic Wellness Consultant"
                  className="w-full h-full object-cover object-top filter brightness-95 saturate-50 contrast-105 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
                
                {/* Float tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md border border-[#D4AF37]/20 rounded-xl p-3">
                  <h4 className="font-bold text-xs md:text-sm text-accent-gold uppercase tracking-wider font-serif">
                    Acharya Dr. M. Mishra
                  </h4>
                  <p className="text-[10px] text-gray-300 font-mono">
                    B.A.M.S • Ayurvedic Medicine Specialist (18+ Yrs Exp.)
                  </p>
                </div>
              </div>

              {/* Dynamic stamp badge */}
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-accent-gold border-2 border-white flex flex-col items-center justify-center text-primary font-bold text-[8px] tracking-tight uppercase leading-none shadow-lg rotate-12">
                <span>100%</span>
                <span className="font-extrabold text-[10px]">Ayush</span>
                <span>Doctor</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Quality & Trust copy */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="space-y-2.5">
              <span className="text-saffron text-xs font-bold uppercase tracking-widest font-mono flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-saffron" />
                TRUSTED PROFESSIONAL GUIDANCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif leading-tight text-white">
                Guided by Authentic <br />
                <span className="text-accent-gold italic font-normal">Ayurvedic Wellness Principles</span>
              </h2>
            </div>

            <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-light font-sans">
              We believe in honest, safe, and sustainable health restoration rather than temporary chemical boosters. Every batch of Aarogya Night Gold is produced in a WHO-GMP certified facility and overseen by experienced practitioners of dravya-guna (Ayurvedic pharmacology) to maintain pure extraction ratios.
            </p>

            {/* Structured core guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#113128] border border-[#D4AF37]/30 text-accent-gold flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-bold text-xs font-serif text-gray-200">AYUSH Compliant Formulation</h4>
                  <p className="text-[10.5px] text-gray-300 leading-snug font-sans">Formulated safely using standard protocols, ensuring no adulterants or synthetic compounds.</p>
                </div>
              </div>

              <div className="flex gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#113128] border border-[#D4AF37]/30 text-accent-gold flex items-center justify-center shrink-0">
                  <HeartPulse className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-bold text-xs font-serif text-gray-200">100% Free Consultation Support</h4>
                  <p className="text-[10.5px] text-gray-300 leading-snug font-sans">Receive personalized diet plans, routine answers, and confidence coaching from our experts.</p>
                </div>
              </div>
            </div>

            {/* Direct Connect CTA container */}
            <div className="bg-[#113128] border border-[#D4AF37]/20 rounded-2xl p-5 space-y-4 shadow-inner">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-accent-gold uppercase tracking-wider font-mono">
                  💡 HAVE A CONFIDENTIAL INQUIRY?
                </h4>
                <p className="text-gray-300 text-[11px] leading-relaxed font-light font-sans">
                  Our doctor-led wellness panel is available for one-on-one consultation. We keep every chat completely anonymous and deliver packages in highly private plain brown sleeves without labeling names.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch gap-3">
                <a
                  href={`tel:${CONTACT_NUMBERS.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary px-4 py-3 rounded-xl border border-[#D4AF37]/35 text-accent-gold hover:bg-primary-light font-bold text-xs uppercase tracking-wide transition-all active:scale-95 text-center"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Doctor free</span>
                </a>
                
                <a
                  href={`https://wa.me/${CONTACT_NUMBERS.whatsapp}?text=${encodeURIComponent(CONTACT_NUMBERS.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-[#052912] font-bold text-xs px-4 py-3 rounded-xl hover:bg-[#20ba5a] transition-all active:scale-95 text-center uppercase tracking-wide"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-[#052912] stroke-none" />
                  <span>Confidential WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
