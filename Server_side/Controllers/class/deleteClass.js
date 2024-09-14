const Class = require("../../Models/Class");
const deleteClass = async (req, res) => {
  const result = await Class.findByIdAndDelete(req.params.id);
  if (result) {
    res.status(204).send();
  } else {
    res.status(404).send("Class not found");
  }
};
module.exports = deleteClass;
