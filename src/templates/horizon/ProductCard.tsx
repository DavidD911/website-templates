import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus, Star } from "lucide-react";
import type { Product } from "../../types";
import { formatPrice } from "../../lib/format";
import { useCart } from "../../context/CartContext";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-surface shadow-soft ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div
          className="relative aspect-[4/3] overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${product.gradient[0]}, ${product.gradient[1]})`,
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{
              background: `linear-gradient(160deg, ${product.gradient[0]}99, ${product.gradient[1]}33)`,
            }}
          />
          {product.isNew && (
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-brand-700 backdrop-blur">
              New
            </span>
          )}
          {product.compareAtPrice && (
            <span className="absolute right-4 top-4 rounded-full bg-sun-500 px-3 py-1 text-xs font-semibold text-white">
              Sale
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-medium uppercase tracking-wider text-brand-500">
          {product.category}
        </span>
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-display text-lg font-semibold leading-snug text-ink hover:text-brand-600">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-ink/60">{product.tagline}</p>

        <div className="mt-1 flex items-center gap-1 text-sun-500">
          <Star className="h-4 w-4 fill-current" />
          <span className="text-sm font-medium text-ink/70">{product.rating}</span>
          <span className="text-xs text-ink/40">({product.reviewCount})</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-bold text-ink">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm text-ink/40 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => addItem(product.id, product.colors[0], 1)}
            aria-label={`Add ${product.name} to cart`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-brand-600 active:scale-95"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
