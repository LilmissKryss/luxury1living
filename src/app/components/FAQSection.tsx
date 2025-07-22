'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "What areas do you serve?",
    answer: "We serve Greater Houston and surrounding areas including Downtown, Midtown, The Medical Center, Galleria/Uptown, West Houston, Sugar Land, Katy, Pearland, Spring, The Woodlands, and Conroe. We're happy to discuss service availability for your specific location."
  },
  {
    id: 2,
    question: "What types of businesses do you clean?",
    answer: "We specialize in commercial cleaning for a wide range of businesses including corporate offices, government buildings, restaurants and kitchens, bars and lounges, schools and educational facilities, daycare centers, retail stores, banquet halls, and event spaces. We also provide specialized services like floor cleaning and power washing."
  },
  {
    id: 3,
    question: "How do you handle scheduling and flexibility?",
    answer: "We offer flexible scheduling to minimize disruption to your business operations. We can work during business hours, after hours, or on weekends depending on your needs. We adapt to your schedule, not the other way around, and can accommodate one-time services, weekly, bi-weekly, or monthly cleaning schedules."
  },
  {
    id: 4,
    question: "What cleaning products do you use?",
    answer: "We use environmentally safe, non-toxic cleaning products that protect your surfaces, your people, and the planet. Our products are effective yet gentle, meeting industry standards while being eco-conscious. We can also accommodate specific product requests if your facility has particular requirements."
  },
  {
    id: 5,
    question: "Are your staff members insured and background checked?",
    answer: "Yes, all our cleaning staff are thoroughly vetted, professionally trained, and fully insured. We conduct comprehensive background checks and provide ongoing training to ensure the highest standards of service and security. Your facility and team's safety is our top priority."
  },
  {
    id: 6,
    question: "How do you handle emergency cleaning needs?",
    answer: "We offer 24/7 emergency cleaning services for urgent situations. You can reach our emergency line at 281-721-0766 anytime. Whether it's a spill, accident, or unexpected cleaning need, our team is ready to respond quickly to help maintain your facility's standards."
  },
  {
    id: 7,
    question: "What's included in your cleaning services?",
    answer: "Our services include comprehensive cleaning of all surfaces, sanitization, dusting, vacuuming, mopping, restroom cleaning, kitchen area maintenance, and specialized cleaning based on your facility type. We also provide detailed cleaning plans tailored to your specific needs and can customize our services to meet your requirements."
  },
  {
    id: 8,
    question: "How do you ensure quality control?",
    answer: "We maintain strict quality control through regular inspections, detailed checklists, and follow-up communication. Our team leaders conduct quality checks, and we welcome your feedback to ensure we're meeting your expectations. We're committed to delivering consistent, high-quality results every time."
  }
];

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faq" className="container mx-auto pt-16 pr-4 pb-16 pl-4 sm:px-6 sm:py-24 border-t border-white/5">
      {/* Header */}
      <div className="text-center mb-16">
        <h3 className="text-sky-400 text-sm font-semibold uppercase tracking-wider">FAQ</h3>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mt-2">Frequently Asked Questions</h2>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed mt-6 max-w-3xl mx-auto">
          Get answers to common questions about our luxury commercial cleaning services. Can't find what you're looking for? 
          <a href="#contact" className="text-sky-400 hover:text-sky-300 transition-colors ml-1">Contact us directly</a> for personalized assistance.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-slate-900/50 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-sky-400/30"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50"
              >
                <h4 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h4>
                <div className="flex-shrink-0">
                  {openFaq === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-sky-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-br from-sky-400/10 to-emerald-400/10 border border-sky-400/20 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Our team is here to help you find the perfect cleaning solution for your facility. 
            Get in touch for a personalized consultation and quote.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-semibold bg-sky-400 hover:bg-emerald-600 text-white rounded-lg px-6 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
} 