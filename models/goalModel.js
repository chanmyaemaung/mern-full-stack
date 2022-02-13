const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			require: true,
			ref: 'User',
		},
		text: {
			type: String,
			require: [true, 'Add a text value'],
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

module.exports = mongoose.model('Goal', goalSchema)
