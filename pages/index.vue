<script setup lang="ts">
import TravelList from "~/features/search/components/TravelList.vue";
import type {Travel} from "~/types/travel";
import SearchFilters from "~/features/search/components/SearchFilters.vue";
import {useSearchTravel} from "~/features/search/composables/use-search-travel";
import TravelAddNew from "~/features/search/components/TravelAddNew.vue";

const {filteredTravels, filters, onChange} = await useSearchTravel();

</script>

<template>
  <div class="container">
    <h1 class="text-xl font-bold mt-10">Travel search</h1>

    <SearchFilters
        :filters="filters"
        @form:change="onChange"
    />
    <TravelList :travels="filteredTravels"/>
    <TravelAddNew/>
  </div>
</template>

<style scoped>

</style>