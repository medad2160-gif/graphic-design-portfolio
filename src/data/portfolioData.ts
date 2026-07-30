import { CategoryInfo, PortfolioProject, Testimonial } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'logo-design',
    title: 'Logo design',
    arabicTitle: 'تصميم الشعارات',
    iconName: 'pen-tool',
    description: 'Custom logo designs, Arabic calligraphy monograms, emblem design, and vector logomarks.',
    itemCount: 5
  },
  {
    id: 'brand-identity',
    title: 'Brand identity',
    arabicTitle: 'الهوية البصرية',
    iconName: 'palette',
    description: 'Complete brand identities, style guidelines, color systems, typography systems, and stationery.',
    itemCount: 5
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  // Brand Identity Projects (5 Projects)
  {
    id: 'bi-1',
    categoryId: 'brand-identity',
    title: 'Al-Madar Visual Brand Identity',
    titleArabic: 'الهوية البصرية الشاملة لمجموعة المدار',
    client: 'Al-Madar Group - Riyadh',
    year: '2026',
    description: 'تصميم هوية بصرية متكاملة وشاملة تتضمن دليل استخدام الهوية، كروت الأعمال، القرطاسية المكتبيّة، والأوراق الرسمية.',
    coverImage: 'https://i.ibb.co/7BjQSNc/Picsart-26-07-23-18-22-49-160.jpg',
    galleryImages: ['https://i.ibb.co/7BjQSNc/Picsart-26-07-23-18-22-49-160.jpg'],
    tags: ['هوية بصرية', 'دليل الماركة', 'Corporate Identity'],
    toolsUsed: ['Adobe Illustrator', 'Adobe InDesign', 'Photoshop'],
    deliverables: ['دليل الهوية البصرية PDF', 'قرطاسية المكاتب والبطاقات'],
    featured: true
  },
  {
    id: 'bi-2',
    categoryId: 'brand-identity',
    title: 'Horizon Corporate Visual System',
    titleArabic: 'نظام الهوية البصرية لشركة هورايزون',
    client: 'Horizon Global - Dubai',
    year: '2026',
    description: 'نظام هوية بصرية معاصر للشركات والمؤسسات الكبرى تشمل اختيار الخطوط والألوان والقوالب التسويقية الموحدة.',
    coverImage: 'https://i.ibb.co/27H3Gbn2/Picsart-26-07-23-18-28-32-494.jpg',
    galleryImages: ['https://i.ibb.co/27H3Gbn2/Picsart-26-07-23-18-28-32-494.jpg'],
    tags: ['هوية بصرية', 'مطبوعات', 'Brand Book'],
    toolsUsed: ['Adobe Illustrator', 'Photoshop'],
    deliverables: ['Brand Manual', 'قوالب السوشيال ميديا الموحدة']
  },
  {
    id: 'bi-3',
    categoryId: 'brand-identity',
    title: 'Aura Luxury Brand Identity',
    titleArabic: 'الهوية البصرية الفاخرة لعلامة أورا',
    client: 'Aura Luxury - Kuwait',
    year: '2026',
    description: 'هوية بصرية فاخرة تعبر عن الأناقة والرفاهية، تشمل العبوات المطبوعة، بطاقات العضوية، والتغليف الرفيع.',
    coverImage: 'https://i.ibb.co/Pscw6vx8/Picsart-26-07-23-14-01-47-435.jpg',
    galleryImages: ['https://i.ibb.co/Pscw6vx8/Picsart-26-07-23-14-01-47-435.jpg'],
    tags: ['هوية فاخرة', 'تغليف منتجات', 'Brand Identity'],
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop'],
    deliverables: ['تغليف المنتجات', 'بطاقات الدخول والقرطاسية']
  },
  {
    id: 'bi-4',
    categoryId: 'brand-identity',
    title: 'Verve Creative Studio Identity',
    titleArabic: 'الهوية البصرية لاستوديو فيرف الإبداعي',
    client: 'Verve Studio - Cairo',
    year: '2026',
    description: 'تطوير هوية بصرية بأسلوب عصري ومبتكر تعكس الإبداع واللمسة الفنية الحديثة في كافة المخرجات.',
    coverImage: 'https://i.ibb.co/DPzRF7Cr/Picsart-26-07-23-14-18-21-840.jpg',
    galleryImages: ['https://i.ibb.co/DPzRF7Cr/Picsart-26-07-23-14-18-21-840.jpg'],
    tags: ['هوية استوديو', 'تصميم جرافيك', 'Creative Identity'],
    toolsUsed: ['Adobe Illustrator', 'Figma'],
    deliverables: ['ملفات الهوية البصرية الكاملة']
  },
  {
    id: 'bi-5',
    categoryId: 'brand-identity',
    title: 'Zain Modern Business Identity',
    titleArabic: 'الهوية البصرية الحديثة لمؤسسة زين',
    client: 'Zain Commerce - Khobar',
    year: '2025',
    description: 'تصميم هوية بصرية متميزة تعتمد على البساطة، الوضوح، والتناغم بين العناصر البصرية والألوان.',
    coverImage: 'https://i.ibb.co/nqDLzq4G/Picsart-26-07-23-13-31-24-513.jpg',
    galleryImages: ['https://i.ibb.co/nqDLzq4G/Picsart-26-07-23-13-31-24-513.jpg'],
    tags: ['هوية تجارية', 'قرطاسية', 'Stationery'],
    toolsUsed: ['Adobe Illustrator', 'InDesign'],
    deliverables: ['دليل الاستخدام والقرطاسية الكاملة']
  },

  // Logo Design Projects (5 Projects)
  {
    id: 'br-3',
    categoryId: 'logo-design',
    title: 'Al-Qimma Financial Advisory Logo & Monogram',
    titleArabic: 'تصميم شعار وبصمة شركة القمة للاستشارات الماليّة',
    client: 'Al-Qimma Advisory - Riyadh',
    year: '2026',
    description: 'تصميم شعار احترافي ومبتكر للقطاع المالي والاستثماري يتضمن الرمز والشعار اللفظي والتايبوجرافي المعتمد.',
    coverImage: 'https://i.ibb.co/0RGF98sz/Picsart-26-07-20-12-25-25-829.jpg',
    galleryImages: ['https://i.ibb.co/0RGF98sz/Picsart-26-07-20-12-25-25-829.jpg'],
    tags: ['تصميم شعار', 'لوجو احترافي', 'Corporate Logo', 'Monogram'],
    toolsUsed: ['Adobe Illustrator', 'Photoshop'],
    deliverables: ['ملفات الشعار الملموسة Vector', 'دليل الاستخدام والشعار بألوانه'],
    featured: true
  },
  {
    id: 'br-5',
    categoryId: 'logo-design',
    title: 'Aseel Specialty Coffee Roastery Logomark',
    titleArabic: 'شعار وبصمة محمصة قهوة أصيل المختصة',
    client: 'Aseel Coffee Roasters - Khobar',
    year: '2025',
    description: 'شعار معاصر لمحمصة قهوة مختصة يدمج بين الخط العربي الحديث والشكل الرمزي الأنيق.',
    coverImage: 'https://i.ibb.co/Y4hq47ZT/Picsart-26-07-20-12-25-02-050.jpg',
    galleryImages: ['https://i.ibb.co/Y4hq47ZT/Picsart-26-07-20-12-25-02-050.jpg'],
    tags: ['شعار مقهى', 'تايبوجرافي عربي', 'Logo Emblem'],
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop'],
    deliverables: ['ملفات الشعار العالية الجودة (AI, EPS, SVG, PNG)']
  },
  {
    id: 'br-1',
    categoryId: 'logo-design',
    title: 'Solstice Botanicals Logo Design',
    titleArabic: 'شعار ولوجو سولستيس الطبيعية',
    client: 'Solstice Botanicals',
    year: '2026',
    description: 'شعار ناعم وأنيق يجمع بين الرمزية العضوية والخطوط الحديثة النظيفة.',
    coverImage: 'https://i.ibb.co/d4CVwrNp/Picsart-26-07-19-14-45-06-681.jpg',
    galleryImages: ['https://i.ibb.co/d4CVwrNp/Picsart-26-07-19-14-45-06-681.jpg'],
    tags: ['Logo Design', 'Minimalist Emblem', 'Vector Mark'],
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop'],
    deliverables: ['الشعار بكافة صيغه الأساسية والرمزية'],
    featured: true
  },
  {
    id: 'br-7',
    categoryId: 'logo-design',
    title: 'Rawafed Innovation Hub Tech Logomark',
    titleArabic: 'شعار مركز روافد للابتكار والتقنية',
    client: 'Rawafed Innovation Hub - Dubai',
    year: '2026',
    description: 'شعار تقني مبتكر بحس مستقبلي عالي الجودة يعبر عن الابداع والتطوير.',
    coverImage: 'https://i.ibb.co/fYz3ShdS/Picsart-26-07-19-14-49-27-932.jpg',
    galleryImages: ['https://i.ibb.co/fYz3ShdS/Picsart-26-07-19-14-49-27-932.jpg'],
    tags: ['شعار تقني', 'لوجو مبتكر', 'Tech Monogram'],
    toolsUsed: ['Adobe Illustrator', 'Photoshop'],
    deliverables: ['ملفات الشعار العالية الجودة']
  },
  {
    id: 'br-8',
    categoryId: 'logo-design',
    title: 'Diwaniyah Oriental Lounge Restaurant Logo',
    titleArabic: 'شعار ديوانية العود الفاخرة',
    client: 'Diwaniyah Group - Abu Dhabi',
    year: '2025',
    description: 'تصميم شعار فاخر يعبر عن الأصالة والضيافة العربية الشرقية الكلاسيكية.',
    coverImage: 'https://i.ibb.co/99bbTwnV/Picsart-26-07-19-14-37-04-333.jpg',
    galleryImages: ['https://i.ibb.co/99bbTwnV/Picsart-26-07-19-14-37-04-333.jpg'],
    tags: ['شعار فاخر', 'خط عربي', 'لوجو مطاعم'],
    toolsUsed: ['Adobe Illustrator', 'Photoshop'],
    deliverables: ['الشعار الذهبي والملفات الفيكتور']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'مهندس خالد العتيبي',
    clientRole: 'الرئيس التنفيذي',
    company: 'مجموعة الفنار للتطوير العقاري',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'التعامل مع الأستاذ أحمد كان تجربة استثنائية! قام بتصميم بروفايل الشركة والهوية البصرية بأسلوب راقي يجمع بين الخط العربي الأصيل والحداثة العالمية. التزامه بالمواعيد ودقته في التفاصيل جعلتنا نعتمد عليه كشريك تصميم دائم.',
    projectType: 'بروفايل الشركة والهوية البصرية',
    date: 'يناير 2026'
  },
  {
    id: 't-2',
    clientName: 'سارة الشمري',
    clientRole: 'مديرة التسويق الرقمي',
    company: 'براند روزا للتجميل',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'تصاميم السوشيال ميديا اللي صممها أحمد حققت زيادة في التفاعل بنسبة 40% في أول شهر! حس فني عالي جداً وفهم عميق للجمهور المستهدف وتنسيق الألوان ممتاز.',
    projectType: 'حملات السوشيال ميديا',
    date: 'ديسمبر 2025'
  },
  {
    id: 't-3',
    clientName: 'د. طارق الحامد',
    clientRole: 'المؤسس والشريك الإداري',
    company: 'عيادات فيتا الطبية',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'أحمد مصمم محترف بمعنى الكلمة، يقدم أفكار برة الصندوق ويتقن التايبوجرافي العربي بشكل مبهر. البروفايل المعماري والهوية خرجت بأعلى معايير الطباعة.',
    projectType: 'تصميم بروفايل ومطبوعات',
    date: 'فبراير 2026'
  },
  {
    id: 't-4',
    clientName: 'م. يوسف الغامدي',
    clientRole: 'مدير قطاع العلامة التجارية',
    company: 'سلسلة كافيهات أروما',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'شغف أستاذ أحمد بالتفاصيل والدقة في تنفيذ شعار القهوة المختصة والخطوط العربية المخصصة صدمنا من جمال النتيجة. سرعة في التعديلات وسلاسة في التواصل.',
    projectType: 'تطوير الهوية والشعار',
    date: 'نوفمبر 2025'
  },
  {
    id: 't-5',
    clientName: 'أ. عبد العزيز الزهراني',
    clientRole: 'رئيس مجلس الإدارة',
    company: 'مجموعة الزهراني القابضة',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'تصميم بروفايل الشركة كان أكثر من رائع! الخطوط متناسقة والألوان جذابة والطباعة خرجت بأعلى جودة ممتازة. شكراً لأحمد على الاحترافية.',
    projectType: 'بروفايل الشركة',
    date: 'يناير 2026'
  },
  {
    id: 't-6',
    clientName: 'نورة السبيعي',
    clientRole: 'مؤسسة البراند',
    company: 'علامة نورة للعبايات والأزياء',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'تصاميم الهوية والشعار والانستجرام كانت قمة في الأناقة والفخامة. أحمد عنده لمسة فنية خاصة تعكس روح البراند الخليجي العصري.',
    projectType: 'هوية بصرية كاملة',
    date: 'أكتوبر 2025'
  },
  {
    id: 't-7',
    clientName: 'م. إبراهيم المصري',
    clientRole: 'مدير تطوير المنتجات',
    company: 'شركة تقنية الخليج',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'أحمد أبدع في تصميم واجهات العرض وعروض التقديم الاستثمارية للشركة. استطاع تحويل بيانات معقدة إلى انفوجرافيك جذاب وسهل الفهم.',
    projectType: 'العروض التقديمية والانفوجرافيك',
    date: 'ديسمبر 2025'
  },
  {
    id: 't-8',
    clientName: 'فاطمة الهاشمي',
    clientRole: 'مديرة التسويق',
    company: 'وكالة آفاق للإعلام - دبي',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'من أفضل المصممين اللي تعاملنا معاهم في دبي. سرعة الاستجابة وابتكار أفكار جديدة لكل حملة إعلانية خليجية.',
    projectType: 'حملات السوشيال ميديا',
    date: 'يناير 2026'
  },
  {
    id: 't-9',
    clientName: 'أ. عمر الدوسري',
    clientRole: 'مدير العمليات',
    company: 'سلسلة مطاعم الجود',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'تصاميم المنيو والمطبوعات والسوشيال ميديا كانت مبهرة جداً وحققت نجاح كبير في الافتتاح. شكراً أستاذ أحمد على جهودك العظيمة.',
    projectType: 'هوية مطاعم ومطبوعات',
    date: 'نوفمبر 2025'
  },
  {
    id: 't-10',
    clientName: 'م. حسام الدين شريف',
    clientRole: 'مدير المشاريع',
    company: 'شركة إنماء للاستشارات',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'التزام بالوقت، جودة فائقة، وأسلوب راقي جداً في التعامل. تصميم البورشور وبروفايل الشركة تجاوز توقعاتنا بكثير.',
    projectType: 'بروفايل الشركة',
    date: 'فبراير 2026'
  },
  {
    id: 't-11',
    clientName: 'ريم الكواري',
    clientRole: 'مديرة العلاقات العامة',
    company: 'مؤسسة قطر للابتكار',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'التايبوجرافي العربي والدمج بين الشعار والخط الكوفي كان لوحة فنية ساحرة. كل الشكر والتقدير للأستاذ أحمد.',
    projectType: 'تطوير الهوية والخط العربي',
    date: 'ديسمبر 2025'
  },
  {
    id: 't-12',
    clientName: 'أ. فيصل المطيري',
    clientRole: 'رئيس التسويق',
    company: 'تطبيق توصيل سريع',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'تصاميم الإعلانات الممولة والسوشيال ميديا زادت من نسبة التحميلات بشكل ملحوظ. احترافية عالية وذوق رفيع.',
    projectType: 'إعلانات السوشيال ميديا',
    date: 'يناير 2026'
  },
  {
    id: 't-13',
    clientName: 'هند العلي',
    clientRole: 'صاحبة المشروع',
    company: 'مخبز لوز وجوز',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'شعار المخبز وأغلفة المنتجات صُممت بلمسة دافئة وجذابة جداً. زبائننا يعشقون تفاصيل العبوة والتغليف.',
    projectType: 'تغليف هدايا ومنتجات',
    date: 'نوفمبر 2025'
  },
  {
    id: 't-14',
    clientName: 'م. أحمد باخشوين',
    clientRole: 'مدير التسويق',
    company: 'شركة أورورا للبرمجيات',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'أحمد يقدم تصاميم سابقة لعصرها. فهمه لمتطلبات التسويق الرقمي والهويات البصرية يجعل التعامل معاه مكسب حقيقي.',
    projectType: 'هوية تقنية وسوشيال ميديا',
    date: 'يناير 2026'
  },
  {
    id: 't-15',
    clientName: 'خديجة البلوشي',
    clientRole: 'رئيسة قسم الإبداع',
    company: 'دار النشر الحديثة - مسقط',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'تصميم أغلفة الكتب والكتالوجات كان ساحراً ومتناسقاً جداً مع الخط العربي. شكرًا على الإتقان والتميز.',
    projectType: 'تصميم مطبوعات وكتالوجات',
    date: 'أكتوبر 2025'
  },
  {
    id: 't-16',
    clientName: 'أ. سلمان العنيزي',
    clientRole: 'مدير الشراكات',
    company: 'شركة وادي التقنية',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'تصميم بروفايل المبيعات والـ Pitch Deck خلى عروضنا أمام المستثمرين احترافية ومقنعة للغاية.',
    projectType: 'عروض مستثمرين وبروفايل',
    date: 'ديسمبر 2025'
  },
  {
    id: 't-17',
    clientName: 'مروة الشريف',
    clientRole: 'مديرة متجر إلكتروني',
    company: 'متجر أوركيد للموضة',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'تصاميم بنرات المتجر وبوستات العروض جابت مبيعات ممتازة في مواسم التخفيضات. صبور جداً في التعديلات.',
    projectType: 'تصاميم متاجر وسوشيال ميديا',
    date: 'يناير 2026'
  },
  {
    id: 't-18',
    clientName: 'أ. بدر العتيبي',
    clientRole: 'مؤسس المركز',
    company: 'فتنس بوكس الرياضي',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'هوية المركز الرياضي والمطبوعات كانت مليئة بالطاقة والحيوية. تصميم شعار مبتكر ورائع جداً.',
    projectType: 'هوية رياضية وشعار',
    date: 'نوفمبر 2025'
  },
  {
    id: 't-19',
    clientName: 'م. زياد الشامي',
    clientRole: 'مدير الجودة',
    company: 'شركة المدار للمقاولات',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'بروفايل مقاولات ضخم مكون من 32 صفحة أخرجه أحمد بإتقان شديد ودقة متناهية في توزيع الألوان والشبكية.',
    projectType: 'بروفايل مقاولات',
    date: 'فبراير 2026'
  },
  {
    id: 't-20',
    clientName: 'ليلى السويدي',
    clientRole: 'مستشارة تسويق',
    company: 'استشارات إبداعية - دبي',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'أحمد من القلائل الذين يدمجون بين بساطة الديزاين العالمي وهيبة الخط العربي. أنصح بشدة بالتعامل مع أستاذ أحمد لكل براند يبحث عن التميز.',
    projectType: 'استشارات وتصميم براند',
    date: 'يناير 2026'
  }
];
