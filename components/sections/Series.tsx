import ChapterShell from "@/components/ChapterShell";
import Figure from "@/components/Figure";

/** Chapter IV — 미드: 고정 배경(series-bg) 위 좌우 분할 블록 */
export default function Series() {
  return (
    <ChapterShell
      id="series"
      bg="series-bg"
      tag="Chapter IV"
      title="Series"
      fallback="bg-gradient-to-b from-[#0d1210] via-[#141210] to-[#0a0808]"
    >
      <div className="grid md:grid-cols-2">
        {/* 피키 블라인더스 */}
        <div className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6 py-24 md:px-12">
          {/* 불씨 */}
          <div className="pointer-events-none absolute inset-0">
            <span className="float-fast absolute left-[20%] top-[30%] h-1 w-1 rounded-full bg-amber-500/80" />
            <span className="float-mid absolute left-[70%] top-[20%] h-1 w-1 rounded-full bg-orange-400/70" />
            <span className="float-slow absolute left-[50%] top-[60%] h-1 w-1 rounded-full bg-amber-300/70" />
          </div>
          <p className="chapter-tag" data-reveal>
            Peaky Blinders
          </p>
          <h3 className="display mt-4 text-5xl text-white md:text-6xl" data-reveal>
            By Order
            <br />
            Of The...
          </h3>
          <p className="mt-6 max-w-sm text-sm leading-loose text-white/80" data-reveal>
            Grey Birmingham, cigar smoke, and Tommy Shelby&#39;s stare.
            A series that is pure atmosphere from the first frame to the last.
          </p>
          <div className="mt-10 max-w-sm" data-parallax="0.1">
            <Figure name="peaky" label="Peaky Blinders" ratio="16 / 10" />
          </div>
        </div>

        {/* 어둠 속의 미사 */}
        <div className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6 py-24 md:px-12">
          {/* 촛불 글로우 */}
          <div
            className="candle pointer-events-none absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,166,77,0.18) 0%, transparent 60%)" }}
          />
          <p className="chapter-tag" data-reveal>
            Midnight Mass
          </p>
          <h3 className="display mt-4 text-5xl text-white md:text-6xl" data-reveal>
            Faith
            <br />
            &amp; Fear
          </h3>
          <p className="mt-6 max-w-sm text-sm leading-loose text-white/80" data-reveal>
            Who knew a single candle could be this terrifying.
            No horror has ever dug this deep into faith and fear.
          </p>
          <div className="mt-10 max-w-sm" data-parallax="0.14">
            <Figure name="midnightmass" label="Midnight Mass" ratio="16 / 10" />
          </div>
        </div>
      </div>
    </ChapterShell>
  );
}
