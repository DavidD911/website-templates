import { motion } from "framer-motion";
import { Award, HandHeart, Leaf, ShieldCheck } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import crewPhoto from "../../assets/services/crew-planting.jpg";

const stats = [
  { label: "Years in business", value: "12" },
  { label: "Projects completed", value: "640+" },
  { label: "Towns served", value: "9" },
  { label: "Average rating", value: "4.9/5" },
];

const values = [
  {
    icon: HandHeart,
    title: "Same crew, every visit",
    body: "You get to know the people working on your property, and they get to know your yard — no rotating subcontractors showing up unannounced.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & fully insured",
    body: "Every crew member is covered, and every estimate is a real number in writing — not a starting point for negotiation later.",
  },
  {
    icon: Leaf,
    title: "Planted for your soil",
    body: "We test before we plant. What thrives two towns over might struggle in your yard, so every recommendation is specific to your property.",
  },
  {
    icon: Award,
    title: "Work that's still there in 10 years",
    body: "Drainage-first hardscaping and proper soil prep aren't the cheapest way to build — they're the reason our five-year-old projects still look new.",
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
          <h1 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
            Built one yard at a time
          </h1>
          <p className="mt-5 text-lg text-ink/60">
            Rooted started with a single mower and a handful of neighbors in 2013. Twelve years
            later we're still a local crew — just one that's planted a few thousand more shrubs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] shadow-lift sm:aspect-[21/9]">
          <img src={crewPhoto} alt="Our crew planting a new garden bed" className="absolute inset-0 h-full w-full object-cover" />
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
              <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-ink/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Why homeowners choose us"
          title="Principles over shortcuts"
          description="These four ideas shape every job, from a single quote to a full property redesign."
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
          Ready to see what's possible?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-white/70">
          Send us a few details about your property and we'll follow up with a free quote.
        </p>
      </section>
    </div>
  );
}
