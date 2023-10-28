const services = require("../../services/services/services.crud");

exports.addServices = function (req, res, next) {
  services
    .addServices(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
};
exports.getServices = function (req, res, next) {
  services
    .getServices()
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
};
exports.getByCategoryId = function (req, res, next) {
  services
    .getByCategoryId(req)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
};