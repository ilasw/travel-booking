<script setup lang="ts">
import Modal from '~/features/core/components/Modal.vue';
import {useToggle} from "~/features/core/composables/use-toggle";
import type {Travel} from "~/types/travel";
import Input from "~/features/core/components/Input.vue";
import InputNumber from "~/features/core/components/InputNumber.vue";
import {useTravelManage} from "~/features/search/composables/use-travel-manage";
import InputDate from "~/features/core/components/InputDate.vue";
import {mockTravelItem} from "~/features/tests/mocks";

const modal = useToggle(false);
const id = useId();

const {createTravel} = useTravelManage();
const travel = ref<Travel>({
  ...mockTravelItem,
  name: '',
  description: '',
  dates: {
    departure: '',
    return: ''
  },
  price: 0,
});

</script>

<template>

  <!-- add new -->
  <div class="my-10 text-center">
    <button class="btn"
            @click="modal.toggle()"
    >Add new +</button>
  </div>

  <FormKit type="form"
           :actions="false"
           :id="id"
           @submit="createTravel(travel)"
  >
    <Modal
        :is-open="modal.state.value"
        :toggle="modal.toggle"
    >
      <template #header>
        <h2 class="text-2xl font-bold">Add new travel</h2>
      </template>

      <div class="flex flex-col gap-4">
        <Input name="name"
                   label="Name"
                   v-model="travel.name"
                   :validation="[['required']]"
        />
        <Input type="textarea"
                   label="Description"
                   name="description"
                   v-model="travel.description"
                   :validation="[['required']]"
        />
        <div class="flex flex-row gap-4">
          <InputDate label="Departure"
                     name="dates.departure"
                     v-model="travel.dates.departure"
                     :validation="[['required']]"
          />
          <InputDate label="Return"
                     name="dates.return"
                     v-model="travel.dates.return"
                     :validation="[['required']]"
          />
        </div>
        <InputNumber name="price"
                     label="Price"
                     step="100"
                     min="100"
                     v-model="travel.price"
                     :validation="[['required']]"
        />
      </div>

      <template #footer>
        <button @click="modal.toggle()"
        >Cancel</button>
        <button class="btn"
                type="submit"
        >Save</button>
      </template>
    </Modal>
  </FormKit>

</template>

<style scoped>

</style>