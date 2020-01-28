const router = require("express").Router()

// Controllers
const { v1 } = require("../../controllers")

/** @define routes */

// Status of users
router.get("/usersCondition",
  v1.analytics.usersCondition)

// Exports router
module.exports = router
