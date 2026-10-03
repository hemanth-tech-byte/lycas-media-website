import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import { SERVICES_DATA } from '../data/services';
import { COMPANY_CONFIG } from '../data/config';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string; hasDropdown?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'work', label: 'Our Work' },
    { id: 'podcast', label: 'Podcast' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      id="lycas-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050708]/90 backdrop-blur-xl border-b border-[#002D32]/60 py-3.5 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="brand-logo-btn"
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#002D32] via-[#063C3A] to-[#00D9A5] p-0.5 shadow-md shadow-[#00D9A5]/20 group-hover:shadow-[#00E5D4]/40 transition-all">
            <div className="w-full h-full bg-[#050708] rounded-[10px] flex items-center justify-center">
              <span className="font-black text-lg tracking-tighter bg-gradient-to-r from-white via-white to-[#00E5D4] bg-clip-text text-transparent">
                L
              </span>
            </div>
          </div>
          <div>
            <span className="block text-base font-extrabold tracking-tight text-white uppercase leading-none">
              LYCAS
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.25em] text-[#00E5D4] uppercase mt-0.5">
              MEDIA SPACE
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((item) => {
            const isActive = currentPage === item.id;

            if (item.hasDropdown) {
              return (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    onClick={() => onNavigate('services')}
                    className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-full transition-all ${
                      isActive
                        ? 'text-[#00E5D4] bg-[#002D32]/50'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180 text-[#00E5D4]' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div
                      id="services-dropdown"
                      className="absolute top-full left-0 mt-1.5 w-72 p-2 bg-[#050708]/95 backdrop-blur-2xl border border-[#002D32] rounded-2xl shadow-2xl shadow-black/80 animate-fade-in"
                    >
                      <div className="text-[10px] uppercase font-bold text-[#00D9A5] px-3 py-1.5 tracking-wider border-b border-[#002D32]/50 mb-1">
                        Our Capabilities
                      </div>
                      <div className="space-y-0.5 max-h-96 overflow-y-auto pr-1">
                        {SERVICES_DATA.map((srv) => (
                          <button
                            key={srv.id}
                            onClick={() => {
                              onNavigate('services', srv.id);
                              setServicesDropdownOpen(false);
                            }}
                            className="w-full flex items-center justify-between px-3 py-2 text-left text-xs font-medium text-gray-300 hover:text-white hover:bg-[#002D32]/60 rounded-xl transition-all group/item"
                          >
                            <span>{srv.title}</span>
                            <ArrowRight
                              size={12}
                              className="text-gray-500 group-hover/item:text-[#00E5D4] group-hover/item:translate-x-0.5 transition-all"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all ${
                  isActive
                    ? 'text-[#00E5D4] bg-[#002D32]/60 border border-[#00E5D4]/30 shadow-sm shadow-[#00E5D4]/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action CTA & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <div className="hidden sm:flex items-center">
            <button
              id="nav-cta-btn"
              onClick={() => onNavigate('contact')}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#00D9A5] to-[#00E5D4] text-[#050708] hover:shadow-lg hover:shadow-[#00E5D4]/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Let's Build Together</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in / Fullscreen Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-0 top-[65px] bg-[#050708]/98 backdrop-blur-2xl z-50 flex flex-col p-6 lg:hidden border-t border-[#002D32]/80 overflow-y-auto animate-fade-in"
        >
          <div className="space-y-1 mb-6">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-between ${
                  currentPage === item.id
                    ? 'text-[#00E5D4] bg-[#002D32]/50 border-l-4 border-[#00E5D4]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight size={16} className="text-gray-500" />
              </button>
            ))}
          </div>

          {/* Mobile Theme Toggle Row */}
          <div className="py-3 border-t border-b border-[#002D32]/50 my-2">
            <div className="text-xs text-gray-400 uppercase font-semibold mb-2 tracking-wider">
              Display Theme
            </div>
            <ThemeToggle showLabel className="w-full justify-between px-4 py-3" />
          </div>

          <div className="mt-auto pt-6 border-t border-[#002D32]/50 space-y-4">
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full py-3.5 rounded-full text-center font-bold text-sm bg-gradient-to-r from-[#00D9A5] to-[#00E5D4] text-[#050708] flex items-center justify-center gap-2"
            >
              <span>Let's Build Together</span>
              <ArrowRight size={16} />
            </button>
            <div className="text-center text-xs text-gray-400">
              {COMPANY_CONFIG.email} | {COMPANY_CONFIG.phone}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
