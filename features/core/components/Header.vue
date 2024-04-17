<template>
  <header class="sticky top-0 left-0 bg-white">
    <div class="container">
      <nav class="border-b">
        <ul role="list" class="flex flex-row flex-nowrap items-center gap-4">
          <li role="listitem"
              class="logo flex-1"
          >
            <NuxtLink to="/"
                      class="inline-block py-4"
            >Logo
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="underline">
              Travels
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/booking/" class="underline">
              Booking
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/booking/my" class="underline">
              Order history
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="postcss">
header {
  li {
    a {
      /deep/ &.router-link-active {
        @apply no-underline
      }
    }
  }
}
</style>