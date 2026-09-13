export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  category: 'web2' | 'web3' | 'growth' | 'strategy';
  deliverables: string[];
  features: { title: string; desc: string }[];
  technologies?: string[];
  workflow?: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  ctaText: string;
  statsHighlight?: { label: string; value: string };
  tiers?: { name: string; badge: string; description: string; highlights: string[]; suitableFor: string }[];
  packages?: { name: string; badge: string; priceDescription: string; features: string[] }[];
}

export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  heroHeadline: string;
  description: string;
  audience: string;
  challenges: string[];
  journeySteps: { step: string; title: string; desc: string }[];
  recommendedServices: string[];
  caseStudyRef?: string;
  ctaHeadline: string;
  ctaButtonText: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: 'Web2' | 'Web3' | 'Blockchain' | 'Marketing' | 'AI' | 'Growth';
  year: string;
  summary: string;
  challenge: string;
  strategy: string;
  solution: string;
  technologies: string[];
  services: string[];
  results: { metric: string; label: string }[];
  testimonial?: { quote: string; author: string; role: string };
  imageTheme: 'cyan' | 'purple' | 'emerald' | 'amber';
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  roleCategory: 'Leadership' | 'Engineering' | 'Growth & Strategy' | 'Web3';
  bio: string;
  expertise: string[];
  linkedin: string;
  twitter?: string;
  avatarSeed: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Web2' | 'Web3' | 'Blockchain' | 'AI' | 'Marketing' | 'Fundraising' | 'Growth' | 'Technology';
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishDate: string;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  projectType: string;
  rating: number;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  subtext?: string;
}

export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Remote';
  description: string;
  requirements: string[];
}
