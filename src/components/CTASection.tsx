import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onContactClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onContactClick }) => {
  return (
    <section id="conversion-cta-section" className="py-20 bg-[#050708] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 lg:p-16 bg-gradient-to-tr from-[#002D32] via-[#063C3A] to-[#050708] border border-[#00E5D4]/40 shadow-2xl shadow-black text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 keep-white">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00E5D4]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#00D9A5] mb-3">
              <Sparkles size={14} />
              <span>IDEA TODAY. IMPACT TOMORROW.</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              READY TO GROW
              <br />
              <span className="text-[#00E5D4]">YOUR BRAND?</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-300 font-normal">
              Whether you need an industry-defining podcast, viral reels, or a complete digital overhaul, let’s make your story unforgettable.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              id="cta-build-together-btn"
              onClick={onContactClick}
              className="group inline-flex items-center gap-3 px-8 py-4 sm:py-5 rounded-full bg-[#00D9A5] hover:bg-[#00E5D4] text-[#050708] font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-2xl shadow-[#00E5D4]/30 hover:scale-105 active:scale-95"
            >
              <span>Let's Build Together</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
