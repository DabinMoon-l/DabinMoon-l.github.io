import ChapterShell from "@/components/ChapterShell";
import Figure from "@/components/Figure";

/** Chapter II — 영화: 고정 배경(cinema-bg) 위로 시라트 SHOCK + 스파이더맨 대교 밴드 */
export default function Movies() {
  return (
    <ChapterShell
      id="movies"
      bg="cinema-bg"
      tag="Chapter II"
      title="Cinema"
      fallback="bg-gradient-to-b from-[#1c1c22] via-[#4a3521] to-[#2b2118]"
    >
      {/* 2-1. 시라트 — SHOCK */}
      <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
        <p className="chapter-tag" data-reveal>
          Sirât — the most shocking film I have ever seen
        </p>
        <h3 className="shock-text display mt-8 text-[24vw] text-white md:text-[15rem]">
          Shock
        </h3>
        <div className="mt-10 grid w-full max-w-3xl items-center gap-8 md:grid-cols-[1fr_1.2fr]">
          <div data-parallax="0.12">
            <Figure name="sirat" label="Sirât — poster / still" ratio="2 / 3" />
          </div>
          <p className="text-left text-sm leading-loose text-white/85" data-reveal>
            A rave in the middle of the desert, and everything that follows.
            I couldn&#39;t say a word after the credits rolled.
            I can&#39;t say I liked it — but I can&#39;t forget it either.
            The film that proved cinema can shake you this hard.
          </p>
        </div>
      </div>

      {/* 2-2. 어메이징 스파이더맨 — 노을 대교 + 거미줄 I LOVE YOU (풀블리드 밴드) */}
      <div
        id="spider-stage"
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, #2b1055 0%, #7b2a6b 30%, #e2543e 62%, #f5a35c 82%, #2b1055 100%)",
        }}
      >
        <div className="flex min-h-[130svh] flex-col items-center px-6 pt-28">
          <p className="chapter-tag" data-reveal>
            The Amazing Spider-Man — my favorite film
          </p>
          <p className="mt-4 max-w-md text-center text-sm leading-loose text-white/85" data-reveal>
            Andrew Garfield&#39;s Spider-Man.
            That bridge at sunset, a heart written in webs —
            recreated right here. Keep scrolling.
          </p>

          {/* 노을 + 다리 실루엣 + 거미줄 글씨 */}
          <svg
            viewBox="0 0 1440 640"
            className="mt-6 w-full max-w-6xl"
            aria-label="I LOVE YOU drawn in webs over a bridge at sunset"
          >
            {/* 태양 */}
            <circle cx="720" cy="330" r="90" fill="#ffd9a0" opacity="0.9" />
            <circle cx="720" cy="330" r="150" fill="#ffb36b" opacity="0.25" />

            {/* 거미줄 글씨 — 스크롤에 따라 그려짐 */}
            <text
              x="720"
              y="300"
              textAnchor="middle"
              fontSize="150"
              className="web-text"
            >
              I LOVE YOU
            </text>
            {/* 글씨를 매달고 있는 거미줄 가닥 */}
            <line x1="380" y1="0" x2="430" y2="215" stroke="#fff" strokeWidth="1" opacity="0.5" />
            <line x1="1060" y1="0" x2="1010" y2="215" stroke="#fff" strokeWidth="1" opacity="0.5" />
            {/* 매달린 스파이더맨 실루엣 (점) */}
            <line x1="1240" y1="0" x2="1240" y2="150" stroke="#fff" strokeWidth="1.2" opacity="0.6" />
            <circle cx="1240" cy="162" r="11" fill="#1a1030" />

            {/* 현수교 실루엣 */}
            <g fill="#1a1030">
              <rect x="0" y="520" width="1440" height="16" />
              <rect x="292" y="300" width="14" height="222" />
              <rect x="330" y="300" width="14" height="222" />
              <rect x="292" y="330" width="52" height="10" />
              <rect x="292" y="420" width="52" height="10" />
              <rect x="1094" y="300" width="14" height="222" />
              <rect x="1132" y="300" width="14" height="222" />
              <rect x="1094" y="330" width="52" height="10" />
              <rect x="1094" y="420" width="52" height="10" />
            </g>
            <path
              d="M 318 300 Q 720 545 1120 300"
              fill="none"
              stroke="#1a1030"
              strokeWidth="7"
            />
            <path d="M 0 380 Q 160 520 318 305" fill="none" stroke="#1a1030" strokeWidth="6" />
            <path d="M 1440 380 Q 1280 520 1120 305" fill="none" stroke="#1a1030" strokeWidth="6" />
            {/* 행어(수직 케이블) */}
            <g stroke="#1a1030" strokeWidth="2" opacity="0.8">
              <line x1="420" y1="360" x2="420" y2="520" />
              <line x1="520" y1="420" x2="520" y2="520" />
              <line x1="620" y1="460" x2="620" y2="520" />
              <line x1="720" y1="472" x2="720" y2="520" />
              <line x1="820" y1="460" x2="820" y2="520" />
              <line x1="920" y1="420" x2="920" y2="520" />
              <line x1="1020" y1="360" x2="1020" y2="520" />
            </g>
            {/* 바다 반짝임 */}
            <g fill="#ffdcae" opacity="0.5">
              <rect x="640" y="560" width="60" height="3" rx="1.5" />
              <rect x="700" y="580" width="90" height="3" rx="1.5" />
              <rect x="600" y="600" width="50" height="3" rx="1.5" />
              <rect x="760" y="612" width="60" height="3" rx="1.5" />
            </g>
          </svg>

          <div className="mb-28 mt-4 w-full max-w-xs" data-reveal>
            <Figure name="spiderman" label="The Amazing Spider-Man still (optional)" ratio="16 / 9" />
          </div>
        </div>
      </div>
    </ChapterShell>
  );
}
