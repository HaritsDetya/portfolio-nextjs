import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#06090e] flex flex-col justify-center items-center overflow-hidden mx-auto min-h-screen text-slate-100 selection:bg-emerald-500 selection:text-black">
      {/* Floating Modern Navbar */}
      <Navbar />

      <div className="w-full">
        {/* Hero Section */}
        <Hero />

        {/* Featured Projects Showcase */}
        <Projects />

        {/* Skills & Bento Grid Section */}
        <Skills />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
