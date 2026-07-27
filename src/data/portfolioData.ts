import { CategoryInfo, PortfolioProject, Testimonial } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'logo-design',
    title: 'Logo design',
    arabicTitle: 'تصميم الشعارات',
    iconName: 'pen-tool',
    description: 'Custom logo designs, Arabic calligraphy monograms, emblem design, and vector logomarks.',
    itemCount: 10
  },
  {
    id: 'brand-identity',
    title: 'Brand identity',
    arabicTitle: 'الهوية البصرية',
    iconName: 'palette',
    description: 'Complete brand identities, style guidelines, color systems, typography systems, and stationery.',
    itemCount: 8
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  // Brand Identity Projects
  {
    id: 'br-3',
    categoryId: 'brand-identity',
    title: 'Al-Qimma Financial Advisory Visual Identity',
    titleArabic: 'الهوية البصرية الشاملة لشركة القمة للاستشارات الماليّة',
    client: 'Al-Qimma Advisory - Riyadh',
    year: '2026',
    description: 'نظام هوية بصرية متكامل للقطاع المالي والاستثماري يتضمن دليل الهوية المعتمد، بطاقات الأعمال الفاخرة، الأوراق الرسمية، والقوالب الرقمية.',
    coverImage: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['هوية بصرية', 'دليل الماركة', 'مطبوعات فاخرة', 'Corporate Identity'],
    toolsUsed: ['Adobe Illustrator', 'Adobe InDesign', 'Photoshop'],
    deliverables: ['دليل الهوية البصرية PDF', 'قرطاسية المكاتب والأوراق الرسمية', 'بطاقات الأعمال الراقية'],
    featured: true
  },
  {
    id: 'br-5',
    categoryId: 'brand-identity',
    title: 'Aseel Specialty Coffee Roastery Identity & Packaging',
    titleArabic: 'هوية وتغليف محمصة قهوة أصيل المختصة',
    client: 'Aseel Coffee Roasters - Khobar',
    year: '2025',
    description: 'هوية بصرية معاصرة لمحمصة قهوة مختصة تجمع بين الخط العربي الحديث والألوان الترابية الدافئة مع أكياس التغليف المطبوعة والأكواب.',
    coverImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['هوية مقهى', 'تغليف أكياس القهوة', 'تايبوجرافي عربي', 'Packaging'],
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop'],
    deliverables: ['تغليف أكياس القهوة 250g/1kg', 'أكواب القهوة والمطبوعات', 'دليل الألوان والخطوط']
  },
  {
    id: 'br-1',
    categoryId: 'brand-identity',
    title: 'Solstice Botanicals Brand Identity System',
    titleArabic: 'الهوية البصرية والدليل الإرشادي الموحد',
    client: 'Solstice Botanicals',
    year: '2026',
    description: 'دليل الهوية البصرية الشامل الذي يحدد نظام الألوان، التايبوجرافي، استخدامات اللوجو، المطبوعات، والشعار اللفظي للبراند.',
    coverImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['Brand Identity', 'Packaging Guidelines', 'Stationery'],
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    deliverables: ['Brand Identity Manual', 'Stationery Kit', 'Brand Book PDF'],
    featured: true
  },
  {
    id: 'br-7',
    categoryId: 'brand-identity',
    title: 'Rawafed Innovation Hub Visual Identity & Brand Manual',
    titleArabic: 'هوية ودليل ماركة مركز روافد للابتكار والتقنية',
    client: 'Rawafed Innovation Hub - Dubai',
    year: '2026',
    description: 'هوية تقنية مبتكرة بحس مستقبلي عالي الجودة تشمل الدليل البصري، الـ Pitch Decks، وقوالب السوشيال ميديا والعروض التقديمية.',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['هوية تقنية', 'مركز ابتكار', 'قوالب العروض', 'Tech Identity'],
    toolsUsed: ['Adobe Illustrator', 'Figma', 'Photoshop'],
    deliverables: ['Brand Manual PDF', 'Pitch Deck Template', 'قوالب السوشيال ميديا الموحدة']
  },
  {
    id: 'br-8',
    categoryId: 'brand-identity',
    title: 'Diwaniyah Oriental Lounge Restaurant Branding',
    titleArabic: 'الهوية البصرية وقوائم الطعام لديوانية العود الفاخرة',
    client: 'Diwaniyah Group - Abu Dhabi',
    year: '2025',
    description: 'تصميم هوية فاخرة تعبر عن الضيافة العربية الكلاسيكية، تشمل تصميم قوائم الطعام المذهبة، علب العود والبخور المقدمة للضيوف، والمطبوعات.',
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['هوية مطاعم', 'قوائم طعام', 'تغليف فاخر', 'Restaurant Branding'],
    toolsUsed: ['Adobe Illustrator', 'Adobe InDesign', 'Photoshop'],
    deliverables: ['قوائم الطعام والمنيو الجلدية المذهبة', 'تغليف الهدايا الخاصة', 'قرطاسية وأدوات الطاولة']
  },
  {
    id: 'br-9',
    categoryId: 'brand-identity',
    title: 'Raihan Organic Skincare Packaging & Identity',
    titleArabic: 'الهوية البصرية وتغليف منتجات ريحان الطبيعية للعناية',
    client: 'Raihan Botanicals - Muscat',
    year: '2026',
    description: 'هوية بصرية هادئة وناعمة تعتمد على الخطوط النظيفة والألوان المستوحاة من الطبيعة، مع تصميم زجاجات العناية وأكياس التسوق ودليل الاستخدام.',
    coverImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['تغليف منتجات', 'هوية منتجات طبيعية', 'تصميم العبوات', 'Skincare Packaging'],
    toolsUsed: ['Adobe Illustrator', 'Photoshop 3D Render'],
    deliverables: ['تصميم العبوات والزجاجات', 'أكياس وصناديق الشحن', 'Brand Guidelines Sheet']
  },
  {
    id: 'br-4',
    categoryId: 'brand-identity',
    title: 'Pearl Beach Luxury Resort Brand Identity',
    titleArabic: 'الهوية البصرية الشاملة لمنتجع شاطئ اللؤلؤ الفاخر',
    client: 'Pearl Beach Resort & Spa - Jeddah',
    year: '2026',
    description: 'تطوير هوية بصرية فاخرة تشمل دليل الهوية، المطبوعات الفندقية، لوحة الألوان الذهبية والزرقاء، وعناصر الضيافة للنزلاء.',
    coverImage: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['هوية ضيافة', 'منتجع فاخر', 'دليل الماركة', 'Hospitality Branding'],
    toolsUsed: ['Adobe Illustrator', 'Photoshop'],
    deliverables: ['Brand Guidelines Manual', 'مطبوعات وأدوات النزلاء', 'بطاقات الضيافة']
  },
  {
    id: 'br-6',
    categoryId: 'brand-identity',
    title: 'Sanad Corporate Identity & Branding System',
    titleArabic: 'الهوية البصرية الشاملة لشركة سند اللوجستية',
    client: 'Sanad Express Logistics',
    year: '2026',
    description: 'نظام هوية بصرية معاصر يعبر عن السرعة والموثوقية، يشمل الدليل الإرشادي الموحد، قرطاسية المكاتب، والأوراق الرسمية والتطبيقات الرقمية.',
    coverImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['هوية شركات', 'دليل الماركة', 'قرطاسية', 'Logistics Branding'],
    toolsUsed: ['Adobe Illustrator', 'InDesign'],
    deliverables: ['دليل استخدام العلامة التجارية', 'مستلزمات مكاتب وأوراق رسمية', 'بطاقات العمل والملفات']
  },
  // Logo Design Projects
  {
    id: 'br-2',
    categoryId: 'logo-design',
    title: 'Al-Madar Real Estate Monogram & Logo',
    titleArabic: 'شعار ولوجو شركة المدار العقارية',
    client: 'Al-Madar Properties',
    year: '2026',
    description: 'Luxury Arabic calligraphic monogram paired with geometric typography for an upscale property development brand.',
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['Arabic Calligraphy Monogram', 'Luxury Logo', 'Vector Mark'],
    toolsUsed: ['Adobe Illustrator', 'Calligraphy Vector Tools'],
    deliverables: ['Calligraphic Logo Mark', 'Vector Files (SVG, EPS, AI)', 'Gold Foil Specs'],
    featured: true
  },
  {
    id: 'sm-2',
    categoryId: 'logo-design',
    title: 'Roast & Co. Calligraphic Logomark',
    titleArabic: 'شعار وبصمة قهوة مختصة بالخط العربي',
    client: 'Roast & Co.',
    year: '2025',
    description: 'Custom Arabic calligraphy logomark overlay paired with minimalist coffee emblem typography.',
    coverImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['Logo Emblem', 'Arabic Calligraphy', 'Food & Beverage'],
    toolsUsed: ['Illustrator', 'Photoshop'],
    deliverables: ['Primary & Secondary Monogram', 'Icon Stamp']
  },
  {
    id: 'logo-3',
    categoryId: 'logo-design',
    title: 'Nour Luxury Perfumes Emblem',
    titleArabic: 'شعار عطور نور الفاخرة بالخط العربي',
    client: 'Nour Parfums - Dubai',
    year: '2026',
    description: 'An elegant Arabic calligraphy logo mark blending traditional الديواني flourish with a modern perfume bottle silhouette.',
    coverImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['Arabic Monogram', 'Luxury Fragrance Logo', 'Emblem'],
    toolsUsed: ['Adobe Illustrator', 'Calligraphy Vectoring'],
    deliverables: ['Primary Logo Mark', 'Gold Foil Vector Stamp', 'Brand Icon Kit']
  },
  {
    id: 'logo-4',
    categoryId: 'logo-design',
    title: 'Al-Ittihad Investment Group Logomark',
    titleArabic: 'شعار مجموعة الاتحاد الاستثمارية',
    client: 'Al-Ittihad Holding - Riyadh',
    year: '2026',
    description: 'Geometric Arabic Kufic monogram symbolizing structure, growth, and trust in real estate and financial investments.',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['Kufic Monogram', 'Corporate Logo', 'Geometric Vector'],
    toolsUsed: ['Adobe Illustrator', 'Grid Vector System'],
    deliverables: ['Vector Logo Formats (AI, EPS, SVG)', 'Horizontal & Vertical Lockups']
  },
  {
    id: 'logo-5',
    categoryId: 'logo-design',
    title: 'Bait Al-Oud Music Academy Logo',
    titleArabic: 'شعار أكاديمية بيت العود الموسيقية',
    client: 'Bait Al-Oud Cultural Center',
    year: '2025',
    description: 'Artistic fusion of an Oud instrument body curves with fluid Arabic الثلث calligraphy forming an iconic musical emblem.',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['Calligraphic Emblem', 'Cultural Logo', 'Artistic Mark'],
    toolsUsed: ['Hand Calligraphy Sketching', 'Adobe Illustrator'],
    deliverables: ['Custom Vector Logo', 'Monochrome & Color Variations']
  },
  {
    id: 'logo-6',
    categoryId: 'logo-design',
    title: 'Apex Tech Solutions Monogram',
    titleArabic: 'شعار آبيكس للحلول التقنية والبرمجية',
    client: 'Apex Global Tech',
    year: '2026',
    description: 'Sleek, futuristic monogram combining letterforms with network node accents for a cutting-edge software company.',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['Minimalist Logo', 'Tech Monogram', 'Dark Theme Vector'],
    toolsUsed: ['Adobe Illustrator'],
    deliverables: ['App Icon Vectors', 'Logo Grid Sheet', 'SVG Animated Logo']
  },
  {
    id: 'logo-7',
    categoryId: 'logo-design',
    title: 'Waha Desert Resort & Spa Logomark',
    titleArabic: 'شعار منتجع الواحة الصحراوي والسبا',
    client: 'Waha Hospitality - AlUla',
    year: '2025',
    description: 'Organic desert dune contour lines transformed into a luxurious Arabic floral monogram for an eco-resort in AlUla.',
    coverImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['Hospitality Logo', 'Organic Emblem', 'Gold Monogram'],
    toolsUsed: ['Adobe Illustrator', 'Procreate'],
    deliverables: ['Primary & Secondary Logos', 'Signage Vector Standards']
  },
  {
    id: 'logo-8',
    categoryId: 'logo-design',
    title: 'Saffron Specialty Restaurant Stamp',
    titleArabic: 'شعار وختم مطعم زعفران الشرقي',
    client: 'Saffron Dining Group',
    year: '2026',
    description: 'Handcrafted stamp-style emblem blending saffron flower petal curves with Arabic typography.',
    coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['Restaurant Emblem', 'Stamp Logo', 'Culinary Mark'],
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop'],
    deliverables: ['Packaging Stamp Design', 'Menu Header Logo']
  },
  {
    id: 'logo-9',
    categoryId: 'logo-design',
    title: 'Horizon Aviation & Logistics Logo',
    titleArabic: 'شعار أفق للطيران والخدمات اللوجستية',
    client: 'Horizon Air Cargo',
    year: '2025',
    description: 'Dynamic aerodynamic wing emblem combined with geometric Arabic lettering for an international logistics firm.',
    coverImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['Aviation Logo', 'Dynamic Symbol', 'Corporate Vector'],
    toolsUsed: ['Adobe Illustrator'],
    deliverables: ['Livery Vector Logo', 'Corporate Identity Emblem']
  },
  {
    id: 'logo-10',
    categoryId: 'logo-design',
    title: 'Sarmad Fine Jewelry Calligraphic Seal',
    titleArabic: 'شعار وختم مجوهرات سرمد الفاخرة',
    client: 'Sarmad Jewelry House - Kuwait',
    year: '2026',
    description: 'Diamond-shaped calligraphic monogram handcrafted in gold vector curves representing eternal elegance.',
    coverImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['Jewelry Monogram', 'Gold Seal', 'Arabic Calligraphy Logo'],
    toolsUsed: ['Adobe Illustrator', 'Vector Precision Grid'],
    deliverables: ['Embossing Stamp Vector', 'Luxury Packaging Logo']
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
