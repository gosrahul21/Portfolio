import { motion, useScroll, useTransform } from "framer-motion";
import { useParallax } from "../hooks/useScrollAnimations";

interface ParallaxBackgroundProps {
  darkMode: boolean;
}

export default function ParallaxBackground({ darkMode }: ParallaxBackgroundProps) {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ height: '100vh' }}>
      {/* Floating Geometric Shapes */}
      <motion.div
        className={`absolute top-20 left-10 w-32 h-32 rounded-full opacity-20 blur-xl ${
          darkMode 
            ? "bg-gradient-to-r from-blue-500 to-purple-600" 
            : "bg-gradient-to-r from-blue-400 to-purple-500"
        }`}
        style={{ y: y1, rotate: rotate1 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute top-40 right-20 w-24 h-24 rounded-lg opacity-30 blur-lg ${
          darkMode 
            ? "bg-gradient-to-r from-pink-500 to-red-500" 
            : "bg-gradient-to-r from-pink-400 to-red-400"
        }`}
        style={{ y: y2, rotate: rotate2 }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className={`absolute top-80 left-1/4 w-20 h-20 rounded-full opacity-25 blur-lg ${
          darkMode 
            ? "bg-gradient-to-r from-green-500 to-blue-500" 
            : "bg-gradient-to-r from-green-400 to-blue-400"
        }`}
        style={{ y: y3, rotate: rotate3 }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className={`absolute top-60 right-1/3 w-16 h-16 rounded-lg opacity-20 blur-md ${
          darkMode 
            ? "bg-gradient-to-r from-yellow-500 to-orange-500" 
            : "bg-gradient-to-r from-yellow-400 to-orange-400"
        }`}
        style={{ y: y4 }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <motion.div
        className={`absolute top-96 left-1/2 w-28 h-28 rounded-full opacity-15 blur-xl ${
          darkMode 
            ? "bg-gradient-to-r from-purple-500 to-pink-500" 
            : "bg-gradient-to-r from-purple-400 to-pink-400"
        }`}
        style={{ y: y5 }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Grid Pattern */}
      <motion.div
        className={`absolute inset-0 opacity-5 ${
          darkMode ? "bg-white" : "bg-gray-900"
        }`}
        style={{
          backgroundImage: `
            linear-gradient(${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px),
            linear-gradient(90deg, ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          y: useTransform(scrollYProgress, [0, 1], [0, -100])
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${
            darkMode ? "bg-white" : "bg-gray-600"
          } opacity-30`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            y: useTransform(scrollYProgress, [0, 1], [0, -Math.random() * 200 - 100]),
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
} 