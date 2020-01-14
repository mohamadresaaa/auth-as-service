import autoBind from "auto-bind"
import models from "../models"

export default class BaseController {
  constructor () {
    // binding methods for using on child classes
    autoBind(this)

    // set models in symbol key
    this[Symbol.for("models")] = models
  }
}
