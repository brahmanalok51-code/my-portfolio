const express = require("express");
const router = express.Router();
const Controller = require("../controller/userController");

router.post("/contact", Controller.contactController);

module.exports = router;
