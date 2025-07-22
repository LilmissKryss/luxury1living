'use client';
import React from 'react';
import { Clock, Leaf, Building2, Heart, Users, Star } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section id="whyus" className="container mx-auto pt-16 pr-4 pb-16 pl-4 sm:px-6 sm:py-24">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-sky-400" />
          <h3 className="text-sky-400 text-sm font-semibold uppercase tracking-wider">Why Choose Us</h3>
          <Star className="w-5 h-5 text-sky-400" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Why Choose Luxury 1 Living</h2>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
          Your space deserves more than just clean it deserves consistent care, trusted people, and a luxury level experience. At Luxury 1 Living, we're not just another cleaning company. We're a locally owned, woman led team dedicated to raising the standard for commercial cleaning.<br />
          Here's what sets us apart:
        </p>
      </div>

      {/* Main Content - Modern Grid Layout */}
      <div className="mt-16">
        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Reliability Card */}
          <div className="group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-sky-400/5 to-emerald-400/5 transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/30 hover:shadow-xl hover:shadow-sky-400/10">
            <div className="absolute top-6 right-6">
              <div className="w-12 h-12 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6 text-sky-400" />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white tracking-tight pr-16">Reliability & Consistency</h4>
              <p className="text-slate-400 leading-relaxed">
                We show up on time, every time and deliver the same high standard of cleanliness you can count on, day in and day out.
              </p>
            </div>
          </div>

          {/* Eco-Friendly Card */}
          <div className="group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-400/5 to-purple-400/5 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/30 hover:shadow-xl hover:shadow-emerald-400/10">
            <div className="absolute top-6 right-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Leaf className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white tracking-tight pr-16">Eco-Friendly Products</h4>
              <p className="text-slate-400 leading-relaxed">
                We use environmentally safe, non-toxic products that protect your surfaces, your people, and the planet.
              </p>
            </div>
          </div>

          {/* Industry Expertise Card */}
          <div className="group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-400/5 to-sky-400/5 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/30 hover:shadow-xl hover:shadow-purple-400/10">
            <div className="absolute top-6 right-6">
              <div className="w-12 h-12 rounded-xl bg-purple-400/10 border border-purple-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white tracking-tight pr-16">Industry-Specific Expertise</h4>
              <p className="text-slate-400 leading-relaxed">
                From medical facilities and restaurants to offices and retail, our team is trained to meet the exact standards of your industry.
              </p>
            </div>
          </div>

          {/* Woman Owned Card */}
          <div className="group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-pink-400/5 to-sky-400/5 transition-all duration-300 hover:-translate-y-2 hover:border-pink-400/30 hover:shadow-xl hover:shadow-pink-400/10">
            <div className="absolute top-6 right-6">
              <div className="w-12 h-12 rounded-xl bg-pink-400/10 border border-pink-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 text-pink-400" />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white tracking-tight pr-16">Woman Owned Business</h4>
              <p className="text-slate-400 leading-relaxed">
                Proudly rooted in the community we serve, Luxury 1 Living brings a personal touch, local accountability, and a passion for excellence.
              </p>
            </div>
          </div>

          {/* Elite Staff Card */}
          <div className="group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-amber-400/5 to-orange-400/5 transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/30 hover:shadow-xl hover:shadow-amber-400/10">
            <div className="absolute top-6 right-6">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-amber-400" />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white tracking-tight pr-16">Elite Staff</h4>
              <p className="text-slate-400 leading-relaxed">
                Every member of our crew is professionally trained, thoroughly vetted, and committed to respecting your space with care and discretion.
              </p>
            </div>
          </div>

          {/* Flexible Scheduling Card */}
          <div className="group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-400/5 to-slate-600/5 transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/30 hover:shadow-xl hover:shadow-sky-400/10">
            <div className="absolute top-6 right-6">
              <div className="w-12 h-12 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6 text-sky-400" />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white tracking-tight pr-16">Flexible Scheduling</h4>
              <p className="text-slate-400 leading-relaxed">
                We adapt to your hours, not the other way around. Whether you need day, evening, or weekend service, we'll build a cleaning schedule that fits your workflow with minimal disruption.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
            <div className="text-3xl font-bold text-sky-400 mb-2">100%</div>
            <div className="text-sm text-slate-400">On-Time Reliability</div>
          </div>
          <div className="text-center p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
            <div className="text-3xl font-bold text-emerald-400 mb-2">Eco</div>
            <div className="text-sm text-slate-400">Friendly Products</div>
          </div>
          <div className="text-center p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
            <div className="text-3xl font-bold text-pink-400 mb-2">Woman Owned</div>
            <div className="text-sm text-slate-400">Ownership</div>
          </div>
        </div>
      </div>
    </section>
  );
} 