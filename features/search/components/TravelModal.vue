<script setup lang="ts">
import type {Travel} from "~/types/travel";
import type {Maybe} from "~/types/utils";
import {useTravelManage} from "~/features/search/composables/use-travel-manage";
import Input from "~/features/core/components/Input.vue";
import InputNumber from "~/features/core/components/InputNumber.vue";
import Modal from "~/features/core/components/Modal.vue";

export type TravelModalProps = {
  toggle: (force?: boolean) => void,
  travel: Maybe<Travel>,
  isOpen: boolean
}

const props = withDefaults(defineProps<TravelModalProps>(), {
  travel: null,
  isOpen: false
});

const {toggle, isOpen} = toRefs(props);
const travel = toRef(props, 'travel');
const {updateTravel, deleteTravel} = useTravelManage({travel});
</script>

<template>
  <Modal :is-open="!!isOpen" :toggle="toggle">
    <template #header>
      <h2 class="text-lg">Edit <strong>{{ travel?.name }}</strong></h2>
    </template>

    <template #default v-if="travel">
      <FormKit type="form"
               :actions="false"
               @submit="updateTravel(travel)"
      >
        <div class="flex flex-col gap-4">
          <Input type="text"
                     v-model="travel.name"
                     name="name"
                     label="Name"/>
          <InputNumber v-model="travel.price"
                       name="price"
                       label="Price"
                       step="100"
                       cast="number"/>
          <Input type="textarea"
                     v-model="travel.description"
                     name="description"
                     label="Description"/>
        </div>
      </FormKit>
    </template>

    <template #footer>
      <button @click="deleteTravel()">Delete</button>
      <button class="btn" @click="updateTravel(travel!)">Save changes</button>
    </template>
  </Modal>
</template>

<style lang="postcss" scoped>
.modal {
  @apply opacity-0 pointer-events-none;
  @apply py-4 px-8 bg-white shadow-lg rounded-lg max-w-full;
  @apply z-50 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2;
  width: clamp(20rem, 80%, 40rem);
}

.backdrop {
  @apply fixed inset-0 bg-black bg-opacity-50 z-40;
  @apply opacity-0 pointer-events-none;
}

.open {
  @apply opacity-100 pointer-events-auto;
}
</style>