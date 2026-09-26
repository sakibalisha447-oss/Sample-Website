import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-14 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching screenshot */}
        <div className="mb-10 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Testimonials
          </h2>
          <div className="flex items-center justify-center sm:justify-start gap-2 mt-1">
            <span className="text-sm font-semibold text-purple-800">Voices of Dentists</span>
            <span className="text-slate-300">·</span>
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
              <span className="text-xs font-bold text-slate-700 ml-1.5">4.9/5.0 Aggregate</span>
            </div>
          </div>
        </div>

        {/* 3-Column Reviews Carousel Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              {/* Top Row: Reviewer Lockup & Avatar */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-bold text-slate-900">
                      {item.name}
                    </h3>
                    {item.verified && (
                      <span title="Verified Dental Practitioner" className="inline-flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-500">
                    {item.role}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {item.location}
                  </div>

                  {/* 5 Stars */}
                  <div className="flex items-center text-amber-400 mt-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Avatar Initial */}
                <div className="w-10 h-10 rounded-full bg-purple-700 text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0">
                  {item.avatarText || 'D'}
                </div>
              </div>

              {/* Quote Mark & Content */}
              <div className="relative pt-2">
                <Quote className="w-5 h-5 text-slate-300 mb-1" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  "{item.quote}"
                </p>
                <div className="flex justify-end mt-2">
                  <Quote className="w-4 h-4 text-slate-300 rotate-180" />
                </div>
              </div>
            </div>
          ))}
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
