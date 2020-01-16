const fs = require("fs")
const path = require("path")

const services = {}

// read versions of services
const versions = fs.readdirSync(path.resolve(__dirname)).filter((item) => !item.match(/\.js/))

// read version directory
for (const version of versions) {
  services[version] = require(`${path.resolve(__dirname, version)}`)
}

module.exports = services
