export interface Theme {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface NavLink {
  path: string;
  label: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Startup {
  id: string;
  name: string;
  description: string;
  logo: string;
  founders: string[];
  category: string;
  yearFounded: number;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  benefits: string[];
  eligibility: string[];
  status: 'upcoming' | 'ongoing' | 'completed';
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'video' | 'article' | 'tool';
  link: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  category: string;
  readTime: number;
  image: string;
  websiteUrl: string;
}