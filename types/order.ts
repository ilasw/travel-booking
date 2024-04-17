export type Order = {
  travel: string;
  customer: {
    name: string;
    email: string;
    phoneNumber: string;
    age: number
    gender: string;
  },
  payment: {
    type: string;
    notes: string;
  }
}