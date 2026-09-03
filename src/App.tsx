import React, { useState, useEffect } from 'react';
import { Navbar, ActivePage } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutUsSection } from './components/AboutUsSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { WorkshopGallery } from './components/WorkshopGallery';
import { HowItWorksSteps } from './components/HowItWorksSteps';
import { PricingSection } from './components/PricingSection';
import { CustomerReviewsBanner } from './components/CustomerReviewsBanner';
import { FaqSection } from './components/FaqSection';
import { ContactUsPage } from './components/ContactUsPage';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { AppointmentModal } from './components/AppointmentModal';
import { Calendar, Phone } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('Deluxe Polish');

  // Synchronize hash with active page for back/forward browser navigation
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'about' || hash === 'about-us') {
        setActivePage('about');
      } else if (hash === 'contact' || hash === 'contact-us' || hash === 'appointment') {
        setActivePage('contact');
      } else {
        setActivePage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigatePage = (page: ActivePage) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAppointmentWithPlan = (serviceName: string) => {
    setPreselectedService(serviceName);
    handleNavigatePage('contact');
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-[#ec7a1b] selection:text-white">
      {/* 
        Unified Header:
        - Exact SPA MY CAR logo
        - "Home", "About Us", "Contact Us" as navigation links
        - Balanced uniform sizing for all header items
        - "Contact Us" as a text navigation item, NOT a pill button
        - Fits cleanly on mobile without a hamburger menu
      */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigatePage}
        onOpenAppointment={() => handleNavigatePage('contact')}
      />

      {/* Main Page Routing */}
      <main className="flex-1 w-full">
        {/* PAGE 1: HOME */}
        {activePage === 'home' && (
          <div className="animate-in fade-in duration-200">
            {/* Hero Section */}
            <HeroSection
              onOpenAppointment={() => handleNavigatePage('contact')}
              onNavigateAbout={() => handleNavigatePage('about')}
            />

            {/* Interactive Before & After Slider */}
            <BeforeAfterSection
              onOpenAppointment={() => handleNavigatePage('contact')}
              onNavigateAbout={() => handleNavigatePage('about')}
            />

            {/* Workshop & Detailing Gallery */}
            <WorkshopGallery
              onOpenAppointment={() => handleNavigatePage('contact')}
            />

            {/* 4-Step Process Section */}
            <HowItWorksSteps />

            {/* Pricing Packages */}
            <PricingSection
              selectedPlan={preselectedService}
              onSelectPlan={(plan) => handleOpenAppointmentWithPlan(plan)}
            />

            {/* Social Proof & Customer Reviews Banner */}
            <CustomerReviewsBanner />

            {/* Full-width End-to-End FAQ Section replacing blog/news */}
            <FaqSection />
          </div>
        )}

        {/* PAGE 2: ABOUT US (Dedicated page containing all About Us details) */}
        {activePage === 'about' && (
          <AboutUsSection
            onNavigateToContact={() => handleNavigatePage('contact')}
            onSelectService={(service) => handleOpenAppointmentWithPlan(service)}
          />
        )}

        {/* PAGE 3: CONTACT US (Dedicated page containing all Contact & Booking details) */}
        {activePage === 'contact' && (
          <ContactUsPage
            preselectedService={preselectedService}
          />
        )}
      </main>

      {/* Footer available across pages with seamless page switching */}
      <Footer
        onOpenAppointment={() => handleNavigatePage('contact')}
        onNavigate={handleNavigatePage}
      />

      {/* Persistent Floating Quick Booking Action */}
      <aside aria-label="Quick appointment" className="fixed bottom-6 right-6 z-40">
        <button
          id="floating-appointment-btn"
          onClick={() => handleNavigatePage('contact')}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#ec7a1b] hover:bg-[#d66810] text-white flex items-center justify-center shadow-2xl shadow-orange-600/50 hover:scale-105 active:scale-95 transition-all group ring-4 ring-white/30 cursor-pointer"
          title="Book Appointment"
          aria-label="Book Car Wash Appointment"
        >
          <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </aside>

      {/* Appointment Booking Modal (if needed for quick modal triggers) */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        preselectedService={preselectedService}
      />
    </div>
  );
}
