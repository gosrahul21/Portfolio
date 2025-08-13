import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Rocket, Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { getNavigationConfig, getPersonalInfo } from "../utils/portfolio-data";

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({
  darkMode,
  setDarkMode,
  activeSection,
  setActiveSection,
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Get navigation and personal info from centralized data
  const navigationConfig = getNavigationConfig();
  const personalInfo = getPersonalInfo();
  const sections = navigationConfig.sections;

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? "backdrop-blur-xl bg-black/20 border-b border-white/10"
            : "backdrop-blur-xl bg-white/80 border-b border-gray-200"
          : "bg-transparent border-b border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          className="flex items-center gap-3 md:gap-4"
          whileHover={{ scale: 1.05 }}
        >
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${navigationConfig.logo.gradient} flex items-center justify-center`}>
            <Rocket className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div className="hidden sm:block">
            <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </div>
            <div className={`text-xs transition-colors duration-300 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}>{personalInfo.title}</div>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {sections.map((section) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeSection === section
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : darkMode
                    ? "text-gray-300 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          ))}

          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-full transition-colors ${
              darkMode 
                ? "bg-white/10 hover:bg-white/20" 
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-colors ${
              darkMode 
                ? "bg-white/10 hover:bg-white/20" 
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </motion.button>

          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-full transition-colors ${
              darkMode 
                ? "bg-white/10 hover:bg-white/20" 
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden mt-4 backdrop-blur-xl rounded-xl border overflow-hidden transition-colors duration-300 ${
              darkMode 
                ? "bg-black/30 border-white/10" 
                : "bg-white/80 border-gray-200"
            }`}
          >
            <div className="p-4 space-y-2">
              {sections.map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === section
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : darkMode
                        ? "text-gray-300 hover:text-white hover:bg-white/10"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
