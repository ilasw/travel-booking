import type {Order} from "~/types/order";

export const useBooking = async () => {
  const travel = ref<Order['travel']>('');
  const customer = ref<Order['customer']>({
    name: '',
    email: '',
    phoneNumber: '',
    age: 18,
    gender: ''
  });
  const payment = ref<Order['payment']>({
    type: '',
    notes: ''
  });

  const createBooking = async () => {
    const booking: Order = {
      travel: travel.value,
      customer: customer.value,
      payment: payment.value
    }
    await $fetch('/api/orders', {
      method: 'POST',
      body: JSON.stringify(booking)
    }).then(() => {
      alert('Booking created successfully, check the history!');
      window.location.reload();
    })
  }

  const myBookings = await $fetch<Order[]>('/api/orders')

  return {
    travel,
    customer,
    payment,
    createBooking,
    myBookings
  }
}