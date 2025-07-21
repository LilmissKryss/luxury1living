'use client';
import React from 'react';
import { Award, Users, Leaf, Headset } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section id="whyus" className="container mx-auto pt-16 pr-4 pb-16 pl-4 sm:px-6 sm:py-24">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h3 className="text-sky-400 text-sm font-semibold uppercase tracking-wider">Why Choose Us</h3>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Luxury Meets Reliability</h2>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">We marry artisanal care with operational precision to deliver a consistent, elevated clean—every single time.</p>
      </div>
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-8 rounded-3xl border border-white/10 transition hover:-translate-y-1">
          <Award className="w-6 h-6 text-sky-400 mb-4" />
          <h4 className="font-medium text-white tracking-tight mb-2">Certified Excellence</h4>
          <p className="text-sm text-slate-400 leading-relaxed">ISO 9001 &amp; GBAC-Star accredited operations guarantee service quality and hygiene compliance.</p>
        </div>
        <div className="p-8 rounded-3xl border border-white/10 transition hover:-translate-y-1">
          <Users className="w-6 h-6 text-emerald-400 mb-4" />
          <h4 className="font-medium text-white tracking-tight mb-2">Elite Staff</h4>
          <p className="text-sm text-slate-400 leading-relaxed">Rigorous background checks, hospitality-grade training, and continued education keep our team at the top of their craft.</p>
        </div>
        <div className="p-8 rounded-3xl border border-white/10 transition hover:-translate-y-1">
          <Leaf className="w-6 h-6 text-lime-400 mb-4" />
          <h4 className="font-medium text-white tracking-tight mb-2">Eco-Forward</h4>
          <p className="text-sm text-slate-400 leading-relaxed">Green Seal certified products and 100% recyclable consumables reduce your carbon footprint without sacrificing shine.</p>
        </div>
        <div className="p-8 rounded-3xl border border-white/10 transition hover:-translate-y-1">
          <Headset className="w-6 h-6 text-purple-400 mb-4" />
          <h4 className="font-medium text-white tracking-tight mb-2">Concierge Support</h4>
          <p className="text-sm text-slate-400 leading-relaxed">One-touch communication with your personal account manager—response within 15 minutes, 24/7.</p>
        </div>
      </div>
    </section>
  );
} 