const serviceProviderServices = require("../../services/serviceProvider/serviceProvider.crud.js");

exports.addServiceProvider = function (req, res, next) {
  serviceProviderServices
    .addServiceProviders(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
};
exports.getByServiceId = function (req, res, next) {
  serviceProviderServices
    .getByServiceId(req)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
};
exports.getById = function (req, res, next) {
  serviceProviderServices
    .getById(req)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
};
exports.bookAppointment = function (req, res, next) {
  serviceProviderServices
    .bookAppointment(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
};
