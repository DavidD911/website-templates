import { motion } from "framer-motion";
import { Leaf, Recycle, Ruler, Users } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import teamPhoto from "../assets/lifestyle/about-team.jpg";

const stats = [
  { label: "Years designing", value: "12" },
  { label: "Products shipped", value: "480K+" },
  { label: "Countries served", value: "34" },
  { label: "Average rating", value: "4.8/5" },
];

const values = [
  {
    icon: Ruler,
    title: "Designed to last",
    body: "Every product goes through at least a year of iteration before it ships. If it won't hold up after five years of daily use, it doesn't leave the studio.",
  },
  {
    icon: Recycle,
    title: "Materials that matter",
    body: "Recycled aluminum, bio-based plastics, and vegetable-tanned leather — chosen because they age well, not because they're trendy.",
  },
  {
    icon: Users,
    title: "Built with our community",
    body: "Every product starts as a prototype in the hands of a few hundred early testers whose feedback reshapes it before a wider release.",
  },
  {
    icon: Leaf,
    title: "Lower-impact by default",
    body: "Carbon-neutral shipping, plastic-free packaging, and take-back recycling on every order — the responsible option is just the default one.",
  },
];

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-200/50 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            Our story
          </span>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl">
            We make things people actually keep
          </h1>
          <p className="mt-5 text-lg text-ink/60">
            Aurora started in a two-person workshop in 2013 with one frustration: most everyday
            objects are designed to be replaced, not repaired or loved. Twelve years later, that's
            still the only problem we're trying to solve.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] shadow-lift sm:aspect-[21/9]">
          <img
            src={teamPhoto}
            alt="The Aurora team working together"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{
              background:
                "linear-gradient(160deg, color-mix(in srgb, var(--color-brand-700) 45%, transparent), transparent 60%)",
            }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-10">
        <div className="grid grid-cols-2 gap-6 rounded-[var(--radius-card)] bg-surface p-8 shadow-soft ring-1 ring-black/5 sm:grid-cols-4 sm:p-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-ink/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <SectionHeading
          eyebrow="What we believe"
          title="Principles over trends"
          description="These four ideas shape every product decision, from the first sketch to the packaging it ships in."
        />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5 rounded-[var(--radius-card)] bg-surface p-7 shadow-soft ring-1 ring-black/5"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <value.icon className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{value.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-6 mb-24 overflow-hidden rounded-[var(--radius-card)] bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center text-white sm:mx-auto sm:max-w-6xl">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Have a question before you buy?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-white/70">
          Our team answers every message personally — usually within a few hours.
        </p>
      </section>
    </div>
  );
}
