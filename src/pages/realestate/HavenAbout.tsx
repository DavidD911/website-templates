import { motion } from "framer-motion";
import { Award, HandHeart, MessageCircle, Target } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import { agent } from "../../data/agent";

const values = [
  {
    icon: MessageCircle,
    title: "I answer my own phone",
    body: "No team of assistants, no call center. When you text or call, you're reaching me — the person who'll actually be at your closing.",
  },
  {
    icon: Target,
    title: "Priced right from day one",
    body: "I'd rather tell you an uncomfortable truth about pricing up front than watch a listing sit for sixty days and get stale.",
  },
  {
    icon: HandHeart,
    title: "Your timeline, not a script",
    body: "Some clients need six months to find the right place. Others need to close in three weeks. I work at your pace, not a quota.",
  },
  {
    icon: Award,
    title: "Local knowledge that's actually local",
    body: "I've lived in this area for over a decade — I know which streets flood, which schools are underrated, and which listings are overpriced.",
  },
];

export default function HavenAbout() {
  return (
    <div>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-200/50 to-transparent blur-3xl" />
        <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-6 sm:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
              About me
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
              {agent.name}
            </h1>
            <p className="mt-2 text-lg text-ink/50">{agent.title}</p>
            <p className="mt-5 text-ink/60">{agent.bio}</p>
            <ul className="mt-6 flex flex-col gap-2">
              {agent.credentials.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm text-ink/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] shadow-lift">
            <img src={agent.photo} alt={agent.name} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <SectionHeading
          eyebrow="How I work"
          title="What clients can count on"
          description="These aren't marketing lines — they're what I'd want from an agent if I were buying or selling."
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
          Thinking about buying or selling?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-white/70">
          Let's have a real conversation about what you're looking for — no pressure, no scripts.
        </p>
      </section>
    </div>
  );
}
