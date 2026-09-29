'use client';

import React, { useState, useEffect } from 'react';
import { Compass, BookOpen, Hammer, Send, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const SanctuaryNav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);

    // Live clock in Yogyakarta time (WIB / UTC+7)
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('id-ID', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' WIB'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'Sanctuary', href: '#home', icon: Compass },
    { label: 'Chronicles', href: '#chronicles', icon: BookOpen },
    { label: 'The Forge', href: '#forge', icon: Hammer },
    { label: 'Send a Raven', href: '#contact', icon: Send },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 py-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? 'glass-slate bg-[#10161f]/90 border border-[#e07a5f]/30 shadow-2xl shadow-black/80'
            : 'glass-slate bg-[#121820]/60 border border-white/10 backdrop-blur-md'
        }`}
      >
        {/* Brand / Crest */}
        <a href="#home" className="flex items-center gap-2.5 pr-2 border-r border-white/10 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#e07a5f] to-[#f4a261] p-[1.5px] shadow-sm shadow-[#e07a5f]/40">
            <div className="w-full h-full bg-[#0c1015] rounded-full flex items-center justify-center">
              <span className="text-xs font-black tracking-wider text-[#f4a261]">HD</span>
            </div>
          </div>
          <div className="hidden lg:flex flex-col text-left">
            <span className="text-xs font-bold text-[#f4f1de] group-hover:text-[#f4a261] transition-colors leading-none">
              Harits Detya
            </span>
            <span className="text-[10px] text-[#81b29a] font-mono mt-0.5">
              7.79° S, 110.36° E
            </span>
          </div>
        </a>

        {/* Navigation Items */}
        <div className="flex items-center gap-1 sm:gap-1.5 text-xs font-medium">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="px-2.5 sm:px-3 py-1.5 rounded-full text-[#b8bdab] hover:text-[#f4f1de] hover:bg-white/5 transition-all flex items-center gap-1.5 group"
              >
                <Icon className="w-3.5 h-3.5 text-[#f4a261] group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Live Yogyakarta Time & Socials */}
        <div className="flex items-center gap-2 pl-2 border-l border-white/10">
          {time && (
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-mono text-[#81b29a] bg-[#18222c] px-2 py-0.5 rounded-md border border-white/5">
              <MapPin className="w-2.5 h-2.5 text-[#e07a5f]" />
              <span>{time}</span>
            </span>
          )}
          <a
            href="https://github.com/HaritsDetya"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-[#b8bdab] hover:text-[#f4a261] transition-colors rounded-lg hover:bg-white/5"
            title="GitHub Profile"
          >
            <FaGithub className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-harits-d-i/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-[#b8bdab] hover:text-[#2a9d8f] transition-colors rounded-lg hover:bg-white/5"
            title="LinkedIn Profile"
          >
            <FaLinkedin className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>
    </header>
  );
};
