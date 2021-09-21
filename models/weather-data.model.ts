import mongoose from "mongoose";

export default mongoose.model(
  "asset-energy-data",
  new mongoose.Schema({
    h: String,
    c: String,
    f: String,
    hi: String,
    dp: String,
    k: String,
    t: Number,
    id: Number,
  }),
  "weather-data"
);
