const userServices = require("../../../services/user/auth/userAuth.services.js");

exports.verify = function (req, res, next) {
  userServices
    .verify(req)
    .then((data) => res.status(200).json(data))
    .catch((error) => next(error));
};
exports.register = function (req, res, next) {
  userServices
    .register(req)
    .then((data) => res.status(200).json(data))
    .catch((error) => next(error));
};
exports.login = function (req, res, next) {
  userServices
    .login(req.body)
    .then((data) => res.status(200).json(data))
    .catch((error) => next(error));
};