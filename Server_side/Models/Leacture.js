const mongoose = require('mongoose');
const { Schema } = mongoose;
const lectureSchema = new Schema({
    session: { type: Schema.Types.ObjectId, ref: 'Session', required: true },
    title: { type: String, required: true },
    content: { type: String }  // You can also use a URL or other storage mechanism for multimedia
  });
  
  const Lecture = mongoose.model('Lecture', lectureSchema);
  module.exports = Lecture;
  