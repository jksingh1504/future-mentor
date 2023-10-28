const {Router} = require("express");
const serviceProviderController = require("../../controller/serviceProvider/serviceProvider.crud.js");
const router = Router();

router.post("/serviceProvider/addServiceProvider", serviceProviderController.addServiceProvider);
router.get("/serviceProvider/getByServiceId",serviceProviderController.getByServiceId)
router.get("/serviceProvider/getById",serviceProviderController.getById);
router.post("/serviceProvider/bookAppointment",serviceProviderController.bookAppointment)

module.exports = router;