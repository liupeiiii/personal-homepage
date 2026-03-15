interface YoyoSVGProps {
  size?: number;
  opacity?: number;
}

/** 柚子简笔画 — 线条风格狸花猫，viewBox 100×100 正方形 */
export default function YoyoSVG({ size = 80, opacity = 1 }: YoyoSVGProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      stroke="#111"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ opacity, display: 'block' }}
    >
      {/* ── Body (ellipse) ── */}
      <ellipse cx="50" cy="79" rx="26" ry="18" />

      {/* ── Tail — right side, curls upward ── */}
      <path d="M 74,76 C 94,72 96,54 78,48" />

      {/* ── Head (circle) ── */}
      <circle cx="50" cy="37" r="21" />

      {/* ── Left ear (outer triangle) ── */}
      <path d="M 31,31 L 20,10 L 43,20 Z" />
      {/* Left inner ear */}
      <path d="M 32,29 L 24,13 L 41,21 Z" strokeWidth="0.9" />

      {/* ── Right ear (outer triangle) ── */}
      <path d="M 57,20 L 80,10 L 69,31 Z" />
      {/* Right inner ear */}
      <path d="M 59,21 L 76,13 L 68,29 Z" strokeWidth="0.9" />

      {/* ── Eyes — sleepy crescent arcs ── */}
      <path d="M 34,35 Q 39,29 45,35" />
      <path d="M 55,35 Q 61,29 66,35" />

      {/* ── Nose — small inverted triangle ── */}
      <path d="M 47,42 L 53,42 L 50,46 Z" />

      {/* ── Mouth — W shape ── */}
      <path d="M 43,48 Q 47,53 50,50 Q 53,53 57,48" />

      {/* ── Whiskers left ── */}
      <line x1="40" y1="41" x2="13" y2="37" strokeWidth="1" />
      <line x1="40" y1="44" x2="13" y2="44" strokeWidth="1" />
      <line x1="40" y1="47" x2="13" y2="51" strokeWidth="1" />

      {/* ── Whiskers right ── */}
      <line x1="60" y1="41" x2="87" y2="37" strokeWidth="1" />
      <line x1="60" y1="44" x2="87" y2="44" strokeWidth="1" />
      <line x1="60" y1="47" x2="87" y2="51" strokeWidth="1" />

      {/* ── Head stripe ── */}
      <path d="M 44,22 Q 50,17 56,22" strokeWidth="1" />

      {/* ── Body stripes (tabby) ── */}
      <path d="M 34,73 Q 40,67 46,73" strokeWidth="1" />
      <path d="M 54,77 Q 60,71 66,77" strokeWidth="1" />
    </svg>
  );
}
