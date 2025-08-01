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

function getSectionFromHash(hash: string) {
  if (!hash || hash === '#home') return 'home';
  return hash.replace('#', '');
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);

      // Scrollspy logic
      const sectionIds = navLinks.map(link => link.href.replace('#', ''));
      let found = 'home';
      for (let i = 0; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = sectionIds[i];
            break;
          }
        }
      }
      setCurrentSection(found);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10 shadow-lg' 
        : 'bg-transparent border-b border-white/5'
    }`}>
      <div className="flex items-center justify-between pt-4 pr-4 pb-4 pl-4 sm:px-6 relative z-20">
        <a href="#home" className="text-lg sm:text-xl font-semibold text-white tracking-tight hover:text-sky-300 transition-all duration-300 cursor-pointer animate-logo-glow">Luxury 1 Living</a>

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
              className={`text-sm text-slate-300 hover:text-white transition-all duration-300 animate-nav-hover ${
                currentSection === link.href.replace('#', '') ? 'border-b-2 border-sky-400 text-white' : ''
              } pb-1`}
              style={{
                transition: 'border-color 0.3s',
              }}
            >
              {link.label}
            </a>
          ))}
          <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-all duration-300 hover:scale-105">Sign Up</button>
          <button className="hover:bg-emerald-600 transition-all duration-300 text-sm font-semibold text-white bg-sky-400 rounded-lg pt-2 pr-4 pb-2 pl-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 hover:scale-105 animate-breathing-glow">Book Now</button>
        </nav>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav
            id="mobile-nav"
            ref={mobileNavRef}
            className="absolute top-16 inset-x-0 bg-slate-900/95 backdrop-blur-md border-b border-white/10 p-4 sm:hidden space-y-4 shadow-xl animate-fade-in z-30"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-slate-300 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm mb-2 transition-colors">Sign Up</button>
            <button className="w-full px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors">Book Now</button>
          </nav>
        )}
      </div>
    </header>
  );
} 