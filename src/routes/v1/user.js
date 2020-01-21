const { v1 } = require("../../controllers")
const router = require("express").Router()

// Define routes
router.get("/", v1.account.currentUser)
router.get("/logout", v1.auth.logout)

// Exports router
module.exports = router
