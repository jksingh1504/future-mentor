const city = require("../../model/city/city.model.js");
module.exports = { addCity };

async function addCity(cityDetails) {
  try {
    const newCity = new city(cityDetails);
    await newCity.save();
    return newCity
  } catch (error) {
    throw error;
  }
}