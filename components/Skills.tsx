'use client';

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const NEOFETCH_INFO = [
  { key: 'OS', value: 'Human · Indonesian 🇮🇩', color: 'text-[#c3e88d]' },
  { key: 'Host', value: 'Universitas Gadjah Mada', color: 'text-[#89ddff]' },
  { key: 'Major', value: 'Software Engineering (TRPL)', color: 'text-[#c792ea]' },
  { key: 'Shell', value: 'TypeScript · Kotlin', color: 'text-[#ffcb6b]' },
  { key: 'IDE', value: 'VS Code · Android Studio', color: 'text-[#f78c6c]' },
  { key: 'Focus', value: 'Mobile Dev + Fullstack Web', color: 'text-[#c3e88d]' },
  { key: 'Deploy', value: 'Vercel · Google Play (soon)', color: 'text-[#89ddff]' },
  { key: 'Uptime', value: '21 years (and counting)', color: 'text-[#c792ea]' },
  { key: 'Status', value: 'Open to opportunities 🚀', color: 'text-[#ffcb6b]' },
];

const SKILLS_BARS = [
  { name: 'Kotlin / Android', level: 82, color: '#c792ea' },
  { name: 'Next.js / React', level: 78, color: '#89ddff' },
  { name: 'TypeScript', level: 75, color: '#c3e88d' },
  { name: 'REST API / GraphQL', level: 72, color: '#ffcb6b' },
  { name: 'Tailwind CSS', level: 85, color: '#f78c6c' },
  { name: 'SQL / Database', level: 65, color: '#c3e88d' },
];

const ASCII_LOGO = [
  '    ██╗  ██╗██████╗',
  '    ██║  ██║██╔══██╗',
  '    ███████║██║  ██║',
  '    ██╔══██║██║  ██║',
  '    ██║  ██║██████╔╝',
  '    ╚═╝  ╚═╝╚═════╝ ',
  '',
  '    Harits Detya ™',
];

export const Skills = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('haritsdetya@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="skills" className="py-16 sm:py-20 relative border-t border-[#252535]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Section command */}
        <div className="mb-6 text-xs sm:text-sm">
          <div className="flex items-center gap-0 mb-1">
            <span className="t-prompt">harits@portfolio</span>
            <span className="t-dim">:</span>
            <span className="t-cyan">~</span>
            <span className="t-dim">$ </span>
            <span className="t-white">neofetch --skills --contact</span>
          </div>
        </div>

        {/* Neofetch window */}
        <div className="term-window">
          <div className="term-titlebar">
            <span className="term-dot bg-[#ff5370]/80" />
            <span className="term-dot bg-[#ffcb6b]/80" />
            <span className="term-dot bg-[#c3e88d]/80" />
            <span className="ml-3 text-[11px] text-[#4a4a6a]">neofetch</span>
          </div>

          <div className="p-4 sm:p-6">
            {/* Neofetch Layout: ASCII left, info right */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-8">
              {/* ASCII Art / Logo */}
              <div className="shrink-0">
                <pre className="text-[11px] sm:text-xs leading-tight font-mono t-cyan select-none">
                  {ASCII_LOGO.join('\n')}
                </pre>
              </div>

              {/* System Info */}
              <div className="flex-1 min-w-0">
                {/* Username header */}
                <div className="text-sm sm:text-base font-semibold mb-1">
                  <span className="t-prompt">harits</span>
                  <span className="t-dim">@</span>
                  <span className="t-green">portfolio</span>
                </div>
                <div className="t-dim text-[11px] mb-3">
                  {'─'.repeat(28)}
                </div>

                {/* Info rows */}
                <div className="space-y-1">
                  {NEOFETCH_INFO.map(({ key, value, color }) => (
                    <div key={key} className="flex items-baseline gap-2 text-xs sm:text-sm">
                      <span className="t-cyan w-16 sm:w-20 shrink-0 text-right">{key}</span>
                      <span className="t-dim">:</span>
                      <span className={color}>{value}</span>
                    </div>
                  ))}
                </div>

                {/* Color palette blocks */}
                <div className="mt-4 flex items-center gap-0.5">
                  {['#ff5370','#ffcb6b','#c3e88d','#89ddff','#82aaff','#c792ea','#f78c6c','#bfc7d5'].map((c) => (
                    <div
                      key={c}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      style={{ backgroundColor: c }}
                      title={c}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Skill bars section */}
            <div className="border-t border-[#252535]/60 pt-6">
              <div className="text-[11px] t-dim mb-4">
                <span className="t-prompt">harits@portfolio</span>
                <span className="t-dim">:</span>
                <span className="t-cyan">~</span>
                <span className="t-dim">$ htop --skills</span>
              </div>

              <div className="space-y-2.5">
                {SKILLS_BARS.map(({ name, level, color }) => (
                  <div key={name} className="flex items-center gap-3 text-[11px] sm:text-xs">
                    <span className="w-36 sm:w-40 t-output shrink-0">{name}</span>
                    <div className="flex-1 h-2 bg-[#252535] rounded-sm overflow-hidden">
                      <div
                        className="h-full rounded-sm transition-all duration-1000"
                        style={{ width: `${level}%`, backgroundColor: color, opacity: 0.8 }}
                      />
                    </div>
                    <span className="w-8 text-right shrink-0" style={{ color }}>{level}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact card — styled as terminal command output */}
        <div className="mt-8">
          <div className="text-xs sm:text-sm mb-4">
            <span className="t-prompt">harits@portfolio</span>
            <span className="t-dim">:</span>
            <span className="t-cyan">~</span>
            <span className="t-dim">$ echo $CONTACT_INFO</span>
          </div>

          <div className="term-window">
            <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-[11px] t-dim mb-1"># available for internship, freelance & collaboration</div>
                <div className="text-sm sm:text-base font-semibold t-white">
                  Let&apos;s build something together
                </div>
                <div className="text-xs t-dim mt-0.5">haritsdetya@gmail.com</div>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href="mailto:haritsdetya@gmail.com"
                  className="flex-1 sm:flex-none px-4 py-2 text-xs bg-[#c3e88d]/10 hover:bg-[#c3e88d]/20 text-[#c3e88d] border border-[#c3e88d]/30 hover:border-[#c3e88d]/60 rounded transition-all text-center font-medium"
                >
                  → send email
                </a>
                <button
                  onClick={copyEmail}
                  className="px-4 py-2 text-xs bg-[#1a1a24] hover:bg-[#252535] t-dim hover:text-[#bfc7d5] border border-[#252535] rounded transition-all flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3 h-3 t-green text-[#c3e88d]" /> : <Copy className="w-3 h-3" />}
                  {copied ? 'copied!' : 'copy'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
