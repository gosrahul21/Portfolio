export interface PortfolioData {
  personal: PersonalInfo;
  navigation: NavigationConfig;
  hero: HeroSection;
  skills: SkillsSection;
  projects: ProjectsSection;
  experience: ExperienceSection;
  achievements: AchievementsSection;
  education: EducationSection;
  contact: ContactSection;
  theme: ThemeConfig;
  seo: SEOConfig;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  description: string;
  welcomeMessage: string;
  cvDownloadUrl: string;
  avatar: string;
}

export interface NavigationConfig {
  sections: string[];
  logo: {
    icon: string;
    gradient: string;
  };
}

export interface HeroSection {
  mainHeading: {
    line1: string;
    line2: string;
    line3: string;
  };
  gradients: {
    line1: string;
    line2: string;
    line3: string;
  };
  ctaButtons: {
    primary: CTAButton;
    secondary: CTAButton;
  };
  stats: Stat[];
}

export interface CTAButton {
  text: string;
  action: 'scroll' | 'download' | 'link' | 'email';
  target?: string;
  url?: string;
  email?: string;
  icon?: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface SkillsSection {
  title: string;
  subtitle: string;
  list: Skill[];
}

export interface Skill {
  name: string;
  level: number;
  color: string;
}

export interface ProjectsSection {
  title: string;
  subtitle: string;
  list: Project[];
}

export type ProjectCategory = 'Company' | 'Freelance' | 'SAAS';

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  category: ProjectCategory;
}

export interface ContactSection {
  title: string;
  subtitle: string;
  web3formsKey?: string;
  ctaButtons: {
    primary: CTAButton;
    secondary: CTAButton;
  };
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface ThemeConfig {
  colors: {
    primary: {
      blue: string;
      purple: string;
      pink: string;
      green: string;
    };
    gradients: {
      hero: string;
      cta: string;
      text: string;
    };
  };
  defaults: {
    threeEnabled: boolean;
    motionIntensity: number;
    darkMode: boolean;
  };
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
}

export interface ExperienceSection {
  title: string;
  subtitle: string;
  list: Experience[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
  logo?: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon?: string;
}

export interface AchievementsSection {
  title: string;
  subtitle: string;
  list: Achievement[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  score: string;
  location: string;
}

export interface EducationSection {
  title: string;
  subtitle: string;
  list: Education[];
}