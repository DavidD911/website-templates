import { useMemo, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Minus,
  Plus,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";
import { getProductBySlug, getRelatedProducts } from "../data/products";
import { formatPrice } from "../lib/format";
import { useCart } from "../context/CartContext";
import ThemedProductCard from "../templates/ThemedProductCard";
import SectionHeading from "../components/SectionHeading";

const tabs = ["Description", "Features", "Shipping & Returns"] as const;

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = slug ? getProductBySlug(slug) : undefined;

  const [color, setColor] = useState(product?.colors[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState<(typeof tabs)[number]>("Description");
  const [justAdded, setJustAdded] = useState(false);

  const related = useMemo(() => (product ? getRelatedProducts(product) : []), [product]);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  function handleAddToCart() {
    addItem(product!.id, color, quantity);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1800);
  }

  function handleBuyNow() {
    addItem(product!.id, color, quantity, false);
    navigate("/checkout");
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
      <nav className="mb-8 flex items-center gap-1.5 text-sm text-ink/50">
        <Link to="/" className="hover:text-ink">Shop</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span>{product.category}</span>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative aspect-square overflow-hidden rounded-[var(--radius-card)] shadow-lift"
          style={{ background: `linear-gradient(150deg, ${color || product.gradient[0]}, ${product.gradient[1]})` }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <motion.div
            className="absolute inset-0 mix-blend-multiply"
            animate={{
              background: `linear-gradient(150deg, ${color || product.gradient[0]}99, ${product.gradient[1]}33)`,
            }}
            transition={{ duration: 0.3 }}
          />
          {product.isNew && (
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur">
              New
            </span>
          )}
        </motion.div>

        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-500">
            {product.category}
          </span>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            {product.name}
          </h1>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center gap-0.5 text-sun-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-current" : "fill-transparent stroke-current opacity-30"}`}
                />
              ))}
            </div>
            <span className="text-sm text-ink/50">
              {product.rating} · {product.reviewCount} reviews
            </span>
          </div>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-display text-3xl font-bold text-ink">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-lg text-ink/40 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>

          <p className="mt-4 leading-relaxed text-ink/60">{product.tagline}</p>

          <div className="mt-7">
            <span className="text-sm font-medium text-ink/70">Color</span>
            <div className="mt-2 flex gap-3">
              {product.colors.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-label={`Select color ${c}`}
                  onClick={() => setColor(c)}
                  className={`h-9 w-9 rounded-full ring-2 ring-offset-2 transition-all ${
                    color === c ? "ring-ink scale-110" : "ring-transparent"
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <span className="text-sm font-medium text-ink/70">Quantity</span>
            <div className="flex items-center gap-3 rounded-full bg-ink/5 px-2 py-1.5">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-surface text-ink shadow-sm"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-5 text-center font-medium">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-surface text-ink shadow-sm"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <span className="text-xs text-ink/40">{product.stock} in stock</span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex flex-1 items-center justify-center gap-2 rounded-[var(--radius-button)] bg-surface px-6 py-3.5 text-sm font-semibold text-ink shadow-soft ring-1 ring-ink/10 transition-colors hover:bg-ink/5"
            >
              <ShoppingBag className="h-4 w-4" />
              {justAdded ? "Added!" : "Add to cart"}
            </button>
            <button
              type="button"
              onClick={handleBuyNow}
              className="flex flex-1 items-center justify-center gap-2 rounded-[var(--radius-button)] bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Buy now
            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-ink/10 pt-6 text-sm text-ink/60">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-brand-500" />
              Free shipping over $75
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4 text-brand-500" />
              30-day returns
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-500" />
              2-year warranty
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex gap-6 border-b border-ink/10">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`relative pb-4 text-sm font-medium transition-colors ${
                tab === t ? "text-ink" : "text-ink/40 hover:text-ink/70"
              }`}
            >
              {t}
              {tab === t && (
                <motion.span layoutId="tab-underline" className="absolute inset-x-0 -bottom-px h-0.5 bg-ink" />
              )}
            </button>
          ))}
        </div>
        <div className="max-w-3xl py-8 text-ink/70">
          {tab === "Description" && <p className="leading-relaxed">{product.description}</p>}
          {tab === "Features" && (
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                  {f}
                </li>
              ))}
            </ul>
          )}
          {tab === "Shipping & Returns" && (
            <p className="leading-relaxed">
              Orders ship within 1–2 business days via tracked courier. Free shipping applies
              automatically on orders over $75; standard shipping is otherwise a flat $6.
              Not the right fit? Return it unused within 30 days for a full refund — we cover the
              return label.
            </p>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <SectionHeading title="You might also like" align="left" />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p, i) => (
              <ThemedProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
