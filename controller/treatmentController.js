const treatmentSchema = require("./../model/treatmentModel");
exports.getAllTreatments = (request, response, next) => {
    treatmentSchema
    .find({})
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => next(error));
};
exports.getTreatmentById = (request, response, next) => {
    treatmentSchema
      .find({})
      .then((data) => {
        response.status(200).json(data);
      })
      .catch((error) => next(error));
  };