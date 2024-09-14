const Lecture = require("../../Models/Leacture");
const deleteLeacture = async (req, res) => {
  const result = await Lecture.findByIdAndDelete(req.params.id);
  if (result) {
    res.status(204).send();
  } else {
    res.status(404).send("Lecture not found");
  }
};
module.exports = deleteLeacture;
