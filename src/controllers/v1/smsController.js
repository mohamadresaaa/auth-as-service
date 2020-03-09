const baseController = require("../baseController")

// eslint-disable-next-line new-parens
module.exports = new class SmsController extends baseController {
  async accountInfo (req, res, next) {
    try {
      await this[Symbol.for("services")].v1.sms.accountInfo(this, res)
    } catch (error) {
      next(error)
    }
  }

  async sendTextMessage (req, res, next) {
    try {
    } catch (error) {
      next(error)
    }
  }

  async sendVoiceMessage (req, res, next) {
    try {
    } catch (error) {
      next(error)
    }
  }

  async messagesStatus (req, res, next) {
    try {
    } catch (error) {
      next(error)
    }
  }

  async cancelMessage (req, res, next) {
    try {
    } catch (error) {
      next(error)
    }
  }
}
