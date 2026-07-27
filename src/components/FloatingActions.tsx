import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

interface FloatingActionsProps {
  onOpenWorkModal: () => void;
  whatsappNumber?: string;
  instagramHandle?: string;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenWorkModal,
  whatsappNumber = '966566964857',
  instagramHandle = 'ahmed_graphic_designer'
}) => {
  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent('مرحباً أستاذ أحمد، أرغب في الاستفسار عن خدمات التصميم الجرافيكي.');
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handleInstagramDirect = () => {
    window.open(`https://instagram.com/${instagramHandle}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-center gap-3">
      {/* Chat / WhatsApp Floating Button */}
      <motion.button
        id="floating-chat-button"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onOpenWorkModal}
        title="تواصل معي / Work Inquiry"
        className="w-12 h-12 rounded-full glass-card hover:bg-white/15 text-white flex items-center justify-center border border-white/20 shadow-2xl backdrop-blur-md cursor-pointer transition-colors group relative"
      >
        <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        
        {/* Tooltip on hover */}
        <span className="absolute right-14 bg-zinc-900/90 text-white text-xs px-2.5 py-1 rounded-md border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-arabic-standard" dir="rtl">
          يلا نشتغل؟
        </span>
      </motion.button>

      {/* Instagram Floating Button */}
      <motion.button
        id="floating-instagram-button"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.9, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleInstagramDirect}
        title="Instagram Profile"
        className="w-12 h-12 rounded-full glass-card hover:bg-white/15 text-white flex items-center justify-center border border-white/20 shadow-2xl backdrop-blur-md cursor-pointer transition-colors group relative"
      >
        <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />

        {/* Tooltip on hover */}
        <span className="absolute right-14 bg-zinc-900/90 text-white text-xs px-2.5 py-1 rounded-md border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-sans-montserrat">
          Instagram
        </span>
      </motion.button>
    </div>
  );
};
