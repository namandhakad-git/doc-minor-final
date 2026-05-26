import Medicine from "../models/Medicine.js";

export const getMedicines = async (req, res) => {
  const data = await Medicine.find();
  res.json(data);
};