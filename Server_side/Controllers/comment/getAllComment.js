const Comment = require("../../Models/Comment");

const getAllComments = async (req, res) => {
  const comments = await Comment.find()
    .populate("lecture")
    .populate("user")
    .populate("parentComment");
  res.json(comments);
};
module.exports = getAllComments;
