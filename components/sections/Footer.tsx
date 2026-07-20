export default function Footer() {
  return (
    <footer className="relative flex min-h-[70svh] flex-col items-center justify-center bg-ink px-6 text-center">
      <p className="chapter-tag" data-reveal>
        The End — 읽어줘서 고마워요
      </p>
      <p className="brush mt-8 text-7xl text-orange-400 md:text-9xl" data-reveal>
        고맙습니다
      </p>
      <p className="display mt-6 text-xl text-white/80" data-reveal>
        Moon Dabin
      </p>
      <div className="absolute bottom-6 left-6 text-[0.68rem] tracking-[0.22em] text-white/40 md:left-14">
        기독간호대학교 간호학과 · 25010423
      </div>
      <div className="absolute bottom-6 right-6 text-[0.68rem] tracking-[0.22em] text-white/40 md:right-14">
        THE NARUTO EDITION — 2026
      </div>
    </footer>
  );
}
