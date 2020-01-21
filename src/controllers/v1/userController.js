const baseController = require("../baseController")

// eslint-disable-next-line new-parens
module.exports = new class UserController extends baseController {
  async profile (req, res, next) {
    try {
      await this[Symbol.for("services")].v1.currentUser(this, req.session, res)
    } catch (error) {
      next(error)
    }
  }
}
