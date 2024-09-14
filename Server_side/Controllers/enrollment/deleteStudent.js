const Enrollment = require("../../Models/Enrollment");

const deleteStudent = async (req, res) => {
  const result = await Enrollment.findByIdAndDelete(req.params.id);
  if (result) {
    res.status(204).send();
  } else {
    res.status(404).send("Enrollment not found");
  }
};

module.exports = deleteStudent;
