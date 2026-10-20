import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bath, Bed, Ruler } from "lucide-react";
import type { Listing } from "../../types";
import { formatPrice } from "../../lib/format";

const statusStyles: Record<Listing["status"], string> = {
  "For Sale": "bg-brand-500 text-white",
  Pending: "bg-sun-500 text-white",
  Sold: "bg-ink/70 text-white",
};

export default function ListingCard({ listing, index = 0 }: { listing: Listing; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
    >
      <Link
        to={`/listings/${listing.slug}`}
        className="group block overflow-hidden rounded-[var(--radius-card)] border border-ink/10 bg-surface transition-colors hover:border-brand-500/60"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span
            className={`absolute left-3 top-3 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${statusStyles[listing.status]}`}
          >
            {listing.status}
          </span>
        </div>
        <div className="p-5">
          <p className="font-display text-xl font-bold text-ink">{formatPrice(listing.price)}</p>
          <p className="mt-1 text-sm font-medium text-ink/80">{listing.title}</p>
          <p className="text-xs text-ink/50">{listing.address}, {listing.neighborhood}</p>
          <div className="mt-4 flex items-center gap-4 border-t border-ink/10 pt-3 text-xs text-ink/60">
            <span className="flex items-center gap-1.5">
              <Bed className="h-3.5 w-3.5" /> {listing.beds} bd
            </span>
            <span className="flex items-center gap-1.5">
              <Bath className="h-3.5 w-3.5" /> {listing.baths} ba
            </span>
            <span className="flex items-center gap-1.5">
              <Ruler className="h-3.5 w-3.5" /> {listing.sqft.toLocaleString()} sqft
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
