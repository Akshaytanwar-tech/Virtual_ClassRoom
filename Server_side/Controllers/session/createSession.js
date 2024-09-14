const Session = require("../../Models/Session");
const createSession = async(req,res)=>{
    const session = new Session(req.body);
    try {
      await session.save();
      res.status(201).json(session);
    } catch (error) {
      res.status(400).send(error);
    }
}
module.exports = createSession;