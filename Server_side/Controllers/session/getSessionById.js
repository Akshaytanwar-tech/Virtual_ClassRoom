const Session = require("../../Models/Session");
const getSessionById = async(req,res)=>{
    const session = await Session.findById(req.params.id).populate('unit').populate('lectures');
    if (session) {
      res.json(session);
    } else {
      res.status(404).send('Session not found');
    }
}
module.exports = getSessionById;