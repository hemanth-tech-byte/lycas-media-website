import React from 'react';
import { IMPACT_STATS_DATA } from '../data/impactStats';

export const ImpactStats: React.FC = () => {
  return (
    <section
      id="our-impact-section"
      className="py-20 relative bg-gradient-to-b from-[#050708] via-[#002D32]/20 to-[#050708] border-y border-[#002D32]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#00E5D4] mb-2">
            Measurable Scale
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            OUR IMPACT
          </h2>
          <p className="mt-3 text-base text-gray-400">
            Trusted by businesses across industries.
          </p>
        </div>

        {/* 4 Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {IMPACT_STATS_DATA.map((stat) => (
            <div
              key={stat.id}
              id={`impact-stat-${stat.id}`}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#050708]/80 border border-[#002D32] hover:border-[#00E5D4]/40 transition-all duration-300 text-center group impact-stat-card"
            >
              {/* Subtle accent glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#002D32]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter group-hover:text-[#00E5D4] transition-colors">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm sm:text-base font-semibold text-gray-400 group-hover:text-gray-200 transition-colors">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
