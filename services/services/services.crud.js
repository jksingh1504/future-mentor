const service = require("../../model/service/service.model.js");
module.exports = { addServices, getServices };

async function addServices(serviceDetails) {
  try {
    const newService = new service(serviceDetails);
    newService.save();
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
