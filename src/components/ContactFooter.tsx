import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Instagram, ArrowUp, Sparkles, ExternalLink } from 'lucide-react';

interface ContactFooterProps {
  onOpenWorkModal?: () => void;
  whatsappNumber?: string;
  instagramHandle?: string;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({
  whatsappNumber = '966566964857',
  instagramHandle = 'ahmed.graphiics'
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formattedWhatsApp = '+966 56 696 4857';

  return (
    <footer id="contact-footer" className="relative border-t border-white/10 bg-[#07080a] pt-20 pb-10 overflow-hidden">
      {/* Background Lighting Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden select-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/5 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
          dir="rtl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-arabic-standard">
            <Sparkles className="w-3.5 h-3.5" />
            <span>تواصل معي</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-arabic-standard tracking-tight">
            جاهز لبدء مشروعك؟
          </h2>

          <p className="text-zinc-400 font-arabic-standard text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            يسعدني تواصلك لمناقشة أفكارك وتحويلها إلى هوية بصرية مبتكرة وشعار يعكس قيمة عملك.
          </p>
        </motion.div>

        {/* Contact Cards Grid (WhatsApp & Instagram) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-20"
          dir="rtl"
        >
          {/* WhatsApp Card */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('مرحباً أستاذ أحمد، أرغب في الاستفسار عن خدمات التصميم الجرافيكي.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/[0.03] transition-all duration-300 flex flex-col justify-between space-y-4 overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
            </div>

            <div className="space-y-1">
              <span className="text-xs text-emerald-400 font-arabic-standard font-medium">واتساب (WhatsApp)</span>
              <h3 className="text-lg font-bold text-white font-sans-montserrat dir-ltr text-right" dir="ltr">
                {formattedWhatsApp}
              </h3>
              <p className="text-xs text-zinc-400 font-arabic-standard pt-1">
                تواصل سريع ومباشر على مدار اليوم
              </p>
            </div>
          </a>

          {/* Instagram Card */}
          <a
            href={`https://instagram.com/${instagramHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-pink-500/40 hover:bg-pink-500/[0.03] transition-all duration-300 flex flex-col justify-between space-y-4 overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-pink-400 transition-colors" />
            </div>

            <div className="space-y-1">
              <span className="text-xs text-pink-400 font-arabic-standard font-medium">إنستغرام (Instagram)</span>
              <h3 className="text-lg font-bold text-white font-sans-montserrat dir-ltr text-right" dir="ltr">
                @{instagramHandle}
              </h3>
              <p className="text-xs text-zinc-400 font-arabic-standard pt-1">
                تابع أحدث الأعمال والتصاميم اليومية
              </p>
            </div>
          </a>
        </motion.div>

        {/* Bottom Bar (ذيل الصفحة) */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-arabic-standard" dir="rtl">
          <div className="flex items-center gap-3 text-center sm:text-right">
            <span className="text-white font-medium">أحمد لاشين</span>
            <span>•</span>
            <span>مصمم جرافيك (Graphic Designer)</span>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-zinc-600 font-mono text-[11px] dir-ltr">
              © {new Date().getFullYear()} AHMED LASHEEN. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              title="العودة لأعلى الصفحة"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
