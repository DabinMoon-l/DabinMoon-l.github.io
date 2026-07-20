import Figure from "@/components/Figure";

/** Chapter 4 — 미드: 피키 블라인더스 / 어둠 속의 미사 */
export default function Series() {
  return (
    <section id="series">
      {/* 챕터 인트로 */}
      <div className="flex min-h-[50svh] flex-col items-center justify-center bg-[#04302b] px-6 text-center">
        <p className="chapter-tag" data-reveal>
          Chapter 4 — Series
        </p>
        <h2 className="brush mt-6 text-6xl text-white md:text-8xl" data-reveal>
          밤을 새우게 한 것들
        </h2>
      </div>

      <div className="grid md:grid-cols-2">
        {/* 피키 블라인더스 */}
        <div className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-gradient-to-b from-[#141210] to-[#241a10] px-6 py-24 md:px-12">
          {/* 불씨 */}
          <div className="pointer-events-none absolute inset-0">
            <span className="float-fast absolute left-[20%] top-[30%] h-1 w-1 rounded-full bg-amber-500/80" />
            <span className="float-mid absolute left-[70%] top-[20%] h-1 w-1 rounded-full bg-orange-400/70" />
            <span className="float-slow absolute left-[50%] top-[60%] h-1 w-1 rounded-full bg-amber-300/70" />
          </div>
          <p className="chapter-tag" data-reveal>
            Peaky Blinders
          </p>
          <h3 className="display mt-4 text-5xl text-amber-100 md:text-6xl" data-reveal>
            By Order
            <br />
            Of The...
          </h3>
          <p className="mt-6 max-w-sm text-sm leading-loose text-white/70" data-reveal>
            잿빛 버밍엄, 시가 연기, 그리고 토미 셸비의 눈빛.
            분위기라는 게 뭔지 처음부터 끝까지 보여주는 시리즈.
          </p>
          <div className="mt-10 max-w-sm" data-parallax="0.1">
            <Figure name="peaky" label="피키 블라인더스" ratio="16 / 10" />
          </div>
        </div>

        {/* 어둠 속의 미사 */}
        <div className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-[#0a0808] px-6 py-24 md:px-12">
          {/* 촛불 글로우 */}
          <div
            className="candle pointer-events-none absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,166,77,0.16) 0%, transparent 60%)" }}
          />
          <p className="chapter-tag" data-reveal>
            Midnight Mass
          </p>
          <h3 className="display mt-4 text-5xl text-orange-100 md:text-6xl" data-reveal>
            Faith
            <br />
            &amp; Fear
          </h3>
          <p className="mt-6 max-w-sm text-sm leading-loose text-white/70" data-reveal>
            촛불 하나로 이렇게 무서울 수 있다니.
            믿음과 두려움에 대해 이렇게까지 깊게 파고드는 호러는 처음이었다.
          </p>
          <div className="mt-10 max-w-sm" data-parallax="0.14">
            <Figure name="midnightmass" label="어둠 속의 미사" ratio="16 / 10" />
          </div>
        </div>
      </div>
    </section>
  );
}
