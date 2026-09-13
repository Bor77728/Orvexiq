import React from 'react';

interface OrvexiqLogoProps {
  variant?: 'full' | 'horizontal' | 'mark' | 'vertical';
  showSubtitle?: boolean;
  className?: string;
  markClassName?: string;
  textClassName?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
}

/**
 * Pixel-accurate vector representation of the official ORVEXIQ logo.
 * Features the signature 3D interwoven ribbon emblem (O-X monogram)
 * with purple-to-cyan cyber gradient and the custom geometric wordmark.
 */
export const OrvexiqEmblem: React.FC<{ className?: string }> = ({
  className = 'w-9 h-9',
}) => {
  return (
    <svg
      viewBox="0 0 160 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ORVEXIQ Ribbon Emblem"
    >
      <defs>
        {/* Main purple to cyan ribbon gradient */}
        <linearGradient id="orvex-ribbon-primary" x1="15%" y1="90%" x2="85%" y2="10%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="25%" stopColor="#7C3AED" />
          <stop offset="55%" stopColor="#0099FF" />
          <stop offset="85%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>

        {/* Purple wing / back ribbon gradient */}
        <linearGradient id="orvex-wing-purple" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6D28D9" />
          <stop offset="40%" stopColor="#7C3AED" />
          <stop offset="80%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>

        {/* Cyan wing / front crossing ribbon gradient */}
        <linearGradient id="orvex-wing-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="50%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#00B4D8" />
        </linearGradient>

        {/* Fold depth shadow */}
        <radialGradient id="orvex-fold-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#05070A" stopOpacity="0.75" />
          <stop offset="70%" stopColor="#05070A" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#05070A" stopOpacity="0" />
        </radialGradient>

        {/* Subtle glow filter */}
        <filter id="orvex-emblem-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#7C3AED" floodOpacity="0.25" />
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#00D4FF" floodOpacity="0.15" />
        </filter>
      </defs>

      <g filter="url(#orvex-emblem-glow)">
        {/* BACK LAYER: Upper-right wing extending behind */}
        <path
          d="M 88 66 L 136 28 C 142 23 148 23 151 28 C 153 32 151 38 145 43 L 105 76 Z"
          fill="url(#orvex-wing-purple)"
        />

        {/* BOTTOM / LEFT CIRCULAR LOOP (The "O" loop) */}
        {/* Smooth outer loop flowing from bottom-right around to top */}
        <path
          d="M 74 118 
             C 44 118 20 98 20 68 
             C 20 38 44 18 76 18 
             C 96 18 114 28 126 44 
             L 108 58 
             C 100 46 88 38 74 38 
             C 55 38 40 51 40 68 
             C 40 85 55 98 74 98 
             C 86 98 98 92 108 82 
             L 126 96 
             C 112 110 94 118 74 118 Z"
          fill="url(#orvex-ribbon-primary)"
        />

        {/* CROSSING FOLD / 3D INNER CREASE SHADOW */}
        <ellipse
          cx="88"
          cy="70"
          rx="18"
          ry="12"
          transform="rotate(-25 88 70)"
          fill="url(#orvex-fold-shadow)"
        />

        {/* FRONT FOLD: Cyan ribbon sweeping across and extending into lower-right wing */}
        <path
          d="M 68 20 
             C 86 20 102 28 114 42 
             L 76 96 
             C 74 99 69 100 66 98 
             L 52 86 
             C 50 84 50 80 53 76 
             L 86 32 
             C 80 24 74 20 68 20 Z"
          fill="url(#orvex-wing-cyan)"
          opacity="0.92"
        />

        {/* LOWER-RIGHT WING: Crossing diagonal stem extending down-right */}
        <path
          d="M 96 74 L 140 114 C 146 119 148 125 144 128 C 140 131 134 130 128 125 L 82 86 Z"
          fill="url(#orvex-wing-cyan)"
        />

        {/* Center crisp highlight facet */}
        <path
          d="M 104 62 L 138 28 L 126 28 L 92 62 Z"
          fill="#FFFFFF"
          opacity="0.18"
        />
        <path
          d="M 94 82 L 138 122 L 128 122 L 84 82 Z"
          fill="#FFFFFF"
          opacity="0.15"
        />
      </g>
    </svg>
  );
};

/**
 * Geometric SVG Wordmark rendering "orvexiq"
 * - "orvex" in pristine geometric white
 * - "i" in bright cyan
 * - "q" in purple-to-cyan gradient with iconic speech-bubble tail
 */
