const mongoose = require("mongoose");

const serviceProviderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  serviceDesc: { type: String, required: true },
  // speciality: { type: [String], default: [] },
  email: { type: String, required: true },
  contact: { type: Number, required: true },
  address: { type: String },
  rating: { type: Number },
  serviceRef:{ type: mongoose.Schema.Types.ObjectId, required: true },
  categoryRef: { type: mongoose.Schema.Types.ObjectId, required: true },
});

const serviceProvider = mongoose.model(
  "serviceProvider",
  serviceProviderSchema
);

module.exports = serviceProvider;
