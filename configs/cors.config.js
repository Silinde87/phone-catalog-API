const cors = require('cors');

module.exports = (app) => {
	app.use(
		cors({
			credentials: true,
			origin: ['http://localhost:3000', 'https://phone-catalog-sandy.vercel.app', 'https://*.vercel.app'],
		})
	);
};
