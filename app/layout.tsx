import type { Metadata } from "next";
import { Archivo_Black, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

// 뚱뚱한 영문 디스플레이체 (타이틀 전용 — 폰트는 이 둘로 통일)
const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

// 본문체
const body = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "MOON DABIN — Self Intro",
  description: "Moon Dabin Editions Winter '26 — a self-introduction in four chapters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
