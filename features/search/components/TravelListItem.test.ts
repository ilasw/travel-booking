import type {Travel} from "~/types/travel";
import {expect, describe, test} from "vitest";
import {renderSuspended} from "@nuxt/test-utils/runtime";
import TravelListItem from "~/features/search/components/TravelListItem.vue";
import {vLocalizedPrice} from "~/plugins/localized-price";
import {vLocalizedTime} from "~/plugins/localized-time";

const mockTravelItem: Travel = {
  id: 1,
  slug: "travel-to-the-moon",
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
        'localized-price': vLocalizedPrice,
        'localized-time': vLocalizedTime
      }
    }
  });

  test('should render', () => {
    expect(component.findByText(mockTravelItem.name)).toBeDefined();
  });

  test('price sould be formatted', async () => {
    const componentPrice = component.getByTestId('price');
    // Check if the price contains a comma or a dot
    expect(componentPrice.textContent).toMatch(/(\d{1}[\.,])+\d{3}/);
  });

  test('departure date should be formatted', async () => {
    const componentDate = component.getByTestId('departure');
    // date to be formatted as "MMM DD"
    expect(componentDate.innerHTML).toMatch(/[a-zA-Z]{3} \d{1,2}/);
  });

});