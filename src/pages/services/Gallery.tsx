import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { projects } from "../../data/projects";
import { serviceCategories } from "../../data/services";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
          Recent work
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">Our Work</h1>
        <p className="mt-4 text-ink/60">
          A sample of finished projects from around the area — every one built by our own crew,
          start to finish.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {["All", ...serviceCategories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat ? "bg-ink text-white" : "bg-ink/5 text-ink/60 hover:bg-ink/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeCategory}
          layout
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] shadow-soft"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="photo-fade-bottom absolute inset-0" />
              <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-700 backdrop-blur">
                {project.category}
              </span>
              <div className="absolute bottom-0 p-5 text-white">
                <p className="font-display text-lg font-semibold">{project.title}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-white/70">
                  <MapPin className="h-3 w-3" />
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
