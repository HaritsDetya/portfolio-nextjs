'use client';

import React from 'react';
import { Send, MapPin, ArrowUp, Flame } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const SanctuaryFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="border-t border-white/10 bg-[#090d12] py-14 relative overflow-hidden">
      {/* Background warm ember gradient at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-36 bg-[#e07a5f]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Brand & Narrative */}
          <div className="max-w-md">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#e07a5f] to-[#f4a261] p-[1.5px]">
                <div className="w-full h-full bg-[#0c1015] rounded-full flex items-center justify-center">
                  <Flame className="w-4 h-4 text-[#f4a261]" />
                </div>
              </div>
              <h3 className="text-base font-bold text-[#f4f1de]">The Wanderer&apos;s Sanctuary</h3>
            </div>
            <p className="text-xs text-[#b8bdab] leading-relaxed mb-3">
              Software Engineering Student. Gemar menjelajahi dunia game survival, mendalami pesona alam Asia Timur, serta merancang arsitektur mobile dan cloud platform.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#81b29a]">
              <MapPin className="w-3.5 h-3.5 text-[#e07a5f]" />
              <span>Daerah Istimewa Yogyakarta, Indonesia</span>
            </div>
          </div>

          {/* Send a Raven / Contact Box */}
          <div className="p-5 rounded-2xl glass-slate border border-[#f4a261]/25 flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#f4a261] flex items-center gap-1">
                <Send className="w-3 h-3" />
                <span>Send a Raven</span>
              </span>
              <p className="text-xs font-semibold text-[#f4f1de] mt-0.5">Mari berdiskusi atau berkolaborasi</p>
              <a href="mailto:muhammadharitsdetyairawan@mail.ugm.ac.id" className="text-xs text-[#81b29a] hover:underline font-mono">
                muhammadharitsdetyairawan@mail.ugm.ac.id
              </a>
            </div>

            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              <a
                href="mailto:muhammadharitsdetyairawan@mail.ugm.ac.id"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#e07a5f] to-[#f4a261] text-[#0c1015] font-bold text-xs shadow-md transition-all hover:opacity-95"
              >
                Kirim Email
              </a>
              <a
                href="https://github.com/HaritsDetya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-[#18222c] border border-white/10 text-[#b8bdab] hover:text-[#f4f1de] transition-colors"
                title="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-harits-d-i/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-[#18222c] border border-white/10 text-[#b8bdab] hover:text-[#2a9d8f] transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-xl bg-[#18222c] border border-white/10 text-[#f4a261] hover:bg-[#e07a5f] hover:text-[#0c1015] transition-all ml-1"
                title="Kembali ke Atas"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Sub-row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#b8bdab]">
          <p>&copy; {new Date().getFullYear()} Harits. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[11px]">
            <span>Crafted in Yogyakarta with Next.js 16 &bull;</span>
            <span className="text-[#f4a261] flex items-center gap-1">
              <Flame className="w-3 h-3 fill-[#f4a261]" /> Warm Campfire Spirit
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
