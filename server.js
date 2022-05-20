require('dotenv').config();
const express = require('express');

// DB config
require('./configs/db.config');

const app = express();

// Middleware config
require('./configs/middleware.config')(app);
require('./configs/cors.config')(app);

const phoneRouter = require('./routes/phone.routes');
app.use('/api', phoneRouter);

module.exports = app;
