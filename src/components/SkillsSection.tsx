import { motion } from "framer-motion";
import { getSkillsSection } from "../utils/portfolio-data";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  // Get skills section data from centralized source
  const skillsData = getSkillsSection();

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {skillsData.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            {skillsData.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-white/10"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <span className="font-semibold text-white text-sm md:text-base">
                  {skill.name}
                </span>
                <span className="text-xs md:text-sm text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div
                  className="h-2 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
