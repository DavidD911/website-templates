import type { Agent, RealEstateTestimonial } from "../types";
import agentPhoto from "../assets/realestate/agent-headshot.jpg";

export const agent: Agent = {
  name: "Maren Cole",
  title: "Residential Real Estate Agent",
  photo: agentPhoto,
  phone: "(555) 318-0447",
  email: "maren@marencolehomes.com",
  bio: "I've spent the last nine years helping people buy and sell homes in this area — not just close transactions. I personally walk every listing, negotiate every offer myself, and I'm still the one who answers when you call.",
  yearsExperience: 9,
  totalSales: "$140M+",
  credentials: ["Licensed Realtor", "Certified Negotiation Expert", "Top 1% local agent, 2023–2025"],
};

export const realEstateTestimonials: RealEstateTestimonial[] = [
  {
    id: "ret1",
    name: "The Alvarez Family",
    quote:
      "Maren found us a house that wasn't even listed yet. She knew we'd love it before we did.",
    rating: 5,
    context: "Bought in Cedar Ridge",
  },
  {
    id: "ret2",
    name: "Devon Park",
    quote:
      "She negotiated $60K off asking and handled every deadline herself. No handoffs to an assistant, ever.",
    rating: 5,
    context: "Bought in Coastal Bluff",
  },
  {
    id: "ret3",
    name: "Renee Ibrahim",
    quote:
      "Sold our place in nine days over asking. Maren's pricing strategy was exactly right from day one.",
    rating: 5,
    context: "Sold in Ashford Park",
  },
];
