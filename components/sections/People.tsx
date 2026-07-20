import ChapterShell from "@/components/ChapterShell";
import Figure from "@/components/Figure";

/** Chapter III — 사람 & 음악: 중앙 정렬 + 누끼/앨범 카드 */
export default function People() {
  return (
    <ChapterShell
      id="people"
      bg="people-bg"
      title="People"
      fallback="bg-gradient-to-b from-[#2b1055] via-[#0d0d12] to-[#04302b]"
    >
      {/* 3-1. 해리 스타일스 — Coming Up Roses */}
      <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-28 text-center">
        <div className="pointer-events-none absolute inset-0">
          <span className="float-slow absolute left-[10%] top-[18%] h-3 w-3 rounded-full bg-rose-300/70" />
          <span className="float-mid absolute left-[82%] top-[14%] h-2.5 w-2.5 rounded-full bg-rose-400/60" />
          <span className="float-fast absolute left-[68%] top-[74%] h-2 w-2 rounded-full bg-pink-300/60" />
          <span className="float-mid absolute left-[20%] top-[80%] h-2.5 w-2.5 rounded-full bg-rose-200/70" />
        </div>
        <p className="chapter-tag" data-reveal>
          My favorite artist
        </p>
        <h3 className="display mt-5 text-5xl text-white md:text-7xl" data-reveal>
          Harry Styles
        </h3>
        <div className="mt-10 w-full max-w-sm" data-parallax="0.12">
          <Figure name="harry" label="Harry Styles — cutout PNG" ratio="3 / 4" />
        </div>
        <p className="mt-10 max-w-xl text-base font-medium leading-relaxed text-white/90" data-reveal>
          The artist I always come back to. The voice, the style,
          the way every album becomes a whole world of its own.
        </p>
        {/* 최애곡 — 부가 정보 칩 */}
        <div
          className="mt-6 inline-flex items-center gap-3 rounded-full border border-rose-300/40 bg-black/30 px-5 py-2.5"
          data-reveal
        >
          <span className="h-2 w-2 rounded-full bg-rose-400" />
          <span className="text-[0.7rem] font-bold tracking-[0.2em] text-rose-200">
            FAVORITE TRACK · COMING UP ROSES
          </span>
        </div>
      </div>

      {/* 3-2. 엔하이픈 제이 & 성훈 — No Doubt */}
      <div className="flex min-h-svh flex-col items-center justify-center px-6 py-28 text-center">
        <p className="chapter-tag" data-reveal>
          Enhypen — No Doubt
        </p>
        <h3 className="display mt-5 text-5xl text-white md:text-7xl" data-reveal>
          Jay &amp; Sunghoon
        </h3>
        <p className="mt-4 text-lg font-bold text-sky-300" data-reveal>
          That No Doubt music-video styling.
        </p>
        <div className="mt-12 grid w-full max-w-2xl grid-cols-2 items-end gap-6">
          <div data-parallax="0.1">
            <Figure name="jay" label="Jay — cutout PNG" ratio="3 / 4" />
          </div>
          <div className="mb-10" data-parallax="0.18">
            <Figure name="sunghoon" label="Sunghoon — cutout PNG" ratio="3 / 4" />
          </div>
        </div>
        <p className="mt-8 max-w-xl text-base font-medium leading-relaxed text-white/90" data-reveal>
          Somewhere between a sharp suit and streetwear,
          like a summer-night romance.
        </p>
      </div>

      {/* 3-3. 금성무 — 중경삼림 */}
      <div className="flex min-h-svh flex-col items-center justify-center px-6 py-28 text-center">
        <p className="chapter-tag" data-reveal>
          Takeshi Kaneshiro — Chungking Express (1994)
        </p>
        <h3
          className="stepprint display mt-5 text-6xl text-white md:text-8xl"
          data-text="金城武"
        >
          金城武
        </h3>
        <p className="mt-4 text-lg font-bold text-teal-300" data-reveal>
          Running through Wong Kar-wai&#39;s blur.
        </p>
        <div className="mt-10 w-full max-w-sm" data-parallax="0.14">
          <Figure name="kaneshiro" label="Takeshi Kaneshiro — cutout PNG" ratio="3 / 4" />
        </div>
        <p className="mt-10 max-w-xl text-base font-medium leading-relaxed text-white/90" data-reveal>
          Shaky cameras, smeared neon, canned pineapple with an expiry date.
          Kaneshiro in 1994 is the coolest thing ever filmed.
          (This flickering title is that exact feeling.)
        </p>
      </div>
    </ChapterShell>
  );
}
