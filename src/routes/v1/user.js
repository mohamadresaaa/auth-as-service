const router = require("express").Router()

// Controllers
const { v1 } = require("../../controllers")

// Middleware
const validator = require("../../middleware/validator")

// Validation schemas
const {
  deactivation
} = require("../../utilities/validatorSchema")

/** @define routes */

// Show user information
router.get("/",
  v1.user.profile)

// Sign out user
router.get("/logout",
  v1.auth.logout)

// User account Deactivation
router.post("/deactivation",
  validator(deactivation),
  v1.account.deactivation)

// Exports router
module.exports = router
