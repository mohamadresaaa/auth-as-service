const baseController = require("../baseController")

// eslint-disable-next-line new-parens
module.exports = new class AuthController extends baseController {
  async registration (req, res, next) {
    try {
      await this[Symbol.for("services")].v1.signUp(this, req.body, res)
    } catch (error) {
      next(error)
    }
  }

  async login (req, res, next) {
    try {
      await this[Symbol.for("services")].v1.signIn(this, req, res)
    } catch (error) {
      next(error)
    }
  }

  async logout (req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }

  async forgotPassword (req, res, next) {
    try {
      await this[Symbol.for("services")].v1.passwordRecovery(this, req.body, res)
    } catch (error) {
      next(error)
    }
  }

  async verifyCode (req, res, next) {
    try {
      await this[Symbol.for("services")].v1.verifyCode(this, req.params.code, res)
    } catch (error) {
      next(error)
    }
  }

  async resetPassword (req, res, next) {
    try {
      await this[Symbol.for("services")].v1.resetPassword(this, req.body, res)
    } catch (error) {
      next(error)
    }
  }
}
