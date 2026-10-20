import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Bath, Bed, Calendar, ChevronRight, Ruler } from "lucide-react";
import { getListingBySlug, listings } from "../../data/listings";
import { formatPrice } from "../../lib/format";
import { useTemplate } from "../../templates/TemplateContext";
import ListingCard from "../../templates/keystone/ListingCard";

const statusStyles: Record<string, string> = {
  "For Sale": "bg-brand-500 text-white",
  Pending: "bg-sun-500 text-white",
  Sold: "bg-ink/70 text-white",
};

export default function ListingDetail() {
  const { slug } = useParams();
  const { template } = useTemplate();
  const listing = slug ? getListingBySlug(slug) : undefined;
  const [activeImage, setActiveImage] = useState(0);

  const related = listing
    ? listings.filter((l) => l.id !== listing.id && l.neighborhood !== listing.neighborhood).slice(0, 3)
    : [];

  if (!listing) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
      <nav className="mb-8 flex items-center gap-1.5 text-sm text-ink/50">
        <Link to="/listings" className="hover:text-ink">
          {template === "haven" ? "Portfolio" : "Listings"}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-ink">{listing.title}</span>
      </nav>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <motion.div
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] shadow-lift"
          >
            <img src={listing.images[activeImage]} alt={listing.title} className="absolute inset-0 h-full w-full object-cover" />
            <span className={`absolute left-4 top-4 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider ${statusStyles[listing.status]}`}>
              {listing.status}
            </span>
          </motion.div>
          {listing.images.length > 1 && (
            <div className="mt-3 flex gap-3">
              {listing.images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-xl transition-all ${
                    i === activeImage ? "ring-2 ring-brand-500" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-500">
            {listing.neighborhood}
          </span>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">{listing.title}</h1>
          <p className="mt-1 text-ink/50">{listing.address}</p>

          <p className="mt-5 font-display text-3xl font-bold text-ink">{formatPrice(listing.price)}</p>

          <div className="mt-6 grid grid-cols-2 gap-4 border-y border-ink/10 py-5 sm:grid-cols-4">
            <div className="flex flex-col items-center gap-1 text-center">
              <Bed className="h-4 w-4 text-brand-500" />
              <span className="text-sm font-semibold text-ink">{listing.beds}</span>
              <span className="text-xs text-ink/50">Beds</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <Bath className="h-4 w-4 text-brand-500" />
              <span className="text-sm font-semibold text-ink">{listing.baths}</span>
              <span className="text-xs text-ink/50">Baths</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <Ruler className="h-4 w-4 text-brand-500" />
              <span className="text-sm font-semibold text-ink">{listing.sqft.toLocaleString()}</span>
              <span className="text-xs text-ink/50">Sqft</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <Calendar className="h-4 w-4 text-brand-500" />
              <span className="text-sm font-semibold text-ink">{listing.yearBuilt}</span>
              <span className="text-xs text-ink/50">Built</span>
            </div>
          </div>

          <p className="mt-6 leading-relaxed text-ink/70">{listing.description}</p>

          <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {listing.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-ink/70">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="flex flex-1 items-center justify-center rounded-[var(--radius-button)] bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Schedule a showing
            </Link>
            <Link
              to="/contact"
              className="flex flex-1 items-center justify-center rounded-[var(--radius-button)] bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-soft ring-1 ring-ink/10 transition-colors hover:bg-ink/5"
            >
              Ask a question
            </Link>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold text-ink">
            {template === "haven" ? "More from the portfolio" : "You might also like"}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {template === "haven"
              ? related.map((l) => (
                  <Link key={l.id} to={`/listings/${l.slug}`} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] shadow-soft">
                      <img
                        src={l.images[0]}
                        alt={l.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-3 font-display text-lg font-semibold text-ink group-hover:text-brand-600">
                      {l.title}
                    </p>
                    <p className="text-sm text-ink/50">{l.neighborhood}</p>
                  </Link>
                ))
              : related.map((l, i) => <ListingCard key={l.id} listing={l} index={i} />)}
          </div>
        </div>
      )}
    </div>
  );
}
