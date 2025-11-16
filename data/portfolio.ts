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
    name: 'Ansar',
    tagline: 'connecting refugees with resources',
    description: 'Built an mvp for a platform to connect refugees with resources and opportunities - won first place at the MTC tech for social good hackathon with my best friend',
    icon: '/hand.png',
    twitterUrl: 'https://x.com/samihao11/status/1912527987410423813',
    websiteUrl: 'https://drive.google.com/file/d/1hvrYtphF6IvF9BoKZ5J0fqOKE3HocD6a/view',
  },
  {
    id: '2',
    name: 'InsightLoop',
    tagline: 'ai for managers',
    description: "A team performance dashboard that records meeting audio with Rust, transcribes it using AI, and analytically tracks each team member's contributions",
    icon: '/refresh.png',
    githubUrl: 'https://github.com/samihao11/InsightLoop',
  },
  {
    id: '3',
    name: 'Finternship',
    tagline: 'ai for cooked cs students',
    description: 'Web app that gives you reccomendations for features to add to a github project based on learing potential',
    icon: '/monitor.png',
    githubUrl: 'https://github.com/samihao11/Finternship',
  },
  {
    id: '4',
    name: 'FocusLock',
    tagline: 'lockdown browsers for deep work',
    description: 'Chrome extension that locks down your browser and only lets you access sites needed to complete your task',
    icon: '/padlock.png',
    githubUrl: 'https://github.com/samihao11/Locked',
  },
];