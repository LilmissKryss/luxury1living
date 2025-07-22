'use client';
import React, { useState } from 'react';

const services = [
  {
    id: 'corporate',
    title: 'Corporate Office Cleaning',
    image: '/images/office.jpg',
    description: 'Professional cleaning services for modern office environments, ensuring a pristine workspace that reflects your company\'s standards.',
    highlights: [
      'Daily maintenance and sanitization',
      'Conference room and common area cleaning',
      'Executive office detailing',
      'Cubicle and workstation sanitization',
      'Break room and kitchen area cleaning'
    ]
  },
  {
    id: 'government',
    title: 'Government Buildings',
    image: '/images/goverment.jpg',
    description: 'Specialized cleaning protocols for government facilities, meeting strict compliance standards and security requirements for all government buildings.',
    highlights: [
      'Security-sensitive area protocols',
      'Compliance with government standards',
      'Document handling areas',
      'Public access areas maintenance',
      'Emergency response cleaning'
    ]
  },
  {
    id: 'restaurant',
    title: 'Restaurant & Kitchen',
    image: '/images/restaurant.jpg',
    description: 'Deep cleaning and sanitization for commercial kitchens and dining areas, ensuring food safety and health code compliance for all restaurant facilities.',
    highlights: [
      'Commercial kitchen deep cleaning',
      'Hood and vent system cleaning',
      'Food prep area sanitization',
      'Dining room maintenance',
      'Health code compliance cleaning'
    ]
  },
  {
    id: 'bar',
    title: 'Bar & Lounge',
    image: '/images/bar.jpg',
    description: 'Specialized cleaning for hospitality venues, maintaining the sophisticated atmosphere your guests expect in all bar and lounge environments.',
    highlights: [
      'Bar counter and equipment cleaning',
      'Glassware and serving area sanitization',
      'Seating area maintenance',
      'Restroom facility cleaning',
      'Late-night cleaning services'
    ]
  },
  {
    id: 'education',
    title: 'School & Education Facilities',
    image: '/images/schools.jpg',
    description: 'Comprehensive cleaning solutions for educational institutions, creating safe and healthy learning environments for students and staff.',
    highlights: [
      'Classroom and lecture hall cleaning',
      'Laboratory and science room sanitization',
      'Administrative office maintenance',
      'Cafeteria and food service areas',
      'After-hours deep cleaning'
    ]
  },
  {
    id: 'daycare',
    title: 'Daycare & Child Care Facilities',
    image: '/images/daycare.jpg',
    description: 'Gentle yet thorough cleaning for child care environments, using child-safe products and protocols to ensure the safety of all children.',
    highlights: [
      'Child-safe cleaning products',
      'Play area and toy sanitization',
      'Napping area maintenance',
      'Bathroom and changing station cleaning',
      'Daily sanitization protocols'
    ]
  },
  {
    id: 'retail',
    title: 'Retail Store',
    image: '/images/retail.jpg',
    description: 'Retail space cleaning that enhances the shopping experience while maintaining brand presentation standards for all retail environments.',
    highlights: [
      'Sales floor maintenance',
      'Fitting room sanitization',
      'Display case and fixture cleaning',
      'Stock room organization',
      'Customer-facing area detailing'
    ]
  },
  {
    id: 'floor',
    title: 'Floor Cleaning',
    image: '/images/floor.jpg',
    description: 'Specialized floor care services for all types of commercial flooring, from carpet to hard surfaces, ensuring long-lasting beauty and durability.',
    highlights: [
      'Carpet deep cleaning and extraction',
      'Hard floor stripping and waxing',
      'Tile and grout cleaning',
      'Stone floor restoration',
      'Preventive maintenance programs'
    ]
  },
  {
    id: 'powerwash',
    title: 'Power Washing',
    image: '/images/powerwash.jpg',
    description: 'Exterior cleaning services using professional-grade equipment for building exteriors and hard surfaces to maintain curb appeal.',
    highlights: [
      'Building exterior cleaning',
      'Sidewalk and walkway cleaning',
      'Parking garage maintenance',
      'Equipment and machinery cleaning',
      'Graffiti removal services'
    ]
  },
  {
    id: 'banquet',
    title: 'Banquet Halls & Event Spaces',
    image: '/images/banquet.jpg',
    description: 'Comprehensive cleaning services for event venues, ensuring every space is immaculate for your special occasions and all event facilities.',
    highlights: [
      'Pre and post-event cleaning',
      'Ballroom and reception area maintenance',
      'Kitchen and catering area sanitization',
      'Restroom and dressing room cleaning',
      'Emergency cleaning for last-minute events'
    ]
  }
];

const serviceCategories = [
  { id: 'all', label: 'All Services' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'hospitality', label: 'Hospitality' },
  { id: 'education', label: 'Education' },
  { id: 'specialty', label: 'Specialty' }
];

