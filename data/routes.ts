export interface PostcardSlot {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  type: "standard" | "double" | "half";
  label: string;
  soldFront: boolean;
  soldBack: boolean;
  bizFront: string | null;
  bizBack: string | null;
  adImageUrlFront?: string | null;
  adImageUrlBack?: string | null;
}

export interface CampaignRoute {
  slug: string;
  name: string;
  tagline: string;
  city: string;
  state: string;
  size: number;
  totalSlots: number;
  cardType: "9x12" | "8.5x11" | "6x11";
  pricing: {
    standard: number;
    double: number;
    half: number;
  };
  slots: PostcardSlot[];
}

const baseSlotTemplate: PostcardSlot[] = [
  { id: "s1", x: 1.33, y: 1.77, w: 23.33, h: 42.22, type: "standard", label: "Standard Slot", soldFront: false, soldBack: false, bizFront: null, bizBack: null },
  { id: "s2", x: 26.0, y: 1.77, w: 23.33, h: 42.22, type: "standard", label: "Standard Slot", soldFront: false, soldBack: false, bizFront: null, bizBack: null },
  { id: "s3", x: 50.66, y: 1.77, w: 23.33, h: 42.22, type: "standard", label: "Standard Slot", soldFront: false, soldBack: false, bizFront: null, bizBack: null },
  { id: "s4", x: 75.33, y: 1.77, w: 23.33, h: 42.22, type: "standard", label: "Standard Slot", soldFront: false, soldBack: false, bizFront: null, bizBack: null },
  { id: "s5", x: 1.33, y: 56.0, w: 48.0, h: 42.22, type: "double", label: "Double Slot", soldFront: false, soldBack: false, bizFront: null, bizBack: null },
  { id: "s6", x: 50.66, y: 56.0, w: 23.33, h: 42.22, type: "standard", label: "Standard Slot", soldFront: false, soldBack: false, bizFront: null, bizBack: null },
  { id: "s7", x: 75.33, y: 56.0, w: 23.33, h: 20.11, type: "half", label: "Half Slot", soldFront: false, soldBack: false, bizFront: null, bizBack: null },
  { id: "s8", x: 75.33, y: 78.11, w: 23.33, h: 20.11, type: "half", label: "Half Slot", soldFront: false, soldBack: false, bizFront: null, bizBack: null },
];

const community6x11SlotTemplate: PostcardSlot[] = [
  { id: "s1", x: 1.33, y: 1.0, w: 23.33, h: 43.5, type: "standard", label: "Standard Slot", soldFront: false, soldBack: false, bizFront: null, bizBack: null },
  { id: "s2", x: 26.0, y: 1.0, w: 23.33, h: 43.5, type: "standard", label: "Standard Slot", soldFront: false, soldBack: false, bizFront: null, bizBack: null },
  { id: "s3", x: 50.66, y: 1.0, w: 23.33, h: 43.5, type: "standard", label: "Standard Slot", soldFront: false, soldBack: false, bizFront: null, bizBack: null },
  { id: "s4", x: 75.33, y: 1.0, w: 23.33, h: 43.5, type: "standard", label: "Standard Slot", soldFront: false, soldBack: false, bizFront: null, bizBack: null },
  { id: "s5", x: 1.33, y: 55.5, w: 48.0, h: 43.5, type: "double", label: "Double Slot", soldFront: false, soldBack: false, bizFront: null, bizBack: null },
  { id: "s6", x: 50.66, y: 55.5, w: 23.33, h: 43.5, type: "standard", label: "Standard Slot", soldFront: false, soldBack: false, bizFront: null, bizBack: null },
  { id: "s7", x: 75.33, y: 55.5, w: 23.33, h: 43.5, type: "standard", label: "Standard Slot", soldFront: false, soldBack: false, bizFront: null, bizBack: null },
];

function createTownSlots(template: PostcardSlot[], customizations: Partial<PostcardSlot>[]): PostcardSlot[] {
  return template.map((slot) => {
    const custom = customizations.find((c) => c.id === slot.id);
    return custom ? { ...slot, ...custom } : { ...slot };
  });
}

export const campaignRoutes: CampaignRoute[] = [
  {
    slug: "altamonte-springs",
    name: "Altamonte Springs",
    tagline: "Reaching Premium Altamonte & Cranes Roost Neighborhoods",
    city: "Altamonte Springs",
    state: "FL",
    size: 5000,
    totalSlots: 16,
    cardType: "9x12",
    pricing: { standard: 479, double: 859, half: 289 },
    slots: createTownSlots(baseSlotTemplate, [])
  },
  {
    slug: "longwood-lakemary",
    name: "Longwood - Lake Mary",
    tagline: "Connecting Local Businesses With Central Florida Families",
    city: "Longwood - Lake Mary",
    state: "FL",
    size: 5000,
    totalSlots: 16,
    cardType: "9x12",
    pricing: { standard: 469, double: 839, half: 279 },
    slots: createTownSlots(baseSlotTemplate, [])
  },
  {
    slug: "markhamwoods",
    name: "Markham Woods",
    tagline: "Connecting Markham Woods Businesses With Local Families",
    city: "Markham Woods",
    state: "FL",
    size: 5000,
    totalSlots: 16,
    cardType: "9x12",
    pricing: { standard: 499, double: 899, half: 299 },
    slots: createTownSlots(baseSlotTemplate, [])
  },
  {
    slug: "sanford",
    name: "Sanford",
    tagline: "Connecting Historic Sanford Commerce & Local Neighborhoods",
    city: "Sanford",
    state: "FL",
    size: 2500,
    totalSlots: 16,
    cardType: "6x11",
    pricing: { standard: 249, double: 449, half: 0 },
    slots: createTownSlots(community6x11SlotTemplate, [])
  },
  {
    slug: "wekivasprings",
    name: "Wekiva Springs",
    tagline: "Reaching Premium Wekiva Springs & Sweetwater Golf Communities",
    city: "Wekiva Springs",
    state: "FL",
    size: 5000,
    totalSlots: 16,
    cardType: "9x12",
    pricing: { standard: 489, double: 899, half: 289 },
    slots: createTownSlots(baseSlotTemplate, [])
  }
];

export function getCampaignRoute(slug?: string): CampaignRoute {
  if (!slug) return campaignRoutes[0];
  const norm = slug === "markham-woods" ? "markhamwoods" : slug === "wekiva-springs" ? "wekivasprings" : slug;
  return campaignRoutes.find((c) => c.slug === norm) || campaignRoutes[0];
}
