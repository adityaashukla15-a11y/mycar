import React from 'react';
import { 
  Clock, 
  Wrench, 
  ShieldCheck, 
  MessageCircle, 
  Phone, 
  Award, 
  Car, 
  MapPin,
  Check
} from 'lucide-react';

interface AboutUsSectionProps {
  onOpenAppointment?: () => void;
  onNavigateToContact?: () => void;
  onSelectService?: (serviceName: string) => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ 
  onNavigateToContact 
}) => {
  const helplinePhone = '9111000704';
  const whatsappNumber = '919111000704';

  const whatsappQuoteMsg = encodeURIComponent(
    'Hello SPA MY CAR. I would like to request a quote and inquire about car care detailing services for my vehicle.'
  );
  const whatsappQuoteUrl = `https://wa.me/${whatsappNumber}?text=${whatsappQuoteMsg}`;

  const whatsappSupervisorMsg = encodeURIComponent(
    'Hello Supervisor SPA MY CAR. I would like to consult regarding vehicle detailing and car wash services.'
  );
  const whatsappSupervisorUrl = `https://wa.me/${whatsappNumber}?text=${whatsappSupervisorMsg}`;

  const locations = [
    'MP Nagar (Zone I & II)',
    'Arera Colony (E1 to E7)',
    'Kolar Road & Chuna Bhatti',
    'Hoshangabad Road & Misrod',
    'Govindpura Industrial Area',
    'Shahpura & 1100 Quarters',
  ];

  return (
    <div id="about-page" className="w-full bg-white text-zinc-900 animate-in fade-in duration-300">
      {/* 
        ========================================================================
        HERO SECTION (Matching Video Frame 00:00 - 00:01 Reference Placement)
        ========================================================================
      */}
      <section className="py-10 sm:py-16 lg:py-20 border-b border-zinc-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Subtitle, 3 Cards, Buttons, and 4 Trust Chips */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div>
                {/* Pill Badge */}
                <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-extrabold uppercase tracking-wider mb-4">
                  ABOUT US
                </div>

                {/* Primary Headline with Brand Accent */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-[1.15]">
                  Precision Detailing.{' '}
                  <span className="text-[#ec7a1b]">Flawless Finish.</span>
                </h1>

                {/* Concise Paragraph */}
                <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
                  We provide premium vehicle cleaning, multi-stage paint restoration, and deep interior spa solutions for daily commuters, luxury sedans, and high-performance SUVs. Our team focuses on gentle foam chemistry, proper equipment, and experienced craftsmanship to keep your car looking brand-new.
                </p>
              </div>

              {/* 3 Horizontal Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-1">
                {/* Card 1: Quick Response */}
                <div className="p-4 rounded-xl bg-zinc-50/90 border border-zinc-200/80 hover:bg-white hover:border-[#ec7a1b]/40 hover:shadow-xs transition-all duration-200">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center mb-3">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h2 className="text-sm font-bold text-zinc-900 tracking-tight">
                    Quick Response
                  </h2>
                  <p className="text-xs text-zinc-500 mt-1 leading-normal">
                    Fast turnaround when you need an express detailing service.
                  </p>
                </div>

                {/* Card 2: Professional Service */}
                <div className="p-4 rounded-xl bg-zinc-50/90 border border-zinc-200/80 hover:bg-white hover:border-[#ec7a1b]/40 hover:shadow-xs transition-all duration-200">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center mb-3">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <h2 className="text-sm font-bold text-zinc-900 tracking-tight">
                    Professional Service
                  </h2>
                  <p className="text-xs text-zinc-500 mt-1 leading-normal">
                    Dual-action polishers, steam extractors, and certified technicians.
                  </p>
                </div>

                {/* Card 3: Reliable Results */}
                <div className="p-4 rounded-xl bg-zinc-50/90 border border-zinc-200/80 hover:bg-white hover:border-[#ec7a1b]/40 hover:shadow-xs transition-all duration-200">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center mb-3">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h2 className="text-sm font-bold text-zinc-900 tracking-tight">
                    Reliable Results
                  </h2>
                  <p className="text-xs text-zinc-500 mt-1 leading-normal">
                    Swirl-free paint, crystal-clear glass, and long-lasting protection.
                  </p>
                </div>
              </div>

              {/* Action Buttons: Dark WhatsApp button & Call Helpline */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
                {/* Button 1: Request a Quote on WhatsApp */}
                <a
                  id="about-request-quote-whatsapp-btn"
                  href={whatsappQuoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center justify-center gap-2.5 shadow-sm hover:shadow cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Request a Quote on WhatsApp</span>
                </a>

                {/* Button 2: Call Helpline */}
                <a
                  id="about-call-helpline-btn"
                  href={`tel:+91${helplinePhone}`}
                  className="px-5 py-3.5 rounded-lg bg-white border border-zinc-300 hover:border-zinc-400 text-zinc-900 text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#ec7a1b]" />
                  <span>Call Helpline: {helplinePhone}</span>
                </a>
              </div>

              {/* Horizontal Trust Chips (Matching Video 00:01) */}
              <div className="pt-2 border-t border-zinc-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                  <Award className="w-4 h-4 text-[#ec7a1b] shrink-0" />
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                  <Clock className="w-4 h-4 text-[#ec7a1b] shrink-0" />
                  <span>Express 30-Min Wash</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                  <Car className="w-4 h-4 text-[#ec7a1b] shrink-0" />
                  <span>Sedans, SUVs & Exotics</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                  <ShieldCheck className="w-4 h-4 text-[#ec7a1b] shrink-0" />
                  <span>Professional Equipment</span>
                </div>
              </div>
            </div>

            {/* Right Column: Tall Rounded Image Container with Inset Badges */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Tall Image Card */}
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-100 shadow-xl border border-zinc-200">
                  <img
                    src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=85&w=1200&auto=format&fit=crop"
                    alt="Professional Vehicle Detailing and Cleaning"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  {/* Subtle vignette gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Pill Badge: Certified Detailing Specialist (Bottom-Left) */}
                  <div className="absolute bottom-5 left-5 z-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-white/40 text-zinc-900 text-xs font-bold tracking-wide">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                      <span>Certified Detailing Specialist</span>
                    </div>
                  </div>

                  {/* Floating Inset Card: HIGH-PSI FOAM EXTRACTION (Bottom-Right) */}
                  <div className="absolute bottom-5 right-5 z-10">
                    <div className="w-24 sm:w-28 h-20 sm:h-24 rounded-xl overflow-hidden border-2 border-white shadow-2xl relative group bg-zinc-900">
                      <img
                        src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=400&auto=format&fit=crop"
                        alt="High-PSI Detailing Machinery"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-1.5 text-center">
                        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-white leading-tight">
                          HIGH-PSI FOAM EXTRACTION
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        OUR CORE COMMITMENTS TO YOU (Matching Video Frame 00:02 - 00:03)
        ========================================================================
      */}
      <section className="py-14 sm:py-20 bg-zinc-50/60 border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 tracking-tight">
              Our Core Commitments to You
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-3xl">
              Every vehicle is treated with touchless pre-washes, multi-stage paint restoration, and clear upfront pricing.
            </p>
          </div>

          {/* 2x2 Grid of Feature Commitment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Card 1 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200/90 shadow-xs hover:border-[#ec7a1b]/40 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight mb-2">
                Daily Drivers, Luxury Sedans & SUVs
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Tailored exterior washing, deep interior sanitization, and protective waxing solutions designed specifically for every vehicle profile, clear-coat type, and finish.
              </p>
            </div>

            {/* Card 2 with Clock Icon Badge */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200/90 shadow-xs hover:border-[#ec7a1b]/40 hover:shadow-md transition-all relative">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                  Quick 30-Min Express Service
                </h3>
                <div className="w-8 h-8 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Dedicated multi-specialist wash bays ready for rapid exterior foam cleaning and express vacuuming without cutting corners.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200/90 shadow-xs hover:border-[#ec7a1b]/40 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight mb-2">
                Professional Detailing & Certified Craftsmen
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Strictly zero harsh abrasives or dirty sponges. 100% paint-safe pH-neutral cleansers, two-bucket grit guard systems, and certified technicians.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200/90 shadow-xs hover:border-[#ec7a1b]/40 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight mb-2">
                Restorative Paint & Deep Interior Solutions
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                From swirl-mark correction and headlight clearing to deep steam upholstery sanitization and 9H ceramic glass protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        FULL-SERVICE FLEET & COMPLIANCE BANNER (Matching Video Frame 00:04 - 00:05)
        ========================================================================
      */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-zinc-50/90 border border-zinc-200/90 p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Side: Studio description and 6 Location Pills */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight leading-tight">
                    Full-Service Detailing Studio Serving Central City & All Wards
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
                    From residential areas in Arera Colony, Kolar Road, and Shahpura to commercial and tech corridors in MP Nagar and Govindpura, our high-precision studio bays and express booking ensure effortless, showroom-grade car care.
                  </p>
                </div>

                {/* 6 Location Pills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {locations.map((loc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200/80 text-xs font-semibold text-zinc-800 shadow-2xs"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#ec7a1b] shrink-0" />
                      <span>{loc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Quality Standards Card with 4 Checkmarks & WhatsApp Action */}
              <div className="lg:col-span-5">
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-5">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-zinc-900 tracking-tight leading-tight">
                        SPA MY CAR Quality Standards
                      </h3>
                      <p className="text-[11px] text-zinc-500 font-medium mt-0.5">
                        Certified Automotive Detailing Protocols
                      </p>
                    </div>
                  </div>

                  {/* 4 Checkmarks */}
                  <ul className="space-y-2.5 pt-1 text-xs sm:text-sm text-zinc-700 font-medium">
                    <li className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>100% Touchless High-Pressure Foam & Rinsing</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>Transparent Upfront Vehicle Tier Pricing</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>Climate-Controlled Dust-Free Detailing Bays</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>100% Paint-Safe pH-Neutral Chemistry</span>
                    </li>
                  </ul>

                  {/* Connect with Detailing Supervisor on WhatsApp Button */}
                  <div className="pt-2">
                    <a
                      id="about-supervisor-whatsapp-btn"
                      href={whatsappSupervisorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold tracking-wide transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Connect with Supervisor on WhatsApp ({helplinePhone})</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
