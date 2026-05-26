import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  items: [
    {
      medicineId: String,
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
});

export default mongoose.model("Cart", cartSchema);