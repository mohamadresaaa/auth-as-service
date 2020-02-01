const baseController = require("../baseController")

// eslint-disable-next-line new-parens
module.exports = new class AccountController extends baseController {
  async activation (req, res, next) {
    try {
      await this[Symbol.for("services")].v1.account.activation(this, req.params.code, res)
    } catch (error) {
      next(error)
    }
  }

  async deactivation (req, res, next) {
    try {
      await this[Symbol.for("services")].v1.account.deactivation(this, req, res)
    } catch (error) {
      next(error)
    }
  }

  async reactivation (req, res, next) {
    try {
      await this[Symbol.for("services")].v1.account.reactivation(this, req.body, res)
    } catch (error) {
      next(error)
    }
  }
}
