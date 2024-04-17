<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean,
  toggle: () => void
}>();

const {isOpen, toggle} = toRefs(props);
const slots = defineSlots();
console.log(slots);
</script>

<template>
  <div :class="['backdrop', {open: !!isOpen}]"
       @click="toggle()"/>
  <div role="dialog"
       :class="['modal', {open: !!isOpen}]">
    <header>
      <slot name="header">Modal</slot>
      <button autofocus
              class="absolute z-10 top-0 right-0 p-4 focus:outline-1"
              @click="toggle()"
      >⨉</button>
    </header>

    <section class="py-5">
      <slot/>
    </section>

    <footer class="flex justify-end gap-4">
      <slot name="footer">
        <button @click="toggle()">Close</button>
      </slot>
    </footer>
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