import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "刘佩 · 产品经理",
  description: "Betty 刘佩的个人主页 — 互联网产品经理、研究者、旅行者",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
