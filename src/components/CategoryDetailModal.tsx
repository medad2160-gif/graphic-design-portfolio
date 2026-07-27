import React, { useState } from 'react';
import { X, ExternalLink, ArrowLeft, CheckCircle2, Sparkles, Image as ImageIcon, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CategoryId, PortfolioProject } from '../types';
import { CATEGORIES, PORTFOLIO_PROJECTS } from '../data/portfolioData';

interface CategoryDetailModalProps {
  categoryId: CategoryId | null;
  onClose: () => void;
  onRequestWork: (projectTitle?: string) => void;
  projects?: PortfolioProject[];
}

export const CategoryDetailModal: React.FC<CategoryDetailModalProps> = ({
  categoryId,
  onClose,
  onRequestWork,
  projects: customProjects
}) => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  if (!categoryId) return null;

  const currentCategory = CATEGORIES.find((c) => c.id === categoryId);
  const allProjects = customProjects || PORTFOLIO_PROJECTS;
  const projects = allProjects.filter((p) => p.categoryId === categoryId);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] glass-card bg-[#121318]/95 border border-white/15 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-white my-auto"
        >
          {/* Modal Header */}
          <div className="sticky top-0 z-20 px-6 py-5 border-b border-white/10 bg-[#121318]/90 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              {selectedProject && (
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title="Back to Projects"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              <div>
                <h3 className="font-sans-montserrat text-xl sm:text-2xl font-medium tracking-tight text-white flex items-center gap-2">
                  {selectedProject ? selectedProject.title : currentCategory?.title}
                </h3>
                <p className="font-arabic-standard text-xs text-zinc-300" dir="rtl">
                  {selectedProject ? selectedProject.titleArabic : currentCategory?.arabicTitle}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1">
            {!selectedProject ? (
              /* Projects Grid inside Category */
              <div>
                <p className="font-sans-montserrat text-zinc-300 text-sm mb-6 leading-relaxed max-w-2xl">
                  {currentCategory?.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project) => (
                    <motion.div
                      key={project.id}
                      whileHover={{ y: -4 }}
                      onClick={() => {
                        setSelectedProject(project);
                        setSelectedImageIndex(0);
                      }}
                      className="glass-card hover:bg-white/[0.08] rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all cursor-pointer group flex flex-col"
                    >
                      {/* Image Preview */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-zinc-300">
                          <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 font-mono">
                            {project.year}
                          </span>
                          <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                            <ImageIcon className="w-3 h-3 text-zinc-400" />
                            {project.galleryImages.length} Shots
                          </span>
                        </div>
                      </div>

                      {/* Content Info */}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="text-xs text-zinc-400 uppercase tracking-widest font-mono mb-1">
                            Client: {project.client}
                          </div>
                          <h4 className="font-sans-montserrat text-lg font-medium text-white mb-1 group-hover:text-zinc-100 transition-colors">
                            {project.title}
                          </h4>
                          {project.titleArabic && (
                            <p className="font-arabic-standard text-xs text-zinc-300 mb-3" dir="rtl">
                              {project.titleArabic}
                            </p>
                          )}
                          <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] bg-white/5 border border-white/10 text-zinc-300 px-2.5 py-0.5 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              /* Single Project Detailed Showcase */
              <div className="space-y-6">
                {/* Main Selected Image Showcase */}
                <div className="relative rounded-2xl overflow-hidden bg-black/60 border border-white/15 aspect-[16/10]">
                  <img
                    src={selectedProject.galleryImages[selectedImageIndex] || selectedProject.coverImage}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain bg-black"
                  />
                </div>

                {/* Thumbnails */}
                {selectedProject.galleryImages.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {selectedProject.galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                          selectedImageIndex === idx ? 'border-white scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Details Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
                  <div className="md:col-span-2 space-y-4">
                    <h4 className="text-xl font-medium font-sans-montserrat text-white">Project Overview</h4>
                    <p className="text-zinc-300 text-sm leading-relaxed">{selectedProject.description}</p>

                    {selectedProject.deliverables && (
                      <div className="mt-4">
                        <h5 className="text-xs uppercase tracking-widest text-zinc-400 font-mono mb-2">Deliverables</h5>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                          {selectedProject.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Sidebar Metadata */}
                  <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-4 h-fit">
                    <div>
                      <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-mono">Client</span>
                      <span className="text-sm font-medium text-white">{selectedProject.client}</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-mono">Design Tools</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {selectedProject.toolsUsed.map((tool, idx) => (
                          <span key={idx} className="text-xs bg-white/10 text-zinc-200 px-2 py-0.5 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Request Similar Project CTA */}
                    <button
                      onClick={() => onRequestWork(selectedProject.title)}
                      className="w-full bg-white text-black hover:bg-zinc-100 py-3 px-4 rounded-xl font-medium text-xs font-sans-montserrat flex items-center justify-center gap-2 transition-all cursor-pointer mt-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Request Similar Design
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
