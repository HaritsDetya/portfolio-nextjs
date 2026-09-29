import React from "react";
import { AmbientFireflies } from "@/components/AmbientFireflies";
import { AudioLounge } from "@/components/AudioLounge";
import { SanctuaryNav } from "@/components/SanctuaryNav";
import { SanctuaryHero } from "@/components/SanctuaryHero";
import { ChroniclesProjects } from "@/components/ChroniclesProjects";
import { ForgeSkills } from "@/components/ForgeSkills";
import { SanctuaryFooter } from "@/components/SanctuaryFooter";

export default function Home() {
  return (
    <main className="relative bg-[#0c1015] flex flex-col justify-center items-center overflow-hidden mx-auto min-h-screen text-[#f4f1de] selection:bg-[#e07a5f]/30 selection:text-[#f4f1de]">
      {/* Ambient Canvas: Gentle Embers & Fireflies */}
      <AmbientFireflies />

      {/* Floating Audio Lounge (Zen Chimes / Soundwave) */}
      <AudioLounge />

      {/* Sanctuary Top Navigation with Yogyakarta Live Clock */}
      <SanctuaryNav />

      <div className="w-full relative z-10">
        {/* Hero Section: The Wanderer's Sanctuary */}
        <SanctuaryHero />

        {/* Chronicles & Digital Vaults Showcase */}
        <ChroniclesProjects />

        {/* The Artisan's Forge: Technical Arsenal & Philosophy */}
        <ForgeSkills />

        {/* Send a Raven Footer */}
        <SanctuaryFooter />
      </div>
    </main>
  );
}
