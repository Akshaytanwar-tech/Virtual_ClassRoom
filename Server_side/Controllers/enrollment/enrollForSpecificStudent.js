const Enrollment = require("../../Models/Enrollment");

const enrollForSpecificStudent = async (req, res) => {
  const enrollments = await Enrollment.find({
    student: req.params.studentId,
  }).populate("class");
  res.json(enrollments);
};

module.exports = enrollForSpecificStudent;
