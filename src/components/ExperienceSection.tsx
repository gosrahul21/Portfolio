import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { getExperienceSection } from "../utils/portfolio-data";

interface ExperienceSectionProps {
  darkMode: boolean;
}

export default function ExperienceSection({ darkMode }: ExperienceSectionProps) {
  const experienceData = getExperienceSection();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      id="experience" 
      ref={containerRef}
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
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
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent`}>
            {experienceData.title}
          </h2>
          <p className={`text-lg transition-colors duration-300 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {experienceData.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"
          />

          <div className="space-y-12">
            {experienceData.list.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center justify-between w-full mb-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Connector Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-4 border-white dark:border-black transform -translate-x-1/2 z-20 hidden md:block" />

                {/* Content Card */}
                <div className={`w-full md:w-[45%] text-left p-6 rounded-2xl border transition-all duration-300 group hover:shadow-2xl hover:scale-[1.02] ${
                  darkMode 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                    : 'bg-gray-50 border-gray-200 hover:bg-white'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                        <p className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                          {exp.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className={`flex items-center gap-1.5 text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className={`flex items-center gap-1.5 text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((bullet, i) => (
                      <li key={i} className={`text-sm leading-relaxed flex items-start gap-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((skill, i) => (
                      <span 
                        key={i} 
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          darkMode 
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                            : 'bg-blue-100 text-blue-700 border border-blue-200'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Empty Space for the other side on desktop */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}
