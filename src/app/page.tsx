'use client';
import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
} 