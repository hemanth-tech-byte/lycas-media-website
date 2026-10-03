import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, CheckCircle, TrendingUp } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { ProjectCaseStudy, PageId } from '../types';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { ReviewsSection } from '../components/ReviewsSection';

interface WorkProps {
  onNavigate: (page: PageId) => void;
}

type FilterCategory = 'All' | 'Branding' | 'Social Media' | 'Video' | 'Websites' | 'Marketing' | 'Podcast';

export const Work: React.FC<WorkProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectCaseStudy | null>(null);

  const categories: FilterCategory[] = [
    'All',
    'Branding',
    'Social Media',
    'Video',
    'Websites',
    'Marketing',
    'Podcast',
  ];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (selectedCategory === 'All') return true;
    return proj.category === selectedCategory;
  });

  return (
    <div id="work-page" className="pt-28 pb-20 bg-[#050708]">
      {/* Hero Header */}
      <section className="py-16 md:py-24 border-b border-[#002D32]/50 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#002D32]/30 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#002D32]/80 border border-[#00E5D4]/40 text-[#00E5D4] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              <Sparkles size={13} />
              <span>PORTFOLIO & CASE STUDIES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[1.08]">
              WORK THAT
              <br />
              <span className="bg-gradient-to-r from-[#00D9A5] to-[#00E5D4] bg-clip-text text-transparent">
                SPEAKS.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 font-normal">
              A showcase of brand transformations, cinematic films, podcast channels, and revenue-scaling campaigns built for ambitious founders.
            </p>

            {/* Filter Pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#00E5D4] text-[#050708] shadow-md shadow-[#00E5D4]/20'
                      : 'bg-[#002D32]/50 text-gray-300 hover:text-white hover:bg-[#002D32]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProjectModal(project)}
              className="group relative flex flex-col rounded-3xl overflow-hidden bg-[#050708] border border-[#002D32] hover:border-[#00E5D4]/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00E5D4]/10 cursor-pointer"
            >
              {/* Image banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/50">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2 keep-white">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#00E5D4]/40 text-[#00E5D4] text-xs font-bold tracking-wider uppercase">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#002D32]/80 backdrop-blur-md text-gray-300 text-[11px] font-medium">
                    {project.industry}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {project.client}
                  </div>
                  <h3 className="text-xl font-extrabold text-white mt-1 leading-snug group-hover:text-[#00E5D4] transition-colors">
                    {project.title}
                  </h3>
                  <div className="mt-4 p-3 rounded-xl bg-[#002D32]/30 border border-[#002D32] flex items-center gap-2 text-xs font-semibold text-[#00D9A5]">
                    <TrendingUp size={15} className="shrink-0 text-[#00E5D4]" />
                    <span className="line-clamp-1">{project.shortResult}</span>
                  </div>
                </div>

                {/* Footer bar */}
                <div className="mt-6 pt-4 border-t border-[#002D32]/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.services.slice(0, 2).map((s, i) => (
                      <span key={i} className="text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded-md">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="w-9 h-9 rounded-full bg-[#002D32]/40 border border-[#002D32] flex items-center justify-center text-gray-300 group-hover:bg-[#00D9A5] group-hover:text-[#050708] group-hover:border-[#00D9A5] transition-all">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Reviews Section */}
      <ReviewsSection onContactClick={() => onNavigate('contact')} />

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onContactClick={() => onNavigate('contact')}
      />
    </div>
  );
};
