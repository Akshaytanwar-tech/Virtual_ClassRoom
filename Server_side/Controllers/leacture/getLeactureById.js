const Lecture = require("../../Models/Leacture");
const getLeactureById = async(req,res)=>{
    const lecture = await Lecture.findById(req.params.id).populate('session');
    if (lecture) {
      res.json(lecture);
    } else {
      res.status(404).send('Lecture not found');
    }
}
module.exports = getLeactureById;