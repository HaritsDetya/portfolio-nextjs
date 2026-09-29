'use client';

import React, { useState } from 'react';
import { 
  Sparkles, Gamepad2, Film, 
  BookOpen, Smartphone, CheckCircle2, ArrowUpRight 
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface ProjectItem {
  id: string;
  title: string;
  category: 'CLOUD' | 'MOBILE';
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  accentColor: string;
  borderColor: string;
  bgGlow: string;
  icon: React.ElementType;
}

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'CLOUD' | 'MOBILE'>('ALL');

  const projects: ProjectItem[] = [
    {
      id: 'game-vault',
      title: 'GameVault',
      category: 'CLOUD',
      tagline: 'Personal Game Backlog & Wiki Platform',
      description: 'Platform cloud pribadi untuk mendokumentasikan perjalanan bermain game lintas platform, ulasan pribadi, serta panduan strategi dan checklist quest (*Personal Wiki*).',
      highlights: [
        'Otomasi metadata 500k+ judul via RAWG Video Games API',
        'Interactive Quest & Trophy Checklist per game',
        'Zero-cost serverless architecture di Vercel'
      ],
      techStack: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'RAWG API', 'Vercel'],
      liveUrl: 'https://game-vault-lac-zeta.vercel.app/',
      githubUrl: 'https://github.com/HaritsDetya/game-vault',
      accentColor: 'text-indigo-400',
      borderColor: 'hover:border-indigo-500/50',
      bgGlow: 'from-indigo-600/20 via-violet-600/10 to-transparent',
      icon: Gamepad2
    },
    {
      id: 'watch-vault',
      title: 'WatchVault',
      category: 'CLOUD',
      tagline: 'Movies, Series & Anime Screen Tracker',
      description: 'Pelacak tontonan layar terpadu untuk film bioskop, series drama (Drakor/Hollywood), dan serial anime dengan fitur pembaruan cepat episode.',
      highlights: [
        'Integrasi The Movie Database (TMDB API) dengan poster resolusi tinggi',
        'Tombol cepat +1 Episode langsung dari kartu tontonan',
        'Katalog platform streaming & bioskop'
      ],
      techStack: ['Next.js 16', 'React 19', 'TMDB API', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://watch-vault-inky.vercel.app/',
      githubUrl: 'https://github.com/HaritsDetya/watch-vault',
      accentColor: 'text-rose-400',
      borderColor: 'hover:border-rose-500/50',
      bgGlow: 'from-rose-600/20 via-pink-600/10 to-transparent',
      icon: Film
    },
    {
      id: 'read-vault',
      title: 'ReadVault',
      category: 'CLOUD',
      tagline: 'Manga, Manhwa & Manhua Digital Library',
      description: 'Platform arsip komik dan literatur bacaan Asia (Manga Jepang, Manhwa Korea, Manhua China) dengan pelacak progres chapter dan visual progress bar.',
      highlights: [
        'Zero-Config AniList GraphQL API tanpa memerlukan kunci API',
        'Progress bar persentase chapter dan tombol cepat +1 Ch',
        'Dokumentasi Markdown untuk catatan power system dan arc cerita'
      ],
      techStack: ['Next.js 16', 'GraphQL', 'AniList API', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://read-vault-sable.vercel.app/',
      githubUrl: 'https://github.com/HaritsDetya/read-vault',
      accentColor: 'text-emerald-400',
      borderColor: 'hover:border-emerald-500/50',
      bgGlow: 'from-emerald-600/20 via-teal-600/10 to-transparent',
      icon: BookOpen
    },
    {
      id: 'mobile-app-showcase',
      title: 'Smart Mobile & Android Solutions',
      category: 'MOBILE',
      tagline: 'Native Android & Hybrid Mobile Engineering',
      description: 'Pengembangan aplikasi mobile berbasis Android native dengan arsitektur MVVM bersih, integrasi REST API, dan manajemen state modern pada proyek akademik UGM.',
      highlights: [
        'Clean Architecture dengan Kotlin & Android Jetpack Components',
        'Integrasi REST API, Offline Caching Room Database',
        'Desain antarmuka responsif Material Design 3'
      ],
      techStack: ['Kotlin', 'Android Jetpack', 'Retrofit', 'Room DB', 'Coroutines'],
      githubUrl: 'https://github.com/HaritsDetya',
      accentColor: 'text-cyan-400',
      borderColor: 'hover:border-cyan-500/50',
      bgGlow: 'from-cyan-600/20 via-blue-600/10 to-transparent',
      icon: Smartphone
    }
  ];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Engineering</span> Works
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
            Koleksi aplikasi web berbasis cloud, sistem arsitektur data, dan aplikasi mobile yang dibangun dengan fokus pada performa dan pengalaman pengguna.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center gap-2 mt-8 p-1.5 rounded-2xl bg-zinc-900/80 border border-zinc-800">
            <button
              onClick={() => setActiveFilter('ALL')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'ALL'
                  ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Semua Proyek ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('CLOUD')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'CLOUD'
                  ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Cloud & Web Vaults (3)
            </button>
            <button
              onClick={() => setActiveFilter('MOBILE')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'MOBILE'
                  ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Mobile & Systems (1)
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className={`group relative rounded-3xl p-6 sm:p-8 bg-[#090d16]/80 border border-white/10 ${project.borderColor} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between overflow-hidden`}
              >
                {/* Background Ambient Glow on Hover */}
                <div
                  className={`absolute -top-24 -right-24 w-60 h-60 rounded-full bg-gradient-to-br ${project.bgGlow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div>
                  {/* Top Row: Icon & Action Links */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors shadow-inner">
                        <Icon className={`w-6 h-6 ${project.accentColor}`} />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                          {project.category === 'CLOUD' ? 'Cloud Platform' : 'Mobile Engineering'}
                        </span>
                        <h3 className="text-xl font-black text-white group-hover:text-emerald-300 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* External Buttons */}
                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-zinc-900 hover:bg-emerald-500 hover:text-zinc-950 text-zinc-300 border border-zinc-800 transition-all flex items-center gap-1 text-xs font-semibold shadow-sm"
                          title="Buka Live Website"
                        >
                          <span className="hidden sm:inline">Live Demo</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-all"
                          title="Source Code GitHub"
                        >
                          <FaGithub className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Tagline & Description */}
                  <p className="text-xs font-semibold text-zinc-300 mb-2">
                    {project.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${project.accentColor} shrink-0 mt-0.5`} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Tags Footer */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-zinc-950/80 border border-zinc-800/80 text-[11px] font-medium text-zinc-400 group-hover:border-zinc-700 transition-colors"
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

export default Projects;
