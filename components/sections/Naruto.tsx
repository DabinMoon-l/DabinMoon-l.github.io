import ChapterShell from "@/components/ChapterShell";
import Figure from "@/components/Figure";
import { Shuriken, Kunai, Leaf } from "@/components/deco";

/**
 * Chapter I — 나루토
 * 히어로 포탈이 타이틀 화면 역할: 섹션을 히어로 핀 아래로 당겨 넣어(-mt)
 * 포탈이 다 열리는 순간 이 챕터의 고정 배경이 이어받는다 (배경 이음새 없음)
 */
export default function Naruto() {
  return (
    <ChapterShell
      id="naruto"
      bg="naruto-bg"
      title="Naruto"
      torn={false}
      titleScreen={false}
      className="-mt-[100svh]"
      fallback="bg-gradient-to-b from-[#2a1506] via-[#3a1d08] to-[#170b03]"
      decor={
        <>
          <div className="float-slow absolute left-[7%] top-[14%] opacity-60"><Shuriken size={70} /></div>
          <div className="float-mid absolute right-[9%] top-[28%] opacity-50"><Kunai size={96} /></div>
          <div className="float-fast absolute left-[18%] bottom-[16%] text-orange-400/70"><Leaf size={38} /></div>
          <div className="float-mid absolute right-[22%] bottom-[24%] text-orange-300/50"><Leaf size={28} /></div>
        </>
      }
    >
      {/* 1-1. 나루토 & 이루카 — 캐릭터 프로필 (기술 칩) */}
      <div className="flex min-h-svh flex-col items-center justify-center px-6 py-28 text-center">
        <p className="chapter-tag" data-reveal>
          The Hidden Leaf
        </p>
        <h3 className="display mt-5 text-5xl text-white md:text-7xl" data-reveal>
          Naruto &amp; Iruka
        </h3>
        <div className="mt-10 w-full max-w-xl" data-parallax="0.12">
          <Figure name="naruto-iruka" label="Naruto & Iruka — cutout PNG" ratio="4 / 3" />
        </div>
        <div className="mt-8 flex max-w-xl flex-wrap items-center justify-center gap-3" data-reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-orange-400/50 bg-black/30 px-4 py-2 text-[0.7rem] font-bold tracking-[0.18em] text-orange-200">
            <span className="h-2 w-2 rounded-full bg-orange-400" />JUTSU · RASENGAN
          </span>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-orange-400/50 bg-black/30 px-4 py-2 text-[0.7rem] font-bold tracking-[0.18em] text-orange-200">
            <span className="h-2 w-2 rounded-full bg-orange-400" />JUTSU · SHADOW CLONE
          </span>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-orange-400/50 bg-black/30 px-4 py-2 text-[0.7rem] font-bold tracking-[0.18em] text-orange-200">
            <span className="h-2 w-2 rounded-full bg-orange-400" />NINE-TAILS CHAKRA
          </span>
        </div>
      </div>

      {/* 1-2. 사스케 & 이타치 — 캐릭터 프로필 */}
      <div className="flex min-h-svh flex-col items-center justify-center px-6 py-28 text-center">
        <p className="chapter-tag" data-reveal>
          The Uchiha Brothers
        </p>
        <h3 className="display mt-5 text-5xl text-white md:text-7xl" data-reveal>
          Sasuke &amp; Itachi
        </h3>
        <div className="mt-10 w-full max-w-xl" data-parallax="0.16">
          <Figure name="sasuke-itachi" label="Sasuke & Itachi — cutout PNG" ratio="4 / 3" />
        </div>
        <div className="mt-8 flex max-w-xl flex-wrap items-center justify-center gap-3" data-reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-indigo-400/50 bg-black/30 px-4 py-2 text-[0.7rem] font-bold tracking-[0.18em] text-indigo-200">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />JUTSU · CHIDORI
          </span>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-indigo-400/50 bg-black/30 px-4 py-2 text-[0.7rem] font-bold tracking-[0.18em] text-indigo-200">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />SHARINGAN · AMATERASU
          </span>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-indigo-400/50 bg-black/30 px-4 py-2 text-[0.7rem] font-bold tracking-[0.18em] text-indigo-200">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />GENJUTSU · TSUKUYOMI
          </span>
        </div>
      </div>

      {/* 1-3. 카카시 — 캐릭터 프로필 */}
      <div className="flex min-h-svh flex-col items-center justify-center px-6 py-28 text-center">
        <p className="chapter-tag" data-reveal>
          The Copy Ninja
        </p>
        <h3 className="display mt-5 text-5xl text-white md:text-7xl" data-reveal>
          Kakashi
        </h3>
        <div className="mt-10 w-full max-w-lg" data-parallax="0.1">
          <Figure name="kakashi" label="Kakashi — cutout PNG" ratio="3 / 4" />
        </div>
        <div className="mt-8 flex max-w-xl flex-wrap items-center justify-center gap-3" data-reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-slate-300/50 bg-black/30 px-4 py-2 text-[0.7rem] font-bold tracking-[0.18em] text-slate-200">
            <span className="h-2 w-2 rounded-full bg-slate-300" />JUTSU · LIGHTNING BLADE
          </span>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-slate-300/50 bg-black/30 px-4 py-2 text-[0.7rem] font-bold tracking-[0.18em] text-slate-200">
            <span className="h-2 w-2 rounded-full bg-slate-300" />1,000 JUTSU COPIED
          </span>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-slate-300/50 bg-black/30 px-4 py-2 text-[0.7rem] font-bold tracking-[0.18em] text-slate-200">
            <span className="h-2 w-2 rounded-full bg-slate-300" />MANGEKYO · KAMUI
          </span>
        </div>
      </div>
    </ChapterShell>
  );
}
