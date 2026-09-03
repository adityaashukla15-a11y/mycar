import React, { useState } from 'react';
import { pricingPlans } from '../data';
import { Check, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
  selectedPlan?: string;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPlan,
  selectedPlan: propSelectedPlan,
}) => {
  const [internalSelected, setInternalSelected] = useState<string>('Deluxe Polish');
  const currentSelected = propSelectedPlan || internalSelected;

  const handleChoose = (planName: string) => {
    setInternalSelected(planName);
    onSelectPlan(planName);
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading Tag */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ec7a1b]">
            [ WASHING PRICE ]
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-2">
            Affordable Pricing
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto mt-3">
            Transparent packages designed for everyday motorists and luxury vehicle collectors alike. Click any package to select.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {pricingPlans.map((plan) => {
            const isSelected = currentSelected === plan.name;

            return (
              <div
                key={plan.id}
                onClick={() => handleChoose(plan.name)}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative cursor-pointer ${
                  isSelected
                    ? 'bg-[#101115] text-white shadow-2xl ring-3 ring-[#ec7a1b] scale-100 lg:-translate-y-2'
                    : 'bg-white text-slate-900 border border-zinc-200/90 shadow-lg hover:shadow-xl hover:border-zinc-300'
                }`}
              >
                {/* Status Badges */}
                {isSelected ? (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#ec7a1b] text-white text-[11px] font-black uppercase tracking-widest shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Selected Package
                  </div>
                ) : plan.recommended ? (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-zinc-800 text-orange-400 border border-zinc-700 text-[11px] font-black uppercase tracking-widest shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <ShieldCheck className="w-3.5 h-3.5" /> Most Popular
                  </div>
                ) : null}

                <div>
                  {/* Header: Duration pill and title */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold tracking-wider ${
                        isSelected
                          ? 'bg-white/10 text-orange-300 border border-white/10'
                          : 'bg-orange-50 text-[#ec7a1b] border border-orange-200/50'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>{plan.duration}</span>
                    </span>

                    {isSelected && (
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ec7a1b]">
                        Active Selection
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black mb-2">
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-1 my-4">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight">
                      {plan.price}
                    </span>
                    <span className={`text-xs font-semibold uppercase ${isSelected ? 'text-zinc-400' : 'text-slate-500'}`}>
                      / per session
                    </span>
                  </div>

                  {/* Features List with Checkmarks */}
                  <div className="space-y-3 pt-4 border-t border-dashed border-zinc-200/40">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                            feature.included
                              ? 'bg-[#ec7a1b] text-white'
                              : isSelected
                              ? 'bg-zinc-800 text-zinc-600'
                              : 'bg-zinc-100 text-zinc-400'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span
                          className={
                            feature.included
                              ? isSelected
                                ? 'text-zinc-200 font-medium'
                                : 'text-slate-700 font-medium'
                              : 'text-zinc-500 line-through'
                          }
                        >
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA Button */}
                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleChoose(plan.name);
                    }}
                    className={`w-full py-3.5 px-6 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-md ${
                      isSelected
                        ? 'bg-[#ec7a1b] hover:bg-[#d66810] text-white shadow-orange-600/40 hover:scale-[1.02]'
                        : 'bg-[#111215] hover:bg-black text-white hover:scale-[1.02]'
                    }`}
                  >
                    {isSelected ? 'Package Selected ✓' : 'Select Package'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
