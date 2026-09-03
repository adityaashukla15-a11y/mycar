import React from 'react';
import { Facebook, Instagram, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenAppointment: () => void;
  onNavigate?: (page: 'home' | 'about' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent, page?: 'home' | 'about' | 'contact', hash?: string) => {
    if (page && onNavigate) {
      e.preventDefault();
      onNavigate(page);
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const pagesLinks = [
    { name: 'ABOUT US', href: '#about' },
    { name: 'HOW IT WORKS', href: '#how-it-works' },
    { name: 'PRICING PLANS', href: '#pricing' },
    { name: 'CUSTOMER REVIEWS', href: '#reviews' },
  ];

  const quickLinks = [
    { name: 'BOOK APPOINTMENT', href: '#appointment' },
    { name: 'LOCATIONS', href: '#contact' },
    { name: 'CONTACT US', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#08080a] text-white pt-16 pb-12 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Banner Top with Exact SPA MY CAR Logo */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-10 mb-10 border-b border-zinc-800/80 gap-6">
          <Logo theme="dark" size="md" />

          <div className="flex items-center gap-3">
            <button
              id="footer-book-appointment-btn"
              onClick={onOpenAppointment}
              className="px-6 py-2.5 rounded-full bg-[#ec7a1b] hover:bg-[#d66810] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-orange-900/40 hover:scale-105 active:scale-95 cursor-pointer"
            >
              BOOK APPOINTMENT
            </button>
            <button
              id="footer-scroll-to-top-btn"
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 pb-12">
          {/* Column 1: Contact & Socials */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg font-bold text-zinc-200 leading-snug">
              Unleash the Road Ahead:
              <br />
              <span className="text-zinc-400 font-normal">Your Next Car Awaits Pristine Perfection</span>
            </p>

            <div className="pt-2 space-y-1">
              <a
                href="mailto:support@spamycar.com"
                className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors block"
              >
                support@spamycar.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#facebook"
                className="w-9 h-9 rounded-full bg-zinc-800/80 hover:bg-[#ec7a1b] text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                className="w-9 h-9 rounded-full bg-zinc-800/80 hover:bg-[#ec7a1b] text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-5">
              Pages
            </h4>
            <ul className="space-y-3">
              {pagesLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.name === 'ABOUT US') handleLinkClick(e, 'about');
                      else handleLinkClick(e, 'home', link.href);
                    }}
                    className="text-xs font-semibold text-zinc-400 hover:text-[#ec7a1b] uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick links */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-5">
              Quick links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.name === 'BOOK APPOINTMENT' || link.name === 'LOCATIONS' || link.name === 'CONTACT US') {
                        handleLinkClick(e, 'contact');
                      } else {
                        handleLinkClick(e, 'home', link.href);
                      }
                    }}
                    className="text-xs font-semibold text-zinc-400 hover:text-[#ec7a1b] uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-zinc-800/70 text-center text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            Copyright By SPA MY CAR. © 2026. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-zinc-400">
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
