import { Link } from "react-router-dom";
import { AtSign, Globe, MessageCircle, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1a140f] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-base font-bold">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-brand-400 to-sun-400 text-[#1a140f]">
              <Zap className="h-3.5 w-3.5" fill="currentColor" />
            </span>
            AURORA
          </Link>
          <p className="mt-3 max-w-xs text-sm text-white/50">
            Tech, bags, and gear engineered for people who move fast and don't look back.
          </p>
          <div className="mt-4 flex gap-3 text-white/40">
            <a href="#" aria-label="Social" className="hover:text-brand-400"><AtSign className="h-5 w-5" /></a>
            <a href="#" aria-label="Community" className="hover:text-brand-400"><MessageCircle className="h-5 w-5" /></a>
            <a href="#" aria-label="Website" className="hover:text-brand-400"><Globe className="h-5 w-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/70">Shop</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/50">
            <li><Link to="/" className="hover:text-brand-400">New Arrivals</Link></li>
            <li><Link to="/" className="hover:text-brand-400">All Products</Link></li>
            <li><Link to="/" className="hover:text-brand-400">Best Sellers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/70">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/50">
            <li><Link to="/about" className="hover:text-brand-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/70">Stay in the loop</h4>
          <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex overflow-hidden rounded-md border border-white/15 bg-white/5">
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="w-full bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-white/30"
            />
            <button type="submit" className="whitespace-nowrap bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-400">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/30">
        © {new Date().getFullYear()} Aurora. All rights reserved.
      </div>
    </footer>
  );
}
