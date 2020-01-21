const baseController = require("../baseController")

// eslint-disable-next-line new-parens
module.exports = new class AccountController extends baseController {
  async currentUser (req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
}
