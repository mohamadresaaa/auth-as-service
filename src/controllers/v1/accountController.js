const baseController = require("../baseController")

// eslint-disable-next-line new-parens
module.exports = new class AccountController extends baseController {
  async activation (req, res, next) {
    try {
      await this[Symbol.for("services")].v1.activation(this, req.params.code, res)
    } catch (error) {
      next(error)
    }
  }
}
