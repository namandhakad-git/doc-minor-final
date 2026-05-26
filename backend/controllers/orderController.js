import Order from "../models/Order.js";
import Cart from "../models/Cart.js";

export const placeOrder = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });

  const order = await Order.create({
    userId: req.user.id,
    items: cart.items,
    totalAmount: req.body.totalAmount
  });

  cart.items = [];
  await cart.save();

  res.json(order);
};

export const getOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user.id });
  res.json(orders);
};