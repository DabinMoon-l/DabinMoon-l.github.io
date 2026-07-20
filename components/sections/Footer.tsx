export default function Footer() {
  return (
    <footer className="relative flex min-h-svh flex-col items-center justify-center bg-ink px-6 py-24 text-center">
      <p className="chapter-tag" data-reveal>
        The End
      </p>
      <p className="display mt-8 text-6xl text-white md:text-8xl" data-reveal>
        See You
        <br />
        Around
      </p>
      <p className="mt-6 text-lg font-bold tracking-[0.3em] text-orange-400" data-reveal>
        DATTEBAYO
      </p>

      {/* 크레딧 — 만든 사람들 */}
      <div className="mt-16 w-full max-w-md border-t border-white/15 pt-10" data-reveal>
        <p className="text-[0.62rem] tracking-[0.3em] text-white/45">CREATED BY</p>
        <p className="display mt-4 text-2xl text-white">
          <a
            href="https://claude.com/claude-code"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400"
          >
            Claude Code
          </a>{" "}
          <span className="text-orange-400">&amp;</span> Me
        </p>
      </div>

      {/* 기술 스택 */}
      <div className="mt-10 w-full max-w-md" data-reveal>
        <p className="text-[0.62rem] tracking-[0.3em] text-white/45">BUILT WITH</p>
        <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[0.68rem] tracking-[0.16em] text-white/60">
          <li>NEXT.JS 16</li>
          <li>REACT 19</li>
          <li>TYPESCRIPT</li>
          <li>TAILWIND CSS 4</li>
          <li>GSAP SCROLLTRIGGER</li>
          <li>LENIS SMOOTH SCROLL</li>
          <li>SVG ANIMATION</li>
        </ul>
        <p className="mt-6 text-[0.62rem] tracking-[0.18em] text-white/40">
          INSPIRED BY SHOPIFY EDITIONS — REBUILT AS THE NARUTO EDITION
        </p>
      </div>

      <p className="mt-12 text-[0.7rem] font-bold tracking-[0.22em] text-white/50" data-reveal>
        MOON DABIN · EST. 2004.01.01 · EDITIONS WINTER &#39;26
      </p>
    </footer>
  );
}
