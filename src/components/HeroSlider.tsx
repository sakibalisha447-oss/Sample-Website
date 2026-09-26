import React, { useState, useEffect } from 'react';
import { HeroBursLineup } from './BurVisual';
import { ChevronLeft, ChevronRight, Sparkles, Shield, ArrowRight } from 'lucide-react';

interface HeroSliderProps {
  onShopNow: () => void;
  brandName?: string;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onShopNow, brandName = 'MR. BUR' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Auto advance slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section className="relative overflow-hidden bg-[#240645] text-white">
      {/* Background rich gradient & subtle radial texture */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#200540] via-[#3B0764] to-[#1E0438] opacity-95" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-30 -left-20 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative fine technical grid pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Main Slide 1: Verbatim from user screenshot (Burs Lineup + BUY 3 FREE 1) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 min-h-[480px] md:min-h-[580px] flex flex-col justify-between">
        {/* Top bar inside hero: Logo badge & Promo Tag */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div>
              <span className="text-xs uppercase tracking-widest text-purple-300 font-semibold block">
                Clinical Rotary Instrumentation
              </span>
              <div className="text-sm font-bold text-white flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Swiss Micro-Lathe Optical Inspection</span>
              </div>
            </div>
          </div>

          {/* Quality highlight pill */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 text-purple-100 text-xs px-3.5 py-1.5 rounded-full flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="font-medium">Sub-micron Runout Concentricity</span>
          </div>
        </div>

        {/* Slide 1 Content */}
        {currentSlide === 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 my-4 z-10 animate-in fade-in duration-500">
            {/* Left Promotional Text & BUY 3 FREE 1 */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-4">
              <div className="inline-block bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 text-xs sm:text-sm font-extrabold tracking-wider uppercase px-4 py-1.5 rounded-md shadow-lg transform -rotate-1">
                LIMITED TIME PROMO
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-none text-white drop-shadow-md">
                BUY 3 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-white">
                  FREE 1
                </span>
              </h1>

              <p className="text-purple-200 text-sm sm:text-base max-w-md mx-auto lg:mx-0 leading-relaxed">
                Elevate clinical ergonomics with our ultra-sharp, non-clogging diamond burs and vibration-damped carbide flutes. Mix and match across any procedural kit.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={onShopNow}
                  className="bg-white hover:bg-slate-100 text-purple-950 font-bold px-8 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all text-sm sm:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4 text-purple-900" />
                </button>

                <button
                  onClick={onShopNow}
                  className="border border-white/30 hover:border-white text-white font-medium px-5 py-3 rounded-full hover:bg-white/10 transition-colors text-xs sm:text-sm cursor-pointer"
                >
                  View IPR Kits
                </button>
              </div>

              {/* Promo details info */}
              <div className="text-[11px] text-purple-300/80 pt-1">
                *Applies automatically at checkout to diamond burs, IPR strips & polishers.
              </div>
            </div>

            {/* Right: Graphic showcasing precision burs lined up by size */}
            <div className="lg:col-span-7 flex justify-center">
              <HeroBursLineup />
            </div>
          </div>
        )}

        {/* Slide 2 Content: One Slice IPR Kit */}
        {currentSlide === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 my-4 z-10 animate-in fade-in duration-500">
            <div className="lg:col-span-6 text-center lg:text-left space-y-4">
              <div className="inline-block bg-purple-700/80 text-purple-200 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-purple-400/30">
                Orthodontic Innovation
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                ONE SLICE IPR KIT <br />
                <span className="text-amber-300">FOR ALIGNER & INVISALIGN</span>
              </h1>

              <p className="text-purple-200 text-sm sm:text-base max-w-lg leading-relaxed">
                Calibrated 0.1mm to 0.5mm interproximal reduction burs with color-coded safety collars and an autoclavable anodized aluminum bur block.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={onShopNow}
                  className="bg-white hover:bg-slate-100 text-purple-950 font-bold px-8 py-3.5 rounded-full shadow-xl transition-all text-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore 23-Piece IPR Set</span>
                  <ArrowRight className="w-4 h-4 text-purple-900" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md p-6 bg-slate-900/60 rounded-2xl border border-purple-500/30 backdrop-blur-md shadow-2xl">
                <div className="text-xs uppercase tracking-wider text-purple-300 font-bold mb-2">
                  Clinical Advantages
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-purple-100">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>0.1mm ultra-fine diamond edge avoids interproximal ledge creation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Autoclavable anodized aluminum block withstands 134°C sterilization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Smooth friction grip shank reduces handpiece turbine stress</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Slide 3 Content: Degranulation & Surgical Precision */}
        {currentSlide === 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 my-4 z-10 animate-in fade-in duration-500">
            <div className="lg:col-span-6 text-center lg:text-left space-y-4">
              <div className="inline-block bg-red-600/80 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                Surgical & Implantology
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                SURGICAL DEGRANULATION <br />
                <span className="text-sky-300">WITHOUT BONE MORPHOLOGY LOSS</span>
              </h1>

              <p className="text-purple-200 text-sm sm:text-base max-w-lg leading-relaxed">
                Debride infected bone sockets and granulation tissue without gouging bone plates or adjacent roots. Depth stoppers prevent over-penetration.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={onShopNow}
                  className="bg-white hover:bg-slate-100 text-purple-950 font-bold px-8 py-3.5 rounded-full shadow-xl transition-all text-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>View Surgical Degranulation Kit</span>
                  <ArrowRight className="w-4 h-4 text-purple-900" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md p-6 bg-slate-900/60 rounded-2xl border border-sky-500/30 backdrop-blur-md shadow-2xl">
                <div className="text-xs uppercase tracking-wider text-sky-300 font-bold mb-2">
                  Implant Site Preparation
                </div>
                <div className="text-xs sm:text-sm text-slate-200 space-y-2">
                  <p>Specially shaped cross-cut tungsten flutes peel fibrous tissue selectively from porous bone bed.</p>
                  <div className="p-3 bg-sky-950/60 rounded-lg border border-sky-800/40 text-xs text-sky-200">
                    4 Sizes Included: 1.0mm, 2.5mm, 3.0mm, 3.5mm with precision irrigation channels.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Navigation: Prev/Next & Dots matching screenshot */}
        <div className="flex items-center justify-between pt-6 z-10 border-t border-purple-900/40">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all rounded-full cursor-pointer ${
                  currentSlide === idx
                    ? 'w-7 h-2 bg-white'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
