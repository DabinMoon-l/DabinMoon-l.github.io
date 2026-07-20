import Figure from "@/components/Figure";

/** Chapter 3 — 사람: 해리 스타일스 / 엔하이픈 제이·성훈 / 금성무 */
export default function People() {
  return (
    <section id="people">
      {/* 챕터 인트로 */}
      <div className="flex min-h-[50svh] flex-col items-center justify-center bg-[#2b1055] px-6 text-center">
        <p className="chapter-tag" data-reveal>
          Chapter 3 — People &amp; Music
        </p>
        <h2 className="brush mt-6 text-6xl text-white md:text-8xl" data-reveal>
          좋아하는 사람들
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
              나의 최애곡
            </p>
            <p className="mt-6 max-w-md text-sm leading-loose text-neutral-700" data-reveal>
              영원하지 않아도 특별할 수 있다는 노래.
              앨범 전체가 신나게 달리다가 이 곡에서 잠깐 숨을 고르는데,
              나는 그 순간이 제일 좋다.
            </p>
          </div>
          <div data-parallax="0.12">
            <Figure name="harry" label="해리 스타일스" ratio="4 / 5" className="rotate-2" />
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
            No Doubt 뮤비 착장의 그 분위기.
            수트와 스트릿 사이 어딘가, 여름밤의 로맨스 같은 곡.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div data-parallax="0.1">
              <Figure name="jay" label="제이 — No Doubt 착장" ratio="3 / 4" className="-rotate-1" />
            </div>
            <div className="md:mt-16" data-parallax="0.18">
              <Figure name="sunghoon" label="성훈 — No Doubt 착장" ratio="3 / 4" className="rotate-1" />
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
              중경삼림의 금성무
            </p>
            <p className="mt-6 max-w-md text-sm leading-loose text-white/70" data-reveal>
              흔들리는 카메라, 번지는 네온, 유통기한이 적힌 파인애플 통조림.
              왕가위의 잔상 속에서 뛰던 그 시절의 금성무가 제일 멋있다.
              (이 글씨의 잔상 효과가 바로 그 느낌이다.)
            </p>
          </div>
          <div className="md:order-1" data-parallax="0.15">
            <Figure name="kaneshiro" label="금성무 — 중경삼림 시절" ratio="4 / 5" />
          </div>
        </div>
      </div>
    </section>
  );
}
