const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  lecture: { type: Schema.Types.ObjectId, ref: "Lecture", required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  parentComment: { type: Schema.Types.ObjectId, ref: "Comment" },
  timestamp: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
