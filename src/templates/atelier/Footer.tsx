import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="font-display text-xl tracking-wide text-ink">
            Aurora
          </Link>
          <p className="mt-3 max-w-xs text-sm text-ink/50">
            Thoughtfully designed everyday objects, made to be used for a decade — not a season.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.15em] text-ink/40">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm text-ink/60">
            <li><Link to="/" className="hover:text-ink">New Arrivals</Link></li>
            <li><Link to="/" className="hover:text-ink">All Products</Link></li>
            <li><Link to="/" className="hover:text-ink">Best Sellers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.15em] text-ink/40">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-ink/60">
            <li><Link to="/about" className="hover:text-ink">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-ink">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.15em] text-ink/40">Stay in the loop</h4>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex border-b border-ink/20">
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-ink/30"
            />
            <button type="submit" className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.1em] text-ink/60 hover:text-ink">
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
