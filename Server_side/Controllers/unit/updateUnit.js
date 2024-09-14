const Unit = require("../../Models/Unit");

const updateUnit = async (req, res) => {
  const unit = await Unit.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (unit) {
    res.json(unit);
  } else {
    res.status(404).send("Unit not found");
  }
};

module.exports = updateUnit;
