import React from 'react';
import { Hero } from '../components/Hero';
import { ServiceGrid } from '../components/ServiceGrid';
import { ImpactStats } from '../components/ImpactStats';
import { BrandStatement } from '../components/BrandStatement';
import { ReelGallery } from '../components/ReelGallery';
import { IndustryScroller } from '../components/IndustryScroller';
import { ReviewsSection } from '../components/ReviewsSection';
import { CTASection } from '../components/CTASection';
import { PageId } from '../types';

interface HomeProps {
  onNavigate: (page: PageId, serviceId?: string) => void;
  onOpenShowreel: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenShowreel }) => {
  return (
    <div id="home-page" className="w-full">
      {/* 4. Hero Section */}
      <Hero
        onWatchShowreel={onOpenShowreel}
        onBookConsultation={() => onNavigate('contact')}
      />

      {/* 6. Quick Access Services */}
      <ServiceGrid
        onSelectService={(serviceId) => onNavigate('services', serviceId)}
        onViewAllServices={() => onNavigate('services')}
      />

      {/* 7. Our Impact Dark Statistics */}
      <ImpactStats />

      {/* 8. Brand Statement Quote Card */}
      <BrandStatement />

      {/* 11 & 12 & 30. Floating Reels Section */}
      <ReelGallery onExploreWork={() => onNavigate('work')} />

      {/* 10. Industries Horizontal Scroller */}
      <IndustryScroller />

      {/* Client Reviews & Testimonials Wall */}
      <ReviewsSection onContactClick={() => onNavigate('contact')} />

      {/* 9. Conversion CTA Card */}
      <CTASection onContactClick={() => onNavigate('contact')} />
    </div>
  );
};
