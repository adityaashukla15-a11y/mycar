import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, Car, Phone, Mail, User } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    vehicleModel: '',
    serviceType: preselectedService || 'Deluxe Polish',
    date: '',
    timeSlot: '10:00 AM',
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  if (!isOpen) return null;

  const buildWhatsAppUrl = () => {
    const text = [
      'SPA MY CAR - APPOINTMENT BOOKING',
      '',
      `Customer Name: ${formData.fullName}`,
      `Phone Number: ${formData.phoneNumber}`,
      `Email: ${formData.email || 'N/A'}`,
      `Vehicle Model: ${formData.vehicleModel || 'Standard Vehicle'}`,
      `Service Package: ${formData.serviceType}`,
      `Date: ${formData.date}`,
      `Time Slot: ${formData.timeSlot}`,
      '',
      'Hello SPA MY CAR. I would like to confirm my booking with these details. Thank you.',
    ].join('\n');

    return `https://wa.me/919111000704?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppUrl();
    setWhatsappUrl(url);
    setSubmitted(true);

    try {
      const win = window.open(url, '_blank', 'noopener,noreferrer');
      if (!win || win.closed) {
        window.location.href = url;
      }
    } catch {
      window.location.href = url;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
      <div 
        className="w-full max-w-lg bg-[#111215] text-white rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-zinc-400 hover:text-white hover:bg-white/20 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 ring-8 ring-emerald-500/10">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">Redirecting to WhatsApp!</h3>
            <p className="text-sm text-zinc-300 max-w-sm mb-6 leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData.fullName || 'Valued Customer'}</span>. Your booking details for{' '}
              <span className="text-orange-400 font-semibold">{formData.serviceType}</span> on{' '}
              <span className="text-white font-semibold">{formData.date || 'your selected date'}</span> at{' '}
              <span className="text-white font-semibold">{formData.timeSlot}</span> are being sent to{' '}
              <span className="text-emerald-400 font-bold">9111000704</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
              <a
                href={whatsappUrl || buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>💬 Open in WhatsApp (9111000704)</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs uppercase tracking-wider transition-all"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ec7a1b]">
                [ BOOK AN APPOINTMENT ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Schedule Your Car Wash
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Select your preferred car care service and time slot.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#1b1d22] border border-white/10 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ec7a1b]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1">Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1b1d22] border border-white/10 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ec7a1b]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9111000704"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full bg-[#1b1d22] border border-white/10 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ec7a1b]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1">Vehicle Model / Year</label>
                  <div className="relative">
                    <Car className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. BMW M4 / 2024"
                      value={formData.vehicleModel}
                      onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                      className="w-full bg-[#1b1d22] border border-white/10 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ec7a1b]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">Service Package</label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-[#1b1d22] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ec7a1b]"
                >
                  <option value="Deluxe Polish">Deluxe Polish & Wax Package (₹1,999)</option>
                  <option value="Standard Wash">Standard Wash (₹999)</option>
                  <option value="Ultimate Spa Detail">Ultimate Hydrophobic Ceramic Shield (₹4,499)</option>
                  <option value="Windshield Restoration">Windshield Restoration</option>
                  <option value="Interior Cleaning">Interior Deep Detailing & Sanitization (₹1,499)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1">Date</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#1b1d22] border border-white/10 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ec7a1b]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1">Preferred Time</label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3" />
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full bg-[#1b1d22] border border-white/10 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ec7a1b]"
                    >
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="03:30 PM">03:30 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3.5 px-6 rounded-full bg-[#ec7a1b] hover:bg-[#d66810] text-white font-bold text-sm tracking-wider uppercase transition-all shadow-xl shadow-orange-900/30 cursor-pointer"
              >
                CONFIRM APPOINTMENT
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
