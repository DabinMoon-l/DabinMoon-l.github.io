export default function Hero() {
  return (
    <section className="relative flex h-svh flex-col justify-center overflow-hidden bg-ink px-6 md:px-14">
      {/* 배경 은은한 주황 글로우 */}
      <div
        className="pointer-events-none absolute -top-1/4 right-[-10%] h-[70vmin] w-[70vmin] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, #f97316 0%, transparent 65%)" }}
      />
      {/* 떠다니는 나뭇잎 파티클 */}
      <div className="pointer-events-none absolute inset-0">
        <span className="float-slow absolute left-[12%] top-[22%] h-2 w-3 rounded-full bg-orange-500/50" />
        <span className="float-mid absolute left-[70%] top-[15%] h-2 w-3 rounded-full bg-orange-400/40" />
        <span className="float-fast absolute left-[85%] top-[60%] h-1.5 w-2.5 rounded-full bg-amber-500/40" />
        <span className="float-mid absolute left-[25%] top-[75%] h-1.5 w-2.5 rounded-full bg-orange-300/30" />
      </div>

      <p className="chapter-tag mb-6" data-reveal>
        Self-Intro Editions — The Naruto Edition
      </p>

      <h1 className="display text-[17vw] leading-[0.88] text-white md:text-[11rem]" data-reveal>
        Moon
        <br />
        Dabin
      </h1>

      <p className="brush mt-6 text-5xl text-orange-400 md:text-7xl" data-reveal>
        문다빈
      </p>

      <p className="mt-8 max-w-md text-sm leading-relaxed text-white/60" data-reveal>
        내가 좋아하는 것들로 나를 소개합니다.
        <br />
        나루토, 영화, 음악, 그리고 사람들.
      </p>

      {/* 레퍼런스 스타일의 좌하단 크레딧 */}
      <div className="absolute bottom-6 left-6 text-[0.68rem] tracking-[0.22em] text-white/45 md:left-14">
        기독간호대학교 간호학과 · 25010423
      </div>
      <div className="absolute bottom-6 right-6 text-[0.68rem] tracking-[0.22em] text-white/45 md:right-14">
        SCROLL ↓
      </div>
    </section>
  );
}
