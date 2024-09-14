const Unit = require("../../Models/Unit");

const createUnit = async (req, res) => {
  const unit = new Unit(req.body);
  try {
    await unit.save();
    res.status(201).json(unit);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = createUnit;
