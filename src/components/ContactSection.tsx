import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { getContactSection } from "../utils/portfolio-data";

interface ContactSectionProps {
  contactRef: React.RefObject<HTMLDivElement | null>;
}

export default function ContactSection({ contactRef }: ContactSectionProps) {
  // Get contact section data from centralized source
  const contactData = getContactSection();

  // Icon mapping for dynamic icon rendering
  const iconMap = {
    Mail,
    Github,
    Linkedin,
  };

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
            {contactData.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            {contactData.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
            <motion.a
              href={contactData.ctaButtons.primary.action === 'email' ? `mailto:${contactData.ctaButtons.primary.email}` : '#'}
              className="group w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {contactData.ctaButtons.primary.icon && iconMap[contactData.ctaButtons.primary.icon as keyof typeof iconMap] && 
                React.createElement(iconMap[contactData.ctaButtons.primary.icon as keyof typeof iconMap], { className: "w-4 h-4 md:w-5 md:h-5" })
              }
              {contactData.ctaButtons.primary.text}
            </motion.a>

            <motion.a
              href={contactData.ctaButtons.secondary.url || '#'}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-white/20 rounded-full text-white font-semibold text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {contactData.ctaButtons.secondary.icon && iconMap[contactData.ctaButtons.secondary.icon as keyof typeof iconMap] && 
                React.createElement(iconMap[contactData.ctaButtons.secondary.icon as keyof typeof iconMap], { className: "w-4 h-4 md:w-5 md:h-5" })
              }
              {contactData.ctaButtons.secondary.text}
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 md:gap-6 pt-6 md:pt-8">
            {contactData.socialLinks.map((social, index) => {
              const IconComponent = iconMap[social.icon as keyof typeof iconMap];
              return (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {IconComponent && <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-blue-400 transition-colors" />}
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
