const mailService = require("../../../lib/mail")
const confirmAccount = require("../../../mailTemplates/confirmAccount")

/** Sign up user
 * @param {object} controller
 * @param {object} data from req.body
 * @param {string} data.email
 * @param {string} data.username
 * @param {string} data.password
 * @param {object} res from express
 * @returns {response} message
 */
module.exports = async (controller, data, res) => {
	try {
		// { User, VerificationCode } Model
		const { User, VerificationCode } = controller[Symbol.for("models")]

		// Create new user
		const newUser = await new User({ ...data }).save()

		// Create a verification code for account activation
		const newVerificationCode = await new VerificationCode({
			expiryDate: new Date(new Date().setDate(new Date().getDate() + 1)),
			for: "Account activation",
			user: newUser.id
		}).save()

		// Send verification code to email
		await mailService(newUser.email, "Confirm account", confirmAccount(newVerificationCode.code))

		// Return info message
		return controller.infoMessage(res, {
			message: "Please refer to your email for activation",
			status: 200
		})
	} catch (error) {
		throw error
	}
}
