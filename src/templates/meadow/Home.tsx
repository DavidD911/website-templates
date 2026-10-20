import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star, Users, Wrench } from "lucide-react";
import { services } from "../../data/services";
import { projects } from "../../data/projects";
import { testimonials } from "../../data/testimonials";
import SectionHeading from "../../components/SectionHeading";
import heroImage from "../../assets/services/outdoor-lighting.jpg";

const stats = [
  { icon: Users, value: "12+", label: "Years serving the area" },
  { icon: Wrench, value: "640+", label: "Projects completed" },
  { icon: Star, value: "4.9/5", label: "Average rating" },
  { icon: ShieldCheck, value: "Licensed", label: "& fully insured" },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[21/9]">
          <img src={heroImage} alt="A beautifully lit landscaped yard at dusk" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/10" />
          <div className="absolute inset-0 flex items-end sm:items-center">
            <div className="mx-auto w-full max-w-7xl px-6 pb-10 sm:pb-0">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-brand-700 backdrop-blur"
              >
                Now booking spring installs
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="mt-4 max-w-xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl"
              >
                Landscapes that work as hard as you do.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-4 max-w-md text-white/80"
              >
                Design, planting, hardscaping, and the weekly care that keeps it all looking
                exactly like the day we finished.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-7 flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/contact"
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-50"
                >
                  Get a free quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/gallery"
                  className="rounded-full px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/40 transition-colors hover:bg-white/10"
                >
                  See our work
                </Link>
              </motion.div>
            </div>
          </div>
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
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Recent work" title="A few favorite projects" align="left" />
          <Link
            to="/gallery"
            className="mb-1 flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            View full gallery
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {projects.slice(0, 3).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] shadow-soft"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="photo-fade-bottom absolute inset-0" />
              <div className="absolute bottom-0 p-5 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  {project.category}
                </span>
                <p className="font-display text-lg font-semibold">{project.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-surface/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="What we do" title="Services" align="left" />
            <Link
              to="/services"
              className="mb-1 flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              View all services
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="flex gap-4 rounded-[var(--radius-card)] bg-surface p-5 shadow-soft ring-1 ring-black/5"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <service.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">{service.name}</h3>
                  <p className="mt-1 text-sm text-ink/60">{service.tagline}</p>
                  <p className="mt-2 text-sm font-semibold text-brand-600">From ${service.priceFrom}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <SectionHeading eyebrow="Happy neighbors" title="What clients say" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
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
                  <Star
                    key={idx}
                    className={`h-4 w-4 ${idx < Math.round(t.rating) ? "fill-current" : "fill-transparent stroke-current opacity-30"}`}
                  />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">"{t.quote}"</p>
              <p className="mt-4 text-sm font-semibold text-ink">{t.name}</p>
              <p className="text-xs text-ink/50">{t.location}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative mx-6 mb-20 overflow-hidden rounded-[var(--radius-card)] bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center text-white sm:mx-auto sm:max-w-6xl">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Ready to transform your yard?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-white/70">
          Tell us about your property and what you're picturing — we'll follow up with a free,
          no-pressure quote.
        </p>
        <Link
          to="/contact"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-brand-50"
        >
          Get your free quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
