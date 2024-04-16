import {describe, test, expect} from "vitest";
import type {Travel} from "~/types/travel";
import {mockTravelItem} from "~/features/tests/mocks";
import {DEFAULT_FILTERS, useSearchTravel} from "~/features/search/composables/use-search-travel";

const mockTravels: Travel[] = [mockTravelItem, mockTravelItem, mockTravelItem]

describe("useSearchTravel", () => {

  const {filters, filteredTravels} = useSearchTravel(mockTravels);

  test("should return default filters", () => {
    expect(filters.value).toEqual(DEFAULT_FILTERS);
  });

  test("should return all travels when no filters are applied", () => {
    expect(filteredTravels.value.length).toEqual(mockTravels.length);
  })

  test("should filter travels by name", () => {
    filters.value.search = 'moon';
    expect(filteredTravels.value.length).toEqual(mockTravels.length);
  })

  test("should filter travels by price", () => {
    filters.value.maxPrice = 500;
    expect(filteredTravels.value.length).toEqual(0);
  })

  test("should filter travels by name and price", () => {
    filters.value.search = 'moon';
    filters.value.maxPrice = 500;
    expect(filteredTravels.value.length).toEqual(0);
  })

  test("should filter travels by name and price", () => {
    filters.value.search = 'moon';
    filters.value.maxPrice = 1500;
    expect(filteredTravels.value.length).toEqual(mockTravels.length);
  })
})