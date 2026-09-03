import React, { useState } from 'react';
import { Star, ArrowRight, Calendar, User, Clock, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data';

export const ReviewsAndBlogSection: React.FC = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const reviews = [
    {
      author: 'Marcus Vance',
      role: 'CAR OWNER',
      car: 'Porsche 911 GT3',
      rating: 5,
      comment:
        'The precision detailing and touchless wash process preserved my ceramic coating impeccably. Easily the most reliable car care studio I have encountered.',
    },
    {
      author: 'Elena Rostova',
      role: 'CAR OWNER',
      car: 'Mercedes-AMG G63',
      rating: 5,
      comment:
        'They cleaned spots inside the air vents and leather seams that other auto washes never even touched. The interior smells freshly cured without chemical odors.',
    },
    {
      author: 'Jordan Hayes',
      role: 'CAR OWNER',
      car: 'Tesla Model S Plaid',
      rating: 5,
      comment:
        'Fast 30-minute booking turnaround. I was able to review inspection photos right on my phone. 10/10 showroom shine.',
    },
  ];

  const currentReview = reviews[activeReviewIndex];

  return (
    <section id="blog" className="py-16 sm:py-24 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Proof & Review Banner (Matching Video 00:06) */}
        <div id="reviews" className="mb-20 pb-16 border-b border-zinc-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-zinc-50/70 rounded-3xl p-8 sm:p-10 border border-zinc-200/80">
            {/* Left side: Rating score */}
            <div className="flex items-center gap-6 shrink-0">
              <div className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tighter">
                5.0
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>
                <div className="text-xs sm:text-sm font-black text-slate-900 tracking-wider uppercase">
                  1876 REVIEWS
                </div>
              </div>
            </div>

            {/* Right side: Testimonial carousel */}
            <div className="flex-1 max-w-xl border-t md:border-t-0 md:border-l border-zinc-200 pt-6 md:pt-0 md:pl-8">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-block px-3 py-0.5 rounded-full bg-orange-50 text-[#ec7a1b] text-[11px] font-bold uppercase tracking-widest">
                  {currentReview.role}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {currentReview.car}
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
                "{currentReview.comment}"
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  — {currentReview.author}
                </span>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() =>
                      setActiveReviewIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
                    }
                    className="p-1 rounded-full text-slate-400 hover:text-slate-900 hover:bg-zinc-200 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveReviewIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
                    }
                    className="p-1 rounded-full text-slate-400 hover:text-slate-900 hover:bg-zinc-200 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog & News Section Header (Matching Video 00:06) */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ec7a1b]">
            [ BLOG & NEWS ]
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-2">
            Tips and Latest News
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto mt-2">
            Expert maintenance insights, seasonal detailing guides, and car preservation secrets.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-3xl bg-white border border-zinc-200 overflow-hidden group shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-slate-900 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#ec7a1b]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#ec7a1b] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600">
                    By {post.author}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-[#ec7a1b] group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
