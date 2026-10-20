import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import { formatPrice } from "../lib/format";

export default function CartDrawer() {
  const { lines, isOpen, close, setQuantity, removeItem, subtotal } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-paper shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
              <h2 className="font-display text-lg font-bold text-ink">Your Cart</h2>
              <button
                type="button"
                onClick={close}
                aria-label="Close cart"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink hover:bg-ink/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                <ShoppingBag className="h-12 w-12 text-ink/20" />
                <p className="text-ink/60">Your cart is empty.</p>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-[var(--radius-button)] bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
                >
                  Continue shopping
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  <ul className="flex flex-col gap-4">
                    {lines.map((line) => {
                      const product = products.find((p) => p.id === line.productId);
                      if (!product) return null;
                      return (
                        <li
                          key={`${line.productId}-${line.color}`}
                          className="flex gap-4 rounded-2xl bg-surface p-3 shadow-soft ring-1 ring-black/5"
                        >
                          <div
                            className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl"
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
                          <div className="flex flex-1 flex-col justify-between">
                            <div className="flex items-start justify-between gap-2">
                              <Link
                                to={`/product/${product.slug}`}
                                onClick={close}
                                className="font-display text-sm font-semibold text-ink hover:text-brand-600"
                              >
                                {product.name}
                              </Link>
                              <button
                                type="button"
                                onClick={() => removeItem(line.productId, line.color)}
                                aria-label="Remove item"
                                className="text-ink/30 hover:text-ink/70"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 rounded-full bg-ink/5 px-1 py-1">
                                <button
                                  type="button"
                                  onClick={() =>
                                    setQuantity(line.productId, line.color, line.quantity - 1)
                                  }
                                  className="flex h-6 w-6 items-center justify-center rounded-full bg-surface text-ink shadow-sm"
                                >
                                  <Minus className="h-3 w-3" />
                                </button>
                                <span className="w-4 text-center text-sm font-medium">
                                  {line.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() =>
                                    setQuantity(line.productId, line.color, line.quantity + 1)
                                  }
                                  className="flex h-6 w-6 items-center justify-center rounded-full bg-surface text-ink shadow-sm"
                                >
                                  <Plus className="h-3 w-3" />
                                </button>
                              </div>
                              <span className="font-display text-sm font-bold text-ink">
                                {formatPrice(product.price * line.quantity)}
                              </span>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="border-t border-ink/10 px-6 py-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-ink/60">Subtotal</span>
                    <span className="font-display text-xl font-bold text-ink">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <Link
                    to="/checkout"
                    onClick={close}
                    className="flex w-full items-center justify-center rounded-[var(--radius-button)] bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
                  >
                    Checkout
                  </Link>
                  <p className="mt-2 text-center text-xs text-ink/40">
                    Shipping & taxes calculated at checkout.
                  </p>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
