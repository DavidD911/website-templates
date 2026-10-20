import { Link } from "react-router-dom";
import { HardHat, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1a140f] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-base font-bold">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-brand-400 to-sun-400 text-[#1a140f]">
              <HardHat className="h-3.5 w-3.5" />
            </span>
            ROOTED
          </Link>
          <p className="mt-3 max-w-xs text-sm text-white/50">
            Licensed, bonded, and insured landscaping and hardscaping contractors.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/70">Services</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/50">
            <li><Link to="/services" className="hover:text-brand-400">Hardscaping</Link></li>
            <li><Link to="/services" className="hover:text-brand-400">Tree Care</Link></li>
            <li><Link to="/services" className="hover:text-brand-400">Lawn Care</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-400">Our Work</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/70">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/50">
            <li><Link to="/about" className="hover:text-brand-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-400">Get an Estimate</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/70">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/50">
            <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> (555) 244-0198</li>
            <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> hello@rooted-landscaping.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Serving the Fairview metro area</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/30">
        © {new Date().getFullYear()} Rooted Landscaping. Licensed & insured. All rights reserved.
      </div>
    </footer>
  );
}
