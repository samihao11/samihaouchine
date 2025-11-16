import { SocialLink, Experience, Project} from '@/types';

export const socialLinks: SocialLink[] = [
  { icon: 'linkedin', href: 'https://linkedin.com/in/sami-haouchine', label: 'LinkedIn' },
  { icon: 'instagram', href: 'https://instagram.com/sami.hao', label: 'Instagram' },
  { icon: 'github', href: 'https://github.com/samihao11', label: 'GitHub' },
  { icon: 'twitter', href: 'https://x.com/samihao11', label: 'Twitter' },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Shield AI',
    companyUrl: 'https://shield.ai/',
    role: 'Software Engineer',
    period: 'Sep. 2025 - Present',
    logo: '/shield-ai.jpeg',
    badge: 'Series F-1, $5.3B val',
    badgeColor: 'orange',
    description: 'GenAI team',
  },
  {
    id: '2',
    company: 'doublespeed',
    companyUrl: 'https://doublespeed.ai/',
    role: 'Founding Engineer',
    period: 'May 2025 - Sep. 2025',
    logo: '/doublespeed.png',
    badge: 'A16Z SR #005',
    badgeColor: 'yellow',
    description: 'Employee #1',
  },
  {
    id: '3',
    company: 'Shield AI',
    companyUrl: 'https://shield.ai/',
    role: 'Software Engineering Intern',
    period: 'Jun. 2024 - Aug. 2024',
    logo: '/shield-ai.jpeg',
    badge: 'Series F, $2.7B val',
    badgeColor: 'orange',
    description: 'DevEx team',
  },
  {
    id: '4',
    company: 'University of Michigan Solar Car Team',
    companyUrl: 'https://www.solarcar.engin.umich.edu/',
    role: 'Software Engineer',
    period: 'Jan. 2024 - May 2024',
    logo: '/solar-car.png',
    description: 'Worked on simulator',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    name: 'Project 1',
    tagline: 'filler tagline',
    description: 'filler description',
    icon: '1',  
    githubUrl: 'https://github.com',
    websiteUrl: 'https://example.com',
  },
  {
    id: '2',
    name: 'Project 2',
    tagline: 'filler tagline',
    description: 'filler description',
    icon: '2',
    githubUrl: 'https://github.com',
  },
  {
    id: '3',
    name: 'Project 3',
    tagline: 'filler tagline',
    description: 'filler description',
    icon: '3',
    githubUrl: 'https://github.com',
  },
  {
    id: '4',
    name: 'Project 4',
    tagline: 'filler tagline',
    description: 'filler description',
    icon: '4',
    githubUrl: 'https://github.com',
    twitterUrl: 'https://twitter.com',
  },
];