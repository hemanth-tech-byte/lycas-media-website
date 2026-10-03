import React, { useState } from 'react';
import {
  Star,
  Quote,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  TrendingUp,
  LayoutGrid,
  SlidersHorizontal,
  PlusCircle,
  X,
  MessageSquareQuote,
  ShieldCheck,
  Building2,
  Briefcase,
  Award
} from 'lucide-react';
import { ReviewItem, ReviewCategory } from '../types';
import { REVIEWS_DATA, REVIEWS_OVERVIEW } from '../data/reviews';

interface ReviewsSectionProps {
  onContactClick?: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onContactClick }) => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS_DATA);
  const [activeCategory, setActiveCategory] = useState<ReviewCategory>('All');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'spotlight' | 'grid'>('spotlight');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form state for client feedback submission
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formIndustry, setFormIndustry] = useState('');
  const [formCategory, setFormCategory] = useState<'Podcast & Video' | 'Brand Strategy' | 'Growth & Ads' | 'Web & Design'>('Podcast & Video');
  const [formRating, setFormRating] = useState<number>(5);
  const [formMetric, setFormMetric] = useState('');
  const [formReview, setFormReview] = useState('');
  const [formService, setFormService] = useState('');

  const filterCategories: ReviewCategory[] = [
    'All',
    'Podcast & Video',
    'Brand Strategy',
    'Growth & Ads',
    'Web & Design',
  ];

  const filteredReviews = reviewsList.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  // Ensure current index is within bounds of filtered items
  const safeIndex = currentIndex >= filteredReviews.length ? 0 : currentIndex;
  const activeReview = filteredReviews[safeIndex] || filteredReviews[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredReviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredReviews.length - 1 ? 0 : prev + 1));
  };

  const handleCategoryChange = (cat: ReviewCategory) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formReview.trim() || !formCompany.trim()) return;

    const newReview: ReviewItem = {
      id: `rev-user-${Date.now()}`,
      clientName: formName.trim(),
      role: formRole.trim() || 'Founder & Client',
      company: formCompany.trim(),
      industry: formIndustry.trim() || 'High-Growth Venture',
      category: formCategory,
      avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80`,
      rating: formRating,
      review: formReview.trim(),
      metricsHighlight: formMetric.trim() || 'Verified Impact Delivered',
      serviceUsed: formService.trim() || `${formCategory} Growth Engine`,
      verified: true,
      date: 'Just now',
    };

    setReviewsList([newReview, ...reviewsList]);
    setIsModalOpen(false);
    setActiveCategory('All');
    setCurrentIndex(0);
    setViewMode('spotlight');

    // Reset fields
    setFormName('');
    setFormRole('');
    setFormCompany('');
    setFormIndustry('');
    setFormMetric('');
    setFormReview('');
    setFormService('');
    setFormRating(5);

    // Show toast
    setToastMessage('Thank you! Your review has been added to our wall of love.');
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <section
      id="reviews"
      aria-label="Client Reviews and Testimonials"
      className="py-24 relative bg-[#050708] overflow-hidden border-t border-[#002D32]/60"
    >
      {/* Ambient background glow layers */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#002D32]/25 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00D9A5]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#002D32]/80 border border-[#00E5D4]/40 text-[#00E5D4] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              <Sparkles size={13} />
              <span>CLIENT REPUTATION & REVIEWS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase leading-[1.08]">
              TURNING STORIES
              <br />
              <span className="bg-gradient-to-r from-[#00D9A5] via-[#00E5D4] to-teal-300 bg-clip-text text-transparent">
                INTO MEASURABLE TRUST.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
              From executive podcast launches to viral media engines and high-conversion flagships, see how ambitious founders scale with Lycas Media Space.
            </p>
          </div>

          {/* Quick Actions: Leave Review & View Toggle */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#002D32] to-[#063C3A] border border-[#00E5D4]/40 text-[#00E5D4] text-xs sm:text-sm font-bold uppercase tracking-wider hover:border-[#00E5D4] hover:shadow-lg hover:shadow-[#00E5D4]/20 transition-all active:scale-95"
            >
              <PlusCircle size={16} />
              <span>Leave a Review</span>
            </button>

            <div className="inline-flex items-center p-1 rounded-xl bg-[#002D32]/60 border border-[#002D32]">
              <button
                onClick={() => setViewMode('spotlight')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'spotlight'
                    ? 'bg-[#00E5D4] text-[#050708] shadow-md shadow-[#00E5D4]/20'
                    : 'text-gray-400 hover:text-white'
                }`}
                title="Spotlight Carousel View"
              >
                <SlidersHorizontal size={14} />
                <span className="hidden sm:inline">Spotlight</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-[#00E5D4] text-[#050708] shadow-md shadow-[#00E5D4]/20'
                    : 'text-gray-400 hover:text-white'
                }`}
                title="All Reviews Grid"
              >
                <LayoutGrid size={14} />
                <span className="hidden sm:inline">Grid ({reviewsList.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Rating Dashboard Summary Card */}
        <div id="reviews-overview-card" className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#002D32]/40 via-[#050708] to-[#063C3A]/30 border border-[#002D32] backdrop-blur-xl shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {/* Overall Rating */}
            <div className="border-r border-[#002D32]/80 pr-4">
              <div className="flex items-center gap-1.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#00E5D4] text-[#00E5D4]" />
                ))}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-white">
                  {REVIEWS_OVERVIEW.averageRating}
                </span>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                  / 5.0 Average
                </span>
              </div>
              <p className="text-xs text-[#00E5D4] font-medium mt-1">
                Based on {reviewsList.length}+ Verified Clients
              </p>
            </div>

            {/* Satisfaction Rate */}
            <div className="border-r-0 md:border-r border-[#002D32]/80 pr-4">
              <div className="flex items-center gap-2 text-[#00D9A5] mb-1">
                <TrendingUp size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Satisfaction</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white">
                {REVIEWS_OVERVIEW.satisfactionRate}
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Client retention & renewal rate
              </p>
            </div>

            {/* Inbound Growth */}
            <div className="border-r border-[#002D32]/80 pr-4">
              <div className="flex items-center gap-2 text-[#00E5D4] mb-1">
                <Award size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Delivered</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white">
                ₹50 Cr+
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Client pipeline value generated
              </p>
            </div>

            {/* Verification Guarantee */}
            <div>
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <ShieldCheck size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Clutch Verified</span>
              </div>
              <div className="text-sm font-bold text-white leading-tight">
                Top Media Agency 2026
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Google 5.0 ★ & Clutch Global
              </p>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {filterCategories.map((cat) => {
              const count = cat === 'All'
                ? reviewsList.length
                : reviewsList.filter((r) => r.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-[#00E5D4] text-[#050708] shadow-md shadow-[#00E5D4]/25'
                      : 'bg-[#002D32]/40 text-gray-300 hover:text-white hover:bg-[#002D32]/70 border border-[#002D32]'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          {/* Carousel controls if in spotlight view */}
          {viewMode === 'spotlight' && filteredReviews.length > 1 && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-400 mr-2 uppercase tracking-wider">
                {String(safeIndex + 1).padStart(2, '0')} / {String(filteredReviews.length).padStart(2, '0')}
              </span>
              <button
                onClick={handlePrev}
                aria-label="Previous Review"
                className="w-10 h-10 rounded-xl bg-[#002D32]/60 hover:bg-[#002D32] border border-[#002D32] hover:border-[#00E5D4]/60 flex items-center justify-center text-gray-300 hover:text-[#00E5D4] transition-all active:scale-95"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Review"
                className="w-10 h-10 rounded-xl bg-[#002D32]/60 hover:bg-[#002D32] border border-[#002D32] hover:border-[#00E5D4]/60 flex items-center justify-center text-gray-300 hover:text-[#00E5D4] transition-all active:scale-95"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        {/* ========================================================
            VIEW MODE 1: SPOTLIGHT CAROUSEL
            ======================================================== */}
        {viewMode === 'spotlight' && activeReview && (
          <div className="space-y-8">
            <div id="review-spotlight-card" className="relative rounded-3xl bg-gradient-to-br from-[#002D32]/50 via-[#050708] to-[#063C3A]/40 border border-[#002D32] p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Background watermark quote icon */}
              <Quote
                size={180}
                className="absolute -right-8 -bottom-10 text-[#002D32]/30 pointer-events-none select-none"
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left: Client Avatar and Highlight Box */}
                <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="relative mb-5">
                    <img
                      src={activeReview.avatar}
                      alt={activeReview.clientName}
                      referrerPolicy="no-referrer"
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-[#00E5D4]/40 shadow-xl shadow-[#00E5D4]/10"
                    />
                    <div
                      className="absolute -bottom-2 -right-2 bg-[#00E5D4] text-[#050708] p-1.5 rounded-lg shadow-md"
                      title="Verified Client of Lycas Media Space"
                    >
                      <CheckCircle2 size={16} />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {activeReview.clientName}
                  </h3>
                  <p className="text-sm font-semibold text-[#00E5D4] mt-0.5">
                    {activeReview.role}
                  </p>
                  <p className="text-xs text-gray-400 font-medium flex items-center gap-1.5 mt-1">
                    <Building2 size={12} className="text-gray-500" />
                    <span>{activeReview.company}</span>
                  </p>
                  <span className="inline-block mt-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#002D32]/80 text-gray-300 border border-[#002D32]">
                    {activeReview.industry}
                  </span>

                  {/* Highlight Result Pill */}
                  {activeReview.metricsHighlight && (
                    <div className="mt-5 w-full p-3.5 rounded-xl bg-gradient-to-r from-[#00D9A5]/10 to-[#00E5D4]/10 border border-[#00E5D4]/30">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#00E5D4] flex items-center gap-1.5 mb-1">
                        <TrendingUp size={12} />
                        <span>Key Result Achieved</span>
                      </div>
                      <div className="text-sm font-black text-white">
                        {activeReview.metricsHighlight}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Big Editorial Testimonial */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    {/* Stars and Service Tag */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-1">
                        {[...Array(activeReview.rating)].map((_, i) => (
                          <Star key={i} size={20} className="fill-[#00E5D4] text-[#00E5D4]" />
                        ))}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#002D32] text-[#00E5D4] border border-[#002D32]">
                        {activeReview.serviceUsed}
                      </span>
                    </div>

                    {/* Review Quote */}
                    <blockquote className="text-lg sm:text-2xl font-medium text-gray-100 leading-relaxed font-sans italic">
                      “{activeReview.review}”
                    </blockquote>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#002D32]/80 flex flex-wrap items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1.5 text-gray-400">
                      <Briefcase size={13} className="text-[#00E5D4]" />
                      Category: <strong className="text-white">{activeReview.category}</strong>
                    </span>
                    <span className="text-gray-500">Verified Project • {activeReview.date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Thumbnails Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 pt-2">
              {filteredReviews.map((rev, idx) => (
                <button
                  key={rev.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`p-2.5 rounded-xl border text-left transition-all group ${
                    idx === safeIndex
                      ? 'bg-[#002D32]/90 border-[#00E5D4] shadow-md shadow-[#00E5D4]/20'
                      : 'bg-[#002D32]/30 border-[#002D32] hover:border-[#00E5D4]/40 hover:bg-[#002D32]/60'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <img
                      src={rev.avatar}
                      alt={rev.clientName}
                      referrerPolicy="no-referrer"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <div className="flex">
                      {[...Array(5)].map((_, starI) => (
                        <Star
                          key={starI}
                          size={9}
                          className="fill-[#00E5D4] text-[#00E5D4]"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-xs font-bold text-white truncate">
                    {rev.clientName}
                  </div>
                  <div className="text-[10px] text-gray-400 truncate">
                    {rev.company}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            VIEW MODE 2: COMPLETE REVIEWS GRID
            ======================================================== */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                id={`review-grid-card-${review.id}`}
                className="group relative rounded-2xl bg-gradient-to-b from-[#002D32]/40 via-[#050708] to-[#002D32]/20 border border-[#002D32] hover:border-[#00E5D4]/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00E5D4]/10 backdrop-blur-md review-grid-card"
              >
                <div>
                  {/* Top Bar: Stars & Verified Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={15} className="fill-[#00E5D4] text-[#00E5D4]" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#00E5D4] bg-[#002D32]/80 px-2 py-0.5 rounded-full border border-[#002D32]">
                      <CheckCircle2 size={11} />
                      Verified
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-gray-300 leading-relaxed font-normal mb-5">
                    “{review.review}”
                  </p>
                </div>

                {/* Bottom Details */}
                <div className="pt-4 border-t border-[#002D32]/80">
                  {review.metricsHighlight && (
                    <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#00D9A5]/10 border border-[#00D9A5]/30 text-[#00E5D4] text-xs font-bold">
                      <TrendingUp size={12} />
                      <span>{review.metricsHighlight}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.clientName}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-xl object-cover border border-[#00E5D4]/30"
                    />
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-[#00E5D4] transition-colors">
                        {review.clientName}
                      </div>
                      <div className="text-xs text-gray-400 font-medium">
                        {review.role}, <span className="text-gray-300">{review.company}</span>
                      </div>
                      <div className="text-[10px] text-[#00E5D4]/80 mt-0.5">
                        {review.serviceUsed}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Toast confirmation */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-[#002D32] border border-[#00E5D4] text-white shadow-2xl flex items-center gap-3 animate-fade-in keep-white">
            <CheckCircle2 size={20} className="text-[#00E5D4] flex-shrink-0" />
            <p className="text-xs sm:text-sm font-medium">{toastMessage}</p>
          </div>
        )}

        {/* ========================================================
            MODAL: LEAVE A CLIENT REVIEW
            ======================================================== */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#050708] border border-[#00E5D4]/40 p-6 sm:p-8 shadow-2xl shadow-black/80">
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-[#002D32]/60 hover:bg-[#002D32] text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-[#002D32] text-[#00E5D4]">
                  <MessageSquareQuote size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                    Share Your Experience
                  </h3>
                  <p className="text-xs text-gray-400">
                    Add your feedback to the Lycas Media Space wall of love.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmitReview} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#002D32]/40 border border-[#002D32] text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00E5D4]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Designation / Role *
                    </label>
                    <input
                      type="text"
                      required
                      value={formRole}
                      onChange={(e) => setFormRole(e.target.value)}
                      placeholder="e.g. Founder & CEO"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#002D32]/40 border border-[#002D32] text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00E5D4]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Company / Brand Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formCompany}
                      onChange={(e) => setFormCompany(e.target.value)}
                      placeholder="e.g. ZenScale Technologies"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#002D32]/40 border border-[#002D32] text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00E5D4]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Industry
                    </label>
                    <input
                      type="text"
                      value={formIndustry}
                      onChange={(e) => setFormIndustry(e.target.value)}
                      placeholder="e.g. SaaS, Fintech, D2C"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#002D32]/40 border border-[#002D32] text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00E5D4]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Service Category
                    </label>
                    <select
                      value={formCategory}
                      onChange={(e) =>
                        setFormCategory(
                          e.target.value as 'Podcast & Video' | 'Brand Strategy' | 'Growth & Ads' | 'Web & Design'
                        )
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#002D32]/80 border border-[#002D32] text-white text-sm focus:outline-none focus:border-[#00E5D4]"
                    >
                      <option value="Podcast & Video">Podcast & Video</option>
                      <option value="Brand Strategy">Brand Strategy</option>
                      <option value="Growth & Ads">Growth & Ads</option>
                      <option value="Web & Design">Web & Design</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Rating
                    </label>
                    <div className="flex items-center gap-2 py-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormRating(star)}
                          className="focus:outline-none"
                        >
                          <Star
                            size={24}
                            className={`transition-colors ${
                              star <= formRating
                                ? 'fill-[#00E5D4] text-[#00E5D4]'
                                : 'text-gray-600'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-white ml-2">
                        {formRating}.0 / 5.0
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Highlight Metric / Result (Optional)
                  </label>
                  <input
                    type="text"
                    value={formMetric}
                    onChange={(e) => setFormMetric(e.target.value)}
                    placeholder="e.g. +350% Inbound Leads or 5M Views"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#002D32]/40 border border-[#002D32] text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00E5D4]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Your Review & Testimonial *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formReview}
                    onChange={(e) => setFormReview(e.target.value)}
                    placeholder="Describe the impact Lycas Media Space had on your brand, production quality, audience growth, or business revenue..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#002D32]/40 border border-[#002D32] text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00E5D4]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl bg-transparent border border-[#002D32] text-gray-400 text-xs font-bold uppercase tracking-wider hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#00E5D4] hover:bg-[#00D9A5] text-[#050708] text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-[#00E5D4]/25 transition-all"
                  >
                    Publish Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
