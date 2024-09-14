const Class = require("../../Models/Class");
const getClassById = async (req, res) => {
  const classItem = await Class.findById(req.params.id)
    .populate("instructor")
    .populate("units");
  if (classItem) {
    res.json(classItem);
  } else {
    res.status(404).send("Class not found");
  }
};
module.exports = getClassById;
