import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Package, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import Carousel from "./Carousel";
import ProductCard from "./ProductCard";
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
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-14 sm:pt-20">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-ink/40">The current edit</span>
          <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
            Objects worth keeping
          </h1>
          <p className="mt-4 text-ink/60">
            A small, considered catalog — each piece chosen for how it ages, not just how it
            photographs.
          </p>
        </div>

        <Carousel products={newArrivals} />
      </section>

      <section className="border-y border-ink/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4">
          {perks.map((perk) => (
            <div key={perk.label} className="flex flex-col items-center gap-2 text-center">
              <perk.icon className="h-5 w-5 text-ink/50" strokeWidth={1.25} />
              <span className="text-xs text-ink/50">{perk.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/10 pb-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-ink/40">Full catalog</span>
            <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">Shop everything</h2>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-[0.1em] transition-colors ${
                  activeCategory === cat ? "text-ink underline underline-offset-4" : "text-ink/40 hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory}
            layout
            className="mt-10 grid grid-cols-1 border-t border-l border-ink/10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {filtered.map((product, i) => (
              <div key={product.id} className="border-b border-r border-ink/10 bg-paper">
                <ProductCard product={product} index={i} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="mx-6 mb-24 border border-ink/15 px-8 py-16 text-center sm:mx-auto sm:max-w-5xl">
        <span className="text-xs uppercase tracking-[0.2em] text-ink/40">Before you go</span>
        <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
          Free shipping on your first order
        </h2>
        <p className="mx-auto mt-3 max-w-md text-ink/60">
          Join the list and we'll send a welcome code good for free shipping, no matter the order
          size.
        </p>
        <Link
          to="/contact"
          className="mt-7 inline-flex items-center gap-2 border border-ink px-6 py-3 text-xs font-medium uppercase tracking-[0.1em] text-ink hover:bg-ink hover:text-white"
        >
          Get in touch
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </section>
    </div>
  );
}
