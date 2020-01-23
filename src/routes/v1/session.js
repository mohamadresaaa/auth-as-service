const router = require("express").Router()

// Controllers
const { v1 } = require("../../controllers")

/** @define routes */

// User account activation
router.get("/",
  v1.session.list)

// Exports router
module.exports = router
