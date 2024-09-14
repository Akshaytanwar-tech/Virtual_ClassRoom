const Unit = require("../../Models/Unit");

const getUnitById = async (req, res) => {
  const unit = await Unit.findById(req.params.id)
    .populate("class")
    .populate("sessions");
  if (unit) {
    res.json(unit);
  } else {
    res.status(404).send("Unit not found");
  }
};

module.exports = getUnitById;
