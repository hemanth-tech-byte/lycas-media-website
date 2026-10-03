import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Eye, Award, CheckCircle2 } from 'lucide-react';
import { BRAND_ASSETS, COMPANY_CONFIG } from '../data/config';
import { PageId } from '../types';

interface AboutProps {
  onNavigate: (page: PageId) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const threePrinciples = [
    {
      title: 'STRATEGY',
      tagline: 'Understand before creating.',
      description:
        'We never produce content in a vacuum. We reverse-engineer your high-value buyer personas, competitor voids, and unit economics before turning on a single camera.',
      icon: <ShieldCheck size={28} className="text-[#00E5D4]" />,
    },
    {
      title: 'STORY',
      tagline: 'Create content people remember.',
      description:
        'Facts inform, but stories convince. We craft emotionally resonant narratives, broadcast-grade podcast dialogues, and cinematic brand films that linger in the audience’s subconscious.',
      icon: <Eye size={28} className="text-[#00D9A5]" />,
    },
    {
      title: 'GROWTH',
      tagline: 'Turn attention into business.',
      description:
        'Attention without conversion is vanity. We construct robust inbound funnels, algorithmic ad testing matrices, and high-performance digital flagships that convert viewers into loyal clients.',
      icon: <Award size={28} className="text-[#00E5D4]" />,
    },
  ];

  const whyChoosePoints = [
    {
      title: 'One-Stop Media Ecosystem',
      desc: 'No more managing fragmented freelancers. Strategy, studio shoots, post-production, web tech, and performance ads operate under one unified creative direction.',
    },
    {
      title: 'Broadcast-Grade Studio Gear',
      desc: 'Cinema-grade RED/Sony FX line cameras, audiophile Shure SM7B microphones, bespoke acoustic paneling, and calibrated HDR lighting sets your brand in the top 1%.',
    },
    {
      title: 'Business-First Mindset',
      desc: 'We are entrepreneurs and operators first. We speak CAC, LTV, ROAS, and enterprise sales velocity just as fluently as aperture, color grading, and typography.',
    },
    {
      title: 'Speed & Consistency',
      desc: 'A proven workflow allowing rapid turnaround without sacrificing editorial precision. Batch studio days turn into months of omnipresent brand visibility.',
    },
  ];

  return (
    <div id="about-page" className="pt-28 pb-20 bg-[#050708]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-[#002D32]/50 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#002D32]/30 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#002D32]/80 border border-[#00E5D4]/40 text-[#00E5D4] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              <Sparkles size={13} />
              <span>ABOUT LYCAS MEDIA SPACE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[1.08]">
              WE DON'T JUST CREATE CONTENT.
              <br />
              <span className="bg-gradient-to-r from-[#00D9A5] to-[#00E5D4] bg-clip-text text-transparent">
                WE BUILD BRAND STORIES.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed font-normal">
              Lycas Media Space helps businesses transform ideas into recognizable brands through strategy, storytelling, media production, digital marketing and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Studio & Team Imagery Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 rounded-3xl overflow-hidden border border-[#002D32] h-80 sm:h-96 relative group">
            <img
              src={BRAND_ASSETS.heroImage}
              alt="Lycas Media Space Production Stage"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 keep-white">
              <span className="text-xs font-bold text-[#00E5D4] tracking-widest uppercase">
                The Stage
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Where Executive Dialogues Become Industry Standards
              </h3>
            </div>
          </div>

          <div className="md:col-span-4 rounded-3xl overflow-hidden border border-[#002D32] h-80 sm:h-96 relative group">
            <img
              src={BRAND_ASSETS.podcastStudioImage}
              alt="Podcast Lounge"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 keep-white">
              <span className="text-xs font-bold text-[#00D9A5] tracking-widest uppercase">
                Acoustic Lounge
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                Intimate, High-Trust Dialogue Recording
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Principles */}
      <section className="py-16 bg-[#050708] border-y border-[#002D32]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              Our Three Principles
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-400">
              The foundational pillars that guide every script, shoot, campaign, and interface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {threePrinciples.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#050708] border border-[#002D32] hover:border-[#00E5D4]/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3 w-fit rounded-2xl bg-[#002D32]/50 border border-[#002D32] mb-6 group-hover:bg-[#002D32] transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight">{item.title}</h3>
                  <div className="text-sm font-bold text-[#00E5D4] mt-1 mb-4">{item.tagline}</div>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story & Philosophy */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00D9A5]">
              Our Story & Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase mt-2">
              From Disjointed Marketing to Cohesive Brand Power
            </h2>
            <div className="mt-6 space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Lycas Media Space was founded on a simple observation: ambitious founders were tired of hiring five different vendors—one for social media, another for video, a third for podcasts, a fourth for web development, and an ad agency that understood none of their brand soul.
              </p>
              <p>
                The result was always fragmented messaging, generic templated posts, and wasted marketing budgets. We built Lycas Media Space as a singular, unified home where business acumen meets cinematic artistry.
              </p>
              <p>
                Whether you are an established enterprise launching a category-defining brand film or an emerging startup seeking to turn leadership into an authority podcast, we align your vision with revenue-driving execution.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChoosePoints.map((pt, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#002D32]/20 border border-[#002D32] hover:border-[#00E5D4]/40 transition-colors"
              >
                <div className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#00D9A5] shrink-0" />
                  <span>{pt.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="about-cta-banner" className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#002D32] to-[#063C3A] border border-[#00E5D4]/40 flex flex-col sm:flex-row items-center justify-between gap-6 keep-white">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to collaborate with Lycas?
            </h3>
            <p className="text-sm text-gray-300 mt-1">
              Let’s evaluate your current brand footprint and identify high-leverage growth avenues.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 rounded-full bg-[#00D9A5] hover:bg-[#00E5D4] text-[#050708] font-bold text-sm uppercase tracking-wider flex items-center gap-2 transition-all shrink-0 hover:scale-105"
          >
            <span>Start the Conversation</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
};
