import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: String,
  items: Array,
  totalAmount: Number,
  status: {
    type: String,
    default: "Processing"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Order", orderSchema);