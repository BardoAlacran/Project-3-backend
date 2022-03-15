const express = require('express');
const { isAuthenticated } = require('../middleware/jwt.middleware');
const Favourite = require('../models/Favourite.model');

const router = express.Router();

router.get('/', isAuthenticated, (req, res, next) => {});

module.exports = router;
