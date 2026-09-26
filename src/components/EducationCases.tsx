import React from 'react';
import { CLINICAL_ARTICLES } from '../data/mockData';
import { BookOpen, Calendar, Clock, ChevronRight } from 'lucide-react';

interface EducationCasesProps {
  onSelectArticle?: (id: string) => void;
  brandName?: string;
}

export const EducationCases: React.FC<EducationCasesProps> = ({ onSelectArticle, brandName = 'MR. BUR' }) => {
  return (
    <section id="education" className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching screenshot */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-purple-700 font-extrabold mb-1">
              Dentistry Weekly Insights
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Education
            </h2>
          </div>
          <a
            href="#blog"
            className="text-xs sm:text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors underline-offset-4 hover:underline"
          >
            Visit the blog
          </a>
        </div>

        {/* 3-Column Educational Articles Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLINICAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle?.(article.id)}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all duration-200 overflow-hidden flex flex-col cursor-pointer"
            >
              {/* Graphic Card Header mimicking the dental insight poster graphic */}
              <div className="relative h-52 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 p-5 flex flex-col justify-between text-white overflow-hidden">
                {/* Decorative mesh */}
                <div className="absolute inset-0 bg-radial from-purple-500/20 via-transparent to-transparent pointer-events-none" />

                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-purple-300 bg-purple-900/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-purple-400/30">
                    Dentistry Weekly Insights
                  </span>
                  <span className="text-xs font-black tracking-tight text-white/90">
                    {brandName}
                  </span>
                </div>

                {/* Technical graphic representation */}
                <div className="my-auto z-10 text-center">
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                    {article.tag}
                  </div>
                  <h4 className="text-sm sm:text-base font-extrabold text-white leading-tight line-clamp-2 px-2">
                    {article.title}
                  </h4>
                </div>

                <div className="flex items-center justify-between text-[11px] text-purple-200 z-10 border-t border-purple-800/60 pt-2">
                  <span>{article.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.author}</span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors line-clamp-2 mb-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 flex items-center text-xs font-bold text-purple-700 group-hover:text-purple-900 transition-colors">
                  <span>Read full clinical paper</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
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
