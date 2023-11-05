const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  serviceName: { type: String, required: true },
  shortDesc: { type: String, required: true },
  cityRef: [{ type: mongoose.Schema.Types.ObjectId, default: [] }],
  categoryRef: [{ type: mongoose.Schema.Types.ObjectId, default: [] }],
});

const service = mongoose.model("service", serviceSchema);
module.exports = service;