import React from 'react';
import { serviceFeatures } from '../data';

interface FeatureCardsProps {
  onSelectService?: (serviceName: string) => void;
}

export const FeatureCards: React.FC<FeatureCardsProps> = ({ onSelectService }) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'touchless':
        return (
          <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#ec7a1b] group-hover:bg-[#ec7a1b] group-hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
          </div>
        );
      case 'interior':
        return (
          <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#ec7a1b] group-hover:bg-[#ec7a1b] group-hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 9h-4V3H9v6H5l7 8zM5 18v2h14v-2" />
            </svg>
          </div>
        );
      case 'automatic':
        return (
          <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#ec7a1b] group-hover:bg-[#ec7a1b] group-hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 3v18M3 12h18" />
            </svg>
          </div>
        );
      case 'waxing':
      default:
        return (
          <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#ec7a1b] group-hover:bg-[#ec7a1b] group-hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <circle cx="12" cy="10" r="2" />
            </svg>
          </div>
        );
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceFeatures.map((feature) => (
            <div
              key={feature.id}
              onClick={() => onSelectService && onSelectService(feature.title)}
              className="group p-6 rounded-2xl bg-white border border-zinc-200/80 hover:border-[#ec7a1b]/40 hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 flex items-start gap-4 cursor-pointer"
            >
              <div className="shrink-0">
                {renderIcon(feature.iconName)}
              </div>

              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#ec7a1b] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
