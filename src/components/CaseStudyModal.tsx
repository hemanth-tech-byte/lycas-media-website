import React from 'react';
import { X, ArrowRight, CheckCircle2, TrendingUp, Building2, Layers } from 'lucide-react';
import { ProjectCaseStudy } from '../types';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onContactClick,
}) => {
  if (!project) return null;

  return (
    <div
      id="case-study-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/90 backdrop-blur-xl overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        id="case-study-modal-content"
        className="relative w-full max-w-4xl bg-[#050708] border border-[#002D32] rounded-2xl overflow-hidden shadow-2xl my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-[#050708]/60 to-transparent" />
          
          <button
            id="close-casestudy-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-white/20 transition-all border border-white/10"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="absolute bottom-6 left-6 right-6 keep-white">
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00D9A5]/20 text-[#00E5D4] border border-[#00E5D4]/40">
                {project.industry}
              </span>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-gray-300">
                {project.category}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mt-1">Client: {project.client}</p>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Key Result Banner */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#002D32]/80 to-[#063C3A]/60 border border-[#00E5D4]/30 flex items-center gap-3">
            <TrendingUp className="text-[#00E5D4] shrink-0" size={24} />
            <div>
              <div className="text-xs uppercase font-semibold text-[#00D9A5] tracking-wider">
                Measurable Impact
              </div>
              <div className="text-base font-semibold text-white">{project.shortResult}</div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.impactMetrics.map((metric, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-[#002D32]/20 border border-[#002D32] text-center"
              >
                <div className="text-2xl sm:text-3xl font-black text-[#00E5D4]">
                  {metric.value}
                </div>
                <div className="text-xs text-gray-400 mt-1 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-[#002D32]/15 border border-[#002D32]/50">
              <h3 className="text-sm font-bold uppercase tracking-wider text-red-400 mb-2">
                The Challenge
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">{project.challenge}</p>
            </div>

            <div className="p-5 rounded-xl bg-[#002D32]/15 border border-[#002D32]/50">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#00D9A5] mb-2">
                The Lycas Solution
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Services Provided */}
          <div>
            <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-3">
              Services Delivered
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.services.map((srv, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-lg bg-[#002D32]/40 text-gray-200 border border-[#002D32]"
                >
                  <CheckCircle2 size={13} className="text-[#00D9A5]" />
                  {srv}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-tr from-[#050708] via-[#002D32] to-[#063C3A] border border-[#00E5D4]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold text-white">Want similar breakthrough results?</h4>
              <p className="text-sm text-gray-300">Let’s engineer a tailored media and growth strategy for your brand.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#00D9A5] hover:bg-[#00E5D4] text-[#050708] font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-[#00E5D4]/30 shrink-0"
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
