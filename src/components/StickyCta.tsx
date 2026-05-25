/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PhoneCall, MessageSquare, Flame } from 'lucide-react';
import { CONTACT_NUMBERS } from '../data';

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  // Experience booster: Show the sticky bar only after user scrolls down 150px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      id="sticky-mobile-cta"
      className="fixed bottom-0 inset-x-0 bg-primary/95 backdrop-blur-md border-t border-[#D4AF37]/20 p-2.5 z-40 lg:hidden shadow-[0_-8px_30px_rgba(0,0,0,0.5)] animate-fade-in font-sans"
    >
      <div className="flex items-center justify-between gap-2.5 max-w-md mx-auto relative">
        
        {/* Call button */}
        <a
          href={`tel:${CONTACT_NUMBERS.phone}`}
          id="sticky-call-cta"
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-black text-xs px-4 py-3.5 rounded-xl border border-emerald-400/20 active:scale-95 shadow transition-all uppercase tracking-wider"
        >
          <PhoneCall className="w-4 h-4 text-white hover:rotate-6 transition-transform" />
          <span>📞 Call Dr</span>
        </a>

        {/* Small center pulse notice to encourage urgency */}
        <div className="absolute top-[-34px] left-1/2 -translate-x-1/2 bg-amber-500 hover:bg-amber-400 text-primary animate-cta-pulse font-bold text-[9px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow whitespace-nowrap flex items-center gap-1">
          <Flame className="w-3 h-3 text-red-950 fill-current" />
          <span>55% Off Ends Today</span>
        </div>

        {/* WhatsApp button */}
        <a
          href={`https://wa.me/${CONTACT_NUMBERS.whatsapp}?text=${encodeURIComponent(CONTACT_NUMBERS.whatsappMessage)}`}
          id="sticky-whatsapp-cta"
          target="_blank"
          rel="noreferrer noopener"
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-[#052912] font-black text-xs px-4 py-3.5 rounded-xl active:scale-95 shadow transition-all uppercase tracking-wider"
        >
          <MessageSquare className="w-4.5 h-4.5 fill-[#052912] stroke-none" />
          <span>💬 WhatsApp Expert</span>
        </a>

      </div>
    </div>
  );
}
