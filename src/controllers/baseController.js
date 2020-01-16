const autoBind = require("auto-bind")
const models = require("../models")
const services = require("../services")
const { ErrorMessage } = require("../lib/messages")

module.exports = class BaseController {
  constructor () {
    // Binding methods for using on child classes
    autoBind(this)

    // Set models
    this[Symbol.for("models")] = models

    // Set services
    this[Symbol.for("services")] = services
  }

  /** Show public info message
   * @param response express 
   * @param data
   * @return response
   */
  infoMessage(res, data = { name, message, status, properties }) {
    res.status(status).json(data)
  }

  /** Show error message
   * @param data
   * @return errorMessage
   */
  errorMessage(data = { name, message, status, properties }) {
    throw new ErrorMessage({ ...data })
  }

}
