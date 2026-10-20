import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Package, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import Carousel from "./Carousel";
import ProductCard from "./ProductCard";
import SectionHeading from "../../components/SectionHeading";
import { categories, newArrivals, products } from "../../data/products";

const perks = [
  { icon: Truck, label: "Free shipping over $75" },
  { icon: RotateCcw, label: "30-day easy returns" },
  { icon: ShieldCheck, label: "2-year warranty" },
  { icon: Package, label: "Carbon-neutral delivery" },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <div>
      <section className="bg-[#1a140f] pb-14 pt-10 sm:pt-14">
        <div className="mx-auto max-w-7xl px-6">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-400"
          >
            New drops, every week
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-5xl"
          >
            Gear built for momentum.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 max-w-lg text-white/50"
          >
            Scroll the shelf below, or drag to browse — every piece is in stock and ships this week.
          </motion.p>
        </div>

        <div className="mt-10">
          <Carousel products={newArrivals} />
        </div>
      </section>

      <section className="border-b border-ink/5 bg-surface/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4">
          {perks.map((perk) => (
            <div key={perk.label} className="flex flex-col items-center gap-2 text-center">
              <perk.icon className="h-6 w-6 text-brand-500" strokeWidth={1.5} />
              <span className="text-xs font-medium text-ink/60 sm:text-sm">{perk.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <SectionHeading eyebrow="Full catalog" title="Shop everything" align="left" />

        <div className="mt-8 flex flex-wrap gap-2">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                activeCategory === cat
                  ? "bg-brand-500 text-white"
                  : "bg-ink/5 text-ink/60 hover:bg-ink/10"
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
            className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="relative mx-6 mb-20 overflow-hidden rounded-xl bg-[#1a140f] px-8 py-16 text-center sm:mx-auto sm:max-w-6xl">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-sun-500/10 blur-3xl" />
        <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">
          Free shipping on your first order
        </h2>
        <p className="relative mx-auto mt-3 max-w-md text-white/50">
          Join the list and we'll send a welcome code good for free shipping, no matter the order
          size.
        </p>
        <Link
          to="/contact"
          className="relative mt-7 inline-flex items-center gap-2 rounded-md bg-brand-500 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-400"
        >
          Get in touch
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
