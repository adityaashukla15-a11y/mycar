import React, { useState } from 'react';
import { Search, X, ArrowRight, Compass } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const quickLinks = [
    { title: 'About Us & Detailing Philosophy', section: 'about', category: 'Company' },
    { title: 'Exterior Wash & Cleaning', section: 'services', category: 'Services' },
    { title: 'Interior Deep Cleaning', section: 'services', category: 'Services' },
    { title: 'Car Detailing & Paint Protection', section: 'services', category: 'Services' },
    { title: 'Interactive Car Detailing Comparison', section: 'comparison', category: 'Showcase' },
    { title: 'Pristine Perspectives Gallery', section: 'gallery', category: 'Workshop' },
    { title: 'How It Works (4-Step Process)', section: 'how-it-works', category: 'Process' },
    { title: 'Affordable Pricing Packages', section: 'pricing', category: 'Pricing' },
    { title: 'Book an Appointment Form', section: 'appointment', category: 'Booking' },
    { title: 'Car Detailing Tips & News', section: 'blog', category: 'Articles' },
  ];

  const filteredLinks = query.trim() === ''
    ? quickLinks
    : quickLinks.filter(l => l.title.toLowerCase().includes(query.toLowerCase()) || l.category.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div 
        className="w-full max-w-xl bg-[#121214] text-white rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#ec7a1b]" />
          <input
            type="text"
            placeholder="Search services, packages, tips, booking..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent text-white placeholder-zinc-400 focus:outline-none text-base"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-3 max-h-80 overflow-y-auto divide-y divide-white/5">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 px-3 py-2 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#ec7a1b]" /> Suggested Destinations
          </div>
          {filteredLinks.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                onNavigate(item.section);
                onClose();
              }}
              className="w-full text-left px-3 py-3 rounded-lg flex items-center justify-between hover:bg-white/5 transition-colors group"
            >
              <div>
                <p className="text-sm font-medium text-white group-hover:text-orange-400 transition-colors">
                  {item.title}
                </p>
                <span className="text-xs text-zinc-400">{item.category}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
            </button>
          ))}
          {filteredLinks.length === 0 && (
            <div className="p-6 text-center text-zinc-400 text-sm">
              No matching pages or services found for "{query}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
