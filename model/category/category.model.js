const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  shortDesc: { type: String, required: true },
});

const category = new mongoose.model("category", categorySchema);
module.exports = category;
