import React from 'react';
import { SagittalConfig, Language } from '../types';
import { Volume2, VolumeX, Wind } from 'lucide-react';

interface SagittalDiagramProps {
  config: SagittalConfig;
  phonemeSymbol: string;
  isVoiced: boolean;
  lang: Language;
}

export const SagittalDiagram: React.FC<SagittalDiagramProps> = ({
  config,
  phonemeSymbol,
  isVoiced,
  lang
}) => {
  // Derive SVG path control coordinates from config
  const { tongueHeight, tongueBackness, lipShape, velumRaised, vocalCordsVibrating, airflowType } = config;

  // Tongue curve dynamic calculation:
  // Base anchor: (150, 240) - tongue root at hyoid bone
  // Back/Dorsum: depends on backness and height
  let dorsumX = 130;
  let dorsumY = 170;
  if (tongueBackness === 'back') {
    dorsumX = 115;
    dorsumY = tongueHeight === 'high' ? 120 : tongueHeight === 'mid' ? 145 : 175;
  } else if (tongueBackness === 'central') {
    dorsumX = 140;
    dorsumY = tongueHeight === 'high' ? 125 : tongueHeight === 'mid' ? 150 : 180;
  } else {
    // front
    dorsumX = 165;
    dorsumY = tongueHeight === 'high' ? 120 : tongueHeight === 'mid' ? 145 : 180;
  }

  // Tongue tip coordinates
  let tipX = 200;
  let tipY = 175;

  if (phonemeSymbol === 'θ' || phonemeSymbol === 'ð') {
    // Tongue tip between teeth
    tipX = 230;
    tipY = 162;
  } else if (['t', 'd', 's', 'z', 'n', 'l'].includes(phonemeSymbol)) {
    // Tongue tip at alveolar ridge
    tipX = 208;
    tipY = 138;
  } else if (['ʃ', 'ʒ', 'tʃ', 'dʒ', 'r'].includes(phonemeSymbol)) {
    // Postalveolar / curled
    tipX = 190;
    tipY = 135;
  } else if (['k', 'ɡ', 'ŋ'].includes(phonemeSymbol)) {
    // Velar contact
    tipX = 165;
    tipY = 180;
    dorsumX = 125;
    dorsumY = 122;
  } else if (tongueHeight === 'low') {
    tipX = 205;
    tipY = 185;
  } else if (tongueHeight === 'high' && tongueBackness === 'front') {
    tipX = 205;
    tipY = 145;
  }

  // Lip positions
  let upperLipY = 148;
  let lowerLipY = 178;
  let lipOpening = 30;

  if (lipShape === 'closed' || ['p', 'b', 'm'].includes(phonemeSymbol)) {
    upperLipY = 160;
    lowerLipY = 162;
    lipOpening = 2;
  } else if (lipShape === 'labiodental' || ['f', 'v'].includes(phonemeSymbol)) {
    upperLipY = 150;
    lowerLipY = 158;
    lipOpening = 8;
  } else if (lipShape === 'rounded') {
    upperLipY = 152;
    lowerLipY = 170;
    lipOpening = 18;
  } else if (lipShape === 'spread') {
    upperLipY = 148;
    lowerLipY = 174;
    lipOpening = 26;
  }

  const labels = {
    hardPalate: lang === 'vi' ? 'Ngạc cứng' : 'Hard Palate',
    alveolar: lang === 'vi' ? 'Nướu răng trên' : 'Alveolar Ridge',
    velum: lang === 'vi' ? (velumRaised ? 'Ngạc mềm (Đóng mũi)' : 'Ngạc mềm (Mở mũi)') : (velumRaised ? 'Velum (Oral)' : 'Velum (Nasal)'),
    tongue: lang === 'vi' ? 'Lưỡi' : 'Tongue',
    lips: lang === 'vi' ? 'Môi' : 'Lips',
    vocalCords: lang === 'vi' ? 'Dây thanh' : 'Vocal Cords',
    airflow: lang === 'vi' ? 'Luồng hơi' : 'Airflow'
  };

  return (
    <div className="flex flex-col items-center bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between w-full mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {lang === 'vi' ? 'Mặt cắt cấu âm giải phẫu' : 'Sagittal Vocal Tract'}
          </span>
          <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
            /{phonemeSymbol}/
          </span>
        </div>

        {/* Voicing badge */}
        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
          isVoiced
            ? 'bg-amber-50 text-amber-900 border-amber-300'
            : 'bg-sky-50 text-sky-900 border-sky-300'
        }`}>
          {isVoiced ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              <span>{lang === 'vi' ? 'Hữu thanh (Rung)' : 'Voiced (Vibrating)'}</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-sky-600" />
              <span>{lang === 'vi' ? 'Vô thanh (Không rung)' : 'Voiceless'}</span>
            </>
          )}
        </div>
      </div>

      {/* SVG Sagittal Visualizer */}
      <div className="relative w-full max-w-sm aspect-4/3 bg-white rounded-lg border border-slate-200 overflow-hidden shadow-inner flex items-center justify-center">
        <svg
          viewBox="0 0 300 280"
          className="w-full h-full select-none"
          role="img"
          aria-label={`Sagittal diagram for phoneme /${phonemeSymbol}/`}
        >
          <defs>
            {/* Soft pink gradient for tongue */}
            <linearGradient id="tongueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#e11d48" stopOpacity="0.95" />
            </linearGradient>

            {/* Vocal tract bone fill */}
            <linearGradient id="boneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            {/* Airflow glow */}
            <filter id="airGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 1. Upper skull & nasal cavity profile */}
          <path
            d="M 60,30 Q 150,20 230,40 Q 260,80 250,120 L 235,135 Q 230,140 226,145"
            fill="none"
            stroke="#64748b"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* 2. Nasal cavity interior divider */}
          <path
            d="M 120,60 Q 160,55 210,65 Q 230,75 220,105 L 140,100 Z"
            fill="#f1f5f9"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />

          {/* 3. Hard palate & upper jaw (fixed bone) */}
          <path
            d="M 100,120 Q 150,118 195,124 Q 212,126 218,138 L 222,148 L 210,148 Q 205,134 185,132 Q 140,128 100,128 Z"
            fill="url(#boneGrad)"
            stroke="#475569"
            strokeWidth="1.5"
          />

          {/* Upper teeth */}
          <rect x="216" y="146" width="6" height="12" rx="1.5" fill="#f8fafc" stroke="#64748b" strokeWidth="1.2" />

          {/* 4. Velum (Soft palate) - dynamic based on oral vs nasal */}
          {velumRaised ? (
            // Raised: seals against the back pharyngeal wall (Oral)
            <path
              d="M 100,120 Q 80,126 65,132 Q 62,136 68,140 Q 85,132 100,128 Z"
              fill="#fb7185"
              stroke="#e11d48"
              strokeWidth="1.5"
            />
          ) : (
            // Lowered: hangs down into oral cavity, opening nasal passage (Nasal /m/, /n/, /ŋ/)
            <path
              d="M 100,120 Q 88,142 80,165 Q 74,166 76,158 Q 85,138 100,128 Z"
              fill="#fb7185"
              stroke="#e11d48"
              strokeWidth="1.5"
            />
          )}

          {/* Pharyngeal back wall */}
          <path
            d="M 65,95 Q 60,140 60,200 L 60,250"
            fill="none"
            stroke="#64748b"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* 5. Lower jaw & chin outline */}
          <path
            d="M 224,195 Q 240,210 230,230 Q 210,255 170,260 L 120,260"
            fill="none"
            stroke="#64748b"
            strokeWidth="2.5"
          />

          {/* Lower teeth */}
          <rect x="214" y={lowerLipY - 14} width="6" height="12" rx="1.5" fill="#f8fafc" stroke="#64748b" strokeWidth="1.2" />

          {/* Upper Lip */}
          <path
            d={`M 228,144 Q 242,${upperLipY - 4} 244,${upperLipY} Q 240,${upperLipY + 6} 228,${upperLipY + 6}`}
            fill="#fda4af"
            stroke="#e11d48"
            strokeWidth="1.5"
          />

          {/* Lower Lip */}
          <path
            d={`M 226,${lowerLipY - 2} Q 242,${lowerLipY - 4} 242,${lowerLipY + 4} Q 236,${lowerLipY + 12} 224,${lowerLipY + 14}`}
            fill="#fda4af"
            stroke="#e11d48"
            strokeWidth="1.5"
          />

          {/* 6. Dynamic Tongue */}
          {/* Base of mouth & tongue body */}
          <path
            d={`M 75,225
               C 85,210 95,${dorsumY + 20} ${dorsumX},${dorsumY}
               C ${dorsumX + 25},${dorsumY - 10} ${tipX - 15},${tipY - 5} ${tipX},${tipY}
               C ${tipX - 5},${tipY + 18} 190,200 160,215
               C 130,230 95,240 75,225 Z`}
            fill="url(#tongueGrad)"
            stroke="#be123c"
            strokeWidth="2"
            filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
          />

          {/* 7. Vocal Cords / Larynx at (68, 235) */}
          <g transform="translate(62, 230)">
            <ellipse cx="6" cy="6" rx="5" ry="3" fill="#f43f5e" stroke="#9f1239" strokeWidth="1.5" />
            {vocalCordsVibrating && (
              <>
                <circle cx="6" cy="6" r="8" fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.8" className="animate-ping" />
                <path d="M 1,6 Q 6,1 11,6 Q 6,11 1,6" fill="none" stroke="#d97706" strokeWidth="1.5" />
              </>
            )}
          </g>

          {/* 8. Airflow visualization */}
          {airflowType === 'nasal' ? (
            // Airflow through nose
            <g filter="url(#airGlow)">
              <path
                d="M 68,220 Q 64,150 75,130 Q 95,90 150,85 Q 210,80 245,115"
                fill="none"
                stroke="#0284c7"
                strokeWidth="3.5"
                strokeDasharray="6 4"
                strokeLinecap="round"
                className="animate-pulse"
              />
              <polygon points="248,115 240,110 242,120" fill="#0284c7" />
            </g>
          ) : airflowType === 'oral_burst' ? (
            // Burst puff at constriction
            <g filter="url(#airGlow)">
              <path
                d={`M 68,220 Q 90,170 ${tipX - 25},${tipY + 10}`}
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="3"
                strokeDasharray="5 3"
              />
              {/* Explosion sparks */}
              <circle cx={tipX + 8} cy={tipY - 4} r="5" fill="#f59e0b" opacity="0.8" className="animate-ping" />
              <line x1={tipX} y1={tipY} x2={tipX + 18} y2={tipY - 8} stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
              <line x1={tipX} y1={tipY} x2={tipX + 22} y2={tipY + 6} stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
            </g>
          ) : (
            // Continuous oral friction/glide
            <g filter="url(#airGlow)">
              <path
                d={`M 68,220 Q 80,180 ${dorsumX - 10},${dorsumY - 10} Q ${tipX - 10},${tipY - 10} 248,162`}
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="3.5"
                strokeDasharray="6 3"
                strokeLinecap="round"
                className="animate-pulse"
              />
              <polygon points="252,162 244,156 245,168" fill="#0ea5e9" />
            </g>
          )}

          {/* Anatomical Guide Pointer Callouts */}
          {/* Alveolar Ridge pointer */}
          <line x1="202" y1="126" x2="175" y2="85" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
          <text x="175" y="80" textAnchor="end" fontSize="9" fill="#475569" fontWeight="600">
            {labels.alveolar}
          </text>

          {/* Velum pointer */}
          <line x1="90" y1="130" x2="60" y2="85" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
          <text x="60" y="80" textAnchor="start" fontSize="9" fill="#475569" fontWeight="600">
            {labels.velum}
          </text>

          {/* Tongue Tip indicator */}
          <circle cx={tipX} cy={tipY} r="3" fill="#ffffff" stroke="#be123c" strokeWidth="1.5" />
          <text x={tipX + 8} y={tipY + 12} fontSize="9" fill="#9f1239" fontWeight="700">
            {lang === 'vi' ? 'Đầu lưỡi' : 'Tip'}
          </text>

          {/* Vocal Cords pointer */}
          <line x1="68" y1="235" x2="35" y2="255" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
          <text x="35" y="268" textAnchor="start" fontSize="9" fill="#475569" fontWeight="600">
            {labels.vocalCords} ({isVoiced ? (lang === 'vi' ? 'Rung' : 'Voiced') : (lang === 'vi' ? 'Tĩnh' : 'Silent')})
          </text>
        </svg>
      </div>

      {/* Legend and guidance summary */}
      <div className="grid grid-cols-2 gap-2 w-full mt-3 text-xs text-slate-600">
        <div className="flex items-center gap-1.5 bg-white p-1.5 rounded border border-slate-200">
          <Wind className="w-3.5 h-3.5 text-sky-500 shrink-0" />
          <span className="truncate">
            <strong className="text-slate-700">{lang === 'vi' ? 'Hơi:' : 'Airflow:'}</strong>{' '}
            {airflowType === 'nasal'
              ? (lang === 'vi' ? 'Qua mũi' : 'Nasal')
              : airflowType === 'oral_burst'
              ? (lang === 'vi' ? 'Bật nổ dứt khoát' : 'Plosive burst')
              : (lang === 'vi' ? 'Qua miệng liên tục' : 'Continuous oral')}
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-white p-1.5 rounded border border-slate-200">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0 inline-block" />
          <span className="truncate">
            <strong className="text-slate-700">{lang === 'vi' ? 'Môi:' : 'Lips:'}</strong>{' '}
            {lipShape === 'closed'
              ? (lang === 'vi' ? 'Ngậm mím' : 'Closed')
              : lipShape === 'labiodental'
              ? (lang === 'vi' ? 'Răng cắn môi' : 'Labiodental')
              : lipShape === 'rounded'
              ? (lang === 'vi' ? 'Tròn môi' : 'Rounded')
              : (lang === 'vi' ? 'Bè mỉm cười' : 'Spread')}
          </span>
        </div>
      </div>
    </div>
  );
};
