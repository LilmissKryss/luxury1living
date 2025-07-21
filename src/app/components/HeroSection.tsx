'use client';
import React from 'react';
import { CalendarPlus, UserPlus } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="container grid lg:grid-cols-2 gap-12 lg:gap-20 mx-auto pt-16 pr-4 pb-16 pl-4 sm:px-6 sm:py-24">
      <div className="space-y-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
          Pure Luxury,<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-teal-400 to-blue-500">Perfectly Cleaned</span>
        </h2>
        <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-400">
          Premium commercial cleaning services that consistently exceed expectations, with meticulous attention to detail, creating spotless and welcoming spaces.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex gap-2 items-center font-semibold bg-sky-400 hover:bg-emerald-600 text-white rounded-lg pt-3 pr-6 pb-3 pl-6 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70">
            <CalendarPlus className="w-4 h-4" /> Book&nbsp;Now
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
            <UserPlus className="w-4 h-4" /> Sign&nbsp;Up
          </button>
        </div>
      </div>
      <div className="relative group">
        <img
          src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80"
          alt="Luxurious living room"
          className="w-full h-72 sm:h-[26rem] lg:h-full object-cover rounded-3xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span className="absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-950/50 to-slate-950/0 pointer-events-none"></span>
      </div>
    </section>
  );
} 