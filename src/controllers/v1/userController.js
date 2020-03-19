const baseController = require("../baseController")

// eslint-disable-next-line new-parens
module.exports = new class UserController extends baseController {
	async profile (req, res, next) {
		try {
			await this[Symbol.for("services")].v1.user.profile(this, req.session, res)
		} catch (error) {
			next(error)
		}
	}

	async changePassword (req, res, next) {
		try {
			await this[Symbol.for("services")].v1.user.changePassword(this, req, res)
		} catch (error) {
			next(error)
		}
	}
}
