const express = require("express");
const doctorController = require("./../controller/doctorController")
const router=express.Router();


router.route("")
       .get(doctorController.getAllDoctors)

module.exports = router;