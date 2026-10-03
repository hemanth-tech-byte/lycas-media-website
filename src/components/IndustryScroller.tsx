import React from 'react';
import {
  Rocket,
  Activity,
  Building2,
  Dumbbell,
  Utensils,
  GraduationCap,
  Zap,
  ShoppingBag,
  Coins,
  Film,
  Sparkles,
} from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/industries';

const industryIcons: Record<string, React.ReactNode> = {
  Rocket: <Rocket size={18} />,
  Activity: <Activity size={18} />,
  Building2: <Building2 size={18} />,
  Dumbbell: <Dumbbell size={18} />,
  Utensils: <Utensils size={18} />,
  GraduationCap: <GraduationCap size={18} />,
  Zap: <Zap size={18} />,
  ShoppingBag: <ShoppingBag size={18} />,
  Coins: <Coins size={18} />,
  Film: <Film size={18} />,
};

export const IndustryScroller: React.FC = () => {
  // Duplicate for seamless infinite feeling
  const displayIndustries = [...INDUSTRIES_DATA, ...INDUSTRIES_DATA];

  return (
    <section
      id="industries-section"
      className="py-16 bg-[#050708] border-y border-[#002D32]/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-gray-400">
          TRUSTED BY BUSINESSES ACROSS INDUSTRIES
        </h3>
      </div>

      {/* Horizontal scrolling strip */}
      <div className="relative w-full overflow-x-auto no-scrollbar py-2">
        <div className="flex items-center gap-4 w-max px-4 sm:px-8">
          {displayIndustries.map((ind, idx) => (
            <div
              key={`${ind.id}-${idx}`}
              className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#002D32]/30 border border-[#002D32] hover:border-[#00E5D4]/50 hover:bg-[#002D32]/60 text-gray-300 hover:text-white transition-all duration-300 shrink-0 cursor-default"
            >
              <span className="text-[#00E5D4]">
                {industryIcons[ind.iconName] || <Sparkles size={18} />}
              </span>
              <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
                {ind.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
