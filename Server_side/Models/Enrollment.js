const mongoose = require("mongoose");
const { Schema } = mongoose;

const enrollmentSchema = new Schema({
  class: { type: Schema.Types.ObjectId, ref: "Class", required: true },
  student: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
module.exports = Enrollment;
