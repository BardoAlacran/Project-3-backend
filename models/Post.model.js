const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const postSchema = new Schema({
  user: { type: string, unique: true, required: true },
  date: { type: date },
  isFav: { type: Boolean, default: false },
  body: { type: string, required: true },
  level: { type: string, enum: ['Easy', 'Medium', 'Hard', 'Godlike'] },
  theme: { type: string, enum: ['Gardening', 'Computing', 'Gaming', 'Science'] },
});

module.exports = model('Post', userSchema);
