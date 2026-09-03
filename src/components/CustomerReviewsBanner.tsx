import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const CustomerReviewsBanner: React.FC = () => {
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
        'Fast 30-minute booking turnaround. I was able to review inspection photos right on my phone. Showroom shine delivery.',
    },
  ];

  const currentReview = reviews[activeReviewIndex];

  return (
    <div id="reviews" className="w-full py-12 sm:py-16 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-zinc-50/80 rounded-3xl p-6 sm:p-10 border border-zinc-200/80 shadow-xs">
          {/* Left side: Rating score */}
          <div className="flex items-center gap-5 sm:gap-6 shrink-0">
            <div className="text-5xl sm:text-6xl font-black text-zinc-900 tracking-tighter">
              5.0
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <div className="text-xs sm:text-sm font-black text-zinc-900 tracking-wider uppercase">
                1876 VERIFIED REVIEWS
              </div>
            </div>
          </div>

          {/* Right side: Testimonial carousel */}
          <div className="flex-1 max-w-xl border-t md:border-t-0 md:border-l border-zinc-200 pt-6 md:pt-0 md:pl-8 w-full">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="inline-block px-3 py-0.5 rounded-full bg-orange-50 text-[#ec7a1b] text-[11px] font-bold uppercase tracking-widest">
                {currentReview.role}
              </span>
              <span className="text-xs text-zinc-500 font-medium">
                {currentReview.car}
              </span>
            </div>
            <p className="text-sm sm:text-base text-zinc-700 italic leading-relaxed">
              "{currentReview.comment}"
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs font-bold text-zinc-900 uppercase tracking-wide">
                — {currentReview.author}
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  aria-label="Previous Review"
                  onClick={() =>
                    setActiveReviewIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
                  }
                  className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-900 hover:bg-zinc-200 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next Review"
                  onClick={() =>
                    setActiveReviewIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
                  }
                  className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-900 hover:bg-zinc-200 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
