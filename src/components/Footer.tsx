import { motion } from "framer-motion";

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`py-8 md:py-12 px-4 md:px-8 border-t text-center transition-colors duration-300 ${
      darkMode ? "border-white/10" : "border-gray-200"
    }`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-3 md:space-y-4"
      >
        <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Rahul Goswami
        </div>
        <p className={`text-sm md:text-base px-4 transition-colors duration-300 ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}>
          Crafting digital experiences that inspire and innovate
        </p>
        <div className={`text-xs md:text-sm transition-colors duration-300 ${
          darkMode ? "text-gray-500" : "text-gray-400"
        }`}>
          © {new Date().getFullYear()} All rights reserved. Built with ❤️ and
          cutting-edge tech.
        </div>
      </motion.div>
    </footer>
  );
}
