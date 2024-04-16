<script setup lang="ts">
import type {Travel} from "~/types/travel";
import {useTravelItem} from "~/features/search/composables/use-travel-item";
import {useToggle} from "~/features/core/composables/use-toggle";

const props = defineProps<{
  travel: Travel
}>();

const {name, image, price, rating} = reactive(props.travel);
const {excerpt, dates: {start, end, duration}} = useTravelItem(props.travel);
const {state: showDetails, toggle: toggleDetails} = useToggle();

</script>

<template>
  <article
      class="flex flex-col md:flex-row flex-nowrap gap-4 relative transition-all"
      itemtype="https://schema.org/TouristTrip"
      itemscope
  >
    <!-- Thumbnail -->
    <div class="image">
      <!-- todo: insert srcSet -->
      <img :src="image.url"
           :alt="image.alt || name"
           class="md:aspect-square h-40 w-full md:w-auto object-cover object-center"
           width="160"
           height="160"
      />
    </div>

    <div class="content flex-1 py-2 pr-4">
      <div class="headline mb-0.5 flex flex-row justify-between items-center gap-2">
        <!-- title -->
        <h3 class="text-xl min-w-0 md:text-ellipsis flex-1"
            itemprop="name"
        >{{ name }}</h3>

        <!-- rating -->
        <div class="text-neutral-900">
          <span class="text-lg">★ {{ rating.average }}</span>
          <span class="text-xs">/5</span>
        </div>
      </div>

      <!-- Duration  -->
      <div class="text-sm">
        {{ duration }} days
        <span class="text-neutral-500">
          - from <time
            :datetime="start.toISOString()"
            data-testid="departure"
            itemprop="departureTime"
            v-localized-time="start"
        /> to <time :datetime="end.toISOString()"
                    itemprop="arrivalTime"
                    v-localized-time="end"/>
        </span>
      </div>

      <!-- Description  -->
      <div class="text-sm my-4"
           itemprop="description"
      >
        <p class="inline">{{ showDetails ? travel.description : excerpt }}</p>
        <button @click="toggleDetails"
                class="relative z-10 underline hover:no-underline p-2 -m-2 -ml-1.5">
          {{ showDetails ? 'Show less' : 'Show more' }}
        </button>
      </div>

      <!-- Price  -->
      <div class="text-neutral-700"
           itemprop="offers"
           itemscope
           itemtype="https://schema.org/Offer"
      >
        <meta itemprop="priceCurrency" content="EUR"/>
        <span class="text-xs">from €</span>
        <span v-localized-price="price"
              data-testid="price"
              itemprop="price"
              class="font-medium text-lg"
              :content="price"
        >{{ price }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>

</style>