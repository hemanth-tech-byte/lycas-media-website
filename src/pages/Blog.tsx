import React, { useState } from 'react';
import { Sparkles, Search, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { BLOG_POSTS_DATA } from '../data/blogPosts';
import { BlogPost, PageId } from '../types';
import { ArticleModal } from '../components/ArticleModal';

interface BlogProps {
  onNavigate: (page: PageId) => void;
}

type BlogCategory = 'All' | 'Branding' | 'Marketing' | 'Business' | 'Technology' | 'Social Media' | 'Growth' | 'Content';

export const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('All');
  const [activeArticleModal, setActiveArticleModal] = useState<BlogPost | null>(null);

  const categories: BlogCategory[] = [
    'All',
    'Branding',
    'Marketing',
    'Business',
    'Technology',
    'Social Media',
    'Growth',
    'Content',
  ];

  const filteredPosts = BLOG_POSTS_DATA.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="blog-page" className="pt-28 pb-20 bg-[#050708]">
      {/* Hero Header */}
      <section className="py-16 md:py-24 border-b border-[#002D32]/50 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#002D32]/30 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#002D32]/80 border border-[#00E5D4]/40 text-[#00E5D4] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              <Sparkles size={13} />
              <span>THE EDITORIAL DESK</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[1.08]">
              STORIES &
              <br />
              <span className="bg-gradient-to-r from-[#00D9A5] to-[#00E5D4] bg-clip-text text-transparent">
                STRATEGIC INSIGHTS
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 font-normal">
              Essays, blueprints, and analytical breakdowns on modern media architecture, algorithmic distribution, and high-converting brand building.
            </p>

            {/* Search Input & Category Filters */}
            <div className="mt-8 space-y-4">
              <div className="relative max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, strategies, guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full bg-[#002D32]/40 border border-[#002D32] text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00E5D4] transition-colors"
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#00E5D4] text-[#050708]'
                        : 'bg-[#002D32]/50 text-gray-300 hover:text-white hover:bg-[#002D32]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            No articles found matching "{searchQuery}". Try a different search term or category.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setActiveArticleModal(post)}
                className="group relative flex flex-col rounded-3xl overflow-hidden bg-[#050708] border border-[#002D32] hover:border-[#00E5D4]/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00E5D4]/10 cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#00E5D4]/40 text-[#00E5D4] text-xs font-bold tracking-wider uppercase">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} className="text-[#00D9A5]" />
                        {post.date}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} className="text-[#00D9A5]" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white leading-snug group-hover:text-[#00E5D4] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-gray-400 font-normal leading-relaxed line-clamp-3">
                      {post.shortDescription}
                    </p>
                  </div>

                  {/* Read Link */}
                  <div className="mt-6 pt-4 border-t border-[#002D32]/60 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#00E5D4] group-hover:underline">
                      Read Article &rarr;
                    </span>
                    <span className="text-[11px] text-gray-400">{post.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Article Reading Modal */}
      <ArticleModal
        post={activeArticleModal}
        onClose={() => setActiveArticleModal(null)}
        onContactClick={() => onNavigate('contact')}
      />
    </div>
  );
};
