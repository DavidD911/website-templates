import { Sprout, PencilRuler, Flower2, Fence, TreePine, Lamp } from "lucide-react";
import type { Service } from "../types";

import lawnImage from "../assets/services/lawn-care.jpg";
import designImage from "../assets/services/landscape-design.jpg";
import plantingImage from "../assets/services/garden-planting.jpg";
import hardscapingImage from "../assets/services/hardscaping.jpg";
import treeImage from "../assets/services/tree-care.jpg";
import lightingImage from "../assets/services/outdoor-lighting.jpg";

export const services: Service[] = [
  {
    id: "s1",
    slug: "lawn-care",
    name: "Lawn Care",
    category: "Lawn Care",
    icon: Sprout,
    image: lawnImage,
    tagline: "A lawn that looks mowed by hand, every week.",
    description:
      "Weekly or bi-weekly mowing, edging, and fertilization on a schedule built around your grass type and climate — not a generic calendar.",
    features: [
      "Weekly or bi-weekly mowing & edging",
      "Seasonal fertilization program",
      "Weed control & aeration",
      "Same crew every visit",
    ],
    priceFrom: 45,
    gradient: ["#3f6212", "#a3e635"],
  },
  {
    id: "s2",
    slug: "landscape-design",
    name: "Landscape Design",
    category: "Design",
    icon: PencilRuler,
    image: designImage,
    tagline: "A full plan before a single shovel goes in.",
    description:
      "A custom design for your property — plant selection, layout, and materials chosen for your soil, sun, and the way you actually use your yard.",
    features: [
      "On-site consultation & 3D concept",
      "Plant & material selection",
      "Phased installation planning",
      "One year of design revisions",
    ],
    priceFrom: 350,
    gradient: ["#166534", "#4ade80"],
  },
  {
    id: "s3",
    slug: "garden-planting",
    name: "Garden & Planting",
    category: "Planting",
    icon: Flower2,
    image: plantingImage,
    tagline: "Beds that bloom in more than one season.",
    description:
      "Perennial and seasonal beds planted for year-round color, with soil prep and mulch that actually gives new plants a fighting chance.",
    features: [
      "Soil testing & bed preparation",
      "Perennial & seasonal plant selection",
      "Mulching & root establishment care",
      "90-day plant health guarantee",
    ],
    priceFrom: 275,
    gradient: ["#65a30d", "#fde047"],
  },
  {
    id: "s4",
    slug: "hardscaping",
    name: "Hardscaping & Patios",
    category: "Hardscaping",
    icon: Fence,
    image: hardscapingImage,
    tagline: "Patios, walls, and walkways built to outlast you.",
    description:
      "Paver patios, retaining walls, fire pits, and walkways — engineered for proper drainage so they still look right after ten winters.",
    features: [
      "Paver & natural stone patios",
      "Retaining walls & fire pits",
      "Drainage-first engineering",
      "10-year installation warranty",
    ],
    priceFrom: 1200,
    gradient: ["#57534e", "#d6d3d1"],
  },
  {
    id: "s5",
    slug: "tree-care",
    name: "Tree Care",
    category: "Tree Care",
    icon: TreePine,
    image: treeImage,
    tagline: "Pruned for health, not just for looks.",
    description:
      "Certified arborist pruning, deadwood removal, and disease assessment that keeps mature trees safe and thriving for decades.",
    features: [
      "Certified arborist assessment",
      "Structural pruning & deadwooding",
      "Disease & pest diagnosis",
      "Emergency storm response",
    ],
    priceFrom: 195,
    gradient: ["#14532d", "#86efac"],
  },
  {
    id: "s6",
    slug: "outdoor-lighting",
    name: "Outdoor Lighting",
    category: "Lighting",
    icon: Lamp,
    image: lightingImage,
    tagline: "A yard that still looks designed after dark.",
    description:
      "Low-voltage path, uplighting, and accent fixtures on a smart timer — layered to highlight your landscape instead of just lighting it up.",
    features: [
      "Low-voltage LED fixtures",
      "Path, uplighting & accent layering",
      "Smart timer & app control",
      "2-year fixture warranty",
    ],
    priceFrom: 850,
    gradient: ["#1e293b", "#fbbf24"],
  },
];

export const serviceCategories = Array.from(new Set(services.map((s) => s.category)));

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
