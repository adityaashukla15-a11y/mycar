import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

export type ActivePage = 'home' | 'about' | 'contact';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onOpenAppointment?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (id === 'services') {
      if (activePage !== 'home') {
        onNavigate('home');
      }
      setTimeout(() => {
        const el = document.getElementById('workshop') || document.getElementById('services');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, activePage !== 'home' ? 80 : 0);
    } else if (id === 'home' || id === 'about' || id === 'contact') {
      onNavigate(id as ActivePage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white ${
        scrolled
          ? 'shadow-xs py-2 border-b border-zinc-200'
          : 'py-2.5 border-b border-zinc-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 min-[380px]:px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-1.5 sm:gap-4 w-full">
          {/* Logo Spot - 26px size, responsive and proportional */}
          <div className="flex items-center shrink min-w-0">
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

          {/* Navigation Items: Services, About Us & Contact Us. Stays black by default, turns orange container with contrasting white text on hover */}
          <nav
            id="header-navigation"
            aria-label="Main Navigation"
            className="flex items-center gap-0.5 min-[380px]:gap-1 sm:gap-2.5 md:gap-3 shrink-0"
          >
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <a
                  key={item.id}
                  id={`nav-${item.id}`}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={`inline-flex items-center justify-center px-2 min-[380px]:px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10.5px] min-[380px]:text-xs md:text-sm font-bold uppercase tracking-tight min-[380px]:tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#ec7a1b] hover:bg-[#ec7a1b] hover:text-white'
                      : 'text-black hover:bg-[#ec7a1b] hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
