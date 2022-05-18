const express = require('express');
const router = express.Router();
const Phone = require('../models/Phone.model');

router.get('/phones', (req, res, next) => {
	Phone.find({})
		.then((phones) => res.status(200).json(phones))
		.catch((error) => {
			res.status(400).json(error);
			console.error(error);
		});
});

module.exports = router;
