import { Link } from "react-router-dom";
import { Sprout, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-ink">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-sun-500 text-white">
              <Sprout className="h-4 w-4" />
            </span>
            Rooted
          </Link>
          <p className="mt-3 max-w-xs text-sm text-ink/60">
            Full-service landscaping — design, planting, hardscaping, and the weekly upkeep that
            keeps it all looking that way.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-ink">Services</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink/60">
            <li><Link to="/services" className="hover:text-brand-600">Lawn Care</Link></li>
            <li><Link to="/services" className="hover:text-brand-600">Landscape Design</Link></li>
            <li><Link to="/services" className="hover:text-brand-600">Hardscaping</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-600">Our Work</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-ink">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink/60">
            <li><Link to="/about" className="hover:text-brand-600">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-600">Get a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-ink">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink/60">
            <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> (555) 244-0198</li>
            <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> hello@rooted-landscaping.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Serving the Fairview metro area</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/10 py-5 text-center text-xs text-ink/40">
        © {new Date().getFullYear()} Rooted Landscaping. All rights reserved.
      </div>
    </footer>
  );
}
