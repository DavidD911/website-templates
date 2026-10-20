import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { services, serviceCategories } from "../../data/services";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All" ? services : services.filter((s) => s.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
          What we do
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">Our Services</h1>
        <p className="mt-4 text-ink/60">
          From a weekly mow to a full redesign — every service is priced up front and backed by
          the same crew from start to finish.
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
        <motion.div key={activeCategory} layout className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {filtered.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-surface shadow-soft ring-1 ring-black/5 sm:flex-row"
            >
              <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto sm:w-56 sm:flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0 mix-blend-multiply"
                  style={{
                    background: `linear-gradient(160deg, ${service.gradient[0]}99, ${service.gradient[1]}40)`,
                  }}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  {service.category}
                </span>
                <h2 className="mt-1 font-display text-xl font-bold text-ink">{service.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{service.description}</p>
                <ul className="mt-4 flex flex-col gap-1.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink/70">
                      <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brand-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between pt-5">
                  <span className="font-display text-lg font-bold text-ink">
                    From ${service.priceFrom}
                  </span>
                  <Link
                    to="/contact"
                    className="flex items-center gap-1.5 rounded-[var(--radius-button)] bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
                  >
                    Request a quote
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
