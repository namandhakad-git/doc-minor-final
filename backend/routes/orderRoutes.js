import express from "express";
import { placeOrder } from "../controllers/orderController.js";

const router = express.Router();

router.post("/orders", (req, res) => {
    res.json({
      message: "Order placed successfully"
    });
  });
export default router;