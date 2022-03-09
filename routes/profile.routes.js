const express = require('express');
const { isAuthenticated } = require('../middleware/jwt.middleware');
const User = require('../models/User.model');

const router = express.Router();

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  User.findById(id)
    .then(user => {
      res.json(user);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'something on profile went wrong' });
    });
});

router.put('/edit', isAuthenticated, (req, res, next) => {
  //const { id } = req.params;
  const userId = req.payload._id;
  const { name } = req.body;

  // if (id !== userId) {
  //   return res.status(500).json({ message: 'whatadambdoin' });
  // }
  User.findByIdAndUpdate(userId, { name: name }, { new: true })
    .then(updatedUser => {
      console.log(updatedUser);
      res.status(201).json(updatedUser);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'something on profile went wrong' });
    });
});
module.exports = router;
