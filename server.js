const doctorRoute = require("./routes/doctorRoute");

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const server = express();
const port = process.env.PORT || 3000;
server.use(morgan("dev"));
server.use(cors());
server.use(express.json());

server.use("/doctors", doctorRoute);
server.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});
server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err });
});

mongoose
  .connect("mongodb+srv://mohamed:VSusS0kmpIr2uErv@firstapi.s4gtsfr.mongodb.net/")
  .then(() => {
    console.log("DataBase connected");
    server.listen(port, () => {
      console.log("I'm waiting to any order");
    });
  })
  .catch((error) => {
    console.log(error);
    console.log("Problem in connection!!!");
  });
