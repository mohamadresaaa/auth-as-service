const router = require("express").Router()

// Controllers
const { v1 } = require("../../controllers")

/** @define routes */

// List of sessions user
router.get("/",
  v1.session.list)

router.delete("/:id", v1.session.remove)

// Exports router
module.exports = router
