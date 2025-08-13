import { useState } from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";

interface ProjectsFilterProps {
  allTags: string[];
  onFilterChange: (tags: string[], search: string) => void;
  darkMode: boolean;
}

export default function ProjectsFilter({
  allTags,
  onFilterChange,
  darkMode,
}: ProjectsFilterProps) {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [searchText, setSearchText] = useState("");

  const handleTagToggle = (tag: string) => {
    const newTags = activeTags.includes(tag)
      ? activeTags.filter((t) => t !== tag)
      : [...activeTags, tag];
    setActiveTags(newTags);
    onFilterChange(newTags, searchText);
  };

  const handleSearchChange = (search: string) => {
    setSearchText(search);
    onFilterChange(activeTags, search);
  };

  const clearAll = () => {
    setActiveTags([]);
    setSearchText("");
    onFilterChange([], "");
  };

  return (
    <div className="py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-8"
        >
          <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`} />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchText}
            onChange={(e) => handleSearchChange(e.target.value)}
            className={`w-full pl-12 pr-4 py-3 md:py-4 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
              darkMode
                ? "bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-blue-500"
                : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500"
            }`}
          />
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className={`text-lg font-semibold transition-colors duration-300 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}>
              Filter by Technology
            </h3>
            {activeTags.length > 0 && (
              <button
                onClick={clearAll}
                className={`text-sm transition-colors duration-300 hover:underline ${
                  darkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Clear all
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3">
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`px-3 md:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTags.includes(tag)
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : darkMode
                      ? "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
                      : "bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200 hover:border-gray-300"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
