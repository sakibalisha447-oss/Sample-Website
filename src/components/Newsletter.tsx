import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid clinical or personal email address.');
      return;
    }
    setError('');
    setIsSubscribed(true);
  };

  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Minimal subscription banner container matching screenshot */}
        <div className="p-8 sm:p-10 rounded-2xl border border-slate-200/90 bg-white shadow-xs text-center flex flex-col items-center justify-center">
          {/* Paper airplane icon matching screenshot */}
          <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
            <Send className="w-5 h-5 -rotate-45 ml-0.5" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-1.5">
            Sign up for our newsletter
          </h3>

          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-6">
            Sign up & be the first to hear about our exclusive offers, clinical burs webinars, and new product releases.
          </p>

          {isSubscribed ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs sm:text-sm flex items-center justify-center gap-2 max-w-md w-full animate-in fade-in duration-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                Thank you! Check your inbox for your <strong>10% OFF coupon code: CLINIC10</strong>
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter your email"
                  className="w-full bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm px-4 py-3 rounded-lg border border-slate-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-white hover:bg-slate-50 text-purple-700 font-bold border border-purple-600 hover:border-purple-700 px-6 py-3 rounded-lg transition-colors text-xs sm:text-sm shrink-0 shadow-xs cursor-pointer"
                >
                  Submit
                </button>
              </div>
              {error && (
                <div className="text-[11px] text-rose-600 text-left mt-1.5 pl-1">
                  {error}
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
