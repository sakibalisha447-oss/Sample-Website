import React from 'react';
import { CATEGORIES_HEAD } from '../data/mockData';

interface CategoryHeadTypeProps {
  activeCategory: string;
  onSelectCategory: (catId: string) => void;
  onViewAll: () => void;
}

export const CategoryHeadType: React.FC<CategoryHeadTypeProps> = ({
  activeCategory,
  onSelectCategory,
  onViewAll,
}) => {
  // Head icons
  const headIcons: Record<string, React.ReactNode> = {
    'specialty-kits': (
      <svg viewBox="0 0 80 80" className="w-12 h-12" fill="none">
        <rect x="14" y="24" width="52" height="36" rx="6" fill="#1E1B4B" />
        <rect x="22" y="32" width="6" height="12" rx="1" fill="#60A5FA" />
        <rect x="32" y="30" width="6" height="16" rx="1" fill="#FACC15" />
        <rect x="42" y="28" width="6" height="20" rx="1" fill="#EF4444" />
        <rect x="52" y="34" width="6" height="8" rx="1" fill="#10B981" />
      </svg>
    ),
    'diamond-burs': (
      <svg viewBox="0 0 80 80" className="w-12 h-12" fill="none">
        <rect x="37" y="44" width="6" height="28" rx="1" fill="#94A3B8" />
        <path d="M 34 44 L 40 16 L 46 44 Z" fill="#64748B" stroke="#334155" strokeWidth="1" />
        <polygon points="40,20 44,28 36,28" fill="#F8FAFC" opacity="0.8" />
      </svg>
    ),
    'carbide-burs': (
      <svg viewBox="0 0 80 80" className="w-12 h-12" fill="none">
        <rect x="37" y="44" width="6" height="28" rx="1" fill="#94A3B8" />
        <rect x="34" y="18" width="12" height="26" rx="2" fill="#475569" stroke="#1E293B" strokeWidth="1" />
        {[-4, 2, 8, 14, 20].map((offset) => (
          <line key={offset} x1="34" y1={20 + offset} x2="46" y2={24 + offset} stroke="#FFFFFF" strokeWidth="0.8" />
        ))}
      </svg>
    ),
    'gold-burs': (
      <svg viewBox="0 0 80 80" className="w-12 h-12" fill="none">
        <rect x="37" y="44" width="6" height="28" rx="1" fill="#CA8A04" />
        <path d="M 33 44 C 33 26 40 18 40 18 C 40 18 47 26 47 44 Z" fill="#EAB308" stroke="#A16207" strokeWidth="1" />
        <line x1="39" y1="20" x2="39" y2="42" stroke="#FEF08A" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    'tungsten-carbide': (
      <svg viewBox="0 0 80 80" className="w-12 h-12" fill="none">
        <rect x="37" y="42" width="6" height="30" rx="1" fill="#CBD5E1" />
        <circle cx="40" cy="28" r="9" fill="#334155" stroke="#0F172A" strokeWidth="1" />
        <circle cx="40" cy="28" r="3" fill="#94A3B8" />
      </svg>
    ),
    'ipr-burs': (
      <svg viewBox="0 0 80 80" className="w-12 h-12" fill="none">
        <rect x="37" y="44" width="6" height="28" rx="1" fill="#CBD5E1" />
        <rect x="36" y="38" width="8" height="6" fill="#FACC15" rx="1" />
        <line x1="40" y1="38" x2="40" y2="12" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
        <circle cx="40" cy="11" r="1.5" fill="#EF4444" />
      </svg>
    ),
  };

  return (
    <section id="categories" className="py-12 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Shop by Categories
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Friction grip shank designs, head geometries, and metallurgy grades
            </p>
          </div>
          <button
            onClick={onViewAll}
            className="text-xs sm:text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors underline-offset-4 hover:underline cursor-pointer"
          >
            View all collections
          </button>
        </div>

        {/* Circular cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES_HEAD.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group flex flex-col items-center p-4 rounded-2xl transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-purple-100/70 ring-2 ring-purple-600 shadow-md scale-105'
                    : 'bg-white hover:bg-slate-100/90 hover:shadow-sm'
                }`}
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-slate-50 shadow-xs group-hover:scale-110 transition-transform mb-3 border border-slate-200/80">
                  {headIcons[cat.id]}
                </div>

                <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors text-center line-clamp-2">
                  {cat.name}
                </span>
                <span className="text-[10px] text-slate-400 text-center line-clamp-1 mt-0.5">
                  {cat.desc}
                </span>
              </button>
            );
          })}
        </div>

        {/* Pagination dots matching screenshot */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          <span className="w-2 h-2 rounded-full bg-slate-800" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  );
};
