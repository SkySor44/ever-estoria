import { Stripe } from 'stripe'
const calculateOrderAmount = (items) => {
  let total = 0;
  items.forEach(({ price, quantity }) => {
    total += (price * quantity)
  })
  return parseFloat((Math.round(total * 100) / 100).toFixed(2)) * 100
}
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const stripe = new Stripe(config.stripeSecret, {} as Stripe.StripeConfig);
  const { items } = await useBody(event)
  const amount = calculateOrderAmount(items);

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
    payment_method_types: [
      'card'
    ]
  })

  return { clientSecret: paymentIntent.client_secret, amount }
})

