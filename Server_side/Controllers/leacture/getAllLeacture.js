const Lecture = require("../../Models/Leacture");
const getAllLeacture = async(req,res)=>{
    const lectures = await Lecture.find().populate('session');
    res.json(lectures);
}
module.exports = getAllLeacture;