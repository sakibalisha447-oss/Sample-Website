import React from 'react';

interface HeroBursLineupProps {
  className?: string;
}

export const HeroBursLineup: React.FC<HeroBursLineupProps> = ({ className = '' }) => {
  // Lineup matching screenshot: 0.3mm, 0.4mm, 0.5mm, 0.3mm, 0.45mm, 0.5mm, 0.2mm
  const burs = [
    { label: '0.3 mm', angle: -28, x: 75, height: 180, headShape: 'needle', color: '#E2E8F0', ring: '#EF4444' },
    { label: '0.4 mm', angle: -20, x: 145, height: 210, headShape: 'flame', color: '#F1F5F9', ring: '#EAB308' },
    { label: '0.5 mm', angle: -12, x: 220, height: 245, headShape: 'round-taper', color: '#E2E8F0', ring: '#10B981' },
    { label: '0.3 mm', angle: -2, x: 305, height: 275, headShape: 'inverted-cone', color: '#CBD5E1', ring: '#EF4444' },
    { label: '0.45 mm', angle: 8, x: 395, height: 305, headShape: 'taper-round', color: '#E2E8F0', ring: '#3B82F6' },
    { label: '0.5 mm', angle: 18, x: 490, height: 330, headShape: 'cylinder', color: '#F8FAFC', ring: '#10B981' },
    { label: '0.2 mm', angle: 30, x: 595, height: 360, headShape: 'ultra-ipr', color: '#F8FAFC', ring: '#FACC15', highlight: true },
  ];

  return (
    <div className={`relative w-full h-[380px] md:h-[460px] flex items-center justify-center overflow-visible select-none ${className}`}>
      {/* Background Soft Glows */}
      <div className="absolute inset-0 bg-radial from-purple-500/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-indigo-600/25 blur-3xl rounded-full pointer-events-none" />

      <svg
        viewBox="0 0 720 460"
        className="w-full h-full max-w-[760px] drop-shadow-2xl overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Shank gradients */}
          <linearGradient id="shankGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="25%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="75%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          <linearGradient id="goldShankGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#CA8A04" />
            <stop offset="25%" stopColor="#FDE047" />
            <stop offset="50%" stopColor="#FEF08A" />
            <stop offset="75%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="#A16207" />
          </linearGradient>

          {/* Diamond Grit textured patterns */}
          <pattern id="diamondGrit" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.8" fill="#FFFFFF" fillOpacity="0.8" />
            <circle cx="0.5" cy="0.5" r="0.5" fill="#94A3B8" fillOpacity="0.7" />
            <circle cx="3.5" cy="3.5" r="0.5" fill="#64748B" fillOpacity="0.7" />
          </pattern>

          <linearGradient id="diamondHeadGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="35%" stopColor="#CBD5E1" />
            <stop offset="70%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          {/* Calibrated IPR Micro-strip bur */}
          <linearGradient id="iprGoldBand" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#EAB308" />
            <stop offset="50%" stopColor="#FEF9C3" />
            <stop offset="100%" stopColor="#CA8A04" />
          </linearGradient>

          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Shadow base plane */}
        <ellipse cx="360" cy="425" rx="300" ry="18" fill="#18042B" fillOpacity="0.6" filter="blur(10px)" />

        {/* Draw each bur tilted according to perspective */}
        {burs.map((bur, idx) => {
          const shankWidth = 13;
          const headWidth = idx === 6 ? 11 : idx === 3 ? 16 : 14;
          const headHeight = idx === 6 ? 60 : 45;

          return (
            <g
              key={idx}
              transform={`translate(${bur.x}, 230) rotate(${bur.angle})`}
              className="transition-transform duration-300 hover:scale-105 cursor-pointer group"
            >
              {/* Bur Shank (19mm Stainless steel body) */}
              <rect
                x={-shankWidth / 2}
                y={-40}
                width={shankWidth}
                height={bur.height * 0.65}
                rx="2"
                fill="url(#shankGrad)"
                stroke="#475569"
                strokeWidth="0.8"
              />

              {/* Laser etched ISO concentric markings on shank */}
              <line x1={-shankWidth / 2} y1="20" x2={shankWidth / 2} y2="20" stroke="#64748B" strokeWidth="0.75" />
              <line x1={-shankWidth / 2} y1="35" x2={shankWidth / 2} y2="35" stroke="#64748B" strokeWidth="0.75" />
              <line x1={-shankWidth / 2} y1="50" x2={shankWidth / 2} y2="50" stroke="#64748B" strokeWidth="0.75" />

              {/* Color-Coded ISO Grit Identification Ring */}
              <rect
                x={-shankWidth / 2 - 0.5}
                y={-5}
                width={shankWidth + 1}
                height="8"
                rx="1"
                fill={bur.ring}
                stroke="#1E293B"
                strokeWidth="0.5"
              />

              {/* Bur Neck / Taper */}
              <path
                d={`M ${-shankWidth / 2 + 1} -40 L ${-headWidth / 2 + 1} -80 L ${headWidth / 2 - 1} -80 L ${shankWidth / 2 - 1} -40 Z`}
                fill={bur.highlight ? 'url(#goldShankGrad)' : 'url(#shankGrad)'}
                stroke="#64748B"
                strokeWidth="0.5"
              />

              {/* Bur Working Head with Diamond Coating */}
              <g transform="translate(0, -80)">
                {bur.headShape === 'needle' && (
                  <path
                    d={`M ${-headWidth / 2} 0 Q 0 ${-headHeight - 15} ${headWidth / 2} 0 Z`}
                    fill="url(#diamondHeadGrad)"
                    stroke="#334155"
                    strokeWidth="0.8"
                  />
                )}
                {bur.headShape === 'flame' && (
                  <path
                    d={`M ${-headWidth / 2} 0 C ${-headWidth} ${-headHeight * 0.4} 0 ${-headHeight - 10} 0 ${-headHeight - 10} C 0 ${-headHeight - 10} ${headWidth} ${-headHeight * 0.4} ${headWidth / 2} 0 Z`}
                    fill="url(#diamondHeadGrad)"
                    stroke="#334155"
                    strokeWidth="0.8"
                  />
                )}
                {bur.headShape === 'round-taper' && (
                  <path
                    d={`M ${-headWidth / 2} 0 L ${-headWidth / 2 - 2} ${-headHeight + 12} A 9 9 0 0 0 ${headWidth / 2 + 2} ${-headHeight + 12} L ${headWidth / 2} 0 Z`}
                    fill="url(#diamondHeadGrad)"
                    stroke="#334155"
                    strokeWidth="0.8"
                  />
                )}
                {bur.headShape === 'inverted-cone' && (
                  <path
                    d={`M ${-headWidth / 2 + 3} 0 L ${-headWidth / 2 - 4} ${-headHeight} L ${headWidth / 2 + 4} ${-headHeight} L ${headWidth / 2 - 3} 0 Z`}
                    fill="url(#diamondHeadGrad)"
                    stroke="#334155"
                    strokeWidth="0.8"
                  />
                )}
                {bur.headShape === 'taper-round' && (
                  <path
                    d={`M ${-headWidth / 2} 0 L ${-headWidth / 2 + 2} ${-headHeight + 8} A 6 6 0 0 0 ${headWidth / 2 - 2} ${-headHeight + 8} L ${headWidth / 2} 0 Z`}
                    fill="url(#diamondHeadGrad)"
                    stroke="#334155"
                    strokeWidth="0.8"
                  />
                )}
                {bur.headShape === 'cylinder' && (
                  <path
                    d={`M ${-headWidth / 2} 0 L ${-headWidth / 2} ${-headHeight} L ${headWidth / 2} ${-headHeight} L ${headWidth / 2} 0 Z`}
                    fill="url(#diamondHeadGrad)"
                    stroke="#334155"
                    strokeWidth="0.8"
                  />
                )}
                {bur.headShape === 'ultra-ipr' && (
                  <g>
                    {/* Ultra fine micro-bur head with gold band */}
                    <path
                      d={`M ${-headWidth / 2 + 1} 0 L ${-headWidth / 2 + 2} ${-headHeight - 20} Q 0 ${-headHeight - 28} ${headWidth / 2 - 2} ${-headHeight - 20} L ${headWidth / 2 - 1} 0 Z`}
                      fill="url(#diamondHeadGrad)"
                      stroke="#334155"
                      strokeWidth="0.8"
                    />
                    {/* High-visibility yellow safety band */}
                    <rect x={-shankWidth / 2} y="15" width={shankWidth} height="12" fill="url(#iprGoldBand)" rx="1" />
                  </g>
                )}

                {/* Shimmering Diamond Grit Overlay */}
                <rect
                  x={-headWidth}
                  y={-headHeight - 30}
                  width={headWidth * 2}
                  height={headHeight + 30}
                  fill="url(#diamondGrit)"
                  className="mix-blend-overlay opacity-80"
                />

                {/* Metallic Edge Sheen Highlight */}
                <line
                  x1={-headWidth / 4}
                  y1="0"
                  x2={-headWidth / 4}
                  y2={-headHeight}
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.75"
                />
              </g>

              {/* Precision Gauge Callout Line & Millimeter Text */}
              <g
                transform={`rotate(${-bur.angle}, 0, -145)`}
                className="transition-all duration-300 group-hover:-translate-y-1"
              >
                {/* Pointer guide line */}
                <line
                  x1="0"
                  y1="-110"
                  x2="0"
                  y2="-130"
                  stroke="#E2E8F0"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                  opacity="0.8"
                />
                <circle cx="0" cy="-110" r="2.5" fill="#FFFFFF" />

                {/* Millimeter Label Pill with high contrast */}
                <rect
                  x="-32"
                  y="-158"
                  width="64"
                  height="24"
                  rx="12"
                  fill="rgba(15, 23, 42, 0.85)"
                  stroke={bur.highlight ? '#FACC15' : 'rgba(255, 255, 255, 0.4)'}
                  strokeWidth={bur.highlight ? '1.5' : '1'}
                  className="backdrop-blur-sm shadow-lg"
                />
                <text
                  x="0"
                  y="-142"
                  fill="#FFFFFF"
                  fontSize="12"
                  fontWeight="700"
                  textAnchor="middle"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                  letterSpacing="0.02em"
                >
                  {bur.label}
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// Render Product Card Visuals based on clinical type
export const ProductImageRender: React.FC<{ type: string; className?: string }> = ({ type, className = '' }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100/80 ${className}`}>
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-radial from-white via-transparent to-slate-200/50" />

      {type === 'ipr-kit' && (
        <svg viewBox="0 0 300 240" className="w-[85%] h-[85%] drop-shadow-xl" fill="none">
          {/* Autoclavable Aluminum Block (Deep Blue / Violet anodized) */}
          <rect x="40" y="70" width="220" height="120" rx="14" fill="#1E1B4B" stroke="#4338CA" strokeWidth="2" />
          <rect x="44" y="74" width="212" height="112" rx="10" fill="#312E81" />
          {/* Hinge & Metallic Edge */}
          <rect x="120" y="66" width="60" height="6" rx="2" fill="#E2E8F0" />
          <rect x="100" y="184" width="100" height="4" rx="2" fill="#0F172A" opacity="0.3" />

          {/* Bur holes and color-coded precision burs */}
          {[0, 1, 2, 3, 4, 5, 6].map((col) => (
            <React.Fragment key={col}>
              {/* Top row */}
              <circle cx={65 + col * 28} cy="100" r="7" fill="#1E1B4B" stroke="#6366F1" strokeWidth="1" />
              <rect x={63 + col * 28} y="55" width="4" height="45" rx="1" fill="#E2E8F0" />
              <circle cx={65 + col * 28} cy="52" r="3.5" fill={col % 2 === 0 ? '#FBBF24' : '#60A5FA'} />
              <rect x={62 + col * 28} y="75" width="6" height="4" rx="1" fill={col === 3 ? '#EF4444' : '#10B981'} />

              {/* Bottom row */}
              <circle cx={65 + col * 28} cy="145" r="7" fill="#1E1B4B" stroke="#6366F1" strokeWidth="1" />
              <rect x={63 + col * 28} y="115" width="4" height="30" rx="1" fill="#CBD5E1" />
              <circle cx={65 + col * 28} cy="112" r="3" fill="#A78BFA" />
            </React.Fragment>
          ))}
          {/* Branding text on box */}
          <text x="150" y="172" fill="#93C5FD" fontSize="9" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">
            ONE SLICE IPR • AUTOCLAVABLE 134°C
          </text>
        </svg>
      )}

      {type === 'diamond-polisher' && (
        <svg viewBox="0 0 300 240" className="w-[85%] h-[85%] drop-shadow-xl" fill="none">
          {/* Polisher tray */}
          <rect x="50" y="110" width="200" height="70" rx="8" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
          <line x1="60" y1="145" x2="240" y2="145" stroke="#E2E8F0" strokeWidth="1" />

          {/* 6pcs spiral wheels and cups */}
          {/* Spiral Disc 1 (Coarse Blue) */}
          <g transform="translate(80, 85)">
            <rect x="-3" y="15" width="6" height="50" rx="1" fill="#94A3B8" />
            <circle cx="0" cy="15" r="22" fill="#2563EB" opacity="0.9" />
            <circle cx="0" cy="15" r="7" fill="#1E3A8A" />
            {/* Spiral fins */}
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <path key={deg} d={`M 0 15 Q ${Math.cos(deg)*18} ${15 + Math.sin(deg)*18} ${Math.cos(deg+0.6)*22} ${15 + Math.sin(deg+0.6)*22}`} stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
            ))}
          </g>

          {/* Spiral Disc 2 (Medium Red) */}
          <g transform="translate(150, 75)">
            <rect x="-3" y="25" width="6" height="50" rx="1" fill="#94A3B8" />
            <circle cx="0" cy="25" r="22" fill="#DC2626" opacity="0.9" />
            <circle cx="0" cy="25" r="7" fill="#7F1D1D" />
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <path key={deg} d={`M 0 25 Q ${Math.cos(deg)*18} ${25 + Math.sin(deg)*18} ${Math.cos(deg+0.6)*22} ${25 + Math.sin(deg+0.6)*22}`} stroke="#F87171" strokeWidth="2.5" strokeLinecap="round" />
            ))}
          </g>

          {/* Spiral Disc 3 (Fine Yellow / High Gloss) */}
          <g transform="translate(220, 85)">
            <rect x="-3" y="15" width="6" height="50" rx="1" fill="#94A3B8" />
            <circle cx="0" cy="15" r="22" fill="#EAB308" opacity="0.95" />
            <circle cx="0" cy="15" r="7" fill="#854D0E" />
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <path key={deg} d={`M 0 15 Q ${Math.cos(deg)*18} ${15 + Math.sin(deg)*18} ${Math.cos(deg+0.6)*22} ${15 + Math.sin(deg+0.6)*22}`} stroke="#FEF08A" strokeWidth="2.5" strokeLinecap="round" />
            ))}
          </g>

          <text x="150" y="165" fill="#475569" fontSize="10" fontWeight="600" textAnchor="middle">
            NATURAL DIAMOND MATRIX · 6PCS
          </text>
        </svg>
      )}

      {type === 'degranulation' && (
        <svg viewBox="0 0 300 240" className="w-[85%] h-[85%] drop-shadow-xl" fill="none">
          {/* Surgical box in titanium blue */}
          <rect x="55" y="70" width="190" height="115" rx="12" fill="#0C4A6E" stroke="#0284C7" strokeWidth="1.5" />
          <rect x="60" y="75" width="180" height="105" rx="8" fill="#075985" />

          {/* 4 titanium degranulation burs with depth stoppers */}
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(${85 + i * 42}, 125)`}>
              {/* Latch shank */}
              <rect x="-3" y="-10" width="6" height="45" rx="1" fill="#CBD5E1" />
              {/* Titanium safety stopper collar */}
              <rect x="-7" y="-22" width="14" height="10" rx="2" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />
              {/* Spherical degranulator head */}
              <circle cx="0" cy="-34 - (i * 2)" r={5 + i * 1.5} fill="#0284C7" stroke="#BAE6FD" strokeWidth="1" />
              {/* Micro blades */}
              <line x1="-3" y1="-34 - (i * 2)" x2="3" y2="-34 - (i * 2)" stroke="#FFFFFF" strokeWidth="1.2" />
            </g>
          ))}
          <text x="150" y="168" fill="#E0F2FE" fontSize="9" fontWeight="700" textAnchor="middle" letterSpacing="0.08em">
            BONE DEBRIDEMENT · TITANIUM STOPPERS
          </text>
        </svg>
      )}

      {type === 'gingivectomy' && (
        <svg viewBox="0 0 300 240" className="w-[85%] h-[85%] drop-shadow-xl" fill="none">
          {/* Ceramic cutter box */}
          <rect x="50" y="75" width="200" height="110" rx="12" fill="#3B0764" stroke="#7E22CE" strokeWidth="1.5" />
          <rect x="55" y="80" width="190" height="100" rx="8" fill="#581C87" />

          {/* 3 white zirconia ceramic trimmers */}
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${100 + i * 50}, 120)`}>
              <rect x="-3" y="0" width="6" height="40" rx="1" fill="#E2E8F0" />
              {/* Gold neck */}
              <rect x="-4" y="-8" width="8" height="8" rx="1" fill="#EAB308" />
              {/* Pure white zirconia sharp head */}
              <path d="M -5 -8 L 0 -48 L 5 -8 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
              <line x1="0" y1="-8" x2="0" y2="-45" stroke="#F1F5F9" strokeWidth="1.2" />
            </g>
          ))}
          <text x="150" y="168" fill="#F3E8FF" fontSize="9" fontWeight="700" textAnchor="middle" letterSpacing="0.08em">
            Y-TZP ZIRCONIA CERAMIC CUTTER
          </text>
        </svg>
      )}

      {type === 'zirconia-prep' && (
        <svg viewBox="0 0 300 240" className="w-[85%] h-[85%] drop-shadow-xl" fill="none">
          {/* Magnetic cassette */}
          <rect x="45" y="70" width="210" height="115" rx="10" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
          {/* Chamfer & shoulder burs with ISO green/red bands */}
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} transform={`translate(${75 + i * 38}, 115)`}>
              <rect x="-2.5" y="0" width="5" height="45" rx="1" fill="#E2E8F0" />
              <rect x="-3.5" y="-8" width="7" height="6" rx="1" fill={i % 2 === 0 ? '#10B981' : '#EF4444'} />
              <path d="M -5 -8 L -4 -42 A 4 4 0 0 1 4 -42 L 5 -8 Z" fill="#94A3B8" stroke="#475569" strokeWidth="0.8" />
            </g>
          ))}
          <text x="150" y="170" fill="#94A3B8" fontSize="9" fontWeight="600" textAnchor="middle">
            PREP KIT · 6° AXIAL TAPER
          </text>
        </svg>
      )}

      {type === 'carbide-set' && (
        <svg viewBox="0 0 300 240" className="w-[85%] h-[85%] drop-shadow-xl" fill="none">
          <rect x="50" y="70" width="200" height="115" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
          {/* Tungsten carbide fluted burs */}
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(${85 + i * 42}, 115)`}>
              <rect x="-3" y="0" width="6" height="45" rx="1" fill="#CBD5E1" />
              {/* Carbide cross-cut flutes */}
              <rect x="-5" y="-38" width="10" height="38" rx="2" fill="#64748B" stroke="#334155" strokeWidth="1" />
              {[-32, -26, -20, -14, -8].map((y) => (
                <line key={y} x1="-5" y1={y} x2="5" y2={y + 3} stroke="#F8FAFC" strokeWidth="1" />
              ))}
            </g>
          ))}
          <text x="150" y="170" fill="#CBD5E1" fontSize="9" fontWeight="600" textAnchor="middle">
            12 & 30 BLADE TUNGSTEN CARBIDE
          </text>
        </svg>
      )}

      {type === 'endo-access' && (
        <svg viewBox="0 0 300 240" className="w-[85%] h-[85%] drop-shadow-xl" fill="none">
          <rect x="50" y="70" width="200" height="115" rx="10" fill="#18181B" stroke="#3F3F46" strokeWidth="1.5" />
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${100 + i * 50}, 115)`}>
              <rect x="-2.5" y="0" width="5" height="50" rx="1" fill="#E2E8F0" />
              <rect x="-3.5" y="-8" width="7" height="6" rx="1" fill="#F59E0B" />
              {/* Safe-end non-cutting rounded tip */}
              <path d="M -4 -8 L -3 -35 A 4 4 0 0 1 3 -35 L 4 -8 Z" fill="#94A3B8" stroke="#475569" strokeWidth="0.8" />
              <circle cx="0" cy="-38" r="3.5" fill="#E2E8F0" stroke="#64748B" strokeWidth="0.8" />
            </g>
          ))}
          <text x="150" y="170" fill="#FBBF24" fontSize="9" fontWeight="600" textAnchor="middle">
            NON-CUTTING SAFETY ACCESS TIP
          </text>
        </svg>
      )}

      {type === 'pediatric' && (
        <svg viewBox="0 0 300 240" className="w-[85%] h-[85%] drop-shadow-xl" fill="none">
          <rect x="50" y="70" width="200" height="115" rx="10" fill="#042F2E" stroke="#0D9488" strokeWidth="1.5" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(${85 + i * 42}, 125)`}>
              {/* Short shank */}
              <rect x="-2.5" y="0" width="5" height="30" rx="1" fill="#CA8A04" />
              <circle cx="0" cy="-15" r="4.5" fill="#14B8A6" stroke="#042F2E" strokeWidth="0.8" />
            </g>
          ))}
          <text x="150" y="170" fill="#5EEAD4" fontSize="9" fontWeight="600" textAnchor="middle">
            PEDIATRIC SHORT-SHANK · VIBRATION-DAMPED
          </text>
        </svg>
      )}
    </div>
  );
};
