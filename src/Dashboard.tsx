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
import ThemeControls from "./components/ThemeControls";
import Footer from "./components/Footer";
import type { Project, Skill } from "./types";

export default function CoolestPortfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [_hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [_cursorText, setCursorText] = useState("");
  const [activeSection, setActiveSection] = useState("hero");
  const [threeEnabled, setThreeEnabled] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme.threeEnabled");
    return saved ? JSON.parse(saved) : true;
  });
  const [motionIntensity, setMotionIntensity] = useState<number>(() => {
    const saved = localStorage.getItem("theme.motionIntensity");
    return saved ? Number(saved) : 1;
  });
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [searchText, setSearchText] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

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
            setActiveSection(entry.target.id || "hero");
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
  }, []);

  // Track overall page scroll for planets parallax (0..1)
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const p = total > 0 ? window.scrollY / total : 0;
      setScrollProgress(Math.max(0, Math.min(1, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const projects: Project[] = [
    {
      title: "AI-Powered Trading Platform",
      description:
        "A real-time, low-latency trading interface with AI strategy recommendations and live P/L tracking.",
      image:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1400&q=80",
      tech: ["React", "WebSockets", "Node.js", "TensorFlow", "AI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Blockchain Asset Manager",
      description:
        "Multi-chain wallet creation, transaction scanning, and private key security with event-driven architecture.",
      image:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1400&q=80",
      tech: ["Solidity", "Kafka", "MongoDB", "Web3", "Blockchain"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Hydrogen Supply Chain (NFT-Based)",
      description:
        "On-chain Merkle-proof supply chain tracking with NFT state tokens for transparency.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
      tech: ["React", "Web3.js", "Ethereum", "IPFS", "Web3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Neural Network Visualizer",
      description:
        "Interactive 3D visualization of neural networks with real-time training visualization.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
      tech: ["Three.js", "React", "Python", "TensorFlow", "3D", "AI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Quantum Computing Simulator",
      description:
        "Web-based quantum circuit simulator with drag-and-drop interface and real-time measurements.",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1400&q=80",
      tech: ["WebGL", "React", "Quantum.js", "TypeScript", "3D"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Metaverse Social Platform",
      description:
        "3D virtual world with real-time collaboration, NFT marketplace, and social features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1400&q=80",
      tech: ["Three.js", "WebRTC", "Solidity", "Node.js", "Web3", "3D"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const allTags = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesTags =
        activeTags.length === 0 || activeTags.every((t) => p.tech.includes(t));
      const matchesSearch =
        searchText.trim().length === 0 ||
        p.title.toLowerCase().includes(searchText.toLowerCase()) ||
        p.description.toLowerCase().includes(searchText.toLowerCase()) ||
        p.tech.join(" ").toLowerCase().includes(searchText.toLowerCase());
      return matchesTags && matchesSearch;
    });
  }, [projects, activeTags, searchText]);

  const skills: Skill[] = [
    { name: "React", level: 95, color: "#61dafb" },
    { name: "TypeScript", level: 90, color: "#3178c6" },
    { name: "Node.js", level: 88, color: "#339933" },
    { name: "Three.js", level: 85, color: "#000000" },
    { name: "Solidity", level: 82, color: "#363636" },
    { name: "Python", level: 80, color: "#3776ab" },
    { name: "AWS", level: 78, color: "#ff9900" },
    { name: "Docker", level: 75, color: "#2496ed" },
  ];

  const handleProjectHover = (index: number) => {
    setHoveredProject(index);
    setCursorText(projects[index].title);
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

      <SkillsSection skills={skills} />

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

      <ThemeControls
        threeEnabled={threeEnabled}
        setThreeEnabled={setThreeEnabled}
        motionIntensity={motionIntensity}
        setMotionIntensity={setMotionIntensity}
      />

      <Footer />
    </div>
  );
}
