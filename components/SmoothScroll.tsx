"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * 사이트 전체의 스크롤 연출 담당.
 * - Lenis: 부드러운(묵직한) 스크롤
 * - data-reveal: 스크롤 진입 시 아래에서 떠오르는 등장
 * - data-parallax="0.2": 스크롤 속도차(패럴랙스). 값이 클수록 많이 움직임
 * - #progress: 상단 주황 진행 바
 * - .shock-text: 시라트 SHOCK 등장 연출
 * - .web-text: 스파이더맨 거미줄 글씨 그리기 (스크롤 연동)
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({ lerp: 0.09 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // 상단 진행 바
      gsap.to("#progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
      });

      // 공통 등장 연출
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 70,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      // 공통 패럴랙스
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.2");
        gsap.to(el, {
          yPercent: -100 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // 시라트 — SHOCK 쾅 하고 등장 후 계속 떨림
      const shock = document.querySelector<HTMLElement>(".shock-text");
      if (shock) {
        gsap.from(shock, {
          scale: 0.4,
          opacity: 0,
          duration: 0.55,
          ease: "power4.in",
          scrollTrigger: { trigger: shock, start: "top 75%" },
          onComplete: () => shock.classList.add("shock-live"),
        });
      }

      // 스파이더맨 — 스크롤할수록 거미줄이 I LOVE YOU를 그림
      const web = document.querySelector<SVGTextElement>(".web-text");
      if (web) {
        gsap.to(web, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#spider-stage",
            start: "top 70%",
            end: "bottom 90%",
            scrub: 0.5,
          },
        });
      }
    });

    return () => {
      gsap.ticker.remove(tick);
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div id="progress" />
      <div className="grain" />
      {children}
    </>
  );
}
