const Class = require("../../Models/Class");
const updateClass = async (req, res) => {
  const classItem = await Class.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (classItem) {
    res.json(classItem);
  } else {
    res.status(404).send("Class not found");
  }
};
module.exports = updateClass;
