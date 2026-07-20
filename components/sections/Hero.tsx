"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BG = ["/assets/hero-bg.png", "/assets/hero-bg.jpg", "/assets/hero-bg.webp"];
const PORTAL_BG = ["/assets/naruto-bg.png", "/assets/naruto-bg.jpg", "/assets/naruto-bg.webp"];

/**
 * 히어로 — 태풍의 눈 포탈 전환:
 * 스크롤하면 화면 중앙에 나선환 링이 나타나고, 링 안쪽(태풍의 눈)이 뚫리면서
 * 그 구멍으로 다음 챕터(Naruto)의 세계가 보인다. 스크롤할수록 구멍이 커져
 * 화면 전체가 다음 섹션으로 바뀐다. (첫 전환에만 사용)
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const bgImgRef = useRef<HTMLImageElement>(null);
  const portalImgRef = useRef<HTMLImageElement>(null);
  const [bgIdx, setBgIdx] = useState(0);
  const [portalIdx, setPortalIdx] = useState(0);

  // 하이드레이션 전에 로딩 실패한 이미지 폴백
  useEffect(() => {
    const img = bgImgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setBgIdx((i) => i + 1);
  }, [bgIdx]);
  useEffect(() => {
    const img = portalImgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setPortalIdx((i) => i + 1);
  }, [portalIdx]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const front = ref.current?.querySelector<HTMLElement>(".hero-front");
      const ring = ref.current?.querySelector<HTMLElement>(".rasengan-ring");
      if (!front || !ring) return;

      const RING_BASE = 1600; // 링 원본 크기 — scale로 줄여 쓰므로 확대 화질 저하 없음
      const hole = { r: 0 };

      // 구멍 반지름(r)에 맞춰 마스크와 링 크기를 동기화
      const apply = () => {
        const r = hole.r;
        const soft = Math.max(r * 0.05, 6);
        const m = `radial-gradient(circle at 50% 50%, transparent ${Math.max(r - soft, 0)}px, black ${r}px)`;
        front.style.webkitMaskImage = m;
        front.style.maskImage = m;
        ring.style.setProperty("--ring-scale", String(Math.max((r * 2.4) / RING_BASE, 0.001)));
      };
      apply();

      const maxR = () => Math.hypot(window.innerWidth, window.innerHeight) / 2 + 100;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "+=170%",
          scrub: 0.4,
          pin: true,
          anticipatePin: 1,
        },
      });
      tl.to(".hero-box-wrap", { scale: 0.92, opacity: 0, duration: 0.4, ease: "power2.in" }, 0.05)
        .to(ring, { opacity: 1, duration: 0.15 }, 0.25)
        // 눈이 뜨인다 — 작은 구멍
        .to(hole, { r: 110, duration: 0.35, ease: "power2.out", onUpdate: apply }, 0.25)
        // 포탈 속 세계가 서서히 다가옴
        .fromTo(".hero-portal", { scale: 1.18 }, { scale: 1, duration: 1.7, ease: "power2.out" }, 0.3)
        // 구멍이 화면을 다 삼킬 때까지 확장
        .to(hole, { r: maxR, duration: 1.5, ease: "power2.in", onUpdate: apply }, 0.75)
        .to(ring, { opacity: 0, duration: 0.2 }, 2.05);
    }, ref);

    // 마우스 패럴랙스
    const onMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      gsap.to(".hero-bg-layer", { x: nx * 34, y: ny * 22, duration: 0.9, ease: "power2.out" });
      gsap.to(".hero-box-wrap", { x: nx * -16, y: ny * -10, duration: 0.9, ease: "power2.out" });
      gsap.to(".hero-particles", { x: nx * 55, y: ny * 38, duration: 1.1, ease: "power2.out" });
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={ref} className="relative h-svh overflow-hidden bg-ink">
      {/* ── 포탈 뒤 세계 (다음 챕터의 미리보기) ── */}
      <div className="hero-portal absolute inset-0">
        {portalIdx < PORTAL_BG.length ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={portalImgRef}
            src={PORTAL_BG[portalIdx]}
            alt=""
            onError={() => setPortalIdx((i) => i + 1)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-b from-[#2a1506] via-[#3a1d08] to-[#170b03]" />
        )}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="display text-[16vw] text-white drop-shadow-[0_8px_40px_rgba(0,0,0,0.5)] md:text-[10rem]">
            Naruto
          </span>
        </div>
      </div>

      {/* ── 앞면 (마스크로 가운데가 뚫리는 레이어) ── */}
      <div className="hero-front absolute inset-0">
        <div className="hero-bg-layer absolute inset-[-6%]">
          {bgIdx < BG.length ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              ref={bgImgRef}
              src={BG[bgIdx]}
              alt=""
              onError={() => setBgIdx((i) => i + 1)}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-b from-[#170b03] via-[#2a1506] to-[#0b0b0e]" />
          )}
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* 파티클 */}
        <div className="hero-particles pointer-events-none absolute inset-0">
          <span className="float-slow absolute left-[12%] top-[22%] h-2 w-3 rounded-full bg-orange-500/60" />
          <span className="float-mid absolute left-[70%] top-[15%] h-2 w-3 rounded-full bg-orange-400/50" />
          <span className="float-fast absolute left-[85%] top-[60%] h-1.5 w-2.5 rounded-full bg-amber-500/50" />
          <span className="float-mid absolute left-[25%] top-[75%] h-1.5 w-2.5 rounded-full bg-orange-300/40" />
        </div>

        {/* 중앙 보더 박스 — 나에 대한 소개 */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="hero-box-wrap pointer-events-auto w-[min(90vw,460px)] border border-white/70 bg-black/30 px-8 py-10 text-center backdrop-blur-[2px]">
            <p className="text-[0.66rem] font-bold tracking-[0.3em] text-white/70">
              MOON DABIN EDITIONS — WINTER &#39;26
            </p>
            <h1 className="display mt-6 text-6xl leading-[0.9] text-white md:text-7xl">
              Moon
              <br />
              Dabin
            </h1>
            <p className="mt-4 text-[0.66rem] font-bold tracking-[0.3em] text-orange-400">
              EST. 2004.01.01
            </p>
            <p className="mt-5 text-sm font-medium leading-relaxed text-white/85">
              A self-introduction in four chapters.
              <br />
              Everything I love, on one page.
            </p>
            <ul className="mx-auto mt-6 max-w-[250px] space-y-1.5 text-left text-[0.72rem] font-bold tracking-[0.2em] text-white/90">
              <li className="flex justify-between"><a href="#naruto" className="hover:text-orange-400">NARUTO</a><span className="text-white/40">I</span></li>
              <li className="flex justify-between"><a href="#movies" className="hover:text-orange-400">CINEMA</a><span className="text-white/40">II</span></li>
              <li className="flex justify-between"><a href="#people" className="hover:text-orange-400">PEOPLE</a><span className="text-white/40">III</span></li>
              <li className="flex justify-between"><a href="#series" className="hover:text-orange-400">SERIES</a><span className="text-white/40">IV</span></li>
            </ul>
            <p className="mt-7 text-[0.66rem] font-bold tracking-[0.18em] text-white/70">
              <a
                href="https://www.ccn.ac.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-orange-400"
              >
                CHRISTIAN COLLEGE OF NURSING
              </a>
            </p>
            <p className="mt-5 animate-pulse text-[0.66rem] font-bold tracking-[0.3em] text-white/60">
              SCROLL TO ENTER ↓
            </p>
          </div>
        </div>
      </div>

      {/* ── 나선환 링 (태풍의 눈 가장자리) ── */}
      <div className="rasengan-ring" />
    </section>
  );
}
