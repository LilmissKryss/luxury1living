'use client';
import React from 'react';
import { Sparkles, ShieldCheck, Clock, BarChart3 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto pt-16 pr-4 pb-16 pl-4 sm:px-6 sm:py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h3 className="text-sky-400 text-sm font-semibold uppercase tracking-wider">About Us</h3>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Elevating Cleanliness&nbsp;to an&nbsp;Art&nbsp;Form</h2>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">For over a decade, Luxury&nbsp;1&nbsp;Living has delivered white-glove commercial cleaning for boutique offices, flagship stores, and high-end residences. Our team blends cutting-edge equipment with artisan attention to every surface, turning routine cleaning into a polished experience your clients and staff can feel.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 mt-16">
        {/* Values list */}
        <div className="space-y-10">
          <div className="flex gap-4">
            <div className="shrink-0 p-3 rounded-lg bg-sky-400/10 text-sky-400 ring-1 ring-inset ring-sky-400/20 transition-colors hover:bg-sky-400/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-white tracking-tight">Craftsmanship in Every Detail</h4>
              <p className="text-slate-400 leading-relaxed text-sm">From marble buffing to hypoallergenic air purification, our specialists perfect the smallest elements—because luxury lives in the details you never notice, but always feel.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0 p-3 rounded-lg bg-emerald-400/10 text-emerald-400 ring-1 ring-inset ring-emerald-400/20 transition-colors hover:bg-emerald-400/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-white tracking-tight">Health-First Protocols</h4>
              <p className="text-slate-400 leading-relaxed text-sm">Hospital-grade disinfectants and eco-certified solutions ensure a safer space for guests, pets, and the planet—validated by third-party microbial testing.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0 p-3 rounded-lg bg-purple-400/10 text-purple-400 ring-1 ring-inset ring-purple-400/20 transition-colors hover:bg-purple-400/20">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-white tracking-tight">24-Hour Response</h4>
              <p className="text-slate-400 leading-relaxed text-sm">Your dedicated concierge is on-call round the clock. Need a last-minute refresh before an executive meeting? We’ll be there within two hours, guaranteed.</p>
            </div>
          </div>
        </div>
        {/* Stats & Chart */}
        <div className="space-y-10">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl border border-white/10 transition-transform hover:-translate-y-1">
              <h5 className="text-2xl font-semibold text-white tracking-tight">20<span className="text-sky-400">+</span></h5>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">Years</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 transition-transform hover:-translate-y-1">
              <h5 className="text-2xl font-semibold text-white tracking-tight">1000<span className="text-sky-400">+</span></h5>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">Properties</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 transition-transform hover:-translate-y-1">
              <h5 className="text-2xl font-semibold text-white tracking-tight">98%</h5>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">Satisfaction</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl border border-white/10">
            <h6 className="mb-4 flex items-center gap-2 text-sm font-medium text-white tracking-tight">
              <BarChart3 className="w-4 h-4 text-sky-400" /> Customer Satisfaction Index
            </h6>
            <div className="h-36 flex items-center justify-center text-slate-500 text-xs italic">
              {/* Chart placeholder - replace with Chart.js/ReactChartJS2 later */}
              Chart coming soon
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 