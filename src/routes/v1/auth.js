const router = require("express").Router()

// Controllers
const { v1 } = require("../../controllers")

// Middleware
const validator = require("../../middleware/validator")

// Validation schemas
const {
  login, passwordRecovery, register, resetPassword
} = require("../../utilities/validatorSchema")

// Define routes
router.post("/register", validator(register), v1.auth.signUp)
router.post("/login", validator(login), v1.auth.signIn)
router.post("/passwordRecovery", validator(passwordRecovery), v1.auth.passwordRecovery)
router.get("/verifyCode/:code", v1.auth.verifyCode)
router.post("/resetPassword", validator(resetPassword), v1.auth.resetPassword)

// Exports router
module.exports = router
