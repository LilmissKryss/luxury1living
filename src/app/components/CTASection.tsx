'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-sky-600 via-emerald-600 to-purple-600 opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
          Ready for a cleaner, more luxurious space?
        </h2>
        <p className="text-base sm:text-lg text-slate-200 mb-8">
          Let us create a custom cleaning plan for your facility.
        </p>
        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 rounded-lg bg-sky-400 hover:bg-emerald-600 transition-colors text-white font-semibold px-8 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
        >
          Get a Free Quote
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
} 