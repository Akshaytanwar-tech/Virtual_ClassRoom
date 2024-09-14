const Comment = require("../../Models/Comment");
const deleteComment = async(req,res)=>{
    const result = await Comment.findByIdAndDelete(req.params.id);
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).send('Comment not found');
    }
}
module.exports = deleteComment;