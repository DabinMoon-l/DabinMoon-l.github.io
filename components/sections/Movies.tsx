import Figure from "@/components/Figure";

/** Chapter 2 — 영화: 시라트(SHOCK) + 어메이징 스파이더맨(거미줄 I LOVE YOU) */
export default function Movies() {
  return (
    <section id="movies">
      {/* 챕터 인트로 */}
      <div className="flex min-h-[50svh] flex-col items-center justify-center bg-[#1c1c22] px-6 text-center">
        <p className="chapter-tag" data-reveal>
          Chapter 2 — Cinema
        </p>
        <h2 className="brush mt-6 text-6xl text-white md:text-8xl" data-reveal>
          스크린이 남긴 것
        </h2>
      </div>

      {/* 2-1. 시라트 — SHOCK */}
      <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#1c1c22] via-[#4a3521] to-[#6b4a26] px-6 py-24 text-center">
        <p className="chapter-tag" data-reveal>
          Sirât — 가장 최근에 본, 가장 충격적인 영화
        </p>
        <h3 className="shock-text display mt-8 text-[24vw] text-white md:text-[15rem]">
          Shock
        </h3>
        <div className="mt-10 grid w-full max-w-3xl items-center gap-8 md:grid-cols-[1fr_1.2fr]">
          <div data-parallax="0.12">
            <Figure name="sirat" label="시라트 (Sirât) 포스터/스틸" ratio="2 / 3" />
          </div>
          <p className="text-left text-sm leading-loose text-white/80" data-reveal>
            사막 한복판의 레이브, 그리고 그 뒤에 이어지는 것들.
            보고 나서 한동안 아무 말도 못 했다.
            좋아한다고는 말 못 하겠다. 근데 잊을 수도 없다.
            영화가 사람을 이렇게까지 흔들 수 있다는 걸 알려준 작품.
          </p>
        </div>
      </div>

      {/* 2-2. 어메이징 스파이더맨 — 노을 대교 + 거미줄 I LOVE YOU */}
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
            The Amazing Spider-Man — 제일 좋아하는 영화
          </p>
          <p className="mt-4 max-w-md text-center text-sm leading-loose text-white/85" data-reveal>
            앤드류 가필드의 스파이더맨.
            노을 진 다리 위에 거미줄로 마음을 적던 그 장면을,
            이 페이지에 그대로 담았다. 스크롤을 내려보면.
          </p>

          {/* 노을 + 다리 실루엣 + 거미줄 글씨 */}
          <svg
            viewBox="0 0 1440 640"
            className="mt-6 w-full max-w-6xl"
            aria-label="노을 지는 대교 위에 거미줄로 그려지는 I LOVE YOU"
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
            <Figure name="spiderman" label="어메이징 스파이더맨 스틸 (선택)" ratio="16 / 9" />
          </div>
        </div>
      </div>
    </section>
  );
}
