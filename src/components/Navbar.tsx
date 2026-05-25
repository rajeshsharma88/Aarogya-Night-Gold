/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, PhoneCall } from 'lucide-react';
import { CONTACT_NUMBERS } from '../data';

export default function Navbar() {
  return (
    <nav id="app-navbar" className="bg-primary border-b border-[#D4AF37]/20 py-3.5 px-4 sticky top-10 z-40 shadow-sm backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-600 via-accent-gold to-yellow-300 flex items-center justify-center shadow-lg shadow-accent-gold/15 shrink-0 border border-amber-400/20">
            {/* Elegant Emblem */}
            <span className="text-white font-serif text-lg font-bold leading-none select-none">A</span>
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-wider text-white font-serif uppercase flex items-center gap-1">
              AAROGYA <span className="text-accent-gold">NIGHT GOLD</span>
            </h1>
            <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase block">
              🌿 Pure premium Ayurveda
            </span>
          </div>
        </div>

        {/* Action Button & Secure Seals */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-gray-300 font-medium font-sans">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span>ISO 9001 & GMP Certified</span>
          </div>
          
          <a
            href={`tel:${CONTACT_NUMBERS.phone}`}
            id="navbar-call-btn"
            className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold text-xs px-3.5 py-2 rounded-full border border-emerald-500/20 shadow-md hover:from-emerald-500 hover:to-emerald-600 active:scale-95 transition-all uppercase tracking-wide"
          >
            <PhoneCall className="w-3.5 h-3.5 animate-bounce" />
            <span>Consult doctor</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
