import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, Building2, Search, TrendingUp, Users } from "lucide-react";
import { listings } from "../../data/listings";
import ListingCard from "./ListingCard";
import villaHero from "../../assets/realestate/villa-infinity.jpg";

const stats = [
  { icon: Building2, value: "180+", label: "Active listings" },
  { icon: Users, value: "24", label: "Agents on our team" },
  { icon: TrendingUp, value: "18 days", label: "Average time to sale" },
  { icon: Award, value: "4.8/5", label: "Client satisfaction" },
];

export default function Home() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [beds, setBeds] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set("q", location);
    if (beds) params.set("beds", beds);
    navigate(`/listings${params.toString() ? `?${params}` : ""}`);
  }

  return (
    <div>
      <section className="relative overflow-hidden bg-[#17181c]">
        <img src={villaHero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17181c] via-[#17181c]/80 to-[#17181c]/40" />
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl font-bold text-white sm:text-5xl"
          >
            Find your next place, faster.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mx-auto mt-4 max-w-xl text-white/60"
          >
            180+ active listings across the metro area, updated daily by our team of local agents.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSearch}
            className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 rounded-md bg-white p-3 shadow-lift sm:flex-row"
          >
            <div className="flex flex-1 items-center gap-2 px-2">
              <Search className="h-4 w-4 flex-shrink-0 text-ink/40" />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City, neighborhood, or address"
                className="w-full py-2 text-sm text-ink outline-none placeholder:text-ink/40"
              />
            </div>
            <select
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              className="rounded-md bg-ink/5 px-3 py-2 text-sm text-ink outline-none sm:w-36"
            >
              <option value="">Any beds</option>
              <option value="1">1+ beds</option>
              <option value="2">2+ beds</option>
              <option value="3">3+ beds</option>
              <option value="4">4+ beds</option>
            </select>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-md bg-brand-500 px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-400"
            >
              Search
            </button>
          </motion.form>
        </div>
      </section>

      <section className="border-b border-ink/5 bg-surface/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <stat.icon className="h-5 w-5 text-brand-500" strokeWidth={1.5} />
              <span className="font-display text-lg font-bold text-ink">{stat.value}</span>
              <span className="text-xs text-ink/50">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink/10 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
              Fresh on the market
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              New Listings
            </h2>
          </div>
          <Link
            to="/listings"
            className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-brand-600 hover:text-brand-700"
          >
            View all listings
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.slice(0, 6).map((listing, i) => (
            <ListingCard key={listing.id} listing={listing} index={i} />
          ))}
        </div>
      </section>

      <section className="relative mx-6 mb-20 overflow-hidden rounded-[var(--radius-card)] bg-[#17181c] px-8 py-16 text-center sm:mx-auto sm:max-w-6xl">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-sun-500/10 blur-3xl" />
        <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">
          Ready to talk to an agent?
        </h2>
        <p className="relative mx-auto mt-3 max-w-md text-white/50">
          Our team responds to every inquiry within one business hour.
        </p>
        <Link
          to="/contact"
          className="relative mt-7 inline-flex items-center gap-2 rounded-md bg-brand-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-400"
        >
          Contact us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
