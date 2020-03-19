const baseController = require("../baseController")

// eslint-disable-next-line new-parens
module.exports = new class analyticsController extends baseController {
	async usersCondition (req, res, next) {
		try {
			await this[Symbol.for("services")].v1.analytics.usersCondition(this, res)
		} catch (error) {
			next(error)
		}
	}
}
