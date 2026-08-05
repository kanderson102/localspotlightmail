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
  cardType: "9x12" | "8.5x11" | "6x11";
  pricing: {
    standard: number;
    double: number;
    half: number;
  };
}

export const townAverages: Record<string, TownAverage> = {
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
    cardType: "9x12",
    pricing: {
      standard: 439,
      double: 789,
      half: 269,
    },
  },
  "longwood-lakemary": {
    slug: "longwood-lakemary",
    city: "Longwood - Lake Mary",
    doors: 5000,
    income: "$114,444",
    householdSize: 2.8,
    age: 53,
    residencyLength: 15,
    homeowner: 81,
    mapImageUrl: "/assets/longwood_lakemary_map.png",
    cardType: "9x12",
    pricing: {
      standard: 419,
      double: 749,
      half: 249,
    },
  },
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
    cardType: "9x12",
    pricing: {
      standard: 499,
      double: 899,
      half: 299,
    },
  },
  "sanford": {
    slug: "sanford",
    city: "Sanford",
    doors: 2500,
    income: "$167,831",
    householdSize: 2.9,
    age: 53,
    residencyLength: 12,
    homeowner: 58,
    mapImageUrl: "/assets/sanford_map.png",
    cardType: "6x11",
    pricing: {
      standard: 249,
      double: 449,
      half: 0,
    },
  },
  "wekivasprings": {
    slug: "wekivasprings",
    city: "Wekiva Springs",
    doors: 5000,
    income: "$153,491",
    householdSize: 3.1,
    age: 53,
    residencyLength: 15,
    homeowner: 94,
    mapImageUrl: "/assets/wekiva_springs_map.png",
    cardType: "9x12",
    pricing: {
      standard: 489,
      double: 799,
      half: 289,
    },
  },
};

// Aliases
townAverages["markham-woods"] = townAverages["markhamwoods"];
townAverages["wekiva-springs"] = townAverages["wekivasprings"];

/**
 * Safely resolves town average statistics by slug alias.
 */
export function getTownAverage(slug?: string): TownAverage {
  if (!slug) return townAverages["markhamwoods"];
  const normalized = slug === "markham-woods" ? "markhamwoods" : slug === "wekiva-springs" ? "wekivasprings" : slug;
  return townAverages[normalized] || townAverages["markhamwoods"];
}
