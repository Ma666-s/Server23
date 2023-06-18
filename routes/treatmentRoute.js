const express = require("express");
const treatmentController = require("./../controller/treatmentController")
const router=express.Router();


router.route("")
       .get(treatmentController.getAllTreatments)

module.exports = router;