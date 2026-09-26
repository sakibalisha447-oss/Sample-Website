import React from 'react';
import { X, Award, Gift, Sparkles, RefreshCw, CheckCircle2 } from 'lucide-react';

interface MemberCreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
  brandName?: string;
}

export const MemberCreditsModal: React.FC<MemberCreditsModalProps> = ({
  isOpen,
  onClose,
  brandName = 'MR. BUR',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
      />

      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {brandName} Member Credits
              </h2>
              <p className="text-xs text-slate-500">
                Exclusive clinic loyalty program & bur recycling exchange
              </p>
            </div>
          </div>

          {/* Current balance card */}
          <div className="p-4 bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-xl flex items-center justify-between">
            <div>
              <div className="text-[11px] text-blue-200 uppercase font-semibold">Active Practice Balance</div>
              <div className="text-2xl font-black tabular-nums mt-0.5">2,450 Credits</div>
              <div className="text-[11px] text-blue-300">Equivalent to ₹2,450.00 / $30 store discount</div>
            </div>
            <button
              onClick={onClose}
              className="bg-white text-blue-900 text-xs font-bold px-3.5 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Redeem in Cart
            </button>
          </div>

          {/* 3 Ways to Earn */}
          <div className="space-y-3 text-xs">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
              How Your Operatory Earns Credits:
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <Gift className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-800">5% Cashback on Every Order</div>
                <div className="text-slate-500">Earn 5 points for every 100 spent on all rotary burs, kits, and polishers.</div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <RefreshCw className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-800">Bur Recycling Trade-In Program</div>
                <div className="text-slate-500">Return 50 used diamond/carbide burs in our pre-paid envelope to receive 1,000 bonus credits toward new kits.</div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-800">Refer a Fellow Clinician</div>
                <div className="text-slate-500">Send your practice referral code. When they complete their first order, both clinics receive 1,500 credits.</div>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
          >
            Close & Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};
