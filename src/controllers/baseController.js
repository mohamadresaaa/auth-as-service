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
   * @param {object} data
   * @param {string} data.message
   * @param {number} data.status
   * @param {any} data.properties
   * @return response
   */
  infoMessage (res, data) {
    res.status(data.status).json(data)
  }

  /** Show error message
   * @param {object} data
   * @param {string} data.name
   * @param {string} data.message
   * @param {number} data.status
   * @param {any} data.properties
   * @return errorMessage
   */
  errorMessage (data) {
    throw new ErrorMessage({ ...data })
  }

}
