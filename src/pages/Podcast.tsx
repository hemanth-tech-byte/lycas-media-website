import React, { useState, useRef } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Mic,
  Calendar,
  Clock,
  Sparkles,
  ArrowRight,
  Share2,
  Headphones,
  Radio,
} from 'lucide-react';
import { PODCAST_EPISODES } from '../data/podcast';
import { BRAND_ASSETS } from '../data/config';
import { PageId, PodcastEpisode } from '../types';

interface PodcastProps {
  onNavigate: (page: PageId) => void;
}

export const Podcast: React.FC<PodcastProps> = ({ onNavigate }) => {
  const [currentEpisode, setCurrentEpisode] = useState<PodcastEpisode>(PODCAST_EPISODES[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(e.target.value));
  };

  const guests = [
    { name: 'Kabir Singhania', role: 'CEO, NeuralScale', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
    { name: 'Ananya Sharma', role: 'Head of Growth, Aura D2C', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
    { name: 'Vikram Mehta', role: 'Film Director & Strategist', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
    { name: 'Devika Ray', role: 'Partner, Catalyst Horizons', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div id="podcast-page" className="pt-28 pb-20 bg-[#050708]">
      {/* Hero Header */}
      <section className="py-16 md:py-24 border-b border-[#002D32]/50 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#002D32]/30 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#002D32]/80 border border-[#00E5D4]/40 text-[#00E5D4] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              <Mic size={13} />
              <span>THE LYCAS PODCAST</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[1.08]">
              REAL CONVERSATIONS.
              <br />
              <span className="bg-gradient-to-r from-[#00D9A5] to-[#00E5D4] bg-clip-text text-transparent">
                REAL IMPACT.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 font-normal">
              Unfiltered conversations with world-class founders, operators, creative directors, and investors who build the future.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Podcast Player UI (Section 16 requirement) */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="podcast-active-player"
          className="rounded-3xl p-6 sm:p-10 bg-gradient-to-tr from-[#050708] via-[#002D32]/40 to-[#063C3A]/30 border border-[#00E5D4]/40 shadow-2xl shadow-black relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Thumbnail */}
            <div className="lg:col-span-4 aspect-video sm:aspect-square rounded-2xl overflow-hidden bg-black relative group shadow-xl">
              <img
                src={currentEpisode.thumbnail}
                alt={currentEpisode.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#00E5D4] text-xs font-bold border border-white/10">
                Episode #{currentEpisode.episodeNumber}
              </div>
            </div>

            {/* Controls & Details */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-[#00D9A5] font-semibold mb-2">
                  <Radio size={14} className="animate-pulse" />
                  <span>NOW PLAYING &bull; STUDIO BROADCAST MASTER</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                  {currentEpisode.title}
                </h2>

                <div className="mt-2 text-sm text-gray-300 font-medium">
                  Guest: <span className="text-white font-bold">{currentEpisode.guest}</span> ({currentEpisode.guestRole})
                </div>

                <p className="mt-3 text-sm text-gray-400 line-clamp-2 leading-relaxed">
                  {currentEpisode.description}
                </p>
              </div>

              {/* Progress Bar & Timing */}
              <div className="mt-8 space-y-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleSeek}
                  aria-label="Podcast playback progress"
                  className="w-full h-2 bg-[#002D32] rounded-lg appearance-none cursor-pointer accent-[#00E5D4]"
                />
                <div className="flex justify-between text-xs text-gray-400 font-mono">
                  <span>14:32</span>
                  <span>{currentEpisode.duration}</span>
                </div>
              </div>

              {/* Controls Bar: Play/Pause, Volume */}
              <div className="mt-6 pt-4 border-t border-[#002D32]/60 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <button
                    id="podcast-play-pause-btn"
                    onClick={togglePlay}
                    className="w-14 h-14 rounded-full bg-[#00D9A5] hover:bg-[#00E5D4] text-[#050708] flex items-center justify-center font-bold shadow-lg shadow-[#00E5D4]/20 transition-all hover:scale-105"
                    aria-label={isPlaying ? 'Pause episode' : 'Play episode'}
                  >
                    {isPlaying ? (
                      <Pause size={22} className="fill-current" />
                    ) : (
                      <Play size={22} className="fill-current translate-x-0.5" />
                    )}
                  </button>

                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      {isPlaying ? 'Streaming Audio...' : 'Audio Paused'}
                    </div>
                    <div className="text-[11px] text-gray-400">
                      Lossless 320kbps Mastering
                    </div>
                  </div>
                </div>

                {/* Volume Slider */}
                <div id="podcast-volume-pill" className="flex items-center gap-3 bg-[#050708]/60 px-4 py-2 rounded-full border border-[#002D32]">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-gray-300 hover:text-white"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => {
                      setVolume(Number(e.target.value));
                      setIsMuted(false);
                    }}
                    aria-label="Volume slider"
                    className="w-20 h-1.5 bg-[#002D32] rounded-lg appearance-none cursor-pointer accent-[#00D9A5]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episodes List */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
              Featured Episodes
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Select an episode to load into the master studio player.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PODCAST_EPISODES.map((ep) => (
            <div
              key={ep.id}
              onClick={() => {
                setCurrentEpisode(ep);
                setIsPlaying(true);
              }}
              className={`p-6 rounded-3xl bg-[#050708] border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                currentEpisode.id === ep.id
                  ? 'border-[#00E5D4] bg-[#002D32]/20 shadow-xl shadow-[#00E5D4]/10'
                  : 'border-[#002D32] hover:border-[#00E5D4]/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs text-gray-400">
                  <span className="font-bold text-[#00D9A5]">Episode #{ep.episodeNumber}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {ep.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {ep.date}
                    </span>
                  </div>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00E5D4] transition-colors leading-snug">
                  {ep.title}
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-gray-300">
                  Guest: <span className="font-semibold text-white">{ep.guest}</span> &bull; {ep.guestRole}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {ep.topics.map((t, idx) => (
                    <span key={idx} className="text-[10px] text-gray-400 bg-[#002D32]/40 px-2 py-0.5 rounded-md">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#002D32]/60 flex items-center justify-between">
                <span className="text-xs font-bold text-[#00E5D4] group-hover:underline">
                  {currentEpisode.id === ep.id && isPlaying ? 'Playing Now' : 'Listen Now'}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#002D32]/60 flex items-center justify-center text-[#00E5D4] group-hover:bg-[#00D9A5] group-hover:text-[#050708] transition-colors">
                  <Play size={14} className="fill-current translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Podcast Guests */}
      <section className="py-16 bg-[#050708] border-t border-[#002D32]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
              Featured Guests
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Visionary leaders who have graced our studio microphones.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {guests.map((g, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#002D32]/20 border border-[#002D32] text-center group hover:border-[#00E5D4]/40 transition-colors"
              >
                <img
                  src={g.img}
                  alt={g.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover mb-4 border-2 border-[#002D32] group-hover:border-[#00E5D4] transition-colors"
                />
                <h4 className="text-base font-bold text-white">{g.name}</h4>
                <p className="text-xs text-gray-400 mt-0.5">{g.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "Want to be a guest?" Section with CTA */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-[#002D32] via-[#063C3A] to-[#050708] border border-[#00E5D4]/40 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00D9A5]">
            BE A GUEST ON LYCAS
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-3">
            Want to be a guest?
          </h3>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto mb-8 font-normal">
            Are you a founder, investor, or visionary operator with an unconventional story and deep industry insights? We would love to feature your journey.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 rounded-full bg-[#00D9A5] hover:bg-[#00E5D4] text-[#050708] font-bold text-sm uppercase tracking-wider inline-flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-[#00E5D4]/20"
          >
            <span>Get in Touch</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
};
