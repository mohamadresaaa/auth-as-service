const { ErrorMessage } = require("../../../lib/messages")

/** Sign in user
 * @param {object} controller
 * @param {string} email from req.body
 * @param {string} password from req.body
 * @param {string} ipAddress from req.ipAddress
 * @param {string} device from req.device
 * @param {string} geolocation from req.geolocation
 * @param {object} res from express
 * @returns {response} message and user
 */

module.exports = async (controller, { body: { email, password }, ipAddress, device, geolocation }, res) => {
	try {
		// User, VerificationCode model
		const { User, VerificationCode } = controller[Symbol.for("models")]

		// Find user
		const user = await User.findOne({ $or: [{ email }, { username: email }] })

		// If find user, handle it
		if (user) {
			// If user status is inactive or block
			if (user.status === "inactive" || user.status === "block") {
				throw new ErrorMessage("Account status",
					user.status === "inactive"
						? "Your account is disabled Please activate your account"
						: "Your account has been blocked See support for reviewing your account",
					403)
			}

			// If password is the same
			if (await user.comparePassword(password)) {
				// If enabled two factor auth
				if(user.isTwoFactorAuth) {
					// Generate verification code
					const newVerificationCode = await new VerificationCode({
						code: (parseInt(Math.random() * 1000000000000000)).toString().substr(0, 6),
						expiryDate: new Date(new Date().setMinutes(new Date().getMinutes() + 2)),
						for: "Two factor auth",
						user: user.id
					}).save()
					
					// Send verification code to email of user
					
					// Return info message
					return controller.infoMessage(res, {
						message: "The verification code has been sent to your email",
						status: 301
					})
				}

				// Otherwise, generate jwt token and save to session, return info message and user
				return controller.infoMessage(res, {
					message: "Sign in successfully completed",
					properties: { ...user.toAuthJson(await user.generateSession(ipAddress, device, geolocation)) },
					status: 200
				})
			}

			// Otherwise, handle it
			throw new ErrorMessage("Unauthorized user", "Incorrect email or password", 401)
		}

		// Otherwise, user is found return error message
		throw new ErrorMessage("Unauthorized user", "Incorrect email or password", 401)
	} catch (error) {
		throw error
	}
}
