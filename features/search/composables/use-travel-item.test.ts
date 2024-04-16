import {expect, describe, test} from "vitest";
import {MAX_DESCRIPTION_LENGTH, useTravelItem} from "~/features/search/composables/use-travel-item";
import {mockTravelItem} from "~/features/tests/mocks";

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