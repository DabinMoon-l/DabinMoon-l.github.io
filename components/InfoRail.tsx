/**
 * 왼쪽 하단 고정 인적사항 레일 (레퍼런스의 고정 챕터 인덱스 자리).
 * 스크롤과 무관하게 항상 떠 있다. mix-blend-difference로 밝은 섹션에서도 보임.
 */
export default function InfoRail() {
  return (
    <aside className="pointer-events-none fixed bottom-6 left-6 z-50 hidden select-none mix-blend-difference md:block">
      <ul className="space-y-0.5 text-[0.6rem] leading-relaxed tracking-[0.16em] text-white/75">
        <li className="text-white">MOON DABIN</li>
        <li>BORN 2004.01.01</li>
        <li className="pointer-events-auto">
          <a
            href="https://www.ccn.ac.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-orange-400"
          >
            CHRISTIAN COLLEGE OF NURSING
          </a>
        </li>
        <li>NURSING · CLASS D · 25010423</li>
        <li>HEIGHT · JUST UNDER 190</li>
        <li>WEIGHT · OVER 2KG</li>
      </ul>
      <ul className="pointer-events-auto mt-4 space-y-0.5 text-[0.6rem] tracking-[0.16em] text-white/60">
        <li><a href="#naruto" className="hover:text-orange-400">NARUTO</a> <span className="ml-1 text-white/35">I</span></li>
        <li><a href="#movies" className="hover:text-orange-400">CINEMA</a> <span className="ml-1 text-white/35">II</span></li>
        <li><a href="#people" className="hover:text-orange-400">PEOPLE &amp; MUSIC</a> <span className="ml-1 text-white/35">III</span></li>
        <li><a href="#series" className="hover:text-orange-400">SERIES</a> <span className="ml-1 text-white/35">IV</span></li>
      </ul>
    </aside>
  );
}
