const router = require("express").Router()

// Controllers
const { v1 } = require("../../controllers")

/** @define routes */

// Show user information
router.get("/",
  v1.user.profile)

// Exports router
module.exports = router
