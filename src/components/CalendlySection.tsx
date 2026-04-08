import { motion } from "framer-motion";
import { FadeInUp, ScaleIn } from "./StaggeredReveal";

interface CalendlySectionProps {
  darkMode: boolean;
}

export default function CalendlySection({ darkMode }: CalendlySectionProps) {
  const calendlyUrl = "https://calendly.com/gosrahul21/30min";

  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <ScaleIn className="space-y-6 md:space-y-8">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Book a Call
          </motion.h2>
          <motion.p 
            className={`text-lg md:text-xl mb-6 transition-colors duration-300 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            Pick a time that works for you. I keep my calendar up to date.
          </motion.p>
          
          <FadeInUp>
            <motion.div 
              className={`w-full aspect-video rounded-xl overflow-hidden border transition-colors duration-300 ${
                darkMode ? "border-white/10" : "border-gray-200"
              }`}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src={calendlyUrl}
                className="w-full h-full"
                title="Book a call"
                frameBorder={0}
              />
            </motion.div>
          </FadeInUp>
        </ScaleIn>
      </div>
    </section>
  );
}
