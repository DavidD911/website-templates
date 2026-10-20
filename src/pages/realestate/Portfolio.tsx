import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { listings } from "../../data/listings";

export default function Portfolio() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
          Selected work
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">Portfolio</h1>
        <p className="mt-4 text-ink/60">
          A collection of homes I've had the privilege of helping clients find, sell, or fall in
          love with.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing, i) => (
          <motion.div
            key={listing.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
          >
            <Link to={`/listings/${listing.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] shadow-soft">
                <img
                  src={listing.images[0]}
                  alt={listing.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {listing.status !== "For Sale" && (
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 backdrop-blur">
                    {listing.status}
                  </span>
                )}
              </div>
              <p className="mt-4 font-display text-lg font-semibold text-ink group-hover:text-brand-600">
                {listing.title}
              </p>
              <p className="text-sm text-ink/50">{listing.neighborhood}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
