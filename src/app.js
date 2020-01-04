import express from "express"
import { createServer } from "http"

/** @define Private properties and methods */
const provider = Symbol("Application provider")
const setupExpress = Symbol("Express installation method")

export default class App {
  constructor () {
    this[provider] = express()
  }

  /** Run all methods
   * @public
   */
  initialize () {
    this[setupExpress]()
  }

  /** Setup server with express
   * @private
   * @package http
   * @package express
   */
  [setupExpress] () {
    const server = createServer(this[provider])
    server.listen(3030, console.log("Server running on port 3030"))
  }
}
