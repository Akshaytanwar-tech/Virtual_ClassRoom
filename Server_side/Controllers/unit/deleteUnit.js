const Unit = require("../../Models/Unit");

const deleteUnit = async (req, res) => {
  const result = await Unit.findByIdAndDelete(req.params.id);
  if (result) {
    res.status(204).send();
  } else {
    res.status(404).send("Unit not found");
  }
};

module.exports = deleteUnit;
