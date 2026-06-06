export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'saas' | 'ai' | 'business' | 'e-commerce';
  tags: string[];
  results: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  tags: string[];
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName: string;
  problem: string;
  solution: string;
  techUsed: string[];
  impact: string;
  metrics: {
    label: string;
    value: string;
  }[];
  image: string;
}

export interface Service {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
  features: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  review: string;
  rating: number;
  avatar: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  badge?: string;
  cta: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  budget: string;
  projectType: string;
  projectDetails: string;
}
