import { ProjectCaseStudy } from '../types';

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: 'pulse-ev',
    title: 'Electrifying Next-Gen Urban Mobility',
    client: 'Pulse EV Dynamics',
    industry: 'EV & Mobility',
    category: 'Branding',
    services: ['Brand Strategy', 'Visual Identity', 'Launch Film', 'Website'],
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
    shortResult: 'Over 14,000 pre-orders secured within 30 days of campaign launch.',
    challenge:
      'Pulse EV needed to transition from an R&D prototype into a desirable, premium electric motorcycle brand competing with legacy manufacturers.',
    solution:
      'Crafted a high-octane brand manifesto, cinematic reveal commercials, 3D interactive web showroom, and founder podcast appearances that dominated media headlines.',
    impactMetrics: [
      { label: 'Pre-Orders Generated', value: '14,200+' },
      { label: 'Showreel Video Views', value: '3.8M' },
      { label: 'Organic Press Mentions', value: '45+' },
    ],
    featured: true,
  },
  {
    id: 'lumina-aesthetic',
    title: 'Positioning Luxury Dermatology into a High-Converting Brand',
    client: 'Lumina Skin Sciences',
    industry: 'Healthcare',
    category: 'Social Media',
    services: ['Instagram Growth', 'Script Writing', 'Reels Production'],
    image: 'https://images.unsplash.com/photo-1512290900672-1f558169994c?auto=format&fit=crop&w=1200&q=80',
    shortResult: '420% increase in qualified consultation bookings within 90 days.',
    challenge:
      'High competition and generic medical advice had stalled patient acquisition through traditional digital channels.',
    solution:
      'Restructured founder communication with scientific storytelling reels, myth-busting carousels, and an aesthetic video treatment that built immediate clinical credibility.',
    impactMetrics: [
      { label: 'Patient Inquiries', value: '+420%' },
      { label: 'Follower Growth', value: '12K to 148K' },
      { label: 'Average Watch Time', value: '88%' },
    ],
    featured: true,
  },
  {
    id: 'apex-capital-podcast',
    title: 'The Unfiltered Founder Podcast Production',
    client: 'Apex Capital Partners',
    industry: 'Startups & Venture',
    category: 'Podcast',
    services: ['Business Podcast', 'Video Production', 'Short Clips'],
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80',
    shortResult: 'Ranked #1 Technology & Venture Podcast on Spotify within 6 episodes.',
    challenge:
      'Venture partners wanted to attract Tier-1 founders through authentic, thought-provoking dialogue rather than typical press releases.',
    solution:
      'Engineered an all-black studio setup with moody warm tungsten highlights, 3-camera 4K live switching, pristine audio mastering, and viral short clips formatted for LinkedIn and Reels.',
    impactMetrics: [
      { label: 'Podcast Chart Rank', value: '#1 Spotify Tech' },
      { label: 'Total Downloads', value: '650,000+' },
      { label: 'Inbound Deal Flow', value: '38 Startups' },
    ],
    featured: true,
  },
  {
    id: 'solis-living',
    title: 'Cinematic Architecture Film & Digital Flagship',
    client: 'Solis Sanctuary Living',
    industry: 'Real Estate',
    category: 'Websites',
    services: ['Website Development', 'Cinematic Film', 'Meta Ads'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    shortResult: 'Entire luxury villa phase sold out 4 months ahead of schedule.',
    challenge:
      'Ultra-luxury villas priced above $2M required an emotional, architectural connection before high-net-worth buyers would fly in for physical visits.',
    solution:
      'Produced a documentary-style short film detailing the architect’s vision, paired with an editorial interactive website featuring virtual 360 walk-throughs and private booking concierge.',
    impactMetrics: [
      { label: 'Gross Value Sold', value: '$24M' },
      { label: 'International Leads', value: '310 HNWIs' },
      { label: 'Site Conversion Rate', value: '4.8%' },
    ],
    featured: false,
  },
  {
    id: 'vigor-nutrition',
    title: 'Meta Performance Ads & Creative Scale',
    client: 'Vigor Clean Performance',
    industry: 'Fitness',
    category: 'Marketing',
    services: ['Meta Ads', 'Video Production', 'Creative Testing'],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    shortResult: '5.2x ROAS maintained across $180,000 in ad spend.',
    challenge:
      'Ad fatigue and rising CAC on Meta had crushed margins for their clean protein supplement line.',
    solution:
      'Shot 35 modular video hooks featuring real athletes, UGC-style tests, and scientific breakdowns that were deployed into rapid creative testing matrix.',
    impactMetrics: [
      { label: 'Consistent ROAS', value: '5.2x' },
      { label: 'Reduction in CAC', value: '-38%' },
      { label: 'Monthly Revenue', value: '$450K+' },
    ],
    featured: false,
  },
  {
    id: 'artisan-bakery',
    title: 'Stories from the Flour Room: Brand Documentary',
    client: 'Crumb & Co. Boulangerie',
    industry: 'F&B',
    category: 'Video',
    services: ['Video Production', 'Script Writing', 'Instagram Growth'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    shortResult: 'Foot traffic doubled; viral sourdough series achieved 4.2M views.',
    challenge:
      'An artisanal sourdough bakery needed to differentiate from mass-market bakery chains and command premium pricing.',
    solution:
      'Created high-sensory macro video reels documenting the 72-hour fermentation process with custom binaural ASMR sound design.',
    impactMetrics: [
      { label: 'Viral Reel Views', value: '4.2M' },
      { label: 'Weekly Footfall', value: '+115%' },
      { label: 'Catering Inquiries', value: '95+ events' },
    ],
    featured: false,
  },
];
