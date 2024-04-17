<script setup lang="ts">
import type {Maybe} from "~/types/utils";
import type {Travel} from "~/types/travel";
import TravelListItem from "~/features/search/components/TravelListItem.vue";
import TravelModal from "~/features/search/components/TravelModal.vue";

type TravelListProps = {
  travels: Travel[]
}

const props = defineProps<TravelListProps>();
const {travels = []} = toRefs(props);

const modal = ref<{ travel: Maybe<Travel>, toggle: (t?: Maybe<Travel>) => void }>({
  travel: null,
  toggle: (value = null) => {
    modal.value.travel = value;
  }
});
</script>

<template>
  <section v-if="travels.length" class="py-8">

    <!-- results list -->
    <ul role="list"
        class="flex flex-col gap-6"
    >
      <li v-for="travel of travels"
          class="last:border-0 border-b border-neutral-200"
          role="listitem"
      >
        <TravelListItem :travel="travel" @manage="modal.toggle($event)"/>
      </li>
    </ul>

    <!-- add new -->
    <div class="my-10 text-center">
      <button class="btn"
              @click="modal.toggle()"
      >Add new +</button>
    </div>

    <!-- modal -->
    <TravelModal
        :travel="modal.travel"
        :toggle="modal.toggle"
    />
  </section>

  <!-- empty view -->
  <div v-else>
    <p>No travels found</p>
  </div>
</template>

<style scoped>
</style>