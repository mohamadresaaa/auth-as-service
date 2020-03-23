const { ErrorMessage } = require("../../../lib/messages")

/** Sign in user if enabled two factor authenticate
 * @param {object} controller
 * @param {string} code from req.body
 * @param {string} ipAddress from req.ipAddress
 * @param {string} device from req.device
 * @param {string} geolocation from req.geolocation
 * @param {object} res from express
 * @returns {response} message
 */
module.exports = async (controller, { body: { code }, ipAddress, device, geolocation }, res) => {
	try {
		// VerificationCode model
		const { VerificationCode } = controller[Symbol.for("models")]

		// Find verification code
		const verificationCode = await VerificationCode.findOne({
			code,
			expiryDate: { $gt: new Date() },
			for: "Two factor auth",
			used: false
		}).populate({ path: "user" })

		// If exists, handle it
		if (verificationCode) {
			// Expire verification code
			await verificationCode.updateOne({ used: true })

			// Select user from verifyCode
			const { user } = verificationCode

			// Generate jwt token and save to session, return info message and user
			return controller.infoMessage(res, {
				message: "Sign in successfully completed",
				properties: { ...user.toAuthJson(await user.generateSession(ipAddress, device, geolocation)) },
				status: 200
			})
		}

		// Otherwise, return error message
		throw new ErrorMessage("Invalid verification code", "Verification code is incorrect", 400)
	} catch (error) {
		throw error
	}
}
