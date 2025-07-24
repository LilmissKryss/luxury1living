'use client';
import React from 'react';
import { MessageSquare, UserPlus } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="container grid lg:grid-cols-2 gap-12 lg:gap-20 mx-auto pt-16 pr-4 pb-16 pl-4 sm:px-6 sm:py-24 relative overflow-hidden">
      {/* Decorative Bubbles - Corner and Edge Placement */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Corner */}
        <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-sky-400/20 to-emerald-400/20 rounded-full blur-sm animate-pulse"></div>
        
        {/* Top Right Corner */}
        <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-emerald-400/15 to-teal-400/15 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Bottom Left Corner */}
        <div className="absolute bottom-6 left-6 w-14 h-14 bg-gradient-to-br from-sky-400/25 to-blue-400/25 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Bottom Right Corner */}
        <div className="absolute bottom-4 right-4 w-10 h-10 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        
        {/* Left Edge - Middle */}
        <div className="absolute top-1/2 -left-2 w-8 h-8 bg-gradient-to-br from-teal-400/15 to-blue-400/15 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Right Edge - Middle */}
        <div className="absolute top-1/2 -right-2 w-8 h-8 bg-gradient-to-br from-sky-300/20 to-emerald-300/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Top Edge - Middle */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-400/30 to-sky-400/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        
        {/* Bottom Edge - Middle */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.7s' }}></div>
      </div>
      <div className="space-y-8 lg:pt-20 pl-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
          Pure Luxury,<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-teal-400 to-blue-500">Perfectly Cleaned</span>
        </h2>
        <p className="max-w-xl text-lg sm:text-xl font-medium leading-tight text-slate-300 tracking-wide" style={{ fontFamily: 'Bitcount Prop Double, monospace', letterSpacing: '0.02em' }}>
          Luxury premium commercial cleaning services crafted for businesses that expect flawless attention to detail, discreet professionalism, and a polished finish that speaks volumes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#contact" 
            className="flex gap-2 items-center font-semibold bg-sky-400 hover:bg-emerald-600 text-white rounded-lg pt-3 pr-6 pb-3 pl-6 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
          >
            <MessageSquare className="w-4 h-4" /> Get a Quote
          </a>
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
            <UserPlus className="w-4 h-4" /> Sign Up
          </button>
        </div>
        <div className="mt-12 text-center">
          <blockquote className="text-lg sm:text-xl font-medium text-sky-300 tracking-wide italic relative" style={{ fontFamily: 'Lexend, sans-serif', letterSpacing: '0.05em' }}>
            "Serving Greater Houston<br />
            and surrounding areas"

          </blockquote>
        </div>
      </div>
      <div className="relative group p-4">
        <img
          src="/images/hero.png"
          alt="Luxury 1 Living commercial cleaning services"
          className="w-4/5 mx-auto h-72 sm:h-[26rem] lg:h-full object-cover rounded-3xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span className="absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-950/50 to-slate-950/0 pointer-events-none"></span>
      </div>
    </section>
  );
} 