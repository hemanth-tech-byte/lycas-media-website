export type PageId = 'home' | 'about' | 'services' | 'work' | 'podcast' | 'blog' | 'contact';

export interface CompanyConfig {
  name: string;
  tagline: string;
  positioning: string;
  description: string;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
  email: string;
  phone: string;
  location: string;
  instagramUrl: string;
  youtubeUrl: string;
  linkedinUrl: string;
  showreelVideoUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  image: string;
  deliverables: string[];
  process: string[];
  category: 'core' | 'specialized' | 'growth';
}

export interface ReelItem {
  id: number;
  reelNumber: string; // e.g. "REEL 01"
  title: string;
  category: string;
  videoUrl: string;
  thumbnail: string;
  duration?: string;
  views?: string;
}

export interface ImpactStat {
  id: string;
  value: string;
  label: string;
  suffix?: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: 'Branding' | 'Social Media' | 'Video' | 'Websites' | 'Marketing' | 'Podcast';
  services: string[];
  image: string;
  shortResult: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  featured?: boolean;
}

export interface PodcastEpisode {
  id: string;
  episodeNumber: number;
  title: string;
  guest: string;
  guestRole: string;
  duration: string;
  date: string;
  description: string;
  audioUrl: string;
  videoUrl?: string;
  thumbnail: string;
  featured?: boolean;
  topics: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Branding' | 'Marketing' | 'Business' | 'Technology' | 'Social Media' | 'Growth' | 'Content';
  shortDescription: string;
  content: string[];
  date: string;
  readTime: string;
  image: string;
  author: string;
}

export interface ContactFormData {
  name: string;
  businessName: string;
  phoneNumber: string;
  email: string;
  serviceRequired: string;
  budgetRange: string;
  message: string;
}

export type ReviewCategory = 'All' | 'Podcast & Video' | 'Brand Strategy' | 'Growth & Ads' | 'Web & Design';

export interface ReviewItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  industry: string;
  category: 'Podcast & Video' | 'Brand Strategy' | 'Growth & Ads' | 'Web & Design';
  avatar: string;
  rating: number;
  review: string;
  metricsHighlight?: string;
  serviceUsed: string;
  verified: boolean;
  date: string;
}
