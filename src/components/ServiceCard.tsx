import React from 'react';
import {
  Mic,
  PenTool,
  Video,
  TrendingUp,
  Target,
  Code,
  BarChart3,
  Sparkles,
  ArrowUpRight,
  Compass,
  Layers,
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  onClick: () => void;
  index?: number;
}

const iconMap: Record<string, React.ReactNode> = {
  Mic: <Mic size={20} />,
  PenTool: <PenTool size={20} />,
  Video: <Video size={20} />,
  TrendingUp: <TrendingUp size={20} />,
  Target: <Target size={20} />,
  Code: <Code size={20} />,
  BarChart3: <BarChart3 size={20} />,
  Sparkles: <Sparkles size={20} />,
  Compass: <Compass size={20} />,
  Layers: <Layers size={20} />,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick, index }) => {
  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#050708] border border-[#002D32] hover:border-[#00E5D4]/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#00E5D4]/10 cursor-pointer min-w-[280px] sm:min-w-[320px] md:min-w-0"
    >
      {/* Top Image banner with subtle zoom on hover */}
      <div className="relative h-44 w-full overflow-hidden bg-black/40">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-500 ease-out"
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-[#050708]/40 to-transparent" />

        {/* Floating Icon pill */}
        <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-[#050708]/80 backdrop-blur-md border border-[#00E5D4]/30 text-[#00E5D4] group-hover:bg-[#00D9A5] group-hover:text-[#050708] transition-colors duration-300 keep-white">
          {iconMap[service.iconName] || <Sparkles size={20} />}
        </div>

        {/* Sequence step badge (01, 02, ...) */}
        {index !== undefined && (
          <div className="absolute top-4 right-4 px-2.5 py-1 rounded-lg bg-[#050708]/85 backdrop-blur-md border border-[#002D32] text-[11px] font-mono font-bold text-[#00E5D4] group-hover:border-[#00E5D4]/50 group-hover:bg-[#002D32]/80 transition-all keep-white">
            0{index + 1}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-[#00E5D4] transition-colors">
            {service.title}
          </h3>
          <p className="mt-2 text-sm text-gray-400 font-normal leading-relaxed line-clamp-2">
            {service.shortDescription}
          </p>
        </div>

        {/* Bottom bar with circular arrow button */}
        <div className="mt-6 pt-4 border-t border-[#002D32]/60 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
            Learn More
          </span>
          <div className="w-10 h-10 rounded-full bg-[#002D32]/50 border border-[#002D32] flex items-center justify-center text-gray-300 group-hover:bg-[#00D9A5] group-hover:border-[#00D9A5] group-hover:text-[#050708] transition-all duration-300 group-hover:scale-105">
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
