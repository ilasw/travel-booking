<script setup lang="ts">

import {useSearchTravel} from "~/features/search/composables/use-search-travel";
import Input from "~/features/core/components/Input.vue";
import InputNumber from "~/features/core/components/InputNumber.vue";
import {useBooking} from "~/features/booking/composables/use-booking";

const {travels} = await useSearchTravel()
const id = useId();

const {travel, customer, payment, createBooking} = await useBooking();

</script>

<template>
  <div class="container">
    <h1 class="text-xl font-bold mt-10">Book your travel</h1>

    <FormKit type="form"
             @submit="createBooking()"
             :actions="false"
    >
      <FormKit type="multi-step"
               tab-style="progress"
               :allow-incomplete="false"
      >
        <!-- Search travel -->
        <FormKit type="step" name="travelSearch">
          <Input type="search"
                 label="Select a travel"
                 placeholder="Search for a travel..."
                 autocomplete="off"
                 required
                 v-model="travel"
                 :list="`list-${id}`"
                 :validation="[['required', 'Please select a travel']]"
          />
          <datalist :id="`list-${id}`">
            <template v-for="travel of travels">
              <option :value="travel.name">{{ travel.name }} - {{ travel.dates.departure }}</option>
            </template>
          </datalist>
        </FormKit>

        <FormKit type="step" name="customerInfo">

          <!-- Customer information -->
          <div class="flex flex-col gap-4">
            <Input type="text"
                   label="Name"
                   v-model="customer.name"
                   :validation="[['required', 'Please enter your name']]"
            />
            <Input type="email"
                   label="Email"
                   v-model="customer.email"
                   :validation="[['required', 'Please enter your email'], ['email', 'Please enter a valid email']]"
            />
            <Input type="tel"
                   label="Phone number"
                   v-model="customer.phoneNumber"
                   :validation="[['required', 'Please enter your phone number']]"
            />
            <InputNumber
                label="Age"
                v-model="customer.age"
                cast="number"
                min="18"
                step="1"
                :validation="[['required', 'Please enter your age']]"
            />
            <Input type="select"
                   label="Gender"
                   name="gender"
                   v-model="customer.gender"
                   placeholder="Select your gender"
                   :options="['','Male', 'Female', 'Other']"
                   :validation="[['required', 'Please select your']]"
            />
          </div>
        </FormKit>

        <!-- Payment -->
        <FormKit type="step" name="paymentType">
          <div class="flex flex-col gap-4">
            <Input type="select"
                   label="Payment type"
                   v-model="payment.type"
                   :options="['','Credit transfer', 'Paypal', 'Revolut']"
                   :validation="[['required', 'Please select a payment type']]"
            />
            <Input type="textarea"
                   label="Notes"
                   v-model="payment.notes"
            />
          </div>

          <template #stepNext>
            <FormKit type="submit" input-class="bg-red-500 text-white"/>
          </template>
        </FormKit>
      </FormKit>
    </FormKit>
  </div>
</template>

<style lang="postcss">
.formkit-outer[data-type='multi-step'] > .formkit-wrapper {
  max-width: 100%;
}

.formkit-outer[data-type='multi-step'] .formkit-step-actions {
  margin-top: 1rem;
}

.formkit-input:is([type="button"], [type="submit"]) {
  @apply btn;
}

</style>