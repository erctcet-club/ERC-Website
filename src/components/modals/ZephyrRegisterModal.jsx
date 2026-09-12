import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { useAuth } from '../../context/AuthContext';
import { soundFx } from '../../utils/audio';
import { API_BASE_URL } from '../../config/api';
import ErcBadge from '../brand/ErcBadge';
import { 
  X, 
  Flame, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Send, 
  Ticket,
  Sparkles,
  AlertCircle,
  Loader2
} from 'lucide-react';

export default function ZephyrRegisterModal({ isOpen, onClose }) {
  const { addRegistration } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: 'Thakur College of Engineering and Technology',
    department: 'Electronics and Telecommunication',
    year: 'Second Year (SE)',
    preferredTrack: 'UAV, Autonomous Flight & Drone Delivery Robot'
  });
  const [ticketId, setTicketId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    soundFx.playClick();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/zephyr/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          college: formData.college,
          department: formData.department,
          year: formData.year,
          track: formData.preferredTrack
        })
      });

      let data = {};
      try {
        data = await response.json();
      } catch {
        // non-JSON response
      }

      if (!response.ok) {
        if (response.status === 409) {
          throw new Error('You are already registered for this event.');
        }
        throw new Error(data.message || 'Unable to connect to the registration server. Please try again.');
      }

      const confirmedId = data.registrationId || `ERC-ZEPHYR-${Math.floor(10000 + Math.random() * 90000)}`;
      setTicketId(confirmedId);

      // Also record in client-side session context
      if (addRegistration) {
        addRegistration({
          type: "Zephyr 2026 Delegate",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          college: formData.college,
          dept: formData.department,
          track: formData.preferredTrack,
          ticketNumber: confirmedId
        });
      }

      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }
    } catch (err) {
      console.error('[Zephyr Registration Error]:', err);
      if (err.message && err.message.includes('already registered')) {
        setErrorMessage('You are already registered for this event.');
      } else {
        setErrorMessage('Unable to connect to the registration server. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    setTicketId(null);
    setErrorMessage(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl border border-[#12181F]/20 max-w-lg w-full overflow-hidden shadow-2xl relative">
        
        {/* Banner */}
        <div className="bg-[#12181F] text-white p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#D62828] opacity-50" />
          
          <button
            onClick={handleModalClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3">
            <ErcBadge size={44} />
            <div>
              <span className="text-[10px] font-mono text-[#D62828] font-bold uppercase tracking-wider block">
                FLAGSHIP TECHNICAL EVENT
              </span>
              <h3 className="text-xl font-bold font-heading text-white flex items-center gap-1.5">
                ZEPHYR 2026 Registration
              </h3>
            </div>
          </div>
          <p className="text-xs text-slate-300 mt-2 font-mono">
            September 29 - October 01, 2026 • TCET Main Auditorium &amp; Aerial Arena
          </p>
        </div>

        {/* Form or Confirmed Pass */}
        <div className="p-6">
          {errorMessage && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono flex items-start gap-2 animate-in fade-in duration-150">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#D62828]" />
              <div>
                <span className="font-bold block">Registration Notice</span>
                <span>{errorMessage}</span>
              </div>
            </div>
          )}

          {ticketId ? (
            <div className="text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-xl font-bold font-heading text-[#12181F]">
                  Delegate Registration Confirmed!
                </h4>
                <p className="text-xs text-[#12181F]/70 mt-1">
                  We look forward to hosting you at TCET Mumbai for Zephyr 2026.
                </p>
              </div>

              {/* Digital Boarding Pass */}
              <div className="p-4 rounded-xl bg-[#12181F] text-white text-left font-mono text-xs space-y-2 border border-white/10">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[#D62828] font-bold">DELEGATE PASS</span>
                  <span className="text-emerald-400 font-bold">{ticketId}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-slate-400 block text-[9px]">DELEGATE</span>
                    <span className="font-bold text-white">{formData.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[9px]">INSTITUTION</span>
                    <span className="font-bold text-white truncate">{formData.college}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-400 block text-[9px]">SELECTED TRACK</span>
                    <span className="font-bold text-[#1560D4]">{formData.preferredTrack}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleModalClose}
                className="w-full py-2.5 rounded-xl bg-[#12181F] text-white text-xs font-mono font-bold hover:bg-[#1B2430] transition-colors"
              >
                Done &amp; Return to Site
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
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#12181F]/15 text-sm focus:outline-none focus:border-[#D62828]"
                  disabled={isSubmitting}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@tcetmumbai.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#12181F]/15 text-sm focus:outline-none focus:border-[#D62828]"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#12181F]/15 text-sm focus:outline-none focus:border-[#D62828]"
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
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#12181F]/15 text-sm focus:outline-none focus:border-[#D62828]"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                    Academic Year *
                  </label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#12181F]/15 text-sm focus:outline-none focus:border-[#D62828]"
                    disabled={isSubmitting}
                  >
                    <option value="First Year (FE)">First Year (FE)</option>
                    <option value="Second Year (SE)">Second Year (SE)</option>
                    <option value="Third Year (TE)">Third Year (TE)</option>
                    <option value="Final Year (BE)">Final Year (BE)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                  Primary Competition Track *
                </label>
                <select
                  value={formData.preferredTrack}
                  onChange={(e) => setFormData({ ...formData, preferredTrack: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#12181F]/15 text-sm focus:outline-none focus:border-[#D62828]"
                  disabled={isSubmitting}
                >
                  <option value="UAV, Autonomous Flight & Drone Delivery Robot">UAV, Autonomous Flight &amp; Drone Delivery Robot</option>
                  <option value="Robowars & Battlebot Combat">Robowars &amp; Battlebot Combat</option>
                  <option value="Autonomous Mobile Robotics (AMR) & Maze Navigation">Autonomous Mobile Robotics (AMR) &amp; Maze Navigation</option>
                  <option value="Hardware Innovation & Embedded Systems Expo">Hardware Innovation &amp; Embedded Systems Expo</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-[#D62828] hover:bg-[#E31E24] disabled:opacity-60 disabled:cursor-not-allowed text-white font-mono text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Telemetry Registration...</span>
                  </>
                ) : (
                  <>
                    <Ticket className="w-4 h-4" />
                    <span>Confirm Registration &amp; Generate Pass</span>
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
