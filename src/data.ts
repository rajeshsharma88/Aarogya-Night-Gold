/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQItem, TestimonialItem, BenefitItem, ProblemCard, Ingredient, ProductPackage } from './types';

export const PROBLEM_CARDS: ProblemCard[] = [
  {
    id: 'fatigue',
    title: 'Daily Exhaustion & Tiredness',
    description: 'Waking up tired or returning home from office so drained that you have zero energy left for family, hobbies, or private life.',
    iconName: 'BatteryLow',
    scenario: 'Even after 8 hours of sleep, you struggle to get through meetings or handle daily challenges without multiple cups of tea or coffee.'
  },
  {
    id: 'stress',
    title: 'Workplace & Financial Stress',
    description: 'High-pressure deadlines, business uncertainty, and screens overload elevate cortisol, which silently tanks your natural energy levels.',
    iconName: 'BrainCircuit',
    scenario: 'Mental exhaustion makes it impossible to switch off. You feel constantly on edge, affecting your mood and confidence at home.'
  },
  {
    id: 'stamina',
    title: 'Low stamina & strength',
    description: 'Feeling a step slower at the gym, during sports, or in everyday activities compared to your peak years. Performance feels compromised.',
    iconName: 'TrendingDown',
    scenario: 'Noticing a gradual reduction in physical drive, muscle endurance, and the active enthusiasm that defined your youth.'
  }
];

export const INGREDIENTS: Ingredient[] = [
  {
    id: 'kesar',
    name: 'Kesar (Saffron)',
    hindiName: 'केसर',
    role: 'Premium Energizer',
    description: 'A luxurious herbal spice that supports blood flow to vital organs, reduces oxidative stress, and elevates mood, vitality, and confidence.',
    iconName: 'Sparkles',
    color: 'from-amber-500 to-saffron'
  },
  {
    id: 'shilajit',
    name: 'Shudh Shilajit',
    hindiName: 'शुद्ध शिलाजीत',
    role: 'Stamina & Vigor',
    description: 'Rich in fulvic acid and over 84 trace minerals. It boosts cellular energy (ATP), enhances muscle recovery, and restores physical power.',
    iconName: 'Mountain',
    color: 'from-zinc-700 to-zinc-900'
  },
  {
    id: 'ashwagandha',
    name: 'Ashwagandha',
    hindiName: 'अश्वगंधा',
    role: 'Stress & Cortisol Control',
    description: 'A powerful clinical adaptogen that lowers high stress, elevates endurance, promotes deep rest, and supports optimal energy production.',
    iconName: 'ShieldAlert',
    color: 'from-emerald-700 to-emerald-900'
  },
  {
    id: 'safed_musli',
    name: 'Safed Musli',
    hindiName: 'सफेद मुसली',
    role: 'Strength & Vitality',
    description: 'Known as "White Gold" in Ayurveda. Promotes lean muscle development, supports daily immunity, and rejuvenates bodily tissues.',
    iconName: 'Leaf',
    color: 'from-neutral-400 to-neutral-600'
  },
  {
    id: 'gokshura',
    name: 'Gokshura',
    hindiName: 'गोक्षुर',
    role: 'Active Endurance',
    description: 'Naturally supports oxygen supply to muscles, improves bladder/kidney wellness, and aids stamina and daily athletic performance.',
    iconName: 'Zap',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    id: 'swarna',
    name: 'Swarna Bhasma (Gold Dust)',
    hindiName: 'स्वर्ण भस्म',
    role: 'Luxury Catalyst',
    description: 'Pure bio-compatible nano-gold that acts as a powerful yogavahi (catalyst), amplifying benefits of other herbs and supporting age-reversal.',
    iconName: 'Award',
    color: 'from-yellow-400 to-amber-600'
  }
];

