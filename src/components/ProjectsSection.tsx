import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

interface ProjectsSectionProps {
  projects: Project[];
  projectsRef: React.RefObject<HTMLDivElement | null>;
  onProjectHover: (index: number) => void;
  onProjectLeave: () => void;
}

export default function ProjectsSection({
  projects,
  projectsRef,
  onProjectHover,
  onProjectLeave,
}: ProjectsSectionProps) {
  return (
    <section
      ref={projectsRef}
      id="projects"
      className="py-16 md:py-20 px-4 md:px-8 relative"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Creations
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4 leading-relaxed">
            A showcase of innovative projects that demonstrate the future of web
            technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <ProjectCard
                project={project}
                index={idx}
                onHover={onProjectHover}
                onLeave={onProjectLeave}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
