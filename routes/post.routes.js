const express = require('express');
const { isAuthenticated } = require('../middleware/jwt.middleware');
const Favourite = require('../models/Favourite.model');
const Post = require('../models/Post.model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Post.find({})
    .populate('user')
    .then(posts => {
      console.log('posts:', posts);
      res.json(posts);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'internal error' });
    });
});

router.post('/filter', (req, res, next) => {
  const { theme } = req.body;

  Post.find({ theme: theme })
    .populate('user')
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
    .populate('user')
    .then(post => {
      console.log(post);
      res.json(post);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'internal error dude' });
    });
});

router.post('/add', isAuthenticated, (req, res, next) => {
  const { body, level, theme } = req.body;
  const userId = req.payload._id;

  Post.create({ user: userId, body, level, theme })
    .then(postCreated => {
      res.status(201).json(postCreated);
    })
    .catch(error => {
      console.log(error);
      res.status(401).json({ message: 'add went wrong' });
    });
});

router.put('/post/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { body, level, theme } = req.body;

  Post.findByIdAndUpdate(id, { body, level, theme })
    .then(updatedPost => {
      console.log(updatedPost);
      res.json(updatedPost);
    })
    .catch(error => {
      console.log(error);
      res.status(401).json({ message: 'the edit went wrong' });
    });
});

router.delete('/post/:id/delete', (req, res, next) => {
  const { id } = req.params;

  Favourite.findOneAndRemove({ post: id }).catch(error => {
    console.log(error);
    res.status(401).json({ message: 'the delete went wrong' });
  });

  Post.findByIdAndDelete(id)
    .then(() => {
      res.json({ message: 'delete completed' });
      //hay que redireccionar a alg??n sitio, quiz??s desde el front
    })
    .catch(error => {
      console.log(error);
      res.status(401).json({ message: 'the delete went wrong' });
    });
});

router.get('/posts', isAuthenticated, (req, res, next) => {
  const userId = req.payload._id;

  Post.find({ user: userId })
    .then(userPosts => {
      // const [post] = userPosts;

      res.status(201).json(userPosts);
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
