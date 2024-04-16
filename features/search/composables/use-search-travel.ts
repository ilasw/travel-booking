import type {Travel} from "~/types/travel";

export type SearchFiltersSchema = {
  search: string;
  maxPrice: number;
}

export const DEFAULT_FILTERS: SearchFiltersSchema = {
  search: '',
  maxPrice: 0,
}

export const useSearchTravel = async () => {
  const {data: travels} = await useFetch<Travel[]>('/api/travels')
  const filters = ref<SearchFiltersSchema>(DEFAULT_FILTERS);

  const filteredTravels = computed(() => {
    console.log('computed filteredTravels', travels.value)

    if (!travels.value) return [];

    return travels.value.filter((travel) => {
      const isPriceInRange = !filters.value.maxPrice || travel.price <= filters.value.maxPrice;
      const isNameMatch = !filters.value.search || travel.name.toLowerCase().includes(filters.value.search.toLowerCase());
      return isPriceInRange && isNameMatch;
    });
  });

  return {
    filters,
    filteredTravels,
  }
}