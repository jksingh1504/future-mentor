const mongoose = require("mongoose");

const facilitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  shortDesc: { type: String, required: true },
  // speciality: { type: [String], default: [] },
  email: { type: String, required: true },
  contact: { type: Number, required: true },
  address: { type: String },
  rating: { type: Number },
  serviceRef:{ type: mongoose.Schema.Types.ObjectId, required: true },
  categoryRef: { type: mongoose.Schema.Types.ObjectId, required: true },
});

const facility = mongoose.model(
  "facility",
  facilitySchema
);

module.exports = facility;
