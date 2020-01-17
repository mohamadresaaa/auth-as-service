const autoBind = require("auto-bind")
const models = require("../models")
const services = require("../services")

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

}
