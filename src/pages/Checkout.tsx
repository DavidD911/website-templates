import { useMemo, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, CreditCard, Lock, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import { formatPrice } from "../lib/format";

function randomOrderNumber() {
  return `AU-${Math.floor(100000 + Math.random() * 900000)}`;
}

export default function Checkout() {
  const { lines, subtotal, clear } = useCart();
  const [placing, setPlacing] = useState(false);
  const [order, setOrder] = useState<string | null>(null);

  const shipping = subtotal >= 75 || subtotal === 0 ? 0 : 6;
  const tax = useMemo(() => subtotal * 0.08, [subtotal]);
  const total = subtotal + shipping + tax;

  function handlePlaceOrder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPlacing(true);
    window.setTimeout(() => {
      setOrder(randomOrderNumber());
      setPlacing(false);
      clear();
    }, 1100);
  }

  if (order) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-6 py-24 text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <CheckCircle2 className="h-16 w-16 text-brand-500" strokeWidth={1.25} />
        </motion.div>
        <h1 className="mt-6 font-display text-3xl font-bold text-ink">Order confirmed</h1>
        <p className="mt-3 text-ink/60">
          Thanks for shopping with Aurora. Your confirmation number is
        </p>
        <p className="mt-1 font-display text-xl font-semibold text-brand-600">{order}</p>
        <p className="mt-4 text-sm text-ink/50">
          A receipt and tracking details will be sent to your email once your order ships.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-[var(--radius-button)] bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-brand-600"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  if (lines.length === 0) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">Checkout</h1>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-5">
        <form onSubmit={handlePlaceOrder} className="flex flex-col gap-8 lg:col-span-3">
          <section className="rounded-[var(--radius-card)] bg-surface p-6 shadow-soft ring-1 ring-black/5 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-ink">Shipping information</h2>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input required placeholder="First name" className="input px-4" />
              <input required placeholder="Last name" className="input px-4" />
              <input required type="email" placeholder="Email" className="input px-4 sm:col-span-2" />
              <input required placeholder="Address" className="input px-4 sm:col-span-2" />
              <input required placeholder="City" className="input px-4" />
              <input required placeholder="ZIP / Postal code" className="input px-4" />
            </div>
          </section>

          <section className="rounded-[var(--radius-card)] bg-surface p-6 shadow-soft ring-1 ring-black/5 sm:p-8">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold text-ink">Payment</h2>
              <div className="flex items-center gap-1.5 text-xs text-ink/40">
                <Lock className="h-3.5 w-3.5" />
                Secure checkout
              </div>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4">
              <div className="relative">
                <CreditCard className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/30" />
                <input
                  required
                  placeholder="Card number"
                  inputMode="numeric"
                  className="input pl-11 pr-4"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="MM / YY" className="input px-4" />
                <input required placeholder="CVC" className="input px-4" />
              </div>
            </div>
          </section>

          <button
            type="submit"
            disabled={placing}
            className="flex items-center justify-center rounded-[var(--radius-button)] bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:opacity-60"
          >
            {placing ? "Placing order..." : `Place order · ${formatPrice(total)}`}
          </button>
          <p className="text-center text-xs text-ink/40">
            This is a demo storefront — no payment is actually processed.
          </p>
        </form>

        <div className="lg:col-span-2">
          <div className="rounded-[var(--radius-card)] bg-surface p-6 shadow-soft ring-1 ring-black/5 sm:p-8">
            <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
              <ShoppingBag className="h-5 w-5" />
              Order summary
            </h2>
            <ul className="mt-5 flex flex-col gap-4">
              {lines.map((line) => {
                const product = products.find((p) => p.id === line.productId);
                if (!product) return null;
                return (
                  <li key={`${line.productId}-${line.color}`} className="flex items-center gap-3">
                    <div
                      className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl"
                      style={{
                        background: `linear-gradient(135deg, ${product.gradient[0]}, ${product.gradient[1]})`,
                      }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div
                        className="absolute inset-0 mix-blend-multiply"
                        style={{
                          background: `linear-gradient(135deg, ${product.gradient[0]}99, ${product.gradient[1]}33)`,
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-ink">{product.name}</p>
                      <p className="text-xs text-ink/50">Qty {line.quantity}</p>
                    </div>
                    <span className="text-sm font-semibold text-ink">
                      {formatPrice(product.price * line.quantity)}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex flex-col gap-2 border-t border-ink/10 pt-5 text-sm">
              <div className="flex justify-between text-ink/60">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-ink/60">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between text-ink/60">
                <span>Tax</span>
                <span>{formatPrice(tax)}</span>
              </div>
              <div className="mt-2 flex justify-between border-t border-ink/10 pt-3 font-display text-lg font-bold text-ink">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
