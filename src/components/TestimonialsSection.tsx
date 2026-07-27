import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquarePlus, CheckCircle2, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Testimonial, EnglishFontChoice, ArabicFontChoice } from '../types';
import { TESTIMONIALS } from '../data/portfolioData';

interface TestimonialsSectionProps {
  englishFont: EnglishFontChoice;
  arabicFont: ArabicFontChoice;
  onRequestWork: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  englishFont,
  arabicFont,
  onRequestWork
}) => {
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [isAddReviewModalOpen, setIsAddReviewModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    clientName: '',
    clientRole: '',
    company: '',
    rating: 5,
    projectType: 'تصاميم السوشيال ميديا',
    comment: ''
  });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

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

  const totalReviews = testimonialsList.length;

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1 >= totalReviews ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 < 0 ? totalReviews - 1 : prev - 1));
  };

  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.clientName || !newReview.comment) return;

    const createdTestimonial: Testimonial = {
      id: `custom-${Date.now()}`,
      clientName: newReview.clientName,
      clientRole: newReview.clientRole || 'عميل محترم',
      company: newReview.company || 'مشروع خاص',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=300',
      rating: newReview.rating,
      comment: newReview.comment,
      projectType: newReview.projectType,
      date: 'الآن'
    };

    setTestimonialsList([createdTestimonial, ...testimonialsList]);
    setCurrentIndex(0);
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewSubmitted(false);
      setIsAddReviewModalOpen(false);
      setNewReview({
        clientName: '',
        clientRole: '',
        company: '',
        rating: 5,
        projectType: 'تصاميم السوشيال ميديا',
        comment: ''
      });
    }, 1800);
  };

  // Get current active testimonial for current index
  const currentItem = testimonialsList[currentIndex] || testimonialsList[0];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
      transition: {
        duration: 0.3,
        ease: [0.7, 0, 0.84, 0]
      }
    })
  };

  return (
    <section id="testimonials-section" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto border-t border-white/5 select-none">
      {/* Subtle Glowing Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10 sm:mb-14"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight mb-3 drop-shadow-md select-none font-arabic-standard" dir="rtl">
          آراء العملاء
        </h2>
        <p className="font-arabic-standard text-zinc-300 text-base sm:text-lg font-normal leading-relaxed" dir="rtl">
          آراء وتقييمات العملاء حول التصاميم والتعامل مع أحمد
        </p>

        {/* Action button to write a review */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => setIsAddReviewModalOpen(true)}
            className="glass-card hover:bg-white/10 text-white text-xs px-4 py-2 rounded-full border border-white/15 transition-all flex items-center gap-2 cursor-pointer font-sans-montserrat active:scale-95"
          >
            <MessageSquarePlus className="w-3.5 h-3.5 text-amber-300" />
            <span dir="rtl">أضف تقييمك / Add Review</span>
          </button>
        </div>
      </motion.div>

      {/* Carousel Container with Arrows on Both Sides */}
      <div className="relative px-2 sm:px-12">
        {/* Navigation Arrows - Flanking Left and Right */}
        <div className="flex items-center justify-between absolute -top-12 sm:top-1/2 -translate-y-1/2 left-0 right-0 z-20 pointer-events-none px-1 sm:px-0">
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonials"
            className="pointer-events-auto p-3 sm:p-3.5 rounded-full bg-[#161820]/90 border border-white/20 text-white hover:bg-white/20 hover:border-amber-400/50 hover:text-amber-300 transition-all shadow-xl active:scale-90 cursor-pointer backdrop-blur-md"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Testimonials"
            className="pointer-events-auto p-3 sm:p-3.5 rounded-full bg-[#161820]/90 border border-white/20 text-white hover:bg-white/20 hover:border-amber-400/50 hover:text-amber-300 transition-all shadow-xl active:scale-90 cursor-pointer backdrop-blur-md"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Animated Carousel Slide */}
        <div className="overflow-hidden min-h-[280px] pt-4 sm:pt-0">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="max-w-2xl mx-auto"
            >
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between relative overflow-hidden group shadow-xl bg-[#111217]/80">
                {/* Top decorative quote mark */}
                <Quote className="absolute top-5 left-5 w-12 h-12 text-white/5 group-hover:text-white/10 transition-colors pointer-events-none" />

                <div>
                  {/* Rating stars */}
                  <div className="flex items-center mb-5">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < currentItem.rating ? 'text-amber-400 fill-amber-400' : 'text-zinc-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Comment in Arabic */}
                  <p className="font-arabic-standard text-zinc-100 text-base sm:text-lg leading-relaxed mb-8 font-normal" dir="rtl">
                    "{currentItem.comment}"
                  </p>
                </div>

                {/* Client Info Footer with Standard User Avatar Icon */}
                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-zinc-300 shadow-inner">
                      <User className="w-5 h-5 text-zinc-200" />
                    </div>
                    <div className="text-right" dir="rtl">
                      <h4 className="font-sans-montserrat text-base sm:text-lg font-semibold text-white">
                        {currentItem.clientName}
                      </h4>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-zinc-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 hidden sm:inline-block">
                    {currentItem.projectType}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Bottom Pagination & Controls Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
          {/* Pagination Counter */}
          <div className="text-xs sm:text-sm text-zinc-400 font-sans-montserrat flex items-center gap-2" dir="rtl">
            <span className="text-amber-300 font-semibold">{currentIndex + 1}</span>
            <span>من أصل</span>
            <span className="text-white font-semibold">{totalReviews}</span>
            <span>رأي عميل</span>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-xs sm:max-w-md py-1 px-2">
            {testimonialsList.map((_, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'w-6 bg-amber-400 shadow-sm shadow-amber-400/50'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              );
            })}
          </div>

          {/* Direct Arrows Bar for Mobile Accessibility */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={handlePrev}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs flex items-center gap-1 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>السابق</span>
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs flex items-center gap-1 active:scale-95"
            >
              <span>التالي</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Add Review Modal */}
      <AnimatePresence>
        {isAddReviewModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md glass-card bg-[#121318]/95 border border-white/20 rounded-3xl p-6 text-white shadow-2xl"
            >
              {!reviewSubmitted ? (
                <form onSubmit={handleAddReviewSubmit} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="font-arabic-standard font-medium text-lg text-white" dir="rtl">
                      أضف رأيك وتقييمك للأستاذ أحمد
                    </h3>
                    <button
                      type="button"
                      onClick={() => setIsAddReviewModalOpen(false)}
                      className="text-xs text-zinc-400 hover:text-white"
                    >
                      إلغاء
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs text-zinc-400 mb-1 font-mono uppercase">
                      اسمك الكريم / Name
                    </label>
                    <input
                      type="text"
                      required
                      value={newReview.clientName}
                      onChange={(e) => setNewReview({ ...newReview, clientName: e.target.value })}
                      placeholder="م. محمد القحطاني"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-white/30"
                      dir="rtl"
                    />
                  </div>


                  <div>
                    <label className="block text-xs text-zinc-400 mb-1 font-mono uppercase">
                      التقييم / Rating
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          className="p-1 cursor-pointer"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= newReview.rating ? 'text-amber-400 fill-amber-400' : 'text-zinc-600'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-zinc-400 mb-1 font-mono uppercase">
                      رأيك في العمل والخدمة / Review
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      placeholder="اكتب انطباعك عن تصميم الأستاذ أحمد ودقته في العمل..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-white/30 resize-none"
                      dir="rtl"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black font-semibold py-2.5 rounded-xl hover:bg-zinc-100 transition-colors text-sm font-sans-montserrat cursor-pointer"
                  >
                    إرسال التقييم
                  </button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <h4 className="text-lg font-medium text-white mb-1 font-arabic-standard" dir="rtl">
                    تم إدراج تقييمك بنجاح!
                  </h4>
                  <p className="text-xs text-zinc-400">شكراً لمشاركتك رأيك القيمة.</p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
