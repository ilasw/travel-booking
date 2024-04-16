<script setup lang="ts">

</script>

<template>
  <header class="sticky top-0 left-0 bg-white">
    <div class="container">
      <nav class="border-b">
        <ul role="list" class="flex flex-row flex-nowrap items-center">
          <li role="listitem"
              class="logo flex-1"
          >
            <NuxtLink to="/"
                      class="inline-block py-4"
            >Logo
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/booking/" class="underline">
              Booking
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="postcss">

</style>