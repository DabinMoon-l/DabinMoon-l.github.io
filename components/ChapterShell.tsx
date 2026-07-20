"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * 레퍼런스(Shopify Editions)의 챕터 구조:
 * - 풀스크린 배경이 sticky로 고정
 * - 진입 시 거대한 흰색 타이틀
 * - 스크롤하면 배경에 검은 오버레이가 깔리고(.chapter-overlay, SmoothScroll에서 제어)
 *   그 위로 흰 글씨 + 상세 블록이 올라온다
 * 배경 이미지: public/assets/{bg}.png|jpg|webp — 없으면 fallback 그라데이션
 */
export default function ChapterShell({
  id,
  bg,
  tag,
  title,
  fallback,
  decor,
  children,
}: {
  id: string;
  bg: string;
  tag: string;
  title: ReactNode;
  fallback: string;
  decor?: ReactNode;
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
        {/* 배경 안에서 움직이는 에셋 (수리검/쿠나이/나뭇잎 등) */}
        {decor}
        {/* 스크롤하면 짙어지는 오버레이 */}
        <div className="chapter-overlay absolute inset-0 bg-black opacity-0" />
      </div>

      {/* 배경 위로 올라오는 콘텐츠 */}
      <div className="relative z-10 -mt-[100svh]">
        {/* 챕터 타이틀 화면 (레퍼런스의 Marketing 같은 거대 타이포) */}
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
