import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Sparkles, Layers } from 'lucide-react';
import { EnglishFontChoice } from '../types';

interface AboutSectionProps {
  englishFont: EnglishFontChoice;
  onRequestWork: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onRequestWork
}) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / rect.height) * 14;
    const rotateY = (x / rect.width) * 14;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section id="about-section" className="relative py-10 sm:py-16 px-4 overflow-hidden border-t border-white/5">
      {/* Background Subtle Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 select-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-amber-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-zinc-400 text-xs font-arabic-standard uppercase tracking-[0.2em] block mb-2 font-medium" dir="rtl">
            نبذة تعريفية
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white font-arabic-standard tracking-tight">
            نبذة عني
          </h2>
          <div className="w-12 h-[1px] bg-white/20 mx-auto mt-4" />
        </motion.div>

        {/* 3D Interactive Tilt Area (Frameless & Transparent Background) */}
        <div className="[perspective:1000px]">
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
              rotateX: rotate.x,
              rotateY: rotate.y,
            }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative py-4 px-2 sm:px-6 cursor-default group"
            dir="rtl"
          >
            {/* Content Elements with Subtle 3D Depth */}
            <div className="relative z-10 space-y-8">
              {/* Badge & Title */}
              <div 
                style={{ transform: 'translateZ(30px)' }}
                className="space-y-4 transition-transform duration-300"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-arabic-standard">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>مصمم جرافيك</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-arabic-standard leading-tight">
                  أكثر من 3 سنوات من الخبرة الإبداعية في تصميم الجرافيك
                </h3>
              </div>

              {/* Unified Text Paragraphs */}
              <div 
                style={{ transform: 'translateZ(20px)' }}
                className="transition-transform duration-300 space-y-4 text-zinc-300 font-arabic-standard font-normal text-base sm:text-lg leading-relaxed"
              >
                <p>
                  أعمل كمصمم جرافيك بخبرة تفوق الـ 3 سنوات، حيث أقدم حلولاً تصميمة مبتكرة تتنوع بين بناء الهويات البصرية الكاملة وتصميم الشعارات الاحترافية التي تعبر بدقة عن هوية كل مشروع.
                </p>

                <p className="text-sm sm:text-base text-zinc-400 font-normal">
                  أعتمد في تطوير كافة التصاميم والمخرجات البصرية على البرامج الأساسية المعتمَدة عالمياً:
                </p>
              </div>

              {/* Tools Badges (Seamless Transparent Badges) */}
              <div 
                style={{ transform: 'translateZ(35px)' }}
                className="flex flex-wrap items-center gap-4 pt-1 transition-transform duration-300"
              >
                <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-white text-sm font-arabic-standard">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>برنامج أدوبي فوتوشوب (Adobe Photoshop)</span>
                </div>

                <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-white text-sm font-arabic-standard">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>برنامج أدوبي إليستريتور (Adobe Illustrator)</span>
                </div>
              </div>

              {/* CTA Action */}
              <div 
                style={{ transform: 'translateZ(45px)' }}
                className="pt-3 transition-transform duration-300"
              >
                <button
                  onClick={onRequestWork}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-arabic-standard font-medium text-sm hover:bg-zinc-200 transition-all cursor-pointer shadow-2xl"
                >
                  <Send className="w-4 h-4" />
                  <span>تواصل للبدء في عمل جديد</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


