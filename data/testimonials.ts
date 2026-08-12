export interface TestimonialItem {
  quote: string;
  name: string;
  business: string;
  rating: number;
}

export const testimonials: TestimonialItem[] = [
  {
    quote: "We saw a 40% increase in inquiries within the first two weeks of the mailing. The postcard literally paid for itself with our first booked job.",
    name: "Sarah M.",
    business: "Local Cleaning Co.",
    rating: 5
  },
  {
    quote: "Best advertising investment we've made. Our neighbors already know us by name now.",
    name: "Mike D.",
    business: "Mike's Landscaping",
    rating: 5
  },
  {
    quote: "Professional ad design, great target audience, and the shared cost model makes it a complete no-brainer for small businesses like ours.",
    name: "Jessica L.",
    business: "JL Interior Design",
    rating: 5
  },
  {
    quote: "We've tried digital ads, door hangers, flyers — nothing gets the response rate and high-ticket customers that this postcard campaign delivers.",
    name: "Tom R.",
    business: "Tom's Plumbing & Heating",
    rating: 5
  },
  {
    quote: "The shared format is genius. We look like we're part of a premium lineup next to other trusted brands, and the price is incredibly reasonable.",
    name: "Angela K.",
    business: "Sunrise Yoga Studio",
    rating: 5
  }
];
