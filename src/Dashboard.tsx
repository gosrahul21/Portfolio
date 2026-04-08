import { useState, useEffect, useRef, useMemo } from "react";
import MagneticCursor from "./components/MagneticCursor";
import AnimatedBackground from "./components/AnimatedBackground";
import ParallaxBackground from "./components/ParallaxBackground";
import ScrollProgressIndicator from "./components/ScrollProgressIndicator";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ProjectsFilter from "./components/ProjectsFilter";
import CalendlySection from "./components/CalendlySection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import AchievementsSection from "./components/AchievementsSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import ChatBot from "./components/ChatBot";
import { 
  getPortfolioData, 
  getAllProjectTags, 
  filterProjects,
  getThemeConfig 
} from "./utils/portfolio-data";

export default function CoolestPortfolio() {
  // Get portfolio data and theme defaults
  const portfolioData = getPortfolioData();
  const themeConfig = getThemeConfig();
  
  const [darkMode, setDarkMode] = useState(themeConfig.defaults.darkMode);
  const [_hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [_cursorText, setCursorText] = useState("");
  const [activeSection, setActiveSection] = useState(portfolioData.navigation.sections[0]);
  const [threeEnabled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return themeConfig.defaults.threeEnabled;
    const saved = localStorage.getItem("theme.threeEnabled");
    return saved ? JSON.parse(saved) : themeConfig.defaults.threeEnabled;
  });
  const [motionIntensity] = useState<number>(() => {
    if (typeof window === 'undefined') return themeConfig.defaults.motionIntensity;
    const saved = localStorage.getItem("theme.motionIntensity");
    return saved ? Number(saved) : themeConfig.defaults.motionIntensity;
  });
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [searchText, setSearchText] = useState("");

  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    // Store theme preference in localStorage
    localStorage.setItem("theme.darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id || portfolioData.navigation.sections[0]);
          }
        });
      },
      { threshold: 0.5 }
    );

    [
      heroRef.current, 
      projectsRef.current, 
      experienceRef.current, 
      achievementsRef.current, 
      educationRef.current, 
      contactRef.current
    ].forEach(
      (ref) => {
        if (ref) observer.observe(ref);
      }
    );

    return () => observer.disconnect();
  }, [portfolioData.navigation.sections]);

  // Get all project tags from centralized data
  const allTags = useMemo(() => getAllProjectTags(), []);

  // Filter projects using utility function
  const filteredProjects = useMemo(() => {
    return filterProjects(activeTags, searchText);
  }, [activeTags, searchText]);

  const handleProjectHover = (index: number) => {
    setHoveredProject(index);
    setCursorText(filteredProjects[index].title);
  };

  const handleProjectLeave = () => {
    setHoveredProject(null);
    setCursorText("");
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-black text-white' 
        : 'bg-gray-50 text-gray-900'
    } overflow-x-hidden`}>
      {/* Enhanced Background Layers */}
      <AnimatedBackground />
      
      {/* Scroll Progress Indicators */}
      <ScrollProgressIndicator darkMode={darkMode} />
      
      {/* Interactive Cursor */}
      <MagneticCursor />

      {/* Navigation */}
      <Navigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="h-20" />

      {/* Hero Section with Parallax Background */}
      <div className="relative">
        <ParallaxBackground darkMode={darkMode} />
        <HeroSection
          heroRef={heroRef}
          threeEnabled={threeEnabled}
          motionIntensity={motionIntensity}
          darkMode={darkMode}
        />
      </div>

      {/* Skills Section with Staggered Animations */}
      <SkillsSection skills={portfolioData.skills.list} darkMode={darkMode} />

      {/* Enhanced Projects Filter */}
      <ProjectsFilter
        allTags={allTags}
        onFilterChange={(tags, search) => {
          setActiveTags(tags);
          setSearchText(search);
        }}
        darkMode={darkMode}
      />

      {/* Experience Section */}
      <div ref={experienceRef}>
        <ExperienceSection darkMode={darkMode} />
      </div>

      {/* Projects Section with Scroll Animations */}
      <ProjectsSection
        projects={filteredProjects}
        projectsRef={projectsRef}
        onProjectHover={handleProjectHover}
        onProjectLeave={handleProjectLeave}
        darkMode={darkMode}
      />

      {/* Achievements Section */}
      <div ref={achievementsRef}>
        <AchievementsSection darkMode={darkMode} />
      </div>

      {/* Education Section */}
      <div ref={educationRef}>
        <EducationSection darkMode={darkMode} />
      </div>

      {/* Calendly Section */}
      <CalendlySection darkMode={darkMode} />

      {/* Contact Section with Enhanced Animations */}
      <ContactSection contactRef={contactRef} darkMode={darkMode} />

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Music Player (Bottom Left) */}
      <MusicPlayer isVisible={true} darkMode={darkMode} />
      
      {/* AI ChatBot (Bottom Right) */}
      <ChatBot darkMode={darkMode} />
    </div>
  );
}
