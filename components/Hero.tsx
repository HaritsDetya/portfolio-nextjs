'use client';

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { ArrowDown, Code2, MapPin, GraduationCap } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Background Ambient Spotlights */}
      <div className="pointer-events-none">
        <Spotlight
          className="-top-32 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="rgba(16, 185, 129, 0.35)"
        />
        <Spotlight
          className="top-10 left-full h-[85vh] w-[50vw]"
          fill="rgba(6, 182, 212, 0.28)"
        />
        <Spotlight
          className="top-36 left-1/3 h-[75vh] w-[45vw]"
          fill="rgba(245, 158, 11, 0.15)"
        />
      </div>

      {/* Grid Overlay with Radial Fade */}
      <div className="h-full w-full bg-[#06090e] bg-grid-white/[0.025] flex items-center justify-center absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#06090e] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#06090e)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center px-4">
        {/* Top Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold mb-6 backdrop-blur-md shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Software Engineering Student &bull; Universitas Gadjah Mada</span>
        </div>

        {/* Dynamic Animated Headline */}
        <TextGenerateEffect
          className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight max-w-3xl"
          words="Crafting Scalable Systems & High-Impact Digital Products"
        />

        {/* Narrative Bio */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Hi, I&apos;m <span className="text-white font-bold">Muhammad Harits Detya Irawan</span>. 
          Focusing on mobile app development, modern cloud architectures, and fullstack engineering with clean, performant code.
        </p>

        {/* Quick Highlights Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 text-xs text-zinc-400 font-medium">
          <div className="flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-800/80 px-3 py-1.5 rounded-lg">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
            <span>TRPL UGM</span>
          </div>
          <div className="flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-800/80 px-3 py-1.5 rounded-lg">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Mobile & Fullstack</span>
          </div>
          <div className="flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-800/80 px-3 py-1.5 rounded-lg">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Yogyakarta, Indonesia</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-8 sm:mt-10 w-full sm:w-auto">
          <a href="#projects" className="w-full sm:w-auto">
            <MagicButton
              title="Explore Featured Projects"
              icon={<ArrowDown className="w-4 h-4" />}
              position="right"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-harits-d-i/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-zinc-700/80 bg-zinc-900/70 hover:bg-zinc-800 text-zinc-200 text-sm font-semibold transition-all hover:border-zinc-500 shadow-md text-center"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
