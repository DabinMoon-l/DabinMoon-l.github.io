"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * 배경 이미지 슬롯 — public/assets/{name}.png|jpg|webp 를 순서대로 시도하고,
 * 전부 없으면 fallback을 렌더링한다. (절대배치 cover)
 */
export default function BgImage({
  name,
  fallback,
  className = "",
}: {
  name: string;
  fallback: ReactNode;
  className?: string;
}) {
  const candidates = [`/assets/${name}.png`, `/assets/${name}.jpg`, `/assets/${name}.webp`];
  const [idx, setIdx] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setIdx((i) => i + 1);
  }, [idx]);

  if (idx >= candidates.length) return <>{fallback}</>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={candidates[idx]}
      alt=""
      onError={() => setIdx((i) => i + 1)}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}
