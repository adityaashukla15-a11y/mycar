import React, { useState } from 'react';
import { ArrowUpRight, X, ChevronDown } from 'lucide-react';

interface WorkshopGalleryProps {
  onOpenAppointment: () => void;
}

export const WorkshopGallery: React.FC<WorkshopGalleryProps> = ({ onOpenAppointment }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [showAllMobile, setShowAllMobile] = useState<boolean>(false);

  const workshopServices = [
    {
      id: 'rubbing-polish',
      title: 'Rubbing & Polish',
      subtitle: 'PAINT RESTORATION',
      description: 'Multi-stage swirl removal, scratch smoothing, and mirror-reflection rotary finish.',
      image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'windshield-restoration',
      title: 'Windshield Restoration',
      subtitle: 'OPTICAL CLARITY',
      description: 'Deep mineral water-spot removal, optical glass polishing, and hydrophobic rain-repellent sealing.',
      image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'headlight-restoration',
      title: 'Headlight Restoration',
      subtitle: 'HEADLAMP CLARITY',
      description: 'Oxidation sanding, polycarbonate rejuvenation, and UV clear-coat protection.',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'anti-fogg',
      title: 'Anti-Fogg Treatment',
      subtitle: 'INTERIOR CLARITY',
      description: 'Molecular moisture-resistant barrier preventing glass misting and condensation.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'engine-bay',
      title: 'Engine Bay Detailing',
      subtitle: 'MECHANICAL CARE',
      description: 'Safe steam degreasing, electrical harness isolation, and satin protective dressing.',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'ceramic-shield',
      title: 'Ceramic Coating Shield',
      subtitle: 'SURFACE DEFENSE',
      description: '9H nano-ceramic armor delivering high hydrophobic gloss and multi-year UV protection.',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#fafafa] border-t border-b border-zinc-100">
      <div id="workshop" className="sr-only" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading Tag (No gallery text) */}
        <div className="inline-block mb-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ec7a1b]">
            SPECIALIZED TREATMENTS
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-12 sm:mb-16">
          Workshop Services
        </h2>

        {/* Circular Portals Grid - Shows 3 on mobile initially, all on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-center max-w-5xl mx-auto">
          {workshopServices.map((item, idx) => {
            const isHiddenOnMobile = idx >= 3 && !showAllMobile;

            return (
              <div
                key={item.id}
                id={`workshop-service-${item.id}`}
                className={`flex-col items-center transition-all duration-300 ${
                  isHiddenOnMobile ? 'hidden md:flex' : 'flex'
                }`}
              >
                {/* Circular Portal Container */}
                <div
                  onClick={() => setActiveImage(item.image)}
                  className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-xl border-4 border-white group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-zinc-900"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                    loading="lazy"
                  />

                  {/* Dark subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />

                  {/* Hover indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm text-slate-900 flex items-center justify-center shadow-lg">
                      <ArrowUpRight className="w-5 h-5 text-[#ec7a1b]" />
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div className="mt-4 text-center max-w-xs">
                  <h3 className="text-base font-bold text-zinc-900 tracking-tight">
                    {item.title}
                  </h3>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#ec7a1b] block mt-0.5">
                    {item.subtitle}
                  </span>
                  <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View Toggle Button: See All Services */}
        <div className="mt-10 md:hidden flex justify-center">
          <button
            id="mobile-toggle-all-services-btn"
            type="button"
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="px-6 py-3 rounded-full bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-[#ec7a1b] active:scale-95 transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>{showAllMobile ? 'Show Less' : 'See All Services'}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                showAllMobile ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeImage}
              alt="Expanded view"
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
};
