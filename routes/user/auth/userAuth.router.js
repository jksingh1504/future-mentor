const {Router} = require("express");
const userController = require("../../../controller/user/auth/userAuth.controller.js");
const router = Router();

router.post("/user/auth/verify", userController.verify);
router.post("/user/auth/register",userController.register);
router.post("/user/auth/login",userController.login)

module.exports = router;