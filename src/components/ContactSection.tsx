import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

interface ContactSectionProps {
  contactRef: React.RefObject<HTMLDivElement | null>;
}

export default function ContactSection({ contactRef }: ContactSectionProps) {
  return (
    <section
      ref={contactRef}
      id="contact"
      className="py-16 md:py-20 px-4 md:px-8 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Ready to turn your vision into reality? Let's collaborate and create
            something that will blow minds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
            <motion.a
              href="mailto:rahul@example.com"
              className="group w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
              Get In Touch
            </motion.a>

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-white/20 rounded-full text-white font-semibold text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4 md:w-5 md:h-5" />
              GitHub
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 md:gap-6 pt-6 md:pt-8">
            {[
              {
                icon: Linkedin,
                href: "https://linkedin.com",
                label: "LinkedIn",
              },
              { icon: Github, href: "https://github.com", label: "GitHub" },
              {
                icon: Mail,
                href: "mailto:rahul@example.com",
                label: "Email",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <social.icon className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-blue-400 transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
