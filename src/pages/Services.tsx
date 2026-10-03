import React, { useState } from 'react';
import {
  Mic,
  PenTool,
  Video,
  TrendingUp,
  Target,
  Code,
  BarChart3,
  Sparkles,
  Compass,
  Layers,
  CheckCircle2,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { PageId, ServiceItem } from '../types';

interface ServicesProps {
  onNavigate: (page: PageId) => void;
  selectedServiceId?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass size={24} />,
  Mic: <Mic size={24} />,
  PenTool: <PenTool size={24} />,
  Video: <Video size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  Target: <Target size={24} />,
  Code: <Code size={24} />,
  BarChart3: <BarChart3 size={24} />,
  Layers: <Layers size={24} />,
  Sparkles: <Sparkles size={24} />,
};

export const Services: React.FC<ServicesProps> = ({ onNavigate, selectedServiceId }) => {
  const [filter, setFilter] = useState<'all' | 'core' | 'specialized' | 'growth'>('all');

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (filter === 'all') return true;
    return s.category === filter;
  });

  return (
    <div id="services-page" className="pt-28 pb-20 bg-[#050708]">
      {/* Hero Header */}
      <section className="py-16 md:py-24 border-b border-[#002D32]/50 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#002D32]/30 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#002D32]/80 border border-[#00E5D4]/40 text-[#00E5D4] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              <Sparkles size={13} />
              <span>OUR DISCIPLINES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[1.08]">
              WHAT WE DO
              <br />
              <span className="bg-gradient-to-r from-[#00D9A5] to-[#00E5D4] bg-clip-text text-transparent">
                TO BUILD YOUR BRAND
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 font-normal">
              A comprehensive suite of media, creative, and performance solutions designed to take businesses from obscure to iconic.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === 'all'
                    ? 'bg-[#00E5D4] text-[#050708]'
                    : 'bg-[#002D32]/50 text-gray-300 hover:text-white hover:bg-[#002D32]'
                }`}
              >
                All Capabilities (10)
              </button>
              <button
                onClick={() => setFilter('core')}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === 'core'
                    ? 'bg-[#00E5D4] text-[#050708]'
                    : 'bg-[#002D32]/50 text-gray-300 hover:text-white hover:bg-[#002D32]'
                }`}
              >
                Strategy & Intelligence
              </button>
              <button
                onClick={() => setFilter('specialized')}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === 'specialized'
                    ? 'bg-[#00E5D4] text-[#050708]'
                    : 'bg-[#002D32]/50 text-gray-300 hover:text-white hover:bg-[#002D32]'
                }`}
              >
                Media & Studio Production
              </button>
              <button
                onClick={() => setFilter('growth')}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === 'growth'
                    ? 'bg-[#00E5D4] text-[#050708]'
                    : 'bg-[#002D32]/50 text-gray-300 hover:text-white hover:bg-[#002D32]'
                }`}
              >
                Growth & Performance
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Detailed Service Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {filteredServices.map((service, index) => {
            const isHighlight = selectedServiceId === service.id;
            return (
              <div
                key={service.id}
                id={`service-detail-${service.id}`}
                className={`rounded-3xl p-6 sm:p-10 bg-[#050708] border transition-all duration-300 ${
                  isHighlight
                    ? 'border-[#00E5D4] ring-2 ring-[#00E5D4]/20 bg-[#002D32]/10'
                    : 'border-[#002D32] hover:border-[#00E5D4]/40'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left: Image & Badge */}
                  <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-video lg:aspect-[4/3] bg-black relative group">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#050708]/80 backdrop-blur-md border border-[#00E5D4]/30 text-[#00E5D4] keep-white">
                      {iconMap[service.iconName] || <Sparkles size={24} />}
                    </div>
                  </div>

                  {/* Right: Content, Deliverables, Process, CTA */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-mono font-bold text-[#00E5D4] px-2.5 py-0.5 rounded-full bg-[#002D32]/80 border border-[#00E5D4]/30">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#00D9A5]">
                          {service.category.toUpperCase()}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                        {service.title}
                      </h2>

                      <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                        {service.detailedDescription}
                      </p>

                      {/* What We Deliver */}
                      <div className="mt-6">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                          What We Deliver
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.deliverables.map((item, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-200">
                              <CheckCircle2 size={16} className="text-[#00D9A5] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Process Steps */}
                      <div className="mt-6 pt-6 border-t border-[#002D32]/60">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                          The Process
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {service.process.map((step, pIdx) => (
                            <div
                              key={pIdx}
                              className="p-2.5 rounded-xl bg-[#002D32]/20 border border-[#002D32] text-center"
                            >
                              <div className="text-[10px] font-bold text-[#00E5D4] uppercase">
                                Step 0{pIdx + 1}
                              </div>
                              <div className="text-xs font-semibold text-gray-300 mt-1 leading-tight">
                                {step}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8 pt-6 border-t border-[#002D32]/60 flex items-center justify-between">
                      <span className="text-xs text-gray-400">Ready to execute {service.title}?</span>
                      <button
                        onClick={() => onNavigate('contact')}
                        className="px-6 py-3 rounded-full bg-[#00D9A5] hover:bg-[#00E5D4] text-[#050708] font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 transition-all hover:scale-105"
                      >
                        <span>Discuss Your Project</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
