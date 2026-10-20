import { Link } from "react-router-dom";
import { Building2, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#17181c] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-base font-bold">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-brand-400 to-sun-400 text-[#17181c]">
              <Building2 className="h-3.5 w-3.5" />
            </span>
            KEYSTONE REALTY
          </Link>
          <p className="mt-3 max-w-xs text-sm text-white/50">
            A full-service brokerage helping buyers and sellers move with confidence across the
            metro area.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/70">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/50">
            <li><Link to="/listings" className="hover:text-brand-400">All Listings</Link></li>
            <li><Link to="/about" className="hover:text-brand-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/70">Property Types</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/50">
            <li>Houses</li>
            <li>Condos</li>
            <li>Townhomes</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/70">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/50">
            <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> (555) 318-0447</li>
            <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> hello@keystonerealty.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Serving the Fairview metro area</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/30">
        © {new Date().getFullYear()} Keystone Realty. All rights reserved.
      </div>
    </footer>
  );
}
