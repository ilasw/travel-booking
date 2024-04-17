<script setup lang="ts">
import type {Maybe} from "~/types/utils";
import type {Travel} from "~/types/travel";
import TravelListItem from "~/features/search/components/TravelListItem.vue";
import TravelModal, {type TravelModalProps} from "~/features/search/components/TravelModal.vue";

type TravelListProps = {
  travels: Travel[]
}

const props = defineProps<TravelListProps>();
const {travels = []} = toRefs(props);

const modal = ref<TravelModalProps>({
  travel: null,
  isOpen: false,
  toggle: (force) => {
    modal.value.isOpen = force ?? !modal.value.isOpen;
  }
});

const openModaWithTravel = (travel: Maybe<Travel>) => {
  modal.value.travel = travel;
  modal.value.toggle(true);
}
</script>

<template>
  <section v-if="travels.length" class="py-8">
    <!-- results list -->
    <ul role="list"
        class="flex flex-col gap-6"
    >
      <li v-for="travel of travels"
          :key="travel.id"
          class="last:border-0 border-b border-neutral-200"
          role="listitem"
      >
        <TravelListItem :travel="travel" @manage="openModaWithTravel($event)"/>
      </li>
    </ul>

    <!-- modal -->
    <TravelModal
        :is-open="modal.isOpen"
        :toggle="modal.toggle"
        :travel="modal.travel"
    />
  </section>

  <!-- empty view -->
  <div v-else>
    <p>No travels found</p>
  </div>
</template>

<style scoped>
</style>