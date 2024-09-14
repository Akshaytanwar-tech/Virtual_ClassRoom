const Session = require("../../Models/Session");
const updateSession = async(req,res)=>{
    const session = await Session.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (session) {
      res.json(session);
    } else {
      res.status(404).send('Session not found');
    }
}
module.exports = updateSession;