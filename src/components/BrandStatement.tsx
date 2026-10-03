import React from 'react';
import { Quote } from 'lucide-react';

export const BrandStatement: React.FC = () => {
  return (
    <section id="brand-statement-section" className="py-20 bg-[#050708] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div id="brand-statement-card" className="relative p-10 sm:p-14 rounded-3xl bg-gradient-to-tr from-[#050708] via-[#002D32]/40 to-[#063C3A]/30 border border-[#002D32] shadow-2xl text-center group">
          {/* Subtle quotation mark graphic */}
          <div className="absolute top-6 left-8 opacity-15 text-[#00E5D4]">
            <Quote size={64} className="rotate-180" />
          </div>

          <div className="relative z-10">
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
              “Every business has a story.{' '}
              <span className="text-[#00E5D4] block sm:inline">
                We make it reach the world.
              </span>”
            </blockquote>

            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-[#00D9A5]" />
              <cite className="text-sm sm:text-base font-bold tracking-wider text-gray-300 uppercase not-italic">
                Lycas Media Space
              </cite>
              <div className="h-px w-8 bg-[#00D9A5]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
