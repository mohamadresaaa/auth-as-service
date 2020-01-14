import fs from "fs"
import path from "path"

const controllers = {}

// read versions of services
const versions = fs.readdirSync(path.resolve(__dirname)).filter(item => !item.match(/\.js/))

// read version directory
for (const version of versions) {
  controllers[version] = require(`${path.resolve(__dirname, version)}`)
}

module.exports = controllers
