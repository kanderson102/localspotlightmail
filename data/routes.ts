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

function createTownSlots(customizations: Partial<PostcardSlot>[]): PostcardSlot[] {
  return baseSlotTemplate.map((slot) => {
    const custom = customizations.find((c) => c.id === slot.id);
    return custom ? { ...slot, ...custom } : { ...slot };
  });
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
    pricing: { standard: 595, double: 1095, half: 395 },
    slots: createTownSlots([
      {
        id: "s2",
        soldFront: true,
        bizFront: "McCoy Roofing",
        adImageUrlFront: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1779458111640-McCoy_9X12.png"
      },
      {
        id: "s5",
        soldFront: true,
        bizFront: "Laser Core Engraving",
        adImageUrlFront: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1778894654970-Winner.png"
      },
      {
        id: "s6",
        soldBack: true,
        bizBack: "Revitalift Medspa",
        adImageUrlBack: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1780607874063-Cami_Moran_9X12__2_.png"
      },
      {
        id: "s8",
        soldBack: true,
        bizBack: "Veteran Renovations",
        adImageUrlBack: "https://rtecuplwxeijdkvfllcq.supabase.co/storage/v1/object/public/gallery/slot-1781990614869-Veteran_Renovations__1_.png"
      }
    ])
  },
  {
    slug: "longwood-lakemary",
    name: "Longwood - Lake Mary",
    tagline: "Connecting Local Businesses With Central Florida Families",
    city: "Longwood - Lake Mary",
    state: "FL",
    size: 5000,
    totalSlots: 16,
    pricing: { standard: 495, double: 895, half: 295 },
    slots: createTownSlots([
      { id: "s1", soldFront: true, bizFront: "Lake Mary Dentistry" },
      { id: "s5", soldFront: true, bizFront: "Suburban Auto Repair" },
      { id: "s6", soldBack: true, bizBack: "Happy Tails Veterinary" },
      { id: "s8", soldBack: true, bizBack: "Apex Plumbing" }
    ])
  },
  {
    slug: "sanford",
    name: "Sanford",
    tagline: "Uniting Historic Sanford Commerce & High-Value Homeowners",
    city: "Sanford",
    state: "FL",
    size: 5000,
    totalSlots: 16,
    pricing: { standard: 495, double: 895, half: 295 },
    slots: createTownSlots([
      { id: "s1", soldFront: true, bizFront: "Sanford Brewing Company" },
      { id: "s5", soldFront: true, bizFront: "Hollerbachs German Cafe" },
      { id: "s6", soldBack: true, bizBack: "Celery City Craft" },
      { id: "s8", soldBack: true, bizBack: "Gateway Plumbing" }
    ])
  },
  {
    slug: "altamonte-springs",
    name: "Altamonte Springs",
    tagline: "Reaching Premium Altamonte & Cranes Roost Neighborhoods",
    city: "Altamonte Springs",
    state: "FL",
    size: 5000,
    totalSlots: 16,
    pricing: { standard: 495, double: 895, half: 295 },
    slots: createTownSlots([
      { id: "s1", soldFront: true, bizFront: "Altamonte Eye Care" },
      { id: "s5", soldFront: true, bizFront: "Roost Pub & Grill" },
      { id: "s6", soldBack: true, bizBack: "Spring Valley Plumbers" },
      { id: "s8", soldBack: true, bizBack: "Altamonte Roof Pros" }
    ])
  }
];

// Alias for markham-woods
export function getCampaignRoute(slug?: string): CampaignRoute {
  const norm = slug === "markham-woods" ? "markhamwoods" : slug;
  return campaignRoutes.find((c) => c.slug === norm) || campaignRoutes[0];
}
