const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const favouriteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
    unique: true,
  },
});
favouriteSchema.index({ user: 1, post: 1 });
module.exports = model('Favourite', favouriteSchema);
