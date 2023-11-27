const {Router} = require("express");
const categoryController = require("../../controller/category/category.crud.js");
const router = Router();

router.post("/category/addCategory", categoryController.addCategory);
router.get("/category/getCategories",categoryController.getCategories);
router.get("/category/getByServiceRef",categoryController.getByServiceRef);

module.exports = router;