export const CORE_BENEFITS: BenefitItem[] = [
  {
    id: 'energy',
    title: 'Daily Energy Support',
    description: 'Helps maintain consistent, non-jittery energy from morning meetings until late night, without crashes.',
    iconName: 'Activity'
  },
  {
    id: 'stamina',
    title: 'Physical Stamina Support',
    description: 'Supports cellular ATP synthesis, helping to enhance physical endurance, strength, and stamina.',
    iconName: 'TrendingUp'
  },
  {
    id: 'wellness',
    title: 'Active Lifestyle Support',
    description: 'Enables you to actively engage with your family, pursue workouts, and overcome professional exhaustion easily.',
    iconName: 'Smile'
  },
  {
    id: 'natural',
    title: '100% Herbal & Safe',
    description: 'A chemical-free formulation made with authentic wild-harvested herbs. Non-addictive and safe for daily long-term use.',
    iconName: 'Leaf'
  },
  {
    id: 'stress_relief',
    title: 'Stress & Fatigue Defense',
    description: 'Helps lower daily cortisol response to calm the nervous system, allowing premium cognitive and body recovery.',
    iconName: 'HeartPulse'
  },
  {
    id: 'carry',
    title: 'Easy-to-Carry Veg Capsules',
    description: 'Packaged in a premium airtight UV-safe container with convenient travel options. Simple to slide into your work bag.',
    iconName: 'CheckCircle'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    city: 'New Delhi',
    age: 41,
    rating: 5,
    text: 'Being a branch manager in a bank, I used to reach home completely drained of energy. Over the last 2 months of using Aarogya Night Gold, I feel a marked difference. I have the active stamina to play with my kids and help around the house after work. Best natural routine ever!',
    verified: true,
    avatarSeed: 'rajesh',
    durationUsed: '2 Months'
  },
  {
    id: '2',
    name: 'Amit Patel',
    city: 'Mumbai',
    age: 34,
    rating: 5,
    text: 'I was highly skeptical about Ayurvedic stamina formulas, but the free doctor call on WhatsApp changed my perspective. The consultation was 100% private. I ordered the 60 days pack and my strength has improved significantly. Truly a gold standard product.',
    verified: true,
    avatarSeed: 'amit',
    durationUsed: '45 Days'
  },
  {
    id: '3',
    name: 'Vikram Choudhury',
    city: 'Bengaluru',
    age: 49,
    rating: 4,
    text: 'At 49, dealing with corporate stress while trying to maintain physical fitness is hard. Aarogya Night Gold helped reduce my morning fatigue. I wake up fresh and light, and my recovery after my morning runs is much faster. Highly recommended for busy married men.',
    verified: true,
    avatarSeed: 'vikram',
    durationUsed: '3 Months'
  },
  {
    id: '4',
    name: 'Gurpreet Singh',
    city: 'Chandigarh',
    age: 38,
    rating: 5,
    text: 'Amazing natural product. No side effects at all. Earlier my back would ache by evening, but now my structural fatigue is mostly gone. It works gently over time, which is how true Ayurveda operates. Delivery was also highly discrete.',
    verified: true,
    avatarSeed: 'gurpreet',
    durationUsed: '1 Month'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'is-ayurvedic',
    question: 'Is Aarogya Night Gold 100% Ayurvedic?',
    answer: 'Yes, Aarogya Night Gold is 100% Ayurvedic. It is formulated under standard Ministry of AYUSH guidelines, using only pure, premium traditional ingredients like Shudh Shilajit, Kesar, Safed Musli, Ashwagandha, and Swarna Bhasma. It contains absolutely zero synthetic hormones, metal impurities, or chemicals.'
  },
  {
    id: 'how-to-use',
    question: 'How should I take these capsules for best results?',
    answer: 'The recommended dosage is 1 capsule daily, preferably at night, 30 minutes after dinner with warm milk or lukewarm water. For optimal, sustainable benefits, we recommend taking it consistently for at least 60 to 90 days.'
  },
  {
    id: 'is-easy-carry',
    question: 'Is the packaging easy to carry during business travel?',
    answer: 'Absolutely. The product comes in a premium, robust, airtight and travel-safe amber glass jar that easily slips into your briefcase, backpack, or laptop bag, maintaining capsule potency.'
  },
  {
    id: 'speak-expert',
    question: 'Can I speak with a wellness expert before making a decision?',
    answer: 'Yes, we provide 100% free, confidential Ayurvedic consultations. You can click the "WhatsApp Expert" or "Call Now" buttons to speak directly with an expert who can understand your specific lifestyle goals and answer your questions.'
  },
  {
    id: 'is-private',
    question: 'Will my medical query or package delivery be private?',
    answer: 'We assure 100% absolute privacy. Every order is shipped in plain, brown, tamper-proof outer boxes without any reference to the product name or contents on the label. Furthermore, our wellness consultations are strictly one-on-one and completely confidential.'
  },
  {
    id: 'side-effects',
    question: 'Are there any side effects?',
    answer: 'Because Aarogya Night Gold uses traditional herbal extract powders in balanced amounts, it is highly bio-compatible and has no known side effects when taken at the recommended dose. If you have chronic conditions (e.g. severe high blood pressure), consult our expert before starting.'
  }
];

export const PRODUCT_PACKAGES: ProductPackage[] = [
  {
    id: 'starter',
    name: 'Starter Vitality Pack',
    capsules: 30,
    price: 1499,
    originalPrice: 2499,
    badge: '30 Days Supply',
    popular: false,
    description: 'Perfect for experiencing the initial shifts in baseline energy and morning freshness.',
    perCapPrice: 50
  },
  {
    id: 'gold-standard',
    name: 'Golden Energy Elite (Best Value)',
    capsules: 60,
    price: 2499,
    originalPrice: 4998,
    badge: '60 Days Supply • HIGHLY POPULAR',
    popular: true,
    description: 'Recommended by experts. Recharges deep physical stamina and balances long-term cortisol and fatigue.',
    perCapPrice: 41
  },
  {
    id: 'ultimate',
    name: 'Complete Ayurvedic Transformation',
    capsules: 90,
    price: 3299,
    originalPrice: 7497,
    badge: '90 Days Supply • BEST SAVINGS',
    popular: false,
    description: 'Complete systemic rejuvenation for building highly sustainable physical peak stamina and total health vitality.',
    perCapPrice: 36
  }
];

export const CONTACT_NUMBERS = {
  phone: '+919876543210', // Changeable mock numbers that simulate real click-to-call
  whatsapp: '+919876543210',
  whatsappMessage: 'Hello, I want to avail a 100% FREE confidential consultation about Aarogya Night Gold wellness product. Please connect me with an Ayurvedic expert.'
};
