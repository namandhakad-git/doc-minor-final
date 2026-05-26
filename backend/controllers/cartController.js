import Cart from "../models/Cart.js";

// Add to cart (user specific)
export const addToCart = async (req, res) => {
  const userId = req.user.id;

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = new Cart({ userId, items: [] });
  }

  const existing = cart.items.find(
    (i) => i.medicineId === req.body.medicineId
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.items.push(req.body);
  }

  await cart.save();
  res.json(cart);
};

// Get cart
export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  res.json(cart || { items: [] });
};

// Remove item
export const removeItem = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });

  cart.items = cart.items.filter(
    (i) => i.medicineId !== req.params.id
  );

  await cart.save();
  res.json(cart);
};