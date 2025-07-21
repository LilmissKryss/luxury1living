'use client';
import React from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-12 px-4 sm:px-6 text-sm text-slate-400">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Company / blurb */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold tracking-tight text-white">Luxury 1 Living</h3>
          <p className="leading-relaxed">Pure luxury cleaning solutions for businesses &amp; residential spaces.</p>
        </div>
        {/* Navigation */}
        <div className="space-y-2">
          <h4 className="font-medium text-white tracking-tight mb-2">Company</h4>
          <nav className="flex flex-col gap-2">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#whyus" className="hover:text-white">Why&nbsp;Us</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
        {/* Social / contact */}
        <div className="space-y-3">
          <h4 className="font-medium text-white tracking-tight mb-2">Stay Connected</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-slate-300">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-slate-300">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:info@luxury1living.com" aria-label="Email" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-slate-300">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-white/5 pt-4 text-center">
        © 2024 Luxury 1 Living. All rights reserved.
      </div>
    </footer>
  );
} 