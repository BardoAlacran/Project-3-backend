const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const postSchema = new Schema({
  user: { type: String, unique: true, required: true },
  date: { type: Date },
  isFav: { type: Boolean, default: false },
  body: { type: String, required: true },
  level: { type: String, enum: ['Easy', 'Medium', 'Hard', 'Godlike'] },
  theme: { type: String, enum: ['Gardening', 'Computing', 'Gaming', 'Science'] },
});

module.exports = model('Post', userSchema);
