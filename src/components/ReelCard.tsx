import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Eye, Sparkles } from 'lucide-react';
import { ReelItem } from '../types';

interface ReelCardProps {
  reel: ReelItem;
  staggerClass?: string;
  onOpenReelModal: (reel: ReelItem) => void;
}

export const ReelCard: React.FC<ReelCardProps> = ({ reel, staggerClass = '', onOpenReelModal }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // If inline autoplay fails, open modal
          onOpenReelModal(reel);
        });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      className={`group relative flex flex-col transition-all duration-500 ease-out ${staggerClass}`}
    >
      {/* 9:16 Vertical Card */}
      <div
        onClick={() => onOpenReelModal(reel)}
        className="relative aspect-[9/16] w-full rounded-3xl overflow-hidden bg-[#050708] border border-[#002D32] group-hover:border-[#00E5D4] group-hover:shadow-2xl group-hover:shadow-[#00E5D4]/20 group-hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-lg shadow-black/80"
      >
        {/* Background poster image */}
        <img
          src={reel.thumbnail}
          alt={reel.title}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100 group-hover:scale-105'
          }`}
        />

        {/* Video Element (lazy/clicked) */}
        <video
          ref={videoRef}
          src={reel.videoUrl}
          playsInline
          loop
          muted={isMuted}
          onEnded={() => setIsPlaying(false)}
          onError={() => setHasError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />

        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none" />

        {/* Top bar: Reel Number & Category & Mute Toggle */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#00E5D4]/40 text-[#00E5D4] text-[11px] font-extrabold tracking-wider uppercase">
              {reel.reelNumber}
            </span>
            <span className="hidden sm:inline-block text-[10px] font-medium text-gray-300 bg-[#002D32]/60 px-2 py-0.5 rounded-full">
              {reel.category}
            </span>
          </div>

          {isPlaying && (
            <button
              onClick={toggleMute}
              className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:text-[#00E5D4] border border-white/10 transition-colors"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>
          )}
        </div>

        {/* Center Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className={`w-14 h-14 rounded-full bg-[#00E5D4]/90 text-[#050708] flex items-center justify-center shadow-xl shadow-[#00E5D4]/30 transform transition-all duration-300 ${
              isPlaying
                ? 'opacity-0 scale-75'
                : 'opacity-85 group-hover:opacity-100 group-hover:scale-110'
            }`}
          >
            <Play size={22} className="fill-current translate-x-0.5" />
          </div>
        </div>

        {/* Bottom Details - Instagram Style Treatment */}
        <div className="absolute bottom-4 left-4 right-4 z-10 text-left">
          {reel.views && (
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#00D9A5] mb-1">
              <Eye size={12} />
              <span>{reel.views} Views</span>
            </div>
          )}

          <h4 className="text-sm sm:text-base font-bold text-white leading-snug line-clamp-2 drop-shadow-md group-hover:text-[#00E5D4] transition-colors">
            {reel.title}
          </h4>

          <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-300">
            <span className="font-semibold text-[#00D9A5]">Lycas Media Space</span>
            <span className="text-gray-400">{reel.duration || '0:45'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
