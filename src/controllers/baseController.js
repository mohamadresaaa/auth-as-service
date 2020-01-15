import autoBind from "auto-bind"
import models from "../models"
import services from "../services"

export default class BaseController {
  constructor () {
    // Binding methods for using on child classes
    autoBind(this)

    // Set models
    this[Symbol.for("models")] = models

    // Set services
    this[Symbol.for("services")] = services
  }
}
