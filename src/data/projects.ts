import type { Project } from "../types";

import lawnImage from "../assets/services/lawn-care.jpg";
import designImage from "../assets/services/landscape-design.jpg";
import plantingImage from "../assets/services/garden-planting.jpg";
import hardscapingImage from "../assets/services/hardscaping.jpg";
import treeImage from "../assets/services/tree-care.jpg";
import lightingImage from "../assets/services/outdoor-lighting.jpg";
import galleryGardenImage from "../assets/services/gallery-garden.jpg";
import crewPlantingImage from "../assets/services/crew-planting.jpg";

export const projects: Project[] = [
  {
    id: "pr1",
    title: "Rose Court Garden Path",
    category: "Design",
    location: "Maple Heights",
    image: designImage,
    beforeImage: plantingImage,
    description:
      "A flagstone path and flowering hedge border replacing a bare side yard the owners never used.",
  },
  {
    id: "pr2",
    title: "Cul-de-sac Curb Appeal",
    category: "Lighting",
    location: "Willow Bend",
    image: lightingImage,
    description: "Low-voltage path and uplighting layered across the front bed and entry steps.",
  },
  {
    id: "pr3",
    title: "Poolside Paver Patio",
    category: "Hardscaping",
    location: "Harbor View",
    image: hardscapingImage,
    description: "A 600 sq ft paver patio and retaining wall built around an existing pool.",
  },
  {
    id: "pr4",
    title: "Weekly Lawn Renewal",
    category: "Lawn Care",
    location: "Fairview",
    image: lawnImage,
    description: "Six weeks of aeration, overseed, and fertilization on a tired, patchy lawn.",
  },
  {
    id: "pr5",
    title: "Heritage Oak Restoration",
    category: "Tree Care",
    location: "Ashford Park",
    image: treeImage,
    description: "Structural pruning and cabling to save a storm-damaged 80-year-old oak.",
  },
  {
    id: "pr6",
    title: "Kitchen Garden Build-Out",
    category: "Planting",
    location: "Brookline",
    image: galleryGardenImage,
    description: "Raised beds and a moss-lined path for a family who wanted to grow their own food.",
  },
  {
    id: "pr7",
    title: "New Build Foundation Planting",
    category: "Planting",
    location: "Cedar Ridge",
    image: crewPlantingImage,
    description: "First-season foundation planting for a newly built home, chosen for the local soil.",
  },
];

export function getProjectsByCategory(category: string) {
  return category === "All" ? projects : projects.filter((p) => p.category === category);
}
