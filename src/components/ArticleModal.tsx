import React from 'react';
import { X, Calendar, Clock, User, ArrowRight, Share2 } from 'lucide-react';
import { BlogPost } from '../types';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ post, onClose, onContactClick }) => {
  if (!post) return null;

  return (
    <div
      id="article-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/90 backdrop-blur-xl overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        id="article-modal-content"
        className="relative w-full max-w-3xl bg-[#050708] border border-[#002D32] rounded-2xl overflow-hidden shadow-2xl my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-[#050708]/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-white/20 transition-all border border-white/10"
            aria-label="Close article"
          >
            <X size={20} />
          </button>

          <div className="absolute bottom-6 left-6 right-6 keep-white">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00D9A5]/20 text-[#00E5D4] border border-[#00E5D4]/40 uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-2 leading-tight">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pb-4 border-b border-[#002D32]">
            <div className="flex items-center gap-1.5">
              <User size={14} className="text-[#00D9A5]" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-[#00D9A5]" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-[#00D9A5]" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-4 text-gray-300 leading-relaxed text-base font-normal">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Bottom Card */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-[#002D32]/50 to-[#063C3A]/50 border border-[#002D32] flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <div>
              <div className="text-sm font-bold text-white">Ready to elevate your media strategy?</div>
              <div className="text-xs text-gray-300">Partner with Lycas Media Space to turn attention into business.</div>
            </div>
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="px-5 py-2.5 rounded-full bg-[#00D9A5] hover:bg-[#00E5D4] text-[#050708] font-bold text-xs tracking-wider flex items-center gap-2 transition-all shrink-0"
            >
              <span>Get in Touch</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
