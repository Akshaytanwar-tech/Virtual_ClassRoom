const Comment = require("../../Models/Comment");
const createComment = async (req, res) => {
  const comment = new Comment(req.body);
  try {
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = createComment;
