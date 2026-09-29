import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "harits@portfolio:~$ — Muhammad Harits Detya Irawan",
  description: "Software Engineering Student & Mobile Developer — Universitas Gadjah Mada. Passionate about building high-impact mobile and cloud applications.",
  keywords: ["Muhammad Harits Detya Irawan", "software engineer", "mobile developer", "android", "kotlin", "next.js", "UGM"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} font-mono bg-[#0a0a0f] text-[#bfc7d5] antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
