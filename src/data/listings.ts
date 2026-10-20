import type { Listing } from "../types";

import chalet from "../assets/realestate/chalet.jpg";
import capeCod from "../assets/realestate/cape-cod.jpg";
import modernDark from "../assets/realestate/modern-dark.jpg";
import villaPool from "../assets/realestate/villa-pool.jpg";
import villaInfinity from "../assets/realestate/villa-infinity.jpg";
import minimalistVilla from "../assets/realestate/minimalist-villa.jpg";
import studioLoft from "../assets/realestate/studio-loft.jpg";
import livingRoom from "../assets/realestate/living-room.jpg";
import livingFireplace from "../assets/realestate/living-fireplace.jpg";
import staircase from "../assets/realestate/staircase.jpg";

export const listings: Listing[] = [
  {
    id: "l1",
    slug: "sunset-terrace-villa",
    title: "Sunset Terrace Villa",
    address: "482 Sunset Terrace",
    neighborhood: "Bel Air Heights",
    price: 2450000,
    status: "For Sale",
    propertyType: "House",
    beds: 5,
    baths: 4.5,
    sqft: 4200,
    yearBuilt: 2021,
    description:
      "A sun-drenched contemporary villa with a resort-style pool, disappearing glass walls, and a chef's kitchen built for entertaining. Every room opens onto the terrace.",
    features: [
      "Resort-style infinity-edge pool",
      "Disappearing glass wall systems",
      "Chef's kitchen with waterfall island",
      "Primary suite with private terrace",
      "3-car garage with EV charging",
    ],
    images: [villaPool, livingFireplace, livingRoom, staircase],
    isFeatured: true,
  },
  {
    id: "l2",
    slug: "harborview-cape-cod",
    title: "Harborview Cape Cod",
    address: "17 Harborview Lane",
    neighborhood: "Coastal Bluff",
    price: 1250000,
    status: "For Sale",
    propertyType: "House",
    beds: 4,
    baths: 3,
    sqft: 3100,
    yearBuilt: 1998,
    description:
      "A classic shingle-style Cape with a wraparound porch and water views from nearly every window. Meticulously maintained by the same family for two decades.",
    features: [
      "Wraparound covered porch",
      "Water views from main living areas",
      "Updated kitchen, original character preserved",
      "Detached bonus studio",
    ],
    images: [capeCod],
    isFeatured: true,
  },
  {
    id: "l3",
    slug: "elm-street-modern",
    title: "Elm Street Modern",
    address: "930 Elm Street",
    neighborhood: "Cedar Ridge",
    price: 940000,
    status: "Pending",
    propertyType: "House",
    beds: 4,
    baths: 3,
    sqft: 2850,
    yearBuilt: 2019,
    description:
      "An architect-designed home wrapped around a century-old eucalyptus the owners refused to remove — so the whole floor plan was built to frame it instead.",
    features: [
      "Built around a protected heritage tree",
      "Floor-to-ceiling glass great room",
      "Home office with separate entrance",
      "Solar array, fully owned",
    ],
    images: [modernDark],
  },
  {
    id: "l4",
    slug: "coral-bay-estate",
    title: "Coral Bay Estate",
    address: "5 Coral Bay Point",
    neighborhood: "Coral Bay",
    price: 3100000,
    status: "For Sale",
    propertyType: "House",
    beds: 6,
    baths: 5.5,
    sqft: 5400,
    yearBuilt: 2022,
    description:
      "A hillside estate with an infinity pool that appears to spill into the bay below. Smart-home controls throughout, and a motor court for six cars.",
    features: [
      "Infinity pool with bay views",
      "Whole-home smart automation",
      "Six-car motor court",
      "Guest casita with kitchenette",
    ],
    images: [villaInfinity],
    isFeatured: true,
  },
  {
    id: "l5",
    slug: "whisper-ridge-chalet",
    title: "Whisper Ridge Chalet",
    address: "212 Whisper Ridge Rd",
    neighborhood: "Mountain View",
    price: 685000,
    status: "For Sale",
    propertyType: "House",
    beds: 3,
    baths: 2,
    sqft: 2100,
    yearBuilt: 2016,
    description:
      "An A-frame-inspired chalet tucked into the hillside, with vaulted wood ceilings and a wall of glass that turns every evening into a light show.",
    features: [
      "Vaulted wood ceilings throughout",
      "Wraparound deck with hillside views",
      "Wood-burning stone fireplace",
      "Detached two-car garage",
    ],
    images: [chalet],
  },
  {
    id: "l6",
    slug: "aria-minimalist-residence",
    title: "Aria Minimalist Residence",
    address: "44 Aria Court",
    neighborhood: "Ashford Park",
    price: 875000,
    status: "Sold",
    propertyType: "House",
    beds: 3,
    baths: 2.5,
    sqft: 2400,
    yearBuilt: 2020,
    description:
      "A study in restraint — clean white volumes, minimal trim, and a courtyard entry that keeps the street noise out and the light in.",
    features: [
      "Private courtyard entry",
      "Polished concrete floors",
      "Integrated indoor-outdoor living",
      "Owned solar with battery backup",
    ],
    images: [minimalistVilla],
  },
  {
    id: "l7",
    slug: "midtown-loft-studio",
    title: "Midtown Loft Studio",
    address: "88 Midtown Ave, Unit 4B",
    neighborhood: "Midtown",
    price: 325000,
    status: "For Sale",
    propertyType: "Condo",
    beds: 1,
    baths: 1,
    sqft: 640,
    yearBuilt: 2009,
    description:
      "A bright, efficient one-bedroom two blocks from the transit line — freshly painted, new flooring, and a building with genuinely low HOA dues.",
    features: [
      "Two blocks from light rail",
      "In-unit washer/dryer",
      "Low HOA, well-run building",
      "Private balcony",
    ],
    images: [studioLoft],
  },
];

export function getListingBySlug(slug: string) {
  return listings.find((l) => l.slug === slug);
}

export function getFeaturedListings() {
  return listings.filter((l) => l.isFeatured);
}
