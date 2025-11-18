import { LucideIcon } from 'lucide-react';
import { 
  PenTool, 
  BookOpen, 
  Palette, 
  FileEdit, 
  Settings, 
  ShoppingCart,
  Rocket,
  Video,
  FileText,
  Award,
  BarChart3,
  Image,
  QrCode,
  Bookmark,
  Code,
  Globe,
  Monitor,
  Megaphone
} from 'lucide-react';

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  fullDescription: string;
  benefits: string[];
  process: string[];
}

export const services: Service[] = [
  {
    slug: 'ghostwriting',
    icon: PenTool,
    title: 'Ghostwriting',
    description: 'Professional writers transform your ideas into compelling manuscripts that capture your unique voice and vision.',
    details: [
      'Complete manuscript development',
      'Genre-specific expertise',
      'Collaborative writing process',
      'Unlimited revisions included'
    ],
    fullDescription: 'Our ghostwriting service pairs you with experienced writers who specialize in your genre. We take your ideas, notes, and vision and transform them into a polished, publication-ready manuscript that sounds authentically like you.',
    benefits: [
      'Save hundreds of hours of writing time',
      'Work with published authors and industry professionals',
      'Maintain complete creative control and ownership',
      'Get expert guidance on structure and storytelling',
      'Receive a professional manuscript ready for publishing'
    ],
    process: [
      'Initial consultation to discuss your vision and goals',
      'Detailed outline development and approval',
      'Chapter-by-chapter writing with regular reviews',
      'Unlimited revisions until you\'re completely satisfied',
      'Final manuscript delivery in your preferred format'
    ]
  },
  {
    slug: 'book-cover-design',
    icon: Palette,
    title: 'Book Cover Design',
    description: 'Custom cover designs that stand out and attract your target readers.',
    details: [
      'Professional graphic design',
      'Multiple concept options',
      'Print and eBook formats',
      'Market-tested designs'
    ],
    fullDescription: 'Your book cover is the first thing readers see and the most important marketing tool you have. Our designers create stunning, genre-appropriate covers that capture attention and communicate your book\'s essence at a glance.',
    benefits: [
      'Stand out in crowded marketplaces',
      'Professional designs that build credibility',
      'Optimized for thumbnail views on Amazon',
      'Multiple revisions until perfect',
      'Files ready for both print and digital'
    ],
    process: [
      'Consultation to understand your book and target audience',
      'Present 3 unique cover concepts',
      'Refine your chosen design with unlimited revisions',
      'Deliver final files in all required formats',
      'Provide source files for future updates'
    ]
  },
  {
    slug: 'editing-proofreading',
    icon: FileEdit,
    title: 'Editing & Proofreading',
    description: 'Comprehensive editing services to polish your manuscript to perfection.',
    details: [
      'Developmental editing',
      'Line editing',
      'Copy editing',
      'Final proofreading'
    ],
    fullDescription: 'Professional editing is essential for a successful book. Our editors work at multiple levels to improve your manuscript\'s structure, flow, clarity, and correctness, ensuring your readers enjoy a polished, professional reading experience.',
    benefits: [
      'Catch errors you\'ve read past dozens of times',
      'Improve clarity and readability',
      'Strengthen your narrative or argument',
      'Ensure consistency throughout',
      'Meet professional publishing standards'
    ],
    process: [
      'Manuscript evaluation and editing plan',
      'Developmental edit for structure and content',
      'Line edit for style and flow',
      'Copy edit for grammar and consistency',
      'Final proofread before publication'
    ]
  },
  {
    slug: 'formatting',
    icon: Settings,
    title: 'Formatting',
    description: 'Professional formatting for both print and digital publication.',
    details: [
      'Print-ready formatting',
      'eBook conversion',
      'Interior design',
      'Platform-specific optimization'
    ],
    fullDescription: 'Proper formatting ensures your book looks professional inside and out. We handle all the technical details of interior layout, from page margins to chapter headings, creating files optimized for each publishing platform.',
    benefits: [
      'Professional, polished interior design',
      'Properly formatted for all platforms',
      'Print and eBook versions included',
      'No technical headaches for you',
      'Ready to upload immediately'
    ],
    process: [
      'Review manuscript and determine format requirements',
      'Create interior design template',
      'Format manuscript for print and digital',
      'Review and revisions',
      'Deliver print-ready PDFs and eBook files'
    ]
  },
  {
    slug: 'amazon-publishing',
    icon: ShoppingCart,
    title: 'Amazon Publishing',
    description: 'Complete Amazon publishing setup and optimization.',
    details: [
      'KDP account setup',
      'Book listing optimization',
      'Category selection',
      'Pricing strategy'
    ],
    fullDescription: 'Amazon KDP is the world\'s largest book marketplace. We handle the entire setup process, optimize your listing for maximum visibility, and ensure your book is positioned for success from day one.',
    benefits: [
      'Reach millions of potential readers',
      'Expert category and keyword selection',
      'Optimized pricing strategy',
      'Professional book description',
      'Maximized discoverability'
    ],
    process: [
      'Set up or optimize your KDP account',
      'Upload formatted files and cover',
      'Write compelling book description',
      'Select optimal categories and keywords',
      'Configure pricing and distribution'
    ]
  },
  {
    slug: 'multi-platform-publishing',
    icon: BookOpen,
    title: 'Multi-Platform Publishing',
    description: 'Distribution across all major publishing platforms.',
    details: [
      'Wide distribution network',
      'Apple Books, Barnes & Noble',
      'Kobo, Google Play',
      'Library distribution'
    ],
    fullDescription: 'Don\'t limit your book to just Amazon. We distribute your book across all major platforms including Apple Books, Barnes & Noble, Kobo, Google Play, and library systems, maximizing your reach and revenue.',
    benefits: [
      'Reach readers on every platform',
      'Diversify your income streams',
      'Increase overall visibility',
      'Access to library markets',
      'Professional distribution management'
    ],
    process: [
      'Prepare optimized files for each platform',
      'Set up accounts on all major retailers',
      'Upload and configure listings',
      'Coordinate simultaneous launch',
      'Monitor and report on all platforms'
    ]
  },
  {
    slug: 'web-development',
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for businesses of all sizes.',
    details: [
      'Responsive web design',
      'Modern frameworks (React, Next.js, Vue)',
      'E-commerce integration',
      'Content management systems',
      'API development',
      'Performance optimization'
    ],
    fullDescription: 'We build fast, modern, and scalable websites and web applications tailored to your business needs. From simple business websites to complex web applications, we use cutting-edge technologies to create digital experiences that drive results.',
    benefits: [
      'Professional, modern design',
      'Mobile-responsive across all devices',
      'Fast loading times and SEO optimized',
      'Scalable architecture for growth',
      'Easy content management',
      'Ongoing support and maintenance'
    ],
    process: [
      'Discovery call to understand your needs and goals',
      'Design mockups and wireframes for approval',
      'Development using modern frameworks and best practices',
      'Testing across devices and browsers',
      'Launch and deployment with training',
      'Ongoing maintenance and updates'
    ]
  },
  {
    slug: 'website-development',
    icon: Globe,
    title: 'Author Website Development',
    description: 'Custom author websites to establish your online presence.',
    details: [
      'Professional design',
      'Payment integration',
      'SEO optimization',
      'Mobile responsive'
    ],
    fullDescription: 'Your author website is your home base on the internet. We create beautiful, functional websites that showcase your work, build your brand, and can even sell your books directly to readers.',
    benefits: [
      'Own your platform and audience',
      'Sell directly without marketplace fees',
      'Build your email list',
      'Professional author brand',
      'Complete creative control'
    ],
    process: [
      'Consultation on goals and design preferences',
      'Custom website design and development',
      'Content integration and optimization',
      'Payment and email integration',
      'Launch and training'
    ]
  },
  {
    slug: 'digital-marketing',
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your online presence and drive results.',
    details: [
      'SEO & search engine optimization',
      'Social media marketing',
      'Content marketing',
      'Email marketing campaigns',
      'Pay-per-click advertising',
      'Analytics & reporting'
    ],
    fullDescription: 'Drive growth with data-driven digital marketing strategies. We help businesses and authors build their online presence, attract customers, and convert leads into sales through proven digital marketing techniques.',
    benefits: [
      'Increase online visibility and brand awareness',
      'Drive qualified traffic to your website',
      'Generate leads and conversions',
      'Build engaged social media communities',
      'Measurable ROI with detailed analytics',
      'Expert strategy and execution'
    ],
    process: [
      'Audit current digital presence and performance',
      'Develop comprehensive marketing strategy',
      'Implement SEO, social media, and content campaigns',
      'Set up tracking and analytics',
      'Monitor performance and optimize',
      'Monthly reporting and strategy refinement'
    ]
  },
  {
    slug: 'seo-digital-marketing',
    icon: BarChart3,
    title: 'SEO & Digital Marketing',
    description: 'Search engine optimization and digital marketing strategies.',
    details: [
      'Keyword research',
      'On-page optimization',
      'Content strategy',
      'Analytics tracking'
    ],
    fullDescription: 'Get found online with strategic SEO and digital marketing. We optimize your online presence so readers searching for books like yours find you first.',
    benefits: [
      'Increase organic traffic',
      'Rank higher in search results',
      'Attract qualified readers',
      'Measurable results',
      'Long-term visibility growth'
    ],
    process: [
      'Keyword research and competitor analysis',
      'Optimize website and content',
      'Create content strategy',
      'Implement tracking and analytics',
      'Monthly reporting and optimization'
    ]
  },
  {
    slug: 'social-media-marketing',
    icon: BarChart3,
    title: 'Social Media Marketing',
    description: 'Complete social media management and content creation.',
    details: [
      'Account creation & setup',
      'Content calendar',
      'Post creation & scheduling',
      'Engagement management'
    ],
    fullDescription: 'Build and engage your audience on social media. We handle everything from content creation to community management, helping you build a loyal following of readers.',
    benefits: [
      'Consistent, professional presence',
      'Grow your following organically',
      'Engage with your audience',
      'Drive book sales',
      'Save time and effort'
    ],
    process: [
      'Strategy development and platform selection',
      'Content calendar creation',
      'Custom content creation',
      'Scheduled posting and engagement',
      'Monthly analytics and reporting'
    ]
  },
  {
    slug: 'video-trailer-production',
    icon: Video,
    title: 'Video Trailer Production',
    description: 'Engaging book trailers to promote your work.',
    details: [
      'Professional videography',
      'Script development',
      'Music & voiceover',
      'Multi-platform distribution'
    ],
    fullDescription: 'Book trailers are powerful marketing tools that bring your story to life. Our video production team creates compelling trailers that capture attention and drive sales.',
    benefits: [
      'Capture attention with video',
      'Perfect for social media marketing',
      'Professional production quality',
      'Increase conversion rates',
      'Shareable content that spreads'
    ],
    process: [
      'Concept development and scriptwriting',
      'Storyboard and production planning',
      'Filming, animation, or stock footage',
      'Editing with music and voiceover',
      'Delivery in multiple formats'
    ]
  },
  {
    slug: 'press-release',
    icon: FileText,
    title: 'Press Release',
    description: 'Professional press releases to announce your book launch.',
    details: [
      'Professional copywriting',
      'Media distribution',
      'Targeted outreach',
      'Follow-up support'
    ],
    fullDescription: 'Generate publicity and credibility with professional press releases. We write, distribute, and follow up to get your book noticed by media outlets and influencers.',
    benefits: [
      'Generate media coverage',
      'Build author credibility',
      'Reach new audiences',
      'Professional industry presence',
      'Lasting online visibility'
    ],
    process: [
      'Craft compelling press release',
      'Identify target media outlets',
      'Distribute to relevant contacts',
      'Follow up with key contacts',
      'Provide media coverage report'
    ]
  },
  {
    slug: 'bestseller-campaign',
    icon: Award,
    title: 'Bestseller Campaign',
    description: 'Strategic campaigns designed to achieve bestseller status.',
    details: [
      'Launch strategy',
      'Marketing coordination',
      'Review generation',
      'Sales optimization'
    ],
    fullDescription: 'Our bestseller campaigns combine strategic timing, coordinated marketing, and sales optimization to give your book the best chance of hitting bestseller lists.',
    benefits: [
      'Maximize launch impact',
      'Coordinate all marketing efforts',
      'Generate reviews quickly',
      'Achieve bestseller status',
      'Long-term sales momentum'
    ],
    process: [
      'Develop comprehensive launch strategy',
      'Build pre-launch audience',
      'Coordinate launch day activities',
      'Drive concentrated sales',
      'Maintain momentum post-launch'
    ]
  },
  {
    slug: 'a-plus-content',
    icon: BarChart3,
    title: 'A+ Content',
    description: 'Enhanced Amazon content to boost conversions.',
    details: [
      'Visual storytelling',
      'Brand showcase',
      'Feature highlights',
      'Increased engagement'
    ],
    fullDescription: 'A+ Content transforms your Amazon listing from plain text to a rich, visual experience. This premium content option increases engagement, builds trust, and improves conversion rates.',
    benefits: [
      'Stand out from competitors',
      'Increase conversion rates',
      'Reduce returns',
      'Build brand recognition',
      'Professional presentation'
    ],
    process: [
      'Gather book information and assets',
      'Design A+ Content modules',
      'Write compelling copy',
      'Submit for Amazon approval',
      'Monitor performance metrics'
    ]
  },
  {
    slug: 'amazon-optimization',
    icon: BarChart3,
    title: 'Amazon Optimization',
    description: 'Comprehensive Amazon listing optimization.',
    details: [
      'Keyword optimization',
      'Category selection',
      'Pricing strategy',
      'A/B testing'
    ],
    fullDescription: 'Amazon\'s algorithm determines which books get visibility. We optimize every element of your listing to maximize discoverability and sales.',
    benefits: [
      'Higher search rankings',
      'More organic traffic',
      'Better conversion rates',
      'Competitive advantage',
      'Increased revenue'
    ],
    process: [
      'Analyze current performance',
      'Research optimal keywords',
      'Optimize title, subtitle, and description',
      'Select best categories',
      'Test and refine continuously'
    ]
  },
  {
    slug: 'illustrations',
    icon: Image,
    title: 'Illustrations',
    description: 'Custom illustrations for children\'s books and special editions.',
    details: [
      'Professional illustrators',
      'Multiple styles available',
      'Print-ready artwork',
      'Unlimited revisions'
    ],
    fullDescription: 'Bring your story to life with custom illustrations. Our talented illustrators create beautiful artwork that perfectly complements your text and delights readers.',
    benefits: [
      'Unique, custom artwork',
      'Perfect match for your story',
      'Multiple illustration styles',
      'High-resolution files',
      'Print and digital ready'
    ],
    process: [
      'Discuss style and vision',
      'Character and setting sketches',
      'Detailed illustration creation',
      'Review and revisions',
      'Final artwork delivery'
    ]
  },
  {
    slug: 'qr-code-integration',
    icon: QrCode,
    title: 'QR Code Integration',
    description: 'Custom QR codes for interactive marketing materials.',
    details: [
      'Custom design',
      'Trackable links',
      'Print-ready files',
      'Analytics integration'
    ],
    fullDescription: 'QR codes bridge the gap between physical and digital marketing. We create custom, trackable QR codes that enhance your marketing materials and provide valuable analytics.',
    benefits: [
      'Connect print to digital',
      'Track engagement',
      'Easy reader access',
      'Professional design',
      'Actionable analytics'
    ],
    process: [
      'Determine QR code purpose and destination',
      'Design custom QR code',
      'Set up tracking',
      'Deliver print-ready files',
      'Provide analytics access'
    ]
  },
  {
    slug: 'personalized-isbn',
    icon: Bookmark,
    title: 'Personalized ISBN',
    description: 'Professional ISBN registration and management.',
    details: [
      'ISBN purchase',
      'Publisher assignment',
      'Barcode generation',
      'Copyright registration'
    ],
    fullDescription: 'Own your book\'s ISBN under your own publishing imprint. We handle the purchase, registration, and setup so you maintain complete ownership and control.',
    benefits: [
      'Own your publishing identity',
      'Build your imprint',
      'Complete ownership',
      'Professional credibility',
      'Asset for future books'
    ],
    process: [
      'Set up publisher imprint',
      'Purchase ISBN(s)',
      'Register book information',
      'Generate barcodes',
      'Provide all documentation'
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}
