import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Send,
} from 'lucide-react';
import { COMPANY_CONFIG } from '../data/config';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    businessName: '',
    phoneNumber: '',
    email: '',
    serviceRequired: 'Business Analysis',
    budgetRange: '₹50,000 - ₹1,00,000 / mo',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const servicesOptions = [
    'Business Analysis',
    'Business Script Writing',
    'Business Podcast',
    'Video Production',
    'Website Development',
    'Instagram Growth',
    'Meta Ads',
    'Complete Marketing Solutions',
    'Brand Strategy',
    'Content Strategy',
  ];

  const budgetOptions = [
    '< ₹50,000 / mo',
    '₹50,000 - ₹1,00,000 / mo',
    '₹1,00,000 - ₹2,50,000 / mo',
    '₹2,50,000 - ₹5,00,000 / mo',
    '₹5,00,000+ / mo',
    'One-Time Project (₹1,00,000+)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const cleanNumber = COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    COMPANY_CONFIG.whatsappDefaultMessage
  )}`;

  return (
    <div id="contact-page" className="pt-28 pb-20 bg-[#050708]">
      {/* Hero Header */}
      <section className="py-16 md:py-20 border-b border-[#002D32]/50 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#002D32]/30 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#002D32]/80 border border-[#00E5D4]/40 text-[#00E5D4] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            <Sparkles size={13} />
            <span>START A PROJECT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[1.08]">
            LET'S BUILD
            <br />
            <span className="bg-gradient-to-r from-[#00D9A5] to-[#00E5D4] bg-clip-text text-transparent">
              SOMETHING GREAT.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-xl text-gray-300 font-normal">
            Have an idea, business or brand that needs to grow? Let's talk.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & WhatsApp Fast Track */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#050708] border border-[#002D32] space-y-6">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                Direct Contact Channels
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Prefer immediate response? Reach out directly to our leadership desk or start a chat on WhatsApp.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`tel:${COMPANY_CONFIG.phone}`}
                  className="flex items-center gap-3 text-sm text-gray-200 hover:text-[#00E5D4] transition-colors p-3 rounded-xl bg-[#002D32]/20 border border-[#002D32]"
                >
                  <Phone size={18} className="text-[#00D9A5] shrink-0" />
                  <span>{COMPANY_CONFIG.phone}</span>
                </a>

                <a
                  href={`mailto:${COMPANY_CONFIG.email}`}
                  className="flex items-center gap-3 text-sm text-gray-200 hover:text-[#00E5D4] transition-colors p-3 rounded-xl bg-[#002D32]/20 border border-[#002D32]"
                >
                  <Mail size={18} className="text-[#00D9A5] shrink-0" />
                  <span className="break-all">{COMPANY_CONFIG.email}</span>
                </a>

                <div className="flex items-center gap-3 text-sm text-gray-200 p-3 rounded-xl bg-[#002D32]/20 border border-[#002D32]">
                  <MapPin size={18} className="text-[#00D9A5] shrink-0" />
                  <span>{COMPANY_CONFIG.location}</span>
                </div>
              </div>

              {/* Fast-track WhatsApp CTA */}
              <div className="pt-4 border-t border-[#002D32]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#063C3A] to-[#002D32] hover:from-[#002D32] hover:to-[#00D9A5] text-white hover:text-[#050708] border border-[#00E5D4]/40 font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-lg hover:shadow-[#00E5D4]/20 keep-white"
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp Now</span>
                </a>
              </div>
            </div>

            {/* Credibility Box */}
            <div className="p-6 rounded-3xl bg-[#002D32]/20 border border-[#002D32]">
              <div className="text-xs font-bold uppercase tracking-widest text-[#00E5D4] mb-2">
                Turnaround Promise
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                We review all consultation inquiries within 24 business hours. If selected, our creative director prepares an initial strategic roadmap prior to our first call.
              </p>
            </div>
          </div>

          {/* Right Column: High-Conversion Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#050708] border border-[#002D32] shadow-2xl relative">
              {isSubmitted ? (
                <div
                  id="contact-success-state"
                  className="py-16 text-center space-y-4 animate-fade-in"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00D9A5]/20 border border-[#00E5D4] text-[#00E5D4] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Thanks! We'll get back to you shortly.
                  </h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    We have received your details. A Lycas Media Space strategy partner will reach out within 24 hours to schedule our discovery session.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        businessName: '',
                        phoneNumber: '',
                        email: '',
                        serviceRequired: 'Strategy',
                        budgetRange: '₹50,000 - ₹1,00,000 / mo',
                        message: '',
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-[#002D32] hover:bg-[#002D32]/80 text-[#00E5D4] text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="form-name" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        placeholder="e.g. Rahul Verma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#002D32]/30 border border-[#002D32] text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00E5D4] transition-colors"
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <label htmlFor="form-business" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Business Name *
                      </label>
                      <input
                        id="form-business"
                        type="text"
                        required
                        placeholder="e.g. Acme Brands"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#002D32]/30 border border-[#002D32] text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00E5D4] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div>
                      <label htmlFor="form-phone" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="form-phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#002D32]/30 border border-[#002D32] text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00E5D4] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="form-email" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        placeholder="rahul@acme.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#002D32]/30 border border-[#002D32] text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00E5D4] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Service Required Dropdown */}
                    <div>
                      <label htmlFor="form-service" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Service Required *
                      </label>
                      <select
                        id="form-service"
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#002D32]/60 border border-[#002D32] text-sm text-white focus:outline-none focus:border-[#00E5D4] transition-colors"
                      >
                        {servicesOptions.map((srv, idx) => (
                          <option key={idx} value={srv} className="bg-[#050708] text-white">
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget Range */}
                    <div>
                      <label htmlFor="form-budget" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Monthly Budget Range (INR ₹)
                      </label>
                      <select
                        id="form-budget"
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#002D32]/60 border border-[#002D32] text-sm text-white focus:outline-none focus:border-[#00E5D4] transition-colors"
                      >
                        {budgetOptions.map((opt, idx) => (
                          <option key={idx} value={opt} className="bg-[#050708] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="form-message" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Briefly describe your project or objectives
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      placeholder="Tell us about your brand, current challenges, timelines, or specific goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#002D32]/30 border border-[#002D32] text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00E5D4] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-contact-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#00D9A5] hover:bg-[#00E5D4] text-[#050708] font-extrabold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#00E5D4]/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Start the Conversation</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
