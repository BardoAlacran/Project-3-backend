const express = require('express');
const Post = require('../models/Post.model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Post.find({})
    .then(posts => {
      res.json(posts);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'internal error' });
    });
});

router.get('/post/:id', (req, res, next) => {
  const { id } = req.params;

  Post.findById(id)
    .then(post => {
      res.json(post);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'internal error' });
    });
});

router.post('/add', (req, res, next) => {
  const { body, level, theme } = req.body;
  Post.create({ isFav, body, level, theme })
    .then(postCreated => {
      res.status(201).json(postCreated);
    })
    .catch(error => {
      console.log(error);
      res.status(401).json({ message: 'something went wrong' });
    });
});

router.put('/post/:id', (req, res, next) => {});

router.delete('/post/:id', (req, res, next) => {});

module.exports = router;
