<script setup lang="ts">

import {useBooking} from "~/features/booking/composables/use-booking";

const {myBookings} = await useBooking();

console.log(myBookings);
</script>

<template>
  <div class="container">
    <h1 class="text-xl font-bold mt-10">Order history</h1>
    <div class="my-10">
      <table class="w-full"
             v-if="myBookings.length > 0"
      >
        <thead class="text-left">
        <tr>
          <th>Travel</th>
          <th>Customer</th>
          <th>Payment</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="booking of myBookings">
          <td>{{ booking.travel }}</td>
          <td>{{ booking.customer.name }}</td>
          <td>{{ booking.payment.type }}</td>
        </tr>
        </tbody>
      </table>
      <div v-else>
        <p>No bookings found,
          <NuxtLink class="underline" to="/booking/">Create new ↗</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>