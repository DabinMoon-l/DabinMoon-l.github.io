import Figure from "@/components/Figure";

/** Chapter 1 — 나루토: 이루카&나루토 / 사스케&이타치 / 카카시 혼자 */
export default function Naruto() {
  return (
    <section id="naruto">
      {/* 챕터 인트로 */}
      <div className="flex min-h-[60svh] flex-col items-center justify-center bg-gradient-to-b from-ink via-[#1a0e05] to-[#2a1506] px-6 text-center">
        <p className="chapter-tag" data-reveal>
          Chapter 1 — Naruto
        </p>
        <h2 className="brush mt-6 text-6xl text-orange-400 md:text-8xl" data-reveal>
          내가 사랑하는 이야기
        </h2>
        <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/60" data-reveal>
          나를 설명하려면 이 만화에서 시작해야 한다.
        </p>
      </div>

      {/* 1-1. 이루카 & 나루토 */}
      <div className="grid min-h-svh items-center gap-10 bg-gradient-to-b from-[#2a1506] to-[#3a1d08] px-6 py-24 md:grid-cols-2 md:px-14">
        <div data-parallax="0.15">
          <Figure name="naruto-iruka" label="이루카 & 나루토 — 일락 라멘" ratio="4 / 5" />
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
            처음으로 인정해준 사람
          </p>
          <p className="mt-6 max-w-md text-sm leading-loose text-white/70" data-reveal>
            모두가 외면하던 아이 곁에 앉아 라멘 한 그릇을 같이 먹어주던 사람.
            나는 이 장면에서 &lsquo;돌봄&rsquo;이 무엇인지 처음 배웠다.
            누군가를 향한 인정 한 마디가 인생을 바꿀 수 있다는 것.
          </p>
        </div>
      </div>

      {/* 1-2. 사스케 & 이타치 */}
      <div className="grid min-h-svh items-center gap-10 bg-gradient-to-b from-[#3a1d08] via-[#14101f] to-[#100c1a] px-6 py-24 md:grid-cols-2 md:px-14">
        <div className="md:order-2" data-parallax="0.18">
          <Figure name="sasuke-itachi" label="사스케 & 이타치 — 이마 콩" ratio="4 / 5" />
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
            말하지 않아도 아는 마음
          </p>
          <p className="mt-6 max-w-md text-sm leading-loose text-white/70 md:ml-auto" data-reveal>
            이마를 톡 치는 손가락 하나에 담긴 진심.
            표현이 서툴러도 끝까지 아끼는 마음이 있다는 걸 이 형제가 보여줬다.
            나도 그런 쪽에 가까운 사람이다.
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
          혼자여도 멋있는 사람 ㅎㅎ
        </p>
        <div className="mt-10 w-full max-w-sm" data-parallax="0.1">
          <Figure name="kakashi" label="카카시 — 늘 혼자 책 읽는 중" ratio="3 / 4" />
        </div>
        <p className="mt-8 max-w-md text-sm leading-loose text-white/70" data-reveal>
          늘 혼자 책을 읽고 있는 카카시처럼, 나에게도 혼자 조용히 좋아하는 것들이 있다.
          지금부터 그 이야기.
        </p>
      </div>
    </section>
  );
}
