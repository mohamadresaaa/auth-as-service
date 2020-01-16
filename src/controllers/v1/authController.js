const baseController = require("../baseController")

// eslint-disable-next-line new-parens
module.exports = new class AuthController extends baseController {
  async registration (req, res, next) {
    try {
      await this[Symbol.for("services")].v1.signUp(this, req.body, res)
      // res.send(result)
    } catch (error) {
      next(error)
    }
  }

  async login (req, res, next) {
    try {
      const result = this[Symbol.for("services")].v1.signIn()
      res.send(result)
    } catch (error) {
      next(error)
    }
  }

  async forgotPassword (req, res, next) {
    try {
      const result = this[Symbol.for("services")].v1.passwordRecovery()
      res.send(result)
    } catch (error) {
      next(error)
    }
  }

  async resetPassword (req, res, next) {
    try {
      const result = this[Symbol.for("services")].v1.resetPassword()
      res.send(result)
    } catch (error) {
      next(error)
    }
  }
}
