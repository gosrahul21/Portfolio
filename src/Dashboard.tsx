import { useState, useEffect, useRef, useMemo } from "react";
import MagneticCursor from "./components/MagneticCursor";
import AnimatedBackground from "./components/AnimatedBackground";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ProjectsFilter from "./components/ProjectsFilter";
import CalendlySection from "./components/CalendlySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
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
    const saved = localStorage.getItem("theme.threeEnabled");
    return saved ? JSON.parse(saved) : themeConfig.defaults.threeEnabled;
  });
  const [motionIntensity] = useState<number>(() => {
    const saved = localStorage.getItem("theme.motionIntensity");
    return saved ? Number(saved) : themeConfig.defaults.motionIntensity;
  });
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [searchText, setSearchText] = useState("");

  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
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

    [heroRef.current, projectsRef.current, contactRef.current].forEach(
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <MagneticCursor />
      <AnimatedBackground />

      <Navigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="h-20" />

      <HeroSection
        heroRef={heroRef}
        threeEnabled={threeEnabled}
        motionIntensity={motionIntensity}
      />

      <SkillsSection skills={portfolioData.skills.list} />

      <ProjectsFilter
        allTags={allTags}
        onFilterChange={(tags, search) => {
          setActiveTags(tags);
          setSearchText(search);
        }}
      />

      <ProjectsSection
        projects={filteredProjects}
        projectsRef={projectsRef}
        onProjectHover={handleProjectHover}
        onProjectLeave={handleProjectLeave}
      />

      <CalendlySection />

      <ContactSection contactRef={contactRef} />

      <Footer />

      {/* Music Player */}
      <MusicPlayer isVisible={true} />
    </div>
  );
}
