import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HardHat, Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky z-40 border-b border-white/10 bg-[#1a140f]"
      style={{ top: "var(--switcher-h)" }}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-base font-bold text-white">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-brand-400 to-sun-400 text-[#1a140f]">
            <HardHat className="h-3.5 w-3.5" />
          </span>
          <span className="tracking-tight">ROOTED</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-xs font-semibold uppercase tracking-widest transition-colors ${
                  isActive ? "text-brand-400" : "text-white/50 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-md bg-brand-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-400 sm:block"
          >
            Get Estimate
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 text-white md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#1a140f] md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-widest ${
                      isActive ? "bg-white/10 text-brand-400" : "text-white/60"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-md bg-brand-500 px-4 py-2 text-center text-xs font-bold uppercase tracking-wider text-white"
              >
                Get Estimate
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
