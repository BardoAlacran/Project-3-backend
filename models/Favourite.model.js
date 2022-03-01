const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const favouriteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  game: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
    unique: true,
  },
});

module.exports = model('Favourite', userSchema);
