import type {Travel} from "~/types/travel";

export const mockTravelItem: Travel = {
  id: 1,
  slug: 'travel-to-the-moon',
  name: "Travel to the Moon",
  dates: {
    departure: "2022-12-12",
    return: "2022-12-24"
  },
  image: {
    url: "https://placehold.co/400x400",
    alt: "Moon"
  },
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  price: 1000,
  rating: {
    entries: [5, 4, 3, 2, 1],
    average: 3
  }
}
