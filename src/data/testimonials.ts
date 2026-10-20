import type { Testimonial } from "../types";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Marcus Webb",
    location: "Maple Heights",
    quote:
      "They redesigned our entire backyard in a week and it looked like it had always been there — not like something new was bolted on.",
    rating: 5,
    service: "Design",
  },
  {
    id: "t2",
    name: "Priya Anand",
    location: "Willow Bend",
    quote:
      "The lighting install completely changed how we use our front yard at night. Worth every penny, and the crew was on time every single day.",
    rating: 5,
    service: "Lighting",
  },
  {
    id: "t3",
    name: "Dan Okafor",
    location: "Fairview",
    quote:
      "Our lawn went from an embarrassment to the best on the block in about six weeks. Same crew every visit, always texted ahead.",
    rating: 4.5,
    service: "Lawn Care",
  },
];
