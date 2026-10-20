import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Package, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import ProductCarousel3D from "./Carousel";
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
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-200/60 via-brand-100/40 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 text-center sm:pt-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700 ring-1 ring-brand-200"
          >
            Fall collection now live
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold leading-tight text-ink sm:text-6xl"
          >
            Objects made for <span className="text-gradient">everyday</span> use
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-5 max-w-xl text-lg text-ink/60"
          >
            Aurora designs and builds the tech, bags, and accessories you'll still reach for years
            from now — no gimmicks, just things that work beautifully.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <a
              href="#shop"
              className="flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Shop the collection
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/about"
              className="rounded-full px-6 py-3 text-sm font-semibold text-ink/70 ring-1 ring-ink/10 transition-colors hover:bg-ink/5"
            >
              Our story
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative py-10 sm:py-16">
        <SectionHeading
          eyebrow="Just dropped"
          title="New arrivals"
          description="Spin through this season's launches — tap a side card to bring it forward, or the center card to see the details."
        />
        <div className="mx-auto mt-12 max-w-5xl px-6">
          <ProductCarousel3D products={newArrivals} />
        </div>
      </section>

      <section className="border-y border-ink/5 bg-surface/60">
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
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-ink text-white"
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
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="relative mx-6 mb-20 overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center sm:mx-auto sm:max-w-6xl">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-sun-500/20 blur-3xl" />
        <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">
          Free shipping on your first order
        </h2>
        <p className="relative mx-auto mt-3 max-w-md text-white/60">
          Join the newsletter and we'll send a welcome code good for free shipping, no matter the
          order size.
        </p>
        <Link
          to="/contact"
          className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-surface px-6 py-3 text-sm font-semibold text-ink hover:bg-brand-50"
        >
          Get in touch
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
