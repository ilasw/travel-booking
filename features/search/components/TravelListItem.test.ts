import {expect, describe, test} from "vitest";
import type {Travel} from "~/types/travel";
import {mountSuspended, renderSuspended} from "@nuxt/test-utils/runtime";
import TravelListItem from "~/features/search/components/TravelListItem.vue";
import {screen} from "@testing-library/dom";
import {vLocalizedPrice} from "~/plugins/localized-price";
import {shallowMount} from "@vue/test-utils";

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

describe("Travel List Item", async () => {

  const component = await renderSuspended(TravelListItem, {
    props: {travel: mockTravelItem},
    global: {
      directives: {
        'localized-price': vLocalizedPrice
      }
    }
  });

  test('should render', () => {
    expect(screen.getByText(mockTravelItem.name)).toBeDefined();
  });

  test('price sould be formatted', async () => {
    expect(screen.getByText('1,000')).toBeDefined();
  });

});