'use client';

import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="border-t border-[#252535] bg-[#0a0a0f] py-12 text-xs font-mono">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Terminal status bar / tmux style */}
        <div className="p-3 bg-[#13131a] border border-[#252535] rounded-lg mb-8 flex flex-wrap items-center justify-between gap-3 text-[11px]">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#c3e88d] text-[#0a0a0f] font-bold">NORMAL</span>
            <span className="t-cyan font-semibold">~/portfolio</span>
            <span className="t-dim">|</span>
            <span className="t-purple">git:(master)</span>
            <span className="t-dim">|</span>
            <span className="t-green">● clean</span>
          </div>

          <div className="flex items-center gap-3 t-dim">
            <span className="hidden sm:inline">utf-8</span>
            <span>nextjs 16</span>
            <span className="text-[#c3e88d]">exit 0</span>
          </div>
        </div>

        {/* Content & Socials */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#252535]/40">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Terminal className="w-4 h-4 text-[#c3e88d]" />
              <span className="text-sm font-bold text-white">Muhammad Harits Detya Irawan</span>
            </div>
            <p className="text-[11px] t-dim">
              Software Engineering Student &bull; Universitas Gadjah Mada (UGM)
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/HaritsDetya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-[#13131a] border border-[#252535] text-[#82aaff] hover:text-[#c3e88d] hover:border-[#c3e88d]/40 transition-colors"
              title="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-harits-d-i/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-[#13131a] border border-[#252535] text-[#89ddff] hover:text-[#c3e88d] hover:border-[#c3e88d]/40 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:haritsdetya@gmail.com"
              className="p-2 rounded bg-[#13131a] border border-[#252535] text-[#ffcb6b] hover:text-[#c3e88d] hover:border-[#c3e88d]/40 transition-colors"
              title="Email"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="px-3 py-1.5 rounded bg-[#13131a] border border-[#252535] text-[#c3e88d] hover:bg-[#1a1a24] transition-all flex items-center gap-1.5 text-[11px] ml-2"
              title="Scroll to Top"
            >
              <span>cd ~</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright comment */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] t-dim">
          <p># &copy; {new Date().getFullYear()} Harits Detya. All rights reserved.</p>
          <p># built with Next.js 16, React 19 & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
