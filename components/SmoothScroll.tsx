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

      // 이미지 커튼 리빌 — 아래에서 걷히듯 등장
      gsap.utils.toArray<HTMLElement>(".figure").forEach((fig) => {
        gsap.fromTo(
          fig,
          { clipPath: "inset(100% 0% 0% 0%)", y: 70, scale: 1.06 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            scale: 1,
            duration: 1.3,
            ease: "power3.out",
            scrollTrigger: { trigger: fig, start: "top 88%" },
          }
        );
        // 내부 이미지는 스크롤 내내 천천히 줌/이동 (켄 번즈)
        const img = fig.querySelector("img");
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.28, yPercent: -7 },
            {
              scale: 1.02,
              yPercent: 7,
              ease: "none",
              scrollTrigger: { trigger: fig, start: "top bottom", end: "bottom top", scrub: true },
            }
          );
        }
      });

      // 챕터 연출 — 배경 줌 / 오버레이 다크닝 / 타이틀 등장·퇴장 / 끝부분 흑백화
      gsap.utils.toArray<HTMLElement>(".chapter").forEach((sec) => {
        const bgEl = sec.querySelector(".chapter-bg");
        if (bgEl) {
          gsap.fromTo(
            bgEl,
            { scale: 1 },
            {
              scale: 1.12,
              ease: "none",
              scrollTrigger: { trigger: sec, start: "top bottom", end: "bottom top", scrub: true },
            }
          );
          // 챕터가 끝나갈 때 배경이 흑백으로 바랜다 (찢어진 전환의 전조)
          gsap.fromTo(
            bgEl,
            { filter: "grayscale(0)" },
            {
              filter: "grayscale(1)",
              ease: "none",
              scrollTrigger: { trigger: sec, start: "bottom 140%", end: "bottom 70%", scrub: true },
            }
          );
        }
        const overlay = sec.querySelector(".chapter-overlay");
        if (overlay) {
          gsap.fromTo(
            overlay,
            { opacity: 0 },
            {
              opacity: 0.68,
              ease: "none",
              scrollTrigger: { trigger: sec, start: "top top", end: "+=90%", scrub: true },
            }
          );
        }
        const title = sec.querySelector(".chapter-title");
        if (title) {
          gsap.fromTo(
            title,
            { scale: 0.9, opacity: 0, y: 70 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: { trigger: sec, start: "top 65%" },
            }
          );
          gsap.to(title, {
            yPercent: -35,
            opacity: 0,
            ease: "none",
            scrollTrigger: { trigger: sec, start: "top top", end: "+=70%", scrub: true },
          });
        }
      });

      // 콜라주 조각 드리프트 — 스크롤 따라 위아래로 흐르며 회전
      // data-float="세기", data-rot="회전각"
      gsap.utils.toArray<HTMLElement>("[data-float]").forEach((el) => {
        const amp = parseFloat(el.dataset.float || "1");
        const rot = parseFloat(el.dataset.rot || "0");
        gsap.fromTo(
          el,
          { y: 90 * amp, rotation: -rot },
          {
            y: -90 * amp,
            rotation: rot,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
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
