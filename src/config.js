require("dotenv").config()

module.exports = {
	database: {
		mongodb: {
			[Symbol.for("mongodb options")]: {
				useCreateIndex: true,
				useFindAndModify: false,
				useNewUrlParser: true,
				useUnifiedTopology: true
			},
			[Symbol.for("mongodb url")]: process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/jrawDB"
		}
	},
	server: {
		logMode: process.env.LOG_MODE || "dev",
		[Symbol.for("mode")]: process.env.MODE || "development",
		[Symbol.for("private key")]: process.env.PRIVATE_KEY || "privateKey",
		[Symbol.for("public key")]: process.env.PUBLIC_KEY || "publicKey",
		[Symbol.for("port")]: process.env.PORT || 300
	},
	service: {
		email: {
			apiKey: process.env.EMAIL_API_KEY
		},
		geolocation: {
			apiKey: process.env.GEO_LOCATION_API_KEY,
			baseUrl: process.env.GEO_LOCATION_BASE_URL
		}
	}
}
