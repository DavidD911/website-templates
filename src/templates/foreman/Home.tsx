import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star, Users, Wrench } from "lucide-react";
import { services } from "../../data/services";
import { testimonials } from "../../data/testimonials";
import BeforeAfterSlider from "./BeforeAfterSlider";
import gardenBefore from "../../assets/services/garden-planting.jpg";
import gardenAfter from "../../assets/services/landscape-design.jpg";

const stats = [
  { icon: Users, value: "12+", label: "Years in business" },
  { icon: Wrench, value: "640+", label: "Projects completed" },
  { icon: Star, value: "4.9/5", label: "Average rating" },
  { icon: ShieldCheck, value: "Licensed", label: "Bonded & insured" },
];

export default function Home() {
  return (
    <div>
      <section className="bg-[#1a140f] pb-16 pt-10 sm:pt-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-400"
            >
              Licensed &amp; insured contractors
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-5xl"
            >
              See the difference before we start.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 max-w-md text-white/60"
            >
              Drag the slider — this is the same yard, before Rooted and after. No
              stock photos, no surprises on invoice day.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-7 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-md bg-brand-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-400"
              >
                Get a free estimate
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/gallery"
                className="rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wider text-white ring-1 ring-white/30 transition-colors hover:bg-white/10"
              >
                See more work
              </Link>
            </motion.div>
          </div>

          <BeforeAfterSlider
            beforeImage={gardenBefore}
            afterImage={gardenAfter}
            beforeLabel="Before"
            afterLabel="After"
          />
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
              What we do
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">Services</h2>
          </div>
          <Link
            to="/services"
            className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-brand-600 hover:text-brand-700"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-ink/10 bg-surface transition-colors hover:border-brand-500/60"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 mix-blend-multiply"
                  style={{
                    background: `linear-gradient(160deg, ${service.gradient[0]}99, ${service.gradient[1]}40)`,
                  }}
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-600">
                  {service.category}
                </span>
                <h3 className="font-display text-base font-bold text-ink">{service.name}</h3>
                <p className="text-sm text-ink/60">{service.tagline}</p>
                <div className="mt-auto flex items-center justify-between pt-3">
                  <span className="text-sm font-bold text-ink">From ${service.priceFrom}</span>
                  <Link
                    to="/contact"
                    className="rounded-md bg-ink px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-600"
                  >
                    Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#1a140f] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400">
            Trusted locally
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            What clients say
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.id} className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center gap-1 text-sun-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-4 w-4 ${idx < Math.round(t.rating) ? "fill-current" : "fill-transparent stroke-current opacity-30"}`}
                    />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">"{t.quote}"</p>
                <p className="mt-4 text-sm font-bold text-white">{t.name}</p>
                <p className="text-xs text-white/40">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-6 mb-20 overflow-hidden rounded-[var(--radius-card)] bg-[#1a140f] px-8 py-16 text-center sm:mx-auto sm:max-w-6xl">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-sun-500/10 blur-3xl" />
        <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">
          Get your free estimate today
        </h2>
        <p className="relative mx-auto mt-3 max-w-md text-white/50">
          No obligation, no pressure — just an honest number and a real timeline.
        </p>
        <Link
          to="/contact"
          className="relative mt-7 inline-flex items-center gap-2 rounded-md bg-brand-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-400"
        >
          Request estimate
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
