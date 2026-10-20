import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "../../types";
import { formatPrice } from "../../lib/format";
import { useCart } from "../../context/CartContext";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      className="group flex flex-col transition-opacity hover:opacity-80"
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div
          className="relative aspect-[4/5] overflow-hidden"
          style={{
            background: `linear-gradient(160deg, ${product.gradient[0]}, ${product.gradient[1]})`,
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 mix-blend-soft-light"
            style={{
              background: `linear-gradient(160deg, ${product.gradient[0]}, ${product.gradient[1]})`,
              opacity: 0.55,
            }}
          />
          {product.isNew && (
            <span className="absolute left-3 top-3 border border-white/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.15em] text-white">
              New
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <span className="text-[10px] uppercase tracking-[0.15em] text-ink/40">{product.category}</span>
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-display text-base text-ink group-hover:text-brand-700">{product.name}</h3>
        </Link>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-display text-base text-ink">{formatPrice(product.price)}</span>
          <button
            type="button"
            onClick={() => addItem(product.id, product.colors[0], 1)}
            className="text-[11px] font-medium uppercase tracking-[0.1em] text-ink/60 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink"
          >
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
}
