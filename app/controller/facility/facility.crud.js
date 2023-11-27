const facilityServices = require("../../services/facility/facility.crud.js");

exports.addFacility = function (req, res, next) {
  facilityServices
    .addFacility(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
};
exports.getByCategoryRef = function (req, res, next) {
  facilityServices
    .getByCategoryRef(req)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
};
exports.getById = function (req, res, next) {
  facilityServices
    .getById(req)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
};
exports.bookAppointment = function (req, res, next) {
  facilityServices
    .bookAppointment(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
};
