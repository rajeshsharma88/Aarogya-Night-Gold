/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  age: number;
  rating: number;
  text: string;
  verified: boolean;
  avatarSeed: string;
  durationUsed: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProblemCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  scenario: string;
}

export interface Ingredient {
  id: string;
  name: string;
  hindiName?: string;
  role: string;
  description: string;
  iconName: string;
  color: string;
}

export interface WellnessConsultant {
  name: string;
  title: string;
  experience: string;
  registration: string;
  avatarUrl: string;
  statement: string;
}

export interface ProductPackage {
  id: string;
  name: string;
  capsules: number;
  price: number;
  originalPrice: number;
  badge: string;
  popular: boolean;
  description: string;
  perCapPrice: number;
}
