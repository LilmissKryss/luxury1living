'use client';
import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BubbleAnimation from './components/BubbleAnimation';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 relative">
      <BubbleAnimation />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <CTASection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
} 