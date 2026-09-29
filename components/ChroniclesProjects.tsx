'use client';

import React from 'react';
import { 
  Gamepad2, Film, BookOpen, 
  ArrowUpRight, Sparkles, CheckCircle2, Compass 
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface ChronicleItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  inspiration: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  accentBadge: string;
  borderGlow: string;
  icon: React.ElementType;
}

export const ChroniclesProjects: React.FC = () => {
  const chronicles: ChronicleItem[] = [
    {
      id: 'game-vault',
      title: 'GameVault',
      subtitle: 'The Valhalla Log & Game Backlog',
      description: 'Platform cloud pribadi untuk mendokumentasikan perjalanan bermain game lintas platform, panduan strategi boss, serta personal quest & achievement checklist.',
      inspiration: 'Lahir dari kecintaan pada survival adventure seperti Valheim dan mekanik game eksplorasi.',
      highlights: [
        'Otomasi metadata 500k+ judul game via RAWG API',
        'Quest Checklist & Personal Wiki catatan strategi',
        'Arsitektur cloud nir-server gratis di Vercel'
      ],
      techStack: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'RAWG API', 'Vercel'],
      liveUrl: 'https://game-vault-lac-zeta.vercel.app/',
      githubUrl: 'https://github.com/HaritsDetya/game-vault',
      accentBadge: 'bg-[#f4a261]/15 text-[#f4a261] border-[#f4a261]/30',
      borderGlow: 'hover:border-[#f4a261]/60',
      icon: Gamepad2
    },
    {
      id: 'watch-vault',
      title: 'WatchVault',
      subtitle: 'The Lantern Cinema & Screen Chronicle',
      description: 'Pelacak tontonan layar terpadu untuk film bioskop, serial anime favorit, dan drama Asia (Drakor) dengan fitur penambahan cepat episode (+1 Ep).',
      inspiration: 'Menghargai seni penceritaan visual dari anime Jepang, sinema Korea, dan film layar lebar.',
      highlights: [
        'Integrasi The Movie Database (TMDB API) resolusi tinggi',
        'Tombol instan +1 Episode langsung dari kartu tontonan',
        'Pelacak platform streaming & bioskop'
      ],
      techStack: ['Next.js 16', 'React 19', 'TMDB API', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://watch-vault-inky.vercel.app/',
      githubUrl: 'https://github.com/HaritsDetya/watch-vault',
      accentBadge: 'bg-[#e07a5f]/15 text-[#e07a5f] border-[#e07a5f]/30',
      borderGlow: 'hover:border-[#e07a5f]/60',
      icon: Film
    },
    {
      id: 'read-vault',
      title: 'ReadVault',
      subtitle: 'The Literature Pavilion (Manga • Manhwa • Manhua)',
      description: 'Perpustakaan digital untuk mengarsipkan bacaan Manga Jepang, Manhwa Korea, dan Manhua China dengan visual progress bar persentase chapter.',
      inspiration: 'Terinspirasi dari keindahan literatur komik Asia dan lanskap alam mistis pedesaan Timur.',
      highlights: [
        'Zero-Config AniList GraphQL API tanpa perlu kunci API',
        'Visual progress bar chapter & tombol cepat +1 Ch',
        'Catatan arc cerita, power system & ulasan karakter'
      ],
      techStack: ['Next.js 16', 'GraphQL', 'AniList API', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://read-vault-sable.vercel.app/',
      githubUrl: 'https://github.com/HaritsDetya/read-vault',
      accentBadge: 'bg-[#2a9d8f]/15 text-[#2a9d8f] border-[#2a9d8f]/30',
      borderGlow: 'hover:border-[#2a9d8f]/60',
      icon: BookOpen
    }
  ];

  return (
    <section id="chronicles" className="py-20 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e07a5f]/10 border border-[#e07a5f]/30 text-xs font-semibold text-[#f4a261] uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Artifacts of the Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f4f1de] tracking-tight">
            Chronicles &{' '}
            <span className="bg-gradient-to-r from-[#f4a261] via-[#e07a5f] to-[#2a9d8f] bg-clip-text text-transparent">
              Digital Vaults
            </span>
          </h2>
          <p className="text-[#b8bdab] text-xs sm:text-sm max-w-xl mt-3 leading-relaxed">
            Trilogi platform arsip digital pribadi yang dibangun mandiri untuk mengorganisir riwayat petualangan game, apresiasi sinema anime, dan literatur komik Asia.
          </p>
        </div>

        {/* 3-Column Chronicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chronicles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`group relative rounded-3xl p-6 glass-slate border border-white/10 ${item.borderGlow} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between overflow-hidden`}
              >
                <div>
                  {/* Top Bar: Icon, Title, Actions */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-[#18222c] border border-white/10 flex items-center justify-center text-[#f4a261] group-hover:scale-105 transition-transform shadow-inner shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${item.accentBadge}`}>
                          Cloud Sanctuary Vault
                        </span>
                        <h3 className="text-lg font-bold text-[#f4f1de] mt-0.5 group-hover:text-[#f4a261] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      {item.liveUrl && (
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 px-2.5 rounded-xl bg-[#18222c] hover:bg-[#e07a5f] hover:text-[#0c1015] text-[#f4f1de] border border-white/10 transition-all flex items-center gap-1 text-[11px] font-bold shadow-sm"
                          title="Buka Live Platform"
                        >
                          <span>Live</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                      {item.githubUrl && (
                        <a
                          href={item.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-[#18222c] hover:bg-white/10 text-[#b8bdab] hover:text-[#f4f1de] border border-white/10 transition-all"
                          title="Lihat Source Code GitHub"
                        >
                          <FaGithub className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-[#f4a261] mb-1.5">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-[#b8bdab] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Soul/Inspiration note */}
                  <div className="p-2.5 rounded-xl bg-[#0c1015]/60 border border-white/5 text-[11px] text-[#81b29a] italic mb-4 flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 shrink-0 text-[#f4a261] mt-0.5" />
                    <span className="leading-snug">&ldquo;{item.inspiration}&rdquo;</span>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-1.5 mb-5">
                    {item.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-[#f4f1de]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2a9d8f] shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack badges */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-1.5">
                  {item.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-lg bg-[#0c1015] border border-white/5 text-[10px] font-medium text-[#b8bdab]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
