/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import PromoHeader from './components/PromoHeader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialSection from './components/TestimonialSection';
import ExpertSection from './components/ExpertSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import StickyCta from './components/StickyCta';

export default function App() {
  return (
    <div id="landing-page-root" className="min-h-screen bg-[#050b08] text-gray-100 font-sans selection:bg-accent-gold selection:text-emerald-950 overflow-x-hidden">
      {/* Top urgency promo alert bar */}
      <PromoHeader />

      {/* Main Luxury Navigation Header */}
      <Navbar />

      {/* Hero Above the Fold block */}
      <HeroSection />

      {/* Relatable lifestyle pain-point section */}
      <ProblemSection />

      {/* Interactive Ayurvedic core herbs panel */}
      <SolutionSection />

      {/* Grid of highly scannable benefit cards */}
      <BenefitsSection />

      {/* Real verified Indian professional reviews */}
      <TestimonialSection />

      {/* Authority Doctor-led stamp and privacy assurances */}
      <ExpertSection />

      {/* Frequently Asked accordion Questions */}
      <FaqSection />

      {/* Luxury checkout tier selection + click CTAs */}
      <FinalCtaSection />

      {/* Floating persistent mobile footer CTAs */}
      <StickyCta />
    </div>
  );
}
