import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Harits Detya Irawan — Software Engineering & Fullstack Developer",
  description: "Portofolio Muhammad Harits Detya Irawan, mahasiswa Teknologi Rekayasa Perangkat Lunak UGM yang berfokus pada pengembangan aplikasi mobile, web, dan sistem berbasis cloud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#06090e] text-zinc-100 antialiased`}>
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
