/** 레퍼런스의 상단 네비게이션 바 (Shopify Editions Winter '26 / Start for free 자리) */
export default function TopBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/50 to-transparent">
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        <div className="flex items-center gap-8">
          <span className="text-[0.8rem] font-bold tracking-[0.06em] text-white">
            Moon Dabin <span className="font-semibold text-white/60">Editions Winter &#39;26</span>
          </span>
          <nav className="hidden gap-6 text-[0.76rem] font-bold text-white/80 md:flex">
            <a href="#naruto" className="hover:text-white">Chapters</a>
            <a href="#people" className="hover:text-white">Music</a>
            <a href="#series" className="hover:text-white">Series</a>
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://www.ccn.ac.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[0.76rem] font-bold text-white/80 hover:text-white md:block"
          >
            ccn.ac.kr
          </a>
          <a
            href="#naruto"
            className="rounded-full bg-white px-4 py-2 text-[0.76rem] font-bold text-black transition-colors hover:bg-orange-500 hover:text-white"
          >
            Start the tour
          </a>
        </div>
      </div>
    </header>
  );
}
