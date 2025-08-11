import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 md:py-12 px-4 md:px-8 border-t border-white/10 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-3 md:space-y-4"
      >
        <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Rahul Goswami
        </div>
        <p className="text-sm md:text-base text-gray-400 px-4">
          Crafting digital experiences that inspire and innovate
        </p>
        <div className="text-xs md:text-sm text-gray-500">
          © {new Date().getFullYear()} All rights reserved. Built with ❤️ and
          cutting-edge tech.
        </div>
      </motion.div>
    </footer>
  );
}
