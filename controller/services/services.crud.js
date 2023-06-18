const services = require("../../services/services/services.crud");

exports.addServices = function (req, res, next) {
  services
    .addServices(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
};
