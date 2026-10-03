import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { SERVICES_DATA } from '../data/services';
import { ServiceItem } from '../types';

interface ServiceGridProps {
  onSelectService: (serviceId: string) => void;
  onViewAllServices: () => void;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({
  onSelectService,
  onViewAllServices,
}) => {
  // 8 quick access services specified in exact requested sequence:
  // 1. Business analysis
  // 2. Business script writing
  // 3. Business podcast
  // 4. Video production
  // 5. Website development
  // 6. Instagram growth
  // 7. Meta ads
  // 8. Complete marketing solutions
  const quickAccessIds = [
    'business-analysis',
    'script-writing',
    'business-podcast',
    'video-production',
    'website-development',
    'instagram-growth',
    'meta-ads',
    'complete-marketing-solutions',
  ];

  const quickServices = quickAccessIds
    .map((id) => SERVICES_DATA.find((s) => s.id === id))
    .filter((s): s is ServiceItem => Boolean(s));

  return (
    <section
      id="services-quick-access"
      className="py-20 relative bg-[#050708] border-t border-[#002D32]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#002D32]/60 border border-[#00E5D4]/30 text-[#00E5D4] text-xs font-semibold uppercase tracking-widest mb-3">
              <Sparkles size={13} />
              <span>Full-Spectrum Media & Growth</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              Core Capabilities
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-xl">
              From business analytics and high-impact scripting to studio podcasts, video production, web architecture, and full-funnel advertising.
            </p>
          </div>

          <button
            onClick={onViewAllServices}
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#00E5D4] hover:text-[#00D9A5] transition-colors"
          >
            <span>Explore All 10 Disciplines</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Responsive Grid / Horizontal Scroll for Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onClick={() => onSelectService(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
