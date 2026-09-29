'use client';

import React from 'react';
import { Compass, Flame, BookOpen, GraduationCap, Dice5 } from 'lucide-react';

export const SanctuaryHero: React.FC = () => {
  const personas = [
    {
      icon: Flame,
      title: 'Valheim Explorer',
      desc: 'Survival, hearth, & crafting di rimba berkabut',
      border: 'hover:border-[#e07a5f]/60',
      tagColor: 'text-[#e07a5f]',
      bgColor: 'bg-[#e07a5f]/10',
    },
    {
      icon: Dice5,
      title: 'Choice & Narrative Thinker',
      desc: 'Disco Elysium & The Wolf Among Us: every choice matters',
      border: 'hover:border-[#f4a261]/60',
      tagColor: 'text-[#f4a261]',
      bgColor: 'bg-[#f4a261]/10',
    },
    {
      icon: BookOpen,
      title: 'East Asian Lore',
      desc: 'Pesona lanskap alam Jepang, Korea & literatur Manhua',
      border: 'hover:border-[#2a9d8f]/60',
      tagColor: 'text-[#2a9d8f]',
      bgColor: 'bg-[#2a9d8f]/10',
    },
    {
      icon: GraduationCap,
      title: 'Software Artisan',
      desc: 'Rekayasa perangkat lunak mobile & cloud bernuansa Jogja',
      border: 'hover:border-[#81b29a]/60',
      tagColor: 'text-[#81b29a]',
      bgColor: 'bg-[#81b29a]/10',
    },
  ];

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6">
      {/* Background ambient radial warmth (Campfire & Pine Forest glow) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-b from-[#e07a5f]/10 via-[#2a9d8f]/5 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center">
        {/* Top Origin Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18222c] border border-[#e07a5f]/30 text-xs font-semibold text-[#f4a261] mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#e07a5f] animate-ping" />
          <span>The Wanderer&apos;s Sanctuary &bull; Inspired by Jogja, Nordic Mists & Asian Lore</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-[#f4f1de] max-w-3xl">
          Wandering Between{' '}
          <span className="bg-gradient-to-r from-[#f4a261] via-[#e07a5f] to-[#e76f51] bg-clip-text text-transparent">
            Clean Code
          </span>
          , Misty Pines &{' '}
          <span className="bg-gradient-to-r from-[#2a9d8f] via-[#52b788] to-[#81b29a] bg-clip-text text-transparent">
            Ancient Lore
          </span>
        </h1>

        {/* Narrative Bio */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-[#b8bdab] max-w-2xl leading-relaxed">
          Salam pengembara! Saya <strong className="text-[#f4f1de]">Harits</strong>. 
          Mahasiswa Rekayasa Perangkat Lunak yang merajut arsitektur aplikasi mobile native, platform cloud nir-server, dan repositori digital yang dijiwai oleh ketenangan alam Asia Timur, semangat petualangan survival, serta kehangatan tanah Yogyakarta.
        </p>

        {/* Persona Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 w-full max-w-3xl text-left">
          {personas.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-3.5 sm:p-4 rounded-2xl glass-slate border border-white/5 ${item.border} transition-all duration-300 hover:-translate-y-1 shadow-md flex flex-col justify-between`}
              >
                <div className={`w-8 h-8 rounded-xl ${item.bgColor} flex items-center justify-center mb-3`}>
                  <Icon className={`w-4 h-4 ${item.tagColor}`} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#f4f1de] mb-1">{item.title}</h4>
                  <p className="text-[11px] text-[#b8bdab] leading-snug line-clamp-2">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-9 w-full sm:w-auto">
          <a
            href="#chronicles"
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-[#e07a5f] to-[#f4a261] hover:from-[#f4a261] hover:to-[#e07a5f] text-[#0c1015] text-xs sm:text-sm font-bold shadow-lg shadow-[#e07a5f]/25 transition-all flex items-center justify-center gap-2 group active:scale-95"
          >
            <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            <span>Jelajahi Jurnal Karya (Chronicles)</span>
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-2xl glass-slate border border-[#2a9d8f]/30 hover:border-[#2a9d8f] text-[#f4f1de] text-xs sm:text-sm font-semibold transition-all hover:bg-[#18222c] shadow-md flex items-center justify-center gap-2"
          >
            <span>Kirim Pesan ke Pengembara</span>
          </a>
        </div>
      </div>
    </section>
  );
};
