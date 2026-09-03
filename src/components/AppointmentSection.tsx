import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Car, Phone, Mail, User, CheckCircle2, ShieldCheck } from 'lucide-react';

interface AppointmentSectionProps {
  preselectedPlan?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ preselectedPlan }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    website: '',
    service: preselectedPlan || 'Deluxe Polish',
    date: '',
    time: '10:30 AM',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [whatsappRedirectUrl, setWhatsappRedirectUrl] = useState('');

  useEffect(() => {
    if (preselectedPlan) {
      setFormData((prev) => ({ ...prev, service: preselectedPlan }));
    }
  }, [preselectedPlan]);

  const buildWhatsAppUrl = () => {
    const text = [
      'SPA MY CAR - APPOINTMENT BOOKING',
      '',
      `Customer Name: ${formData.fullName}`,
      `Phone Number: ${formData.phoneNumber}`,
      `Email: ${formData.email || 'N/A'}`,
      `Vehicle Model: ${formData.website || 'Standard Vehicle'}`,
      `Selected Service: ${formData.service}`,
      `Appointment Date: ${formData.date}`,
      `Preferred Time: ${formData.time}`,
      '',
      'Hello SPA MY CAR. I would like to confirm my car wash and detailing appointment with these details. Thank you.',
    ].join('\n');

    return `https://wa.me/919111000704?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppUrl();
    setWhatsappRedirectUrl(url);
    setIsSuccess(true);

    // Immediate WhatsApp redirect
    try {
      const opened = window.open(url, '_blank', 'noopener,noreferrer');
      if (!opened || opened.closed) {
        // Fallback if popup blocked by browser
        window.location.href = url;
      }
    } catch {
      window.location.href = url;
    }
  };

  return (
    <section id="appointment" className="py-16 sm:py-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Workshop Master Detailing Photo */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 group">
            <img
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop"
              alt="Professional car detailing in workshop"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ec7a1b] block">
                  Certified Master Detailers
                </span>
                <p className="text-sm font-bold text-white mt-0.5">
                  100% Gentle Paint & Interior Warranty
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#ec7a1b] text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Right Column: Dark Form Card (Exact Match from Frame 00:05) */}
          <div className="p-6 sm:p-10 rounded-3xl bg-[#121318] border border-zinc-800/90 shadow-2xl">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ec7a1b]">
                [ BOOK AN APPOINTMENT ]
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mt-1.5">
                Apply for a Car Wash
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2">
                Fast online scheduling. Arrive at your appointed time and bypass the queue.
              </p>
            </div>

            {isSuccess ? (
              <div className="p-8 rounded-2xl bg-[#0f241a] border border-emerald-500/40 text-center animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 ring-8 ring-emerald-500/10">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Redirecting to WhatsApp!</h3>
                <p className="text-sm text-zinc-300 mb-6 max-w-md mx-auto leading-relaxed">
                  Your appointment details for <span className="text-[#ec7a1b] font-bold">{formData.service}</span> on{' '}
                  <span className="text-white font-semibold">{formData.date}</span> at <span className="text-white font-semibold">{formData.time}</span> are being sent to our team at{' '}
                  <span className="text-emerald-400 font-bold">9111000704</span>.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappRedirectUrl || buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-950 transition-all hover:scale-105"
                  >
                    <span>💬 Open WhatsApp Chat (9111000704)</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Edit Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#1b1d24] border border-zinc-700/60 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ec7a1b] transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1b1d24] border border-zinc-700/60 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ec7a1b] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number (e.g. 9111000704)"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full bg-[#1b1d24] border border-zinc-700/60 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ec7a1b] transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Vehicle Model (e.g. Creta / BMW / Swift)"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full bg-[#1b1d24] border border-zinc-700/60 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ec7a1b] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-zinc-400 block mb-1 font-medium">Select Service Type</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#1b1d24] border border-zinc-700/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ec7a1b] transition-colors"
                  >
                    <option value="Deluxe Polish">Deluxe Polish (₹1,999)</option>
                    <option value="Standard Wash">Standard Wash (₹999)</option>
                    <option value="Ultimate Spa Detail">Ultimate Spa Detail (₹4,499)</option>
                    <option value="Windshield Restoration">Windshield Restoration</option>
                    <option value="Touchless Wash">Touchless High-Pressure Wash</option>
                    <option value="Interior Cleaning">Interior Deep Sanitization</option>
                    <option value="Ceramic Coating">Ceramic Coating 9H</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#1b1d24] border border-zinc-700/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ec7a1b] transition-colors"
                    />
                  </div>

                  <div>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-[#1b1d24] border border-zinc-700/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ec7a1b] transition-colors"
                    >
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-3 py-4 px-6 rounded-full bg-[#ec7a1b] hover:bg-[#d66810] text-white font-black text-xs sm:text-sm tracking-widest uppercase transition-all shadow-xl shadow-orange-600/40 cursor-pointer active:scale-98"
                >
                  BOOK APPOINTMENT
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
