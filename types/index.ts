export interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

export interface Badge {
  text: string;
  color: 'orange' | 'yellow' | 'blue' | 'green' | 'purple';
  link?: string;
}

export interface Experience {
  id: string;
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  logo: string;
  badges?: Badge[];
  description?: string;
  team?: string;
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
