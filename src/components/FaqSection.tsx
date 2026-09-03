import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Clock, Droplets } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      category: 'Services',
      question: 'How is SPA MY CAR different from a standard automated tunnel wash',
      answer:
        'Standard tunnel washes use harsh abrasive nylon brushes and recycled acidic water that create micro-scratches, swirl marks, and paint dullness. At SPA MY CAR, we use touchless high-pressure pre-wash systems, pH-neutral detailing chemistry, twin-bucket grit guards, and ultra-plush microfiber mitts. Every square inch of your vehicle is treated with precision by hand to protect your clear coat, ceramic coating, and paint finish.',
    },
    {
      id: 'faq-2',
      category: 'Services',
      question: 'What is included in the Interior Deep Cleaning treatment',
      answer:
        'Our interior treatment includes complete cabin vacuuming (seats, floorboards, trunk, and under-seat tracks), hot-water extraction on carpets and fabric seats, delicate leather cleaning and conditioning, steam sanitization of HVAC air vents, deep cleaning of dashboard and center console trims, and anti-static ultraviolet protection.',
    },
    {
      id: 'faq-3',
      category: 'Care & Protection',
      question: 'Is your washing process safe for ceramic coated cars and paint protection film',
      answer:
        'Yes, our wash process is 100% safe and formulated specifically for ceramic coatings and Paint Protection Film (PPF). We only use pH-neutral, wax-free, and silica-safe foaming shampoos that rejuvenate hydrophobic properties without degrading the protective layer.',
    },
    {
      id: 'faq-4',
      category: 'Booking & Timing',
      question: 'How long does an exterior wash and interior detailing session take',
      answer:
        'A Standard Wash takes approximately 30 to 45 minutes. A Deluxe Polish takes 60 to 90 minutes. For an Ultimate Spa Detail or multi-stage Paint Correction, sessions range between 2.5 to 4 hours depending on vehicle size and soil condition.',
    },
    {
      id: 'faq-5',
      category: 'Booking & Timing',
      question: 'Do I need an advance appointment or can I drive in directly',
      answer:
        'While walk-ins are welcomed on availability, we strongly recommend booking in advance through our website or WhatsApp. Scheduled bookings receive priority bay allocation with zero waiting time.',
    },
    {
      id: 'faq-6',
      category: 'Pricing',
      question: 'Are there any hidden charges or surprise fees in your pricing',
      answer:
        'None at all. All our package rates are transparent and upfront based on your vehicle segment (Hatchback, Sedan, SUV, or Luxury). All supplies, equipment, detailing compounds, and final quality inspections are fully included in the quoted price.',
    },
    {
      id: 'faq-7',
      category: 'Care & Protection',
      question: 'How often should I schedule a professional car wash and detailing session',
      answer:
        'For daily driven vehicles, we recommend a routine exterior wash every 1 to 2 weeks and a thorough interior sanitization once a month. Deep detailing and paint sealant care is ideal every 3 to 6 months to maintain peak resale value and exterior luster.',
    },
    {
      id: 'faq-8',
      category: 'Care & Protection',
      question: 'What cleaning chemicals do you use on delicate interior leather and wood trims',
      answer:
        'We use automotive-safe, non-toxic, and biodegradable European formulations. Our interior cleaners are completely free of harsh ammonia, bleaching agents, and greasy silicones, leaving a natural matte factory finish with a pleasant neutral scent.',
    },
  ];

  const categories = ['All', 'Services', 'Care & Protection', 'Booking & Timing', 'Pricing'];

  const filteredFaqs =
    selectedCategory === 'All'
      ? faqs
      : faqs.filter((item) => item.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="w-full py-16 sm:py-24 bg-zinc-50/70 border-t border-b border-zinc-200/80">
      {/* End-to-end full width container with responsive edge padding */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 text-[#ec7a1b] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Clear answers about our detailing methods, specialized equipment, vehicle safety, and booking procedures.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            {categories.map((category) => (
              <button
                key={category}
                id={`faq-cat-${category.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-zinc-900 text-white shadow-md'
                    : 'bg-white text-zinc-600 border border-zinc-200/80 hover:bg-zinc-100 hover:text-zinc-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* End-to-End FAQ Accordion List stretching full width */}
        <div className="w-full space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                id={faq.id}
                className={`w-full rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-white border-[#ec7a1b]/40 shadow-md shadow-orange-950/5'
                    : 'bg-white/90 border-zinc-200 hover:border-zinc-300 hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3 sm:gap-4 flex-1">
                    <span className="inline-block mt-0.5 w-6 h-6 rounded-lg bg-orange-50 text-[#ec7a1b] font-bold text-xs flex items-center justify-center shrink-0">
                      Q
                    </span>
                    <span className="text-base sm:text-lg font-bold text-zinc-900 leading-snug tracking-tight">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#ec7a1b] text-white rotate-180'
                        : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-8 pb-5 sm:pb-6 pt-0 border-t border-zinc-100 text-zinc-600 text-sm sm:text-base leading-relaxed pl-14 sm:pl-18 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#ec7a1b]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>SPA MY CAR Quality Guarantee</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Assistance Banner */}
        <div className="w-full mt-10 p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-zinc-900 tracking-tight">
              Have a question not listed here
            </h4>
            <p className="text-xs sm:text-sm text-zinc-500 mt-0.5">
              Speak directly with our detailing technicians for specific advice about your vehicle.
            </p>
          </div>
          <a
            id="faq-whatsapp-inquiry-btn"
            href="https://wa.me/919111000704?text=Hello%20SPA%20MY%20CAR%20I%20have%20an%20inquiry%20regarding%20car%20care%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-2.5 rounded-full bg-zinc-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
          >
            <span>Ask via WhatsApp</span>
            <span className="text-[#ec7a1b]">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
