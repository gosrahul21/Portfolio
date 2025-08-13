import portfolioData from '../data/portfolio-data.json';
import type { PortfolioData } from '../types/portfolio-data';

// Load portfolio data
export const getPortfolioData = (): PortfolioData => {
  return portfolioData as PortfolioData;
};

// Helper functions for specific data sections
export const getPersonalInfo = () => getPortfolioData().personal;
export const getNavigationConfig = () => getPortfolioData().navigation;
export const getHeroSection = () => getPortfolioData().hero;
export const getSkillsSection = () => getPortfolioData().skills;
export const getProjectsSection = () => getPortfolioData().projects;
export const getContactSection = () => getPortfolioData().contact;
export const getThemeConfig = () => getPortfolioData().theme;
export const getSEOConfig = () => getPortfolioData().seo;

// Utility function to get all project tags
export const getAllProjectTags = (): string[] => {
  const projects = getProjectsSection().list;
  const tags = new Set<string>();
  projects.forEach(project => {
    project.tech.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};

// Utility function to filter projects by tags and search
export const filterProjects = (activeTags: string[], searchText: string) => {
  const projects = getProjectsSection().list;
  return projects.filter(project => {
    const matchesTags = activeTags.length === 0 || 
      activeTags.every(tag => project.tech.includes(tag));
    
    const matchesSearch = searchText.trim().length === 0 ||
      project.title.toLowerCase().includes(searchText.toLowerCase()) ||
      project.description.toLowerCase().includes(searchText.toLowerCase()) ||
      project.tech.join(" ").toLowerCase().includes(searchText.toLowerCase());
    
    return matchesTags && matchesSearch;
  });
};

// Utility function to get featured projects
export const getFeaturedProjects = () => {
  return getProjectsSection().list.filter(project => project.featured);
};

// Utility function to get social links
export const getSocialLinks = () => {
  return getContactSection().socialLinks;
};

// Utility function to get CTA buttons
export const getCTAButtons = () => {
  return getContactSection().ctaButtons;
}; 