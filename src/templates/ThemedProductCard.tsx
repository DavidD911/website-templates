import type { Product } from "../types";
import { useTemplate } from "./TemplateContext";
import HorizonProductCard from "./horizon/ProductCard";
import PulseProductCard from "./pulse/ProductCard";
import AtelierProductCard from "./atelier/ProductCard";

export default function ThemedProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { template } = useTemplate();
  if (template === "pulse") return <PulseProductCard product={product} index={index} />;
  if (template === "atelier") return <AtelierProductCard product={product} index={index} />;
  return <HorizonProductCard product={product} index={index} />;
}
