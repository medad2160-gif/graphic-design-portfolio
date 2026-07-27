import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CategoryDetailModal } from './components/CategoryDetailModal';
import { WorkModal } from './components/WorkModal';
import { FloatingActions } from './components/FloatingActions';
import { ImageUploadManagerModal } from './components/ImageUploadManagerModal';
import { CategoryId, ArabicFontChoice, EnglishFontChoice, PortfolioProject } from './types';
import { PORTFOLIO_PROJECTS } from './data/portfolioData';

const STORAGE_KEY = 'lasheen_portfolio_projects_v1';

export default function App() {
  // Font preferences matching video defaults
  const [arabicFont, setArabicFont] = useState<ArabicFontChoice>('aref-ruqaa');
  const [englishFont, setEnglishFont] = useState<EnglishFontChoice>('bodoni-moda');

  // Modals & Active Category
  const [activeCategoryId, setActiveCategoryId] = useState<CategoryId | null>(null);
  const [isWorkModalOpen, setIsWorkModalOpen] = useState<boolean>(false);
  const [isImageUploadModalOpen, setIsImageUploadModalOpen] = useState<boolean>(false);
  const [prefilledProjectTitle, setPrefilledProjectTitle] = useState<string | undefined>(undefined);

  // Dynamic Portfolio Projects State with localStorage persistence & smart merge
  const [projects, setProjects] = useState<PortfolioProject[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: PortfolioProject[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge default projects with saved items so default projects always show up
          const savedMap = new Map(parsed.map((p) => [p.id, p]));
          const mergedDefault = PORTFOLIO_PROJECTS.map((defaultProj) => {
            return savedMap.get(defaultProj.id) || defaultProj;
          });
          const customUserProjects = parsed.filter(
            (p) => !PORTFOLIO_PROJECTS.some((dp) => dp.id === p.id)
          );
          return [...customUserProjects, ...mergedDefault];
        }
      }
    } catch (e) {
      console.error('Failed to load portfolio projects from localStorage:', e);
    }
    return PORTFOLIO_PROJECTS;
  });

  // Save to localStorage when projects change with quota overflow protection
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } catch (e: any) {
      console.warn('Primary localStorage setItem failed:', e);
      // Fallback: If quota exceeded due to huge base64 strings, save lightweight versions
      try {
        const lightweightProjects = projects.map((p) => {
          // If gallery images or cover image are extremely large base64, truncate galleryImages to prevent crash
          const isCoverTooLarge = p.coverImage.length > 500000;
          return {
            ...p,
            coverImage: isCoverTooLarge ? p.coverImage.slice(0, 500000) : p.coverImage,
            galleryImages: p.galleryImages.map((img) => (img.length > 300000 ? p.coverImage : img)),
          };
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(lightweightProjects));
      } catch (fallbackError) {
        console.error('Failed to persist portfolio projects to localStorage:', fallbackError);
      }
    }
  }, [projects]);

  const handleAddProject = (newProj: PortfolioProject) => {
    setProjects((prev) => [newProj, ...prev]);
  };

  const handleUpdateProject = (updatedProj: PortfolioProject) => {
    setProjects((prev) => prev.map((p) => (p.id === updatedProj.id ? updatedProj : p)));
  };

  const handleDeleteProject = (projId: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== projId));
  };

  const handleResetProjects = () => {
    setProjects(PORTFOLIO_PROJECTS);
    localStorage.removeItem(STORAGE_KEY);
  };

  const handleScrollToPortfolio = () => {
    const portfolioElem = document.getElementById('portfolio-section');
    if (portfolioElem) {
      portfolioElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const WHATSAPP_NUMBER = '966566964857';

  const handleOpenWorkForProject = (title?: string) => {
    const text = title
      ? `مرحباً أستاذ أحمد، أرغب في طلب تصميم مشروع "${title}"`
      : `مرحباً أستاذ أحمد، أرغب في الاستفسار عن خدمات التصميم الجرافيكي.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#090a0c] text-white selection:bg-white selection:text-black font-sans-montserrat relative overflow-x-hidden">
      {/* Global Ambient Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gradient-to-r from-amber-600/10 via-orange-500/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-2/3 -right-32 w-[600px] h-[600px] bg-gradient-to-l from-teal-500/10 via-blue-600/10 to-transparent rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-t from-emerald-600/10 via-indigo-600/5 to-transparent rounded-full blur-[160px]" />
      </div>

      {/* Main Hero Section matching video header */}
      <HeroSection
        arabicFont={arabicFont}
        englishFont={englishFont}
        onWorkClick={() => handleOpenWorkForProject()}
        onPortfolioClick={handleScrollToPortfolio}
      />

      {/* Portfolio Showcase Section (Cardless & Frameless directly on page) */}
      <PortfolioSection
        englishFont={englishFont}
        projects={projects}
        onRequestWork={(title) => handleOpenWorkForProject(title)}
      />

      {/* Client Reviews / Testimonials Section */}
      <TestimonialsSection
        englishFont={englishFont}
        arabicFont={arabicFont}
        onRequestWork={() => handleOpenWorkForProject()}
      />

      {/* Category Detail & Work Showcase Modal */}
      <CategoryDetailModal
        categoryId={activeCategoryId}
        onClose={() => setActiveCategoryId(null)}
        onRequestWork={(title) => {
          setActiveCategoryId(null);
          handleOpenWorkForProject(title);
        }}
        projects={projects}
      />

      {/* Work & Direct Contact Modal */}
      <WorkModal
        isOpen={isWorkModalOpen}
        onClose={() => setIsWorkModalOpen(false)}
        prefilledProjectTitle={prefilledProjectTitle}
      />

      {/* Image Upload & Management Modal */}
      <ImageUploadManagerModal
        isOpen={isImageUploadModalOpen}
        onClose={() => setIsImageUploadModalOpen(false)}
        projects={projects}
        onAddProject={handleAddProject}
        onUpdateProject={handleUpdateProject}
        onDeleteProject={handleDeleteProject}
        onResetToDefaults={handleResetProjects}
      />

      {/* Floating Action Buttons (WhatsApp Chat & Instagram) */}
      <FloatingActions
        onOpenWorkModal={() => handleOpenWorkForProject()}
      />

      {/* Minimalist Footer */}
      <footer className="py-8 text-center text-xs text-zinc-600 border-t border-white/5 mt-12 font-mono">
        <p>© {new Date().getFullYear()} AHMED LASHEEN — Graphic Designer Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
