const serviceProviderServices = require("../../services/serviceProvider/serviceProvider.crud.js");

exports.addServiceProvider = function (req, res, next) {
  serviceProviderServices
    .addServiceProviders(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
};