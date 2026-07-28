import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CategoryDetailModal } from './components/CategoryDetailModal';
import { WorkModal } from './components/WorkModal';
import { FloatingActions } from './components/FloatingActions';
import { CategoryId, ArabicFontChoice, EnglishFontChoice, PortfolioProject } from './types';
import { PORTFOLIO_PROJECTS } from './data/portfolioData';

export default function App() {
  // Font preferences matching video defaults
  const [arabicFont] = useState<ArabicFontChoice>('aref-ruqaa');
  const [englishFont] = useState<EnglishFontChoice>('bodoni-moda');

  // Modals & Active Category
  const [activeCategoryId, setActiveCategoryId] = useState<CategoryId | null>(null);
  const [isWorkModalOpen, setIsWorkModalOpen] = useState<boolean>(false);
  const [prefilledProjectTitle] = useState<string | undefined>(undefined);

  // Portfolio Projects State - uses PORTFOLIO_PROJECTS directly as canonical source
  const projects: PortfolioProject[] = PORTFOLIO_PROJECTS;

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

      {/* Floating Action Buttons (WhatsApp Chat & Instagram) */}
      <FloatingActions
        onOpenWorkModal={() => handleOpenWorkForProject()}
        instagramHandle="ahmed.graphiics"
      />

      {/* Minimalist Footer */}
      <footer className="py-8 text-center text-xs text-zinc-600 border-t border-white/5 mt-12 font-mono">
        <p>© {new Date().getFullYear()} AHMED LASHEEN — Graphic Designer Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
