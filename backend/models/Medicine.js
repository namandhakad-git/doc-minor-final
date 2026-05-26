import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String,
});

export default mongoose.model("Medicine", medicineSchema);