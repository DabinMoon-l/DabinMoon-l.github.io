import ChapterShell from "@/components/ChapterShell";
import Figure from "@/components/Figure";
import BgImage from "@/components/BgImage";

/** Chapter II — 영화: 고정 배경(cinema-bg) 위로 시라트 SHOCK + 스파이더맨 대교 밴드 */
export default function Movies() {
  return (
    <ChapterShell
      id="movies"
      bg="cinema-bg"
      tag="Chapter II"
      title="Cinema"
      fallback="bg-gradient-to-b from-[#1c1c22] via-[#4a3521] to-[#2b2118]"
    >
      {/* 2-1. 시라트 — SHOCK (중앙 정렬) */}
      <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
        <p className="chapter-tag" data-reveal>
          Sirât — the most shocking film I have ever seen
        </p>
        <h3 className="shock-text display mt-8 text-[24vw] text-white md:text-[15rem]">
          Shock
        </h3>
        <div className="mt-10 w-full max-w-xs" data-parallax="0.12">
          <Figure name="sirat" label="Sirât — poster" ratio="2 / 3" />
        </div>
        <p className="mt-10 max-w-xl text-base font-medium leading-relaxed text-white/90" data-reveal>
          A rave in the middle of the desert, and everything that follows.
          I couldn&#39;t say a word after the credits rolled.
          I can&#39;t say I liked it — but I can&#39;t forget it either.
          The film that proved cinema can shake you this hard.
        </p>
      </div>

      {/* 2-2. 어메이징 스파이더맨 — 실제 영화 스틸 위에 거미줄 글씨만 얹는다 */}
      <div
        id="spider-stage"
        className="relative mx-auto my-28 w-[min(94vw,72rem)] overflow-hidden rounded-2xl shadow-[0_50px_100px_-30px_rgba(0,0,0,0.7)]"
      >
        {/* 영화 그 장면 스틸 (public/assets/spider-bridge.png) */}
        <BgImage
          name="spider-bridge"
          fallback={
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, #2b1055 0%, #7b2a6b 35%, #e2543e 70%, #f5a35c 100%)",
              }}
            >
              <div className="absolute inset-x-0 bottom-10 mx-auto w-fit rounded-lg border-2 border-dashed border-white/40 px-5 py-3 text-[0.72rem] font-bold tracking-[0.12em] text-white/70">
                ADD MOVIE STILL → public/assets/spider-bridge.png
              </div>
            </div>
          }
        />
        {/* 글씨 가독성용 아주 옅은 어둠 */}
        <div className="absolute inset-0 bg-black/15" />

        <div className="relative z-10 flex min-h-[115svh] flex-col items-center px-6 pt-24">
          <p className="chapter-tag" data-reveal>
            The Amazing Spider-Man — my favorite film
          </p>
          <p className="mt-4 max-w-md text-center text-base font-medium leading-relaxed text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]" data-reveal>
            Andrew Garfield&#39;s Spider-Man.
            That bridge at sunset, a heart written in webs —
            watch it happen. Keep scrolling.
          </p>

          {/* 거미줄 글씨 오버레이 — 스틸 위에서 스크롤에 따라 그려진다 */}
          <svg
            viewBox="0 0 1440 420"
            className="mt-10 w-full max-w-6xl"
            aria-label="I LOVE YOU drawn in webs over the movie still"
          >
            <line x1="380" y1="0" x2="432" y2="150" stroke="#fff" strokeWidth="1.2" opacity="0.55" />
            <line x1="1060" y1="0" x2="1008" y2="150" stroke="#fff" strokeWidth="1.2" opacity="0.55" />
            <text
              x="720"
              y="260"
              textAnchor="middle"
              fontSize="150"
              className="web-text"
            >
              I LOVE YOU
            </text>
          </svg>
        </div>
      </div>
    </ChapterShell>
  );
}
