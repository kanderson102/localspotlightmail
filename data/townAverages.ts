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
    homeowner: 86,
    mapImageUrl: "/assets/altamonte_springs_map.png",
    cardType: "9x12",
    pricing: {
      standard: 479,
      double: 859,
      half: 289,
    },
  },
  "lake-mary": {
    slug: "lake-mary",
    city: "Lake Mary",
    doors: 2500,
    income: "$187,868",
    householdSize: 3.0,
    age: 54,
    residencyLength: 14,
    homeowner: 97,
    mapImageUrl: "/assets/lake_mary_map.png",
    cardType: "6x11",
    pricing: {
      standard: 249,
      double: 449,
      half: 0,
    },
  },
  "longwood": {
    slug: "longwood",
    city: "Longwood",
    doors: 5000,
    income: "$148,825",
    householdSize: 3.1,
    age: 53,
    residencyLength: 15,
    homeowner: 94,
    mapImageUrl: "/assets/longwood_map.png",
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
    homeowner: 93,
    mapImageUrl: "/assets/sanford_map.png",
    cardType: "6x11",
    pricing: {
      standard: 249,
      double: 449,
      half: 0,
    },
  },
  "wekiva-springs": {
    slug: "wekiva-springs",
    city: "Wekiva Springs",
    doors: 5000,
    income: "$153,491",
    householdSize: 3.1,
    age: 53,
    residencyLength: 15,
    homeowner: 95,
    mapImageUrl: "/assets/wekiva_springs_map.png",
    cardType: "9x12",
    pricing: {
      standard: 499,
      double: 899,
      half: 299,
    },
  },
};

/**
 * Safely resolves town average statistics by slug alias.
 */
export function getTownAverage(slug?: string): TownAverage {
  if (!slug) return townAverages["altamonte-springs"];
  return townAverages[slug] || townAverages["altamonte-springs"];
}
