const express = require('express');
const Post = require('../models/Post.model');

const router = express.Router();

router.get('/', (req, res, next) => {});

router.get('/post/:id', (req, res, next) => {});

router.post('/add', (req, res, next) => {});

router.put('/post/:id', (req, res, next) => {});

router.delete('/post/:id', (req, res, next) => {});

module.exports = router;
