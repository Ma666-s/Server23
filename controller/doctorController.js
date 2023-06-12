const doctorSchema = require("./../model/doctorModel");
exports.getAllDoctors = (request, response, next) => {
  doctorSchema
    .find({})
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => next(error));
};
exports.getDoctorById = (request, response, next) => {
    doctorSchema
      .find({})
      .then((data) => {
        response.status(200).json(data);
      })
      .catch((error) => next(error));
  };
  