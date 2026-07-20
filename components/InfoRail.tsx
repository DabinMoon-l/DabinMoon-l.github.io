/**
 * 왼쪽 하단 고정 인적사항 레일 (레퍼런스의 고정 챕터 인덱스 자리).
 * 레퍼런스처럼 좌측에 넉넉한 여백을 두고, 굵은 글씨로.
 */
export default function InfoRail() {
  return (
    <aside className="pointer-events-none fixed bottom-10 left-10 z-50 hidden select-none mix-blend-difference md:block xl:left-16">
      <ul className="space-y-1 text-[0.7rem] font-bold leading-relaxed tracking-[0.14em] text-white/85">
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
      <ul className="pointer-events-auto mt-5 space-y-1 text-[0.7rem] font-bold tracking-[0.14em] text-white/70">
        <li><a href="#naruto" className="hover:text-orange-400">NARUTO</a> <span className="ml-1 text-white/40">I</span></li>
        <li><a href="#movies" className="hover:text-orange-400">CINEMA</a> <span className="ml-1 text-white/40">II</span></li>
        <li><a href="#people" className="hover:text-orange-400">PEOPLE</a> <span className="ml-1 text-white/40">III</span></li>
        <li><a href="#series" className="hover:text-orange-400">SERIES</a> <span className="ml-1 text-white/40">IV</span></li>
      </ul>
    </aside>
  );
}
