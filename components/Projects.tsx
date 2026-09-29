'use client';

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface Project {
  id: string;
  name: string;
  type: 'dir' | 'file';
  perms: string;
  desc: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  accent: string;
  size: string;
  date: string;
}

const PROJECTS: Project[] = [
  {
    id: 'game-vault',
    name: 'game-vault',
    type: 'dir',
    perms: 'drwxr-xr-x',
    desc: 'Personal game backlog & wiki tracker. Otomasi metadata via RAWG API, quest checklist, custom notes.',
    tech: ['Next.js 16', 'TypeScript', 'RAWG API', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://game-vault-lac-zeta.vercel.app/',
    githubUrl: 'https://github.com/HaritsDetya/game-vault',
    accent: 'text-[#c792ea]',
    size: '4.2K',
    date: 'Sep 2026',
  },
  {
    id: 'watch-vault',
    name: 'watch-vault',
    type: 'dir',
    perms: 'drwxr-xr-x',
    desc: 'Movie, series & anime tracker. Episode progress tracking, TMDB metadata, +1 Ep quick button.',
    tech: ['Next.js 16', 'TMDB API', 'React 19', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://watch-vault-inky.vercel.app/',
    githubUrl: 'https://github.com/HaritsDetya/watch-vault',
    accent: 'text-[#f78c6c]',
    size: '3.8K',
    date: 'Sep 2026',
  },
  {
    id: 'read-vault',
    name: 'read-vault',
    type: 'dir',
    perms: 'drwxr-xr-x',
    desc: 'Manga, manhwa & manhua digital library. AniList GraphQL (no API key), chapter progress bar.',
    tech: ['Next.js 16', 'AniList GraphQL', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://read-vault-sable.vercel.app/',
    githubUrl: 'https://github.com/HaritsDetya/read-vault',
    accent: 'text-[#c3e88d]',
    size: '3.5K',
    date: 'Sep 2026',
  },
  {
    id: 'android-apps',
    name: 'android-apps',
    type: 'dir',
    perms: 'drwxr-xr-x',
    desc: 'Native Android applications. Clean Architecture MVVM, Jetpack Compose UI, REST API integration.',
    tech: ['Kotlin', 'Android Jetpack', 'Retrofit', 'Room DB', 'Coroutines'],
    githubUrl: 'https://github.com/HaritsDetya',
    accent: 'text-[#89ddff]',
    size: '8.1K',
    date: 'Aug 2026',
  },
];

export const Projects = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-20 relative border-t border-[#252535]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Section header — styled like a terminal command */}
        <div className="mb-6 text-xs sm:text-sm">
          <div className="flex items-center gap-0 mb-1">
            <span className="t-prompt">harits@portfolio</span>
            <span className="t-dim">:</span>
            <span className="t-cyan">~</span>
            <span className="t-dim">$ </span>
            <span className="t-white">ls -la projects/</span>
          </div>
          <div className="t-dim text-[11px] mb-4">
            total {PROJECTS.length} &nbsp;# sorted by date, most recent first
          </div>
        </div>

        {/* Directory listing */}
        <div className="term-window overflow-visible">
          {/* Title bar */}
          <div className="term-titlebar">
            <span className="term-dot bg-[#ff5370]/80" />
            <span className="term-dot bg-[#ffcb6b]/80" />
            <span className="term-dot bg-[#c3e88d]/80" />
            <span className="ml-3 text-[11px] text-[#4a4a6a]">
              <span className="t-cyan">~/projects</span>
            </span>
          </div>

          {/* ls header */}
          <div className="px-4 sm:px-6 pt-4 pb-2 text-[11px] t-dim border-b border-[#252535]/40 hidden sm:grid grid-cols-[120px_40px_60px_80px_1fr]">
            <span>permissions</span>
            <span>size</span>
            <span>date</span>
            <span>name</span>
            <span>description</span>
          </div>

          {/* Project entries */}
          <div className="divide-y divide-[#252535]/40">
            {PROJECTS.map((project) => (
              <div key={project.id}>
                {/* Main row */}
                <div
                  className="px-4 sm:px-6 py-3 sm:py-4 cursor-pointer hover:bg-[#1a1a24]/60 transition-colors group"
                  onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                >
                  {/* Mobile layout */}
                  <div className="flex items-center justify-between gap-3 sm:hidden">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="t-dim text-[11px]">d</span>
                      <span className={`font-semibold text-sm ${project.accent} truncate`}>
                        {project.name}/
                      </span>
                    </div>
                    <span className="t-dim text-[10px] shrink-0">{expanded === project.id ? '▼' : '▶'}</span>
                  </div>
                  <div className="sm:hidden text-[11px] t-dim mt-1 line-clamp-1">{project.desc}</div>

                  {/* Desktop layout */}
                  <div className="hidden sm:grid grid-cols-[120px_40px_60px_80px_1fr] items-center gap-2">
                    <span className="text-[11px] t-dim font-mono">{project.perms}</span>
                    <span className="text-[11px] t-amber">{project.size}</span>
                    <span className="text-[11px] t-dim">{project.date}</span>
                    <span className={`text-sm font-semibold ${project.accent} flex items-center gap-1`}>
                      {project.name}/
                    </span>
                    <span className="text-xs t-dim line-clamp-1 group-hover:text-[#bfc7d5] transition-colors">
                      {project.desc}
                    </span>
                  </div>
                </div>

                {/* Expanded detail */}
                {expanded === project.id && (
                  <div className="px-4 sm:px-6 pb-4 bg-[#0a0a0f]/50 border-t border-[#252535]/40">
                    {/* cat command simulation */}
                    <div className="pt-3 mb-3 text-[11px] t-dim">
                      <span className="t-prompt">harits@portfolio</span>
                      <span className="t-dim">:</span>
                      <span className="t-cyan">~/projects</span>
                      <span className="t-dim">$ cat {project.name}/README.md</span>
                    </div>

                    <p className="text-xs sm:text-sm t-output mb-4 leading-relaxed">{project.desc}</p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-[11px] bg-[#1a1a24] border border-[#252535] text-[#4a4a6a] rounded-sm">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action links */}
                    <div className="flex items-center gap-3 text-xs">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 t-green hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="t-dim">→</span>
                          open live demo
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 t-dim hover:t-output transition-colors hover:text-[#bfc7d5]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="w-3 h-3" />
                          source code
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer prompt */}
          <div className="px-4 sm:px-6 py-3 border-t border-[#252535]/40 text-[11px] t-dim">
            # click any entry to expand details
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
