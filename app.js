require('dotenv/config');
require('./db');
const express = require('express');

const { isAuthenticated } = require('./middleware/jwt.middleware');
const allRoutes = require('./routes');
const authRouter = require('./routes/auth.routes');
const postRoutes = require('./routes/post.routes');
const protectedRoute = require('./routes/protected.routes');
const { application } = require('express');

const app = express();

require('./config')(app);

app.use('/api', allRoutes);
app.use('/api/protected', isAuthenticated, protectedRoute);
app.use('/auth', authRouter);
app.use('/', postRoutes);

require('./error-handling')(app);

module.exports = app;
