import autoBind from "auto-bind"

export default class BaseController {
  constructor () {
    // binding methods for using on child classes
    autoBind(this)
  }
}
