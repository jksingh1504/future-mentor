const cityServices = require("../../services/city/city.crud.js");

exports.addCity = function (req, res, next) {
  cityServices
    .addCity(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
};
exports.getCities = function (req, res, next) {
  cityServices
    .getCities()
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
};
