const Comment = require("../../Models/Comment");
const updateComment = async (req, res) => {
  const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send("Comment not found");
  }
};
module.exports = updateComment;
