import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { getProjectsSection } from "../utils/portfolio-data";
import { FadeInUp, ScaleIn } from "./StaggeredReveal";
import { Project, ProjectCategory } from "../types/portfolio-data";

interface ProjectsSectionProps {
  projects: Project[];
  projectsRef: React.RefObject<HTMLDivElement | null>;
  onProjectHover: (index: number) => void;
  onProjectLeave: () => void;
  darkMode: boolean;
}

export default function ProjectsSection({
  projects,
  projectsRef,
  onProjectHover,
  onProjectLeave,
  darkMode,
}: ProjectsSectionProps) {
  const projectsData = getProjectsSection();
  const categories: ProjectCategory[] = [ "SAAS","Company", "Freelance",];

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="py-16 md:py-24 px-4 md:px-8 relative"
    >
      <div className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${
        darkMode 
          ? "bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" 
          : "bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
      }`} />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScaleIn className="text-center mb-16 md:mb-24">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            {projectsData.title}
          </motion.h2>
          <motion.p 
            className={`text-lg md:text-xl max-w-2xl mx-auto transition-colors duration-300 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {projectsData.subtitle}
          </motion.p>
        </ScaleIn>

        {categories.map((category) => {
          const categoryProjects = projects.filter((p) => p.category === category);
          if (categoryProjects.length === 0) return null;

          return (
            <div key={category} className="mb-24 last:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 mb-12"
              >
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-blue-500/50" />
                <h3 className={`text-2xl md:text-3xl font-bold whitespace-nowrap px-6 py-2 rounded-2xl border ${
                  darkMode ? "bg-white/5 border-white/10" : "bg-white border-gray-200 shadow-sm"
                }`}>
                  {category} <span className="text-blue-500">Projects</span>
                </h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-blue-500/30 to-blue-500/50" />
              </motion.div>

              <FadeInUp 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                staggerDelay={0.1}
              >
                {categoryProjects.map((project, idx) => (
                  <motion.div
                    key={`${category}-${idx}`}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ProjectCard
                      project={project}
                      index={idx}
                      onHover={onProjectHover}
                      onLeave={onProjectLeave}
                      darkMode={darkMode}
                    />
                  </motion.div>
                ))}
              </FadeInUp>
            </div>
          );
        })}
      </div>
    </section>
  );
}
