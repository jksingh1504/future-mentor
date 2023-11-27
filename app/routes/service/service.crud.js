const {Router} = require("express");
const serviceController = require("../../controller/service/service.crud.js");
const router = Router();

router.post("/service/addService", serviceController.addService);
router.get("/service/getServices",serviceController.getServices)

module.exports = router;