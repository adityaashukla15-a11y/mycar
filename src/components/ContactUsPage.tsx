import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Car, 
  ArrowRight 
} from 'lucide-react';

interface ContactUsPageProps {
  preselectedService?: string;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    vehicleModel: '',
    service: preselectedService || 'Deluxe Polish',
    date: new Date().toISOString().split('T')[0],
    time: '10:30 AM',
    notes: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [whatsappRedirectUrl, setWhatsappRedirectUrl] = useState('');

  // Structured message with absolutely NO asterisk (*) and NO question mark (?)
  const buildWhatsAppMessage = () => {
    const lines = [
      'SPA MY CAR - APPOINTMENT BOOKING',
      '',
      `Customer Name: ${formData.fullName}`,
      `Phone Number: ${formData.phoneNumber}`,
      `Email: ${formData.email || 'Not Provided'}`,
      `Vehicle Model: ${formData.vehicleModel || 'Standard Vehicle'}`,
      `Selected Service: ${formData.service}`,
      `Appointment Date: ${formData.date}`,
      `Preferred Time: ${formData.time}`,
    ];

    if (formData.notes.trim()) {
      lines.push(`Notes: ${formData.notes.trim()}`);
    }

    lines.push('');
    lines.push('Hello SPA MY CAR. I would like to confirm my car wash and detailing appointment with these details. Thank you.');

    const cleanMessage = lines.join('\n');
    return `https://wa.me/919111000704?text=${encodeURIComponent(cleanMessage)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppMessage();
    setWhatsappRedirectUrl(url);
    setIsSuccess(true);

    try {
      const opened = window.open(url, '_blank', 'noopener,noreferrer');
      if (!opened || opened.closed) {
        window.location.href = url;
      }
    } catch {
      window.location.href = url;
    }
  };

  const directWhatsAppGeneralUrl = 'https://wa.me/919111000704?text=Hello%20SPA%20MY%20CAR%20I%20would%20like%20to%20inquire%20about%20car%20care%20services';

  return (
    <div id="contact-page" className="w-full bg-white animate-in fade-in duration-300">
      {/* 1. Page Header */}
      <section className="py-14 sm:py-20 bg-zinc-900 text-white relative overflow-hidden border-b border-zinc-800">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#ec7a1b]/15 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ec7a1b] block mb-3">
            CONTACT US
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-2xl leading-tight">
            Get in Touch and Book Your Detailing Session
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
            Schedule an appointment online or contact our team directly. We are ready to assist you with customized vehicle care.
          </p>
        </div>
      </section>

      {/* 2. Contact Cards Row */}
      <section className="py-10 sm:py-12 bg-zinc-50 border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Phone */}
            <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ec7a1b] flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  Direct Line
                </span>
                <h3 className="text-base font-bold text-zinc-900">+91 91110 00704</h3>
                <p className="text-xs text-zinc-500 mt-1">Available for quick calls and inquiries</p>
              </div>
              <a
                href="tel:9111000704"
                className="mt-4 text-xs font-bold text-[#ec7a1b] hover:text-[#d66810] inline-flex items-center gap-1"
              >
                <span>Call Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* WhatsApp */}
            <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#25D366] flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  WhatsApp Support
                </span>
                <h3 className="text-base font-bold text-zinc-900">+91 91110 00704</h3>
                <p className="text-xs text-zinc-500 mt-1">Instant photo quotes and slot booking</p>
              </div>
              <a
                href={directWhatsAppGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Location */}
            <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ec7a1b] flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  Studio Location
                </span>
                <h3 className="text-base font-bold text-zinc-900">Vijay Nagar</h3>
                <p className="text-xs text-zinc-500 mt-1">Scheme No. 78, Indore, MP 452010</p>
              </div>
              <span className="mt-4 text-xs font-bold text-zinc-400">Centrally Accessible</span>
            </div>

            {/* Hours */}
            <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ec7a1b] flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  Working Hours
                </span>
                <h3 className="text-base font-bold text-zinc-900">Mon - Sun</h3>
                <p className="text-xs text-zinc-500 mt-1">8:30 AM to 8:00 PM Daily</p>
              </div>
              <span className="mt-4 text-xs font-bold text-emerald-600">Open 7 Days a Week</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Appointment Booking Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Detailing Studio Information */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ec7a1b] block mb-2">
                  BOOKING INFORMATION
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 tracking-tight leading-tight">
                  Reserve Your Dedicated Wash Bay
                </h2>
                <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
                  Fill in your vehicle details to reserve your preferred date and time. Our system confirms your slot with our detailing technicians instantly via WhatsApp.
                </p>
              </div>

              {/* Studio Key Highlights */}
              <div className="space-y-3.5 pt-2">
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#ec7a1b] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Zero Queue Priority</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">Arrive at your scheduled slot and drive straight into the wash bay without waiting.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#ec7a1b] flex items-center justify-center shrink-0 mt-0.5">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Custom Surface Treatment</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">Every vehicle is treated based on paint sensitivity, ceramic coat, or wrap status.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#ec7a1b] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Air-Conditioned Lounge</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">Relax with complimentary Wi-Fi and direct bay viewing while your car is perfected.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean, Structured Booking Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-10 rounded-3xl bg-zinc-900 text-white shadow-2xl border border-zinc-800">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ec7a1b] block">
                    SCHEDULE APPOINTMENT
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                    Apply for a Car Wash
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    Please provide your vehicle details. Booking confirmation is sent directly to your phone.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="p-8 rounded-2xl bg-zinc-800/80 border border-emerald-500/40 text-center animate-in fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 ring-8 ring-emerald-500/10">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h4 className="text-2xl font-black text-white mb-2">Booking Details Prepared</h4>
                    <p className="text-sm text-zinc-300 mb-6 max-w-md mx-auto leading-relaxed">
                      Your booking for <span className="text-[#ec7a1b] font-bold">{formData.service}</span> on{' '}
                      <span className="text-white font-semibold">{formData.date}</span> at{' '}
                      <span className="text-white font-semibold">{formData.time}</span> is ready to send to our team at{' '}
                      <span className="text-emerald-400 font-bold">9111000704</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        id="contact-confirm-whatsapp-btn"
                        href={whatsappRedirectUrl || buildWhatsAppMessage()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-950 transition-all hover:scale-102"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Open WhatsApp Confirmation</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => setIsSuccess(false)}
                        className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Edit Details
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-zinc-400 block mb-1.5 font-medium">Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-[#181920] border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ec7a1b] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-zinc-400 block mb-1.5 font-medium">Phone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="Phone Number (e.g. 9111000704)"
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          className="w-full bg-[#181920] border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ec7a1b] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-zinc-400 block mb-1.5 font-medium">Email Address</label>
                        <input
                          type="email"
                          placeholder="Email Address (Optional)"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#181920] border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ec7a1b] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-zinc-400 block mb-1.5 font-medium">Vehicle Make and Model</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Hyundai Creta, BMW 3 Series"
                          value={formData.vehicleModel}
                          onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                          className="w-full bg-[#181920] border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ec7a1b] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-zinc-400 block mb-1.5 font-medium">Select Service</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#181920] border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ec7a1b] transition-colors"
                      >
                        <option value="Deluxe Polish">Deluxe Polish (₹1,999)</option>
                        <option value="Standard Wash">Standard Wash (₹999)</option>
                        <option value="Ultimate Spa Detail">Ultimate Spa Detail (₹4,499)</option>
                        <option value="Windshield Restoration">Windshield Restoration</option>
                        <option value="Exterior Wash and Cleaning">Exterior Wash and Cleaning</option>
                        <option value="Interior Deep Cleaning">Interior Deep Cleaning</option>
                        <option value="Car Detailing Package">Car Detailing Package</option>
                        <option value="Paint and Finish Care">Paint and Finish Care</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-zinc-400 block mb-1.5 font-medium">Preferred Date</label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-[#181920] border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ec7a1b] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-zinc-400 block mb-1.5 font-medium">Preferred Time Slot</label>
                        <select
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full bg-[#181920] border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ec7a1b] transition-colors"
                        >
                          <option value="09:00 AM">09:00 AM</option>
                          <option value="10:30 AM">10:30 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="02:00 PM">02:00 PM</option>
                          <option value="03:30 PM">03:30 PM</option>
                          <option value="05:00 PM">05:00 PM</option>
                          <option value="06:30 PM">06:30 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-zinc-400 block mb-1.5 font-medium">Special Requests or Notes</label>
                      <textarea
                        rows={2}
                        placeholder="Any specific stains, pet hair, or areas needing attention (Optional)"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full bg-[#181920] border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ec7a1b] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      id="contact-submit-booking-btn"
                      className="w-full mt-2 py-4 px-6 rounded-full bg-[#ec7a1b] hover:bg-[#d66810] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xl shadow-orange-600/30 cursor-pointer active:scale-98"
                    >
                      CONFIRM AND BOOK APPOINTMENT
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
