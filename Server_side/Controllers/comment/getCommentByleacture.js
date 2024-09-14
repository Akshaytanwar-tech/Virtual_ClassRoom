const Comment = require("../../Models/Comment");
const getCommentByleacture = async (req, res) => {
  const comments = await Comment.find({ lecture: req.params.lectureId })
    .populate("user")
    .populate("parentComment");
  res.json(comments);
};
module.exports = getCommentByleacture;
