import {Order} from "~/types/order";

const orders: Order[] = []

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method === 'POST') {
    const body = await readBody<Order>(event);
    orders.push(body);
    return body;
  }

  if (method === 'GET') {
    return orders;
  }

  return orders;
});