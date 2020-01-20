const {
  login, passwordRecovery, register, resetPassword, verifyCode
} = require("../../utilities/validatorSchema")
const { v1 } = require("../../controllers")
const validator = require("../../middleware/validator")

const router = require("express").Router()

// Define routes
router.post("/register", validator(register), v1.auth.registration)
router.post("/login", validator(login), v1.auth.login)
router.get("/twoFactorAuth", (req, res) => {
  res.json(req.device)
})
router.post("/passwordRecovery", validator(passwordRecovery), v1.auth.forgotPassword)
router.post("/verifyCode", validator(verifyCode), v1.auth.verifyCode)
router.post("/resetPassword", validator(resetPassword), v1.auth.resetPassword)

// Exports router
module.exports = router
