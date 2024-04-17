<script setup lang="ts">
import type {SearchFiltersSchema} from "~/features/search/composables/use-search-travel";
import Input from "~/features/core/components/Input.vue";
import InputNumber from "~/features/core/components/InputNumber.vue";

const props = defineProps<{
  filters: SearchFiltersSchema,
}>();

const {filters} = toRefs(props);
</script>

<template>
  <div class="py-4">
    <FormKit type="form"
             :value="filters"
             :delay="100"
             :actions="false"
             @input="$emit('form:change', $event)"
    >
      <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2">
        <Input
            type="text"
            name="search"
            label="Travel name"
            placeholder="Search by travel name"
            autocomplete="off"
            cast="string"
        />
        <InputNumber
            type="number"
            name="maxPrice"
            label="Max price"
            placeholder="Price"
            autocomplete="off"
            min="0"
            step="100"
            cast="number"
        />
      </div>
    </FormKit>
  </div>
</template>

<style scoped>

</style>