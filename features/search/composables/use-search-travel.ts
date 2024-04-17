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
  const filters = ref<SearchFiltersSchema>({...DEFAULT_FILTERS});

  const filteredTravels = computed(() => {
    if (!travels.value) return [];

    return travels.value.filter((travel) => {
      const maxPrice = +filters.value.maxPrice;
      const isPriceInRange = !maxPrice || travel.price <= maxPrice;

      const query = filters.value.search;
      const isNameMatch = !query || travel.name.toLowerCase().includes(query);

      return isPriceInRange && isNameMatch;
    });
  });

  const onChange = (changes: Partial<SearchFiltersSchema>) => {
    filters.value = {...filters.value, ...changes};
  }

  return {
    filters,
    filteredTravels,
    travels,
    onChange
  }
}