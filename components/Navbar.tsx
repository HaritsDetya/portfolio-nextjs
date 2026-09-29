'use client';

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const NAV_ITEMS = [
  { label: '~', href: '#', title: 'home' },
  { label: 'projects/', href: '#projects', title: 'projects' },
  { label: 'skills/', href: '#skills', title: 'skills' },
  { label: 'contact/', href: '#contact', title: 'contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('~');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/95 border-b border-[#252535] backdrop-blur-md shadow-lg shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      {/* Title bar row */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-2 border-b border-[#252535]/60">
        {/* Traffic lights + title */}
        <div className="flex items-center gap-3">
          {/* Decorative dots */}
          <div className="flex items-center gap-1.5">
            <span className="term-dot bg-[#ff5370]/80" />
            <span className="term-dot bg-[#ffcb6b]/80" />
            <span className="term-dot bg-[#c3e88d]/80" />
          </div>
          <span className="text-[11px] text-[#4a4a6a] hidden sm:inline">
            <span className="t-prompt">harits</span>
            <span className="t-dim">@</span>
            <span className="t-green">portfolio</span>
            <span className="t-dim">:</span>
            <span className="t-cyan">~</span>
          </span>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-1">
          <a
            href="https://github.com/HaritsDetya"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded t-dim hover:t-green transition-colors hover:bg-[#c3e88d]/10 text-[#4a4a6a] hover:text-[#c3e88d]"
          >
            <FaGithub className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-harits-d-i/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded t-dim hover:t-cyan transition-colors hover:bg-[#89ddff]/10 text-[#4a4a6a] hover:text-[#89ddff]"
          >
            <FaLinkedin className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Tab navigation row */}
      <div className="flex items-center gap-0 px-4 sm:px-6 bg-[#13131a]/80 overflow-x-auto">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActive(item.label)}
            className={`relative px-4 py-2 text-[11px] sm:text-xs font-medium whitespace-nowrap transition-all border-r border-[#252535]/60 flex items-center gap-1.5 group ${
              active === item.label
                ? 'bg-[#0a0a0f] text-[#c3e88d] border-t-2 border-t-[#c3e88d] -mt-px'
                : 'text-[#4a4a6a] hover:text-[#bfc7d5] hover:bg-[#1a1a24]'
            }`}
          >
            {/* Folder icon decoration */}
            <span className={`text-[10px] ${active === item.label ? 'text-[#89ddff]' : 'text-[#252535] group-hover:text-[#4a4a6a]'}`}>
              {item.label === '~' ? '⌂' : '📁'}
            </span>
            <span>{item.label}</span>
          </a>
        ))}
        {/* Filler right side */}
        <div className="flex-1 border-t border-[#252535]/0" />
      </div>
    </header>
  );
};
