export type CategoryId = 'logo-design' | 'brand-identity';

export interface CategoryInfo {
  id: CategoryId;
  title: string;
  arabicTitle: string;
  iconName: 'pen-tool' | 'palette' | 'grid' | 'layers' | 'share';
  description: string;
  itemCount: number;
}

export interface PortfolioProject {
  id: string;
  categoryId: CategoryId;
  title: string;
  titleArabic?: string;
  client: string;
  year: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
  tags: string[];
  toolsUsed: string[];
  deliverables?: string[];
  featured?: boolean;
}

export interface WorkInquiryForm {
  name: string;
  email: string;
  phone: string;
  projectType: CategoryId | 'other';
  budget: string;
  message: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  avatar: string;
  rating: number;
  comment: string;
  projectType: string;
  date?: string;
}

export type ArabicFontChoice = 'aref-ruqaa' | 'amiri' | 'el-messiri' | 'reem-kufi';
export type EnglishFontChoice = 'bodoni-moda' | 'playfair-display' | 'cinzel';
