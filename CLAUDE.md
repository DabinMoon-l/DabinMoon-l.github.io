# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 프로젝트 개요

문다빈(Moon Dabin)의 자기소개 원페이지 사이트. 매거진 에디토리얼 스타일의 스크롤 연출 웹으로, 나루토 / 영화 / 인물 / 시리즈 4개 챕터로 구성된다. 페이지는 `app/page.tsx` 하나뿐이며, 라우팅·데이터 페칭 없이 스크롤 연출이 핵심이다.

- Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4
- GSAP ScrollTrigger + Lenis (부드러운 스크롤)
- ⚠️ Next.js 16은 학습 데이터와 다를 수 있음 — 코드 작성 전 `node_modules/next/dist/docs/`의 관련 가이드를 확인할 것 (AGENTS.md 참고)

## 명령어

```bash
npm run dev     # 개발 서버 (localhost:3000)
npm run build   # 프로덕션 빌드
npm run start   # 프로덕션 서버
```

린트/테스트는 설정되어 있지 않다.

## 아키텍처

### 애니메이션은 선언(마크업) / 구현(SmoothScroll) 분리 구조

핵심 패턴: 섹션 컴포넌트는 GSAP 코드를 직접 쓰지 않는다. 마크업에 data 속성이나 클래스만 선언하면, `components/SmoothScroll.tsx`가 마운트 시 전역으로 스캔해 GSAP ScrollTrigger 연출을 붙인다. 새 요소에 연출을 추가할 때는 아래 훅을 재사용하고, 새로운 연출 타입이 필요할 때만 SmoothScroll.tsx에 로직을 추가한다.

| 선언 | 연출 (SmoothScroll.tsx에 구현) |
|------|------|
| `data-reveal` | 스크롤 진입 시 아래에서 떠오르는 등장 |
| `data-parallax="0.2"` | 패럴랙스 (값이 클수록 많이 움직임) |
| `data-float` + `data-rot` | 콜라주 조각 드리프트 (위아래 흐름 + 회전) |
| `.figure` | 커튼 리빌 + 내부 img 켄 번즈 줌 |
| `.chapter` / `.chapter-bg` / `.chapter-overlay` | 배경 줌, 오버레이 다크닝, 챕터 끝 흑백화 |
| `.shock-text` | 특정 섹션 전용 원오프 연출 (시라트 SHOCK 등장 + 떨림) |

CSS 전용 연출(`.stepprint`, `.candle`, `.float-slow/mid/fast`, `.spin-slow`, `.rasengan-ring` 등)은 `app/globals.css`에 정의되어 있다.

### 페이지 구성

`app/page.tsx`가 유일한 페이지로, `<SmoothScroll>`이 전체를 감싸고 그 안에 TopBar / InfoRail(고정 UI) + 챕터 섹션들(`components/sections/`)이 순서대로 놓인다. 섹션들은 서버 컴포넌트이고, 클라이언트 컴포넌트는 상태·이펙트가 필요한 것들(`SmoothScroll`, `ChapterShell`, `Figure`, `BgImage`)뿐이다.

각 챕터 섹션은 `ChapterShell`을 사용한다: sticky 풀스크린 배경 + 거대 타이틀 + 배경 위로 올라오는 콘텐츠 + 찢어진 종이 가장자리(torn) 전환. 챕터 콘텐츠 블록은 `min-h-svh` 단위로 쌓는 패턴을 따른다. 나루토 챕터는 히어로의 나선환 포탈이 타이틀 화면 역할을 하므로 `titleScreen={false}`로 풀스크린 타이틀을 생략한다.

### 이미지 규약 (플레이스홀더 폴백)

이미지는 `next/image`가 아니라 `Figure` / `BgImage` / `ChapterShell`의 `<img>` 폴백 체인으로 처리한다: `public/assets/{name}.png → .jpg → .webp` 순으로 시도하고, 전부 없으면 안내 플레이스홀더(또는 그라디언트 fallback)를 보여준다. 파일명 규약과 필요한 이미지 목록은 `public/assets/README.md`에 있다. 새 이미지 슬롯을 추가하면 그 README 표도 갱신할 것.

### 스타일 규약

- 폰트는 두 가지로 통일: 타이틀은 Archivo Black(`.display` 클래스, `--font-display`), 본문은 Noto Sans KR(`--font-body`). `app/layout.tsx`에서 로드.
- Tailwind v4 방식: 설정 파일 없이 `app/globals.css`의 `@theme inline`으로 커스텀 색 정의 (`--color-ink` 배경 검정, `--color-naruto` 주황 포인트).
- 다크 톤 고정 디자인 (배경 `#0b0b0e`, 주황 `#f97316` 포인트). 라이트 모드 없음.
