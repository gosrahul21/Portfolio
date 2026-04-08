import { motion } from "framer-motion";
import { getSkillsSection } from "../utils/portfolio-data";
import { FadeInUp, ScaleIn } from "./StaggeredReveal";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillsSectionProps {
  skills: Skill[];
  darkMode: boolean;
}

export default function SkillsSection({ skills, darkMode }: SkillsSectionProps) {
  // Get skills section data from centralized source
  const skillsData = getSkillsSection();

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <ScaleIn className="text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {skillsData.title}
          </motion.h2>
          <motion.p 
            className={`text-lg md:text-xl max-w-2xl mx-auto px-4 transition-colors duration-300 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {skillsData.subtitle}
          </motion.p>
        </ScaleIn>

        <FadeInUp 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          staggerDelay={0.1}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`backdrop-blur-sm rounded-2xl p-4 md:p-6 border transition-all duration-300 group hover:scale-105 hover:-translate-y-1 ${
                darkMode 
                  ? "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10" 
                  : "bg-white/80 border-gray-200 hover:border-gray-300 hover:bg-white hover:shadow-lg"
              }`}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <span className={`font-semibold text-sm md:text-base transition-colors duration-300 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}>
                  {skill.name}
                </span>
                <motion.span 
                  className={`text-xs md:text-sm transition-colors duration-300 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 + 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {skill.level}%
                </motion.span>
              </div>
              <div className={`w-full rounded-full h-2 transition-colors duration-300 ${
                darkMode ? "bg-white/10" : "bg-gray-200"
              }`}>
                <motion.div
                  className="h-2 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ 
                    duration: 1.5, 
                    delay: index * 0.1 + 0.3,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                />
              </div>
              
              {/* Skill Level Indicator */}
              <motion.div
                className="mt-2 text-xs text-center opacity-60"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                viewport={{ once: true }}
              >
                {skill.level >= 90 ? "Expert" : 
                 skill.level >= 80 ? "Advanced" : 
                 skill.level >= 70 ? "Intermediate" : "Beginner"}
              </motion.div>
            </motion.div>
          ))}
        </FadeInUp>
      </div>
    </section>
  );
}
