export interface TownAverage {
  slug: string;
  city: string;
  doors: number;
  income: string;
  householdSize: number;
  age: number;
  residencyLength: number;
  homeowner: number;
  mapImageUrl: string;
  pricing: {
    standard: number;
    double: number;
    half: number;
  };
}

const DEFAULT_PRICING = {
  standard: 495,
  double: 895,
  half: 295,
};

export const townAverages: Record<string, TownAverage> = {
  "markhamwoods": {
    slug: "markhamwoods",
    city: "Markham Woods",
    doors: 5000,
    income: "$211,831",
    householdSize: 3.1,
    age: 55,
    residencyLength: 14,
    homeowner: 84,
    mapImageUrl: "/assets/markham_woods_map.png",
    pricing: {
      standard: 595,
      double: 1095,
      half: 395,
    },
  },
  "longwood-lakemary": {
    slug: "longwood-lakemary",
    city: "Longwood - Lake Mary",
    doors: 5000,
    income: "$125,726",
    householdSize: 2.7,
    age: 54,
    residencyLength: 15,
    homeowner: 59,
    mapImageUrl: "/assets/longwood_lakemary_map.jpg",
    pricing: DEFAULT_PRICING,
  },
  "sanford": {
    slug: "sanford",
    city: "Sanford",
    doors: 5000,
    income: "$158,428",
    householdSize: 2.6,
    age: 53,
    residencyLength: 12,
    homeowner: 57,
    mapImageUrl: "/assets/sanford_map.png",
    pricing: DEFAULT_PRICING,
  },
  "altamonte-springs": {
    slug: "altamonte-springs",
    city: "Altamonte Springs",
    doors: 5000,
    income: "$107,325",
    householdSize: 2.8,
    age: 54,
    residencyLength: 15,
    homeowner: 88,
    mapImageUrl: "/assets/altamonte_springs_map.png",
    pricing: DEFAULT_PRICING,
  },
};

// Also support markham-woods alias
townAverages["markham-woods"] = townAverages["markhamwoods"];

/**
 * Safely resolves town average statistics by slug alias.
 */
export function getTownAverage(slug?: string): TownAverage {
  if (!slug) return townAverages["markhamwoods"];
  const normalized = slug === "markham-woods" ? "markhamwoods" : slug;
  return townAverages[normalized] || townAverages["markhamwoods"];
}
