const service = require("../../model/service/service.model.js");
module.exports = { addServices, getServices, getByCategoryId };

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
async function getByCategoryId(params) {
  try {
    const { categoryRef } = params.query;
    const servicesByCategory = await service.find({
      categoryRef: { $in: [categoryRef] },
    });
    return {servicesByCategory};
  } catch (error) {
    throw error;
  }
}
