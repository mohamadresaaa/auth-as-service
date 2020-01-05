import { apiError404, apiErrorHandler } from "./middleware/errorHandle"
import bodyParser from "body-parser"
import { contentType } from "./utilities/contentType"
import { createServer } from "http"
import express from "express"
import helmet from "helmet"
import logger from "./utilities/logger"
import mongoose from "mongoose"
import morgan from "morgan"
import routes from "./routes"

/** @define Private properties and methods */
const provider = Symbol("Application provider")
const setupExpress = Symbol("Express installation")
const setupMongodb = Symbol("Mongodb installation and configuration")
const configuration = Symbol("Server packages configuration")
const setupRoutes = Symbol("Setup api routes")

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
    this[configuration]()
    this[setupRoutes]()
  }

  /** Setup server with express
   * @private
   * @package http, express
   */
  [setupExpress] () {
    const server = createServer(this[provider])
    server.listen(3030, logger("Server running on port 3030"))
  }

  /** Setup mongodb and set config
   * @private
   * @package mongoose
   */
  [setupMongodb] () {
    mongoose.Promise = global.Promise
    mongoose.connect("", {
      // set options
      useNewUrlParser: true
    }, err => logger(err.message, "red"))
  }

  /** Setup and using packages
   * @private
   * @package helmet, body-parser, morgan
   */
  [configuration] () {
    this[provider].use(helmet())
    this[provider].use(bodyParser.json())
    this[provider].use(bodyParser.urlencoded({ extended: true }))
    this[provider].use(contentType)
    this[provider].use(morgan("dev"))
  }

  /** Import api routes and errors management
   * @private
   */
  [setupRoutes] () {
    this[provider].use("/api", routes)
    this[provider].use("*", apiError404)
    this[provider].use(apiErrorHandler)
  }
}
