import { motion } from "framer-motion";
import { Star, ExternalLink, Github } from "lucide-react";
import Tilt from "react-parallax-tilt";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onHover: (index: number) => void;
  onLeave: () => void;
}

export default function ProjectCard({
  project,
  index,
  onHover,
  onLeave,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="group relative"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      whileHover={{
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#ffffff"
        glarePosition="bottom"
        perspective={1000}
        scale={1.02}
        transitionSpeed={800}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className="rounded-2xl md:rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20"
      >
        <div className="relative h-64 md:h-80">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          />

          {project.featured && (
            <motion.div
              className="absolute top-3 md:top-4 left-3 md:left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 md:px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <Star className="w-3 h-3" />
              <span className="hidden sm:inline">Featured</span>
            </motion.div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  className="px-2 md:px-3 py-1 bg-white/10 rounded-full text-xs font-medium border border-white/20 cursor-default"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.05,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderColor: "rgba(255, 255, 255, 0.4)",
                    transition: { duration: 0.2 },
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="flex gap-2 md:gap-3">
              <a
                href={project.liveUrl}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium text-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-1 md:gap-2 hover:scale-105"
              >
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden sm:inline">Live Demo</span>
                <span className="sm:hidden">Demo</span>
              </a>
              <a
                href={project.githubUrl}
                className="flex-1 bg-white/10 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium text-center hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-1 md:gap-2 hover:scale-105"
              >
                <Github className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden sm:inline">Code</span>
                <span className="sm:hidden">Code</span>
              </a>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}
