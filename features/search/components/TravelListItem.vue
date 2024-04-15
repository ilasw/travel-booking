<script setup lang="ts">
import type {Travel} from "~/types/travel";
import {useTravelItem} from "~/features/search/composables/use-travel-item";

const props = defineProps<{
  travel: Travel
}>();

const {name, image, price, rating} = toRefs(props.travel);
const {excerpt, duration} = useTravelItem(props.travel);
</script>

<template>
  <article>
    <div class="image">
      <img :src="image.url"
           :alt="image.alt || name"/>
    </div>
    <div class="content">
      <div>{{ rating }}</div>
      <h3 class="text-lg">{{ name }}</h3>
      <p class="text-sm">{{ excerpt }}</p>
      <p>{{ price }}</p>
    </div>
  </article>
</template>

<style scoped>

</style>