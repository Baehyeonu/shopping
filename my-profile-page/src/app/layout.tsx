import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const bodyFont = Noto_Sans_KR({
  subsets: ["korean", "latin"],
  weight: ["300", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Noto_Serif_KR({
  subsets: ["korean", "latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "김서연 | 프론트엔드 개발자",
  description:
    "프론트엔드 개발자 김서연의 자기소개 랜딩페이지. 사용자 경험과 성능을 함께 고려하는 작업 방식을 소개합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
