require('dotenv').config();
const express = require('express');

// DB config
require('./configs/db.config');

const app = express();

// Middleware config
require('./configs/middleware.config')(app);
require('./configs/cors.config')(app);

app.use((req, res, next) => {
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'OPTIONS, PUT, POST, DELETE, GET, PATCH');
		return res.status(200).json({});
	}
	next();
});

const phoneRouter = require('./routes/phone.routes');
app.use('/api', phoneRouter);

module.exports = app;
