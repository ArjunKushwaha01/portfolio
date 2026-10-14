import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, GraduationCap, Loader2, AlertCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '4999b536-13c9-4584-b027-3961b52c313b',
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Inquiry from ${form.name}`,
          from_name: 'Arjun Portfolio Contact Form',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setForm({ name: '', email: '', message: '' });
          onClose();
        }, 3200);
      } else {
        setErrorMsg(data.message || 'Transmission failed. Please try again.');
      }
    } catch {
      setErrorMsg('Network error while sending. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg rounded-[32px] sm:rounded-[40px] border-2 border-cyan-500/40 bg-[#0C0C0C] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95)] z-10 overflow-hidden"
          >
            {/* Top accent glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-36 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full border border-white/10 text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-mono font-medium mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Security Operations &amp; Inquiries</span>
              </div>
              <h3 className="hero-heading text-3xl sm:text-4xl font-black uppercase tracking-tight">
                Get in Touch
              </h3>
              <p className="text-[#D7E2EA]/70 text-xs sm:text-sm mt-1">
                Looking for a Cybersecurity Specialist or SOC Defense Engineer? Reach out directly to discuss opportunities, infrastructure defense, or security operations.
              </p>
            </div>

            {/* Current Education & Location Badge */}
            <div className="mb-5 p-3 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-[#D7E2EA]/80 flex flex-col gap-1.5 font-mono">
              <div className="flex items-center gap-2 text-cyan-300">
                <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                <span>Upcoming: Sunbeam CDAC (PGCP-ITISS | Aug 2026 – Feb 2027)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#D7E2EA]/60">
                <MapPin className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
                <span>Pune, Maharashtra, India • Open to Relocation &amp; Remote</span>
              </div>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-10 flex flex-col items-center justify-center text-center gap-3"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold uppercase tracking-wider text-white">
                  Message Delivered!
                </h4>
                <p className="text-sm text-[#D7E2EA]/80 max-w-xs leading-relaxed">
                  Your inquiry has been sent directly to <span className="text-cyan-300 font-mono font-medium">kushwahaarjun920@gmail.com</span>. Arjun will reply shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                {errorMsg && (
                  <div className="p-3 rounded-2xl bg-red-950/50 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-mono font-medium mb-1">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Recruiter or Engineering Lead"
                    className="w-full bg-[#16171B] border border-white/10 rounded-2xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-mono font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="lead@company.com"
                    className="w-full bg-[#16171B] border border-white/10 rounded-2xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-mono font-medium mb-1">
                    Inquiry / Opportunity Details
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Discussing SOC, Cyber Defense, Infrastructure Security..."
                    className="w-full bg-[#16171B] border border-white/10 rounded-2xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background:
                      'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow:
                      '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                    outline: '2px solid #FFFFFF',
                    outlineOffset: '-3px',
                  }}
                  className="w-full mt-1.5 py-3 rounded-full text-white font-medium uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:brightness-110 active:scale-98 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Inquiry</span>
                    </>
                  )}
                </button>

                {/* Direct Contact Links */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-3 pt-3 border-t border-white/10 text-xs text-[#D7E2EA]/70 font-mono">
                  <a
                    href="mailto:kushwahaarjun920@gmail.com"
                    className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    kushwahaarjun920@gmail.com
                  </a>
                  <a
                    href="tel:9993307667"
                    className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    +91 9993307667
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
