const fs = require("fs")
const path = require("path")

const v1 = {}

// Read controllers from directory
const controllers = fs.readdirSync(path.resolve(__dirname)).filter((item) => !item.match("index.js"))

// Import to v1
for (const controller of controllers) {
  v1[controller.replace("Controller.js", "")] = require(`${path.resolve(__dirname, controller)}`)
}

module.exports = v1
