const mongoose = require("mongoose");
const connectTomongo = () => {
  mongoose
    .connect("mongodb+srv://new:akshay2574@cluster0.euy4ayz.mongodb.net/Virtual_classroom")
    .then(() => {
      console.log("[DB] Connection Success");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = connectTomongo;
