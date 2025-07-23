'use client';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    // Handle form submission logic here
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
    <section id="contact" className="container mx-auto pt-16 pr-4 pb-16 pl-4 sm:px-6 sm:py-24 border-t border-white/5">
      {/* Header */}
      <div className="text-center mb-16">
        <h3 className="text-sky-400 text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mt-2">Get Your Free Quote Today</h2>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed mt-6 max-w-3xl mx-auto">
          Ready to experience the luxury difference? Contact us for a personalized quote and let us transform your space with our premium cleaning services.
        </p>
      </div>

      {/* Main Cards Container */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Left Card - Contact Form */}
        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8">
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
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-colors"
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
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-colors"
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
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-colors"
                  placeholder="(555) 123-4567"
                />
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
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-colors"
                  placeholder="Your company name"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-slate-300 mb-2">
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="corporate">Corporate Office Cleaning</option>
                  <option value="government">Government Buildings</option>
                  <option value="restaurant">Restaurant & Kitchen</option>
                  <option value="bar">Bar & Lounge</option>
                  <option value="education">School & Education Facilities</option>
                  <option value="daycare">Daycare & Child Care Facilities</option>
                  <option value="retail">Retail Store</option>
                  <option value="banquet">Banquet Halls & Event Spaces</option>
                  <option value="floor">Floor Cleaning</option>
                  <option value="powerwash">Power Washing</option>
                  <option value="emergency">Emergency Services</option>
                </select>
              </div>
              <div>
                <label htmlFor="facilitySize" className="block text-sm font-medium text-slate-300 mb-2">
                  Size of Facility (Sq Ft) *
                </label>
                <input
                  type="text"
                  id="facilitySize"
                  name="facilitySize"
                  value={formData.facilitySize}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-colors"
                  placeholder="e.g., 5,000 sq ft"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="serviceSchedule" className="block text-sm font-medium text-slate-300 mb-2">
                  Service Schedule *
                </label>
                <select
                  id="serviceSchedule"
                  name="serviceSchedule"
                  value={formData.serviceSchedule}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-colors"
                >
                  <option value="">Select schedule</option>
                  <option value="one-time">One-time service</option>
                  <option value="weekly">Weekly</option>
                  <option value="bi-weekly">Bi-weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="custom">Custom schedule</option>
                </select>
              </div>
              <div>
                <label htmlFor="serviceLocation" className="block text-sm font-medium text-slate-300 mb-2">
                  Service Location *
                </label>
                <select
                  id="serviceLocation"
                  name="serviceLocation"
                  value={formData.serviceLocation}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-colors"
                >
                  <option value="">Select location</option>
                  <option value="downtown">Downtown Houston</option>
                  <option value="midtown">Midtown</option>
                  <option value="medical-center">The Medical Center</option>
                  <option value="galleria">Galleria / Uptown</option>
                  <option value="west-houston">West Houston</option>
                  <option value="sugar-land">Sugar Land</option>
                  <option value="katy">Katy</option>
                  <option value="pearland">Pearland</option>
                  <option value="spring">Spring</option>
                  <option value="woodlands">The Woodlands</option>
                  <option value="conroe">Conroe</option>
                  <option value="other">Other</option>
                </select>

              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Additional Notes or Special Requests
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-colors resize-none"
                placeholder="Tell us about any special requirements, specific areas that need attention, or any other details that will help us provide the best quote..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-sky-400 hover:bg-emerald-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400/70"
            >
              Get Free Quote
            </button>
          </form>
        </div>

        {/* Right Card - Contact Information & Map */}
        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 flex flex-col">
          {/* Contact Information */}
          <div className="space-y-6 mb-8">
            <h4 className="text-xl font-semibold text-white">Contact Information</h4>
            
            <div className="space-y-4">
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
            </div>
          </div>

          {/* Service Areas */}
          <div className="space-y-4 mb-8">
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
                  <p className="text-sm font-medium mb-1" style={{ color: 'rgb(244, 230, 186)' }}>Don't see your area?</p>
                  <p className="text-xs" style={{ color: 'rgba(244, 230, 186, 0.8)' }}>
                    Give us a call at{' '}
                    <a href="tel:281-721-0766" className="font-medium hover:opacity-80 transition-opacity" style={{ color: 'rgb(244, 230, 186)' }}>
                      281-721-0766
                    </a>
                    {' '}to discuss service availability in your location.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="flex-1">
            <div className="bg-slate-800/50 border border-white/10 rounded-xl overflow-hidden h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.1234567890123!2d-97.7431!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2s5900%20Balcones%20Dr%20%23100%2C%20Austin%2C%20TX%2078731!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '200px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Luxury 1 Living Office Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Card - Below both cards */}
      <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-red-500/20 rounded-lg">
            <AlertCircle className="w-5 h-5 text-red-400" />
          </div>
          <h4 className="text-lg font-semibold text-white">Emergency Contact</h4>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <Phone className="w-4 h-4 text-red-400" />
          <a 
            href="tel:281-721-0766" 
            className="text-white font-medium text-lg hover:text-red-300 transition-colors cursor-pointer"
          >
            281-721-0766
          </a>
        </div>
        <p className="text-slate-400">
          Available 24/7 for urgent cleaning needs
        </p>
      </div>
    </section>
  );
} 