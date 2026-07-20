"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BG_CANDIDATES = ["/assets/hero-bg.png", "/assets/hero-bg.jpg", "/assets/hero-bg.webp"];

/**
 * 히어로 — 레퍼런스(Shopify Editions) 스타일:
 * 풀스크린 아트워크 + 중앙 보더 박스 + 마우스 패럴랙스.
 * 스크롤하면 나선환(라센간)이 화면을 삼키고 그 안으로 빨려 들어가며 본문이 펼쳐진다.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [bgIdx, setBgIdx] = useState(0);

  // 하이드레이션 전에 로딩 실패한 배경 이미지 폴백
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setBgIdx((i) => i + 1);
  }, [bgIdx]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 나선환 흡입 시퀀스 (스크롤 스크럽 + 핀)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "+=160%",
          scrub: 0.4,
          pin: true,
          anticipatePin: 1,
        },
      });
      tl.to(".hero-bg-layer", { scale: 1.25, duration: 2.4, ease: "none" }, 0)
        .to(".rasengan-wrap", { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }, 0.15)
        .to(".hero-box", { opacity: 0, scale: 0.88, duration: 0.5 }, 0.55)
        .to(".rasengan-wrap", { scale: 38, duration: 1.4, ease: "power3.in" }, 0.7)
        .to(".hero-flash", { opacity: 1, duration: 0.3 }, 1.95)
        .to(".rasengan-wrap", { opacity: 0, duration: 0.3 }, 2.25)
        .to(".hero-flash", { opacity: 0, duration: 0.35 }, 2.3);
    }, ref);

    // 마우스 패럴랙스 — 커서를 따라 레이어가 미세하게 따라온다
    const onMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      gsap.to(".hero-bg-layer", { x: nx * 34, y: ny * 22, duration: 0.9, ease: "power2.out" });
      gsap.to(".hero-box", { x: nx * -16, y: ny * -10, duration: 0.9, ease: "power2.out" });
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
      {/* 풀스크린 배경 아트워크 (hero-bg 이미지를 넣으면 표시) */}
      <div className="hero-bg-layer absolute inset-[-6%]">
        {bgIdx < BG_CANDIDATES.length ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imgRef}
            src={BG_CANDIDATES[bgIdx]}
            alt=""
            onError={() => setBgIdx((i) => i + 1)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-[#170b03] via-[#3a1d08] to-[#0b0b0e]">
            <span className="display select-none text-[17vw] text-orange-500/10">Naruto</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* 떠다니는 파티클 (마우스 반응) */}
      <div className="hero-particles pointer-events-none absolute inset-0">
        <span className="float-slow absolute left-[12%] top-[22%] h-2 w-3 rounded-full bg-orange-500/60" />
        <span className="float-mid absolute left-[70%] top-[15%] h-2 w-3 rounded-full bg-orange-400/50" />
        <span className="float-fast absolute left-[85%] top-[60%] h-1.5 w-2.5 rounded-full bg-amber-500/50" />
        <span className="float-mid absolute left-[25%] top-[75%] h-1.5 w-2.5 rounded-full bg-orange-300/40" />
        <span className="float-fast absolute left-[45%] top-[35%] h-1 w-2 rounded-full bg-amber-300/40" />
      </div>

      {/* 중앙 보더 박스 (레퍼런스의 The Renaissance Edition 박스) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="hero-box pointer-events-auto w-[min(90vw,430px)] border border-white/70 bg-black/25 px-8 py-10 text-center backdrop-blur-[2px]">
          <p className="text-[0.6rem] tracking-[0.3em] text-white/60">
            MOON DABIN EDITIONS — WINTER &#39;26
          </p>
          <h1 className="mt-5 leading-none text-white">
            <span className="display block text-4xl">The</span>
            <span className="brush block py-1 text-7xl text-orange-400">Naruto</span>
            <span className="display block text-4xl">Edition</span>
          </h1>
          <p className="mt-4 text-[0.6rem] tracking-[0.3em] text-white/50">EST. 2004.01.01</p>
          <p className="mt-5 text-xs leading-relaxed text-white/70">
            A self-introduction in four chapters.
            <br />
            Everything I love, on one page.
          </p>
          <ul className="mx-auto mt-6 max-w-[240px] space-y-1.5 text-left text-[0.68rem] tracking-[0.2em] text-white/85">
            <li className="flex justify-between"><a href="#naruto" className="hover:text-orange-400">NARUTO</a><span className="text-white/40">I</span></li>
            <li className="flex justify-between"><a href="#movies" className="hover:text-orange-400">CINEMA</a><span className="text-white/40">II</span></li>
            <li className="flex justify-between"><a href="#people" className="hover:text-orange-400">PEOPLE &amp; MUSIC</a><span className="text-white/40">III</span></li>
            <li className="flex justify-between"><a href="#series" className="hover:text-orange-400">SERIES</a><span className="text-white/40">IV</span></li>
          </ul>
          <p className="mt-7 text-[0.6rem] tracking-[0.18em] text-white/60">
            MOON DABIN —{" "}
            <a
              href="https://www.ccn.ac.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-orange-400"
            >
              CHRISTIAN COLLEGE OF NURSING
            </a>
          </p>
          <p className="mt-5 animate-pulse text-[0.6rem] tracking-[0.3em] text-white/50">
            SCROLL TO ENTER ↓
          </p>
        </div>
      </div>

      {/* 나선환 — 스크롤하면 커지면서 화면을 삼킨다 */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div className="rasengan-wrap">
          <div className="rasengan" />
        </div>
      </div>

      {/* 흡입 순간의 화이트 플래시 */}
      <div className="hero-flash pointer-events-none absolute inset-0 z-20 bg-white opacity-0" />
    </section>
  );
}
