<script setup lang="ts">
import type {SearchFiltersSchema} from "~/features/search/composables/use-search-travel";
import InputText from "~/features/core/components/InputText.vue";
import InputNumber from "~/features/core/components/InputNumber.vue";

const props = defineProps<{
  filters: SearchFiltersSchema,
}>();

const {filters} = props;
const model = ref<SearchFiltersSchema>(filters);
const formId = useId()

const emit = defineEmits({
  submit: (filters: SearchFiltersSchema) => {
    console.log('filters');
    return true;
  },
  reset: () => true,
});

</script>

<template>
  <div class="py-4">
    <FormKit type="form"
             v-model="model"
             :id="formId"
             :actions="false"
    >
      <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2">
        <InputText
            type="text"
            name="search"
            label="Travel name"
            placeholder="Search by travel name"
            autocomplete="off"
        />
        <InputNumber
            type="number"
            name="maxPrice"
            label="Max price"
            placeholder="Price"
            autocomplete="off"
            min="0"
            step="1"
            cast="number"
        />
      </div>
    </FormKit>
  </div>
</template>

<style scoped>

</style>