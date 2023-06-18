const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  state: { type: String, required: true },
});

const city = mongoose.model("city", citySchema);
module.exports = city;
