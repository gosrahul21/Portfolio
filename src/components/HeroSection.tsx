import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Download } from "lucide-react";
import ThreeCanvas from "./3D/ThreeCanvas";
import { getHeroSection, getPersonalInfo } from "../utils/portfolio-data";

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLDivElement | null>;
  threeEnabled?: boolean;
  motionIntensity?: number;
  darkMode: boolean;
}

export default function HeroSection({
  heroRef,
  threeEnabled = true,
  motionIntensity = 1,
  darkMode,
}: HeroSectionProps) {
  // Get hero section data from centralized source
  const heroData = getHeroSection();
  const personalInfo = getPersonalInfo();

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-4 md:px-8 pt-20 md:pt-0"
    >
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* 3D Canvas Background */}
        <ThreeCanvas enabled={threeEnabled} intensity={motionIntensity} />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6 md:space-y-8"
        >
          <div className="flex items-center justify-center gap-2 text-blue-400 mb-4">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm font-medium">{personalInfo.welcomeMessage}</span>
            <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
          </div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight px-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className={`bg-gradient-to-r ${heroData.gradients.line1} bg-clip-text text-transparent`}>
              {heroData.mainHeading.line1}
            </span>
            <br />
            <span className={darkMode ? "text-white" : "text-gray-900"}>
              {heroData.mainHeading.line2}
            </span>
            <br />
            <span className={`bg-gradient-to-r ${heroData.gradients.line3} bg-clip-text text-transparent`}>
              {heroData.mainHeading.line3}
            </span>
          </motion.h1>

          <motion.p
            className={`max-w-3xl mx-auto text-lg md:text-xl leading-relaxed px-4 transition-colors duration-300 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.button
              onClick={() => {
                if (heroData.ctaButtons.primary.action === 'scroll') {
                  document
                    .getElementById(heroData.ctaButtons.primary.target || "projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-base md:text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {heroData.ctaButtons.primary.text}
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => {
                if (heroData.ctaButtons.secondary.action === 'download') {
                  window.open(personalInfo.cvDownloadUrl, '_blank');
                } else if (heroData.ctaButtons.secondary.action === 'link' && heroData.ctaButtons.secondary.url) {
                  window.open(heroData.ctaButtons.secondary.url, '_blank');
                }
              }}
              className={`w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 rounded-full font-semibold text-base md:text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                darkMode 
                  ? "border-white/20 hover:bg-white/10 hover:border-white/40 text-white" 
                  : "border-gray-300 hover:bg-gray-100 hover:border-gray-400 text-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4 md:w-5 md:h-5" />
              {heroData.ctaButtons.secondary.text}
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto pt-12 md:pt-16 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {heroData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400">
                  {stat.number}
                </div>
                <div className={`text-sm transition-colors duration-300 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
