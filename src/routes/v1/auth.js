const router = require("express").Router()

// Define routes
router.post("/register", (req, res) => res.send("register"))
router.post("/login", (req, res) => res.send("login"))
router.post("/twoFactorAuth", (req, res) => res.send("twoFactorAuth"))
router.post("/recoveryPassword", (req, res) => res.send("recoveryPassword"))
router.post("/resetPassword", (req, res) => res.send("resetPassword"))

// Exports router
module.exports = router
