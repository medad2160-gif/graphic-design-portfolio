import React from 'react';
import { MessageSquare, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { ArabicFontChoice, EnglishFontChoice } from '../types';

interface HeroSectionProps {
  arabicFont: ArabicFontChoice;
  englishFont: EnglishFontChoice;
  onWorkClick: () => void;
  onPortfolioClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  arabicFont,
  englishFont,
  onWorkClick,
  onPortfolioClick
}) => {
  // Determine font classes based on choice
  const getArabicFontClass = () => {
    switch (arabicFont) {
      case 'aref-ruqaa':
        return 'font-arabic-ruqaa';
      case 'amiri':
        return 'font-arabic-amiri';
      case 'el-messiri':
        return 'font-[' + "'El Messiri'" + ',serif]';
      case 'reem-kufi':
        return 'font-[' + "'Reem Kufi'" + ',serif]';
      default:
        return 'font-arabic-ruqaa';
    }
  };

  const getEnglishFontClass = () => {
    switch (englishFont) {
      case 'bodoni-moda':
        return 'font-serif-display';
      case 'playfair-display':
        return 'font-serif-playfair';
      case 'cinzel':
        return 'font-[' + "'Cinzel'" + ',serif]';
      default:
        return 'font-serif-display';
    }
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center overflow-hidden">
      {/* Dark Blurred Graphic Art Backdrop matching designerahmed.com screenshot */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        {/* Base dark canvas */}
        <div className="absolute inset-0 bg-[#090a0c]" />

        {/* Floating colorful graphic design ambient glows (warm amber, teal, deep crimson, emerald) */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[450px] sm:w-[650px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-amber-600/30 via-orange-500/20 to-emerald-600/25 rounded-full blur-[110px] transform-gpu animate-pulse duration-[7000ms]" />
        
        <div className="absolute top-[28%] left-[15%] w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] bg-gradient-to-br from-teal-500/25 via-cyan-600/20 to-blue-700/25 rounded-full blur-[100px] transform-gpu" />
        
        <div className="absolute top-[35%] right-[12%] w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-gradient-to-bl from-rose-500/25 via-amber-600/20 to-purple-800/25 rounded-full blur-[110px] transform-gpu" />

        <div className="absolute bottom-[10%] left-1/3 w-[400px] sm:w-[600px] h-[300px] bg-gradient-to-t from-emerald-600/20 via-teal-700/15 to-transparent rounded-full blur-[120px] transform-gpu" />

        {/* Blurred Graphic Artwork Layer under the dark veil */}
        <div className="absolute inset-0 opacity-[0.22] mix-blend-screen scale-105 filter blur-[35px] bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center" />

        {/* Dark Vignette radial overlay for contrast & readability */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(9,10,12,0.3)_0%,rgba(9,10,12,0.82)_60%,rgba(9,10,12,0.98)_100%)]" />
      </div>

      {/* Main Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xl mx-auto flex flex-col items-center justify-center"
      >
        {/* Calligraphic Arabic Name "أحمد لاشين" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mb-0"
        >
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-normal tracking-normal select-none leading-tight font-arabic-standard"
            dir="rtl"
            style={{ color: '#ffffff', textFillColor: '#ffffff', WebkitTextFillColor: '#ffffff' }}
          >
            أحمد لاشين
          </h1>
        </motion.div>

        {/* English Name "AHMED LASHEEN" */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="-mt-1 sm:-mt-2 mb-10 sm:mb-14"
        >
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-normal tracking-[0.18em] uppercase select-none ${getEnglishFontClass()}`}
            style={{ color: '#ffffff', textFillColor: '#ffffff', WebkitTextFillColor: '#ffffff' }}
          >
            AHMED LASHEEN
          </h2>
        </motion.div>

        {/* Subtitle "GRAPHIC DESIGNER" */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-sans-montserrat text-[11px] sm:text-xs text-zinc-500 uppercase tracking-[0.45em] sm:tracking-[0.55em] font-light mb-10 sm:mb-12 select-none"
        >
          GRAPHIC DESIGNER
        </motion.p>

        {/* CTA Buttons Block matching video layout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col items-center gap-3.5 w-full px-4"
        >
          {/* Work Button (White Pill) */}
          <button
            id="work-cta-button"
            onClick={onWorkClick}
            className="w-full max-w-[290px] sm:max-w-[320px] bg-white hover:bg-zinc-100 text-black py-3.5 px-8 rounded-full font-medium text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2.5 group cursor-pointer active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-black stroke-[2.2] group-hover:scale-110 transition-transform" />
            <span className="font-arabic-standard font-semibold tracking-wide" dir="rtl">يلا نشتغل؟</span>
          </button>

          {/* Portfolio Button (Dark Glass Translucent Pill with Arrow) */}
          <button
            id="portfolio-cta-button"
            onClick={onPortfolioClick}
            className="w-full max-w-[290px] sm:max-w-[320px] glass-pill-button hover:bg-white/12 text-zinc-100 py-3.5 px-8 rounded-full font-medium text-sm sm:text-base transition-all duration-300 border border-white/20 hover:border-white/30 flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
          >
            <span className="font-arabic-standard font-medium tracking-wide" dir="rtl">معرض الأعمال</span>
            <ArrowLeft className="w-4 h-4 text-zinc-300 group-hover:-translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};
