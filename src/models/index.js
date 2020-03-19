const fs = require("fs")
const path = require("path")

const models = {}

// Read schemas
const schemas = fs.readdirSync(path.resolve(__dirname)).filter((item) => !item.match("index.js"))

// Import schema to models
for (const schema of schemas) {
	const key = schema[0].toUpperCase() + schema.slice(1).replace(".js", "")
	models[key] = require(`${path.resolve(__dirname, schema)}`)
}

module.exports = models
