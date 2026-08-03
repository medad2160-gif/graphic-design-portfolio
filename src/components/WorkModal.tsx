import React, { useState } from 'react';
import { X, MessageSquare, Send, Phone, Mail, CheckCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CategoryId, WorkInquiryForm } from '../types';

interface WorkModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProjectTitle?: string;
  whatsappNumber?: string;
  emailAddress?: string;
}

export const WorkModal: React.FC<WorkModalProps> = ({
  isOpen,
  onClose,
  prefilledProjectTitle,
  whatsappNumber = '966566964857',
  emailAddress = 'ahmed.graphic.design@gmail.com'
}) => {
  const [formData, setFormData] = useState<WorkInquiryForm>({
    name: '',
    email: '',
    phone: '',
    projectType: 'logo-design',
    budget: '$500 - $1000',
    message: prefilledProjectTitle ? `أهلاً أحمد، أرغب في طلب تصميم مشابه لمشروع "${prefilledProjectTitle}".` : ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // WhatsApp direct trigger option
    const waText = encodeURIComponent(
      `مرحباً أستاذ أحمد،\n\nالاسم: ${formData.name}\nنوع المشروع: ${formData.projectType}\nالميزانية: ${formData.budget}\n\nتفاصيل الطلب:\n${formData.message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/${whatsappNumber}?text=${waText}`, '_blank');
    }, 600);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-lg glass-card bg-[#121318]/95 border border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-arabic-standard text-2xl font-medium tracking-tight text-white mb-1" dir="rtl">
                  بدء مشروع جديد
                </h3>
                <p className="font-arabic-ruqaa text-sm text-zinc-300" dir="rtl">
                  تواصل مع أحمد لبدء تصميم جديد
                </p>
              </div>

              {/* Direct Quick WhatsApp Button */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('أهلاً أستاذ أحمد، أرغب في الاستفسار عن خدمات التصميم الجرافيكي.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#22c35e] text-black font-semibold py-3 px-4 rounded-2xl flex items-center justify-center gap-2 mb-6 shadow-lg transition-all cursor-pointer font-sans-montserrat text-sm"
              >
                <Phone className="w-4 h-4 fill-black stroke-none" />
                <span>استفسار سريع عبر واتساب</span>
              </a>

              <div className="relative flex py-2 items-center mb-6">
                <div className="flex-grow border-t border-white/10"></div>
                <span className="flex-shrink mx-4 text-xs text-zinc-400 font-arabic-standard" dir="rtl">
                  أو تعبئة نموذج الطلب
                </span>
                <div className="flex-grow border-t border-white/10"></div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs text-zinc-400 mb-1 font-arabic-standard" dir="rtl">
                    الاسم الكريم
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="محمد القحطاني"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
                    dir="rtl"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1 font-arabic-standard" dir="rtl">
                      نوع المشروع
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value as CategoryId })}
                      className="w-full bg-[#1c1d24] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-white/30 transition-colors font-arabic-standard"
                      dir="rtl"
                    >
                      <option value="logo-design">تصميم شعار</option>
                      <option value="brand-identity">هوية بصرية</option>
                      <option value="other">خدمات تصميم أخرى</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-zinc-400 mb-1 font-arabic-standard" dir="rtl">
                      الميزانية المتوقعة
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#1c1d24] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-white/30 transition-colors font-arabic-standard"
                      dir="rtl"
                    >
                      <option value="$200 - $500">200$ - 500$</option>
                      <option value="$500 - $1000">500$ - 1,000$</option>
                      <option value="$1000 - $2500">1,000$ - 2,500$</option>
                      <option value="$2500+">2,500$+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-zinc-400 mb-1 font-arabic-standard" dir="rtl">
                    تفاصيل المشروع
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="اكتب أهداف وتفاصيل مشروعك..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/30 transition-colors resize-none font-arabic-standard"
                    dir="rtl"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-zinc-100 font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer font-arabic-standard text-sm mt-2"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>إرسال الطلب إلى أحمد</span>
                </button>
              </form>
            </div>
          ) : (
            /* Success confirmation */
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h4 className="font-arabic-standard text-2xl font-medium text-white mb-2" dir="rtl">
                تم إرسال الطلب بنجاح!
              </h4>
              <p className="font-arabic-ruqaa text-zinc-300 text-sm mb-6" dir="rtl">
                شكراً لتواصلك! جاري توجيهك إلى واتساب أستاذ أحمد...
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>إغلاق النافذة</span>
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
