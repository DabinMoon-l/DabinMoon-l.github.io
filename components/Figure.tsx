"use client";

import { useEffect, useRef, useState } from "react";

/**
 * 이미지 자리 컴포넌트.
 * public/assets/{name}.png (또는 .jpg/.webp)를 넣으면 자동으로 표시되고,
 * 없으면 어떤 파일을 넣어야 하는지 알려주는 플레이스홀더가 뜬다.
 */
export default function Figure({
  name,
  label,
  ratio = "4 / 5",
  className = "",
}: {
  name: string;
  label: string;
  ratio?: string;
  className?: string;
}) {
  const candidates = [`/assets/${name}.png`, `/assets/${name}.jpg`, `/assets/${name}.webp`];
  const [idx, setIdx] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  // 하이드레이션 전에 이미 로딩 실패한 경우 onError가 안 불리므로 직접 확인
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setIdx((i) => i + 1);
    }
  }, [idx]);

  return (
    <div className={`figure ${className}`} style={{ aspectRatio: ratio }}>
      {idx < candidates.length ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={candidates[idx]}
          alt={label}
          onError={() => setIdx((i) => i + 1)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="placeholder">
          <span>{label}</span>
          <code>add image → public/assets/{name}.png</code>
        </div>
      )}
    </div>
  );
}
