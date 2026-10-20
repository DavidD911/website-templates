import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { agent } from "../../data/agent";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img src={agent.photo} alt={agent.name} className="h-10 w-10 rounded-full object-cover" />
            <span className="font-display text-lg font-semibold text-ink">{agent.name}</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-ink/60">{agent.title}</p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-ink">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink/60">
            <li><Link to="/listings" className="hover:text-brand-600">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-brand-600">About</Link></li>
            <li><Link to="/contact" className="hover:text-brand-600">Book a Consultation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-ink">Credentials</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink/60">
            {agent.credentials.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-ink">Get in Touch</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink/60">
            <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> {agent.phone}</li>
            <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> {agent.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/10 py-5 text-center text-xs text-ink/40">
        © {new Date().getFullYear()} {agent.name}. All rights reserved.
      </div>
    </footer>
  );
}
