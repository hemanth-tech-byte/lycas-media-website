import React from 'react';
import { X, Volume2, Sparkles } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/config';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="showreel-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        id="showreel-modal-content"
        className="relative w-full max-w-5xl bg-[#050708] border border-[#002D32] rounded-2xl overflow-hidden shadow-2xl shadow-[#00E5D4]/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#002D32] bg-[#002D32]/30">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5D4] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D9A5]" />
            </span>
            <span className="text-sm font-semibold tracking-wider text-[#00E5D4] uppercase">
              Lycas Official Showreel
            </span>
          </div>
          <button
            id="close-showreel-btn"
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close showreel"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <video
            src={COMPANY_CONFIG.showreelVideoUrl}
            controls
            autoPlay
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Footer info */}
        <div className="p-6 bg-[#050708] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#002D32]/50">
          <div>
            <h4 className="text-lg font-bold text-white">Turning Businesses Into Brands</h4>
            <p className="text-sm text-gray-400">Cinematic commercial reels, podcasts, digital campaigns & brand films.</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#00D9A5] bg-[#002D32]/60 px-3.5 py-1.5 rounded-full border border-[#00E5D4]/30">
            <Sparkles size={14} />
            <span>4K Cinema Production Master</span>
          </div>
        </div>
      </div>
    </div>
  );
};
