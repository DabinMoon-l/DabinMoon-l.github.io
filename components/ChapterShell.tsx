"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * 챕터 구조 (레퍼런스 방식):
 * - 풀스크린 배경 sticky 고정 + 진입 시 거대 타이틀
 * - 스크롤하면 오버레이가 짙어지고 콘텐츠가 배경 위로 올라옴
 * - 챕터 끝에서는 배경이 흑백으로 바래고(SmoothScroll), 다음 챕터가
 *   찢어진 종이 가장자리(torn)로 밀고 들어온다
 */
export default function ChapterShell({
  id,
  bg,
  tag,
  title,
  fallback,
  decor,
  torn = true,
  children,
}: {
  id: string;
  bg: string;
  tag: string;
  title: ReactNode;
  fallback: string;
  decor?: ReactNode;
  torn?: boolean;
  children: ReactNode;
}) {
  const candidates = [`/assets/${bg}.png`, `/assets/${bg}.jpg`, `/assets/${bg}.webp`];
  const [idx, setIdx] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setIdx((i) => i + 1);
  }, [idx]);

  return (
    <section id={id} className="chapter relative">
      {/* 찢어진 종이 가장자리 — 이전 챕터를 덮으며 진입 */}
      {torn && (
        <svg
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          className="pointer-events-none absolute -top-14 left-0 z-30 h-16 w-full"
          aria-hidden
        >
          <path
            d="M0 70 L0 34 L48 41 L96 22 L150 38 L210 15 L280 36 L340 19 L420 40 L500 18 L560 33 L640 12 L720 35 L800 16 L870 38 L950 20 L1030 39 L1110 14 L1190 34 L1270 17 L1350 36 L1440 24 L1440 70 Z"
            fill="#0b0b0e"
          />
        </svg>
      )}

      {/* 고정 배경 레이어 */}
      <div className="sticky top-0 z-0 h-svh overflow-hidden">
        <div className="chapter-bg absolute inset-0">
          {idx < candidates.length ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              ref={imgRef}
              src={candidates[idx]}
              alt=""
              onError={() => setIdx((i) => i + 1)}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className={`h-full w-full ${fallback}`} />
          )}
        </div>
        {decor}
        <div className="chapter-overlay absolute inset-0 bg-black opacity-0" />
      </div>

      {/* 배경 위로 올라오는 콘텐츠 */}
      <div className="relative z-10 -mt-[100svh]">
        <div className="flex h-svh flex-col items-center justify-center px-6 text-center">
          <p className="chapter-tag" data-reveal>
            {tag}
          </p>
          <h2 className="chapter-title display mt-6 text-[16vw] leading-none text-white drop-shadow-[0_8px_40px_rgba(0,0,0,0.5)] md:text-[10rem]">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
