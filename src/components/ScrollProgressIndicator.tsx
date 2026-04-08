import { motion, useScroll, useSpring } from "framer-motion";
import { useScrollAnimations } from "../hooks/useScrollAnimations";

interface ScrollProgressIndicatorProps {
  darkMode: boolean;
}

export default function ScrollProgressIndicator({ darkMode }: ScrollProgressIndicatorProps) {
  const { scrollProgress } = useScrollAnimations();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 z-50 origin-left ${
          darkMode 
            ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" 
            : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
        }`}
        style={{ scaleX }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* Floating Progress Circle */}
      <motion.div
        className={`fixed bottom-8 right-8 w-16 h-16 rounded-full z-40 flex items-center justify-center backdrop-blur-xl border transition-all duration-300 ${
          darkMode 
            ? "bg-white/10 border-white/20" 
            : "bg-white/80 border-gray-200 shadow-lg"
        }`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: scrollProgress > 0.1 ? 1 : 0,
          opacity: scrollProgress > 0.1 ? 1 : 0
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="relative w-12 h-12">
          {/* Circular Progress */}
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className={`transition-colors duration-300 ${
                darkMode ? "text-gray-400" : "text-gray-300"
              }`}
              opacity="0.3"
            />
            <motion.circle
              cx="24"
              cy="24"
              r="20"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className={`transition-colors duration-300 ${
                darkMode 
                  ? "text-blue-400" 
                  : "text-blue-600"
              }`}
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress)}`}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </svg>
          
          {/* Percentage Text */}
          <div className={`absolute inset-0 flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
            darkMode ? "text-white" : "text-gray-700"
          }`}>
            {Math.round(scrollProgress * 100)}%
          </div>
        </div>
      </motion.div>

      {/* Scroll Direction Indicator */}
      <motion.div
        className={`fixed top-24 right-8 w-12 h-12 rounded-full z-40 flex items-center justify-center backdrop-blur-xl border transition-all duration-300 ${
          darkMode 
            ? "bg-white/10 border-white/20" 
            : "bg-white/80 border-gray-200 shadow-lg"
        }`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: scrollProgress > 0.05 ? 1 : 0,
          opacity: scrollProgress > 0.05 ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div
          className={`w-2 h-2 rounded-full ${
            darkMode ? "bg-blue-400" : "bg-blue-600"
          }`}
          animate={{
            y: scrollProgress > 0.1 ? [0, -4, 0] : [0, 4, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </>
  );
} 