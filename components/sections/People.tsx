import Figure from "@/components/Figure";

/** Chapter 3 — 사람: 해리 스타일스 / 엔하이픈 제이·성훈 / 금성무 */
export default function People() {
  return (
    <section id="people">
      {/* 챕터 인트로 */}
      <div className="flex min-h-[50svh] flex-col items-center justify-center bg-[#2b1055] px-6 text-center">
        <p className="chapter-tag" data-reveal>
          Chapter III — People &amp; Music
        </p>
        <h2 className="brush mt-6 text-6xl text-white md:text-8xl" data-reveal>
          People I love
        </h2>
      </div>

      {/* 3-1. 해리 스타일스 — Coming Up Roses */}
      <div className="relative overflow-hidden bg-[#f3ece2] px-6 py-28 text-neutral-900 md:px-14">
        {/* 장미 꽃잎 파티클 */}
        <div className="pointer-events-none absolute inset-0">
          <span className="float-slow absolute left-[8%] top-[18%] h-3 w-3 rounded-full bg-rose-300/70" />
          <span className="float-mid absolute left-[80%] top-[12%] h-2.5 w-2.5 rounded-full bg-rose-400/60" />
          <span className="float-fast absolute left-[65%] top-[70%] h-2 w-2 rounded-full bg-pink-300/60" />
          <span className="float-mid absolute left-[20%] top-[80%] h-2.5 w-2.5 rounded-full bg-rose-200/70" />
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="chapter-tag !text-neutral-500" data-reveal>
              Harry Styles
            </p>
            <h3 className="display mt-4 text-5xl text-rose-900 md:text-7xl" data-reveal>
              Coming
              <br />
              Up Roses
            </h3>
            <p className="brush mt-4 text-4xl text-rose-500" data-reveal>
              my favorite song of all
            </p>
            <p className="mt-6 max-w-md text-sm leading-loose text-neutral-700" data-reveal>
              A song about how something doesn&#39;t have to last forever to be
              special. The whole album runs and dances — then pauses to breathe
              right here. That pause is my favorite moment.
            </p>
          </div>
          <div data-parallax="0.12">
            <Figure name="harry" label="Harry Styles" ratio="4 / 5" className="rotate-2" />
          </div>
        </div>
      </div>

      {/* 3-2. 엔하이픈 제이 & 성훈 — No Doubt */}
      <div className="bg-[#0d0d12] px-6 py-28 md:px-14">
        <div className="mx-auto max-w-5xl">
          <p className="chapter-tag" data-reveal>
            Enhypen — No Doubt
          </p>
          <h3 className="display mt-4 text-5xl text-white md:text-7xl" data-reveal>
            Jay &amp;
            <br />
            Sunghoon
          </h3>
          <p className="mt-6 max-w-md text-sm leading-loose text-white/70" data-reveal>
            That No Doubt music-video styling — somewhere between a sharp suit
            and streetwear, like a summer-night romance.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div data-parallax="0.1">
              <Figure name="jay" label="Jay — No Doubt MV look" ratio="3 / 4" className="-rotate-1" />
            </div>
            <div className="md:mt-16" data-parallax="0.18">
              <Figure name="sunghoon" label="Sunghoon — No Doubt MV look" ratio="3 / 4" className="rotate-1" />
            </div>
          </div>
        </div>
      </div>

      {/* 3-3. 금성무 — 중경삼림 */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#0d0d12] via-[#062421] to-[#04302b] px-6 py-28 md:px-14">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <div className="md:order-2">
            <p className="chapter-tag" data-reveal>
              Takeshi Kaneshiro — Chungking Express (1994)
            </p>
            <h3
              className="stepprint display mt-4 text-6xl text-white md:text-8xl"
              data-text="金城武"
            >
              金城武
            </h3>
            <p className="brush mt-4 text-4xl text-teal-300" data-reveal>
              Chungking Express, 1994
            </p>
            <p className="mt-6 max-w-md text-sm leading-loose text-white/70" data-reveal>
              Shaky cameras, smeared neon, canned pineapple with an expiry date.
              Kaneshiro running through Wong Kar-wai&#39;s blur is the coolest
              thing ever filmed. (This flickering title is that exact feeling.)
            </p>
          </div>
          <div className="md:order-1" data-parallax="0.15">
            <Figure name="kaneshiro" label="Takeshi Kaneshiro — Chungking Express era" ratio="4 / 5" />
          </div>
        </div>
      </div>
    </section>
  );
}
