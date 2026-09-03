import React from 'react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenAppointment: () => void;
  onNavigateAbout?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAppointment, onNavigateAbout }) => {
  const handleReadMore = () => {
    if (onNavigateAbout) {
      onNavigateAbout();
    } else {
      const aboutEl = document.getElementById('about');
      if (aboutEl) {
        aboutEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[540px] sm:min-h-[600px] lg:min-h-[660px] bg-black overflow-hidden flex items-center"
    >
      {/* End-to-end background image with clear partial image after gradient */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=85&w=2400&auto=format&fit=crop"
          alt="Professional car wash and detailing service"
          className="w-full h-full object-cover object-[72%_center] md:object-[68%_center] lg:object-[65%_center]"
        />

        {/* Desktop Gradient: Solid pitch black on the left for maximum text contrast, feathering smoothly to 100% transparent so the detailing photography is crystal-clear and attractive */}
        <div
          className="absolute inset-0 hidden md:block pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, #000000 0%, #000000 34%, rgba(0,0,0,0.92) 44%, rgba(0,0,0,0.5) 54%, rgba(0,0,0,0.06) 64%, rgba(0,0,0,0) 70%, rgba(0,0,0,0) 100%)',
          }}
        />

        {/* Mobile/Tablet Gradient: Dark top for text readability, clear bottom showcasing the car */}
        <div
          className="absolute inset-0 md:hidden pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, #000000 0%, rgba(0,0,0,0.95) 45%, rgba(0,0,0,0.65) 65%, rgba(0,0,0,0.1) 85%, rgba(0,0,0,0) 100%)',
          }}
        />
      </div>

      {/* Content Container aligned with site grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-2xl">
          {/* Main Headline: "Best Ever Car Wash Services" */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-black text-white tracking-tight leading-[1.05] mb-4 sm:mb-6">
              <span className="block">Best Ever Car</span>
              <span className="block">Wash Services</span>
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base max-w-lg mb-8 sm:mb-10 leading-relaxed font-normal">
              Touchless snow foam cannon pre-soak, pH-neutral scratch-free hand agitation, and mineral-free spot-free deionized rinse for showroom gloss.
            </p>
          </motion.div>

          {/* Two Action Buttons: Orange [READ MORE] and Outlined [GET APPOINTMENT] */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            {/* Brand Accent Orange Pill: READ MORE */}
            <button
              id="hero-read-more-btn"
              onClick={handleReadMore}
              className="px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#ec7a1b] hover:bg-[#d66810] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-lg shadow-orange-600/35 hover:scale-[1.03] active:scale-95 cursor-pointer"
            >
              READ MORE
            </button>

            {/* Outlined Pill: GET APPOINTMENT */}
            <button
              id="hero-get-appointment-btn"
              onClick={onOpenAppointment}
              className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-transparent hover:bg-white text-white hover:text-black border border-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:scale-[1.03] active:scale-95 cursor-pointer"
            >
              GET APPOINTMENT
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
