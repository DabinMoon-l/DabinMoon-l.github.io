/**
 * 나루토 컨셉 장식 SVG 모음 (직접 그린 오리지널 — 저작권 문제 없음).
 * 섹션에 뿌려서 레퍼런스의 콜라주 조각 느낌을 낸다.
 * data-float 래퍼와 함께 쓰면 스크롤 드리프트가 걸린다.
 */

export function Shuriken({ size = 80, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`spin-slow ${className}`}
      aria-hidden
    >
      <path
        d="M50 0 L58 42 L100 50 L58 58 L50 100 L42 58 L0 50 L42 42 Z"
        fill="#232838"
        stroke="#465066"
        strokeWidth="2"
      />
      <circle cx="50" cy="50" r="7" fill="#0b0b0e" stroke="#465066" strokeWidth="2" />
    </svg>
  );
}

export function Kunai({ size = 90, className = "" }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 60 160" width={size * 0.375} height={size} className={className} aria-hidden>
      <path d="M30 0 L48 62 L30 80 L12 62 Z" fill="#2a3040" stroke="#465066" strokeWidth="2" />
      <rect x="24" y="80" width="12" height="42" rx="5" fill="#1c2130" stroke="#465066" strokeWidth="2" />
      <circle cx="30" cy="140" r="13" fill="none" stroke="#465066" strokeWidth="5" />
    </svg>
  );
}

export function Leaf({ size = 46, className = "" }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} aria-hidden>
      <path
        d="M50 8 C82 24 90 60 50 92 C10 60 18 24 50 8 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M50 20 C56 44 44 68 50 86"
        fill="none"
        stroke="rgba(0,0,0,0.35)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function InkStroke({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 120" className={className} preserveAspectRatio="none" aria-hidden>
      <path
        d="M8 70 C120 28 210 96 320 58 C424 24 522 82 592 46 L586 76 C478 110 378 58 298 90 C198 126 92 76 12 98 Z"
        fill="currentColor"
      />
    </svg>
  );
}
