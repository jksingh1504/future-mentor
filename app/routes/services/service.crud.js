const {Router} = require("express");
const serviceController = require("../../controller/services/services.crud.js");
const router = Router();

router.post("/service/addService", serviceController.addServices);
router.get("/service/getServices",serviceController.getServices);
router.get("/service/getByCategory",serviceController.getByCategoryId);

module.exports = router;