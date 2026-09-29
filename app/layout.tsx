import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Muhammad Harits Detya Irawan — The Wanderer's Sanctuary",
  description: "Portofolio Muhammad Harits Detya Irawan — Mahasiswa TRPL UGM, penikmat petualangan survival, sastra Asia Timur, dan rekayasa perangkat lunak modern.",
  keywords: ["Muhammad Harits Detya Irawan", "UGM", "Yogyakarta", "Software Engineering", "Mobile Developer", "Valheim", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <body className={`${jakartaSans.variable} ${jetbrainsMono.variable} font-sans bg-[#0c1015] text-[#f4f1de] antialiased`}>
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
