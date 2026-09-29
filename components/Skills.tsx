'use client';

import React, { useState } from 'react';
import { 
  Cpu, Smartphone, Database, Cloud, Terminal, 
  Check, Copy 
} from 'lucide-react';

export const Skills = () => {
  const [copied, setCopied] = useState(false);

  const skillGroups = [
    {
      title: 'Mobile Engineering',
      icon: Smartphone,
      accent: 'text-cyan-400',
      skills: ['Kotlin', 'Android Jetpack', 'Jetpack Compose', 'MVVM Architecture', 'Room DB', 'Retrofit API', 'Coroutines']
    },
    {
      title: 'Web & Cloud Platforms',
      icon: Cloud,
      accent: 'text-emerald-400',
      skills: ['Next.js (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Vercel Serverless', 'REST & GraphQL APIs']
    },
    {
      title: 'Databases & Backend Tools',
      icon: Database,
      accent: 'text-amber-400',
      skills: ['PostgreSQL / Supabase', 'SQLite / Room', 'Prisma ORM', 'Node.js', 'Git / GitHub CI/CD']
    }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('haritsdetya@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="skills" className="py-20 relative border-t border-white/5 bg-[#06090e]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Core <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Tech Stack</span> & Architecture
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-lg mt-3">
            Kombinasi teknologi yang biasa saya gunakan untuk merancang aplikasi mobile responsif dan sistem web berbasis cloud.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-[#090d16]/80 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${group.accent}`} />
                  </div>
                  <h3 className="text-base font-bold text-white">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800/80 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Terminal / Quick Contact Bento Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c121f] to-[#070b12] border border-emerald-500/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Available for Opportunities</span>
              </div>
              <h4 className="text-lg sm:text-xl font-black text-white">Let&apos;s Build Something Impactful</h4>
              <p className="text-xs sm:text-sm text-zinc-400">Tertarik berkolaborasi dalam pengembangan aplikasi mobile atau web?</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="mailto:haritsdetya@gmail.com"
              className="flex-1 md:flex-none px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs sm:text-sm text-center shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
            >
              Kirim Email
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
              <span>{copied ? 'Tersalin!' : 'Salin Email'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
