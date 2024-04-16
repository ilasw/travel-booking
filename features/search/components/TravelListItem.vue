<script setup lang="ts">
import type {Travel} from "~/types/travel";
import {useTravelItem} from "~/features/search/composables/use-travel-item";

const props = defineProps<{
  travel: Travel
}>();

const {name, image, price, rating} = toRefs(props.travel);
const {excerpt, dates: {start, end, duration}} = useTravelItem(props.travel);
</script>

<template>
  <article
      class="flex flex-row flex-nowrap gap-4"
      itemtype="https://schema.org/TouristTrip"
      itemscope
  >
    <div class="image">
      <img :src="image.url"
           :alt="image.alt || name"
           class="aspect-square"
           width="150"
           height="150"
      />
    </div>
    <div class="content">
      <div class="headline mb-0.5 md:flex flex-row justify-between items-center gap-2">
        <h3 class="text-xl min-w-0 text-ellipsis flex-1"
            itemprop="name"
        >{{ name }}</h3>
        <div>
          <span class="text-lg">{{ rating.average }}</span>
          <span class="text-xs">/5</span>
        </div>
      </div>

      <!-- Duration  -->
      <p class="text-sm">
        {{ duration }} days
        <span class="text-neutral-500">
          - from <time
            :datetime="start.toISOString()"
            itemprop="departureTime"
            v-localized-time="start"
        /> to <time :datetime="end.toISOString()"
                    itemprop="arrivalTime"
                    v-localized-time="end"/>
        </span>
      </p>

      <!-- Description  -->
      <div class="text-sm"
           itemprop="description"
      >{{ excerpt }}
      </div>

      <!-- Price  -->
      <div class="text-neutral-700"
           itemprop="offers"
           itemscope
           itemtype="https://schema.org/Offer"
      >
        <meta itemprop="priceCurrency" content="EUR"/>
        <span class="text-xs">€</span>
        <span v-localized-price="price"
              itemprop="price"
              :content="price"
        />
      </div>
    </div>
  </article>
</template>

<style scoped>

</style>