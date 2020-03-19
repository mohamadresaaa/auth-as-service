const express = require("express")
const fs = require("fs")
const path = require("path")

const router = express.Router()

// Read version of routes
const versions = fs.readdirSync(path.resolve(__dirname)).filter((item) => !item.match(/\.js/))

// Use routes version
for (const version of versions) {
	router.use(`/${version}`, require(`${path.resolve(__dirname, version)}`))
}

module.exports = router
