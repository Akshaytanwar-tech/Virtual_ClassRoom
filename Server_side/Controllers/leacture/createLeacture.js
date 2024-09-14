const Lecture = require("../../Models/Leacture");
const createLeacture = async(req,res)=>{
    const lecture = new Lecture(req.body);
    try {
      await lecture.save();
      res.status(201).json(lecture);
    } catch (error) {
      res.status(400).send(error);
    }
}
module.exports = createLeacture;