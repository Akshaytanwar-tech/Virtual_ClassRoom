const Session = require("../../Models/Session");
const getAllSession = async (req, res) => {
  const sessions = await Session.find().populate("unit").populate("lectures");
  res.json(sessions);
};
module.exports = getAllSession;
