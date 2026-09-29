'use client';

import React, { useState, useEffect } from 'react';
import { Code2, FolderGit2, User, Cpu, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Code2, href: '#' },
    { id: 'projects', label: 'Projects', icon: FolderGit2, href: '#projects' },
    { id: 'about', label: 'About', icon: User, href: '#skills' },
    { id: 'skills', label: 'Tech Stack', icon: Cpu, href: '#skills' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
  ];

  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-6 px-4 py-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#090d16]/85 border border-emerald-500/20 backdrop-blur-xl shadow-2xl shadow-black/80'
            : 'bg-[#090d16]/50 border border-white/10 backdrop-blur-md'
        }`}
      >
        {/* Brand / Monogram */}
        <a
          href="#"
          className="flex items-center gap-2 group pr-2 border-r border-white/10"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 p-[1px] shadow-sm shadow-emerald-500/30">
            <div className="w-full h-full bg-[#06090e] rounded-full flex items-center justify-center">
              <span className="text-xs font-black tracking-wider text-emerald-400">HD</span>
            </div>
          </div>
          <span className="hidden sm:inline text-xs font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">
            Harits Detya
          </span>
        </a>

        {/* Navigation links */}
        <div className="flex items-center gap-1 sm:gap-1.5 text-xs font-medium">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                className="px-2.5 sm:px-3 py-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
              >
                <Icon className="w-3.5 h-3.5 text-emerald-400/80" />
                <span className="hidden md:inline">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Social / External Links */}
        <div className="flex items-center gap-1.5 pl-2 border-l border-white/10">
          <a
            href="https://github.com/HaritsDetya"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-zinc-400 hover:text-emerald-400 transition-colors rounded-lg hover:bg-white/5"
            title="GitHub Profile"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-harits-d-i/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-zinc-400 hover:text-teal-400 transition-colors rounded-lg hover:bg-white/5"
            title="LinkedIn Profile"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
        </div>
      </nav>
    </header>
  );
};
