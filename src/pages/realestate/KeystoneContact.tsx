import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import officeImage from "../../assets/realestate/living-fireplace.jpg";

const contactInfo = [
  { icon: Mail, label: "hello@keystonerealty.com" },
  { icon: Phone, label: "(555) 318-0447" },
  { icon: MapPin, label: "220 Main St, Fairview" },
  { icon: Clock, label: "Mon–Sat, 8am–7pm" },
];

export default function KeystoneContact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 900);
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
          Get in touch
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
          Talk to an agent
        </h1>
        <p className="mt-4 text-ink/60">
          Whether you're buying, selling, or just curious about the market — our team responds to
          every inquiry within one business hour.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-5">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-4 rounded-2xl bg-surface p-4 shadow-soft ring-1 ring-black/5">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="text-sm text-ink/70">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="relative mt-6 h-48 overflow-hidden rounded-2xl ring-1 ring-black/5">
            <img src={officeImage} alt="Keystone Realty office" className="absolute inset-0 h-full w-full object-cover" />
            <div
              className="absolute inset-0 mix-blend-multiply"
              style={{
                background:
                  "linear-gradient(160deg, color-mix(in srgb, var(--color-brand-600) 40%, transparent), transparent 65%)",
              }}
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-[var(--radius-card)] bg-surface p-8 shadow-soft ring-1 ring-black/5">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center gap-3 py-16 text-center"
              >
                <CheckCircle2 className="h-14 w-14 text-brand-500" strokeWidth={1.25} />
                <h3 className="font-display text-xl font-semibold text-ink">Message sent</h3>
                <p className="max-w-sm text-sm text-ink/60">
                  A member of our team will follow up within one business hour.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 rounded-[var(--radius-button)] bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/70">
                    Name
                    <input
                      required
                      type="text"
                      placeholder="Jordan Lee"
                      className="rounded-xl border border-ink/10 bg-paper px-4 py-2.5 text-sm text-ink outline-none ring-brand-300 focus:ring-2"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/70">
                    Email
                    <input
                      required
                      type="email"
                      placeholder="jordan@email.com"
                      className="rounded-xl border border-ink/10 bg-paper px-4 py-2.5 text-sm text-ink outline-none ring-brand-300 focus:ring-2"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/70">
                  I'm interested in
                  <select
                    required
                    defaultValue=""
                    className="rounded-xl border border-ink/10 bg-paper px-4 py-2.5 text-sm text-ink outline-none ring-brand-300 focus:ring-2"
                  >
                    <option value="" disabled>Select one</option>
                    <option value="buying">Buying a home</option>
                    <option value="selling">Selling a home</option>
                    <option value="renting">Renting</option>
                    <option value="other">Something else</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/70">
                  Message
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us what you're looking for..."
                    className="resize-none rounded-xl border border-ink/10 bg-paper px-4 py-2.5 text-sm text-ink outline-none ring-brand-300 focus:ring-2"
                  />
                </label>
                <button
                  type="submit"
                  disabled={sending}
                  className="mt-2 flex items-center justify-center rounded-[var(--radius-button)] bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
