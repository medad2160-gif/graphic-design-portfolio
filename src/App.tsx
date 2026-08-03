import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactFooter } from './components/ContactFooter';
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
      {/* Global Ambient Background Atmosphere & Luxury Grid Texture */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
        {/* Subtle Architectural Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Glowing Top Center Light Beam */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-radial from-amber-500/15 via-orange-600/5 to-transparent rounded-full blur-[140px] animate-float-orb" />
        
        {/* Floating Ambient Light Spheres */}
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-gradient-to-r from-amber-600/12 via-orange-500/8 to-transparent rounded-full blur-[150px] animate-float-orb" />
        <div className="absolute top-1/2 -right-40 w-[650px] h-[650px] bg-gradient-to-l from-emerald-500/12 via-teal-600/8 to-transparent rounded-full blur-[160px] animate-float-orb-delayed" />
        <div className="absolute bottom-1/4 left-10 w-[700px] h-[550px] bg-gradient-to-tr from-indigo-600/10 via-amber-700/8 to-transparent rounded-full blur-[170px] animate-float-orb" />
        <div className="absolute -bottom-20 right-1/3 w-[800px] h-[500px] bg-radial from-amber-500/10 via-emerald-600/5 to-transparent rounded-full blur-[180px]" />

        {/* Subtle Vignette Edge Framing */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#090a0c_100%)] opacity-80" />
      </div>

      {/* Main Hero Section matching video header */}
      <HeroSection
        arabicFont={arabicFont}
        englishFont={englishFont}
        onWorkClick={() => handleOpenWorkForProject()}
        onPortfolioClick={handleScrollToPortfolio}
      />

      {/* About Me Section */}
      <AboutSection
        englishFont={englishFont}
        onRequestWork={() => handleOpenWorkForProject()}
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

      {/* Contact Methods & Site Footer */}
      <ContactFooter
        onOpenWorkModal={() => handleOpenWorkForProject()}
        whatsappNumber={WHATSAPP_NUMBER}
        instagramHandle="ahmed.graphiics"
      />
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
    </div>
  );
}
