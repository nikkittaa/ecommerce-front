import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
const stripe = require('stripe')(process.env.STRIPE_SK);
import {buffer} from 'micro';

const endpointSecret = "whsec_ccb22cfc075669691eca94e0c16bb928af8a67f3f9776fadcd5464cd05a244a5";

export default async function handler(req, res){
    await mongooseConnect();

    const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const data = event.data.object;
      const orderId = data.metadata.orderId;
      const paid = data.payment_status === 'paid';
      if(orderId && paid){
        await Order.findByIdAndUpdate(orderId, {
            paid: true,
        });
      }
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).send('ok');

}


export const config = {
    api: {bodyParser: false,}
};

//upheld-flashy-adored-revel
//acct_1PoUVICeH6Ro0CWo