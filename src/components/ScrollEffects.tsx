import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

// Simple floating particle component
const FloatingParticle = ({
  delay,
  duration,
  x,
  y,
}: {
  delay: number;
  duration: number;
  x: number;
  y: number;
}) => (
  <motion.div
    className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
    style={{
      left: `${x}%`,
      top: `${y}%`,
    }}
    animate={{
      y: [y, y - 100, y],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Main scroll effects component
export default function ScrollEffects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Spring animations for smooth movement
  const springY1 = useSpring(y1, { stiffness: 100, damping: 50 });
  const springY2 = useSpring(y2, { stiffness: 80, damping: 40 });

  return (
    <>
      {/* Subtle floating particles */}
      <div className="fixed inset-0 pointer-events-none z-30">
        <FloatingParticle delay={0} duration={15} x={10} y={20} />
        <FloatingParticle delay={5} duration={20} x={85} y={40} />
        <FloatingParticle delay={10} duration={18} x={50} y={80} />
        <FloatingParticle delay={15} duration={25} x={75} y={10} />
      </div>

      {/* Subtle background elements */}
      <div className="fixed inset-0 pointer-events-none z-20">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
          style={{ y: springY1 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
          style={{ y: springY2 }}
        />
      </div>

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}
