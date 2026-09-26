import React from 'react';
import { DENTAL_EVENTS } from '../data/mockData';
import { Calendar, MapPin, ChevronRight, Award, Users, BookOpen } from 'lucide-react';

interface NewsEventsProps {
  brandName?: string;
}

export const NewsEvents: React.FC<NewsEventsProps> = ({ brandName = 'MR. BUR' }) => {
  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching screenshot */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Latest News & Events
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Workshops, hands-on masterclasses, and international dental academic initiatives
            </p>
          </div>
          <a
            href="#events"
            className="text-xs sm:text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors underline-offset-4 hover:underline"
          >
            Visit the blog
          </a>
        </div>

        {/* 3-Card Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DENTAL_EVENTS.map((evt) => (
            <div
              key={evt.id}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all duration-200 overflow-hidden flex flex-col cursor-pointer"
            >
              {/* Event Graphic Poster matching screenshot styling */}
              <div className="h-52 bg-slate-900 relative overflow-hidden flex items-center justify-center p-4">
                {/* SVG Visual Graphic for Event */}
                {evt.imageType === 'bangkok-sol' && (
                  <div className="w-full h-full bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-950 flex flex-col justify-between p-4 text-white relative">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-800/60 px-2 py-0.5 rounded border border-teal-400/30">
                        Hospital Partnership
                      </span>
                      <span className="text-xs font-black tracking-tight">{brandName}</span>
                    </div>
                    <div className="text-center my-auto">
                      <div className="text-xs uppercase tracking-widest text-teal-300 font-bold">SOL DENTAL BANGKOK</div>
                      <div className="text-base font-extrabold text-white mt-1">Peace of Mind Care</div>
                    </div>
                    <div className="text-[10px] text-teal-200 flex items-center justify-between">
                      <span>Live Clinical Surgery</span>
                      <span>Advanced Rotary</span>
                    </div>
                  </div>
                )}

                {evt.imageType === 'invisalign-study' && (
                  <div className="w-full h-full bg-gradient-to-br from-rose-950 via-purple-950 to-slate-950 flex flex-col justify-between p-4 text-white relative">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-900/60 px-2 py-0.5 rounded border border-rose-400/30">
                        Invisalign Study
                      </span>
                      <span className="text-xs font-black tracking-tight">{brandName}</span>
                    </div>
                    <div className="text-center my-auto">
                      <div className="text-xs font-bold text-amber-300">MASTERCLASS 2026</div>
                      <div className="text-base font-extrabold text-white">WITH DR. TOON</div>
                      <div className="mt-1 text-[11px] bg-white/10 px-2 py-0.5 rounded inline-block text-rose-200">
                        Event Date: 26-27 Nov & 29-30 Jan
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-300 flex items-center justify-between">
                      <span>Hands-On IPR Strips</span>
                      <span>Aligner Prep</span>
                    </div>
                  </div>
                )}

                {evt.imageType === 'education-symposium' && (
                  <div className="w-full h-full bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 flex flex-col justify-between p-4 text-white relative">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-900/60 px-2 py-0.5 rounded border border-blue-400/30">
                        Academic Initiative
                      </span>
                      <span className="text-xs font-black tracking-tight">{brandName}</span>
                    </div>
                    <div className="text-center my-auto">
                      <Users className="w-8 h-8 text-blue-400 mx-auto mb-1 opacity-80" />
                      <div className="text-sm font-extrabold text-white">Supporting Dental Faculties</div>
                      <div className="text-[10px] text-blue-200 mt-0.5">28 Dental Universities</div>
                    </div>
                    <div className="text-[10px] text-blue-200 flex items-center justify-between">
                      <span>Student Burs Grant</span>
                      <span>Ergonomics Research</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Text Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{evt.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {evt.location}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors line-clamp-2 mb-2 leading-snug">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {evt.summary}
                  </p>
                </div>

                <div className="pt-4 flex items-center text-xs font-bold text-purple-700 group-hover:text-purple-900 transition-colors">
                  <span>View event schedule</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
