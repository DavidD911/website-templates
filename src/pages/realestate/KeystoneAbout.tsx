import { motion } from "framer-motion";
import { Award, Building2, ShieldCheck, Users } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import villaImage from "../../assets/realestate/villa-pool.jpg";

const stats = [
  { label: "Years in business", value: "18" },
  { label: "Homes closed", value: "3,400+" },
  { label: "Agents on our team", value: "24" },
  { label: "Client satisfaction", value: "4.8/5" },
];

const values = [
  {
    icon: Users,
    title: "A team, not a solo act",
    body: "Every client gets a dedicated agent backed by a full team — a transaction coordinator, marketing support, and a broker who reviews every contract.",
  },
  {
    icon: Building2,
    title: "Real inventory data",
    body: "Our listings sync directly with the regional MLS, updated multiple times a day — what you see here is what's actually still on the market.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed, bonded, accountable",
    body: "Every agent on our roster is independently licensed and carries E&O insurance. Complaints go to a managing broker, not a black hole.",
  },
  {
    icon: Award,
    title: "Consistently top-ranked locally",
    body: "Recognized by the regional Realtors association for closed volume four years running — not the biggest brokerage in the state, just the most effective in this metro.",
  },
];

export default function KeystoneAbout() {
  return (
    <div>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-200/50 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
            Our brokerage
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
            A local team, built to move fast
          </h1>
          <p className="mt-5 text-lg text-ink/60">
            Keystone Realty was founded in 2007 by three agents who thought buying a home shouldn't
            take three months of phone tag. Eighteen years later, we're still built around speed
            and a real local team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] shadow-lift sm:aspect-[21/9]">
          <img src={villaImage} alt="A recent Keystone Realty listing" className="absolute inset-0 h-full w-full object-cover" />
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
          eyebrow="Why Keystone"
          title="Built for how people actually buy homes now"
          description="Fast answers, real data, and a team big enough to always have someone available."
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
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to talk to an agent?</h2>
        <p className="mx-auto mt-3 max-w-md text-white/70">
          Our team responds to every inquiry within one business hour.
        </p>
      </section>
    </div>
  );
}
