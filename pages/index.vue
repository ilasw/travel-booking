<script setup lang="ts">
import TravelList from "~/features/search/components/TravelList.vue";
import type {Travel} from "~/types/travel";
import SearchFilters from "~/features/search/components/SearchFilters.vue";
import {useSearchTravel} from "~/features/search/composables/use-search-travel";

const {filteredTravels, filters, onChange} = await useSearchTravel();

</script>

<template>
  <div class="container">
    <SearchFilters
        :filters="filters"
        @form:change="onChange"
    />
    <TravelList :travels="filteredTravels"/>
  </div>
</template>

<style scoped>

</style>