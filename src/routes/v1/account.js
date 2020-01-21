const router = require("express").Router()

// Controllers
const { v1 } = require("../../controllers")

// Define routes
router.get("/activation/:code", v1.account.accountActivation)

// Exports router
module.exports = router
