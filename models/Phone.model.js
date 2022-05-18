const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phoneSchema = new Schema(
	{
		name: { type: String, required: true },
		manufacturer: { type: String, required: true },
		description: { type: String, required: true },
		color: { type: String, required: true },
		price: { type: Number, required: true, minimum: 0 },
		imageFileName: { type: String, required: true },
		screen: { type: String, required: true },
		processor: { type: String, required: true },
		ram: { type: Number, required: true, minimum: 0 },
	},
	{
		timestamps: true,
		toJSON: {
			transform: (doc, ret) => {
				ret.id = doc._id;
				delete ret._id;
				delete ret.__v;

				return ret;
			},
		},
	}
);

const Phone = mongoose.model('Phone', phoneSchema);
module.exports = Phone;
