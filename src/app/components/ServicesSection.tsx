'use client';
import React from 'react';
import { SprayCan, Layers, Zap } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section id="services" className="container mx-auto pt-16 pr-4 pb-16 pl-4 sm:px-6 sm:py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h3 className="text-sky-400 text-sm font-semibold uppercase tracking-wider">Our Services</h3>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Tailored Cleaning&nbsp;Solutions</h2>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">From day-to-day upkeep to deep-clean transformations, choose the service tier that meets your standard of luxury.</p>
      </div>
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {/* Service card 1 */}
        <article className="group p-8 rounded-3xl border border-white/10 transition hover:-translate-y-1 hover:border-sky-400/30 focus-within:border-sky-400/40">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-sky-400/10 text-sky-400 ring-1 ring-inset ring-sky-400/20 mb-6">
            <SprayCan className="w-5 h-5" />
          </div>
          <h4 className="text-xl font-medium text-white tracking-tight mb-2">Daily Pristine</h4>
          <p className="text-sm text-slate-400 leading-relaxed">Discreet after-hours cleaning keeps workspaces immaculate every morning—trash removal, surface sanitation, and aromatic reset included.</p>
        </article>
        {/* Service card 2 */}
        <article className="group p-8 rounded-3xl border border-white/10 transition hover:-translate-y-1 hover:border-emerald-400/30 focus-within:border-emerald-400/40">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-400/10 text-emerald-400 ring-1 ring-inset ring-emerald-400/20 mb-6">
            <Layers className="w-5 h-5" />
          </div>
          <h4 className="text-xl font-medium text-white tracking-tight mb-2">Deep Refresh</h4>
          <p className="text-sm text-slate-400 leading-relaxed">Quarterly or seasonal overhaul—steam extraction, grout renewal, upholstery detailing, and high-touch disinfection for a like-new finish.</p>
        </article>
        {/* Service card 3 */}
        <article className="group p-8 rounded-3xl border border-white/10 transition hover:-translate-y-1 hover:border-purple-400/30 focus-within:border-purple-400/40">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-400/10 text-purple-400 ring-1 ring-inset ring-purple-400/20 mb-6">
            <Zap className="w-5 h-5" />
          </div>
          <h4 className="text-xl font-medium text-white tracking-tight mb-2">Sanitise + Protect</h4>
          <p className="text-sm text-slate-400 leading-relaxed">Electrostatic spraying and antimicrobial barrier application reduce pathogens for up to 90 days—ideal for wellness-minded environments.</p>
        </article>
      </div>
    </section>
  );
} 