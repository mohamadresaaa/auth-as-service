const { Schema, model } = require("mongoose")

const sessionSchema = new Schema({
	device: {
		required: true,
		type: Object
	},
	expiryDate: {
		required: true,
		type: Date
	},
	geolocation: {
		required: true,
		type: Object
	},
	ip: {
		required: true,
		type: String
	},
	token: {
		required: true,
		type: String,
		unique: true
	},
	user: {
		ref: "User",
		required: true,
		type: Schema.Types.ObjectId
	}
}, { autoIndex: true, timestamps: true })

module.exports = model("session", sessionSchema)
