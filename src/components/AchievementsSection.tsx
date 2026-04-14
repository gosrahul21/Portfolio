import { motion } from "framer-motion";
import { Award, Star, Trophy, Target, Sparkles } from "lucide-react";
import { getAchievementsSection } from "../utils/portfolio-data";
import { FadeInUp, ScaleIn } from "./StaggeredReveal";

interface AchievementsSectionProps {
  darkMode: boolean;
}

export default function AchievementsSection({ darkMode }: AchievementsSectionProps) {
  const achievementsData = getAchievementsSection();

  const iconMap = [
    Trophy,
    Target,
    Star,
    Award,
    Sparkles
  ];

  return (
    <section 
      id="achievements" 
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            {achievementsData.title}
          </h2>
          <p className={`text-lg transition-colors duration-300 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {achievementsData.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.list.map((achievement, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-3xl border transition-all duration-300 group ${
                  darkMode 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-500/50' 
                    : 'bg-white border-gray-200 hover:shadow-2xl hover:border-blue-300'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-600/20 text-blue-500 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {achievement.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full -z-10" />
    </section>
  );
}
