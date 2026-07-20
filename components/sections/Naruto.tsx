import Figure from "@/components/Figure";

/** Chapter 1 — 나루토: 이루카&나루토 / 사스케&이타치 / 카카시 혼자 */
export default function Naruto() {
  return (
    <section id="naruto">
      {/* 챕터 인트로 */}
      <div className="flex min-h-[60svh] flex-col items-center justify-center bg-gradient-to-b from-ink via-[#1a0e05] to-[#2a1506] px-6 text-center">
        <p className="chapter-tag" data-reveal>
          Chapter I — Naruto
        </p>
        <h2 className="brush mt-6 text-6xl text-orange-400 md:text-8xl" data-reveal>
          The story I love
        </h2>
        <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/60" data-reveal>
          If you want to understand me, this is where it starts.
        </p>
      </div>

      {/* 1-1. 이루카 & 나루토 */}
      <div className="grid min-h-svh items-center gap-10 bg-gradient-to-b from-[#2a1506] to-[#3a1d08] px-6 py-24 md:grid-cols-2 md:px-14">
        <div data-parallax="0.15">
          <Figure name="naruto-iruka" label="Iruka & Naruto — ramen at Ichiraku" ratio="4 / 5" />
        </div>
        <div>
          <p className="chapter-tag" data-reveal>
            Iruka &amp; Naruto
          </p>
          <h3 className="display mt-4 text-5xl text-white md:text-7xl" data-reveal>
            Ramen
            <br />
            &amp; Warmth
          </h3>
          <p className="brush mt-4 text-4xl text-orange-300" data-reveal>
            the first one who believed
          </p>
          <p className="mt-6 max-w-md text-sm leading-loose text-white/70" data-reveal>
            Everyone looked away from the boy — except one teacher, who simply sat
            down and shared a bowl of ramen. This scene taught me what caring for
            someone really means. A single word of recognition can change a life.
          </p>
        </div>
      </div>

      {/* 1-2. 사스케 & 이타치 */}
      <div className="grid min-h-svh items-center gap-10 bg-gradient-to-b from-[#3a1d08] via-[#14101f] to-[#100c1a] px-6 py-24 md:grid-cols-2 md:px-14">
        <div className="md:order-2" data-parallax="0.18">
          <Figure name="sasuke-itachi" label="Sasuke & Itachi — the forehead poke" ratio="4 / 5" />
        </div>
        <div className="md:order-1 md:text-right">
          <p className="chapter-tag md:flex-row-reverse" data-reveal>
            Sasuke &amp; Itachi
          </p>
          <h3 className="display mt-4 text-5xl text-white md:text-7xl" data-reveal>
            Silent
            <br />
            Love
          </h3>
          <p className="brush mt-4 text-4xl text-indigo-300" data-reveal>
            love that never says its name
          </p>
          <p className="mt-6 max-w-md text-sm leading-loose text-white/70 md:ml-auto" data-reveal>
            A single poke on the forehead, carrying everything left unsaid.
            These brothers showed me that clumsy love is still love —
            and honestly, I&#39;m probably that type too.
          </p>
        </div>
      </div>

      {/* 1-3. 카카시 혼자 */}
      <div className="relative flex min-h-svh flex-col items-center justify-center bg-gradient-to-b from-[#100c1a] to-[#1c1c22] px-6 py-24 text-center">
        <p className="chapter-tag" data-reveal>
          Kakashi — Solo
        </p>
        <h3 className="display mt-4 text-6xl text-white md:text-8xl" data-reveal>
          Alone,
          <br />
          But Cool
        </h3>
        <p className="brush mt-4 text-4xl text-slate-300" data-reveal>
          always reading alone, haha
        </p>
        <div className="mt-10 w-full max-w-sm" data-parallax="0.1">
          <Figure name="kakashi" label="Kakashi — reading alone, as always" ratio="3 / 4" />
        </div>
        <p className="mt-8 max-w-md text-sm leading-loose text-white/70" data-reveal>
          Kakashi is always off to the side with his book. I have my own quiet
          obsessions too — and that&#39;s exactly what comes next.
        </p>
      </div>
    </section>
  );
}
