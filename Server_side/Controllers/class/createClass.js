const Class = require("../../Models/Class");
const createClass = async (req, res) => {
  const classItem = new Class(req.body);
  try {
    await classItem.save();
    res.status(201).json(classItem);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = createClass;
