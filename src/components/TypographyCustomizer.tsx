import React, { useState } from 'react';
import { Type, Check, ChevronDown, Sliders } from 'lucide-react';
import { ArabicFontChoice, EnglishFontChoice } from '../types';

interface TypographyCustomizerProps {
  arabicFont: ArabicFontChoice;
  englishFont: EnglishFontChoice;
  onArabicFontChange: (font: ArabicFontChoice) => void;
  onEnglishFontChange: (font: EnglishFontChoice) => void;
}

export const TypographyCustomizer: React.FC<TypographyCustomizerProps> = ({
  arabicFont,
  englishFont,
  onArabicFontChange,
  onEnglishFontChange
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const arabicOptions: { id: ArabicFontChoice; label: string; sample: string }[] = [
    { id: 'aref-ruqaa', label: 'Aref Ruqaa (رقعة - الفيديو)', sample: 'أحمد لاشين' },
    { id: 'amiri', label: 'Amiri Calligraphy (نسخ - أميري)', sample: 'أحمد لاشين' },
    { id: 'el-messiri', label: 'El Messiri (المسيري)', sample: 'أحمد لاشين' },
    { id: 'reem-kufi', label: 'Reem Kufi (كوفي)', sample: 'أحمد لاشين' }
  ];

  const englishOptions: { id: EnglishFontChoice; label: string; sample: string }[] = [
    { id: 'bodoni-moda', label: 'Bodoni Moda (Serif - الفيديو)', sample: 'AHMED LASHEEN' },
    { id: 'playfair-display', label: 'Playfair Display (Serif)', sample: 'AHMED LASHEEN' },
    { id: 'cinzel', label: 'Cinzel Decorative (Roman)', sample: 'AHMED LASHEEN' }
  ];

  return (
    <div className="fixed top-4 left-4 z-40">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass-card hover:bg-white/15 text-zinc-300 hover:text-white px-3 py-2 rounded-full border border-white/15 text-xs font-mono flex items-center gap-2 shadow-lg backdrop-blur-md cursor-pointer transition-all"
        title="Fine-tune typography"
      >
        <Sliders className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Typography Precision</span>
      </button>

      {/* Floating Font Selector Card */}
      {isOpen && (
        <div className="absolute top-11 left-0 w-72 glass-card bg-[#121318]/95 border border-white/20 rounded-2xl p-4 shadow-2xl text-white backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Type className="w-3.5 h-3.5 text-zinc-300" /> Font Precision Control
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xs text-zinc-500 hover:text-white cursor-pointer"
            >
              Close
            </button>
          </div>

          {/* Arabic Font Choice */}
          <div className="mb-4">
            <label className="block text-[11px] font-mono text-zinc-400 mb-1.5 uppercase">
              Arabic Font / الخط العربي
            </label>
            <div className="space-y-1">
              {arabicOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => onArabicFontChange(opt.id)}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors cursor-pointer ${
                    arabicFont === opt.id ? 'bg-white/20 text-white font-medium' : 'hover:bg-white/5 text-zinc-400'
                  }`}
                >
                  <span className="truncate">{opt.label}</span>
                  <span className="font-arabic-ruqaa text-sm ml-2 text-amber-200">{opt.sample}</span>
                </button>
              ))}
            </div>
          </div>

          {/* English Font Choice */}
          <div>
            <label className="block text-[11px] font-mono text-zinc-400 mb-1.5 uppercase">
              English Serif Font / الخط الإنجليزي
            </label>
            <div className="space-y-1">
              {englishOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => onEnglishFontChange(opt.id)}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors cursor-pointer ${
                    englishFont === opt.id ? 'bg-white/20 text-white font-medium' : 'hover:bg-white/5 text-zinc-400'
                  }`}
                >
                  <span className="truncate">{opt.label}</span>
                  <span className="font-serif-display text-xs ml-2 text-amber-200 tracking-wider">{opt.sample}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
