const isAnyFieldEmpty = (req) => {
	if (
		!req.name ||
		!req.manufacturer ||
		!req.description ||
		!req.color ||
		!req.price ||
		!req.imageFileName ||
		!req.screen ||
		!req.processor ||
		!req.ram ||
		!req.camera ||
		!req.battery ||
		!req.storage ||
		!req.screenResolution
	) {
		console.log(req);
		return true;
	}
};

const isPriceTypeNotValid = (price) => {
	const TYPE_ALLOWED = 'number';
	if (typeof price !== TYPE_ALLOWED) {
		return true;
	}
};

const isPriceValueNotValid = (price) => {
	const MIN_PRICE = 0;
	if (price <= MIN_PRICE) {
		return true;
	}
};

module.exports = { isAnyFieldEmpty, isPriceTypeNotValid, isPriceValueNotValid };
