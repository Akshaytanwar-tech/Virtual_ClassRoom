const mongoose = require("mongoose");
const { Schema } = mongoose;
const unitSchema = new Schema({
  class: { type: Schema.Types.ObjectId, ref: "Class", required: true },
  title: { type: String, required: true },
  description: { type: String },
  sessions: [{ type: Schema.Types.ObjectId, ref: "Session" }],
});

const Unit = mongoose.model("Unit", unitSchema);
module.exports = Unit;
