const Unit = require("../../Models/Unit");

const getAllUnits = async (req, res) => {
  const units = await Unit.find().populate("class").populate("sessions");
  res.json(units);
};

module.exports = getAllUnits;
