import { v1 } from "../../controllers"
const router = require("express").Router()

// Define routes
router.post("/register", v1.auth.registration)
router.post("/login", v1.auth.login)
router.post("/twoFactorAuth", (req, res) => res.send("twoFactorAuth"))
router.post("/recoveryPassword", v1.auth.forgotPassword)
router.post("/resetPassword", v1.auth.resetPassword)

// Exports router
module.exports = router
