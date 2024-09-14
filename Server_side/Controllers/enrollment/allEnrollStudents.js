const Enrollment = require("../../Models/Enrollment");

const allEnrollStudents = async (req, res) => {
  const enrollments = await Enrollment.find()
    .populate("class")
    .populate("student");
  res.json(enrollments);
};

module.exports = allEnrollStudents;
