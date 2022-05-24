const cors = require('cors');

module.exports = (app) => {
	app.use(
		cors({
			credentials: true,
			origin: ['https://phone-catalog-sandy.vercel.app'],
		})
	);
};
