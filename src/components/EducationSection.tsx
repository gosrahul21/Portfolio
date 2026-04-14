import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { GraduationCap, Book, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { getEducationSection } from "../utils/portfolio-data";

interface EducationSectionProps {
  darkMode: boolean;
}

export default function EducationSection({ darkMode }: EducationSectionProps) {
  const educationData = getEducationSection();
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
      id="education" 
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            {educationData.title}
          </h2>
          <p className={`text-lg transition-colors duration-300 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {educationData.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-600 hidden md:block"
          />

          <div className="space-y-12">
            {educationData.list.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center justify-between w-full relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-black transform -translate-x-1/2 z-20 hidden md:block" />

                <div className={`w-full md:w-[45%] text-left p-8 rounded-3xl border transition-all duration-300 group hover:shadow-2xl hover:scale-[1.02] ${
                  darkMode 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                    : 'bg-gray-50 border-gray-200 hover:bg-white'
                }`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-600/20 text-blue-500`}>
                      <GraduationCap size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                      <Calendar size={16} className="text-blue-500" />
                      {edu.year}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                      <MapPin size={16} className="text-blue-500" />
                      {edu.location}
                    </div>
                  </div>

                  <div className={`flex items-center gap-2 p-3 rounded-xl ${
                    darkMode ? 'bg-blue-500/10' : 'bg-blue-50'
                  }`}>
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span className="text-sm font-bold text-blue-500">{edu.score}</span>
                  </div>
                </div>

                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}
