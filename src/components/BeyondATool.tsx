import React, { useState } from 'react';
import { Play, Volume2, VolumeX, Maximize2, X, CheckCircle, Sparkles } from 'lucide-react';

interface BeyondAToolProps {
  onShopNow: () => void;
  brandName?: string;
}

export const BeyondATool: React.FC<BeyondAToolProps> = ({ onShopNow, brandName = 'Mr Bur' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <section id="video-showcase" className="py-16 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Narrative Copy matching screenshot verbatim */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-purple-700 font-extrabold">
                Brand Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
                BEYOND A TOOL
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              More than a tool, it's the heartbeat of creating beautiful smiles. It embodies inspiration, passion, and unwavering commitment to crafting masterpieces of joy.
            </p>

            {/* Clinical Quality Trust Points */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Micro-Fracture Technology for brittle ceramics</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Single-piece concentric concentricity testing under 0.005mm</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Diamond grit electroplated with multi-layer De Beers matrix</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onShopNow}
                className="border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 font-bold px-7 py-3 rounded-full transition-all text-xs sm:text-sm shadow-xs hover:shadow-md cursor-pointer"
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Column: Embedded Video Player Container matching screenshot */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-950 aspect-video group">
              {/* Dental smile aesthetic visual backdrop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 z-10" />

              {/* Realistic CSS Medical Video Presentation Canvas */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-purple-950 via-slate-900 to-indigo-950">
                {/* Visual smiling patient artwork */}
                <div className="w-full h-full relative opacity-90">
                  <svg viewBox="0 0 800 450" className="w-full h-full object-cover" fill="none">
                    <defs>
                      <linearGradient id="skinGlow" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#4A1D96" />
                        <stop offset="50%" stopColor="#2E1065" />
                        <stop offset="100%" stopColor="#1E1B4B" />
                      </linearGradient>
                    </defs>
                    <rect width="800" height="450" fill="url(#skinGlow)" />
                    {/* Abstract beautiful smile arch vector */}
                    <g transform="translate(400, 260)">
                      <path
                        d="M -180 -20 Q 0 90 180 -20 Q 0 140 -180 -20 Z"
                        fill="#FFFFFF"
                        opacity="0.95"
                        filter="drop-shadow(0px 8px 16px rgba(0,0,0,0.5))"
                      />
                      {/* Enamel teeth arches */}
                      {[-140, -105, -70, -35, 0, 35, 70, 105, 140].map((x, i) => (
                        <rect
                          key={i}
                          x={x - 14}
                          y="-10"
                          width="26"
                          height="45"
                          rx="6"
                          fill="#F8FAFC"
                          stroke="#E2E8F0"
                          strokeWidth="1.5"
                        />
                      ))}
                      {/* Glistening diamond sparkle on smile */}
                      <circle cx="15" cy="5" r="4" fill="#67E8F9" filter="blur(1px)" />
                      <line x1="15" y1="-5" x2="15" y2="15" stroke="#FFFFFF" strokeWidth="2" />
                      <line x1="5" y1="5" x2="25" y2="5" stroke="#FFFFFF" strokeWidth="2" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Video Player Header Overlay */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 text-white">
                <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center font-bold text-xs">
                  B
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">
                    {brandName} - Beyond a tool
                  </div>
                  <div className="text-[10px] text-slate-300">
                    Precision Swiss Dental Rotary Craftsmanship
                  </div>
                </div>
              </div>

              {/* Central Play Button */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 cursor-pointer group-hover:shadow-red-600/50"
                  aria-label="Play Video"
                >
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" />
                </button>
              </div>

              {/* Bottom Video Quote & Controls matching screenshot */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-white text-xs">
                <p className="italic text-slate-200 text-xs sm:text-sm font-medium drop-shadow-md">
                  "*because every smile is a masterpiece."
                </p>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 text-white">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="font-bold text-sm">{brandName}: The Engineering of Precision Dental Burs</span>
              </div>
              <button
                onClick={() => setIsPlaying(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Canvas Simulation */}
            <div className="aspect-video bg-black flex flex-col items-center justify-center p-8 text-center text-white relative">
              <div className="max-w-md space-y-4">
                <div className="w-16 h-16 rounded-full bg-purple-600/30 border border-purple-500/50 flex items-center justify-center mx-auto text-purple-300">
                  <Play className="w-8 h-8 fill-purple-400" />
                </div>
                <h3 className="text-xl font-bold">Behind Every Micron: Swiss Lathe Precision</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Every MR. BUR rotary diamond bur undergoes computerized laser optical micrometry to ensure total concentricity, eliminating restorative chatter and protecting patient pulp vitality.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="bg-white text-slate-900 font-bold px-5 py-2 rounded-full text-xs hover:bg-slate-200 transition-colors"
                  >
                    Close Preview
                  </button>
                  <button
                    onClick={() => {
                      setIsPlaying(false);
                      onShopNow();
                    }}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-5 py-2 rounded-full text-xs transition-colors"
                  >
                    Shop Best Sellers
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
