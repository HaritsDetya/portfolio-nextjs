'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';

export const AudioLounge: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<any>(null);

  // Calming pentatonic melody notes (Hz): D minor / Asian Zen & Lofi scale
  const notes = [293.66, 329.63, 349.23, 440.0, 523.25, 587.33, 659.25, 698.46];

  const playChime = () => {
    try {
      const ctx = audioCtxRef.current;
      if (!ctx || ctx.state !== 'running') return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const note = notes[Math.floor(Math.random() * notes.length)];
      osc.type = 'sine';
      osc.frequency.setValueAtTime(note, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.045, ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 2.6);
    } catch {
      // AudioContext fallback
    }
  };

  const togglePlay = async () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    if (audioCtxRef.current.state === 'suspended') {
      await audioCtxRef.current.resume();
    }

    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      playChime();
      intervalRef.current = setInterval(() => {
        playChime();
      }, 3500);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <div className="flex items-center gap-3 p-2.5 px-3.5 rounded-2xl glass-slate border border-[#e07a5f]/30 shadow-2xl backdrop-blur-xl group hover:border-[#f4a261]/60 transition-all">
        {/* Equalizer animation bars */}
        <div className="flex items-end gap-1 h-4 w-4">
          <span className={`w-1 bg-[#f4a261] rounded-full transition-all duration-300 ${isPlaying ? 'h-4 animate-bounce' : 'h-1.5'}`} />
          <span className={`w-1 bg-[#2a9d8f] rounded-full transition-all duration-300 ${isPlaying ? 'h-3 animate-pulse' : 'h-1'}`} />
          <span className={`w-1 bg-[#e07a5f] rounded-full transition-all duration-300 ${isPlaying ? 'h-4 animate-bounce delay-150' : 'h-2'}`} />
        </div>

        {/* Track info */}
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#f4a261] flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5" />
            <span>Wanderer&apos;s Sanctuary Sound</span>
          </span>
          <span className="text-xs font-semibold text-[#f4f1de] line-clamp-1">
            {isPlaying ? 'Jogja Twilight & Zen Chimes' : 'Soundtrack: Click to Listen'}
          </span>
        </div>

        {/* Play / Mute button */}
        <button
          onClick={togglePlay}
          className="p-1.5 rounded-xl bg-[#24313d]/60 hover:bg-[#e07a5f] hover:text-[#0c1015] text-[#f4f1de] transition-all ml-1 shadow-sm"
          title={isPlaying ? 'Mute Sanctuary Chimes' : 'Play Sanctuary Chimes'}
        >
          {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 opacity-70" />}
        </button>
      </div>
    </div>
  );
};
