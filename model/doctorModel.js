const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  image:String,
  fullName: String,
  jopProfile: String,
  history: String,
});
module.exports = mongoose.model("Doctors", doctorSchema);
