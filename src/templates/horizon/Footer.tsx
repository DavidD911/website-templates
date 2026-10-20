import { Link } from "react-router-dom";
import { AtSign, Globe, MessageCircle, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-ink">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-sun-500 text-white">
              <Sparkles className="h-4 w-4" />
            </span>
            Aurora
          </Link>
          <p className="mt-3 max-w-xs text-sm text-ink/60">
            Thoughtfully designed everyday objects, made to be used for a decade — not a season.
          </p>
          <div className="mt-4 flex gap-3 text-ink/50">
            <a href="#" aria-label="Social" className="hover:text-brand-600">
              <AtSign className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Community" className="hover:text-brand-600">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Website" className="hover:text-brand-600">
              <Globe className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-ink">Shop</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink/60">
            <li><Link to="/" className="hover:text-brand-600">New Arrivals</Link></li>
            <li><Link to="/" className="hover:text-brand-600">All Products</Link></li>
            <li><Link to="/" className="hover:text-brand-600">Best Sellers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-ink">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink/60">
            <li><Link to="/about" className="hover:text-brand-600">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-600">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-ink">Stay in the loop</h4>
          <p className="mt-3 text-sm text-ink/60">Get early access to new drops and restocks.</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-3 flex overflow-hidden rounded-full border border-ink/10 bg-paper"
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="w-full bg-transparent px-4 py-2 text-sm outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-ink/10 py-5 text-center text-xs text-ink/40">
        © {new Date().getFullYear()} Aurora. All rights reserved.
      </div>
    </footer>
  );
}
