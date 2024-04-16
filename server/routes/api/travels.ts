import {mockTravelItem} from "~/features/tests/mocks";

const fakeTravelNames = [
  "Travel to the Moon",
  "Travel to Mars",
  "Travel to Venus",
  "Travel to Jupiter",
];

export default defineEventHandler(() => {
  return Array.from({length: 4}, (_, index) => {
    const name = fakeTravelNames[index % fakeTravelNames.length];
    const slug = name.toLowerCase().replace(/\s/g, '-');
    return ({
      ...mockTravelItem,
      id: index,
      name,
      slug
    })
  });
});
