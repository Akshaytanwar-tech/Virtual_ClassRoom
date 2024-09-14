const Lecture = require("../../Models/Leacture");
const updateLeacture = async(req,res)=>{
    const lecture = await Lecture.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (lecture) {
      res.json(lecture);
    } else {
      res.status(404).send('Lecture not found');
    }
}
module.exports = updateLeacture;