const baseController = require("../baseController")

// eslint-disable-next-line new-parens
module.exports = new class AccountController extends baseController {
  async currentUser (req, res, next) {
    try {
      await this[Symbol.for("services")].v1.currentUser(this, req.user, res)
    } catch (error) {
      next(error)
    }
  }
}
