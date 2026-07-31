import React, { useState } from 'react';
import { PenTool, Palette, Layers, ZoomIn, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CategoryId, EnglishFontChoice, PortfolioProject } from '../types';

interface PortfolioSectionProps {
  englishFont: EnglishFontChoice;
  projects: PortfolioProject[];
  onRequestWork: (projectTitle?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  englishFont,
  projects,
  onRequestWork
}) => {
  const [activeTab, setActiveTab] = useState<'all' | CategoryId>('all');
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string } | null>(null);

  // Filter projects based on active tab
  const filteredProjects = projects.filter((p) => {
    if (activeTab === 'all') return true;
    return p.categoryId === activeTab;
  });

  // Separate projects by category for clean sectioning if 'all' is selected
  const logoProjects = filteredProjects.filter((p) => p.categoryId === 'logo-design');
  const identityProjects = filteredProjects.filter((p) => p.categoryId === 'brand-identity');

  return (
    <section id="portfolio-section" className="relative py-20 px-4 sm:px-8 max-w-7xl mx-auto text-white">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 sm:mb-16"
      >
        <span className="text-amber-400 text-xs sm:text-sm font-medium tracking-widest uppercase font-mono block mb-2">
          PORTFOLIO SHOWCASE
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-normal mb-4 font-arabic-standard" dir="rtl">
          معرض الأعمال والتصاميم
        </h2>
        <p className="font-arabic-standard text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed" dir="rtl">
          عرض مباشر وحر للأعمال والتصاميم بدقتها الطبيعية الأصلية بدون إطارات أو صناديق
        </p>

        {/* Minimalist Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-8" dir="rtl">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-white text-black font-semibold shadow-lg scale-105'
                : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
            }`}
          >
            جميع الأعمال ({projects.length})
          </button>

          <button
            onClick={() => setActiveTab('logo-design')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeTab === 'logo-design'
                ? 'bg-amber-500 text-black font-semibold shadow-lg scale-105'
                : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <PenTool className="w-4 h-4" />
            تصميم الشعارات ({projects.filter((p) => p.categoryId === 'logo-design').length})
          </button>

          <button
            onClick={() => setActiveTab('brand-identity')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeTab === 'brand-identity'
                ? 'bg-orange-500 text-black font-semibold shadow-lg scale-105'
                : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <Palette className="w-4 h-4" />
            الهوية البصرية ({projects.filter((p) => p.categoryId === 'brand-identity').length})
          </button>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* 1. LOGO DESIGNS SHOWCASE (تصميم الشعارات)                    */}
      {/* Displayed as pure artwork directly on the page, NO cards/boxes */}
      {/* ============================================================ */}
      {(activeTab === 'all' || activeTab === 'logo-design') && logoProjects.length > 0 && (
        <div className="mb-24">
          <div className="border-b border-white/10 pb-4 mb-12 flex items-center justify-between" dir="rtl">
            <h3 className="text-2xl sm:text-3xl font-normal font-arabic-standard text-white flex items-center gap-3">
              <PenTool className="w-6 h-6 text-amber-400" />
              قسم تصميم الشعارات
            </h3>
            <span className="text-xs text-zinc-500 font-mono">
              {logoProjects.length} LOGO DESIGNS
            </span>
          </div>

          {/* 3-Column Grid of Logos side-by-side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 gap-y-12 items-start">
            {logoProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                className="flex flex-col items-center text-center group relative"
              >
                {/* Logo Artwork Image Container - Pure Clean Artwork, Frameless */}
                <div
                  onClick={() =>
                    setLightboxImage({
                      url: project.coverImage,
                      title: project.titleArabic || project.title,
                    })
                  }
                  className="relative w-full overflow-hidden cursor-pointer flex items-center justify-center group"
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-auto aspect-square sm:aspect-auto object-cover sm:object-contain rounded-sm transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <span className="bg-black/80 backdrop-blur-md text-amber-300 text-xs px-4 py-2 rounded-full border border-amber-500/30 flex items-center gap-1.5 font-arabic-standard shadow-2xl">
                      <ZoomIn className="w-4 h-4" />
                      عرض دقيق مكبر
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 2. VISUAL IDENTITY SHOWCASE (الهوية البصرية)                   */}
      {/* Full-width editorial gallery directly integrated on the page */}
      {/* ============================================================ */}
      {(activeTab === 'all' || activeTab === 'brand-identity') && identityProjects.length > 0 && (
        <div className="mb-16">
          <div className="border-b border-white/10 pb-4 mb-16 flex items-center justify-between" dir="rtl">
            <h3 className="text-2xl sm:text-3xl font-normal font-arabic-standard text-white flex items-center gap-3">
              <Palette className="w-6 h-6 text-orange-400" />
              قسم الهوية البصرية والمعارض الشاملة
            </h3>
            <span className="text-xs text-zinc-500 font-mono">
              {identityProjects.length} BRAND IDENTITIES
            </span>
          </div>

          {/* 3-Column Grid of Brand Identity Projects side-by-side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 gap-y-12 items-start">
            {identityProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                className="flex flex-col items-center text-center group relative"
              >
                {/* Main Cover Image - Pure Original Uncropped Artwork directly on page */}
                <div
                  onClick={() =>
                    setLightboxImage({
                      url: project.coverImage,
                      title: project.titleArabic || project.title,
                    })
                  }
                  className="relative w-full overflow-hidden cursor-pointer group"
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-black/80 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full border border-white/20 flex items-center gap-2 font-arabic-standard shadow-2xl">
                      <ZoomIn className="w-4 h-4 text-amber-400" />
                      عرض الصورة بجودتها الكاملة
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* FULLSCREEN LIGHTBOX / HIGH-RES ARTWORK VIEWER                 */}
      {/* Allows inspecting the raw artwork in 100% full detail        */}
      {/* ============================================================ */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-6xl max-h-[92vh] w-full flex flex-col items-center justify-center"
            >
              <div className="absolute top-0 right-0 z-10 flex items-center gap-3">
                <button
                  onClick={() => setLightboxImage(null)}
                  className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors cursor-pointer"
                  title="إغلاق"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="w-full h-full flex items-center justify-center overflow-auto p-2">
                <img
                  src={lightboxImage.url}
                  alt={lightboxImage.title}
                  className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
