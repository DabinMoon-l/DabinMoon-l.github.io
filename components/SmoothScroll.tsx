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
              scrollTrigger: {
                trigger: sec,
                // 포탈로 진입하는 챕터는 히어로 포탈 배경(scale 1)과 이어지도록 stuck 시점부터 줌 시작
                start: sec.hasAttribute("data-portal-entry") ? "top top" : "top bottom",
                end: "bottom top",
                scrub: true,
              },
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
              scrollTrigger: {
                trigger: sec,
                // 포탈 진입 챕터는 구멍 너머 세계가 밝게 보이도록, 콘텐츠가 도착할 무렵부터 어두워진다
                start: sec.hasAttribute("data-portal-entry") ? "top -100%" : "top top",
                end: "+=90%",
                scrub: true,
              },
            }
          );
        }
        // 챕터 타이틀은 별도 연출 없음 — 일반 콘텐츠처럼 스크롤과 함께 자연스럽게 올라간다
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
