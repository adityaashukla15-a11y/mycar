import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Droplets, 
  Award, 
  Coffee, 
  CheckCircle2, 
  ArrowRight,
  Gauge
} from 'lucide-react';

interface WhyUsSectionProps {
  onOpenAppointment?: () => void;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ onOpenAppointment }) => {
  const reasons = [
    {
      id: 'scratch-free',
      icon: <ShieldCheck className="w-6 h-6 text-[#ec7a1b]" />,
      title: '100% Scratch-Free Hand Detail',
      description: 'Zero abrasive nylon brushes. We use multi-stage foam baths, twin grit guards, and ultra-deep pile plush microfiber mitts to protect your clear coat.',
      badge: 'Zero Swirl Marks',
    },
    {
      id: 'ro-water',
      icon: <Droplets className="w-6 h-6 text-[#ec7a1b]" />,
      title: 'Deionized Spot-Free Water',
      description: 'Our multistage Reverse Osmosis filtration removes 99.8% of minerals and hard salts, ensuring zero water spots even on jet-black vehicles.',
      badge: 'Pure Mineral-Free',
    },
    {
      id: 'ph-chemistry',
      icon: <Sparkles className="w-6 h-6 text-[#ec7a1b]" />,
      title: 'pH-Neutral European Chemistry',
      description: 'Acid-free, biodegradeable snow foams and leather conditioning agents engineered specifically to rejuvenate ceramic coatings and PPF films.',
      badge: 'Ceramic Safe',
    },
    {
      id: 'certified-technicians',
      icon: <Award className="w-6 h-6 text-[#ec7a1b]" />,
      title: 'Certified Master Detailers',
      description: 'Every vehicle is detailed by certified automotive specialists trained in dual-action machine polishing, interior steam sanitization, and optics.',
      badge: 'Trained Specialists',
    },
    {
      id: 'quick-turnaround',
      icon: <Gauge className="w-6 h-6 text-[#ec7a1b]" />,
      title: 'Express On-Time Delivery',
      description: 'Scheduled slots and dedicated multi-person bay teams mean your express wash is ready in 30–45 minutes with digital inspection sign-off.',
      badge: 'On-Time Guarantee',
    },
    {
      id: 'luxury-lounge',
      icon: <Coffee className="w-6 h-6 text-[#ec7a1b]" />,
      title: 'Air-Conditioned Lounge',
      description: 'Relax in our glass-front lounge equipped with high-speed fiber Wi-Fi, gourmet beverages, and a full view of your vehicle throughout the spa treatment.',
      badge: 'VIP Waiting Area',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200/60 text-[#ec7a1b] text-xs font-black uppercase tracking-widest mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase">
            The Spa My Car <span className="text-[#ec7a1b]">Advantage</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Traditional car washes scratch clear coats and leave hard-water stains. At SPA MY CAR, we treat every vehicle with surgical detailing care and studio-grade equipment.
          </p>
        </div>

        {/* 6 Grid Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item) => (
            <div
              key={item.id}
              className="p-7 sm:p-8 rounded-3xl bg-zinc-50/80 hover:bg-white border border-zinc-200/80 hover:border-[#ec7a1b]/40 hover:shadow-xl hover:shadow-orange-950/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex items-center justify-center group-hover:scale-110 group-hover:border-[#ec7a1b]/50 transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-100 group-hover:bg-orange-50 group-hover:text-[#ec7a1b] transition-colors">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-zinc-900 group-hover:text-[#ec7a1b] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-dashed border-zinc-200/80 flex items-center justify-between text-xs font-bold text-zinc-700">
                <span className="flex items-center gap-1.5 text-zinc-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Guaranteed Quality
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Callout */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-[#101115] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              Ready to give your car the pampering it deserves?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Book a slot online or visit our workshop today for showroom-level care.
            </p>
          </div>
          {onOpenAppointment && (
            <button
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ec7a1b] hover:bg-[#d66810] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shrink-0 shadow-lg shadow-orange-600/30 cursor-pointer"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
