import axios from 'axios';
import { cancelUrl, successUrl, stripePlan } from './configs';

export const redirectToCheckout = async ({
  clientReferenceId,
  customerEmail,
}) => {
  const stripe = window.Stripe(process.env.GATSBY_STRIPE_PUBLIC_KEY);
  const { error } = await stripe.redirectToCheckout({
    items: [
      {
        plan: stripePlan,
        quantity: 1,
      },
    ],
    successUrl,
    cancelUrl,
    clientReferenceId,
    customerEmail,
  });

  if (error) {
    console.warn('Error:', error);
  }
};

export async function createCustomerRecord(values) {
  const { data, status } = await axios.post('/.netlify/functions/addCustomer', values);

  if (status !== 200) {
    console.error('Error status', status);
    throw new Error(data.error.message);
  }

  return data;
}
