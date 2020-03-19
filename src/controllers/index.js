const fs = require("fs")
const path = require("path")

const controllers = {}

// read versions of controllers
const versions = fs.readdirSync(path.resolve(__dirname)).filter((item) => !item.match(/\.js/))

// read version directory
for (const version of versions) {
	controllers[version] = require(`${path.resolve(__dirname, version)}`)
}

module.exports = controllers
