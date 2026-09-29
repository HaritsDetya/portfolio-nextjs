'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HOSTNAME = 'harits@portfolio';
const PATH = '~';
const TYPING_SPEED = 55; // ms per character

type LineKind = 'prompt' | 'output' | 'blank';

interface Line {
  kind: LineKind;
  cmd?: string;
  text?: string;
  color?: string;
}

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export const Hero = () => {
  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [done, setDone] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    const run = async () => {
      await sleep(600);

      // ─── Command 1: whoami ───────────────────────────────
      if (!mountedRef.current) return;
      let cmd = 'whoami';
      for (const ch of cmd) {
        if (!mountedRef.current) return;
        setTyping((p) => p + ch);
        await sleep(TYPING_SPEED + Math.random() * 30);
      }
      await sleep(180);
      if (!mountedRef.current) return;
      setLines((p) => [...p, { kind: 'prompt', cmd }]);
      setTyping('');
      await sleep(120);

      const whoamiOutput: [string, string][] = [
        ['  name       ', 'Muhammad Harits Detya Irawan'],
        ['  role       ', 'Software Engineering Student'],
        ['  university ', 'Universitas Gadjah Mada (UGM)'],
        ['  focus      ', 'Mobile Dev & Fullstack Engineering'],
        ['  location   ', 'Yogyakarta, Indonesia 🇮🇩'],
      ];
      const whoamiColors = ['text-[#bfc7d5]', 'text-[#c3e88d]', 'text-[#89ddff]', 'text-[#c792ea]', 'text-[#ffcb6b]'];
      for (let i = 0; i < whoamiOutput.length; i++) {
        if (!mountedRef.current) return;
        const [key, val] = whoamiOutput[i];
        setLines((p) => [...p, {
          kind: 'output',
          text: `${key}${val}`,
          color: whoamiColors[i],
        }]);
        await sleep(90);
      }

      setLines((p) => [...p, { kind: 'blank' }]);
      await sleep(500);

      // ─── Command 2: cat skills.txt ───────────────────────
      if (!mountedRef.current) return;
      cmd = 'cat skills.txt';
      for (const ch of cmd) {
        if (!mountedRef.current) return;
        setTyping((p) => p + ch);
        await sleep(TYPING_SPEED + Math.random() * 20);
      }
      await sleep(180);
      if (!mountedRef.current) return;
      setLines((p) => [...p, { kind: 'prompt', cmd }]);
      setTyping('');
      await sleep(120);

      const skillsOutput: [string, string, string][] = [
        ['  mobile  ', '→ ', 'Kotlin · Android Jetpack · Jetpack Compose · MVVM'],
        ['  web     ', '→ ', 'Next.js · React 19 · TypeScript · Tailwind CSS v4'],
        ['  backend ', '→ ', 'Node.js · REST API · GraphQL · Prisma ORM'],
        ['  database', '→ ', 'PostgreSQL · SQLite · Room DB · Supabase'],
        ['  tools   ', '→ ', 'Git · GitHub CI/CD · Vercel · Android Studio'],
      ];
      const skillColors = [
        'text-[#c3e88d]', 'text-[#89ddff]', 'text-[#c792ea]',
        'text-[#ffcb6b]', 'text-[#f78c6c]',
      ];
      for (let i = 0; i < skillsOutput.length; i++) {
        if (!mountedRef.current) return;
        const [key, arrow, val] = skillsOutput[i];
        setLines((p) => [...p, {
          kind: 'output',
          text: `${key}${arrow}${val}`,
          color: skillColors[i],
        }]);
        await sleep(100);
      }

      setLines((p) => [...p, { kind: 'blank' }]);
      await sleep(500);

      // ─── Command 3: ls projects/ ─────────────────────────
      if (!mountedRef.current) return;
      cmd = 'ls projects/';
      for (const ch of cmd) {
        if (!mountedRef.current) return;
        setTyping((p) => p + ch);
        await sleep(TYPING_SPEED + Math.random() * 25);
      }
      await sleep(180);
      if (!mountedRef.current) return;
      setLines((p) => [...p, { kind: 'prompt', cmd }]);
      setTyping('');
      await sleep(120);

      setLines((p) => [
        ...p,
        { kind: 'output', text: '  game-vault/     watch-vault/     read-vault/     android-apps/', color: 'text-[#89ddff]' },
      ]);

      setLines((p) => [...p, { kind: 'blank' }]);
      await sleep(400);

      // ─── Final cursor ────────────────────────────────────
      if (!mountedRef.current) return;
      setDone(true);
    };

    run();
    return () => { mountedRef.current = false; };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Very subtle ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#82aaff]/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-[#c3e88d]/[0.04] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Status line above terminal */}
        <div className="flex items-center gap-2 mb-3 text-[11px] text-[#4a4a6a]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c3e88d] animate-pulse" />
          <span>terminal — interactive shell</span>
          <span className="ml-auto hidden sm:block">UTF-8 · sh · 80×24</span>
        </div>

        {/* Terminal Window */}
        <div className="term-window">
          {/* Title bar */}
          <div className="term-titlebar">
            <span className="term-dot bg-[#ff5370]/80" />
            <span className="term-dot bg-[#ffcb6b]/80" />
            <span className="term-dot bg-[#c3e88d]/80" />
            <span className="ml-3 text-[11px] text-[#4a4a6a] flex-1 text-center">
              <span className="t-prompt">harits</span>
              <span className="t-dim">@</span>
              <span className="t-green">portfolio</span>
              <span className="t-dim">: </span>
              <span className="t-cyan">~</span>
            </span>
            <span className="text-[10px] text-[#252535]">⊞</span>
          </div>

          {/* Terminal body */}
          <div className="p-4 sm:p-6 min-h-[380px] sm:min-h-[420px] relative">
            {/* Rendered lines */}
            {lines.map((line, idx) => {
              if (line.kind === 'blank') {
                return <div key={idx} className="h-3" />;
              }
              if (line.kind === 'prompt') {
                return (
                  <div key={idx} className="flex items-start gap-0 mb-0.5 text-xs sm:text-sm leading-6">
                    <span className="t-prompt shrink-0">{HOSTNAME}</span>
                    <span className="t-dim shrink-0">:</span>
                    <span className="t-cyan shrink-0">{PATH}</span>
                    <span className="t-dim shrink-0">$ </span>
                    <span className="t-white">{line.cmd}</span>
                  </div>
                );
              }
              return (
                <div key={idx} className={`text-xs sm:text-sm leading-6 mb-0.5 ${line.color || 'text-[#bfc7d5]'}`}>
                  {line.text}
                </div>
              );
            })}

            {/* Currently typing line */}
            {!done && (
              <div className="flex items-center gap-0 text-xs sm:text-sm leading-6">
                <span className="t-prompt">{HOSTNAME}</span>
                <span className="t-dim">:</span>
                <span className="t-cyan">{PATH}</span>
                <span className="t-dim">$ </span>
                <span className="t-white">{typing}</span>
                <span className="term-cursor" />
              </div>
            )}

            {/* Final cursor after animation */}
            {done && (
              <div className="flex items-center gap-0 text-xs sm:text-sm leading-6">
                <span className="t-prompt">{HOSTNAME}</span>
                <span className="t-dim">:</span>
                <span className="t-cyan">{PATH}</span>
                <span className="t-dim">$ </span>
                <span className="term-cursor" />
              </div>
            )}
          </div>
        </div>

        {/* CTA row below terminal */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#c3e88d]/10 hover:bg-[#c3e88d]/20 text-[#c3e88d] border border-[#c3e88d]/30 hover:border-[#c3e88d]/60 rounded text-xs font-medium transition-all"
          >
            <span className="t-dim">$</span>
            <span>cd projects/</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-harits-d-i/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent hover:bg-[#1a1a24] text-[#4a4a6a] hover:text-[#bfc7d5] border border-[#252535] hover:border-[#82aaff]/40 rounded text-xs font-medium transition-all"
          >
            <span className="t-dim">$</span>
            <span>open linkedin</span>
          </a>
          <span className="text-[11px] t-dim hidden sm:block ml-auto">
            # scroll to explore ↓
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
