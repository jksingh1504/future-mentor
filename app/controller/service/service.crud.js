const service = require("../../services/service/service.crud.js");

exports.addService = function (req, res, next) {
  service
    .addService(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
};
exports.getServices = function (req,res,next){
  service
    .getServices()
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
}