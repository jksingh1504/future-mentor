const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  serviceName: { type: String, required: true },
  shortDesc: { type: String, required: true },
});

const service = new mongoose.model("service", serviceSchema);
module.exports = service;
