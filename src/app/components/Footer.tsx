'use client';
import React from 'react';
import { Phone, Mail, MapPin, Clock, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const serviceAreas = [
    'Downtown Houston',
    'Midtown',
    'Medical Center',
    'Galleria / Uptown',
    'West Houston',
    'Sugar Land',
    'Katy',
    'Pearland',
    'Spring',
    'The Woodlands',
    'Conroe'
  ];

  const services = [
    'Corporate Office Cleaning',
    'Government Buildings',
    'Restaurant & Kitchen',
    'Bar & Lounge',
    'School & Education',
    'Daycare & Child Care',
    'Retail Store',
    'Banquet Halls',
    'Floor Cleaning',
    'Power Washing'
  ];

  return (
    <footer className="bg-slate-900/50 border-t border-white/5 pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12 mb-12">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight text-white">Luxury 1 Living</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
            Luxury premium commercial cleaning services
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="p-2 rounded-lg bg-sky-400/10 hover:bg-sky-400/20 text-sky-400 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-lg bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-400 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-purple-400/10 hover:bg-purple-400/20 text-purple-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:info@lxy1living.com" aria-label="Email" className="p-2 rounded-lg bg-orange-400/10 hover:bg-orange-400/20 text-orange-400 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-tight">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#home" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">
                Home
              </a>
              <a href="#about" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">
                About
              </a>
              <a href="#services" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">
                Services
              </a>
              <a href="#whyus" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">
                Why Choose Us
              </a>
              <a href="#contact" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">
                Contact
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-tight">Our Services</h4>
            <nav className="flex flex-col gap-2">
              {services.slice(0, 6).map((service, index) => (
                <a 
                  key={index} 
                  href="#services" 
                  className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                >
                  {service}
                </a>
              ))}
              <a 
                href="#services" 
                className="text-sky-400 hover:text-sky-300 transition-colors text-sm font-medium"
              >
                View All Services →
              </a>
            </nav>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-tight">Service Areas</h4>
            <div className="grid grid-cols-1 gap-2">
              {serviceAreas.slice(0, 6).map((area, index) => (
                <span key={index} className="text-slate-400 text-sm">
                  {area}
                </span>
              ))}
              <span className="text-sky-400 text-sm font-medium">
                And surrounding areas
              </span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-tight">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-sky-400 mt-0.5" />
                <div>
                  <a 
                    href="tel:281-721-0766" 
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm block"
                  >
                    281-721-0766
                  </a>
                  <a 
                    href="tel:888-834-0284" 
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm block"
                  >
                    Toll Free: 888-834-0284
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-emerald-400 mt-0.5" />
                <a 
                  href="mailto:info@lxy1living.com" 
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  info@lxy1living.com
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-purple-400 mt-0.5" />
                <div className="text-slate-400 text-sm">
                  <div>5900 Balcones Dr Ste 100</div>
                  <div>Austin, TX 78731</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-orange-400 mt-0.5" />
                <div className="text-slate-400 text-sm">
                  <div>Mon-Fri: 8AM-6PM</div>
                  <div>Sat: 9AM-5PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © 2025 Luxury 1 Living. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 