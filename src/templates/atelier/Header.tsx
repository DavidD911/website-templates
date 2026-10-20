import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "../../context/CartContext";

const navLinks = [
  { to: "/", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const { itemCount, open } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky z-40 border-b border-ink/10 bg-paper"
      style={{ top: "var(--switcher-h)" }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-5">
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
                  isActive ? "text-ink" : "text-ink/50 hover:text-ink"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-8 w-8 items-center justify-center text-ink md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>

        <Link to="/" className="justify-self-center text-center font-display text-2xl tracking-wide text-ink">
          Aurora
        </Link>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={open}
            aria-label="Open cart"
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink/5"
          >
            <ShoppingBag className="h-4 w-4" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-600 text-[10px] font-bold text-white">
                {itemCount > 9 ? "9+" : itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-ink/10 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setMobileOpen(false)}
                  className="py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-ink/60"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
