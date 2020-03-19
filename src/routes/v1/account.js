const router = require("express").Router()

// Controllers
const { v1 } = require("../../controllers")

// Middleware
const authorization = require("../../middleware/authorization")
const validator = require("../../middleware/validator")

// Validation schemas
const {
	deactivation, reactivation
} = require("../../utilities/validatorSchema")

/** @define routes */

// User account activation
router.get("/activation/:code",
	v1.account.activation)

// User account Deactivation
router.post("/deactivation",
	authorization,
	validator(deactivation),
	v1.account.deactivation)

// User account reactivation
router.post("/reactivation",
	validator(reactivation),
	v1.account.reactivation)

// Exports router
module.exports = router
