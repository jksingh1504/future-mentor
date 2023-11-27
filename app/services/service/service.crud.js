const service = require("../../model/service/service.model.js");

module.exports = { addService, getServices };

async function addService(serviceDetails) {
  try {
    const newService = new service(serviceDetails);
    await newService.save();
    return newService;
  } catch (error) {
    throw error;
  }
}
async function getServices() {
  try {
    const allServices = await service.find();
    return { allServices };
  } catch (error) {
    throw error;
  }
}
