'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Menu, CalendarPlus, UserPlus } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#whyus', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Close mobile nav on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        menuBtnRef.current &&
        !menuBtnRef.current.contains(e.target as Node) &&
        mobileNavRef.current &&
        !mobileNavRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false);
      }
    }
    if (mobileOpen) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [mobileOpen]);

  return (
    <header className="flex items-center justify-between pt-4 pr-4 pb-4 pl-4 sm:px-6 border-b border-white/5 relative z-20">
      <h1 className="text-lg sm:text-xl font-semibold text-white tracking-tight">Luxury 1 Living</h1>

      {/* Mobile menu button */}
      <button
        id="menu-btn"
        aria-label="Menu"
        className="sm:hidden p-2 text-white"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((open) => !open)}
        ref={menuBtnRef}
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Desktop nav */}
      <nav className="hidden sm:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
        <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors">Sign Up</button>
        <button className="hover:bg-emerald-600 transition-colors text-sm font-semibold text-white bg-sky-400 rounded-lg pt-2 pr-4 pb-2 pl-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70">Book Now</button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          ref={mobileNavRef}
          className="absolute top-16 inset-x-0 bg-slate-900 border-b border-white/10 p-4 sm:hidden space-y-4 shadow-xl animate-fade-in z-30"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="w-full px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm mb-2">Sign Up</button>
          <button className="w-full px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold">Book Now</button>
        </nav>
      )}
    </header>
  );
} 