const express = require("express")
const { createServer } = require("http")

/** @define Private properties and methods */
const provider = Symbol("Application provider")
const setupExpress = Symbol("Express installation method")

module.exports = class App {
    constructor() {
        this[provider] = express()
    }

    initialize() {
        this[setupExpress]()
    }

    [setupExpress]() {
        const server = createServer(this[provider])
        server.listen(3000, console.log(`Server running on port ${this[provider].address().port}`))
    }
}