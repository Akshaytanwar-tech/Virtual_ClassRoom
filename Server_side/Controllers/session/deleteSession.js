const Session = require("../../Models/Session");
const deleteSession = async(req,res)=>{
    const result = await Session.findByIdAndDelete(req.params.id);
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).send('Session not found');
    }
}
module.exports = deleteSession;