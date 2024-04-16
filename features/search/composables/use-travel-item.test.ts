import {expect, describe, test} from "vitest";
import type {Travel} from "~/types/travel";
import {MAX_DESCRIPTION_LENGTH, useTravelItem} from "~/features/search/composables/use-travel-item";

const mockTravelItem: Travel = {
  name: "Travel to the Moon",
  dates: {
    departure: "2022-12-12",
    return: "2022-12-24"
  },
  image: {
    url: "https://example.com/moon.jpg",
    alt: "Moon"
  },
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  price: 1000,
  rating: {
    entries: [5, 4, 3, 2, 1],
    average: 3
  }
}

describe("useTravelItem", async () => {

  const {excerpt, dates} = useTravelItem(mockTravelItem);

  describe('description', () => {
    test('should return a string', () => {
      expect(excerpt).toBeTypeOf('string');
    });

    test('should shorten the description if it is too long', () => {
      expect(excerpt.length).toBeLessThanOrEqual(MAX_DESCRIPTION_LENGTH);
    });
  });

  describe('dates', () => {
    test('should return instances of Date', () => {
      expect(dates.start).toBeInstanceOf(Date);
      expect(dates.end).toBeInstanceOf(Date);
    });

    test('should calculate the duration correctly', () => {
      expect(dates.duration).toBe(12);
    });
  });
});