const getCategoryForService = (serviceId: string) => {
  const commercialServices = ['corporate', 'government', 'retail'];
  const hospitalityServices = ['restaurant', 'bar', 'banquet'];
  const educationServices = ['education', 'daycare'];
  const specialtyServices = ['floor', 'powerwash'];

  if (commercialServices.includes(serviceId)) return 'commercial';
  if (hospitalityServices.includes(serviceId)) return 'hospitality';
  if (educationServices.includes(serviceId)) return 'education';
  if (specialtyServices.includes(serviceId)) return 'specialty';
  return 'all';
};

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => getCategoryForService(service.id) === activeCategory);

  return (
    <section id="services" className="container mx-auto pt-16 pr-4 pb-16 pl-4 sm:px-6 sm:py-24 border-t border-white/5">
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-sky-400 text-sm font-semibold uppercase tracking-wider">Our Services</h3>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Tailored Cleaning Solutions</h2>
        </div>
        <div className="text-left space-y-4">
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            At Luxury 1 Living, we believe a clean space is a reflection of your brand's excellence. That's why we offer luxury premium commercial cleaning solutions tailored to meet the unique needs of businesses across every industry. From office buildings and medical facilities to retail spaces and restaurants, our expertly trained team delivers meticulous results using eco-conscious products and modern cleaning techniques.  Whether you're looking for daily maintenance, deep cleaning, or specialty services, we're here to elevate your environment so you can focus on what matters most.Whether you're looking for daily maintenance, deep cleaning, or specialty services, we're here to elevate your environment so you can focus on what matters most.
          </p>
        </div>
      </div>

      {/* Service Category Tabs */}
      <div className="mt-16 flex flex-wrap justify-center gap-2">
        {serviceCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeCategory === category.id
                ? 'bg-sky-400 text-white shadow-lg shadow-sky-400/25'
                : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <article key={service.id} className="group bg-slate-900/50 rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/30 hover:shadow-xl hover:shadow-sky-400/10">
            {/* Service Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>

            {/* Service Content */}
            <div className="p-6 space-y-4">
              <h4 className="text-xl font-semibold text-white tracking-tight group-hover:text-sky-400 transition-colors">
                {service.title}
              </h4>
              
              <p className="text-sm text-slate-400 leading-relaxed">
                {service.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                <h5 className="text-sm font-medium text-sky-400">Key Features:</h5>
                <ul className="space-y-1">
                  {service.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-sky-400 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a 
                href="#contact" 
                className="block w-full mt-4 px-4 py-2 bg-sky-400/10 text-sky-400 rounded-lg text-sm font-medium hover:bg-sky-400 hover:text-white transition-all duration-200 border border-sky-400/20 hover:border-sky-400 text-center"
              >
                Request This Service
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* No Services Message */}
      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-400">No services found in this category.</p>
        </div>
      )}

      {/* Our Process Section */}
      <div className="mt-24 border-t border-white/5 pt-16">
        <div className="text-center mb-12">
          <h3 className="text-sky-400 text-sm font-semibold uppercase tracking-wider">Our Process</h3>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mt-2">From First Call to Final Clean</h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed mt-6 max-w-4xl mx-auto">
            At Luxury 1 Living, we make it easy to get the premium cleaning your space deserves. Whether you're requesting a one-time service or recurring maintenance, our streamlined process ensures clear communication, reliable scheduling, and sparkling results without the stress. From the first message to the final wipe-down, we're here to make every step as effortless as one, two, three.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center space-y-4">
            <div className="relative">
              <div className="w-16 h-16 mx-auto rounded-full bg-sky-400/10 border-2 border-sky-400/30 flex items-center justify-center text-2xl font-bold text-sky-400">
                1
              </div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-sky-400/30 to-transparent"></div>
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-white">Request Your Service</h4>
              <p className="text-slate-400 leading-relaxed">
                Start by selecting the cleaning service that fits your needs. Submit a quick form and we'll reach out to gather a few more details about your facility.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-center space-y-4">
            <div className="relative">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-400/10 border-2 border-emerald-400/30 flex items-center justify-center text-2xl font-bold text-emerald-400">
                2
              </div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-emerald-400/30 to-transparent"></div>
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-white">Schedule a Walkthrough & Get Your Quote</h4>
              <p className="text-slate-400 leading-relaxed">
                We'll arrange a site visit (or virtual consultation) to better understand your space and goals. You'll receive a tailored quote with clear pricing and a proposed cleaning plan.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center space-y-4">
            <div className="relative">
              <div className="w-16 h-16 mx-auto rounded-full bg-purple-400/10 border-2 border-purple-400/30 flex items-center justify-center text-2xl font-bold text-purple-400">
                3
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-white">Enjoy a Spotless Space</h4>
              <p className="text-slate-400 leading-relaxed">
                Once approved, our professional cleaning team arrives fully equipped and ready to work. We'll leave your space looking flawless and follow up to ensure you're 100% satisfied.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 