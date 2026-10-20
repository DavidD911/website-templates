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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#221b15] transition-colors duration-300 hover:border-brand-500/60"
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div
          className="relative aspect-[4/3] overflow-hidden"
          style={{
            background: `linear-gradient(140deg, ${product.gradient[0]}, ${product.gradient[1]})`,
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
              background: `linear-gradient(160deg, ${product.gradient[0]}b3, ${product.gradient[1]}40)`,
            }}
          />
          <div className="photo-fade-bottom absolute inset-0" />
          {product.isNew && (
            <span className="absolute left-3 top-3 rounded-md bg-[#1a140f]/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-400 backdrop-blur">
              New
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-400">
          {product.category}
        </span>
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-display text-base font-semibold leading-snug text-white hover:text-brand-300">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 text-sun-400">
          <Star className="h-3.5 w-3.5 fill-current" />
          <span className="text-xs font-medium text-white/60">{product.rating}</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-display text-lg font-bold text-white">
            {formatPrice(product.price)}
          </span>
          <button
            type="button"
            onClick={() => addItem(product.id, product.colors[0], 1)}
            aria-label={`Add ${product.name} to cart`}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-500 text-white transition-colors hover:bg-brand-400 active:scale-95"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
