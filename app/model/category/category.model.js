const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  shortDesc: { type: String, required: true },
  cityRef: [{ type: mongoose.Schema.Types.ObjectId, default: [] }],
  serviceRef: [{ type: mongoose.Schema.Types.ObjectId, default: [] }],
});

const category = mongoose.model("category", categorySchema);
module.exports = category;