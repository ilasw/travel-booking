<script setup lang="ts">
import TravelList from "~/features/search/components/TravelList.vue";
import type {Travel} from "~/types/travel";

const mockTravel: Travel = {
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
;

const travels = ref<Travel[]>([mockTravel, mockTravel, mockTravel]);
</script>

<template>
  <div class="container">
    <TravelList :travels="travels"/>
  </div>
</template>

<style scoped>

</style>