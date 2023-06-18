const {Router} = require("express");
const cityController = require("../../controller/city/city.crud.js");
const router = Router();

router.post("/city/addCity", cityController.addCity);

module.exports = router;