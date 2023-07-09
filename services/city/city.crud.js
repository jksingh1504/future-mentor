const city = require("../../model/city/city.model.js");
module.exports = { addCity, getCities };

async function addCity(cityDetails) {
  try {
    const newCity = new city(cityDetails);
    await newCity.save();
    return newCity;
  } catch (error) {
    throw error;
  }
}
async function getCities() {
  try {
    const allCities = await city.find();
    return { allCities };
  } catch (error) {
    throw error;
  }
}
