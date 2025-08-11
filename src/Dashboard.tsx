import { useState, useEffect, useRef } from "react";
import MagneticCursor from "./components/MagneticCursor";
import AnimatedBackground from "./components/AnimatedBackground";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import type { Project, Skill } from "./types";

export default function CoolestPortfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [cursorText, setCursorText] = useState("");

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

  const projects: Project[] = [
    {
      title: "AI-Powered Trading Platform",
      description:
        "A real-time, low-latency trading interface with AI strategy recommendations and live P/L tracking.",
      image:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1400&q=80",
      tech: ["React", "WebSockets", "Node.js", "TensorFlow"],
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
      tech: ["Solidity", "Kafka", "MongoDB", "Web3"],
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
      tech: ["React", "Web3.js", "Ethereum", "IPFS"],
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
      tech: ["Three.js", "React", "Python", "TensorFlow"],
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
      tech: ["WebGL", "React", "Quantum.js", "TypeScript"],
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
      tech: ["Three.js", "WebRTC", "Solidity", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

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
      <div className="sm:h-20"></div>
      <HeroSection heroRef={heroRef} />

      <SkillsSection skills={skills} />

      <ProjectsSection
        projects={projects}
        projectsRef={projectsRef}
        onProjectHover={handleProjectHover}
        onProjectLeave={handleProjectLeave}
      />

      <ContactSection contactRef={contactRef} />

      <Footer />
    </div>
  );
}
