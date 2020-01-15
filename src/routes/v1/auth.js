import { login, passwordRecovery, register, resetPassword } from "../../utilities/validatorSchema"
import { v1 } from "../../controllers"
import { validator } from "../../middleware/validator"

const router = require("express").Router()

// Define routes
router.post("/register", validator(register), v1.auth.registration)
router.post("/login", validator(login), v1.auth.login)
router.post("/twoFactorAuth", (req, res) => res.send("twoFactorAuth"))
router.post("/recoveryPassword", validator(passwordRecovery), v1.auth.forgotPassword)
router.post("/resetPassword", validator(resetPassword), v1.auth.resetPassword)

// Exports router
module.exports = router
