import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { useAuth } from '../../context/AuthContext';
import { soundFx } from '../../utils/audio';
import { API_BASE_URL } from '../../config/api';
import ErcBadge from '../brand/ErcBadge';
import { 
  X, 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  Send,
  AlertCircle,
  Loader2
} from 'lucide-react';

export default function WorkshopRegisterModal({ isOpen, workshop, onClose }) {
  const { addRegistration } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [college, setCollege] = useState('Thakur College of Engineering and Technology');
  const [year, setYear] = useState('Second Year (SE)');
  const [confirmed, setConfirmed] = useState(false);
  const [registrationId, setRegistrationId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  if (!isOpen || !workshop) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    soundFx.playClick();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/workshops/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          college: college.trim(),
          workshop: workshop.title
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Workshop registration could not be completed.');
      }

      const confirmedId = data.registrationId || `ERC-WS-${Math.floor(10000 + Math.random() * 90000)}`;
      setRegistrationId(confirmedId);

      if (addRegistration) {
        addRegistration({
          type: `Workshop: ${workshop.title}`,
          name,
          email,
          phone,
          year,
          college: college || "TCET",
          ticketNumber: confirmedId
        });
      }

      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }

      setConfirmed(true);
    } catch (err) {
      console.error('[Workshop Registration Error]:', err);
      setErrorMessage(err.message || 'Network error occurred. Please verify server connectivity.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    setConfirmed(false);
    setRegistrationId(null);
    setErrorMessage(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl border border-[#12181F]/20 max-w-lg w-full overflow-hidden shadow-2xl relative">
        
        {/* Banner */}
        <div className="bg-[#12181F] text-white p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#1560D4] opacity-50" />
          
          <button
            onClick={handleModalClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3">
            <ErcBadge size={44} />
            <div>
              <span className="text-[10px] font-mono text-[#1560D4] font-bold uppercase tracking-wider block">
                WORKSHOP ENROLLMENT
              </span>
              <h3 className="text-xl font-bold font-heading text-white">
                {workshop.title}
              </h3>
            </div>
          </div>
          <p className="text-xs text-slate-300 mt-2 font-mono">
            {workshop.dates} • {workshop.duration} • Led by {workshop.instructor}
          </p>
        </div>

        {/* Form or Confirmation */}
        <div className="p-6">
          {errorMessage && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono flex items-start gap-2 animate-in fade-in duration-150">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#D62828]" />
              <div>
                <span className="font-bold block">Enrollment Notice</span>
                <span>{errorMessage}</span>
              </div>
            </div>
          )}

          {confirmed ? (
            <div className="text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold font-heading text-[#12181F]">
                Seat Reserved Successfully!
              </h4>
              <p className="text-xs text-[#12181F]/70 max-w-sm mx-auto leading-relaxed">
                A confirmation kit and laboratory hardware checklist have been registered for <strong>{name}</strong> ({email}).
              </p>

              {/* Digital Pass Details */}
              <div className="p-3.5 rounded-xl bg-[#12181F] text-white font-mono text-xs text-left border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                  <span className="text-[#1560D4] font-bold">PASS NUMBER</span>
                  <span className="text-emerald-400 font-bold">{registrationId}</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">WORKSHOP:</span>
                  <span className="text-white font-semibold truncate max-w-[200px]">{workshop.title}</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">VENUE:</span>
                  <span className="text-slate-200">Lab 304, A-Block, TCET</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#F7F8FA] border border-[#12181F]/10 font-mono text-xs text-left text-slate-700">
                <span className="text-[#D62828] font-bold block mb-1">EVENT VENUE INSTRUCTIONS:</span>
                Report to Lab 304, A-Block, TCET Mumbai at 09:00 AM sharp with your laptop and student ID card.
              </div>
              <button
                onClick={handleModalClose}
                className="w-full py-2.5 rounded-xl bg-[#12181F] text-white text-xs font-mono font-bold hover:bg-[#1B2430] transition-colors"
              >
                Close &amp; Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Abhay Vishwakarma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#12181F]/15 text-sm focus:outline-none focus:border-[#1560D4]"
                  disabled={isSubmitting}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@tcetmumbai.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#12181F]/15 text-sm focus:outline-none focus:border-[#1560D4]"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#12181F]/15 text-sm focus:outline-none focus:border-[#1560D4]"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                    College / Institution *
                  </label>
                  <input
                    type="text"
                    required
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#12181F]/15 text-sm focus:outline-none focus:border-[#1560D4]"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                    Academic Year *
                  </label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#12181F]/15 text-sm focus:outline-none focus:border-[#1560D4]"
                    disabled={isSubmitting}
                  >
                    <option value="First Year (FE)">First Year (FE)</option>
                    <option value="Second Year (SE)">Second Year (SE)</option>
                    <option value="Third Year (TE)">Third Year (TE)</option>
                    <option value="Final Year (BE)">Final Year (BE)</option>
                  </select>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#F7F8FA] border border-[#12181F]/10 text-xs font-mono text-slate-600">
                <span>Hardware Tooling Provided: Soldering stations, STM32 kits, motors, oscilloscopes.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-[#1560D4] hover:bg-[#196ff3] disabled:opacity-60 disabled:cursor-not-allowed text-white font-mono text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Reserving Seat Telemetry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Confirm Workshop Seat</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
