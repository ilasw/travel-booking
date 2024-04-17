import {describe, test, expect, vi, afterEach} from "vitest";
import {DEFAULT_FILTERS, useSearchTravel} from "~/features/search/composables/use-search-travel";
import {mockNuxtImport} from "@nuxt/test-utils/runtime";

const {mockFetch} = vi.hoisted(() => ({
  mockFetch: vi.fn()
}));

mockNuxtImport('useFetch', () => mockFetch);

afterEach(() => {
  mockFetch.mockReset();
})

describe("useSearchTravel", async () => {

  mockFetch.mockReturnValue({
    data: ref(Array.from({length: 4}, () => ({
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
        ))
    )
  })

  const {
    filters,
    filteredTravels,
    travels
  } = await useSearchTravel();

  test("should return default filters", () => {
    expect(filters.value).toEqual(DEFAULT_FILTERS);
  });

  test("should return all travels when no filters are applied", () => {
    expect(filteredTravels.value?.length).toEqual(travels.value?.length);
  })

  test("should filter travels by name", () => {
    filters.value.search = 'moon';
    expect(filteredTravels.value.length).toEqual(4);
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
    expect(filteredTravels.value.length).toEqual(4);
  })
})