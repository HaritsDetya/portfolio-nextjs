import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#0a0a0f] flex flex-col justify-center items-center overflow-hidden mx-auto min-h-screen text-[#bfc7d5] selection:bg-[#c3e88d]/20 selection:text-[#c3e88d]">
      {/* Terminal Window Tabs Navbar */}
      <Navbar />

      <div className="w-full">
        {/* Terminal Typewriter Shell Hero */}
        <Hero />

        {/* Directory Listing Projects */}
        <Projects />

        {/* Neofetch & Htop Skills Section */}
        <Skills />

        {/* Tmux/CLI Statusline Footer */}
        <Footer />
      </div>
    </main>
  );
}
