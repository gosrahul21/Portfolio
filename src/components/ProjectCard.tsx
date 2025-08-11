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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#ffffff"
        glarePosition="bottom"
        perspective={1000}
        scale={1.02}
        transitionSpeed={800}
        className="rounded-2xl md:rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
      >
        <div className="relative h-64 md:h-80">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {project.featured && (
            <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 md:px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Star className="w-3 h-3" />
              <span className="hidden sm:inline">Featured</span>
            </div>
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
                <span
                  key={i}
                  className="px-2 md:px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-2 md:gap-3">
              <a
                href={project.liveUrl}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium text-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-1 md:gap-2"
              >
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden sm:inline">Live Demo</span>
                <span className="sm:hidden">Demo</span>
              </a>
              <a
                href={project.githubUrl}
                className="flex-1 bg-white/10 backdrop-blur-sm text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium text-center hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-1 md:gap-2"
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
