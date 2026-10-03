import React from 'react';
import { Instagram, Youtube, Linkedin, Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_CONFIG } from '../data/config';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const cleanNumber = COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    COMPANY_CONFIG.whatsappDefaultMessage
  )}`;

  return (
    <footer id="lycas-footer" className="bg-[#050708] border-t border-[#002D32] pt-16 pb-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#002D32] to-[#00D9A5] p-0.5">
                <div className="w-full h-full bg-[#050708] rounded-[10px] flex items-center justify-center">
                  <span className="font-black text-lg text-[#00E5D4]">L</span>
                </div>
              </div>
              <div>
                <span className="block text-lg font-extrabold text-white tracking-tight uppercase leading-none">
                  LYCAS
                </span>
                <span className="block text-[10px] font-semibold tracking-[0.25em] text-[#00E5D4] uppercase mt-0.5">
                  MEDIA SPACE
                </span>
              </div>
            </div>

            <p className="text-xl font-bold text-white mb-2 font-sans tracking-tight">
              “{COMPANY_CONFIG.tagline}”
            </p>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm mb-6">
              A creative media and digital growth agency helping ambitious businesses build stronger brands through storytelling, studio podcasts, high-retention video, and high-performance websites.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={COMPANY_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#002D32]/60 border border-[#002D32] flex items-center justify-center text-gray-300 hover:text-[#00E5D4] hover:border-[#00E5D4] transition-all"
                aria-label="Instagram"
              >
                <Instagram size={17} />
              </a>
              <a
                href={COMPANY_CONFIG.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#002D32]/60 border border-[#002D32] flex items-center justify-center text-gray-300 hover:text-[#00E5D4] hover:border-[#00E5D4] transition-all"
                aria-label="YouTube"
              >
                <Youtube size={17} />
              </a>
              <a
                href={COMPANY_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#002D32]/60 border border-[#002D32] flex items-center justify-center text-gray-300 hover:text-[#00E5D4] hover:border-[#00E5D4] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#00E5D4] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#00E5D4] transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#00E5D4] transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('work')} className="hover:text-[#00E5D4] transition-colors">
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      const el = document.getElementById('reviews');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#00E5D4] transition-colors"
                >
                  Client Reviews
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('podcast')} className="hover:text-[#00E5D4] transition-colors">
                  Podcast
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-[#00E5D4] transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#00E5D4] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#00E5D4] transition-colors">
                  Business Analysis
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#00E5D4] transition-colors">
                  Business Script Writing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#00E5D4] transition-colors">
                  Business Podcast
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#00E5D4] transition-colors">
                  Video Production
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#00E5D4] transition-colors">
                  Website Development
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#00E5D4] transition-colors">
                  Instagram Growth
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#00E5D4] transition-colors">
                  Meta Ads
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#00E5D4] transition-colors">
                  Complete Marketing
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="text-[#00E5D4] shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_CONFIG.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="text-[#00E5D4] shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-white transition-colors break-all">
                  {COMPANY_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle size={15} className="text-[#00E5D4] shrink-0 mt-0.5" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {COMPANY_CONFIG.whatsappNumber}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#00E5D4] shrink-0 mt-0.5" />
                <span>{COMPANY_CONFIG.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-[#002D32]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>© 2026 Lycas Media Space. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span className="text-gray-400">Turning Businesses Into Brands</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D9A5]" />
            <span className="text-[#00E5D4]">High-Converting Media Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
