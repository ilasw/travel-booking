<script setup lang="ts">

import type {Travel} from "~/types/travel";
import TravelListItem from "~/features/search/components/TravelListItem.vue";

const props = defineProps<{
  travels: Travel[]
}>();

const {travels = []} = toRefs(props);

</script>

<template>
  <section v-if="travels.length" class="py-8">
    <ul role="list"
        class="flex flex-col gap-6"
    >
      <li v-for="travel of travels"
          class="last:border-0 border-b border-neutral-200"
          role="listitem"
      >
        <TravelListItem
            :travel="travel"
        />
      </li>
    </ul>
  </section>
  <div v-else>
    <p>No travels found</p>
  </div>
</template>

<style scoped>

</style>