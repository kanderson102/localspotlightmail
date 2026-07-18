export interface TownAverage {
  city: string;
  doors: number;
  income: string;
  householdSize: number;
  age: number;
  residencyLength: number;
  homeowner: number;
  pricing: {
    standard: number;
    double: number;
    half: number;
  };
}

const markhamWoodsData: TownAverage = {
  city: "Markham Woods",
  doors: 4000,
  income: "$234,912",
  householdSize: 3.2,
  age: 54,
  residencyLength: 14,
  homeowner: 97,
  pricing: {
    standard: 495,
    double: 895,
    half: 295
  }
};

export const townAverages: Record<string, TownAverage> = {
  "markhamwoods": markhamWoodsData,
  "markham-woods": markhamWoodsData,
  "longwood-lakemary": {
    city: "Longwood - Lake Mary",
    doors: 5000,
    income: "$150,000.00",
    householdSize: 3.3,
    age: 50,
    residencyLength: 12,
    homeowner: 70,
    pricing: {
      standard: 495,
      double: 895,
      half: 295
    }
  },
  "sanford": {
    city: "Sanford",
    doors: 5000,
    income: "$85,000.00",
    householdSize: 3.1,
    age: 41,
    residencyLength: 11,
    homeowner: 50,
    pricing: {
      standard: 495,
      double: 895,
      half: 295
    }
  },
  "altamonte-springs": {
    city: "Altamonte Springs",
    doors: 5000,
    income: "$130,000.00",
    householdSize: 3.1,
    age: 39,
    residencyLength: 8,
    homeowner: 60,
    pricing: {
      standard: 495,
      double: 895,
      half: 295
    }
  }
};
