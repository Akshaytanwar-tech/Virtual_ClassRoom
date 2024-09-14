const Enrollment = require("../../Models/Enrollment");

const createStudent = async (req, res) => {
  const enrollment = new Enrollment(req.body);
  try {
    await enrollment.save();
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = createStudent;
