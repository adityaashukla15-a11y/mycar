import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface BeforeAfterSectionProps {
  onOpenAppointment: () => void;
  onNavigateAbout?: () => void;
}

interface DetailingPair {
  id: 'exterior' | 'interior' | 'wheels';
  title: string;
  badge: string;
  beforeImg: string;
  afterImg: string;
  description: string;
  treatment: string;
}

const DETAILING_PAIRS: DetailingPair[] = [
  {
    id: 'exterior',
    title: 'Exterior Paint & Gloss',
    badge: 'Ceramic Coating',
    beforeImg: '/car-before-exterior.jpg',
    afterImg: '/car-after-exterior.jpg',
    description: 'Restores paint depth, removes road grime and swirl marks, and seals the clear coat with a mirror-finish ceramic shine.',
    treatment: 'Full foam wash, clay-bar decontamination, dual-action machine polish, and hydrophobic ceramic sealant.'
  },
  {
    id: 'interior',
    title: 'Interior Steam & Sanitization',
    badge: 'Deep Sanitized',
    beforeImg: '/interior-before.jpg',
    afterImg: '/interior-after.jpg',
    description: 'Eliminates trapped dust, allergen particles, and leather grime with pressurized high-temperature steam detailing.',
    treatment: 'Hot-water extraction, antimicrobial steam wipe-down, conditioning for premium leather, and ozone purification.'
  },
  {
    id: 'wheels',
    title: 'Alloy Wheels & Rims',
    badge: 'Brake Dust Cleared',
    beforeImg: '/wheel-before.jpg',
    afterImg: '/wheel-after.jpg',
    description: 'Dissolves baked-on brake dust, road tar, and wheel oxidation to expose factory metallic brilliance.',
    treatment: 'Acid-free iron decontamination, deep barrel wheel brush, caliper degreasing, and UV satin tire dressing.'
  }
];

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onOpenAppointment, onNavigateAbout }) => {
  const [activeTab, setActiveTab] = useState<'exterior' | 'interior' | 'wheels'>('exterior');
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const animFrameRef = useRef<number | null>(null);

  const activePair = DETAILING_PAIRS.find((p) => p.id === activeTab) || DETAILING_PAIRS[0];

  // Preload all images so switching tabs is instant with zero lag
  useEffect(() => {
    DETAILING_PAIRS.forEach((item) => {
      const img1 = new Image();
      img1.src = item.beforeImg;
      const img2 = new Image();
      img2.src = item.afterImg;
    });
  }, []);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width <= 0) return;
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  // Global and window-level drag handlers
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      updatePosition(e.clientX);
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || !e.touches[0]) return;
      updatePosition(e.touches[0].clientX);
    };

    const handleGlobalMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    window.addEventListener('touchmove', handleGlobalTouchMove, { passive: true });
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    window.addEventListener('touchcancel', handleGlobalMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
      window.removeEventListener('touchcancel', handleGlobalMouseUp);
    };
  }, [updatePosition]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <section id="comparison" className="py-16 sm:py-24 bg-zinc-50/70 overflow-hidden border-y border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Pill Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-200">
          <div>
            <div className="flex items-center gap-2 text-[#ec7a1b] text-xs font-black uppercase tracking-widest mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Real Detailing Results</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Before & After Cleaning Comparison
            </h2>
          </div>

          {/* Preset Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-200/80 rounded-full w-fit">
            {DETAILING_PAIRS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSliderPosition(50);
                }}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {item.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Interactive Before / After Slider with GPU accelerated clipping */}
          <div className="relative">
            <div
              ref={containerRef}
              className="relative aspect-[3/2] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/90 select-none cursor-ew-resize group bg-zinc-900 touch-none will-change-transform"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              {/* Clean "AFTER" Car Image (Base layer) */}
              <img
                src={activePair.afterImg}
                alt={`${activePair.title} - After detailing`}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                draggable={false}
                loading="eager"
              />

              {/* "BEFORE" Car Image (Hardware-accelerated CSS polygon clip-path with zero reflow) */}
              <img
                src={activePair.beforeImg}
                alt={`${activePair.title} - Before detailing`}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none will-change-[clip-path]"
                style={{
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                  WebkitClipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                }}
                draggable={false}
                loading="eager"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider shadow-lg border border-white/10 pointer-events-none">
                BEFORE
              </div>
              <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-[#ec7a1b] text-white text-[11px] font-black uppercase tracking-wider shadow-lg shadow-orange-950/20 pointer-events-none">
                AFTER CLEAN
              </div>

              {/* Bottom Feature Tag */}
              <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold shadow-md pointer-events-none">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ec7a1b]" />
                <span>{activePair.badge}</span>
              </div>

              {/* Vertical Divider Line positioned at sliderPosition % */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white z-20 shadow-[0_0_12px_rgba(0,0,0,0.8)] pointer-events-none"
                style={{
                  left: `${sliderPosition}%`,
                }}
              >
                {/* Drag Handle Button with < > arrows */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-slate-900 shadow-2xl flex items-center justify-center border-2 border-slate-300 pointer-events-none">
                  <div className="flex items-center gap-0.5 text-xs font-black tracking-tight select-none">
                    <span>‹</span>
                    <span>›</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Helper */}
            <p className="text-center text-xs text-slate-600 mt-3 flex items-center justify-center gap-1.5">
              <span>↔</span>
              <span>Slide left and right to inspect the detailing restoration</span>
            </p>
          </div>

          {/* Right Column: Description, Bullets, and Inquiry */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200 text-[#ec7a1b] text-xs font-bold">
              <span>{activePair.title}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              Noticeable Difference In Every Single Detail
            </h3>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {activePair.description}
            </p>

            {/* Treatment Checklist */}
            <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-sm space-y-2.5">
              <span className="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider block">
                Process & Treatment:
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {activePair.treatment}
              </p>
            </div>

            {/* Bullet Points with brand orange star diamond icons */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ec7a1b] shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-slate-700 font-medium">
                  Specialized treatments with high-grade ceramic coatings.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ec7a1b] shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-slate-700 font-medium">
                  Dedicated mission to deliver showroom quality car care every visit.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ec7a1b] shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-slate-700 font-medium">
                  100% satisfaction guarantee backed by trained auto spa professionals.
                </p>
              </div>
            </div>

            {/* Actions: BOOK THIS SERVICE & READ MORE & CALL FOR INQUIRY */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Black rounded pill BOOK THIS SERVICE button */}
              <button
                onClick={onOpenAppointment}
                className="px-8 py-3.5 rounded-full bg-[#111215] hover:bg-black text-white text-xs font-bold tracking-widest uppercase transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              >
                BOOK THIS SERVICE
              </button>

              {/* READ MORE button heading over to About Us */}
              <button
                onClick={onNavigateAbout}
                className="px-7 py-3.5 rounded-full border border-zinc-300 hover:border-[#ec7a1b] hover:text-[#ec7a1b] text-zinc-700 text-xs font-bold tracking-widest uppercase transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                READ MORE
              </button>

              {/* Call for inquiry */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full border border-zinc-200 flex items-center justify-center text-[#ec7a1b] bg-orange-50">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                    CALL FOR INQUIRY
                  </span>
                  <a
                    href="tel:9111000704"
                    className="text-base sm:text-lg font-black text-slate-900 hover:text-[#ec7a1b] transition-colors"
                  >
                    9111000704
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
