import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

export type ActivePage = 'home' | 'about' | 'contact';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onOpenAppointment?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navigation Items: Services, Why Us, FAQ, About Us
  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'faq', label: 'FAQ' },
    { id: 'about', label: 'About Us' },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (id === 'services') {
      if (activePage !== 'home') {
        onNavigate('home');
      }
      setTimeout(() => {
        const el = document.getElementById('workshop') || document.getElementById('services');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, activePage !== 'home' ? 100 : 0);
    } else if (id === 'why-us') {
      if (activePage !== 'home') {
        onNavigate('home');
      }
      setTimeout(() => {
        const el = document.getElementById('why-us') || document.getElementById('how-it-works');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, activePage !== 'home' ? 100 : 0);
    } else if (id === 'faq') {
      if (activePage !== 'home') {
        onNavigate('home');
      }
      setTimeout(() => {
        const el = document.getElementById('faq');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, activePage !== 'home' ? 100 : 0);
    } else if (id === 'home' || id === 'about' || id === 'contact') {
      onNavigate(id as ActivePage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white ${
        scrolled || mobileMenuOpen
          ? 'shadow-sm py-2.5 border-b border-zinc-200'
          : 'py-3 border-b border-zinc-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 w-full">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <a
              href="#home"
              id="header-logo-link"
              onClick={(e) => handleNavClick('home', e)}
              className="focus:outline-none flex items-center cursor-pointer py-1"
              aria-label="SPA MY CAR Home"
            >
              <Logo theme="light" size="26px" />
            </a>
          </div>

          {/* Desktop Navigation Links + Contact Us (Grouped together on desktop) */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
            <nav
              id="desktop-header-navigation"
              aria-label="Main Desktop Navigation"
              className="flex items-center gap-1 lg:gap-2 shrink-0"
            >
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <a
                    key={item.id}
                    id={`nav-${item.id}`}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(item.id, e)}
                    className={`inline-flex items-center justify-center px-3 py-1.5 rounded-full text-xs lg:text-[13px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'text-[#ec7a1b] bg-orange-50'
                        : 'text-zinc-800 hover:bg-[#ec7a1b] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Contact Us Styled Distinctly as an Action Button right next to nav */}
            <a
              href="#contact"
              id="desktop-nav-contact-btn"
              onClick={(e) => handleNavClick('contact', e)}
              className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs lg:text-[13px] font-bold uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow cursor-pointer whitespace-nowrap ${
                activePage === 'contact'
                  ? 'bg-zinc-900 text-white hover:bg-black'
                  : 'bg-[#ec7a1b] text-white hover:bg-[#d66810]'
              }`}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Right Actions: Contact Us Button + Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-1.5 min-[380px]:gap-2.5 sm:gap-3 shrink-0">
            {/* Contact Us Button - Always visible on mobile header bar */}
            <a
              href="#contact"
              id="mobile-header-contact-btn"
              onClick={(e) => handleNavClick('contact', e)}
              className={`inline-flex items-center justify-center px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow cursor-pointer whitespace-nowrap ${
                activePage === 'contact'
                  ? 'bg-zinc-900 text-white hover:bg-black'
                  : 'bg-[#ec7a1b] text-white hover:bg-[#d66810]'
              }`}
            >
              Contact Us
            </a>

            {/* Mobile Hamburger Menu Toggle Button */}
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-xl text-zinc-800 hover:text-black hover:bg-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#ec7a1b]/40 cursor-pointer shrink-0"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-900" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown (Cleanly contained in header without overflowing, Contact Us removed) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-dropdown"
          className="md:hidden w-full bg-white border-t border-zinc-100 px-4 pt-3 pb-4 shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-1 max-w-sm mx-auto">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <a
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-orange-50 text-[#ec7a1b]'
                      : 'text-zinc-800 hover:bg-zinc-100 hover:text-zinc-900'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-zinc-400 text-xs">›</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
