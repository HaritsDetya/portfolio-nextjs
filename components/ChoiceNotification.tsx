'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Sparkles } from 'lucide-react';

interface NotificationData {
  id: number;
  text: string;
  type?: 'telltale' | 'skillcheck';
  skill?: string;
}

interface ChoiceContextType {
  notify: (text: string, type?: 'telltale' | 'skillcheck', skill?: string) => void;
}

const ChoiceContext = createContext<ChoiceContextType>({
  notify: () => {},
});

export const useChoiceNotice = () => useContext(ChoiceContext);

export const ChoiceNotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notices, setNotices] = useState<NotificationData[]>([]);

  const notify = useCallback((text: string, type: 'telltale' | 'skillcheck' = 'telltale', skill?: string) => {
    const id = Date.now();
    setNotices((prev) => [...prev, { id, text, type, skill }]);
    setTimeout(() => {
      setNotices((prev) => prev.filter((n) => n.id !== id));
    }, 4200);
  }, []);

  return (
    <ChoiceContext.Provider value={{ notify }}>
      {children}
      {/* Toast container in top-left or top-right, similar to Telltale / Disco Elysium */}
      <div className="fixed top-20 right-5 z-50 flex flex-col gap-2.5 pointer-events-none max-w-sm w-full">
        {notices.map((n) => (
          <div
            key={n.id}
            className="animate-in fade-in slide-in-from-top-4 duration-300 pointer-events-auto p-3.5 px-4 rounded-2xl glass-slate border border-[#f4a261]/40 shadow-2xl backdrop-blur-xl flex items-center gap-3 bg-[#101720]/95"
          >
            <div className="w-7 h-7 rounded-xl bg-[#e07a5f]/20 border border-[#e07a5f]/40 flex items-center justify-center text-[#f4a261] shrink-0">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            </div>
            <div className="text-left">
              {n.type === 'skillcheck' ? (
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2a9d8f]">
                  [{n.skill || 'PERCEPTION'} CHECK: SUCCESS]
                </div>
              ) : (
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#f4a261]">
                  [ ★ CHOICE RECORDED ]
                </div>
              )}
              <div className="text-xs font-semibold text-[#f4f1de] leading-snug">
                {n.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ChoiceContext.Provider>
  );
};
