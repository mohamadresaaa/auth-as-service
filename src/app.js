import express from "express"
import { createServer } from "http"
import mongoose from "mongoose"

/** @define Private properties and methods */
const provider = Symbol("Application provider")
const setupExpress = Symbol("Express installation")
const setupMongodb = Symbol("Mongodb installation and configuration")

export default class App {
  constructor () {
    this[provider] = express()
  }

  /** Run all methods
   * @public
   */
  initialize () {
    this[setupExpress]()
    this[setupMongodb]()
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

  /** Setup mongodb and set config
   * @private
   * @package mongoose
   */
  [setupMongodb] () {
    mongoose.Promise = global.Promise
    mongoose.connect("", {
      // set options
    }, err => console.log(err.message))
  }
}
