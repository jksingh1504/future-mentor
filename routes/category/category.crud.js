const {Router} = require("express");
const categoryController = require("../../controller/category/category.crud.js");
const router = Router();

router.post("/category/addCategory", categoryController.addCategory);

module.exports = router;