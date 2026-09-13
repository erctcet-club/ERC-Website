import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { soundFx } from '../../utils/audio';
import ErcBadge from '../brand/ErcBadge';
import { 
  X, 
  Lock, 
  User, 
  AlertCircle, 
  ArrowRight
} from 'lucide-react';

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const { login } = useAuth();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    soundFx.playClick();

    setTimeout(() => {
      const res = login(identifier, password);
      setLoading(false);
      if (res.success) {
        if (onLoginSuccess) onLoginSuccess();
        onClose();
      } else {
        setError(res.message);
      }
    }, 250);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl border border-[#12181F]/20 max-w-md w-full overflow-hidden shadow-2xl relative">
        
        {/* Top Header Banner */}
        <div className="bg-[#12181F] text-white p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#D62828] opacity-50" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3">
            <ErcBadge size={46} />
            <div>
              <span className="text-[10px] font-mono text-[#D62828] font-bold uppercase tracking-wider block">
                ADMINISTRATOR ACCESS
              </span>
              <h3 className="text-xl font-bold font-heading text-white">
                Admin Portal
              </h3>
            </div>
          </div>
          <p className="text-xs text-slate-300 mt-2 font-mono">
            Sign in with your administrator credentials.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-5">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-mono flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                Enter your username
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  required
                  placeholder="Enter your username"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-[#12181F]/20 text-sm focus:outline-none focus:border-[#D62828] font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-[#12181F] mb-1">
                Enter your password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-[#12181F]/20 text-sm focus:outline-none focus:border-[#D62828] font-mono"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#12181F] hover:bg-[#D62828] text-white font-mono text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{loading ? "Authenticating..." : "Sign In"}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
