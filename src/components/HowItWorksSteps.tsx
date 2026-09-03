import React from 'react';
import { processSteps } from '../data';
import { Car, ClipboardCheck, Droplets, CheckCircle, ChevronRight } from 'lucide-react';

export const HowItWorksSteps: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'booking':
        return <Car className="w-5 h-5 text-white" />;
      case 'inspection':
        return <ClipboardCheck className="w-5 h-5 text-white" />;
      case 'washing':
        return <Droplets className="w-5 h-5 text-white" />;
      case 'completion':
      default:
        return <CheckCircle className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="how-it-works" className="py-14 sm:py-20 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200/60 text-[#ec7a1b] text-xs font-black uppercase tracking-widest mb-3">
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase">
            How Spa My Car <span className="text-[#ec7a1b]">Works</span>
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            From seamless booking and thorough condition inspection to scratch-free detailing and showroom delivery.
          </p>
        </div>

        {/* Dark Rounded Steps Container (Matching Frame 00:03) */}
        <div className="rounded-3xl bg-[#0e0f13] border border-zinc-800/80 p-8 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, idx) => (
              <div key={step.stepNumber} className="relative flex flex-col items-start group">
                {/* Step Header: Round Icon + Title with Number */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-zinc-800/90 border border-zinc-700 flex items-center justify-center shrink-0 group-hover:border-[#ec7a1b] group-hover:bg-[#ec7a1b]/20 transition-all duration-300">
                    {getStepIcon(step.iconName)}
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-orange-400 transition-colors">
                    {step.stepNumber} {step.title}
                  </h3>
                </div>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pr-4">
                  {step.description}
                </p>

                {/* Divider Arrow ">>" between steps for desktop */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:flex items-center text-zinc-600 absolute -right-4 top-5 pointer-events-none select-none text-base font-bold tracking-widest">
                    <span>››</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
