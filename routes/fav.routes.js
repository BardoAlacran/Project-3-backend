const express = require('express');
const { isAuthenticated } = require('../middleware/jwt.middleware');
const Favourite = require('../models/Favourite.model');

const router = express.Router();

router.get('/favs', isAuthenticated, (req, res, next) => {
  const userId = req.payload._id;
  Favourite.find({ user: userId })

    .populate('post')
    .then(userFavs => {
      console.log(userFavs);

      res.status(201).json(userFavs);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'something happened' });
    });
});
router.get('/:id/fav', isAuthenticated, (req, res, next) => {
  const userId = req.payload._id;
  const { id } = req.params;
  Favourite.find({ user: userId, post: id })
    .then(fav => {
      if (fav.length > 0) {
        return res.json({ isFavorite: true });
      }

      return res.json({ isFavorite: false });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'something went wrong' });
    });
});

router.post('/:id', isAuthenticated, (req, res, next) => {
  const userId = req.payload._id;
  const { id } = req.params;

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
router.delete('/:id/delete', isAuthenticated, (req, res, next) => {
  const userId = req.payload._id;
  const { id } = req.params;

  Favourite.findOneAndRemove({ user: userId, post: id })
    .then(() => {
      res.json({ message: 'delete completed' });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
