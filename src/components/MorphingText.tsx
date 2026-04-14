import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface MorphingTextProps {
  texts: string[];
  interval?: number;
  className?: string;
  darkMode: boolean;
}

export default function MorphingText({ 
  texts, 
  interval = 3000, 
  className = "",
  darkMode 
}: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
      
      {/* Floating particles around the text */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              darkMode ? "bg-blue-400" : "bg-blue-600"
            } opacity-60`}
            style={{
              left: `${20 + i * 15}%`,
              top: "50%",
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Specialized morphing text for hero sections
export const HeroMorphingText = ({ 
  texts, 
  interval = 4000, 
  className = "",
  darkMode 
}: MorphingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -100, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-black"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
      
      {/* Enhanced particle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              darkMode ? "bg-gradient-to-r from-blue-400 to-purple-400" : "bg-gradient-to-r from-blue-600 to-purple-600"
            }`}
            style={{
              left: `${15 + i * 10}%`,
              top: "50%",
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
}; 