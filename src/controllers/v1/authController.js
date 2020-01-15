import baseController from "../baseController"
import services from "../../services"

// eslint-disable-next-line new-parens
export default new class AuthController extends baseController {
  async registration (req, res, next) {
    try {
      const result = services.v1.signUp()
      res.send(result)
    } catch (error) {
      next(error)
    }
  }

  async login (req, res, next) {
    try {
      res.send("user login")
    } catch (error) {
      next(error)
    }
  }

  async forgotPassword (req, res, next) {
    try {
      res.send("forgot Password")
    } catch (error) {
      next(error)
    }
  }

  async resetPassword (req, res, next) {
    try {
      res.send("reset Password")
    } catch (error) {
      next(error)
    }
  }
}
