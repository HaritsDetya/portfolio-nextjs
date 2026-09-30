'use client';

import React, { useState } from 'react';
import { Hammer, Smartphone, Cloud, Database, Check, Copy, Scroll } from 'lucide-react';
import { useChoiceNotice } from './ChoiceNotification';

export const ForgeSkills: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { notify } = useChoiceNotice();

  const forgePillars = [
    {
      title: 'Mobile Architecture',
      subtitle: 'Native Android Weaponry',
      icon: Smartphone,
      accent: 'text-[#2a9d8f]',
      skills: ['Kotlin', 'Android Jetpack', 'Jetpack Compose', 'MVVM Architecture', 'Room DB', 'Retrofit API', 'Coroutines & Flow']
    },
    {
      title: 'Cloud & Modern Web',
      subtitle: 'Serverless Sanctuary Platforms',
      icon: Cloud,
      accent: 'text-[#f4a261]',
      skills: ['Next.js 16 (App Router)', 'React 19', 'TypeScript', 'GraphQL & REST APIs', 'Tailwind CSS v4', 'Vercel Serverless']
    },
    {
      title: 'Data & Developer Tools',
      subtitle: 'Resilient Foundations',
      icon: Database,
      accent: 'text-[#e07a5f]',
      skills: ['PostgreSQL', 'SQLite', 'Supabase', 'Prisma ORM', 'Git & GitHub CI/CD', 'Android Studio & VS Code']
    }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('muhammadharitsdetyairawan2004@mail.ugm.ac.id');
    setCopied(true);
    notify('Salin korespondensi email. Harits will remember that.', 'skillcheck', 'RHETORIC');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="forge" className="py-20 relative border-t border-white/5 bg-[#0a0e13]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a9d8f]/10 border border-[#2a9d8f]/30 text-xs font-semibold text-[#81b29a] uppercase tracking-wider mb-3">
            <Hammer className="w-3.5 h-3.5" />
            <span>The Artisan&apos;s Forge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f4f1de] tracking-tight">
            Craftsmanship &{' '}
            <span className="bg-gradient-to-r from-[#2a9d8f] via-[#52b788] to-[#f4a261] bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-[#b8bdab] text-xs sm:text-sm max-w-lg mt-3 leading-relaxed">
            Peralatan dan teknologi yang saya gunakan sehari-hari untuk menempa produk digital yang kokoh, cepat, dan menyenangkan digunakan.
          </p>
        </div>

        {/* Forge Pillars 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {forgePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl glass-slate border border-white/10 hover:border-[#f4a261]/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#18222c] border border-white/10 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${pillar.accent}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#f4f1de] leading-none mb-1">{pillar.title}</h3>
                    <p className="text-[11px] text-[#81b29a] font-medium">{pillar.subtitle}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {pillar.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl bg-[#0c1015] border border-white/5 text-xs font-medium text-[#f4f1de]/90 hover:border-[#e07a5f]/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Cultural & Philosophical Anchor Card (Hamemayu Hayuning Bawana) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#121a24] via-[#0f151c] to-[#0c1015] border border-[#f4a261]/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#f4a261]/15 border border-[#f4a261]/30 flex items-center justify-center text-[#f4a261] shrink-0 mt-1 sm:mt-0 shadow-inner">
              <Scroll className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#f4a261]">Filosofi Karya &bull; Yogyakarta</span>
              </div>
              <h4 className="text-lg sm:text-xl font-extrabold text-[#f4f1de] italic">
                &ldquo;Hamemayu Hayuning Bawana&rdquo;
              </h4>
              <p className="text-xs sm:text-sm text-[#b8bdab] max-w-2xl mt-1 leading-relaxed">
                Falsafah Jawa luhur yang menuntun etos rekayasa saya: menciptakan perangkat lunak bukan semata demi baris kode, melainkan karya teknologi yang membawa keharmonisan, estetika, dan kemanfaatan nyata bagi sesama.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={handleCopyEmail}
              className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-[#e07a5f] hover:bg-[#f4a261] text-[#0c1015] font-bold text-xs sm:text-sm text-center shadow-lg shadow-[#e07a5f]/25 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Email Tersalin!' : 'Salin Email'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
