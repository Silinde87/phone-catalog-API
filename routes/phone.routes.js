const express = require('express');
const router = express.Router();
const Phone = require('../models/Phone.model');
const { isPriceTypeNotValid, isAnyFieldEmpty, isPriceValueNotValid } = require('../utils/phoneValidators');

router.get('/phones', (req, res, next) => {
	Phone.find({})
		.then((phones) => res.status(200).json(phones))
		.catch((error) => {
			res.status(404).json({ message: error });
			console.error(error);
		});
});

router.post('/phones', (req, res, next) => {
	const {
		name,
		manufacturer,
		description,
		color,
		price,
		imageFileName,
		screen,
		processor,
		ram,
		camera,
		battery,
		storage,
		screenResolution,
	} = req.body;

	if (isPriceValueNotValid(price)) {
		return res.status(400).json({ message: 'price value should be higher than 0' });
	}

	if (isPriceTypeNotValid(price)) {
		return res.status(400).json({ message: 'price value should be type number' });
	}

	if (isAnyFieldEmpty(req.body)) {
		return res.status(400).json({ message: 'Please fill all fields according to requirements' });
	}

	Phone.create({
		name,
		manufacturer,
		description,
		color,
		price,
		imageFileName,
		screen,
		processor,
		ram,
		camera,
		battery,
		storage,
		screenResolution,
	})
		.then((newPhone) => {
			return res.status(200).json(newPhone);
		})
		.catch((error) => res.status(500).json({ message: error }));
});

module.exports = router;
