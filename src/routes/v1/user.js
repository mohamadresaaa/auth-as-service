const router = require("express").Router()

// Controllers
const { v1 } = require("../../controllers")

// Define routes
router.get("/", v1.user.profile)
router.get("/logout", v1.auth.signOut)

// Exports router
module.exports = router
