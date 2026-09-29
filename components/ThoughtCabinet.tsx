'use client';

import React, { useState } from 'react';
import { Sparkles, Brain, CheckCircle2, MessageSquare, Compass, Dice5 } from 'lucide-react';
import { useChoiceNotice } from './ChoiceNotification';

interface ThoughtBranch {
  id: string;
  badge: string;
  title: string;
  description: string;
  internalMonologue: string;
  stat: string;
  accent: string;
  borderActive: string;
}

export const ThoughtCabinet: React.FC = () => {
  const { notify } = useChoiceNotice();
  const [selectedId, setSelectedId] = useState<string>('logic');

  const branches: ThoughtBranch[] = [
    {
      id: 'logic',
      badge: 'LOGIC & ARCHITECTURE',
      title: 'The Discipline of Clean Code',
      description: 'Prioritaskan arsitektur bersih, type safety mutlak, dan otomasi nir-server yang efisien.',
      internalMonologue: '"Arsitektur perangkat lunak adalah disiplin. Ketika fondasi sistem kokoh dan terpola dengan presisi, ia akan bertahan melewati badai komputasi apa pun."',
      stat: '+3 System Resilience',
      accent: 'text-[#f4a261]',
      borderActive: 'border-[#f4a261] bg-[#f4a261]/10',
    },
    {
      id: 'empathy',
      badge: 'EMPATHY & ZEN DESIGN',
      title: 'The Shelter in the Mist',
      description: 'Rancang antarmuka organik yang menenangkan jiwa, responsif, dan menghadirkan rasa damai bagi pengguna.',
      internalMonologue: '"Teknologi selayaknya menjadi tempat berteduh. Setiap mikro-interaksi dirancang untuk mempermudah, bukan membebani pikiran manusia."',
      stat: '+3 User Serenity',
      accent: 'text-[#2a9d8f]',
      borderActive: 'border-[#2a9d8f] bg-[#2a9d8f]/10',
    },
    {
      id: 'shivers',
      badge: 'SHIVERS & JOGJA HERITAGE',
      title: 'Hamemayu Hayuning Bawana',
      description: 'Selaraskan inovasi modern dengan nilai luhur Yogyakarta: menciptakan harmoni antara teknologi dan manusia.',
      internalMonologue: '"Kode tanpa jiwa hanyalah silikon dingin. Karya rekayasa sejati adalah yang memberi manfaat nyata, merawat keharmonisan kehidupan sesama."',
      stat: '+3 Cultural Harmony',
      accent: 'text-[#e07a5f]',
      borderActive: 'border-[#e07a5f] bg-[#e07a5f]/10',
    },
  ];

  const currentBranch = branches.find((b) => b.id === selectedId) || branches[0];

  const handleSelect = (branch: ThoughtBranch) => {
    setSelectedId(branch.id);
    notify(`Anda memilih "${branch.title}". Harits will remember that.`, 'telltale');
  };

  return (
    <section className="py-16 relative border-t border-white/5 bg-[#0a0e13]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4a261]/10 border border-[#f4a261]/30 text-xs font-semibold text-[#f4a261] uppercase tracking-wider mb-2">
            <Dice5 className="w-3.5 h-3.5" />
            <span>Interactive Decision Matrix</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#f4f1de] tracking-tight">
            The Thought Cabinet:{' '}
            <span className="bg-gradient-to-r from-[#f4a261] via-[#e07a5f] to-[#2a9d8f] bg-clip-text text-transparent">
              Choices Matter
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-[#b8bdab] max-w-lg mt-2 leading-relaxed">
            Terinspirasi dari sistem dialog bercabang di <em>Disco Elysium</em> & <em>The Wolf Among Us</em>. Dalam software engineering, setiap keputusan arsitektur adalah pilihan yang memiliki konsekuensi nyata.
          </p>
        </div>

        {/* The Choice Matrix Box */}
        <div className="p-6 sm:p-8 rounded-3xl glass-slate border border-[#f4a261]/25 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-[#81b29a] mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#f4a261]" />
            <span>PROMPT: Pendekatan mana yang paling penting dalam merancang sebuah sistem perangkat lunak?</span>
          </div>

          {/* 3 Selectable Branches */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            {branches.map((b) => {
              const isSelected = b.id === selectedId;
              return (
                <button
                  key={b.id}
                  onClick={() => handleSelect(b)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? `${b.borderActive} shadow-lg shadow-black/40`
                      : 'border-white/10 bg-[#0c1015]/60 hover:border-white/20'
                  }`}
                >
                  <div>
                    <span className={`text-[10px] font-mono font-bold tracking-wider ${b.accent}`}>
                      [{b.badge}]
                    </span>
                    <h4 className="text-sm font-bold text-[#f4f1de] mt-1 mb-1.5 leading-snug">
                      {b.title}
                    </h4>
                    <p className="text-xs text-[#b8bdab] leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#81b29a]">
                    <span>{b.stat}</span>
                    {isSelected && <span className="text-xs font-bold text-[#f4a261]">● AKTIF</span>}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Internal Monologue Response Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0c1015] border border-white/10 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#18222c] border border-white/10 flex items-center justify-center text-[#f4a261] shrink-0 mt-0.5 shadow-inner">
              <Brain className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-[#f4a261] uppercase tracking-wider mb-1">
                Refleksi Narasi &bull; Harits Detya
              </div>
              <p className="text-xs sm:text-sm text-[#f4f1de] italic leading-relaxed">
                {currentBranch.internalMonologue}
              </p>
              <div className="mt-2 text-[10px] font-mono text-[#81b29a]">
                ★ [Harits will remember that you value {currentBranch.title.toLowerCase()}]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
