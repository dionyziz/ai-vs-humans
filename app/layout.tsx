import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Machines vs Humans: The War",
  description: "A Timeline of Victories & Defeats — 100 BCE to 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/dreampulse/computer-modern-web-font@master/font.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
