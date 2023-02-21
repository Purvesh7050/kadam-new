const stripe = require("stripe")(process.env.STRIPE_KEY);
const Order = require("../models/Order");

// create-payment-intent
module.exports.paymentIntent = async (req, res) => {
  try {
    const product = req.body;
    const price = Number(product.price);
    const amount = price * 100;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "inr",
      amount: amount,
      payment_method_types: ["card"],
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports.addOrder = async (req, res) => {
  try {
    const orderItems = req.body;
    const newOrders = new Order(orderItems);
    const order = await newOrders.save();

    res.status(200).send({
      success: true,
      message: "Order added successfully",
      order: order,
    });
  } catch (error) {
    console.log(error);
  }
};
