import React, { useState } from 'react';
import { X, Lock, Mail, ShieldCheck, CheckCircle2, UserCheck } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  brandName?: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, brandName = 'MR. BUR' }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [license, setLicense] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setTimeout(() => {
      setIsLoggedIn(false);
      onClose();
    }, 1800);
  };

  const handleQuickDemoLogin = () => {
    setEmail('dr.lin@dentalspecialists.sg');
    setLicense('SDA-98241');
    setIsLoggedIn(true);
    setTimeout(() => {
      setIsLoggedIn(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
      />

      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isLoggedIn ? (
          <div className="text-center py-6 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">Welcome to {brandName} Doctor Portal</h3>
            <p className="text-xs text-slate-500">
              Verified clinical pricing and invoice payment terms active.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 mb-1">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              <span>Verified Dental Practitioner Portal</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {isRegister ? 'Register Clinical Account' : 'Doctor Sign In'}
            </h2>

            <p className="text-xs text-slate-500 mt-1 mb-5">
              Access wholesale volume tier discounts, automated clinical reordering, and ISO certificates.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Clinic Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="doctor@practice.com"
                    className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-lg focus:border-purple-600 outline-none"
                  />
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {isRegister ? 'Dental License / Registration No.' : 'Password / Pin'}
                </label>
                <div className="relative">
                  <input
                    type={isRegister ? 'text' : 'password'}
                    required
                    value={license}
                    onChange={(e) => setLicense(e.target.value)}
                    placeholder={isRegister ? 'e.g. DDC-84920' : '••••••••'}
                    className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-lg focus:border-purple-600 outline-none"
                  />
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-700 to-indigo-800 hover:from-purple-800 hover:to-indigo-900 text-white font-bold rounded-xl shadow-md transition-all text-xs sm:text-sm mt-2 cursor-pointer"
              >
                {isRegister ? 'Submit for Verification' : 'Sign In to Portal'}
              </button>

              <button
                type="button"
                onClick={handleQuickDemoLogin}
                className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <UserCheck className="w-3.5 h-3.5 text-purple-700" />
                <span>Instant Demo Dentist Sign-In</span>
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-slate-100 text-center text-xs text-slate-500">
              {isRegister ? (
                <span>
                  Already registered?{' '}
                  <button onClick={() => setIsRegister(false)} className="text-purple-700 font-bold hover:underline">
                    Sign In
                  </button>
                </span>
              ) : (
                <span>
                  New clinical practice?{' '}
                  <button onClick={() => setIsRegister(true)} className="text-purple-700 font-bold hover:underline">
                    Create verified account
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
