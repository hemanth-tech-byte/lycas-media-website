import { ServiceItem } from '../types';
import businessAnalysisImg from '../assets/images/business growth.jpg';
import scriptWritingImg from '../assets/images/business script writing.jpeg';
import podcastStudioImg from '../assets/images/hero podcast.jpg';
import videoProductionImg from '../assets/images/post video.jpg';
import websiteDevelopmentImg from '../assets/images/web development .jpg';
import instagramGrowthImg from '../assets/images/insta growth.jpg';
import metaAdsImg from '../assets/images/meta ads.jpg';
import completeMarketingImg from '../assets/images/marketing.jpeg';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'business-analysis',
    title: 'Business Analysis',
    shortDescription: 'Understand. Plan. Grow.',
    detailedDescription:
      'Data-driven diagnostics of your customer journeys, unit economics, conversion funnels, and retention metrics to uncover high-leverage growth opportunities.',
    iconName: 'BarChart3',
    image: businessAnalysisImg,
    deliverables: [
      'Customer Acquisition Cost & LTV Diagnostic',
      'Sales Funnel Leakage Analysis',
      'Pricing & Packaging Optimizations',
      'Actionable Executive Growth Dashboard',
    ],
    process: ['Data Extraction & Systems Audit', 'Bottleneck Identification', 'Scenario Modeling', 'Implementation Oversight'],
    category: 'core',
  },
  {
    id: 'script-writing',
    title: 'Business Script Writing',
    shortDescription: 'Ideas into powerful stories.',
    detailedDescription:
      'Every viral reel or cinematic brand film starts with a compelling script. Our writers turn complex business propositions into sharp, memorable storytelling.',
    iconName: 'PenTool',
    image: scriptWritingImg,
    deliverables: [
      'High-Retention Short-Form Hooks',
      'Cinematic Commercial Scripts',
      'Founder Keynote & Narrative Outlines',
      'Storyboards & Visual Directing Notes',
    ],
    process: ['Angle & Hook Brainstorming', 'Script Drafting & Pacing', 'Revisions & Founder Rehearsal', 'On-Set Teleprompter Adaptation'],
    category: 'core',
  },
  {
    id: 'business-podcast',
    title: 'Business Podcast',
    shortDescription: 'Real conversations. Real impact.',
    detailedDescription:
      'We design, produce, and distribute industry-leading podcasts that position founders and executive leadership as go-to authorities in their niche.',
    iconName: 'Mic',
    image: podcastStudioImg,
    deliverables: [
      'End-to-End Studio Recording & Direction',
      'Multi-Camera 4K Video Production',
      'Audiophile Mastering & Sound Design',
      'Viral Short Clips for Reels, Shorts & TikTok',
    ],
    process: ['Show Concept & Guest Strategy', 'In-Studio / Remote Direction', 'Cinematic Edit & Sound Design', 'Multi-Platform Distribution'],
    category: 'specialized',
  },
  {
    id: 'video-production',
    title: 'Video Production',
    shortDescription: 'Professional shoots & editing.',
    detailedDescription:
      'Cinematic cameras, director-grade lighting, and razor-sharp post-production. We craft visual stories that command attention and elevate brand perception.',
    iconName: 'Video',
    image: videoProductionImg,
    deliverables: [
      'Brand Commercials & Manifesto Films',
      'Product Showcases & Feature Overviews',
      'Customer Case Study Documentaries',
      'Color Grading, VFX & Motion Graphics',
    ],
    process: ['Pre-Production & Location Scouting', 'Principal Photography with Cinema Gear', 'Rough Cut & Sound Mixing', 'Final Master & Delivery'],
    category: 'specialized',
  },
  {
    id: 'website-development',
    title: 'Website Development',
    shortDescription: 'Modern, high-performing websites.',
    detailedDescription:
      'Bespoke digital flagships engineered for speed, conversion, and breathtaking brand storytelling. Built with modern web technologies that turn visitors into clients.',
    iconName: 'Code',
    image: websiteDevelopmentImg,
    deliverables: [
      'High-Conversion UX & UI Design',
      'Modern Jamstack & Full-Stack Development',
      'Interactive Micro-Animations & 3D Assets',
      'SEO Architecture & Lightning Performance',
    ],
    process: ['Wireframing & Information Architecture', 'High-Fidelity Interactive Design', 'Robust Web Build & QA', 'Speed Optimization & Launch'],
    category: 'specialized',
  },
  {
    id: 'instagram-growth',
    title: 'Instagram Growth',
    shortDescription: 'Content that gets you noticed.',
    detailedDescription:
      'Systematic social media architecture combining high-tempo reel production, carousel breakdowns, and community engagement to drive inbound brand inquiries.',
    iconName: 'TrendingUp',
    image: instagramGrowthImg,
    deliverables: [
      'Daily/Weekly High-Converting Content Calendar',
      'Original 9:16 Video Reels & Carousels',
      'Bio, Profile & Highlights Overhaul',
      'Community Management & Inbound Routing',
    ],
    process: ['Trend Auditing & Content Pillars', 'Batch Production Days', 'Algorithmic Distribution', 'Analytics & Iteration'],
    category: 'growth',
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads',
    shortDescription: 'Reach the right audience.',
    detailedDescription:
      'Creative-led performance marketing on Instagram and Facebook that pairs thumb-stopping creatives with high-conversion landing pages to scale revenue.',
    iconName: 'Target',
    image: metaAdsImg,
    deliverables: [
      'Ad Creative Strategy & Video Variants',
      'Full-Funnel Campaign Architecture',
      'Pixel, CAPI & Custom Audiences Setup',
      'Continuous A/B Testing & ROAS Optimization',
    ],
    process: ['Creative Hook Testing', 'Audience Segmentation', 'Budget Scaling', 'Weekly ROAS Reporting'],
    category: 'growth',
  },
  {
    id: 'complete-marketing-solutions',
    title: 'Complete Marketing Solutions',
    shortDescription: 'A to Z under one roof.',
    detailedDescription:
      'Your fractional chief marketing and media production team. Strategy, creative, production, media buying, and web development synchronized in one powerhouse.',
    iconName: 'Sparkles',
    image: completeMarketingImg,
    deliverables: [
      'Dedicated Creative Director & Growth Lead',
      'Full Creative Media & Studio Retainer',
      'Unified Performance & Brand KPIs',
      'Seamless Multi-Channel Execution',
    ],
    process: ['Initial Deep Diagnostic', 'Unified Campaign Deployment', 'Weekly Performance Reviews', 'Continuous Scale'],
    category: 'growth',
  },
  {
    id: 'strategy',
    title: 'Strategy',
    shortDescription: 'Market positioning and brand architecture that sets you apart.',
    detailedDescription:
      'Before creating a single asset, we dissect your market, ideal customer profile, and competitive whitespace to position your business as the undisputed category leader.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Brand Identity & Positioning Playbook',
      'Competitor & Whitespace Analysis',
      'Core Messaging Framework',
      'Quarterly Growth Roadmap',
    ],
    process: ['Discovery & Stakeholder Audit', 'Market & Competitor Mapping', 'Positioning Synthesis', 'Execution Roadmap'],
    category: 'core',
  },
  {
    id: 'content-strategy',
    title: 'Content Strategy',
    shortDescription: 'Content architecture engineered for authority and recall.',
    detailedDescription:
      'We craft cross-platform content frameworks that answer your audience’s deepest pains, spark discussions, and build compounding brand equity.',
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Cross-Platform Content Playbook',
      'Narrative Pillars & Tone Guide',
      'Omni-Channel Repurposing Matrix',
      'Quarterly Editorial Calendar',
    ],
    process: ['Audience Sentiment Research', 'Pillar Definition', 'Workflow Setup', 'Review Cadence'],
    category: 'core',
  },
];
