import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, Star, TrendingUp } from "lucide-react";
import { agent, realEstateTestimonials } from "../../data/agent";
import { getFeaturedListings } from "../../data/listings";
import SectionHeading from "../../components/SectionHeading";

const credentials = [
  { icon: Award, value: `${agent.yearsExperience} yrs`, label: "Experience" },
  { icon: TrendingUp, value: agent.totalSales, label: "In closed sales" },
  { icon: Star, value: "5.0", label: "Client rating" },
];

export default function Home() {
  const featured = getFeaturedListings();

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-200/50 via-brand-100/30 to-transparent blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-16 sm:pt-24 lg:grid-cols-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700 ring-1 ring-brand-200"
            >
              {agent.title}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl"
            >
              Helping you find home in the Fairview area.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-5 max-w-md text-lg text-ink/60"
            >
              {agent.bio}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
              >
                Book a consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/listings"
                className="rounded-full px-6 py-3 text-sm font-semibold text-ink/70 ring-1 ring-ink/10 transition-colors hover:bg-ink/5"
              >
                See my work
              </Link>
            </motion.div>

            <div className="mt-10 flex flex-wrap gap-8 border-t border-ink/10 pt-8">
              {credentials.map((c) => (
                <div key={c.label} className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <c.icon className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-display text-base font-bold text-ink">{c.value}</p>
                    <p className="text-xs text-ink/50">{c.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[var(--radius-card)] shadow-lift"
          >
            <img src={agent.photo} alt={agent.name} className="absolute inset-0 h-full w-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="A few favorites" title="Featured work" align="left" />
          <Link
            to="/listings"
            className="mb-1 flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            View full portfolio
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {featured.map((listing, i) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link to={`/listings/${listing.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] shadow-soft">
                  <img
                    src={listing.images[0]}
                    alt={listing.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 font-display text-lg font-semibold text-ink group-hover:text-brand-600">
                  {listing.title}
                </p>
                <p className="text-sm text-ink/50">{listing.neighborhood}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-surface/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Client stories" title="What it's like to work together" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {realEstateTestimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-[var(--radius-card)] bg-surface p-6 shadow-soft ring-1 ring-black/5"
              >
                <div className="flex items-center gap-1 text-sun-500">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className={`h-4 w-4 ${idx < Math.round(t.rating) ? "fill-current" : "fill-transparent stroke-current opacity-30"}`} />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">"{t.quote}"</p>
                <p className="mt-4 text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-ink/50">{t.context}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-6 mb-20 overflow-hidden rounded-[var(--radius-card)] bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center text-white sm:mx-auto sm:max-w-6xl">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Let's find your next home.</h2>
        <p className="mx-auto mt-3 max-w-md text-white/70">
          No pressure, no scripts — just a real conversation about what you're looking for.
        </p>
        <Link
          to="/contact"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-brand-50"
        >
          Book a consultation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
