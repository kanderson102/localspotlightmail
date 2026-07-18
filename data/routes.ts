export interface PostalRoute {
  id: string;
  name: string;
  households: number;
  income: string;
  age: string;
  homeowner: string;
}

export interface PostcardSlot {
  id: string;
  side: "front" | "back";
  type: "standard" | "double" | "half";
  label: string;
  price: number;
  x: number; // percentage left
  y: number; // percentage top
  width: number; // percentage width
  height: number; // percentage height
  status: "sold" | "available";
  businessName?: string | null;
  adImageUrl?: string | null;
  paymentLink?: string | null;
}

export interface CampaignRoute {
  slug: string;
  name: string;
  tagline: string;
  city: string;
  state: string;
  size: number; // e.g. 5000
  totalSlots: number;
  availableCount: number;
  soldCount: number;
  pricing: {
    standard: number;
    double: number;
    half: number;
  };
  routes: PostalRoute[];
  slots: PostcardSlot[];
}

export const campaignRoutes: CampaignRoute[] = [
  {
    slug: "markhamwoods",
    name: "Markham Woods",
    tagline: "Connecting Markham Woods Businesses With Local Families",
    city: "Markham Woods",
    state: "FL",
    size: 5000,
    totalSlots: 16,
    availableCount: 3,
    soldCount: 13,
    pricing: {
      standard: 695,
      double: 1250,
      half: 395
    },
    routes: [
      { id: "32779-R007", name: "Heathrow West", households: 502, income: "$247,085", age: "54", homeowner: "98%" },
      { id: "32779-R008", name: "Markham Woods Road", households: 528, income: "$240,347", age: "58", homeowner: "97%" },
      { id: "32746-C024", name: "Alaqua Lakes", households: 498, income: "$239,633", age: "54", homeowner: "99%" },
      { id: "32746-C003", name: "Magnolia Plantation", households: 366, income: "$222,641", age: "54", homeowner: "99%" },
      { id: "32746-C026", name: "Lake Emma Road", households: 516, income: "$189,547", age: "54", homeowner: "93%" },
      { id: "32779-R011", name: "Sabal Point East", households: 181, income: "$186,764", age: "56", homeowner: "96%" },
      { id: "32779-C019", name: "Sabal Point West", households: 165, income: "$167,999", age: "52", homeowner: "93%" },
      { id: "32779-C005", name: "Wekiva Springs North", households: 694, income: "$124,729", age: "58", homeowner: "89%" },
      { id: "32779-R015", name: "Sweetwater Oaks East", households: 484, income: "$175,000", age: "54", homeowner: "99%" },
      { id: "32746-C029", name: "Sweetwater Oaks West", households: 459, income: "$170,000", age: "52", homeowner: "97%" }
    ],
    slots: [
      // FRONT SIDE
      {
        id: "mw-f1",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 695,
        x: 1.33,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Laser Core Engraving",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1778894654970-Winner.png"
      },
      {
        id: "mw-f2",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 695,
        x: 26.0,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "McCoy Roofing",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1779458111640-McCoy_9X12.png"
      },
      {
        id: "mw-f3",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 695,
        x: 50.67,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Bath Solutions",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781785988118-LP_Fitness_9X12.png"
      },
      {
        id: "mw-f4",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 695,
        x: 75.33,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Veteran Renovations",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781990614869-Veteran_Renovations__1_.png"
      },
      {
        id: "mw-f5",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 695,
        x: 1.33,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "LP Fitness",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781785988118-LP_Fitness_9X12.png"
      },
      {
        id: "mw-f6",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 695,
        x: 26.0,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Spangler Psychiatric",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1780608026815-Spangler_Psychiatric_9X12__1_.png"
      },
      {
        id: "mw-f7",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 695,
        x: 50.67,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Revitalift Medspa",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1780607874063-Cami_Moran_9X12__2_.png"
      },
      {
        id: "mw-f8",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 695,
        x: 75.33,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "available",
        paymentLink: "https://buy.stripe.com/mock-mw-standard-slot"
      },
      // BACK SIDE
      {
        id: "mw-b1",
        side: "back",
        type: "standard",
        label: "Standard Slot",
        price: 695,
        x: 1.33,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Dr. Jacobson Chiropractic",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781785928558-Dr._Jacobson_9X12__2_.png"
      },
      {
        id: "mw-b2",
        side: "back",
        type: "double",
        label: "Double Slot",
        price: 1250,
        x: 26.0,
        y: 1.77,
        width: 48.0,
        height: 42.22,
        status: "sold",
        businessName: "Orlando Pools & Spas",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1779458111640-McCoy_9X12.png"
      },
      {
        id: "mw-b4",
        side: "back",
        type: "standard",
        label: "Standard Slot",
        price: 695,
        x: 75.33,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Apex Landscaping",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781990614869-Veteran_Renovations__1_.png"
      },
      {
        id: "mw-b5",
        side: "back",
        type: "standard",
        label: "Standard Slot",
        price: 695,
        x: 1.33,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Sweetwater Realty",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1780608026815-Spangler_Psychiatric_9X12__1_.png"
      },
      {
        id: "mw-b6",
        side: "back",
        type: "half",
        label: "Half Slot",
        price: 395,
        x: 26.0,
        y: 56.0,
        width: 23.33,
        height: 20.67,
        status: "sold",
        businessName: "Hobby Town",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781987756690-Hobby_Town_2X3.png"
      },
      {
        id: "mw-b7",
        side: "back",
        type: "half",
        label: "Half Slot",
        price: 395,
        x: 26.0,
        y: 77.56,
        width: 23.33,
        height: 20.67,
        status: "sold",
        businessName: "Lifestrokes Swim School",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781988292458-Lifestrokes_2X3.png"
      },
      {
        id: "mw-b8",
        side: "back",
        type: "standard",
        label: "Standard Slot",
        price: 695,
        x: 50.67,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "available",
        paymentLink: "https://buy.stripe.com/mock-mw-standard-slot-2"
      },
      {
        id: "mw-b9",
        side: "back",
        type: "half",
        label: "Half Slot",
        price: 395,
        x: 75.33,
        y: 56.0,
        width: 23.33,
        height: 20.67,
        status: "available",
        paymentLink: "https://buy.stripe.com/mock-mw-half-slot"
      },
      {
        id: "mw-b10",
        side: "back",
        type: "half",
        label: "Half Slot",
        price: 395,
        x: 75.33,
        y: 77.56,
        width: 23.33,
        height: 20.67,
        status: "sold",
        businessName: "Metro Cleaners",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781988292458-Lifestrokes_2X3.png"
      }
    ]
  },
  {
    slug: "longwood-lakemary",
    name: "Longwood - Lake Mary",
    tagline: "Connecting Local Businesses With Central Florida Families",
    city: "Longwood - Lake Mary",
    state: "FL",
    size: 5000,
    totalSlots: 16,
    availableCount: 4,
    soldCount: 12,
    pricing: {
      standard: 495,
      double: 895,
      half: 295
    },
    routes: [
      { id: "32750-C012", name: "Longwood Hills", households: 610, income: "$92,000", age: "45", homeowner: "85%" },
      { id: "32750-C004", name: "Lake Emma Road", households: 580, income: "$98,000", age: "47", homeowner: "88%" },
      { id: "32746-C010", name: "Lake Mary Blvd West", households: 642, income: "$105,000", age: "48", homeowner: "91%" },
      { id: "32746-R003", name: "Magnolia Plantation", households: 498, income: "$115,000", age: "52", homeowner: "95%" },
      { id: "32746-C008", name: "Manderley South", households: 550, income: "$89,000", age: "46", homeowner: "82%" }
    ],
    slots: [
      // FRONT SIDE
      {
        id: "lm-f1",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 1.33,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Suburban Auto Repair",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1778894654970-Winner.png"
      },
      {
        id: "lm-f2",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 26.0,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Lake Mary Dentistry",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1779458111640-McCoy_9X12.png"
      },
      {
        id: "lm-f3",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 50.67,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Happy Tails Veterinary",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781785988118-LP_Fitness_9X12.png"
      },
      {
        id: "lm-f4",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 75.33,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "available",
        paymentLink: "https://buy.stripe.com/mock-lm-standard-slot-1"
      },
      {
        id: "lm-f5",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 1.33,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Elite Martial Arts",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781785988118-LP_Fitness_9X12.png"
      },
      {
        id: "lm-f6",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 26.0,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Apex Plumbing",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1780608026815-Spangler_Psychiatric_9X12__1_.png"
      },
      {
        id: "lm-f7",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 50.67,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Clean Home Co.",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1780607874063-Cami_Moran_9X12__2_.png"
      },
      {
        id: "lm-f8",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 75.33,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "available",
        paymentLink: "https://buy.stripe.com/mock-lm-standard-slot-2"
      },
      // BACK SIDE
      {
        id: "lm-b1",
        side: "back",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 1.33,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "First Class Barber",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781785928558-Dr._Jacobson_9X12__2_.png"
      },
      {
        id: "lm-b2",
        side: "back",
        type: "double",
        label: "Double Slot",
        price: 895,
        x: 26.0,
        y: 1.77,
        width: 48.0,
        height: 42.22,
        status: "sold",
        businessName: "Longwood Pest Defense",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1779458111640-McCoy_9X12.png"
      },
      {
        id: "lm-b4",
        side: "back",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 75.33,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Gourmet Pizza Spot",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781990614869-Veteran_Renovations__1_.png"
      },
      {
        id: "lm-b5",
        side: "back",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 1.33,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Central Florida HVAC",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1780608026815-Spangler_Psychiatric_9X12__1_.png"
      },
      {
        id: "lm-b6",
        side: "back",
        type: "half",
        label: "Half Slot",
        price: 295,
        x: 26.0,
        y: 56.0,
        width: 23.33,
        height: 20.67,
        status: "sold",
        businessName: "Nails & Beyond",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781987756690-Hobby_Town_2X3.png"
      },
      {
        id: "lm-b7",
        side: "back",
        type: "half",
        label: "Half Slot",
        price: 295,
        x: 26.0,
        y: 77.56,
        width: 23.33,
        height: 20.67,
        status: "available",
        paymentLink: "https://buy.stripe.com/mock-lm-half-slot-1"
      },
      {
        id: "lm-b8",
        side: "back",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 50.67,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Sweetwater Florist",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1780607874063-Cami_Moran_9X12__2_.png"
      },
      {
        id: "lm-b9",
        side: "back",
        type: "half",
        label: "Half Slot",
        price: 295,
        x: 75.33,
        y: 56.0,
        width: 23.33,
        height: 20.67,
        status: "available",
        paymentLink: "https://buy.stripe.com/mock-lm-half-slot-2"
      },
      {
        id: "lm-b10",
        side: "back",
        type: "half",
        label: "Half Slot",
        price: 295,
        x: 75.33,
        y: 77.56,
        width: 23.33,
        height: 20.67,
        status: "sold",
        businessName: "Sun City Dry Cleaners",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781988292458-Lifestrokes_2X3.png"
      }
    ]
  },
  {
    slug: "sanford",
    name: "Sanford",
    tagline: "Connecting Sanford Businesses With Local Families",
    city: "Sanford",
    state: "FL",
    size: 5000,
    totalSlots: 16,
    availableCount: 5,
    soldCount: 11,
    pricing: {
      standard: 495,
      double: 895,
      half: 295
    },
    routes: [
      { id: "32771-C002", name: "Historic Sanford East", households: 588, income: "$76,000", age: "41", homeowner: "74%" },
      { id: "32771-C015", name: "Lake Monroe", households: 615, income: "$84,000", age: "44", homeowner: "82%" },
      { id: "32773-C004", name: "Airport Blvd Corridor", households: 520, income: "$72,000", age: "39", homeowner: "68%" },
      { id: "32773-C021", name: "South Sanford Route", households: 592, income: "$88,000", age: "42", homeowner: "79%" }
    ],
    slots: [
      // FRONT SIDE
      {
        id: "sf-f1",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 1.33,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Sanford Brewing Company",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1778894654970-Winner.png"
      },
      {
        id: "sf-f2",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 26.0,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Wops Hops Brewing",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1779458111640-McCoy_9X12.png"
      },
      {
        id: "sf-f3",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 50.67,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "available",
        paymentLink: "https://buy.stripe.com/mock-sf-standard-slot-1"
      },
      {
        id: "sf-f4",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 75.33,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Jeanine Realtor",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781990614869-Veteran_Renovations__1_.png"
      },
      {
        id: "sf-f5",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 1.33,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Lake Monroe Grooming",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781785988118-LP_Fitness_9X12.png"
      },
      {
        id: "sf-f6",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 26.0,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "available",
        paymentLink: "https://buy.stripe.com/mock-sf-standard-slot-2"
      },
      {
        id: "sf-f7",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 50.67,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Hollerbachs Cafe",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1780607874063-Cami_Moran_9X12__2_.png"
      },
      {
        id: "sf-f8",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 75.33,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "available",
        paymentLink: "https://buy.stripe.com/mock-sf-standard-slot-3"
      },
      // BACK SIDE
      {
        id: "sf-b1",
        side: "back",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 1.33,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Celery City Craft",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781785928558-Dr._Jacobson_9X12__2_.png"
      },
      {
        id: "sf-b2",
        side: "back",
        type: "double",
        label: "Double Slot",
        price: 895,
        x: 26.0,
        y: 1.77,
        width: 48.0,
        height: 42.22,
        status: "sold",
        businessName: "Seminole Pest Services",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1779458111640-McCoy_9X12.png"
      },
      {
        id: "sf-b4",
        side: "back",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 75.33,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Gateway Plumbing",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781990614869-Veteran_Renovations__1_.png"
      },
      {
        id: "sf-b5",
        side: "back",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 1.33,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Mayfair Golf Club",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1780608026815-Spangler_Psychiatric_9X12__1_.png"
      },
      {
        id: "sf-b6",
        side: "back",
        type: "half",
        label: "Half Slot",
        price: 295,
        x: 26.0,
        y: 56.0,
        width: 23.33,
        height: 20.67,
        status: "sold",
        businessName: "Clean Carts Rentals",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781987756690-Hobby_Town_2X3.png"
      },
      {
        id: "sf-b7",
        side: "back",
        type: "half",
        label: "Half Slot",
        price: 295,
        x: 26.0,
        y: 77.56,
        width: 23.33,
        height: 20.67,
        status: "available",
        paymentLink: "https://buy.stripe.com/mock-sf-half-slot-1"
      },
      {
        id: "sf-b8",
        side: "back",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 50.67,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Sanford Dry Cleaning",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1780607874063-Cami_Moran_9X12__2_.png"
      },
      {
        id: "sf-b9",
        side: "back",
        type: "half",
        label: "Half Slot",
        price: 295,
        x: 75.33,
        y: 56.0,
        width: 23.33,
        height: 20.67,
        status: "available",
        paymentLink: "https://buy.stripe.com/mock-sf-half-slot-2"
      },
      {
        id: "sf-b10",
        side: "back",
        type: "half",
        label: "Half Slot",
        price: 295,
        x: 75.33,
        y: 77.56,
        width: 23.33,
        height: 20.67,
        status: "sold",
        businessName: "Downtown Barber",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781988292458-Lifestrokes_2X3.png"
      }
    ]
  },
  {
    slug: "altamonte-springs",
    name: "Altamonte Springs",
    tagline: "Connecting Altamonte Springs Businesses With Local Families",
    city: "Altamonte Springs",
    state: "FL",
    size: 5000,
    totalSlots: 16,
    availableCount: 4,
    soldCount: 12,
    pricing: {
      standard: 495,
      double: 895,
      half: 295
    },
    routes: [
      { id: "32701-C008", name: "Cranes Roost Area", households: 630, income: "$81,000", age: "43", homeowner: "75%" },
      { id: "32701-C012", name: "Lake Orienta North", households: 575, income: "$86,000", age: "45", homeowner: "79%" },
      { id: "32714-C002", name: "Spring Valley Route", households: 545, income: "$92,000", age: "48", homeowner: "88%" },
      { id: "32714-C015", name: "West Town Parkway", households: 602, income: "$83,000", age: "42", homeowner: "81%" }
    ],
    slots: [
      // FRONT SIDE
      {
        id: "as-f1",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 1.33,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Altamonte Eye Care",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1778894654970-Winner.png"
      },
      {
        id: "as-f2",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 26.0,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Altamonte Vet Hospital",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1779458111640-McCoy_9X12.png"
      },
      {
        id: "as-f3",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 50.67,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Cranes Roost Cafe",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781785988118-LP_Fitness_9X12.png"
      },
      {
        id: "as-f4",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 75.33,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "available",
        paymentLink: "https://buy.stripe.com/mock-as-standard-slot-1"
      },
      {
        id: "as-f5",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 1.33,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Spring Valley Plumbers",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781785988118-LP_Fitness_9X12.png"
      },
      {
        id: "as-f6",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 26.0,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Lake Orienta Realty",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1780608026815-Spangler_Psychiatric_9X12__1_.png"
      },
      {
        id: "as-f7",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 50.67,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Springs Lawn Design",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1780607874063-Cami_Moran_9X12__2_.png"
      },
      {
        id: "as-f8",
        side: "front",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 75.33,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "available",
        paymentLink: "https://buy.stripe.com/mock-as-standard-slot-2"
      },
      // BACK SIDE
      {
        id: "as-b1",
        side: "back",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 1.33,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Roost Pub & Grill",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781785928558-Dr._Jacobson_9X12__2_.png"
      },
      {
        id: "as-b2",
        side: "back",
        type: "double",
        label: "Double Slot",
        price: 895,
        x: 26.0,
        y: 1.77,
        width: 48.0,
        height: 42.22,
        status: "sold",
        businessName: "Altamonte Roof Pros",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1779458111640-McCoy_9X12.png"
      },
      {
        id: "as-b4",
        side: "back",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 75.33,
        y: 1.77,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Springs Handyman",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781990614869-Veteran_Renovations__1_.png"
      },
      {
        id: "as-b5",
        side: "back",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 1.33,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Altamonte Dental Spa",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1780608026815-Spangler_Psychiatric_9X12__1_.png"
      },
      {
        id: "as-b6",
        side: "back",
        type: "half",
        label: "Half Slot",
        price: 295,
        x: 26.0,
        y: 56.0,
        width: 23.33,
        height: 20.67,
        status: "sold",
        businessName: "Roost Barber Shop",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781987756690-Hobby_Town_2X3.png"
      },
      {
        id: "as-b7",
        side: "back",
        type: "half",
        label: "Half Slot",
        price: 295,
        x: 26.0,
        y: 77.56,
        width: 23.33,
        height: 20.67,
        status: "available",
        paymentLink: "https://buy.stripe.com/mock-as-half-slot-1"
      },
      {
        id: "as-b8",
        side: "back",
        type: "standard",
        label: "Standard Slot",
        price: 495,
        x: 50.67,
        y: 56.0,
        width: 23.33,
        height: 42.22,
        status: "sold",
        businessName: "Springs Locksmith",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1780607874063-Cami_Moran_9X12__2_.png"
      },
      {
        id: "as-b9",
        side: "back",
        type: "half",
        label: "Half Slot",
        price: 295,
        x: 75.33,
        y: 56.0,
        width: 23.33,
        height: 20.67,
        status: "available",
        paymentLink: "https://buy.stripe.com/mock-as-half-slot-2"
      },
      {
        id: "as-b10",
        side: "back",
        type: "half",
        label: "Half Slot",
        price: 295,
        x: 75.33,
        y: 77.56,
        width: 23.33,
        height: 20.67,
        status: "sold",
        businessName: "Altamonte Nails",
        adImageUrl: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781988292458-Lifestrokes_2X3.png"
      }
    ]
  }
];
