const {Router} = require("express");
const facilityController = require("../../controller/facility/facility.crud.js");
const router = Router();

router.post("/facility/addFacility", facilityController.addFacility);
router.get("/facility/getByCategoryRef",facilityController.getByCategoryRef)
router.get("/facility/getById",facilityController.getById);
router.post("/facility/bookAppointment",facilityController.bookAppointment)

module.exports = router;