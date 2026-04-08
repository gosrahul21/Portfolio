import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollAnimations";

interface StaggeredRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export default function StaggeredReveal({
  children,
  className = "",
  staggerDelay = 0.1,
  delay = 0,
  direction = "up",
  distance = 50,
}: StaggeredRevealProps) {
  const { isVisible, setRef } = useScrollReveal();

  const getDirectionalVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };

    switch (direction) {
      case "up":
        return {
          hidden: { ...baseVariants.hidden, y: distance },
          visible: { ...baseVariants.visible, y: 0 },
        };
      case "down":
        return {
          hidden: { ...baseVariants.hidden, y: -distance },
          visible: { ...baseVariants.visible, y: 0 },
        };
      case "left":
        return {
          hidden: { ...baseVariants.hidden, x: distance },
          visible: { ...baseVariants.visible, x: 0 },
        };
      case "right":
        return {
          hidden: { ...baseVariants.hidden, x: -distance },
          visible: { ...baseVariants.visible, x: 0 },
        };
      default:
        return {
          hidden: { ...baseVariants.hidden, y: distance },
          visible: { ...baseVariants.visible, y: 0 },
        };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay || 0.1,
      },
    },
  };

  const itemVariants = getDirectionalVariants();

  return (
    <motion.div
      ref={setRef}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}

// Specialized variants for different use cases
export const FadeInUp = ({ children, ...props }: StaggeredRevealProps) => (
  <StaggeredReveal direction="up" {...props}>
    {children}
  </StaggeredReveal>
);

export const FadeInDown = ({ children, ...props }: StaggeredRevealProps) => (
  <StaggeredReveal direction="down" {...props}>
    {children}
  </StaggeredReveal>
);

export const FadeInLeft = ({ children, ...props }: StaggeredRevealProps) => (
  <StaggeredReveal direction="left" {...props}>
    {children}
  </StaggeredReveal>
);

export const FadeInRight = ({ children, ...props }: StaggeredRevealProps) => (
  <StaggeredReveal direction="right" {...props}>
    {children}
  </StaggeredReveal>
);

export const ScaleIn = ({ children, delay = 0, ...props }: StaggeredRevealProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
    viewport={{ once: true }}
    {...props}
  >
    {children}
  </motion.div>
);
 