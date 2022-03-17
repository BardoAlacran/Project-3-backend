const timespan = require('jsonwebtoken/lib/timespan');
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: { type: Date, default: Date.now },
  body: { type: String, required: true },
  level: { type: String, enum: ['Easy', 'Medium', 'Hard', 'Godlike'] },
  theme: { type: String, enum: ['Gardening', 'Computing', 'Gaming', 'Science', 'Curiosities', 'Anime'] },
});

module.exports = model('Post', postSchema);
