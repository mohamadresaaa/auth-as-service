const { v1 } = require("../../controllers")
const router = require("express").Router()

// Define routes
router.get("/activation/:code", v1.account.accountActivation)

// Exports router
module.exports = router
