const router = require("express").Router()

// Controllers
const { v1 } = require("../../controllers")

// Middleware
const authorization = require("../../middleware/authorization")
const validator = require("../../middleware/validator")

// Validation schemas
const {
  login, passwordRecovery, register, resetPassword
} = require("../../utilities/validatorSchema")

/** @define routes */

// Sign up user
router.post("/register",
  validator(register),
  v1.auth.register)

// Sign in user
router.post("/login",
  validator(login),
  v1.auth.login)

// Sign out user
router.get("/logout",
  authorization,
  v1.auth.logout)

// Password recovery link
router.post("/passwordRecovery",
  validator(passwordRecovery),
  v1.auth.passwordRecovery)

// Verification code validation
router.get("/verifyCode/:code",
  v1.auth.verifyCode)

// Reset user password
router.post("/resetPassword",
  validator(resetPassword),
  v1.auth.resetPassword)

// Exports router
module.exports = router
