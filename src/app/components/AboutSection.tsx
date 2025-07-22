'use client';
import React from 'react';
import { Sparkles, ShieldCheck, Clock, BarChart3 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto pt-16 pr-4 pb-16 pl-4 sm:px-6 sm:py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h3 className="text-sky-400 text-sm font-semibold uppercase tracking-wider">About Us</h3>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Elevating Cleanliness to an Art Form</h2>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
          At Luxury 1 Living, we believe cleanliness is an experience not just a result. Our mission is to elevate businesses and professional spaces across Greater Houston through detail driven, white glove service that leaves a lasting impression.
        </p>
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
              <p className="text-slate-400 leading-relaxed text-sm">We treat every property as a showcase, perfecting even the smallest details—because true luxury is felt, not just seen.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0 p-3 rounded-lg bg-emerald-400/10 text-emerald-400 ring-1 ring-inset ring-emerald-400/20 transition-colors hover:bg-emerald-400/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-white tracking-tight">Health-First Protocols</h4>
              <p className="text-slate-400 leading-relaxed text-sm">We use hospital-grade disinfectants and eco-certified solutions, ensuring a safe, healthy environment for your staff and guests.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0 p-3 rounded-lg bg-purple-400/10 text-purple-400 ring-1 ring-inset ring-purple-400/20 transition-colors hover:bg-purple-400/20">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-white tracking-tight">24-Hour Response</h4>
              <p className="text-slate-400 leading-relaxed text-sm">Our concierge team is available around the clock for urgent needs—so you're never left waiting for service.</p>
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

      {/* Founder & Company Story Section */}
      <div className="mt-24 border-t border-white/5 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-sky-400 text-sm font-semibold uppercase tracking-wider">Our Story</h3>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mt-2">The vision Behind Luxury 1 Living</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Column - Company Overview */}
            <div className="space-y-6 pt-0">
              <div>
                <h4 className="text-xl font-semibold text-white tracking-tight mb-4">Company Overview</h4>
                <p className="text-slate-400 leading-relaxed">
                  Luxury 1 Living was founded in 2025 with a singular mission: to elevate the commercial cleaning industry through craftsmanship, discretion, and a deep commitment to excellence. What began as a boutique operation led by founder Mary Allen has grown into one of Houston's most trusted names in premium commercial cleaning.
                </p>
                <p className="text-slate-400 leading-relaxed mt-4">
                  Over the past decade, we've expanded our service offerings to include not only routine and deep-clean solutions, but also specialty sanitization services tailored to executive offices, luxury retail spaces, healthcare facilities, and more.
                </p>
                <p className="text-slate-400 leading-relaxed mt-4">
                  Our team includes professionally trained cleaning specialists all carefully vetted, uniformed, and equipped with hospital-grade and eco-conscious products. Every member of our team upholds the same high standards Mary built the company on: respect for every space, consistency in every detail, and pride in every finish.
                </p>
                <p className="text-slate-400 leading-relaxed mt-4">
                  Today, Luxury 1 Living proudly serves clients throughout the Greater Houston area and surrounding suburbs, offering flexible service tiers and on-demand support for businesses that expect more than just a clean space but a unique luxury polished experience.
                </p>
              </div>
            </div>

            {/* Middle Column - Photo */}
            <div className="relative my-16 lg:my-auto">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-sky-400/20 to-emerald-400/20 border border-white/10 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-sky-400/20 border-2 border-sky-400/30 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <p className="text-sm font-medium text-white">Mary Allen</p>
                  <p className="text-xs text-slate-500">Founder & CEO</p>
                  <p className="text-xs text-slate-500 mt-2">Photo coming soon</p>
                </div>
              </div>
            </div>

            {/* Right Column - Founder Story */}
            <div className="space-y-6 pt-0">
              <div>
                <h4 className="text-xl font-semibold text-white tracking-tight mb-4">Meet the Founder</h4>
                <p className="text-slate-400 leading-relaxed">
                  Mary Allen, the founder of Luxury 1 Living, brings over two decades of hands-on experience in the commercial cleaning and hospitality industry. Known for her meticulous standards and deep respect for client spaces, Mary built her reputation one property at a time.
                </p>
                <p className="text-slate-400 leading-relaxed mt-4">
                  Her journey began [INSERT BACKGROUND — e.g., as a facility manager, in luxury hotels, or running her own small cleaning team], where she quickly realized that premium spaces require more than surface-level service. They demand a refined touch, complete discretion, and unwavering attention to detail.
                </p>
                <p className="text-slate-400 leading-relaxed mt-4">
                  Driven by a passion to raise the standard of commercial cleaning, she launched Luxury 1 Living to bridge the gap between utility and elegance. Today, Mary leads a growing team dedicated to delivering the kind of service she once dreamed of luxury, consistent, and effortlessly polished.
                </p>
                <p className="text-slate-400 leading-relaxed mt-4">
                  Her vision remains clear: to make luxury commercial cleaning the golden standard!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 