<template>
  <div class="flex flex-col min-h-screen">
    <Header/>
    <main class="flex-1">
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
import Header from '~/features/core/components/Header.vue'
import Footer from '~/features/core/components/Footer.vue'
</script>