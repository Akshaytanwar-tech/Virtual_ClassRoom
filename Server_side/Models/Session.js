const mongoose = require('mongoose');
const { Schema } = mongoose;
const sessionSchema = new Schema({
    unit: { type: Schema.Types.ObjectId, ref: 'Unit', required: true },
    title: { type: String, required: true },
    description: { type: String },
    lectures: [{ type: Schema.Types.ObjectId, ref: 'Lecture' }]
  });
  
  const Session = mongoose.model('Session', sessionSchema);
  module.exports = Session;
  