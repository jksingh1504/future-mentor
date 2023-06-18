const {Router} = require("express");
const serviceProviderController = require("../../controller/serviceProvider/serviceProvider.crud.js");
const router = Router();

router.post("/serviceProvider/addServiceProvider", serviceProviderController.addServiceProvider);

module.exports = router;