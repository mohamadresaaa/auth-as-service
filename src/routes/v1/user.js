const router = require("express").Router()
const sessionRoutes = require("./session")

// Controllers
const { v1 } = require("../../controllers")

// Middleware
const validator = require("../../middleware/validator")

// Validation schemas
const { changePassword } = require("../../utilities/validatorSchema")

/** @define routes */

// Show user information
router.get("/",
	v1.user.profile)

// Update password of user and remove other sessions
router.post("/changePassword",
	validator(changePassword),
	v1.user.changePassword)

// Sessions management
router.use("/sessions",
	sessionRoutes)

// Exports router
module.exports = router
