const mongoose = require('mongoose');
const { Schema } = mongoose;

const classSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    instructor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    units: [{ type: Schema.Types.ObjectId, ref: 'Unit' }]
  });
  
  const Class = mongoose.model('Class', classSchema);
  module.exports = Class;
  