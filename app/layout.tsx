import type { Metadata } from "next";
import { Archivo_Black, Nanum_Brush_Script, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

// 뚱뚱한 영문 디스플레이체 (SHOCK, 챕터 타이틀용)
const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

// 한글 붓글씨체 (나루토 컨셉의 핵심)
const brush = Nanum_Brush_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-brush",
});

// 본문체
const body = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "문다빈 MOON DABIN — Self Intro",
  description: "나루토를 좋아하는 문다빈의 자기소개 — The Naruto Edition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${display.variable} ${brush.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