export const OrvexiqWordmark: React.FC<{
  className?: string;
  showSubtitle?: boolean;
}> = ({ className = 'h-7', showSubtitle = false }) => {
  return (
    <svg
      viewBox={showSubtitle ? "0 0 540 120" : "0 0 540 85"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ORVEXIQ Logo Wordmark"
    >
      <defs>
        <linearGradient id="orvex-iq-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="40%" stopColor="#38BDF8" />
          <stop offset="70%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>

        <linearGradient id="orvex-sub-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>
      </defs>

      <g>
        {/* Letter 'o' */}
        <path
          d="M 50 18 C 28 18 12 32 12 52 C 12 72 28 86 50 86 C 72 86 88 72 88 52 C 88 32 72 18 50 18 Z M 50 33 C 62 33 71 41 71 52 C 71 63 62 71 50 71 C 38 71 29 63 29 52 C 29 41 38 33 50 33 Z"
          fill="#FFFFFF"
        />

        {/* Letter 'r' */}
        <path
          d="M 104 22 L 120 22 L 120 35 C 126 25 137 20 148 20 C 153 20 157 21 160 23 L 154 38 C 151 36 147 35 143 35 C 132 35 120 44 120 58 L 120 84 L 104 84 Z"
          fill="#FFFFFF"
        />

        {/* Letter 'v' */}
        <path
          d="M 166 22 L 183 22 L 198 65 L 213 22 L 230 22 L 207 84 L 189 84 Z"
          fill="#FFFFFF"
        />

        {/* Letter 'e' */}
        <path
          d="M 276 18 C 255 18 240 32 240 52 C 240 72 255 86 277 86 C 293 86 306 78 312 66 L 297 58 C 293 65 285 71 276 71 C 265 71 257 64 256 53 L 314 53 C 314 51 314 48 314 45 C 314 29 299 18 276 18 Z M 256 42 C 258 35 266 31 276 31 C 286 31 294 35 296 42 Z"
          fill="#FFFFFF"
        />

        {/* Letter 'x' */}
        <path
          d="M 324 22 L 343 22 L 358 48 L 373 22 L 392 22 L 369 54 L 394 84 L 375 84 L 358 59 L 341 84 L 322 84 L 347 54 Z"
          fill="#FFFFFF"
        />

        {/* Letter 'i' */}
        {/* Dot */}
        <rect x="406" y="20" width="14" height="14" rx="3" fill="#00D4FF" />
        {/* Stem */}
        <rect x="406" y="40" width="14" height="44" rx="3" fill="#00D4FF" />

        {/* Letter 'q' (Stylized circle with speech-bubble tail) */}
        {/* Bowl matching 'o' */}
        <path
          d="M 464 22 C 445 22 432 35 432 53 C 432 71 445 84 464 84 C 476 84 486 77 491 68 L 491 84 L 505 84 L 505 22 L 491 22 L 491 38 C 486 28 476 22 464 22 Z M 468 36 C 479 36 491 43 491 53 C 491 63 479 70 468 70 C 457 70 447 63 447 53 C 447 43 457 36 468 36 Z"
          fill="url(#orvex-iq-gradient)"
        />
        {/* Speech/terminal tail on 'q' stem */}
        <path
          d="M 505 76 L 505 98 C 505 106 498 110 488 108 L 476 105 L 480 95 L 489 97 C 492 98 493 96 493 92 L 493 84 Z"
          fill="url(#orvex-iq-gradient)"
        />
      </g>

      {/* Subtitle: WEB2 & WEB3 DEVELOPMENT | MARKETING AGENCY */}
      {showSubtitle && (
        <text
          x="270"
          y="114"
          textAnchor="middle"
          fill="url(#orvex-sub-gradient)"
          fontSize="15"
          fontWeight="700"
          letterSpacing="4.5"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          WEB2 &amp; WEB3 DEVELOPMENT | MARKETING AGENCY
        </text>
      )}
    </svg>
  );
};

/**
 * Full ORVEXIQ Brand Logo Component
 * Supports multiple responsive variants and sizes
 */
export const OrvexiqLogo: React.FC<OrvexiqLogoProps> = ({
  variant = 'horizontal',
  showSubtitle = false,
  className = '',
  markClassName = '',
  textClassName = '',
  size = 'md',
}) => {
  // Size presets
  const sizeMap = {
    sm: { emblem: 'w-7 h-7', wordmark: 'h-5', gap: 'gap-2' },
    md: { emblem: 'w-8 h-8 sm:w-9 sm:h-9', wordmark: 'h-6 sm:h-7', gap: 'gap-2.5' },
    lg: { emblem: 'w-11 h-11 sm:w-12 sm:h-12', wordmark: 'h-8 sm:h-9', gap: 'gap-3' },
    xl: { emblem: 'w-20 h-20 sm:w-24 sm:h-24', wordmark: 'h-12 sm:h-14', gap: 'gap-5' },
    custom: { emblem: markClassName, wordmark: textClassName, gap: 'gap-2.5' },
  };

  const selectedSize = sizeMap[size];

  // Mark-only variant
  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <OrvexiqEmblem className={markClassName || selectedSize.emblem} />
      </div>
    );
  }

  // Vertical stacked variant (like the exact uploaded art composition!)
  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center ${selectedSize.gap} ${className}`}>
        <OrvexiqEmblem className={markClassName || 'w-24 h-24 sm:w-32 sm:h-32'} />
        <OrvexiqWordmark
          className={textClassName || 'h-10 sm:h-12 w-auto max-w-full'}
          showSubtitle={showSubtitle}
        />
      </div>
    );
  }

  // Default horizontal variant
  return (
    <div className={`inline-flex items-center ${selectedSize.gap} ${className}`}>
      <OrvexiqEmblem className={markClassName || selectedSize.emblem} />
      <OrvexiqWordmark
        className={textClassName || selectedSize.wordmark}
        showSubtitle={showSubtitle}
      />
    </div>
  );
};

export default OrvexiqLogo;
