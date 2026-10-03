import React from 'react';
import { Play, ArrowRight, CheckCircle, ShieldCheck, Users, Zap, Mic, Sparkles } from 'lucide-react';
import { BRAND_ASSETS, COMPANY_CONFIG } from '../data/config';

interface HeroProps {
  onWatchShowreel: () => void;
  onBookConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWatchShowreel, onBookConsultation }) => {
  const credibilityPoints = [
    {
      title: 'REAL',
      subtitle: 'STRATEGIES',
      icon: <ShieldCheck size={20} className="text-[#00E5D4]" />,
    },
    {
      title: 'REAL',
      subtitle: 'PEOPLE',
      icon: <Users size={20} className="text-[#00E5D4]" />,
    },
    {
      title: 'REAL',
      subtitle: 'RESULTS',
      icon: <Zap size={20} className="text-[#00E5D4]" />,
    },
  ];

  const floatingSpecialties = [
    'Strategy',
    'Content',
    'Podcast',
    'Marketing',
    'Websites',
    'Growth',
  ];

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden bg-[#050708]"
    >
      {/* Subtle background glow effect (not overused) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#002D32]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#00D9A5]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle background ambient studio layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <img
          src={BRAND_ASSETS.heroImage}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050708] via-[#050708]/90 to-[#050708]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050708] via-transparent to-[#050708]" />
      </div>

      {/* Subtle film grain / grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#002D32_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left z-10">
            {/* Small Eyebrow Text */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00D9A5] animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-gray-300 uppercase">
                BRANDS &nbsp;|&nbsp; STORIES &nbsp;|&nbsp; PEOPLE &nbsp;|&nbsp; GROWTH
              </span>
            </div>

            {/* Main Heading:
                TURNING
                BUSINESSES
                INTO BRANDS ("INTO BRANDS" in signature green/turquoise)
            */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05] uppercase">
              TURNING
              <br />
              BUSINESSES
              <br />
              <span className="bg-gradient-to-r from-[#00D9A5] via-[#00E5D4] to-emerald-300 bg-clip-text text-transparent">
                INTO BRANDS
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg sm:text-xl font-semibold text-gray-200 tracking-wide">
              Strategy. Content. Podcast. Marketing. Websites.
            </p>

            {/* Supporting Text */}
            <p className="mt-2 text-sm sm:text-base text-gray-400 font-normal max-w-xl">
              A one-stop media space for ambitious businesses.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary CTA: Watch Showreel */}
              <button
                id="hero-watch-showreel-btn"
                onClick={onWatchShowreel}
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full font-bold text-sm bg-white text-[#050708] hover:bg-[#00E5D4] transition-all duration-300 shadow-xl shadow-white/5 hover:shadow-[#00E5D4]/20"
              >
                <div className="w-6 h-6 rounded-full bg-[#050708] text-white flex items-center justify-center group-hover:bg-[#050708] transition-colors">
                  <Play size={12} className="fill-current translate-x-0.5" />
                </div>
                <span>Watch Our Showreel ▶</span>
              </button>

              {/* Secondary CTA: Book a Free Consultation */}
              <button
                id="hero-book-consultation-btn"
                onClick={onBookConsultation}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-sm bg-[#002D32]/60 hover:bg-[#002D32] text-white border border-[#00E5D4]/40 hover:border-[#00E5D4] transition-all duration-300"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight size={16} className="text-[#00E5D4]" />
              </button>
            </div>

            {/* Credibility Points */}
            <div
              id="hero-credibility-strip"
              className="mt-12 pt-8 border-t border-[#002D32]/80 grid grid-cols-3 gap-4 max-w-lg"
            >
              {credibilityPoints.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#002D32]/40 border border-[#002D32] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      {item.title}
                    </div>
                    <div className="text-xs sm:text-sm font-extrabold text-white tracking-tight">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex items-center justify-center">
            {/* Studio Frame Card */}
            <div
              id="hero-workspace-showcase"
              className="relative w-full max-w-lg rounded-3xl p-2.5 bg-gradient-to-b from-[#002D32]/80 via-[#063C3A]/40 to-[#050708] border border-[#002D32] shadow-2xl shadow-black"
            >
              {/* Studio Image Container */}
              <div
                id="hero-image-frame"
                className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-black group"
              >
                <img
                  id="hero-workspace-image"
                  src={BRAND_ASSETS.heroImage}
                  alt="Modern cinematic creative workspace with podcast equipment and Lycas Media branding"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle dark cinematic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-transparent to-black/20" />

                {/* Top Badge: Studio Live Indicator */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#050708]/80 backdrop-blur-md border border-[#00E5D4]/30 text-xs text-white keep-white">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span className="font-semibold tracking-wider text-[11px] uppercase">
                    Studio Live
                  </span>
                </div>

                {/* Bottom Overlay Info inside frame */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between keep-white">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-[#002D32]/80 text-[#00E5D4]">
                      <Mic size={16} />
                    </div>
                    <div className="text-left">
                      <div className="text-[11px] font-bold text-white uppercase tracking-wider">
                        Lycas Media Space
                      </div>
                      <div className="text-[10px] text-[#00E5D4]">
                        Broadcast & Cinema Production
                      </div>
                    </div>
                  </div>
                  <div className="text-[11px] font-semibold text-gray-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    4K HDR
                  </div>
                </div>
              </div>

              {/* Floating Handwritten Style List on the Right Side */}
              <div
                id="hero-floating-list"
                className="absolute -right-2 sm:-right-8 -top-6 sm:-top-8 p-4 sm:p-5 rounded-2xl bg-[#050708]/90 backdrop-blur-xl border border-[#00E5D4]/30 shadow-2xl shadow-black/80 rotate-2 hover:rotate-0 transition-transform duration-300 pointer-events-none sm:pointer-events-auto"
              >
                <div className="text-[11px] uppercase font-bold tracking-widest text-[#00D9A5] mb-2 border-b border-[#002D32] pb-1">
                  Pillars
                </div>
                <div className="space-y-1 font-handwriting text-xl sm:text-2xl text-white">
                  {floatingSpecialties.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 hover:text-[#00E5D4] transition-colors"
                    >
                      <span className="text-[#00D9A5] text-base">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-5 left-8 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#002D32]/90 backdrop-blur-lg border border-[#00E5D4]/40 shadow-xl shadow-black">
                <Sparkles size={16} className="text-[#00E5D4]" />
                <span className="text-xs font-bold text-white tracking-wide">
                  Top 1% Media Quality
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
