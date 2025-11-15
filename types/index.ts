export interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

export interface Experience {
  id: string;
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  logo: string;
  badge?: string;
  badgeColor?: string;
  description?: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  githubUrl?: string;
  websiteUrl?: string;
  twitterUrl?: string;
}
