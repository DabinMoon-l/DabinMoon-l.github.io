import ChapterShell from "@/components/ChapterShell";
import Figure from "@/components/Figure";
import { Shuriken, Kunai, Leaf } from "@/components/deco";

/** Chapter I — 나루토 (히어로 포탈로 진입하므로 찢어진 전환 없음) */
export default function Naruto() {
  return (
    <ChapterShell
      id="naruto"
      bg="naruto-bg"
      tag="Chapter I"
      title="Naruto"
      torn={false}
      fallback="bg-gradient-to-b from-[#2a1506] via-[#3a1d08] to-[#170b03]"
      decor={
        <>
          <div className="float-slow absolute left-[7%] top-[14%] opacity-60"><Shuriken size={70} /></div>
          <div className="float-mid absolute right-[9%] top-[28%] opacity-50"><Kunai size={96} /></div>
          <div className="float-fast absolute left-[18%] bottom-[16%] text-orange-400/70"><Leaf size={38} /></div>
          <div className="float-mid absolute right-[22%] bottom-[24%] text-orange-300/50"><Leaf size={28} /></div>
        </>
      }
    >
      {/* 1-1. 이루카 & 나루토 — 중앙 정렬, 누끼 이미지 */}
      <div className="flex min-h-svh flex-col items-center justify-center px-6 py-28 text-center">
        <p className="chapter-tag" data-reveal>
          Iruka &amp; Naruto
        </p>
        <h3 className="display mt-5 text-5xl text-white md:text-7xl" data-reveal>
          Ramen &amp; Warmth
        </h3>
        <p className="mt-4 text-lg font-bold text-orange-300" data-reveal>
          The first one who believed.
        </p>
        <div className="mt-10 w-full max-w-md" data-parallax="0.12">
          <Figure name="naruto-iruka" label="Iruka & Naruto — cutout PNG" ratio="4 / 3" />
        </div>
        <p className="mt-10 max-w-xl text-base font-medium leading-relaxed text-white/90" data-reveal>
          Everyone looked away from the boy — except one teacher, who simply sat
          down and shared a bowl of ramen. This scene taught me what caring for
          someone really means. A single word of recognition can change a life.
        </p>
      </div>

      {/* 1-2. 사스케 & 이타치 */}
      <div className="flex min-h-svh flex-col items-center justify-center px-6 py-28 text-center">
        <p className="chapter-tag" data-reveal>
          Sasuke &amp; Itachi
        </p>
        <h3 className="display mt-5 text-5xl text-white md:text-7xl" data-reveal>
          Silent Love
        </h3>
        <p className="mt-4 text-lg font-bold text-indigo-300" data-reveal>
          Love that never says its name.
        </p>
        <div className="mt-10 w-full max-w-md" data-parallax="0.16">
          <Figure name="sasuke-itachi" label="Sasuke & Itachi — cutout PNG" ratio="4 / 3" />
        </div>
        <p className="mt-10 max-w-xl text-base font-medium leading-relaxed text-white/90" data-reveal>
          A single poke on the forehead, carrying everything left unsaid.
          These brothers showed me that clumsy love is still love —
          and honestly, I&#39;m probably that type too.
        </p>
      </div>

      {/* 1-3. 카카시 혼자 */}
      <div className="flex min-h-svh flex-col items-center justify-center px-6 py-28 text-center">
        <p className="chapter-tag" data-reveal>
          Kakashi — Solo
        </p>
        <h3 className="display mt-5 text-5xl text-white md:text-7xl" data-reveal>
          Alone, But Cool
        </h3>
        <p className="mt-4 text-lg font-bold text-slate-300" data-reveal>
          Always reading alone. Haha.
        </p>
        <div className="mt-10 w-full max-w-sm" data-parallax="0.1">
          <Figure name="kakashi" label="Kakashi — cutout PNG" ratio="3 / 4" />
        </div>
        <p className="mt-10 max-w-xl text-base font-medium leading-relaxed text-white/90" data-reveal>
          Kakashi is always off to the side with his book. I have my own quiet
          obsessions too — and that&#39;s exactly what comes next.
        </p>
      </div>
    </ChapterShell>
  );
}
