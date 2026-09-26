import React from 'react';
import { Currency } from '../types';
import { CURRENCIES } from '../data/mockData';
import { Phone, ShieldCheck, Truck, ChevronDown } from 'lucide-react';

interface TopBarProps {
  currentCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  onOpenSchedule: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ currentCurrency, onCurrencyChange, onOpenSchedule }) => {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left Trust Indicators */}
        <div className="flex items-center gap-4 text-[11px] md:text-xs">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Truck className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span>Free Express Clinical Shipping over <strong className="text-white">₹15,000 / $180</strong></span>
          </div>
          <span className="hidden sm:inline text-slate-600">|</span>
          <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>ISO XXXX Medical Device Certified</span>
          </div>
        </div>

        {/* Right Tools & Currency Selector */}
        <div className="flex items-center gap-4 text-[11px] md:text-xs">
          <button
            onClick={onOpenSchedule}
            className="text-purple-300 hover:text-white transition-colors cursor-pointer hidden md:flex items-center gap-1"
          >
            <Phone className="w-3 h-3" />
            <span>Clinical Support & Demo: XXXX</span>
          </button>

          <span className="hidden md:inline text-slate-700">|</span>

          {/* Currency Dropdown */}
          <div className="relative group">
            <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-white cursor-pointer transition-colors">
              <span>{CURRENCIES[currentCurrency].label}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </div>

            <div className="absolute right-0 top-full mt-1 w-32 bg-white text-slate-900 rounded-lg shadow-xl border border-slate-200 py-1 hidden group-hover:block z-50">
              {(Object.keys(CURRENCIES) as Currency[]).map((curr) => (
                <button
                  key={curr}
                  onClick={() => onCurrencyChange(curr)}
                  className={`w-full text-left px-3 py-1.5 text-xs hover:bg-purple-50 transition-colors flex items-center justify-between ${
                    currentCurrency === curr ? 'font-semibold text-purple-700 bg-purple-50/60' : 'text-slate-700'
                  }`}
                >
                  <span>{curr}</span>
                  <span className="text-slate-400 text-[10px]">{CURRENCIES[curr].symbol}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
