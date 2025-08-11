import { useState } from "react";

interface ProjectsFilterProps {
  allTags: string[];
  onFilterChange: (activeTags: string[], search: string) => void;
}

export default function ProjectsFilter({
  allTags,
  onFilterChange,
}: ProjectsFilterProps) {
  const [active, setActive] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const toggle = (tag: string) => {
    const next = active.includes(tag)
      ? active.filter((t) => t !== tag)
      : [...active, tag];
    setActive(next);
    onFilterChange(next, search);
  };

  const onSearch = (v: string) => {
    setSearch(v);
    onFilterChange(active, v);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6 md:mb-8">
      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
        <input
          placeholder="Search projects..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-400"
        />
        <div className="flex flex-wrap gap-2">
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => toggle(t)}
              className={`px-3 py-1 rounded-full text-xs border transition ${
                active.includes(t)
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent"
                  : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
