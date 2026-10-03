import heroStudioImage from '../assets/images/hero podcast.jpg';
import podcastStudioImage from '../assets/images/lycas_podcast_studio_1789754461044.jpg';
import reelCinematicImage from '../assets/images/lycas_reel_cinematic_1789754471388.jpg';
import { CompanyConfig } from '../types';

/**
 * ==========================================================
 * LYCAS MEDIA SPACE - CENTRAL BRAND CONFIGURATION
 * Easily update phone, email, WhatsApp, social links & showreel
 * ==========================================================
 */
export const COMPANY_CONFIG: CompanyConfig = {
  name: 'LYCAS MEDIA SPACE',
  tagline: 'Tell Better Stories.',
  positioning: 'Turning Businesses Into Brands',
  description:
    'Lycas Media Space is a creative media and digital growth agency helping ambitious businesses build stronger brands through strategy, content, podcasting, video production, social media, advertising, websites and business growth solutions.',

  // WhatsApp configuration (configurable variable requested by user)
  whatsappNumber: '+919876543210',
  whatsappDefaultMessage:
    "Hi Lycas Media Space, I'm interested in your services. I'd like to discuss my project.",

  // Contact details
  email: 'hello@lycasmediaspace.com',
  phone: '+91 98765 43210',
  location: 'Mumbai & Bangalore, India',

  // Social URLs
  instagramUrl: 'https://instagram.com/lycasmediaspace',
  youtubeUrl: 'https://youtube.com/@lycasmediaspace',
  linkedinUrl: 'https://linkedin.com/company/lycasmediaspace',

  // Showreel Video (Default preview embed)
  showreelVideoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
};

/**
 * Replaceable image assets for quick editing
 */
export const BRAND_ASSETS = {
  heroImage: heroStudioImage,
  podcastStudioImage: podcastStudioImage,
  reelCinematicImage: reelCinematicImage,
  creativeDirectorImage:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
  mediaProductionImage:
    'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
  strategyBoardImage:
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
};
