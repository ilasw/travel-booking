<script setup lang="ts">
import type {Travel} from "~/types/travel";
import type {Maybe} from "~/types/utils";
import {useTravelManage} from "~/features/search/composables/use-travel-manage";
import InputText from "~/features/core/components/InputText.vue";
import InputNumber from "~/features/core/components/InputNumber.vue";

const props = withDefaults(defineProps<{
  toggle: () => void,
  travel: Maybe<Travel>
}>(), {
  travel: null
});

const {toggle, travel} = toRefs(props);
const {updateTravel, deleteTravel} = useTravelManage({travel});

</script>

<template>
  <div :class="['backdrop', {open: !!travel?.name}]"
       @click="toggle"/>
  <div role="dialog"
       :class="['modal', {open: !!travel?.name}]">
    <template v-if="!!travel?.name">
      <header>
        <h2 class="text-lg">Manage <strong>{{ travel.name }}</strong></h2>
        <button autofocus class="absolute z-10 top-0 right-0 p-4 focus:outline-1" @click="toggle">⨉</button>
      </header>

      <section class="py-5">
        <FormKit type="form"
                 v-model="travel"
                 :actions="false"
                 @submit="updateTravel(travel)"
        >
          <div class="flex flex-col gap-4">
            <InputText type="text"
                       name="name"
                       label="Name"/>
            <InputNumber type="text"
                         name="price"
                         label="Price"
                         step="100"
                         cast="number"/>
            <InputText type="textarea"
                       name="description"
                       label="Description"/>
          </div>
        </FormKit>
      </section>

      <footer class="flex justify-end gap-4">
        <button @click="deleteTravel()">Delete</button>
        <button class="btn"
                @click="updateTravel(travel)"
        >Save changes</button>
      </footer>
    </template>
  </div>
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