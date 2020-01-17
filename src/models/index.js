const fs = require("fs")
const path = require("path")

const models = {}

// Read schemas
const schemas = fs.readdirSync(path.resolve(__dirname)).filter((item) => !item.match("index.js"))

// Import schema to models
for (const schema of schemas) {
  models[schema.replace(".js", "")] = require(`${path.resolve(__dirname, schema)}`)
}

module.exports = models
