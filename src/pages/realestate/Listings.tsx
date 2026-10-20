import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { listings } from "../../data/listings";
import ListingCard from "../../templates/keystone/ListingCard";
import type { PropertyType } from "../../types";

const propertyTypes: (PropertyType | "All")[] = ["All", "House", "Condo", "Townhome"];

export default function Listings() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [minBeds, setMinBeds] = useState(searchParams.get("beds") ?? "");
  const [propertyType, setPropertyType] = useState<PropertyType | "All">("All");

  const filtered = useMemo(() => {
    return listings.filter((l) => {
      const matchesQuery =
        !query ||
        l.title.toLowerCase().includes(query.toLowerCase()) ||
        l.address.toLowerCase().includes(query.toLowerCase()) ||
        l.neighborhood.toLowerCase().includes(query.toLowerCase());
      const matchesBeds = !minBeds || l.beds >= Number(minBeds);
      const matchesType = propertyType === "All" || l.propertyType === propertyType;
      return matchesQuery && matchesBeds && matchesType;
    });
  }, [query, minBeds, propertyType]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
          Browse the market
        </span>
        <h1 className="mt-2 font-display text-4xl font-bold text-ink sm:text-5xl">All Listings</h1>
        <p className="mt-4 text-ink/60">
          {filtered.length} of {listings.length} listings match your search.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4 rounded-[var(--radius-card)] border border-ink/10 bg-surface p-4 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-2 rounded-md bg-ink/5 px-3 py-2">
          <Search className="h-4 w-4 flex-shrink-0 text-ink/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by city, neighborhood, or address"
            className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/40"
          />
        </div>
        <select
          value={minBeds}
          onChange={(e) => setMinBeds(e.target.value)}
          className="rounded-md bg-ink/5 px-3 py-2 text-sm text-ink outline-none"
        >
          <option value="">Any beds</option>
          <option value="1">1+ beds</option>
          <option value="2">2+ beds</option>
          <option value="3">3+ beds</option>
          <option value="4">4+ beds</option>
        </select>
        <div className="flex flex-wrap gap-2">
          {propertyTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setPropertyType(type)}
              className={`rounded-md px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                propertyType === type ? "bg-ink text-white" : "bg-ink/5 text-ink/60 hover:bg-ink/10"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={`${query}-${minBeds}-${propertyType}`}
          layout
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((listing, i) => (
            <ListingCard key={listing.id} listing={listing} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="mt-16 text-center text-ink/50">
          No listings match those filters — try widening your search.
        </div>
      )}
    </div>
  );
}
