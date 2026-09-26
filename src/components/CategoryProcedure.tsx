import React from 'react';
import { PROCEDURES } from '../data/mockData';

interface CategoryProcedureProps {
  activeProcedure: string;
  onSelectProcedure: (procedureId: string) => void;
  onViewAll: () => void;
}

export const CategoryProcedure: React.FC<CategoryProcedureProps> = ({
  activeProcedure,
  onSelectProcedure,
  onViewAll,
}) => {
  // 6 Procedural icons rendered with clean medical bur graphics
  const procedureIcons: Record<string, React.ReactNode> = {
    restorative: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none">
        <circle cx="50" cy="50" r="46" fill="#F0FDF4" />
        {/* Tapered green diamond bur */}
        <rect x="47" y="52" width="6" height="36" rx="1.5" fill="#94A3B8" />
        <rect x="46" y="46" width="8" height="6" fill="#10B981" rx="1" />
        <path d="M 46 46 L 47 18 A 3 3 0 0 1 53 18 L 54 46 Z" fill="#64748B" stroke="#334155" strokeWidth="1" />
      </svg>
    ),
    prosthodontic: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none">
        <circle cx="50" cy="50" r="46" fill="#EFF6FF" />
        {/* Chamfer bur */}
        <rect x="47" y="52" width="6" height="36" rx="1.5" fill="#94A3B8" />
        <rect x="46" y="46" width="8" height="6" fill="#3B82F6" rx="1" />
        <path d="M 45 46 L 47 22 A 4 4 0 0 1 53 22 L 55 46 Z" fill="#64748B" stroke="#1E3A8A" strokeWidth="1" />
      </svg>
    ),
    'oral-surgery': (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none">
        <circle cx="50" cy="50" r="46" fill="#FEF2F2" />
        {/* Long surgical bur */}
        <rect x="48" y="48" width="4" height="42" rx="1" fill="#CBD5E1" />
        <circle cx="50" cy="28" r="8" fill="#DC2626" stroke="#991B1B" strokeWidth="1" />
      </svg>
    ),
    orthodontic: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none">
        <circle cx="50" cy="50" r="46" fill="#FAF5FF" />
        {/* IPR Bur */}
        <rect x="47" y="54" width="6" height="34" rx="1.5" fill="#94A3B8" />
        <rect x="46" y="48" width="8" height="6" fill="#FACC15" rx="1" />
        <path d="M 48 48 L 49 16 A 1 1 0 0 1 51 16 L 52 48 Z" fill="#7E22CE" stroke="#581C87" strokeWidth="0.8" />
      </svg>
    ),
    endodontic: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none">
        <circle cx="50" cy="50" r="46" fill="#FFFBEB" />
        {/* Non cutting endo bur */}
        <rect x="47" y="52" width="6" height="36" rx="1.5" fill="#94A3B8" />
        <rect x="46" y="46" width="8" height="6" fill="#F59E0B" rx="1" />
        <path d="M 46 46 L 47 22 Q 50 18 53 22 L 54 46 Z" fill="#64748B" />
        <circle cx="50" cy="20" r="3" fill="#E2E8F0" stroke="#475569" strokeWidth="1" />
      </svg>
    ),
    pediatric: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none">
        <circle cx="50" cy="50" r="46" fill="#F0FDFA" />
        {/* Mini head bur */}
        <rect x="48" y="58" width="4" height="28" rx="1" fill="#CA8A04" />
        <circle cx="50" cy="46" r="6" fill="#0D9488" stroke="#042F2E" strokeWidth="1" />
      </svg>
    ),
  };

  const activeProceduresList = PROCEDURES.filter((p) => p.id !== 'all');

  return (
    <section id="procedures" className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Shop By Procedure
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Precision calibrated rotary burs engineered for specific clinical workflows
            </p>
          </div>
          <button
            onClick={onViewAll}
            className="text-xs sm:text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors underline-offset-4 hover:underline cursor-pointer"
          >
            View all collections
          </button>
        </div>

        {/* Circular / Soft Arched Category Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
          {activeProceduresList.map((proc) => {
            const isSelected = activeProcedure === proc.id;
            return (
              <button
                key={proc.id}
                onClick={() => onSelectProcedure(proc.id)}
                className={`group flex flex-col items-center p-4 rounded-2xl transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-purple-50 ring-2 ring-purple-600 shadow-md scale-105'
                    : 'bg-slate-50 hover:bg-slate-100/80 hover:shadow-sm'
                }`}
              >
                {/* Circular soft icon frame */}
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-xs group-hover:scale-110 transition-transform mb-3 border border-slate-100">
                  {procedureIcons[proc.id] || (
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold">
                      {proc.name.charAt(0)}
                    </div>
                  )}
                </div>

                <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors text-center">
                  {proc.name}
                </span>
                <span className="text-[10px] text-slate-400 text-center line-clamp-1 mt-0.5">
                  {proc.burDesc}
                </span>
              </button>
            );
          })}
        </div>

        {/* Carousel pagination dots indicator matching screenshot */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          <span className="w-2 h-2 rounded-full bg-slate-800" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  );
};
