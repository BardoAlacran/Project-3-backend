const express = require('express');
const { isAuthenticated } = require('../middleware/jwt.middleware');
const Favourite = require('../models/Favourite.model');

const router = express.Router();

router.post('/:id', isAuthenticated, (req, res, next) => {
  const userId = req.payload._id;
  const { id } = req.params;
  console.log('req', req.payload._id);

  Favourite.create({ user: userId, post: id })
    .then(fav => {
      console.log(fav);
      res.status(201).json(fav);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'something went wrong' });
    });
});

module.exports = router;