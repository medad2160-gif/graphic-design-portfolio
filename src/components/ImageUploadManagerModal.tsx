import React, { useState } from 'react';
import { X, Upload, Plus, Trash2, Check, Copy, Image as ImageIcon, Sparkles, FolderPlus, Edit2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioProject, CategoryId } from '../types';
import { CATEGORIES } from '../data/portfolioData';

interface ImageUploadManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: PortfolioProject[];
  onAddProject: (newProject: PortfolioProject) => void;
  onUpdateProject: (updatedProject: PortfolioProject) => void;
  onDeleteProject: (projectId: string) => void;
  onResetToDefaults: () => void;
}

export const ImageUploadManagerModal: React.FC<ImageUploadManagerModalProps> = ({
  isOpen,
  onClose,
  projects,
  onAddProject,
  onUpdateProject,
  onDeleteProject,
  onResetToDefaults,
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'manage' | 'json'>('upload');
  
  // New Project Form State
  const [categoryId, setCategoryId] = useState<CategoryId>('logo-design');
  const [title, setTitle] = useState('');
  const [titleArabic, setTitleArabic] = useState('');
  const [client, setClient] = useState('');
  const [year, setYear] = useState('2026');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [tagsInput, setTagsInput] = useState('');
  const [toolsInput, setToolsInput] = useState('');

  // Editing state
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [copiedJson, setCopiedJson] = useState(false);

  if (!isOpen) return null;

  // Helper to compress uploaded image files to tiny lightweight base64 JPEG
  const compressImageFile = (file: File, maxWidth = 1200, maxHeight = 1200, quality = 0.8): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          let width = img.width;
          let height = img.height;

          if (width > maxWidth || height > maxHeight) {
            if (width / height > maxWidth / maxHeight) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            } else {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            resolve(event.target?.result as string);
            return;
          }
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', quality));
        };
        img.onerror = () => resolve(event.target?.result as string || '');
      };
      reader.onerror = () => resolve('');
    });
  };

  // Handle Cover Image File Upload from Computer
  const handleCoverFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const compressed = await compressImageFile(file, 1200, 1200, 0.82);
      if (compressed) {
        setCoverImage(compressed);
      }
    }
  };

  // Handle Gallery Images Upload from Computer
  const handleGalleryFilesUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const fileArray: File[] = Array.from(files);
      const compressedList = await Promise.all(
        fileArray.map((f: File) => compressImageFile(f, 1200, 1200, 0.8))
      );
      const validImages = compressedList.filter(Boolean);
      if (validImages.length > 0) {
        setGalleryImages((prev) => [...prev, ...validImages]);
      }
    }
  };

  const handleRemoveGalleryImage = (index: number) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !coverImage) {
      alert('يرجى إدخال عنوان المشروع وصورة الغلاف على الأقل.');
      return;
    }

    const tagsArr = tagsInput.split(',').map((t) => t.trim()).filter(Boolean);
    const toolsArr = toolsInput.split(',').map((t) => t.trim()).filter(Boolean);

    if (editingProjectId) {
      // Update existing project
      const updated: PortfolioProject = {
        id: editingProjectId,
        categoryId,
        title,
        titleArabic: titleArabic || title,
        client: client || 'أحمد لاشين',
        year: year || '2026',
        description: description || 'مشروع جديد مميز في معرض الأعمال.',
        coverImage,
        galleryImages: galleryImages.length > 0 ? galleryImages : [coverImage],
        tags: tagsArr.length > 0 ? tagsArr : ['تصميم جرافيك'],
        toolsUsed: toolsArr.length > 0 ? toolsArr : ['Photoshop', 'Illustrator'],
      };
      onUpdateProject(updated);
    } else {
      // Create new project
      const newProj: PortfolioProject = {
        id: `custom-proj-${Date.now()}`,
        categoryId,
        title,
        titleArabic: titleArabic || title,
        client: client || 'أحمد لاشين',
        year: year || '2026',
        description: description || 'مشروع جديد مميز في معرض الأعمال.',
        coverImage,
        galleryImages: galleryImages.length > 0 ? galleryImages : [coverImage],
        tags: tagsArr.length > 0 ? tagsArr : ['تصميم جرافيك'],
        toolsUsed: toolsArr.length > 0 ? toolsArr : ['Photoshop', 'Illustrator'],
        featured: true,
      };
      onAddProject(newProj);
    }

    // Reset Form
    resetForm();
    setActiveTab('manage');
  };

  const resetForm = () => {
    setEditingProjectId(null);
    setTitle('');
    setTitleArabic('');
    setClient('');
    setYear('2026');
    setDescription('');
    setCoverImage('');
    setGalleryImages([]);
    setTagsInput('');
    setToolsInput('');
  };

  const handleStartEdit = (proj: PortfolioProject) => {
    setEditingProjectId(proj.id);
    setCategoryId(proj.categoryId);
    setTitle(proj.title);
    setTitleArabic(proj.titleArabic || '');
    setClient(proj.client);
    setYear(proj.year);
    setDescription(proj.description);
    setCoverImage(proj.coverImage);
    setGalleryImages(proj.galleryImages || []);
    setTagsInput((proj.tags || []).join(', '));
    setToolsInput((proj.toolsUsed || []).join(', '));
    setActiveTab('upload');
  };

  const handleCopyJson = () => {
    const jsonStr = JSON.stringify(projects, null, 2);
    navigator.clipboard.writeText(jsonStr);
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl max-h-[90vh] glass-card bg-[#121318]/95 border border-white/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-white my-auto"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 px-6 py-5 border-b border-white/10 bg-[#121318]/90 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center">
                <Upload className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="font-sans-montserrat text-xl font-medium tracking-tight text-white flex items-center gap-2">
                  إدارة ورفع الصور والأعمال
                </h3>
                <p className="font-arabic-standard text-xs text-zinc-400" dir="rtl">
                  أضف أحدث تصاميمك وصورك لتعرض مباشرة في المعرض
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-white/10 bg-black/30 px-6 pt-3 gap-2" dir="rtl">
            <button
              onClick={() => {
                if (editingProjectId) resetForm();
                setActiveTab('upload');
              }}
              className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-t-xl transition-colors flex items-center gap-2 cursor-pointer ${
                activeTab === 'upload'
                  ? 'bg-amber-500/20 text-amber-300 border-t border-x border-amber-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Plus className="w-4 h-4" />
              {editingProjectId ? 'تعديل المشروع' : 'إضافة عمل وصورة جديدة'}
            </button>

            <button
              onClick={() => setActiveTab('manage')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-t-xl transition-colors flex items-center gap-2 cursor-pointer ${
                activeTab === 'manage'
                  ? 'bg-amber-500/20 text-amber-300 border-t border-x border-amber-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <FolderPlus className="w-4 h-4" />
              المشاريع الحالية ({projects.length})
            </button>

            <button
              onClick={() => setActiveTab('json')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-t-xl transition-colors flex items-center gap-2 cursor-pointer ${
                activeTab === 'json'
                  ? 'bg-amber-500/20 text-amber-300 border-t border-x border-amber-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Copy className="w-4 h-4" />
              تصدير البيانات (JSON)
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 overflow-y-auto space-y-6" dir="rtl">
            {activeTab === 'upload' && (
              <form onSubmit={handleSaveProject} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Category Selection */}
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1.5 font-arabic-standard">
                      قسم التصميم
                    </label>
                    <select
                      value={categoryId}
                      onChange={(e) => setCategoryId(e.target.value as CategoryId)}
                      className="w-full px-3.5 py-2.5 bg-zinc-900/90 border border-white/10 rounded-xl text-white text-sm focus:border-amber-400 outline-none"
                    >
                      {CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.arabicTitle} ({cat.title})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Title Arabic */}
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1.5 font-arabic-standard">
                      اسم العمل / المشروع (بالعربية) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: شعار وهوية شركة المدار"
                      value={titleArabic}
                      onChange={(e) => setTitleArabic(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-zinc-900/90 border border-white/10 rounded-xl text-white text-sm focus:border-amber-400 outline-none"
                    />
                  </div>

                  {/* Title English */}
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1.5 font-arabic-standard">
                      عنوان المشروع (بالإنجليزية) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Al-Madar Branding & Monogram"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-zinc-900/90 border border-white/10 rounded-xl text-white text-sm focus:border-amber-400 outline-none"
                    />
                  </div>

                  {/* Client */}
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1.5 font-arabic-standard">
                      اسم العميل / الشركة
                    </label>
                    <input
                      type="text"
                      placeholder="مثال: شركة المدار العقارية"
                      value={client}
                      onChange={(e) => setClient(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-zinc-900/90 border border-white/10 rounded-xl text-white text-sm focus:border-amber-400 outline-none"
                    />
                  </div>
                </div>

                {/* Cover Image Upload Area */}
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-amber-400 font-arabic-standard">
                    صورة الغلاف الرئيسية (Cover Image) *
                  </label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    {/* Drag and Drop File Upload */}
                    <label className="border-2 border-dashed border-white/20 hover:border-amber-400/60 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer bg-white/5 hover:bg-white/10 transition-colors text-center min-h-[140px]">
                      <Upload className="w-7 h-7 text-amber-400 mb-2" />
                      <span className="text-xs font-arabic-standard text-zinc-200">
                        اختر صورة من جهازك
                      </span>
                      <span className="text-[10px] text-zinc-400 mt-1">
                        PNG, JPG, WEBP, SVG
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleCoverFileUpload}
                        className="hidden"
                      />
                    </label>

                    {/* Or URL Input */}
                    <div className="space-y-2">
                      <span className="text-xs text-zinc-400 block font-arabic-standard">
                        أو ضع رابط مباشر للصورة (URL / /projects/image.jpg):
                      </span>
                      <input
                        type="text"
                        placeholder="https://... أو /projects/logo1.jpg"
                        value={coverImage}
                        onChange={(e) => setCoverImage(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-zinc-900/90 border border-white/10 rounded-xl text-white text-xs focus:border-amber-400 outline-none"
                      />

                      {coverImage && (
                        <div className="relative rounded-xl overflow-hidden border border-white/20 h-24 bg-black/50 flex items-center justify-center">
                          <img
                            src={coverImage}
                            alt="Cover Preview"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Gallery Images Upload Area */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <label className="block text-xs font-medium text-amber-400 font-arabic-standard">
                    معرض الصور الإضافية للمشروع (Gallery Images)
                  </label>

                  <div className="flex items-center gap-3">
                    <label className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-xs font-medium text-white cursor-pointer flex items-center gap-2 transition-colors">
                      <Upload className="w-4 h-4 text-amber-400" />
                      إضافة صور من الكمبيوتر
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleGalleryFilesUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {galleryImages.length > 0 && (
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-3">
                      {galleryImages.map((imgUrl, idx) => (
                        <div key={idx} className="relative group rounded-lg overflow-hidden border border-white/20 aspect-video bg-black/40">
                          <img src={imgUrl} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() => handleRemoveGalleryImage(idx)}
                            className="absolute top-1 right-1 p-1 bg-red-600/80 hover:bg-red-600 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Description & Metadata */}
                <div className="space-y-4 pt-2 border-t border-white/10">
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1.5 font-arabic-standard">
                      وصف المشروع
                    </label>
                    <textarea
                      rows={2}
                      placeholder="اكتب وصفاً مختصراً للمشروع والأفكار المنفذة..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full px-3.5 py-2 bg-zinc-900/90 border border-white/10 rounded-xl text-white text-xs focus:border-amber-400 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-zinc-400 mb-1.5 font-arabic-standard">
                        الكلمات الدلالية (Tags - مفصولة بفواصل)
                      </label>
                      <input
                        type="text"
                        placeholder="تصميم شعار, خط عربي, هوية بصرية"
                        value={tagsInput}
                        onChange={(e) => setTagsInput(e.target.value)}
                        className="w-full px-3.5 py-2 bg-zinc-900/90 border border-white/10 rounded-xl text-white text-xs focus:border-amber-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-zinc-400 mb-1.5 font-arabic-standard">
                        الأدوات المستخدمة (Tools - مفصولة بفواصل)
                      </label>
                      <input
                        type="text"
                        placeholder="Adobe Illustrator, Photoshop"
                        value={toolsInput}
                        onChange={(e) => setToolsInput(e.target.value)}
                        className="w-full px-3.5 py-2 bg-zinc-900/90 border border-white/10 rounded-xl text-white text-xs focus:border-amber-400 outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-3 flex items-center justify-end gap-3">
                  {editingProjectId && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-4 py-2.5 rounded-xl border border-white/20 text-zinc-300 hover:text-white text-xs transition-colors"
                    >
                      إلغاء التعديل
                    </button>
                  )}
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-medium text-xs sm:text-sm flex items-center gap-2 shadow-lg cursor-pointer transition-all"
                  >
                    <Sparkles className="w-4 h-4" />
                    {editingProjectId ? 'حفظ التعديلات' : 'إضافة العمل فوراً إلى المعرض'}
                  </button>
                </div>
              </form>
            )}

            {activeTab === 'manage' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-white/5 p-3 rounded-2xl border border-white/10">
                  <span className="text-xs text-zinc-300">
                    عدد المشاريع المسجلة حالياً: <strong className="text-amber-400">{projects.length}</strong>
                  </span>
                  <button
                    onClick={() => {
                      if (confirm('هل أنت تأكد من إعادة تعيين جميع المشاريع والصور إلى الوضع الافتراضي؟')) {
                        onResetToDefaults();
                      }
                    }}
                    className="text-xs text-zinc-400 hover:text-red-400 underline transition-colors"
                  >
                    استعادة الصور الافتراضية
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-1">
                  {projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="bg-zinc-900/80 border border-white/10 rounded-2xl p-3 flex gap-3 items-center hover:border-white/20 transition-all group"
                    >
                      <img
                        src={proj.coverImage}
                        alt={proj.title}
                        className="w-16 h-16 rounded-xl object-cover bg-black/50 border border-white/10 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold text-white truncate">
                          {proj.titleArabic || proj.title}
                        </h4>
                        <p className="text-[10px] text-zinc-400 truncate">
                          {proj.client} • {proj.year}
                        </p>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded bg-white/10 text-[10px] text-amber-300">
                          {proj.categoryId === 'logo-design' ? 'تصميم شعار' : 'هوية بصرية'}
                        </span>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <button
                          onClick={() => handleStartEdit(proj)}
                          className="p-1.5 bg-white/10 hover:bg-amber-500/20 text-zinc-300 hover:text-amber-300 rounded-lg transition-colors cursor-pointer"
                          title="تعديل هذا المشروع"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`هل أنت متاكد من حذف "${proj.titleArabic || proj.title}"؟`)) {
                              onDeleteProject(proj.id);
                            }
                          }}
                          className="p-1.5 bg-white/10 hover:bg-red-500/20 text-zinc-300 hover:text-red-400 rounded-lg transition-colors cursor-pointer"
                          title="حذف"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'json' && (
              <div className="space-y-3">
                <p className="text-xs text-zinc-300 leading-relaxed font-arabic-standard">
                  إذا كنت تريد حفظ الصور والمشاريع دائماً داخل الكود بدون الاعتماد على ذاكرة المتصفح، يمكنك نسخ هذا الـ JSON ولصقه داخل الملف <code className="bg-black/50 text-amber-300 px-1.5 py-0.5 rounded">src/data/portfolioData.ts</code>:
                </p>

                <div className="relative">
                  <pre className="bg-black/80 border border-white/15 p-4 rounded-2xl text-[11px] font-mono text-zinc-300 max-h-[300px] overflow-y-auto ltr text-left">
                    {JSON.stringify(projects, null, 2)}
                  </pre>

                  <button
                    onClick={handleCopyJson}
                    className="absolute top-3 left-3 px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 rounded-xl text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedJson ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        تم النسخ!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        نسخ الكود
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
