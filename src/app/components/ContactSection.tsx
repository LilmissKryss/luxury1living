'use client';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, AlertCircle } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bestTimeToCall: '',
    company: '',
    serviceType: '',
    facilitySize: '',
    serviceSchedule: '',
    serviceLocation: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const serviceAreas = [
    'Downtown',
    'Midtown',
    'The Medical Center',
    'Galleria / Uptown',
    'West Houston',
    'Sugar Land',
    'Katy',
    'Pearland',
    'Spring',
    'The Woodlands',
    'Conroe'
  ];

  return (
    <section
      id="contact"
      className="relative container mx-auto pt-16 pr-4 pb-16 pl-4 sm:px-6 sm:py-24 border-t border-white/5"
      style={{ minHeight: '100vh' }}
    >
      <div className="relative z-10">
        {/* Header */}
        <ScrollAnimation animationType="fade-in" delay={200}>
          <div className="text-center mb-16">
            <h3 className="text-sky-400 text-sm font-semibold uppercase tracking-wider animate-shimmer">Contact Us</h3>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mt-2">Get Your Free Quote Today</h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mt-6 max-w-3xl mx-auto">
              Ready to experience the luxury difference? Contact us for a personalized quote and let us transform your space with our premium cleaning services.
            </p>
          </div>
        </ScrollAnimation>
        {/* Main Cards Container */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8 items-stretch">
          {/* Left Card - Contact Form */}
          <ScrollAnimation animationType="slide-left" delay={400}>
            <div className="border border-white/20 rounded-2xl p-8 backdrop-blur-sm animate-card-hover h-full flex flex-col" style={{ backgroundColor: 'rgba(15, 23, 42, 0.85)' }}>
              <h4 className="text-xl font-semibold text-white mb-6">Request Your Quote</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-all duration-300 backdrop-blur-sm animate-input-focus"
                      style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-colors backdrop-blur-sm"
                      style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-colors backdrop-blur-sm"
                      style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="bestTimeToCall" className="block text-sm font-medium text-slate-300 mb-2">
                      Best Time to Call
                    </label>
                    <select
                      id="bestTimeToCall"
                      name="bestTimeToCall"
                      value={formData.bestTimeToCall}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-white/20 rounded-lg text-white focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-colors backdrop-blur-sm"
                      style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
                    >
                      <option value="">Select best time</option>
                      <option value="morning">Morning (8 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                      <option value="evening">Evening (4 PM - 8 PM)</option>
                      <option value="anytime">Anytime</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-colors backdrop-blur-sm"
                    style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
                    placeholder="Your company name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-slate-300 mb-2">
                      Service Type
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-white/20 rounded-lg text-white focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-colors backdrop-blur-sm"
                      style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
                    >
                      <option value="">Select service type</option>
                      <option value="office">Office Cleaning</option>
                      <option value="medical">Medical Facility</option>
                      <option value="retail">Retail Space</option>
                      <option value="industrial">Industrial</option>
                      <option value="residential">Residential</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="facilitySize" className="block text-sm font-medium text-slate-300 mb-2">
                      Facility Size
                    </label>
                    <select
                      id="facilitySize"
                      name="facilitySize"
                      value={formData.facilitySize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-white/20 rounded-lg text-white focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-colors backdrop-blur-sm"
                      style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
                    >
                      <option value="">Select size</option>
                      <option value="small">Small (Under 5,000 sq ft)</option>
                      <option value="medium">Medium (5,000 - 15,000 sq ft)</option>
                      <option value="large">Large (15,000 - 50,000 sq ft)</option>
                      <option value="xlarge">Extra Large (50,000+ sq ft)</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="serviceSchedule" className="block text-sm font-medium text-slate-300 mb-2">
                      Service Schedule
                    </label>
                    <select
                      id="serviceSchedule"
                      name="serviceSchedule"
                      value={formData.serviceSchedule}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-white/20 rounded-lg text-white focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-colors backdrop-blur-sm"
                      style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
                    >
                      <option value="">Select schedule</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="biweekly">Bi-weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="one-time">One-time</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="serviceLocation" className="block text-sm font-medium text-slate-300 mb-2">
                      Service Location
                    </label>
                    <input
                      type="text"
                      id="serviceLocation"
                      name="serviceLocation"
                      value={formData.serviceLocation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-colors backdrop-blur-sm"
                      style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
                      placeholder="City, State"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-colors backdrop-blur-sm resize-none"
                    style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
                    placeholder="Tell us about your specific cleaning needs, special requirements, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-cta-button-pulse"
                >
                  Get Free Quote
                </button>
              </form>
            </div>
          </ScrollAnimation>

          {/* Right Card - Contact Information */}
          <ScrollAnimation animationType="slide-right" delay={600}>
            <div className="border border-white/20 rounded-2xl p-8 backdrop-blur-sm animate-card-hover h-full flex flex-col" style={{ backgroundColor: 'rgba(15, 23, 42, 0.85)' }}>
              <h4 className="text-xl font-semibold text-white mb-6">Contact Information</h4>
              
              <div className="flex gap-6 h-full">
                {/* Contact Information - Left Side */}
                <div className="space-y-4 flex-1">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-sky-400/10 rounded-lg">
                    <Phone className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Office Phone</p>
                    <a 
                      href="tel:281-721-0766" 
                      className="text-slate-400 hover:text-sky-400 transition-colors cursor-pointer"
                    >
                      281-721-0766
                    </a>
                    <a 
                      href="tel:888-834-0284" 
                      className="block text-slate-400 hover:text-sky-400 transition-colors cursor-pointer"
                    >
                      Toll Free: 888-834-0284
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-400/10 rounded-lg">
                    <Mail className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a 
                      href="mailto:info@lxy1living.com" 
                      className="text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      info@lxy1living.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-400/10 rounded-lg">
                    <MapPin className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-slate-400">5900 Balcones Dr Ste 100</p>
                    <p className="text-slate-400">Austin, TX 78731</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-400/10 rounded-lg">
                    <Clock className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Business Hours</p>
                    <p className="text-slate-400">Monday – Friday: 8:00 AM – 6:00 PM</p>
                    <p className="text-slate-400">Saturday: 9:00 AM – 5:00 PM</p>
                    <p className="text-slate-400">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Emergency Contact</p>
                    <a 
                      href="tel:281-721-0766" 
                      className="text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
                    >
                      281-721-0766
                    </a>
                    <p className="text-slate-400 text-sm">Available 24/7 for urgent cleaning needs</p>
                  </div>
                </div>
              </div>
              
              {/* Contact Image - Right Side */}
              <div className="relative overflow-hidden rounded-xl w-80 h-full flex-shrink-0">
                <img 
                  src="/images/ourprocess.jpg" 
                  alt="Luxury 1 Living Contact" 
                  className="w-full h-full object-cover rounded-xl"
                  style={{ 
                    opacity: 0.8,
                    filter: 'brightness(0.9) contrast(1.1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent rounded-xl"></div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="space-y-4 mt-8">
                <h4 className="text-xl font-semibold text-white">Service Areas📍</h4>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2 text-slate-400">
                      <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                      <span className="text-sm">{area}</span>
                    </div>
                  ))}
                </div>
                
                {/* Service Area Reminder */}
                <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: 'rgba(244, 230, 186, 0.1)', border: '1px solid rgba(244, 230, 186, 0.2)' }}>
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg" style={{ backgroundColor: 'rgba(244, 230, 186, 0.2)' }}>
                      <Phone className="w-4 h-4" style={{ color: 'rgb(244, 230, 186)' }} />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1" style={{ color: 'rgb(244, 230, 186)' }}>Don't see your area listed?</p>
                      <p className="text-xs" style={{ color: 'rgba(244, 230, 186, 0.8)' }}>
                        Contact us we're always expanding our service territory to meet growing demand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
} 