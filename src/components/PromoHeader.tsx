/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Sparkles, PhoneCall } from 'lucide-react';
import { CONTACT_NUMBERS } from '../data';

export default function PromoHeader() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 12, seconds: 43 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          // Reset timer to keep urgency realistic but infinite for landing page demo
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="promo-header" className="bg-primary text-white text-xs py-2 px-4 border-b border-accent-gold/20 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-1.5 md:gap-4 font-sans">
        <div className="flex items-center gap-2 text-center md:text-left justify-center">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
          <p className="font-semibold text-accent-amber tracking-wide uppercase flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Limited Time Offer:
          </p>
          <span className="text-gray-200">Get Free Private Shipping across India + 55% Off today!</span>
        </div>
        
        <div className="flex items-center gap-4 text-[11px] md:text-xs">
          <div className="bg-primary-light border border-accent-gold/30 px-2 py-0.5 rounded flex items-center gap-1.5">
            <span className="text-gray-400 font-mono">Offer Ends In:</span>
            <span className="font-mono text-accent-gold font-bold">
              {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
          <a
            href={`tel:${CONTACT_NUMBERS.phone}`}
            id="promo-header-call"
            className="hidden sm:flex items-center gap-1 text-accent-amber hover:text-white transition-colors uppercase font-bold text-[11px] tracking-wider"
          >
            <PhoneCall className="w-3 h-3 hover:translate-y-[-1px] transition-transform" />
            TAP TO CALL
          </a>
        </div>
      </div>
    </div>
  );
}
