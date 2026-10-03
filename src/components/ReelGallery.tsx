import React, { useState } from 'react';
import { Sparkles, ArrowRight, X, Volume2, VolumeX, Eye } from 'lucide-react';
import { ReelCard } from './ReelCard';
import { REELS_DATA } from '../data/reels';
import { ReelItem } from '../types';

interface ReelGalleryProps {
  onExploreWork: () => void;
}

export const ReelGallery: React.FC<ReelGalleryProps> = ({ onExploreWork }) => {
  const [activeModalReel, setActiveModalReel] = useState<ReelItem | null>(null);
  const [modalMuted, setModalMuted] = useState(false);

  // Stagger classes for desktop floating effect
  // Row 1: [Reel 01, Reel 02, Reel 03]
  // Row 2: [Reel 04, Reel 05, Reel 06]
  const staggerOffsets = [
    'lg:translate-y-0',
    'lg:translate-y-6',
    'lg:-translate-y-3',
    'lg:-translate-y-2',
    'lg:translate-y-4',
    'lg:translate-y-1',
  ];

  return (
    <section
      id="floating-reels-section"
      className="py-24 relative bg-[#050708] overflow-hidden border-t border-[#002D32]/50"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#002D32]/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#002D32]/80 border border-[#00E5D4]/40 text-[#00E5D4] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            <Sparkles size={13} />
            <span>LYCAS REELS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase leading-[1.1]">
            CONTENT THAT
            <br />
            <span className="bg-gradient-to-r from-[#00D9A5] via-[#00E5D4] to-teal-300 bg-clip-text text-transparent">
              STOPS THE SCROLL.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-normal">
            Short-form content designed to capture attention and create impact.
          </p>
        </div>

        {/* 
          FLOATING REELS STRUCTURE:
          [ Reel 01 ] [ Reel 02 ] [ Reel 03 ]
          [ Reel 04 ] [ Reel 05 ] [ Reel 06 ]
          Desktop: 3 columns with subtle vertical floating offset
          Mobile: responsive grid or swipe
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {REELS_DATA.map((reel, index) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              staggerClass={staggerOffsets[index % staggerOffsets.length]}
              onOpenReelModal={(r) => setActiveModalReel(r)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            id="view-all-reels-btn"
            onClick={onExploreWork}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#002D32] to-[#063C3A] hover:from-[#00D9A5] hover:to-[#00E5D4] text-white hover:text-[#050708] border border-[#00E5D4]/40 hover:border-transparent font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl hover:shadow-[#00E5D4]/20"
          >
            <span>Explore Our Work</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Reel Fullscreen Video Modal */}
      {activeModalReel && (
        <div
          id="reel-player-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in"
          onClick={() => setActiveModalReel(null)}
        >
          <div
            className="relative w-full max-w-sm aspect-[9/16] rounded-3xl overflow-hidden bg-black border border-[#00E5D4]/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalReel(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-white/20 transition-colors"
              aria-label="Close reel"
            >
              <X size={20} />
            </button>

            <video
              src={activeModalReel.videoUrl}
              autoPlay
              controls
              muted={modalMuted}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-4 left-4 right-4 pointer-events-none text-left">
              <span className="text-xs font-bold text-[#00E5D4] bg-black/60 px-2.5 py-1 rounded-full uppercase">
                {activeModalReel.reelNumber}
              </span>
              <h4 className="text-base font-bold text-white mt-2 drop-shadow-md">
                {activeModalReel.title}
              </h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
