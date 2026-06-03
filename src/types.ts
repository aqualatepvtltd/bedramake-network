export type ActiveTab = 'home' | 'publishing' | 'writing' | 'tools' | 'about' | 'contact' | 'jobs' | 'admission' | 'scholar' | 'scholar-submission' | 'terms' | 'privacy' | 'cope';

export interface ScholarPaper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  discipline: string;
  pages: number;
  doi: string;
  driveViewUrl: string;
  date: string;
}

export interface Sector {
  id: string;
  title: string;
  shortDesc: string;
  tagline: string;
  description: string;
  iconName: string;
  colorClass: string;
}

export interface EditorialMember {
  name: string;
  role: string;
  institution: string;
  avatar: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface EditorTool {
  category: 'pdf' | 'plagiarism' | 'software' | 'websites' | 'reference';
  name: string;
  description: string;
  link: string;
  badge: string;
  isExternal?: boolean;
}

export interface PublishPackage {
  name: string;
  price: string;
  duration: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  affiliation: string;
  comment: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

