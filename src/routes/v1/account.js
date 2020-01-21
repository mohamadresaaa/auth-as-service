const router = require("express").Router()

// Controllers
const { v1 } = require("../../controllers")

// Middleware
const validator = require("../../middleware/validator")

// Validation schemas
const {
  reactivation
} = require("../../utilities/validatorSchema")

/** @define routes */

// User account activation
router.get("/activation/:code",
  v1.account.activation)

// User account reactivation
router.post("/reactivation",
  validator(reactivation),
  v1.account.reactivation)

// Exports router
module.exports = router
